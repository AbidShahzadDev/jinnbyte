import type { Metadata } from "next";

import {
  AtAGlance,
  Clients,
  ContactSection,
  Recognition,
  WhyJinnByte,
} from "@/components/home/sections";
import { Hero } from "@/components/home/hero";
import { ImpactCarousel } from "@/components/home/impact-carousel";
import { SolutionsGrid } from "@/components/home/solutions-grid";
import { Testimonials } from "@/components/home/testimonials";
import { RouteRoot } from "@/components/layout/route-root";
import { JsonLd } from "@/components/seo/json-ld";
import { home } from "@/data/home";
import { buildMetadata, serviceListSchema } from "@/lib/seo";
import { pageSeo } from "@/lib/page-seo";

export const metadata: Metadata = buildMetadata({
  ...pageSeo.home,
  path: "/",
  image: home.hero.image,
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <RouteRoot>
      <JsonLd
        data={serviceListSchema(
          home.solutions.cards.map((c) => ({ title: c.title, blurb: c.blurb }))
        )}
      />
      <Hero />

      {/* `.pgbody` — everything below the hero runs one section per screen. */}
      <div data-pgbody>
        <SolutionsGrid cta={{ href: "/solutions", label: "Explore our solutions" }} />
        <AtAGlance />
        <Clients />
        <WhyJinnByte />
        <ImpactCarousel impact={home.impact} />
        <Testimonials />
        <Recognition />
        <ContactSection />
      </div>
    </RouteRoot>
  );
}
