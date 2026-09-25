import type { Metadata } from "next";

import { RouteRoot } from "@/components/layout/route-root";
import { JsonLd } from "@/components/seo/json-ld";
import { ButtonLink } from "@/components/ui/button";
import { DarkBand, DARK_GRADIENT, BLEED_PADDING } from "@/components/ui/dark-band";
import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { WorkBrowser } from "@/components/work/work-browser";
import { cn } from "@/lib/cn";
import { caseStudies } from "@/data/cases";
import { portfolio } from "@/data/portfolio";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { pageSeo } from "@/lib/page-seo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  ...pageSeo.work,
  path: "/work",
  absoluteTitle: true,
});

/** Lists the seven case studies so search engines can discover them from here. */
function workCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "JinnByte case studies",
    description: portfolio.hero.lede,
    url: `${SITE_URL}/work`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: caseStudies.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${c.name} — ${c.sector}`,
        url: `${SITE_URL}/work/${c.slug}`,
      })),
    },
  };
}

export default function WorkPage() {
  const { hero, cta } = portfolio;

  return (
    <RouteRoot>
      <JsonLd data={workCollectionSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Work", path: "/work" }])} />

      <section id="pf-hero">
        <Container gutter="work">
          <div
            // Tells the sticky header to go transparent while this dark hero is behind it.
            data-hero
            className={cn(
              "relative left-1/2 -mt-19 w-screen -translate-x-1/2 overflow-hidden min-[901px]:pt-[150px] min-[641px]:max-[901px]:pt-32 max-[641px]:pt-[110px]",
              DARK_GRADIENT,
              BLEED_PADDING
            )}
          >
            <div className="grid items-end min-[901px]:grid-cols-[1.05fr_0.95fr] min-[901px]:gap-22 min-[901px]:pb-22 min-[641px]:max-[901px]:gap-8.5 min-[641px]:max-[901px]:pb-16 max-[641px]:gap-6.5 max-[641px]:pb-13.5">
              <div>
                <div className="accent-underscore font-sans text-[11.5px] font-medium uppercase tracking-[0.22em] text-brand-on-dark">
                  {hero.kicker}
                </div>
                <h1 className="mt-5 text-[clamp(28px,8vw,40px)] font-extralight leading-[1.07] tracking-[-0.035em] text-white max-[381px]:text-[26px] min-[641px]:mt-6.5 min-[641px]:max-w-[14ch] min-[641px]:text-[clamp(36px,4.7vw,60px)]">
                  {hero.title}
                </h1>
              <div className="mt-5 max-w-[50ch] min-[641px]:mt-6.5">
                <hr className="mb-7 h-px w-16 border-0 bg-brand-on-dark" />
                <p className="max-w-[50ch] text-[17px] font-light leading-[1.78] text-white/62 min-[641px]:text-base">
                  {hero.lede}
                </p>
                <div className="mt-8.5 flex flex-wrap gap-3.5 max-[381px]:flex-col">
                  <ButtonLink href="#work" variant="brand" size="classic" arrow className="max-[641px]:flex-auto max-[641px]:justify-center max-[381px]:w-full">
                    Browse the work
                  </ButtonLink>
                  <ButtonLink
                    href="/#contact"
                    variant="ghost"
                    size="classic"
                    arrow
                    className="max-[641px]:flex-auto max-[641px]:justify-center max-[381px]:w-full"
                  >
                    Start a project
                  </ButtonLink>
                </div>
              </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <WorkBrowser />

      <section id="pf-cta" className="min-[761px]:mt-28 min-[641px]:max-[761px]:mt-[78px] max-[641px]:mt-[62px]">
        <Container gutter="work">
          <Reveal>
            <DarkBand notch>
              <div className="grid items-end gap-8.5 min-[821px]:grid-cols-[0.95fr_1.05fr] min-[821px]:gap-21">
                <div>
                  <div className="accent-underscore mb-5.5 font-sans text-[11.5px] font-medium uppercase tracking-[0.22em] text-brand-on-dark max-[641px]:mb-4">
                    {cta.kicker}
                  </div>
                  <h2 className="md:text-[42px] text-[28px] font-extralight tracking-[-0.025em] text-white">
                    {cta.title}
                  </h2>
                </div>
                <div>
                  <p className="max-w-[54ch] text-base font-light leading-[1.8] text-white/62">
                    {cta.body}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3.5 max-[641px]:[&>a]:flex-auto max-[641px]:[&>a]:justify-center max-[381px]:flex-col max-[381px]:[&>a]:w-full">
                    <ButtonLink href="/#contact" variant="brand" size="classic" arrow>
                      Discuss your project
                    </ButtonLink>
                    <ButtonLink href="/solutions" variant="ghost" size="classic" arrow>
                      Explore our solutions
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </DarkBand>
          </Reveal>
        </Container>
      </section>
    </RouteRoot>
  );
}
