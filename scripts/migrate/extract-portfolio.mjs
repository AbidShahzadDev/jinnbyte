// Parses portfolio.html into typed data for the /work route.
import * as cheerio from "cheerio";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";

const TPL = "D:/jinnbyte/templates/portfolio.html";
const OUT = "D:/jinnbyte/src/data/portfolio.ts";

const manifest = JSON.parse(readFileSync("D:/jinnbyte/public/images/_manifest.json", "utf8"));
const byHash = new Map(manifest.assets.map((a) => [a.hash, a.file]));

/** Resolve an <img src> to a local extracted asset, or leave a remote URL alone. */
function resolveSrc(src = "") {
  const m = /^data:image\/[a-z+.-]+;base64,([A-Za-z0-9+/=]+)$/.exec(src.trim());
  if (!m) return src;
  const hash = createHash("sha1").update(Buffer.from(m[1], "base64")).digest("hex").slice(0, 8);
  return byHash.get(hash) ?? src;
}

const html = readFileSync(TPL, "utf8");
const $ = cheerio.load(html);
const txt = (el) => (el?.text() ?? "").replace(/\s+/g, " ").trim();
const kick = (scope) => txt($(scope).find(".kicker").first().clone().children(".us").remove().end());

/** Old flat filename -> new route slug. */
const slugOf = (href) => href.replace(/^case-|\.html$/g, "");

const industries = $("#indrow .indp")
  .map((_, el) => {
    const $el = $(el);
    return {
      cat: $el.attr("data-cat"),
      label: txt($el.find(".ind-top b")),
      blurb: txt($el.find(".ind-body p")),
      image: $el.find("img").attr("src") ?? "",
      // Raw <path d="…"> data, rendered inside a 28x28 viewBox.
      icon: $el
        .find(".ind-top svg path")
        .map((__, p) => $(p).attr("d"))
        .get(),
      cta: txt($el.find(".ind-go")),
    };
  })
  .get();

const projects = $("#grid .pj")
  .map((_, el) => {
    const $el = $(el);
    const img = $el.find(".pj-media img");
    return {
      slug: slugOf($el.attr("href") ?? ""),
      cat: $el.attr("data-cat"),
      tag: txt($el.find(".pj-tag")),
      name: txt($el.find(".pj-name")),
      outcome: txt($el.find(".pj-out")),
      kpi: { value: txt($el.find(".pj-kpi b")), label: txt($el.find(".pj-kpi i")) },
      chips: $el.find(".pj-chip").map((__, c) => txt($(c))).get(),
      image: resolveSrc(img.attr("src")),
      alt: img.attr("alt") ?? "",
      // e.g. "center 72%" — preserves the art direction from the template.
      objectPosition: /object-position:\s*([^;]+)/.exec(img.attr("style") ?? "")?.[1]?.trim() ?? "center",
    };
  })
  .get();

const filters = $("#filters .fbtn")
  .map((_, el) => ({ cat: $(el).attr("data-cat"), label: txt($(el)) }))
  .get();

const data = {
  hero: {
    kicker: kick("#pf-hero"),
    title: txt($("#pf-hero h1")),
    lede: txt($("#pf-hero .pfh-in > div").eq(1).find("p")),
  },
  industries: {
    kicker: kick("#industries"),
    title: txt($("#industries h2")),
    lede: txt($("#industries .ind-head p")),
    panels: industries,
  },
  work: {
    kicker: kick("#work"),
    title: txt($("#work h2")),
    lede: txt($("#work .sec-head p")),
    filters,
    projects,
  },
  cta: {
    kicker: kick("#pf-cta"),
    title: txt($("#pf-cta h2")),
    body: txt($("#pf-cta .pfcta > div").eq(1).find("p")),
  },
};

const out = `/** Content for the /work route, lifted from the original portfolio.html template. */

export type Project = {
  slug: string;
  cat: string;
  tag: string;
  name: string;
  outcome: string;
  kpi: { value: string; label: string };
  chips: string[];
  image: string;
  alt: string;
  /** CSS object-position, preserving each card's art direction. */
  objectPosition: string;
};

export type IndustryPanel = {
  cat: string;
  label: string;
  blurb: string;
  image: string;
  /** Path "d" attributes drawn inside a 28x28 viewBox. */
  icon: string[];
  cta: string;
};

export type Portfolio = {
  hero: { kicker: string; title: string; lede: string };
  industries: { kicker: string; title: string; lede: string; panels: IndustryPanel[] };
  work: {
    kicker: string;
    title: string;
    lede: string;
    filters: { cat: string; label: string }[];
    projects: Project[];
  };
  cta: { kicker: string; title: string; body: string };
};

export const portfolio: Portfolio = ${JSON.stringify(data, null, 2)};

export const projects: readonly Project[] = portfolio.work.projects;
`;

writeFileSync(OUT, out, "utf8");
console.log(`projects: ${projects.length}, industries: ${industries.length}, filters: ${filters.length}`);
console.log("slugs:", projects.map((p) => p.slug).join(", "));
console.log("images:", projects.map((p) => (p.image.startsWith("http") ? "remote" : p.image)).join("\n         "));
