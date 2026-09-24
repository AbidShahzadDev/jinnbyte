# JinnByte

The JinnByte marketing site, converted from the original standalone HTML templates to
Next.js 16 (App Router) with TypeScript and Tailwind CSS v4.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build — all routes prerender statically
npm start
```

## Layout

```
src/
  app/                    routes; one folder per page
    page.tsx              home
    solutions/            solutions
    work/                 case-study index (filterable)
    work/[slug]/          the seven case studies, from one template
    about/  careers/
    sitemap.ts robots.ts  generated from the route list and case data
  components/
    layout/               header, footer, back-to-top
    ui/                   Reveal, CountUp, buttons, containers, marquee, dark band
    home/ solutions/ work/ case/
    seo/json-ld.tsx
  data/                   page content, generated from templates/ (see below)
  lib/
    site.ts               nav, contact details, offices, socials
    seo.ts                metadata builder + JSON-LD graph builders
    page-seo.ts           the templates' own titles and meta descriptions
scripts/migrate/          one-time converters that produced src/data
templates/                the original HTML, kept for reference and diffing
public/images/            assets extracted from the templates' base64 data URIs
```

## Content is data, not markup

The original templates were twelve standalone HTML files, each carrying its own copy of the
stylesheet, the header, the footer and every image inlined as a base64 data URI. The
conversion split that into three parts:

- **Styling** became Tailwind. The brand tokens from the templates' `:root` block live in
  `@theme` in `src/app/globals.css`, so `bg-brand`, `text-ink-soft`, `ease-brand` and
  friends resolve to the same values the templates used. Only what utilities genuinely
  cannot express stayed as CSS: the reveal-on-scroll transition and the keyframes.
- **Behaviour** became components. The templates' inline scripts (IntersectionObserver
  reveals, count-up statistics, the sticky-header states, the mobile menu, the case
  carousel, the testimonial rail) are now `src/components/ui` and the per-page client
  components, all honouring `prefers-reduced-motion`.
- **Copy** became typed data under `src/data`, extracted verbatim by the scripts in
  `scripts/migrate`. Re-run one against `templates/` to regenerate its module:

  ```bash
  node scripts/migrate/extract-home.mjs
  ```

  The migration scripts need `cheerio`, which is not a project dependency — install it
  ad hoc (`npm i -D cheerio`) when regenerating.

The seven case pages shared one layout and differed only in content, an accent-colour
triple and how many items sat in each grid. They collapse into `/work/[slug]` driven by
`src/data/cases.ts`, with the accent applied as CSS custom properties on the page wrapper.

## SEO

Every route builds its metadata through `buildMetadata()` in `src/lib/seo.ts`, so none can
ship half-configured. That yields, per page: a unique title and description, a canonical
URL, a full Open Graph set and a `summary_large_image` Twitter card.

JSON-LD is emitted server-side: `Organization` + `WebSite` from the root layout, then
`BreadcrumbList` per page plus `CreativeWork` on case studies, `ItemList` of services on
home and solutions, `CollectionPage` on `/work`, and `AboutPage` with the team roster.

`src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.

Two SEO defects in the originals are fixed rather than carried over:

- all seven case pages shared one copy-pasted title and meta description — each now has
  its own, derived from the case's name, sector and summary;
- no page had Open Graph, Twitter, canonical or structured data at all.

The five main pages keep the templates' own hand-written titles and descriptions
(`src/lib/page-seo.ts`), since those carry deliberate keyword targeting.

Old flat URLs (`/portfolio.html`, `/case-buff.html`, …) permanently redirect to their new
routes via `next.config.ts`.

## Images

All 98 inlined base64 images were extracted to `public/images` and are served through
`next/image`. Two remote sources are carried over from the templates and whitelisted in
`next.config.ts`: Unsplash (case-study and industry photography) and the existing
WordPress media library at `jinnbyte.com/wp-content` (culture galleries, client logos,
review badges).

## Known gaps

- **No favicon.** The templates never had one, and the Next.js scaffold's default was
  removed rather than ship Next's branding. Add `src/app/icon.png` when a square mark is
  available.
- **No dedicated OG image.** Social cards currently fall back to the home hero photo. A
  purpose-built 1200×630 asset would render better; set it as `DEFAULT_OG_IMAGE` in
  `src/lib/seo.ts`.
- **The contact form still GETs to `https://jinnbyte.com/contact/`**, exactly as the
  template did. Point it at a real handler when one exists.
- **`SITE_URL`** in `src/lib/site.ts` is `https://jinnbyte.com`. Change it if the site
  deploys elsewhere; canonicals, OG URLs, the sitemap and JSON-LD all derive from it.
