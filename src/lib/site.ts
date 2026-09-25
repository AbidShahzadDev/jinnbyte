/**
 * Single source of truth for anything that appears in more than one place:
 * navigation, contact details, offices, social profiles. The SEO helpers and
 * the JSON-LD graph both read from here so metadata can never drift from the
 * content rendered on the page.
 */

export const SITE_URL = "https://jinnbyte.com";

export const site = {
  name: "JinnByte",
  legalName: "JinnByte",
  url: SITE_URL,
  /** Used as the default OG/Twitter description and the Organization description. */
  description:
    "JinnByte is a solution-led technology partner combining product strategy, software engineering, AI, automation, UX and cloud to build and scale digital products and platforms.",
  tagline: "AI, Software & Digital Solutions Engineering",
  foundingYear: 2018,
  logo: "/images/logo-light.png",
  twitterHandle: "@JinnByte",
} as const;

export type NavItem = { href: string; label: string };

export const navItems: readonly NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/work", label: "Work" },
  { href: "/careers", label: "Careers" },
] as const;

/** The homepage template uses the same navigation in the header and footer. */
export const footerNavItems = navItems;

export const contact = {
  emails: [
    { label: "info@jinnbyte.com", href: "mailto:info@jinnbyte.com" },
    { label: "hr@jinnbyte.com", href: "mailto:hr@jinnbyte.com" },
  ],
  phones: [
    { label: "+1 (559) 495-9371", href: "tel:+15594959371" },
    { label: "+1 (647) 896-7574", href: "tel:+16478967574" },
    { label: "+92 423 7309873", href: "tel:+924237309873" },
  ],
  ctaHref: "/#contact",
} as const;

export type Office = {
  city: string;
  country: string;
  street: string;
  /** ISO 3166-1 alpha-2, for the JSON-LD PostalAddress. */
  countryCode: string;
  flag: string;
};

export const offices: readonly Office[] = [
  {
    city: "Fresno, USA",
    country: "United States",
    countryCode: "US",
    street: "839 N Cedar Ave B-4, #5027",
    flag: "/images/flags/usa.webp",
  },
  {
    city: "Etobicoke, Canada",
    country: "Canada",
    countryCode: "CA",
    street: "235 Dixon Rd, Unit 106",
    flag: "/images/flags/canada.webp",
  },
  {
    city: "Lahore, Pakistan",
    country: "Pakistan",
    countryCode: "PK",
    street: "227-CCA FF Block, DHA Phase IV",
    flag: "/images/flags/pakistan.webp",
  },
] as const;

export const socials = [
  { label: "Facebook", href: "https://web.facebook.com/JinnByte" },
  { label: "Instagram", href: "https://www.instagram.com/jinnbyte.official/" },
  { label: "Twitter", href: "https://twitter.com/JinnByte" },
  { label: "Linkedin", href: "https://www.linkedin.com/company/jinnbyte/" },
] as const;

export const footerBlurb =
  "Building future-ready software that integrates directly into your core operations, scales seamlessly, and accelerates innovation.";
