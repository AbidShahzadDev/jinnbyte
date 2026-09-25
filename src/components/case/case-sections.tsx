import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";
import type { CaseStudy } from "@/data/cases";

/** Grid that is one column on small screens and `cols` columns from lg up. */
const cols = (n: number) => ({ "--cs-cols": String(n) }) as CSSProperties;

/** The lift every card system in the templates shares on hover. */
const CARD_HOVER =
  "transition-[background,transform,box-shadow,border-color,translate,scale] duration-400 ease-brand hover:-translate-y-[3px] hover:shadow-[0_26px_48px_-30px_rgb(0_0_0/0.42),inset_0_1px_0_var(--color-brand)]";
/**
 * The case template runs its own breakpoint ladder - 1200 / 1080 / 980 / 760 /
 * 480 - which does not line up with Tailwind's. Ranges are written out in full
 * so the order the utilities land in the sheet cannot change the result.
 */
const COLS_OVER_1200 =
  "min-[1201px]:[grid-template-columns:repeat(var(--cs-cols),minmax(0,1fr))]";
const COLS_OVER_1080 =
  "min-[1081px]:[grid-template-columns:repeat(var(--cs-cols),minmax(0,1fr))]";

/**
 * The dark bands break out of the centred column to run edge-to-edge, keeping
 * their inner content aligned to the same 1220px gutter as everything else.
 */
function FullBleedDark({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative left-1/2 w-screen -translate-x-1/2 overflow-hidden px-[max(2rem,calc((100vw-var(--container-site))/2+2rem))]",
        "min-[1081px]:py-[84px] min-[981px]:max-[1081px]:py-16 min-[761px]:max-[981px]:py-15 max-[761px]:py-13",
        "bg-[linear-gradient(100deg,var(--acc)_0%,#1a1a1a_9%,#1c1c1c_72%,#1a1a1a_91%,var(--acc)_100%)]",
        className
      )}
    >
      {children}
    </div>
  );
}

function Kick({
  children,
  tone = "light",
  className,
}: {
  children: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        // The trailing underscore stays brand teal on these pages even where the
        // kicker itself takes the case study's accent.
        "accent-underscore font-sans text-[11.5px] font-medium uppercase tracking-[0.22em] [--underscore:var(--color-brand-deep)]",
        tone === "dark" ? "text-[var(--accl)]" : "text-brand-deep",
        className
      )}
    >
      {children}
    </div>
  );
}

