import type { Metadata } from "next";

import { SITE_URL, site, offices, socials, contact } from "@/lib/site";

/** Fallback social card. Replace with a purpose-built 1200x630 asset when one exists. */
export const DEFAULT_OG_IMAGE = "/images/software-team-working-late-in-a-modern.webp";

type PageSeo = {
  title: string;
  description: string;
  /** Route path, e.g. "/solutions". Becomes the canonical URL. */
  path: string;
  image?: string;
  type?: "website" | "article";
  /** Set on pages that should stay out of the index (thank-you pages, etc.). */
  noIndex?: boolean;
  /**
   * Bypass the root layout's "%s | JinnByte" template. The home page uses this
   * so its brand-first title isn't suffixed with the brand a second time.
   */
  absoluteTitle?: boolean;
};

/**
 * Builds a complete metadata block for a page: canonical, Open Graph and
 * Twitter card. Every route uses this so no page can ship half-configured
 * social metadata the way the original HTML templates did.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noIndex = false,
  absoluteTitle = false,
}: PageSeo): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type,
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: site.twitterHandle,
      creator: site.twitterHandle,
      images: [image],
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}

/* ------------------------------------------------------------------ *
 * JSON-LD
 * ------------------------------------------------------------------ */

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

/** Organization + WebSite, emitted once from the root layout. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: site.name,
        legalName: site.legalName,
        url: SITE_URL,
        description: site.description,
        foundingDate: String(site.foundingYear),
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}${site.logo}`,
        },
        sameAs: socials.map((s) => s.href),
        email: contact.emails[0].label,
        telephone: contact.phones.map((p) => p.label),
        address: offices.map((o) => ({
          "@type": "PostalAddress",
          streetAddress: o.street,
          addressLocality: o.city.split(",")[0].trim(),
          addressCountry: o.countryCode,
        })),
        contactPoint: contact.phones.map((p) => ({
          "@type": "ContactPoint",
          telephone: p.label,
          contactType: "sales",
          email: contact.emails[0].label,
        })),
      },
      {
        "@type": "WebSite",
        "@id": SITE_ID,
        url: SITE_URL,
        name: site.name,
        description: site.description,
        publisher: { "@id": ORG_ID },
        inLanguage: "en",
      },
    ],
  };
}

export type Crumb = { name: string; path: string };

/** BreadcrumbList for any page below the root. */
export function breadcrumbSchema(crumbs: readonly Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.path === "/" ? SITE_URL : `${SITE_URL}${c.path}`,
    })),
  };
}

/** Describes a single case study as a portfolio item. */
export function caseStudySchema(input: {
  name: string;
  headline: string;
  description: string;
  path: string;
  image: string;
  sector: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: input.headline,
    headline: input.headline,
    description: input.description,
    url: `${SITE_URL}${input.path}`,
    image: input.image.startsWith("http") ? input.image : `${SITE_URL}${input.image}`,
    genre: input.sector,
    about: input.name,
    creator: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

/** Service listing for the solutions page. */
export function serviceListSchema(services: readonly { title: string; blurb: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "JinnByte solutions",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.blurb,
        provider: { "@id": ORG_ID },
        areaServed: offices.map((o) => o.country),
      },
    })),
  };
}
