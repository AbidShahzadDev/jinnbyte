// Parses solutions.html into typed data for the /solutions route.
import * as cheerio from "cheerio";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";

const TPL = "D:/jinnbyte/templates/solutions.html";
const OUT = "D:/jinnbyte/src/data/solutions.ts";

const manifest = JSON.parse(readFileSync("D:/jinnbyte/public/images/_manifest.json", "utf8"));
const byHash = new Map(manifest.assets.map((a) => [a.hash, a.file]));
const resolveSrc = (src = "") => {
  const m = /^data:image\/[a-z+.-]+;base64,([A-Za-z0-9+/=]+)$/.exec((src || "").trim());
  if (!m) return src || "";
  const hash = createHash("sha1").update(Buffer.from(m[1], "base64")).digest("hex").slice(0, 8);
  return byHash.get(hash) ?? "";
};

const html = readFileSync(TPL, "utf8");
const $ = cheerio.load(html);
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

const hero = {
  title: txt($(".solhero h1")),
  lede: txt($(".solhero .lede")),
  image: resolveSrc($(".solhero .hbg").attr("src")),
  imageAlt: $(".solhero .hbg").attr("alt") ?? "",
};

const capabilities = {
  kicker: strip("#solutions .svc-kick"),
  title: lines("#solutions h2"),
  lede: txt($("#solutions .svc-sub")),
  cards: $("#solutions .solc")
    .map((_, el) => {
      const svg = $(el).find(".ic svg");
      return {
        title: txt($(el).find("h3")),
        blurb: txt($(el).find(".solbody p")),
        icon: {
          viewBox: svg.attr("viewBox") ?? "0 0 56 56",
          strokeWidth: svg.attr("stroke-width") ?? "1",
          markup: (svg.html() ?? "").replace(/\s+/g, " ").trim(),
        },
      };
    })
    .get(),
};

