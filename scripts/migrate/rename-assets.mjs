// Second migration pass: give the ambiguous extracted assets semantic filenames.
import { createHash } from "node:crypto";
import { readFileSync, readdirSync, renameSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = "D:/jinnbyte";
const TPL = join(ROOT, "templates");
const IMG = join(ROOT, "public/images");

const slug = (s) =>
  s.toLowerCase().replace(/&[a-z]+;/g, " ").replace(/\+/g, "-plus").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const hashOf = (b64) => createHash("sha1").update(Buffer.from(b64, "base64")).digest("hex").slice(0, 8);

// hash -> desired basename (no extension)
const names = new Map();

// 1. Tech chips on solutions: label is the text right after the <img> inside .tchip
const sol = readFileSync(join(TPL, "solutions.html"), "utf8");
for (const m of sol.matchAll(
  /<img class="ti" src="data:image\/[a-z+.-]+;base64,([A-Za-z0-9+/=]+)"[^>]*>([^<]+)</g
)) {
  names.set(hashOf(m[1]), "tech/" + slug(m[2].trim()));
}

// 2. Case-study hero backgrounds: one per case page
for (const f of readdirSync(TPL).filter((n) => n.startsWith("case-"))) {
  const html = readFileSync(join(TPL, f), "utf8");
  const m = /class="csh-bg"[^>]*src="data:image\/[a-z+.-]+;base64,([A-Za-z0-9+/=]+)"/.exec(html)
    || /<img[^>]*src="data:image\/webp;base64,([A-Za-z0-9+/=]+)"/.exec(html);
  if (m) names.set(hashOf(m[1]), "cases/" + f.replace(/^case-|\.html$/g, "") + "-hero");
}

// 3. Location flags: <img class="flag" ...><h4>City
const idx = readFileSync(join(TPL, "index.html"), "utf8");
for (const m of idx.matchAll(
  /<img class="flag"[^>]*src="data:image\/[a-z+.-]+;base64,([A-Za-z0-9+/=]+)"[^>]*>\s*<h4>([^<]+)</g
)) {
  const city = m[2].trim();
  const country = { California: "usa", Toronto: "canada", Lahore: "pakistan" }[city] ?? slug(city);
  names.set(hashOf(m[1]), "flags/" + country);
}

// 4. Brand logo: .lg-light / .lg-dark
for (const m of idx.matchAll(
  /class="(lg-light|lg-dark)"[^>]*src="data:image\/[a-z+.-]+;base64,([A-Za-z0-9+/=]+)"/g
)) {
  names.set(hashOf(m[2]), "logo-" + (m[1] === "lg-light" ? "light" : "dark"));
}

// Apply: find the current filename for each hash via the manifest, then move it.
const manifestPath = join(IMG, "_manifest.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
let moved = 0;
for (const a of manifest.assets) {
  const want = names.get(a.hash);
  if (!want) continue;
  const ext = a.file.split(".").pop();
  const from = join(IMG, a.file.replace("/images/", ""));
  const to = join(IMG, `${want}.${ext}`);
  if (!existsSync(from) || from === to) continue;
  const dir = to.slice(0, to.lastIndexOf("\\") === -1 ? to.lastIndexOf("/") : to.lastIndexOf("\\"));
  if (!existsSync(dir)) (await import("node:fs")).mkdirSync(dir, { recursive: true });
  renameSync(from, to);
  a.file = `/images/${want}.${ext}`;
  moved++;
}
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log(`renamed ${moved} assets`);
