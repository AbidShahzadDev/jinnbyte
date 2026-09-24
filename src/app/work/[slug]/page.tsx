import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";

import {
  CaseBrief,
  CaseBuilt,
  CaseCta,
  CaseEcosystem,
  CaseHero,
  CaseImpact,
  CaseJourney,
} from "@/components/case/case-sections";
import { JsonLd } from "@/components/seo/json-ld";
import { caseStudies, getCaseStudy } from "@/data/cases";
import { breadcrumbSchema, buildMetadata, caseStudySchema } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

/** Nothing outside the seven known slugs should render. */
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  // Each case gets its own title and description. In the original templates all
  // seven shared one copy-pasted generic pair, which is a duplicate-content risk.
  return buildMetadata({
    title: `${study.name} — ${study.sector} Case Study`,
    description: study.summary,
    path: `/work/${study.slug}`,
    image: study.hero,
    type: "article",
  });
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const accentVars = {
    "--acc": study.accent.base,
    "--accl": study.accent.light,
    "--accd": study.accent.deep,
  } as CSSProperties;

  return (
    <div style={accentVars}>
      <JsonLd
        data={caseStudySchema({
          name: study.name,
          headline: study.headline,
          description: study.summary,
          path: `/work/${study.slug}`,
          image: study.hero,
          sector: study.sector,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Work", path: "/work" },
          { name: study.name, path: `/work/${study.slug}` },
        ])}
      />

      <CaseHero study={study} />

      {/* `.pgbody` — positioned above the sticky hero so the sections slide over it. */}
      <div className="relative z-[2] bg-paper">
        <CaseBrief study={study} />
        <CaseEcosystem study={study} />
        <CaseJourney study={study} />
        <CaseBuilt study={study} />
        <CaseImpact study={study} />
        <CaseCta study={study} />
      </div>
    </div>
  );
}
