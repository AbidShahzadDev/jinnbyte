// Parses the 7 case-study templates into a single typed data module.
import * as cheerio from "cheerio";
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TPL = "D:/jinnbyte/templates";
const OUT = "D:/jinnbyte/src/data/cases.ts";

const txt = (el) => (el?.text() ?? "").replace(/\s+/g, " ").trim();
/** Kickers carry a decorative trailing underscore in a <span class="us">. */
const kicker = ($, scope) => txt($(scope).find(".kicker").first().clone().children(".us").remove().end());
const bg = (el) => /url\((?:["']?)([^)"']+)/.exec(el?.attr("style") ?? "")?.[1] ?? "";

/** Hero image: local file for the six inlined ones, remote for case-smf. */
function heroPath(slug, raw) {
  return raw.startsWith("http") ? raw : `/images/cases/${slug}-hero.webp`;
}

const cases = [];

for (const file of readdirSync(TPL).filter((f) => f.startsWith("case-")).sort()) {
  const slug = file.replace(/^case-|\.html$/g, "");
  const html = readFileSync(join(TPL, file), "utf8");
  const $ = cheerio.load(html);

  const accent = /main\{--acc:(#[0-9A-Fa-f]{3,8});--accl:(#[0-9A-Fa-f]{3,8});--accd:(#[0-9A-Fa-f]{3,8});\}/.exec(html);

  const hero = $("#cs-hero");
  const heroCols = hero.find(".csh-in > div");

  const ecoItems = $("#cs-eco .cseco")
    .map((_, el) => {
      const $el = $(el);
      return {
        image: bg($el.find(".csecoimg")),
        title: txt($el.find("h3")),
        blurb: txt($el.find("p")),
        includes: $el.find(".cschip").map((__, c) => txt($(c))).get(),
      };
    })
    .get();

  const impactLead = txt($("#cs-impact .cs-hd.two > div").eq(1).find("p"));

  cases.push({
    slug,
    // Brand casing as each template writes it; a plain capitalise gets these wrong.
    name: {
      buff: "BUFF", facebloom: "FaceBloom", lingolane: "LingoLane",
      maslow: "Maslow", openline: "Openline", smf: "SMF Med", toptec: "TopTec",
    }[slug] ?? slug.charAt(0).toUpperCase() + slug.slice(1),
    sector: kicker($, "#cs-hero"),
    headline: txt(hero.find("h1")),
    summary: txt(heroCols.eq(1).find("p")),
    hero: heroPath(slug, bg(hero.find(".csh-bg"))),
    accent: accent ? { base: accent[1], light: accent[2], deep: accent[3] } : null,
    kpis: hero
      .find(".csh-k > div")
      .map((_, el) => ({ value: txt($(el).find("b")), label: txt($(el).find("span")) }))
      .get(),
    challenge: {
      kicker: kicker($, ".cs-chal"),
      title: txt($(".cs-chal h2")),
      paragraphs: $(".cs-chal p.cs-lead").map((_, p) => txt($(p))).get(),
    },
    solution: {
      kicker: kicker($, ".cs-card"),
      title: txt($(".cs-card h2")),
      paragraphs: $(".cs-card p.cs-lead").map((_, p) => txt($(p))).get(),
    },
    shots: $(".cs-shots .cs-fig .im").map((_, el) => bg($(el))).get(),
    ecosystem: {
      kicker: kicker($, "#cs-eco"),
      title: txt($("#cs-eco h2")),
      items: ecoItems,
    },
    journey: {
      kicker: kicker($, "#cs-journey"),
      title: txt($("#cs-journey h2")),
      steps: $("#cs-journey .cs-step")
        .map((_, el) => ({ title: txt($(el).find("b")), blurb: txt($(el).find("span").last()) }))
        .get(),
    },
    built: {
      kicker: kicker($, "#cs-built"),
      title: txt($("#cs-built h2")),
      cells: $("#cs-built .cscell")
        .map((_, el) => ({ title: txt($(el).find("h3")), blurb: txt($(el).find("p")) }))
        .get(),
      principles: $("#cs-built .csthink b").map((_, el) => txt($(el))).get(),
    },
    impact: {
      kicker: kicker($, "#cs-impact"),
      title: txt($("#cs-impact h2")),
      lead: impactLead,
      metrics: $("#cs-impact .csimp")
        .map((_, el) => ({ value: txt($(el).find("b")), label: txt($(el).find("h3")) }))
        .get(),
      scope: $("#cs-impact .cs-scope .cschip").map((_, el) => txt($(el))).get(),
    },
    cta: {
      kicker: kicker($, "#cs-cta"),
      title: txt($("#cs-cta h2")),
      body: txt($("#cs-cta .cs-cta > div").eq(1).find("p")),
    },
  });
}

/* ---- emit the TypeScript module ---- */
const header = `/**
 * Case-study content, lifted verbatim from the original HTML templates.
 *
 * All seven case pages shared one layout and differed only in content, an
 * accent-colour triple and how many items sat in each grid — so they render
 * from a single template at /work/[slug] driven by this data.
 */

export type CaseMetric = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  name: string;
  sector: string;
  headline: string;
  summary: string;
  hero: string;
  /** Per-case accent, applied as CSS custom properties on the page wrapper. */
  accent: { base: string; light: string; deep: string };
  kpis: CaseMetric[];
  challenge: { kicker: string; title: string; paragraphs: string[] };
  solution: { kicker: string; title: string; paragraphs: string[] };
  shots: string[];
  ecosystem: {
    kicker: string;
    title: string;
    items: { image: string; title: string; blurb: string; includes: string[] }[];
  };
  journey: { kicker: string; title: string; steps: { title: string; blurb: string }[] };
  built: {
    kicker: string;
    title: string;
    cells: { title: string; blurb: string }[];
    principles: string[];
  };
  impact: {
    kicker: string;
    title: string;
    lead: string;
    metrics: CaseMetric[];
    scope: string[];
  };
  cta: { kicker: string; title: string; body: string };
};

export const caseStudies: CaseStudy[] = `;

const body = JSON.stringify(cases, null, 2);

const footer = `;

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export const caseSlugs = caseStudies.map((c) => c.slug);
`;

writeFileSync(OUT, header + body + footer, "utf8");

for (const c of cases) {
  console.log(
    `${c.slug.padEnd(11)} kpis:${c.kpis.length} eco:${c.ecosystem.items.length} steps:${c.journey.steps.length} cells:${c.built.cells.length} metrics:${c.impact.metrics.length} scope:${c.impact.scope.length} shots:${c.shots.length} accent:${c.accent ? "y" : "MISSING"}`
  );
}
