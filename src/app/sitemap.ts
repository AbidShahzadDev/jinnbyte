import type { MetadataRoute } from "next";

import { caseStudies } from "@/data/cases";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = (
    [
      { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
      { url: `${SITE_URL}/solutions`, changeFrequency: "monthly", priority: 0.9 },
      { url: `${SITE_URL}/work`, changeFrequency: "monthly", priority: 0.9 },
      { url: `${SITE_URL}/about`, changeFrequency: "yearly", priority: 0.7 },
      { url: `${SITE_URL}/careers`, changeFrequency: "weekly", priority: 0.7 },
    ] satisfies MetadataRoute.Sitemap
  ).map((p) => ({ ...p, lastModified }));

  const cases: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${SITE_URL}/work/${c.slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [...pages, ...cases];
}