/** Kicker + heading + the short accent rule beneath it. */
function Head({
  kicker,
  title,
  tone = "light",
  className,
}: {
  kicker: string;
  title: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={className}>
      <Kick tone={tone} className="mb-[22px]">
        {kicker}
      </Kick>
      <h2
        className={cn(
          "mt-3.5 max-w-[22ch] font-display md:text-[42px] text-[28px] font-extralight leading-[1.18] tracking-[-0.028em] ",
          tone === "dark" ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      <hr
        className={cn(
          "mt-5 h-px w-13 border-0",
          tone === "dark" ? "bg-[var(--accl)]" : "bg-[var(--acc)]"
        )}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function CaseHero({ study }: { study: CaseStudy }) {
  return (
    <section id="cs-hero" className="sticky top-0 z-0 motion-reduce:relative">
      <Container>
        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[var(--acc)] px-[max(2rem,calc((100vw-var(--container-site))/2+2rem))] min-[981px]:pt-32 min-[761px]:max-[981px]:pt-26 max-[761px]:pt-24">
          <div
            className="absolute inset-0 bg-cover bg-[position:50%_55%] after:absolute after:inset-0 after:bg-[linear-gradient(100deg,var(--acc)_0%,rgba(10,20,26,.9)_38%,rgba(10,20,26,.7)_66%,rgba(10,20,26,.52)_100%)] after:content-['']"
            style={{ backgroundImage: `url(${study.hero})` }}
          />

          <div className="relative z-[2] grid items-end gap-8.5 pb-13 min-[1081px]:grid-cols-[1.12fr_0.88fr] min-[1081px]:gap-16">
            <div>
              <Link
                href="/work"
                className="group mb-5.5 inline-flex items-center gap-[0.6em] font-display text-[11.5px] uppercase tracking-[0.18em] text-white/60 transition-colors duration-300 ease-brand hover:text-[var(--accl)]"
              >
                <span aria-hidden className="transition-transform duration-300 ease-brand group-hover:-translate-x-1">
                  &larr;
                </span>
                All case studies
              </Link>
              <Kick tone="dark">{study.sector}</Kick>
              <h1 className="mt-4.5 max-w-[19ch] font-display text-[clamp(29px,3.5vw,45px)] font-extralight leading-[1.1] tracking-[-0.032em] text-white max-[481px]:text-[27px] max-[481px]:leading-[1.14]">
                {study.headline}
              </h1>
            </div>
            <p className="max-w-[48ch] text-[15.4px] font-light leading-[1.74] text-white/66">
              {study.summary}
            </p>
          </div>

          <dl
            className={cn(
              "relative z-[2] grid border-t border-white/20 min-[761px]:max-[981px]:grid-cols-3",
              COLS_OVER_1080
            )}
            style={cols(study.kpis.length)}
          >
            {study.kpis.map((kpi) => (
              <div
                key={kpi.label}
                className={cn(
                  "border-white/13 first:pl-0 last:border-r-0 min-[761px]:border-r",
                  "min-[981px]:px-6.5 min-[981px]:pt-5.5 min-[981px]:pb-7",
                  "min-[761px]:max-[981px]:px-4 min-[761px]:max-[981px]:pt-4.5 min-[761px]:max-[981px]:pb-5.5",
                  "max-[761px]:border-b max-[761px]:px-0 max-[761px]:pt-4 max-[761px]:pb-5"
                )}
              >
                <dt className="sr-only">{kpi.label}</dt>
                <dd>
                  <b className="block font-display text-[clamp(27px,2.9vw,38px)] font-extralight leading-none tracking-[-0.04em] text-white max-[481px]:text-[30px]">
                    {kpi.value}
                  </b>
                  <span className="mt-2.5 block text-[12.5px] text-white/55">{kpi.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

export function CaseBrief({ study }: { study: CaseStudy }) {
  return (
    <section id="cs-brief" className="bg-paper py-[clamp(56px,7.6vh,96px)]">
      <Container>
        <div className="grid items-stretch max-[981px]:gap-0 min-[981px]:max-[1081px]:gap-8.5 min-[1081px]:grid-cols-2 min-[1081px]:gap-11">
          <Reveal className="max-[981px]:pb-8.5 min-[1081px]:py-11.5 min-[1081px]:pr-10">
            <Kick>{study.challenge.kicker}</Kick>
            <h2 className="mt-3.5 max-w-[22ch] font-display md:text-[42px] text-[28px] font-extralight leading-[1.2] tracking-[-0.028em]">
              {study.challenge.title}
            </h2>
            <hr className="mt-4.5 mb-5 h-px w-13 border-0 bg-[var(--acc)]" />
            {study.challenge.paragraphs.map((p, i) => (
              <p key={i} className={cn("max-w-[46ch] text-[15.2px] font-light leading-[1.74] max-[481px]:text-[14.6px] text-ink-soft", i > 0 && "mt-3.5")}>
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal
            delay={2}
            className={cn(
              "relative overflow-hidden bg-[var(--acc)]",
              "before:absolute before:top-0 before:h-[3px] before:w-14 before:bg-[var(--accl)] before:content-['']",
              "min-[1081px]:px-11.5 min-[1081px]:pt-11.5 min-[1081px]:pb-12.5 min-[1081px]:before:left-11.5",
              "min-[761px]:max-[1081px]:px-7 min-[761px]:max-[1081px]:pt-8.5 min-[761px]:max-[1081px]:pb-9.5 min-[761px]:max-[1081px]:before:left-7",
              "max-[761px]:px-6 max-[761px]:pt-7.5 max-[761px]:pb-8.5 max-[761px]:before:left-6"
            )}
          >
            <Kick tone="dark">{study.solution.kicker}</Kick>
            <h2 className="mt-3.5 max-w-[22ch] font-display md:text-[42px] text-[28px] font-extralight leading-[1.2] tracking-[-0.028em] text-white">
              {study.solution.title}
            </h2>
            <hr className="mt-4.5 mb-5 h-px w-13 border-0 bg-white/34" />
            {study.solution.paragraphs.map((p, i) => (
              <p key={i} className={cn("max-w-[44ch] text-[15.2px] font-light leading-[1.74] max-[481px]:text-[14.6px] text-white/72", i > 0 && "mt-4")}>
                {p}
              </p>
            ))}
          </Reveal>
        </div>

        {study.shots.length > 0 ? (
          <Reveal className="mt-7.5 grid gap-2.5 min-[761px]:max-[981px]:grid-cols-3 min-[981px]:mt-8.5 min-[981px]:gap-3.5 min-[981px]:max-[1081px]:grid-cols-2 min-[1081px]:grid-cols-3">
            {study.shots.map((src, i) => (
              <div key={i} className="group relative aspect-4/3 overflow-hidden bg-soft-2">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-brand group-hover:scale-104"
                  style={{ backgroundImage: `url(${src})` }}
                />
              </div>
            ))}
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}

export function CaseEcosystem({ study }: { study: CaseStudy }) {
  return (
    <section id="cs-eco" className="py-[clamp(56px,7.6vh,96px)]">
      <Container>
        <Reveal>
          <FullBleedDark>
            <Head kicker={study.ecosystem.kicker} title={study.ecosystem.title} tone="dark" className="mb-10" />
            <div
              className={cn(
                "grid border-t border-t-white/16 border-l-white/14 min-[761px]:border-l min-[761px]:max-[1201px]:grid-cols-2",
                COLS_OVER_1200
              )}
              style={cols(study.ecosystem.items.length)}
            >
              {study.ecosystem.items.map((item, i) => (
                <Reveal
                  as="article"
                  key={item.title}
                  className="group border-b border-white/14 transition-colors duration-400 ease-brand hover:bg-white/5 min-[761px]:border-r"
                >
                  <div
                    className="h-35.5 bg-cover bg-[position:50%_52%]"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="px-6.5 pt-6.5 pb-7.5">
                    <span className="mb-3 block font-display text-[11.5px] leading-[1.3] tracking-[0.2em] text-[var(--accl)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mb-2.25 font-display text-[17px] font-normal leading-[1.3] tracking-[-0.015em] text-white">
                      {item.title}
                    </h3>
                    <p className="text-[13.4px] leading-[1.66] text-white/55">{item.blurb}</p>
                    {item.includes.length > 0 ? (
                      <>
                        <span className="mt-5 mb-2.5 block text-[9.5px] uppercase tracking-[0.2em] text-white/36">
                          Includes
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.includes.map((chip) => (
                            <span
                              key={chip}
                              className="border border-white/16 px-2.5 py-1.5 text-[11px] text-white/60 transition-colors duration-300 ease-brand group-hover:border-white/34"
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                      </>
                    ) : null}
                  </div>
                </Reveal>
              ))}
            </div>
          </FullBleedDark>
        </Reveal>
      </Container>
    </section>
  );
}

export function CaseJourney({ study }: { study: CaseStudy }) {
  return (
    <section id="cs-journey" className="bg-paper py-[clamp(56px,7.6vh,96px)]">
      <Container>
        <Reveal>
          <Head kicker={study.journey.kicker} title={study.journey.title} className="mb-10" />
        </Reveal>
        <ol className="grid border-t border-line min-[761px]:max-[1201px]:grid-cols-3 min-[1201px]:grid-cols-5">
          {study.journey.steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={(Math.min(i, 4) as 0 | 1 | 2 | 3 | 4)}
              className={cn(
                CARD_HOVER,
                "border-line px-5.5 pt-6.5 pb-7.5 max-[1201px]:border-b min-[761px]:border-r",
                i === 0 && "min-[1201px]:pl-0",
                i % 3 === 2 && "min-[761px]:max-[1201px]:border-r-0",
                i === study.journey.steps.length - 1 && "min-[1201px]:border-r-0 min-[1201px]:pr-0"
              )}
            >
              <span className="mb-3.5 block font-display text-[11.5px] tracking-[0.2em] text-[var(--accd)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <b className="mb-2 block font-display text-base font-normal leading-[1.28] tracking-[-0.015em] text-ink">
                {step.title}
              </b>
              <span className="block text-[13.2px] leading-[1.62] text-ink-soft">{step.blurb}</span>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function CaseBuilt({ study }: { study: CaseStudy }) {
  return (
    <section id="cs-built" className="py-[clamp(56px,7.6vh,96px)]">
      <Container>
        <Reveal>
          <FullBleedDark>
            <div className="mb-10 grid gap-8.5 min-[1081px]:grid-cols-[0.9fr_1.1fr] min-[1081px]:gap-14">
              <Head kicker={study.built.kicker} title={study.built.title} tone="dark" />
              <div>
                {study.built.lead ? (
                  <Reveal delay={2}>
                    <p className="max-w-[58ch] text-[15.2px] font-light leading-[1.74] text-white/60 max-[481px]:text-[14.6px]">
                      {study.built.lead}
                    </p>
                  </Reveal>
                ) : null}
              </div>
            </div>

            <div className="grid border-t border-t-white/16 border-l-white/14 min-[761px]:border-l min-[761px]:max-[1081px]:grid-cols-2 min-[1081px]:grid-cols-3">
              {study.built.cells.map((cell, i) => (
                <Reveal
                  as="article"
                  key={cell.title}
                  className={cn(CARD_HOVER, "border-b border-white/14 px-6.5 pt-6.5 pb-7.5 hover:bg-white/5 min-[761px]:border-r")}
                >
                  <span className="mb-3 block font-display text-[11.5px] leading-[1.3] tracking-[0.2em] text-[var(--accl)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2 font-display text-[16.5px] font-normal leading-[1.3] tracking-[-0.015em] text-white">
                    {cell.title}
                  </h3>
                  <p className="text-[13.2px] leading-[1.66] text-white/55">{cell.blurb}</p>
                </Reveal>
              ))}
            </div>

            {study.built.principles.length > 0 ? (
              <div
                className={cn(
                  "mt-[58px] grid border-t border-white/16 pt-8.5 min-[761px]:max-[1201px]:grid-cols-2",
                  COLS_OVER_1200
                )}
                style={cols(study.built.principles.length)}
              >
                {study.built.principles.map((p, i) => (
                  <Reveal
                    key={p.title}
                    className={cn(
                      "border-white/13 min-[821px]:border-r",
                      "min-[1201px]:px-7.5 min-[1201px]:pb-0",
                      "min-[761px]:max-[1201px]:px-6.5 min-[761px]:max-[1201px]:pb-6",
                      "max-[761px]:px-0 max-[761px]:pb-5",
                      i === 0 && "min-[1201px]:pl-0 min-[761px]:max-[1201px]:pl-6.5",
                      i % 2 === 1 && "min-[761px]:max-[1201px]:border-r-0 min-[761px]:max-[1201px]:pr-0",
                      i === study.built.principles.length - 1 && "min-[1201px]:border-r-0 min-[1201px]:pr-0"
                    )}
                  >
                    <b className="block font-display text-base font-normal leading-[1.32] tracking-[-0.015em] text-white">
                      {p.title}
                    </b>
                    {p.sub ? (
                      <span className="mt-2.25 block text-[13.2px] leading-[1.64] text-white/52">
                        {p.sub}
                      </span>
                    ) : null}
                  </Reveal>
                ))}
              </div>
            ) : null}
          </FullBleedDark>
        </Reveal>
      </Container>
    </section>
  );
}

export function CaseImpact({ study }: { study: CaseStudy }) {
  return (
    <section id="cs-impact" className="bg-paper py-[clamp(56px,7.6vh,96px)]">
      <Container>
        <div className="mb-10 grid gap-8.5 min-[1081px]:grid-cols-[0.9fr_1.1fr] min-[1081px]:gap-14">
          <Reveal>
            <Head kicker={study.impact.kicker} title={study.impact.title} />
          </Reveal>
          {study.impact.lead ? (
            <Reveal delay={2}>
              <p className="max-w-[58ch] text-[15.2px] font-light leading-[1.74] max-[481px]:text-[14.6px] text-ink-soft">
                {study.impact.lead}
              </p>
            </Reveal>
          ) : null}
        </div>

        <dl className={cn(
            "grid gap-7.5 min-[761px]:max-[981px]:grid-cols-2 min-[981px]:gap-9.5",
            COLS_OVER_1080
          )} style={cols(study.impact.metrics.length)}>
          {study.impact.metrics.map((m, i) => (
            <Reveal key={m.label} delay={(Math.min(i, 4) as 0 | 1 | 2 | 3 | 4)}>
              <span className="mb-4.5 flex h-8 w-8 items-center justify-center rounded-full border border-ink/20">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="h-3.75 w-3.75 fill-none stroke-[var(--accd)] stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"
                >
                  <path d="M5 12.5l4.2 4.2L19 7" />
                </svg>
              </span>
              <dd className="block font-display text-[clamp(30px,3.1vw,42px)] font-extralight leading-none tracking-[-0.042em] text-[var(--acc)] max-[481px]:text-[30px]">
                {m.value}
              </dd>
              <dt className="mt-3.5 mb-2 font-display text-[15.5px] font-normal leading-[1.12] tracking-[-0.01em] text-ink">
                {m.label}
              </dt>
              {m.blurb ? (
                <dd className="max-w-[30ch] text-[13.2px] leading-[1.66] text-ink-soft">{m.blurb}</dd>
              ) : null}
            </Reveal>
          ))}
        </dl>

        {study.impact.scope.length > 0 ? (
          <Reveal className="mt-13 border-t border-line pt-7.5">
            <span className="mb-3.5 block text-[9.5px] uppercase tracking-[0.2em] text-ink-faint">
              Solution scope
            </span>
            <div className="flex flex-wrap gap-1.5">
              {study.impact.scope.map((chip) => (
                <span
                  key={chip}
                  className="border border-line bg-panel px-2.5 py-1.5 text-[11px] text-ink-soft transition-colors duration-300 ease-brand hover:border-[var(--acc)] hover:text-[var(--accd)]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}

export function CaseCta({ study }: { study: CaseStudy }) {
  return (
    <section id="cs-cta" className="py-[clamp(56px,7.6vh,96px)]">
      <Container>
        <Reveal>
          <FullBleedDark className="[clip-path:polygon(0_44px,26%_44px,calc(26%_+_88px)_0,100%_0,100%_100%,0_100%)]">
            <div className="grid items-end gap-8.5 min-[1081px]:grid-cols-[0.95fr_1.05fr] min-[1081px]:gap-16">
              <div>
                <Kick tone="dark" className="mb-[22px]">
                  {study.cta.kicker}
                </Kick>
                <h2 className="mt-3.5 max-w-[17ch] font-display md:text-[42px] text-[28px] font-extralight leading-[1.16] tracking-[-0.03em] text-white">
                  {study.cta.title}
                </h2>
              </div>
              <div>
                <p className="max-w-[52ch] text-[15.4px] font-light leading-[1.76] text-white/62">
                  {study.cta.body}
                </p>
                <div className="mt-6.5 flex flex-wrap gap-3">
                  <ButtonLink href="/#contact" variant="caseBrand" size="case" arrow>
                    Discuss your project
                  </ButtonLink>
                  <ButtonLink href="/work" variant="caseLine" size="case" arrow>
                    More case studies
                  </ButtonLink>
                </div>
              </div>
            </div>
          </FullBleedDark>
        </Reveal>
      </Container>
    </section>
  );
}
