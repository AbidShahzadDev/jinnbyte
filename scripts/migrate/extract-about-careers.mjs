// Parses company-about.html and careers.html into typed data modules.
import * as cheerio from "cheerio";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";

const manifest = JSON.parse(readFileSync("D:/jinnbyte/public/images/_manifest.json", "utf8"));
const byHash = new Map(manifest.assets.map((a) => [a.hash, a.file]));
const resolveSrc = (src = "") => {
  const m = /^data:image\/[a-z+.-]+;base64,([A-Za-z0-9+/=]+)$/.exec((src || "").trim());
  if (!m) return src || "";
  const hash = createHash("sha1").update(Buffer.from(m[1], "base64")).digest("hex").slice(0, 8);
  return byHash.get(hash) ?? "";
};

function load(file) {
  const $ = cheerio.load(readFileSync(`D:/jinnbyte/templates/${file}`, "utf8"));
  const txt = (el) => (el?.text() ?? "").replace(/\s+/g, " ").trim();
  const strip = (sel) => txt($(sel).first().clone().children(".us").remove().end());
  const lines = (sel) => {
    const el = $(sel).first().clone();
    el.children(".us").remove();
    el.find("br").replaceWith("\n");
    return el.text().split("\n").map((s) => s.replace(/\s+/g, " ").trim()).filter(Boolean);
  };
  const svgOf = (el) => {
    const svg = el.find("svg").first();
    return { viewBox: svg.attr("viewBox") ?? "0 0 24 24", markup: (svg.html() ?? "").replace(/\s+/g, " ").trim() };
  };
  return { $, txt, strip, lines, svgOf };
}

/* ------------------------------------------------------------------ *
 * About
 * ------------------------------------------------------------------ */
{
  const { $, txt, strip, lines, svgOf } = load("company-about.html");

  const about = {
    hero: {
      kicker: strip("#ab2-hero .kicker"),
      title: lines("#ab2-hero h1"),
      lede: txt($("#ab2-hero .ab2-lede")),
      image: resolveSrc($("#ab2-hero .abbg").attr("src")),
      imageAlt: $("#ab2-hero .abbg").attr("alt") ?? "",
      stats: $("#ab2-hero .ab2-stat")
        .map((_, el) => {
          const n = $(el).find(".n");
          return {
            // Some values are literal (2018); the rest animate from data-count.
            value: n.attr("data-count") ? "" : txt(n),
            to: Number(n.attr("data-count") ?? 0),
            suffix: n.attr("data-suffix") ?? "",
            plus: Boolean(n.attr("data-plus")),
            label: txt($(el).find(".l")),
          };
        })
        .get(),
    },
    value: {
      kicker: strip("#ab-solve .kicker"),
      title: txt($("#ab-solve h2")),
      lede: txt($("#ab-solve .lead")),
      cells: $("#ab-solve .abcell")
        .map((_, el) => ({
          title: txt($(el).find("h3")),
          blurb: txt($(el).find("p")),
          icon: svgOf($(el).find(".ic")),
        }))
        .get(),
    },
    think: {
      kicker: strip("#ab-think .kicker"),
      title: lines("#ab-think h2"),
      lede: txt($("#ab-think .lead")),
      columns: $("#ab-think .abcol")
        .map((_, el) => ({ title: txt($(el).find("h3")), blurb: txt($(el).find("p")) }))
        .get(),
    },
    believe: {
      kicker: strip("#ab-vision .kicker"),
      title: lines("#ab-vision h2"),
      paragraphs: $("#ab-vision .believe-body p").map((_, p) => txt($(p))).get(),
    },
    story: {
      kicker: strip("#ab-edge .kicker"),
      title: lines("#ab-edge h2"),
      paragraphs: $("#ab-edge .story-body p").map((_, p) => txt($(p))).get(),
    },
    team: {
      kicker: strip("#ab-team .kicker"),
      title: txt($("#ab-team h2")),
      lede: txt($("#ab-team .lead")),
      members: $("#ab-team .tm")
        .map((_, el) => ({
          name: txt($(el).find("h3")),
          role: txt($(el).find(".tmrole")),
          photo: resolveSrc($(el).find(".tmph img").attr("src")),
          linkedin: $(el).find(".tmli").attr("href") ?? "",
        }))
        .get(),
    },
    culture: {
      kicker: strip("#ab-culture .kicker"),
      title: lines("#ab-culture h2"),
      paragraphs: $("#ab-culture .abcult-top .lead").map((_, p) => txt($(p))).get(),
      gallery: $("#ab-culture .abcult-track img")
        .map((_, el) => ({ src: $(el).attr("src") ?? "", alt: $(el).attr("alt") ?? "" }))
        .get(),
    },
    impact: {
      kicker: strip("#ab-impact .kicker"),
      title: lines("#ab-impact h2"),
      paragraphs: $("#ab-impact .impact-copy p").map((_, p) => txt($(p))).get(),
      image: $("#ab-impact .impact-media img").attr("src") ?? "",
      imageAlt: $("#ab-impact .impact-media img").attr("alt") ?? "",
    },
    cta: {
      kicker: strip("#ab-cta .kicker"),
      title: txt($("#ab-cta h2")),
      body: txt($("#ab-cta .abcta p")),
    },
  };

  const out = `/** Content for the /about route, lifted from the original company-about.html template. */

export type InlineIcon = { viewBox: string; markup: string };

export type TeamMember = { name: string; role: string; photo: string; linkedin: string };

export type About = {
  hero: {
    kicker: string;
    title: string[];
    lede: string;
    image: string;
    imageAlt: string;
    stats: { value: string; to: number; suffix: string; plus: boolean; label: string }[];
  };
  value: { kicker: string; title: string; lede: string; cells: { title: string; blurb: string; icon: InlineIcon }[] };
  think: { kicker: string; title: string[]; lede: string; columns: { title: string; blurb: string }[] };
  believe: { kicker: string; title: string[]; paragraphs: string[] };
  story: { kicker: string; title: string[]; paragraphs: string[] };
  team: { kicker: string; title: string; lede: string; members: TeamMember[] };
  culture: { kicker: string; title: string[]; paragraphs: string[]; gallery: { src: string; alt: string }[] };
  impact: { kicker: string; title: string[]; paragraphs: string[]; image: string; imageAlt: string };
  cta: { kicker: string; title: string; body: string };
};

export const about: About = ${JSON.stringify(about, null, 2)};
`;
  writeFileSync("D:/jinnbyte/src/data/about.ts", out, "utf8");

  console.log("ABOUT");
  console.log("  hero image:", about.hero.image || "MISSING", "| stats:", about.hero.stats.length);
  console.log("  value cells:", about.value.cells.length, "| think cols:", about.think.columns.length);
  console.log("  believe:", about.believe.paragraphs.length, "| story:", about.story.paragraphs.length);
  console.log("  team:", about.team.members.length, "| photos:", about.team.members.filter((m) => m.photo).length);
  console.log("  culture gallery:", about.culture.gallery.length, "| impact paras:", about.impact.paragraphs.length);
}

