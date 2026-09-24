import type { Metadata } from "next";

import { SolutionsGrid } from "@/components/home/solutions-grid";
import { ImpactCarousel } from "@/components/home/impact-carousel";
import { Testimonials } from "@/components/home/testimonials";
import { RouteRoot } from "@/components/layout/route-root";
import { JsonLd } from "@/components/seo/json-ld";
import {
  IndustriesStrip,
  Recognition,
  SolutionsCta,
  SolutionsHero,
  TechStack,
  WhereWeHelp,
  WhySolutions,
} from "@/components/solutions/sections";
import { ProcessSteps } from "@/components/solutions/process-steps";
import { solutions } from "@/data/solutions";
import { breadcrumbSchema, buildMetadata, serviceListSchema } from "@/lib/seo";
import { pageSeo } from "@/lib/page-seo";

export const metadata: Metadata = buildMetadata({
  ...pageSeo.solutions,
  path: "/solutions",
  image: solutions.hero.image,
  absoluteTitle: true,
});

/**
 * The three sections shared with the home page keep their own padding here but
 * pick up this page's one-screen band behaviour.
 */
const SHARED_BAND =
  "screenband:flex screenband:min-h-[100svh] screenband:flex-col screenband:justify-center";

export default function SolutionsPage() {
  return (
    <RouteRoot>
      <JsonLd
        data={serviceListSchema(
          solutions.capabilities.cards.map((c) => ({ title: c.title, blurb: c.blurb }))
        )}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Solutions", path: "/solutions" }])} />

      <SolutionsHero />
      <SolutionsGrid content={solutions.capabilities} sectionClassName={SHARED_BAND} />
      <WhereWeHelp />
      <IndustriesStrip />
      <ImpactCarousel
        impact={solutions.impact}
        sectionClassName={`py-[clamp(40px,5.6vh,72px)] ${SHARED_BAND}`}
      />
      <ProcessSteps />
      <WhySolutions />
      <TechStack />
      <Testimonials sectionClassName={`py-[clamp(44px,6vh,72px)] ${SHARED_BAND}`} />
      <Recognition />
      <SolutionsCta />
    </RouteRoot>
  );
}