/** "Where we help" — four entry points, each with its own accent. */
const whereWeHelpSection = $("section").filter((_, s) => txt($(s).find(".kicker").first()).startsWith("Where we help")).first();
const whereWeHelp = {
  kicker: strip(".wwhgrid").length ? "" : "",
  cards: $(".wwhc")
    .map((_, el) => ({
      n: txt($(el).find(".wwhn")),
      title: txt($(el).find("h3")),
      blurb: txt($(el).find("p")),
      accent: /--acc:\s*(#[0-9A-Fa-f]{3,8})/.exec($(el).attr("style") ?? "")?.[1] ?? "#53B2B3",
    }))
    .get(),
};
whereWeHelp.kicker = txt(whereWeHelpSection.find(".kicker").first().clone().children(".us").remove().end());
whereWeHelp.title = whereWeHelpSection
  .find("h2")
  .first()
  .clone()
  .find("br")
  .replaceWith("\n")
  .end()
  .text()
  .split("\n")
  .map((s) => s.replace(/\s+/g, " ").trim())
  .filter(Boolean);
whereWeHelp.lede = txt(whereWeHelpSection.find(".sec-head p").first());

const industries = {
  kicker: strip("#industries .kicker"),
  title: lines("#industries h2"),
  lede: txt($("#industries .ind-head p")),
  panels: $("#industries .indp")
    .map((_, el) => {
      const $el = $(el);
      return {
        cat: $el.attr("data-cat") ?? "",
        label: txt($el.find(".ind-top b")),
        blurb: txt($el.find(".ind-body p")),
        image: $el.find("img").attr("src") ?? "",
        icon: svgOf($el.find(".ind-top")),
        cta: txt($el.find(".ind-go")),
      };
    })
    .get(),
};

const impact = {
  kicker: strip("#portfolio .kicker"),
  title: txt($("#portfolio .cwtitle h2")),
  lede: txt($("#portfolio .cwsub")),
  slides: $("#portfolio .cwthumb")
    .map((_, el) => {
      const $el = $(el);
      return {
        chip: $el.attr("data-chip") ?? "",
        name: $el.attr("data-name") ?? "",
        headline: $el.attr("data-headline") ?? "",
        desc: $el.attr("data-desc") ?? "",
        kpi: $el.attr("data-kpi") ?? "",
        kpiLabel: $el.attr("data-kpil") ?? "",
        href: `/work/${($el.attr("data-href") ?? "").replace(/^#/, "")}`,
        image: resolveSrc($el.attr("data-img")),
        objectPosition: $el.attr("data-pos") ?? "50% 50%",
      };
    })
    .get(),
};

const processSection = $("section").filter((_, s) => txt($(s).find(".kicker").first()).startsWith("How we work")).first();
const process = {
  kicker: txt(processSection.find(".kicker").first().clone().children(".us").remove().end()),
  title: txt(processSection.find("h2").first()),
  lede: txt(processSection.find(".sec-head p").first()),
  steps: $(".apstep")
    .map((_, el) => ({
      n: txt($(el).find(".apn")),
      title: txt($(el).find("h3")),
      blurb: txt($(el).find("p")),
      items: $(el).find(".apitems li").map((__, li) => txt($(li))).get(),
      accent: /--nc:\s*(#[0-9A-Fa-f]{3,8})/.exec($(el).attr("style") ?? "")?.[1] ?? "#53B2B3",
    }))
    .get(),
};

const why = {
  kicker: strip(".whyband .kicker"),
  title: txt($(".whyband h2")),
  lede: txt($(".whyband .sec-head p")),
  cards: $(".whyc")
    .map((_, el) => ({
      title: txt($(el).find("h3")),
      blurb: txt($(el).find("p")),
      icon: svgOf($(el).find(".whic")),
    }))
    .get(),
};

const tech = {
  kicker: strip(".techhead .kicker"),
  title: txt($(".techhead h2")),
  paragraphs: $(".techlead p").map((_, p) => txt($(p))).get(),
  rows: $(".techrow")
    .map((_, el) => ({
      category: txt($(el).find(".techcat")),
      items: $(el)
        .find(".tchip")
        .map((__, chip) => {
          const $chip = $(chip);
          return { label: txt($chip), icon: resolveSrc($chip.find("img").attr("src")) };
        })
        .get(),
    }))
    .get(),
};

const cta = {
  kicker: strip(".slcta .kicker"),
  title: txt($(".slcta h2")),
  body: txt($(".slcta > div").eq(1).find("p")),
};

const data = { hero, capabilities, whereWeHelp, industries, impact, process, why, tech, cta };

const out = `/** Content for the /solutions route, lifted from the original solutions.html template. */

import type { SolutionCard, ImpactSlide } from "@/data/home";

export type InlineIcon = { viewBox: string; markup: string };

export type Solutions = {
  hero: { title: string; lede: string; image: string; imageAlt: string };
  capabilities: { kicker: string; title: string[]; lede: string; cards: SolutionCard[] };
  whereWeHelp: {
    kicker: string;
    title: string[];
    lede: string;
    cards: { n: string; title: string; blurb: string; accent: string }[];
  };
  industries: {
    kicker: string;
    title: string[];
    lede: string;
    panels: { cat: string; label: string; blurb: string; image: string; icon: InlineIcon; cta: string }[];
  };
  impact: { kicker: string; title: string; lede: string; slides: ImpactSlide[] };
  process: {
    kicker: string;
    title: string;
    lede: string;
    steps: { n: string; title: string; blurb: string; items: string[]; accent: string }[];
  };
  why: { kicker: string; title: string; lede: string; cards: { title: string; blurb: string; icon: InlineIcon }[] };
  tech: {
    kicker: string;
    title: string;
    paragraphs: string[];
    rows: { category: string; items: { label: string; icon: string }[] }[];
  };
  cta: { kicker: string; title: string; body: string };
};

export const solutions: Solutions = ${JSON.stringify(data, null, 2)};
`;

writeFileSync(OUT, out, "utf8");

console.log("hero image:", hero.image || "MISSING");
console.log("capabilities:", capabilities.cards.length);
console.log("whereWeHelp:", whereWeHelp.cards.length, "| kicker:", JSON.stringify(whereWeHelp.kicker), "| title:", whereWeHelp.title.length);
console.log("industries:", industries.panels.length, "| images remote:", industries.panels.filter((p) => p.image.startsWith("http")).length);
console.log("impact slides:", impact.slides.length, "| with image:", impact.slides.filter((s) => s.image).length);
console.log("process steps:", process.steps.length, "| kicker:", JSON.stringify(process.kicker));
console.log("why cards:", why.cards.length);
console.log("tech rows:", tech.rows.length, "| chips:", tech.rows.reduce((n, r) => n + r.items.length, 0), "| icons found:", tech.rows.reduce((n, r) => n + r.items.filter((i) => i.icon).length, 0));
console.log("cta:", JSON.stringify(cta.kicker));