/* ------------------------------------------------------------------ *
 * Careers
 * ------------------------------------------------------------------ */
{
  const { $, txt, strip, lines, svgOf } = load("careers.html");

  const sectionData = (id) => ({
    kicker: strip(`#${id} .kicker`),
    title: lines(`#${id} h2`),
    lede: txt($(`#${id} .sec-head p, #${id} .lead`).first()),
  });

  const careers = {
    hero: {
      kicker: strip("#cr-hero .kicker"),
      // The template italicises the last word with <em>; kept as a separate field.
      title: txt($("#cr-hero h1").clone().children("em").remove().end()),
      titleAccent: txt($("#cr-hero h1 em")),
      lede: txt($("#cr-hero .crh-txt > p").first()),
      image: $("#cr-hero .crh-fig img").attr("src") ?? "",
      imageAlt: $("#cr-hero .crh-fig img").attr("alt") ?? "",
      ctaEmail: $("#cr-hero a[href^='mailto:']").attr("href")?.replace("mailto:", "") ?? "",
    },
    expect: {
      kicker: strip("#cr-expect .kicker"),
      title: txt($("#cr-expect h2")),
      lede: txt($("#cr-expect .lead")),
      perks: $("#cr-expect .pk")
        .map((_, el) => ({ label: txt($(el).find("b")), icon: $(el).find("img").attr("src") ?? "" }))
        .get(),
    },
    culture: {
      kicker: strip("#cr-culture .kicker"),
      title: txt($("#cr-culture h2")),
      blocks: $("#cr-culture .crc-two > div")
        .map((_, el) => ({ title: txt($(el).find("h4")), blurb: txt($(el).find("p")) }))
        .get(),
      gallery: $("#cr-culture .abcult-track img")
        .map((_, el) => ({ src: $(el).attr("src") ?? "", alt: $(el).attr("alt") ?? "" }))
        .get(),
    },
    hiring: {
      kicker: strip("#cr-hire .kicker"),
      title: txt($("#cr-hire h2")),
      lede: txt($("#cr-hire .lead")),
      steps: $("#cr-hire .hstep")
        .map((_, el) => ({
          title: txt($(el).find("h3")),
          blurb: txt($(el).find("p")),
          icon: (() => {
            const svg = $(el).find(".hic svg").first();
            return {
              viewBox: svg.attr("viewBox") ?? "0 0 72 72",
              strokeWidth: svg.attr("stroke-width") ?? "0.9",
              markup: (svg.html() ?? "").replace(/\s+/g, " ").trim(),
            };
          })(),
        }))
        .get(),
    },
    apply: {
      kicker: strip("#cr-apply .kicker"),
      title: txt($("#cr-apply h2")),
      lede: txt($("#cr-apply .lead")),
      email: $("#cr-apply .crmail").text().trim(),
    },
  };

  const out = `/** Content for the /careers route, lifted from the original careers.html template. */

export type InlineIcon = { viewBox: string; markup: string };

export type StrokeIcon = { viewBox: string; strokeWidth: string; markup: string };

export type Careers = {
  hero: {
    kicker: string;
    title: string;
    titleAccent: string;
    lede: string;
    image: string;
    imageAlt: string;
    ctaEmail: string;
  };
  expect: { kicker: string; title: string; lede: string; perks: { label: string; icon: string }[] };
  culture: {
    kicker: string;
    title: string;
    blocks: { title: string; blurb: string }[];
    gallery: { src: string; alt: string }[];
  };
  hiring: { kicker: string; title: string; lede: string; steps: { title: string; blurb: string; icon: StrokeIcon }[] };
  apply: { kicker: string; title: string; lede: string; email: string };
};

export const careers: Careers = ${JSON.stringify(careers, null, 2)};
`;
  writeFileSync("D:/jinnbyte/src/data/careers.ts", out, "utf8");

  console.log("CAREERS");
  console.log("  hero:", JSON.stringify(careers.hero.title + " " + careers.hero.titleAccent), "| image:", careers.hero.image ? "remote" : "MISSING");
  console.log("  perks:", careers.expect.perks.length, "| culture blocks:", careers.culture.blocks.length, "gallery:", careers.culture.gallery.length);
  console.log("  hiring steps:", careers.hiring.steps.length, "| icons:", careers.hiring.steps.filter((s) => s.icon.markup).length, "| apply email:", careers.apply.email || "MISSING");
}
