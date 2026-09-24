// Parses index.html into typed data for the home route.
import * as cheerio from "cheerio";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";

const TPL = "D:/jinnbyte/templates/index.html";
const OUT = "D:/jinnbyte/src/data/home.ts";

const manifest = JSON.parse(readFileSync("D:/jinnbyte/public/images/_manifest.json", "utf8"));
const byHash = new Map(manifest.assets.map((a) => [a.hash, a.file]));

function resolveSrc(src = "") {
  const m = /^data:image\/[a-z+.-]+;base64,([A-Za-z0-9+/=]+)$/.exec((src || "").trim());
  if (!m) return src || "";
  const hash = createHash("sha1").update(Buffer.from(m[1], "base64")).digest("hex").slice(0, 8);
  return byHash.get(hash) ?? "";
}

const html = readFileSync(TPL, "utf8");
const $ = cheerio.load(html);

const txt = (el) => (el?.text() ?? "").replace(/\s+/g, " ").trim();
const strip = (sel) => txt($(sel).first().clone().children(".us").remove().end());
/** Keeps the template's deliberate <br> line breaks as \n for rendering. */
const lines = (sel) => {
  const el = $(sel).first().clone();
  el.children(".us").remove();
  el.find("br").replaceWith("\n");
  return el
    .text()
    .split("\n")
    .map((s) => s.replace(/\s+/g, " ").trim())
    .filter(Boolean);
};

/* ---- hero ---- */
const hero = {
  title: lines(".hero.full h1.headline"),
  lede: txt($(".hero.full .lede")),
  image: resolveSrc($(".hero.full .hbg").attr("src")),
  imageAlt: $(".hero.full .hbg").attr("alt") ?? "",
  ctas: $(".hero.full .hero-cta a")
    .map((_, a) => ({ label: txt($(a).clone().children(".ar").remove().end()), href: $(a).attr("href") }))
    .get(),
};

/* ---- solutions ---- */
const solutions = {
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

/* ---- at a glance ---- */
const glance = {
  kicker: strip("#journey .kicker"),
  title: lines("#journey h2"),
  lede: txt($("#journey .mlead")),
  stats: $("#mgrid .ms")
    .map((_, el) => {
      const n = $(el).find(".mn");
      return {
        to: Number(n.attr("data-to") ?? 0),
        suffix: n.attr("data-suffix") ?? "",
        plus: Boolean(n.attr("data-plus")),
        label: txt($(el).find(".ml")),
      };
    })
    .get(),
  officesLabel: txt($("#journey .mloc-lab")),
  offices: $("#journey .loc")
    .map((_, el) => ({
      flag: resolveSrc($(el).find(".flag").attr("src")),
      city: txt($(el).find("h4")),
      country: txt($(el).find(".cty")),
      address: txt($(el).find(".adr")),
    }))
    .get(),
};

/* ---- clients ---- */
const clients = {
  kicker: strip("#clients .clkick"),
  title: txt($("#clients h2")),
  lede: txt($("#clients .clhead p")),
  logos: $("#clients .clcell")
    .map((_, el) => {
      const img = $(el).find("img");
      const style = img.attr("style") ?? "";
      return {
        src: resolveSrc(img.attr("src")),
        name: txt($(el).find(".clname")) || (img.attr("alt") ?? ""),
        w: Number(/--w:\s*([\d.]+)/.exec(style)?.[1] ?? 120),
        h: Number(/--h:\s*([\d.]+)/.exec(style)?.[1] ?? 40),
      };
    })
    .get()
    .filter((l) => l.src),
};

/* ---- proven impact carousel ---- */
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
        // "#lingolane" in the template -> the real case route
        href: `/work/${($el.attr("data-href") ?? "").replace(/^#/, "")}`,
        image: resolveSrc($el.attr("data-img")),
        objectPosition: $el.attr("data-pos") ?? "50% 50%",
      };
    })
    .get(),
};

/* ---- why ---- */
const why = {
  kicker: strip("#why .kicker"),
  title: lines("#why h2"),
  columns: $("#why .why-col")
    .map((_, el) => ({
      n: txt($(el).find(".why-n")),
      title: txt($(el).find("h3")),
      blurb: txt($(el).find("p")),
    }))
    .get(),
};

/* ---- testimonials ---- */
const testimonials = {
  kicker: strip("#testimonials .kicker"),
  title: lines("#testimonials h2"),
  quotes: $("#testimonials .qc")
    .map((_, el) => {
      const $el = $(el);
      return {
        stars: $el.find(".stars svg").length,
        quote: txt($el.find("> p")),
        company: txt($el.find(".who b").clone().children(".us").remove().end()),
        person: txt($el.find(".who span")),
        logo: resolveSrc($el.find(".who img.logo").attr("src")) || ($el.find(".who img.logo").attr("src") ?? ""),
      };
    })
    .get(),
};

