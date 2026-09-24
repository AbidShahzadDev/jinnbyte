import type { Metadata } from "next";

import {
  CareersCulture,
  CareersHero,
  HowWeHire,
  OpenApplications,
  WhatToExpect,
} from "@/components/careers/sections";
import { RouteRoot } from "@/components/layout/route-root";
import { JsonLd } from "@/components/seo/json-ld";
import { careers } from "@/data/careers";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { pageSeo } from "@/lib/page-seo";
import { SITE_URL, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  ...pageSeo.careers,
  path: "/careers",
  image: careers.hero.image,
  absoluteTitle: true,
});

function careersSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `${SITE_URL}/careers`,
    name: `Careers at ${site.name}`,
    description: careers.hero.lede,
    about: { "@id": `${SITE_URL}/#organization` },
    // The template lists no specific vacancies, so the page advertises open
    // applications rather than claiming JobPosting entries that don't exist.
    potentialAction: {
      "@type": "ApplyAction",
      target: `mailto:${careers.apply.email}`,
      name: "Send an open application",
    },
  };
}

export default function CareersPage() {
  return (
    <RouteRoot>
      <JsonLd data={careersSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Careers", path: "/careers" }])} />

      <CareersHero />

      {/* `.pgbody` — positioned above the sticky hero so the bands slide over it. */}
      <div className="relative z-[2] bg-paper">
        <WhatToExpect />
        <CareersCulture />
        <HowWeHire />
        <OpenApplications />
      </div>
    </RouteRoot>
  );
}
