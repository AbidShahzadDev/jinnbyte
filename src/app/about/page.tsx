import type { Metadata } from "next";

import {
  AboutCta,
  AboutHero,
  HowWeThink,
  OurCulture,
  OurImpact,
  OurStory,
  OurTeam,
  WhatWeBelieve,
  WhereWeCreateValue,
} from "@/components/about/sections";
import { RouteRoot } from "@/components/layout/route-root";
import { JsonLd } from "@/components/seo/json-ld";
import { about } from "@/data/about";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { pageSeo } from "@/lib/page-seo";
import { SITE_URL, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  ...pageSeo.about,
  path: "/about",
  image: about.hero.image,
  absoluteTitle: true,
});

/** The team roster, which is what "people behind the work" means for schema.org. */
function teamSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${SITE_URL}/about`,
    name: `About ${site.name}`,
    description: about.hero.lede,
    mainEntity: {
      "@id": `${SITE_URL}/#organization`,
      "@type": "Organization",
      employee: about.team.members.map((m) => ({
        "@type": "Person",
        name: m.name,
        jobTitle: m.role,
        image: m.photo ? `${SITE_URL}${m.photo}` : undefined,
        sameAs: m.linkedin || undefined,
      })),
    },
  };
}

export default function AboutPage() {
  return (
    <RouteRoot>
      <JsonLd data={teamSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about" }])} />

      <AboutHero />
      <WhereWeCreateValue />
      <HowWeThink />
      <WhatWeBelieve />
      <OurStory />
      <OurTeam />
      <OurCulture />
      <OurImpact />
      <AboutCta />
    </RouteRoot>
  );
}