/* ---- recognised by ---- */
const certs = {
  kicker: strip(".certs .kicker"),
  title: txt($(".certs h2")),
  lede: txt($(".certs .cert-grid > div:first-child p")),
  seals: $(".certs .seal")
    .map((_, el) => ({
      logo: $(el).find(".lg img").attr("src") ?? "",
      alt: $(el).find(".lg img").attr("alt") ?? "",
      blurb: txt($(el).find(".rl")),
    }))
    .get(),
};

/* ---- contact ---- */
const contact = {
  kicker: strip("#contact .kicker"),
  title: lines("#contact h2"),
  lede: txt($("#contact .csub")),
  image: resolveSrc($("#contact .cbg").attr("src")),
  steps: $("#contact .stp li")
    .map((_, el) => ({ title: txt($(el).find("b")), blurb: txt($(el).find("span")) }))
    .get(),
  form: {
    title: txt($("#contact .cform h3")),
    lede: txt($("#contact .cform .sub")),
    fields: $("#contact .cform .fld")
      .map((_, el) => {
        const input = $(el).find("input, textarea, select").first();
        return {
          name: input.attr("name") ?? "",
          label: txt($(el).find("label").clone().children("i").remove().end()),
          type: input.is("textarea") ? "textarea" : input.is("select") ? "select" : (input.attr("type") ?? "text"),
          placeholder: input.attr("placeholder") ?? "",
          required: input.attr("required") !== undefined,
          options: $(el)
            .find("select option")
            .map((__, o) => txt($(o)))
            .get(),
        };
      })
      .get(),
    submit: txt($("#contact .cform button[type=submit], #contact .cform .btn").first()),
  },
};

const data = { hero, solutions, glance, clients, impact, why, testimonials, certs, contact };

const out = `/**
 * Home-page content, lifted from the original index.html template.
 * Headings that used a deliberate <br> are stored as an array of lines.
 */

export type Stat = { to: number; suffix: string; plus: boolean; label: string };

export type SolutionCard = {
  title: string;
  blurb: string;
  /** Inline SVG taken from the template; rendered inside a sized <svg>. */
  icon: { viewBox: string; strokeWidth: string; markup: string };
};

export type ImpactSlide = {
  chip: string;
  name: string;
  headline: string;
  desc: string;
  kpi: string;
  kpiLabel: string;
  href: string;
  image: string;
  objectPosition: string;
};

export type Quote = {
  stars: number;
  quote: string;
  company: string;
  person: string;
  logo: string;
};

export type FormField = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  options: string[];
};

export type Home = {
  hero: { title: string[]; lede: string; image: string; imageAlt: string; ctas: { label: string; href: string }[] };
  solutions: { kicker: string; title: string[]; lede: string; cards: SolutionCard[] };
  glance: {
    kicker: string;
    title: string[];
    lede: string;
    stats: Stat[];
    officesLabel: string;
    offices: { flag: string; city: string; country: string; address: string }[];
  };
  clients: { kicker: string; title: string; lede: string; logos: { src: string; name: string; w: number; h: number }[] };
  impact: { kicker: string; title: string; lede: string; slides: ImpactSlide[] };
  why: { kicker: string; title: string[]; columns: { n: string; title: string; blurb: string }[] };
  testimonials: { kicker: string; title: string[]; quotes: Quote[] };
  certs: { kicker: string; title: string; lede: string; seals: { logo: string; alt: string; blurb: string }[] };
  contact: {
    kicker: string;
    title: string[];
    lede: string;
    image: string;
    steps: { title: string; blurb: string }[];
    form: { title: string; lede: string; fields: FormField[]; submit: string };
  };
};

export const home: Home = ${JSON.stringify(data, null, 2)};
`;

writeFileSync(OUT, out, "utf8");

console.log("hero lines:", hero.title.length, "| image:", hero.image || "MISSING");
console.log("solution cards:", solutions.cards.length, "| icons:", solutions.cards.filter((c) => c.icon.markup).length);
console.log("stats:", glance.stats.length, "| offices:", glance.offices.length);
console.log("client logos:", clients.logos.length);
console.log("impact slides:", impact.slides.length, "| with image:", impact.slides.filter((s) => s.image).length);
console.log("why cols:", why.columns.length, "| quotes:", testimonials.quotes.length, "| seals:", certs.seals.length);
console.log("contact steps:", contact.steps.length, "| form fields:", contact.form.fields.length, "| submit:", JSON.stringify(contact.form.submit));
console.log("slide hrefs:", impact.slides.map((s) => s.href).join(", "));
