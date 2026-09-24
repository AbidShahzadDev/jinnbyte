"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import { IndustryPanels } from "@/components/work/industry-panels";
import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";
import { portfolio } from "@/data/portfolio";

/**
 * Industry strip plus the filterable case-study grid. They share filter state,
 * so choosing an industry from a panel scrolls down and applies that filter.
 */
export function WorkBrowser() {
  const [cat, setCat] = useState("all");
  const gridRef = useRef<HTMLDivElement>(null);

  const { industries, work } = portfolio;
  const shown =
    cat === "all" ? work.projects : work.projects.filter((p) => p.cat === cat);

  const pick = (next: string) => {
    setCat(next);
    gridRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return (
    <>
      <section
        id="industries"
        className="min-[761px]:py-28 min-[641px]:max-[761px]:py-[78px] max-[641px]:py-[62px]"
      >
        <Container gutter="work">
          <Reveal className="flex flex-wrap items-end justify-between gap-7 min-[641px]:mb-8.5 max-[641px]:mb-6.5">
            <div>
              <div className="accent-underscore mb-5.5 font-sans text-[11.5px] font-medium uppercase tracking-[0.22em] text-brand-deep max-[641px]:mb-4">
                {industries.kicker}
              </div>
              <h2 className="text-[clamp(26px,3.2vw,40px)] font-extralight tracking-[-0.025em]">
                {industries.title}
              </h2>
            </div>
            <p className="max-w-[40ch] text-[16px] leading-[1.65] font-light text-ink-soft max-[641px]:text-[15.5px]">
              {industries.lede}
            </p>
          </Reveal>

          <Reveal>
            <IndustryPanels panels={industries.panels} onPick={pick} />
          </Reveal>
        </Container>
      </section>

      <section
        id="work"
        className="scroll-mt-24 bg-soft min-[761px]:py-28 min-[641px]:max-[761px]:py-[78px] max-[641px]:py-[62px]"
        ref={gridRef}
      >
        <Container gutter="work">
          <Reveal className="mb-15 max-w-[660px] max-[641px]:mb-9">
            <div className="accent-underscore mb-5.5 font-sans text-[11.5px] font-medium uppercase tracking-[0.22em] text-brand-deep max-[641px]:mb-4">
              {work.kicker}
            </div>
            <h2 className="text-[clamp(28px,3.4vw,42px)] font-extralight tracking-[-0.025em]">
              {work.title}
            </h2>
            <p className="mt-5 max-w-[56ch] text-[17px] leading-[1.65] font-light text-ink-soft max-[641px]:text-[15.5px]">
              {work.lede}
            </p>
          </Reveal>

          <Reveal className="mb-8.5 flex flex-col items-stretch justify-between gap-3.5 min-[641px]:flex-row min-[641px]:flex-wrap min-[641px]:items-center min-[641px]:gap-5">
            <div
              role="group"
              aria-label="Filter case studies by industry"
              className="flex flex-nowrap gap-2.25 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] min-[641px]:flex-wrap min-[641px]:overflow-visible min-[641px]:pb-0 [&::-webkit-scrollbar]:hidden"
            >
              {work.filters.map((f) => (
                <button
                  key={f.cat}
                  type="button"
                  aria-pressed={cat === f.cat}
                  onClick={() => setCat(f.cat)}
                  className={cn(
                    "flex-none cursor-pointer rounded-full border px-4.25 py-2.25 font-display text-[13px] leading-[normal] font-normal tracking-[0.02em] whitespace-nowrap transition-[color,border-color,background,transform,translate,scale] duration-250 ease-brand hover:-translate-y-0.5",
                    cat === f.cat
                      ? "border-brand bg-brand text-white"
                      : "border-line bg-paper text-ink-soft hover:border-ink-faint hover:text-ink",
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <span
              aria-live="polite"
              className="self-start font-display text-[13px] tracking-[0.02em] whitespace-nowrap text-ink-faint"
            >
              {cat === "all"
                ? `Showing all ${shown.length} case studies`
                : `Showing ${shown.length} case ${shown.length === 1 ? "study" : "studies"}`}
            </span>
          </Reveal>

          <div className="grid gap-6 max-[641px]:gap-5 min-[981px]:grid-cols-3 min-[601px]:max-[981px]:grid-cols-2">
            {shown.map((p) => (
              // `.pj rv` — each card rises in on its own, as the template does.
              <Reveal key={p.slug} className="flex">
                <Link
                  href={`/work/${p.slug}`}
                  className="group flex w-full flex-col overflow-hidden rounded-[14px] border border-[rgb(18_41_44/0.07)] bg-white shadow-[0_1px_1px_rgb(18_41_44/0.025)] transition-[transform,box-shadow,border-color,translate,scale] duration-400 ease-brand hover:-translate-y-[3px] hover:border-[rgb(0_116_110/0.16)] hover:shadow-[0_4px_12px_rgb(18_41_44/0.035),0_18px_44px_rgb(18_41_44/0.05)]"
                >
                  <span className="relative block aspect-4/3 overflow-hidden bg-soft-2">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 980px) 50vw, 33vw"
                      style={{ objectPosition: p.objectPosition }}
                      className="object-cover transition-transform duration-800 ease-brand group-hover:scale-104"
                    />
                    <span className="absolute top-3.5 left-3.5 rounded-full bg-white/92 px-3 py-1.5 font-display text-[11px] font-medium tracking-[0.04em] text-ink backdrop-blur-[6px]">
                      {p.tag}
                    </span>
                  </span>

                  <span className="flex flex-1 flex-col min-[641px]:px-7 min-[641px]:pt-7 min-[641px]:pb-6.5 max-[641px]:px-5.5 max-[641px]:py-6">
                    <span className="font-display text-[19px] font-normal tracking-[-0.015em] text-ink">
                      {p.name}
                    </span>
                    <span className="mt-2.25 text-sm font-light leading-[1.6] text-ink-soft">
                      {p.outcome}
                    </span>

                    <span className="my-4.5 flex items-baseline gap-2.25 border-t border-line-soft pt-4">
                      <b className="font-display text-[26px] font-light tracking-[-0.02em] text-brand-deep">
                        {p.kpi.value}
                      </b>
                      <i className="text-[12.5px] leading-[1.3] text-ink-faint not-italic">
                        {p.kpi.label}
                      </i>
                    </span>

                    <span className="mb-5 flex flex-wrap gap-1.75">
                      {p.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-md border border-line-soft bg-soft px-2.5 py-1.25 text-[11px] tracking-[0.02em] text-ink-soft"
                        >
                          {chip}
                        </span>
                      ))}
                    </span>

                    <span className="mt-auto inline-flex items-center gap-2 font-display text-[12.5px] font-normal uppercase tracking-[0.08em] text-brand-deep">
                      Read case study
                      <span
                        aria-hidden
                        className="transition-transform duration-300 ease-brand group-hover:translate-x-1"
                      >
                        &rarr;
                      </span>
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
