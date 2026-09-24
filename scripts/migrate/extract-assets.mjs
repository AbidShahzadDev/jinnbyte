// One-time migration tool: pull base64 data URIs out of the JinnByte HTML templates
// into real files under public/images, and emit a manifest for the porting work.
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = "D:/jinnbyte";
const TPL = join(ROOT, "templates");
const OUT = join(ROOT, "public/images");
mkdirSync(OUT, { recursive: true });

const EXT = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
  "image/avif": "avif",
};

const slug = (s) =>
  (s || "")
    .toLowerCase()
    .replace(/&[a-z]+;/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .split("-")
    .slice(0, 7)
    .join("-");

// Context heuristics: what was this image doing in the original markup?
function describe(before, after) {
  // <img ... alt="...">  — alt may sit either side of src
  const alt =
    /alt="([^"]{2,90})"/.exec(after)?.[1] ??
    [...before.matchAll(/alt="([^"]{2,90})"/g)].pop()?.[1];
  if (alt) return { kind: "img", label: slug(alt) };

  // class on the img tag itself
  const cls = [...before.matchAll(/class="([^"]{1,60})"/g)].pop()?.[1];

  // CSS rule:  .foo .bar{background-image:url("data:...
  const sel = /([.#][\w-]+(?:[\s.>#][\w.-]+)*)\s*\{[^{}]*$/.exec(before)?.[1];
  if (sel) return { kind: "css", label: slug(sel) };

  if (cls) return { kind: "img", label: slug(cls) };
  return { kind: "unknown", label: "" };
}

const byHash = new Map();
const perFile = {};

for (const f of readdirSync(TPL).filter((n) => n.endsWith(".html"))) {
  const html = readFileSync(join(TPL, f), "utf8");
  const page = f.replace(/\.html$/, "");
  perFile[page] = [];

  const re = /data:(image\/[a-z+.-]+);base64,([A-Za-z0-9+/=]+)/g;
  let m;
  while ((m = re.exec(html))) {
    const [full, mime, b64] = m;
    const buf = Buffer.from(b64, "base64");
    const hash = createHash("sha1").update(buf).digest("hex").slice(0, 8);
    const ctx = describe(html.slice(Math.max(0, m.index - 400), m.index), html.slice(m.index + full.length, m.index + full.length + 400));

    if (!byHash.has(hash)) {
      byHash.set(hash, {
        hash,
        mime,
        ext: EXT[mime] ?? "bin",
        bytes: buf.length,
        buf,
        labels: new Set(),
        pages: new Set(),
        kind: ctx.kind,
      });
    }
    const rec = byHash.get(hash);
    if (ctx.label) rec.labels.add(ctx.label);
    rec.pages.add(page);
    perFile[page].push({ hash, len: full.length });
  }

  // URL-encoded (non-base64) SVG data URIs, used for small CSS ornaments
  const svgCount = (html.match(/data:image\/svg\+xml,/g) || []).length;
  if (svgCount) perFile[page].push({ inlineSvgOrnaments: svgCount });
}

// Assign filenames: semantic label when we have one, disambiguated by hash
const used = new Set();
const manifest = [];
for (const rec of [...byHash.values()].sort((a, b) => b.bytes - a.bytes)) {
  const base = [...rec.labels][0] || `asset-${rec.hash}`;
  let name = `${base}.${rec.ext}`;
  if (used.has(name)) name = `${base}-${rec.hash}.${rec.ext}`;
  used.add(name);
  writeFileSync(join(OUT, name), rec.buf);
  manifest.push({
    file: `/images/${name}`,
    hash: rec.hash,
    mime: rec.mime,
    kb: +(rec.bytes / 1024).toFixed(1),
    kind: rec.kind,
    labels: [...rec.labels],
    pages: [...rec.pages],
  });
}

writeFileSync(
  join(ROOT, "public/images/_manifest.json"),
  JSON.stringify({ assets: manifest, perPage: perFile }, null, 2)
);

const total = manifest.reduce((n, a) => n + a.kb, 0);
console.log(`unique assets: ${manifest.length}  |  total ${(total / 1024).toFixed(1)} MB`);
console.log(`by kind:`, manifest.reduce((acc, a) => ((acc[a.kind] = (acc[a.kind] || 0) + 1), acc), {}));
console.log("\nlargest 20:");
for (const a of manifest.slice(0, 20)) console.log(`  ${String(a.kb).padStart(7)} KB  ${a.file}   [${a.pages.join(",")}]`);
