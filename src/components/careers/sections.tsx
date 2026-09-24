import Image from "next/image";
import type { ReactNode } from "react";

import { ButtonLink } from "@/components/ui/button";
import { DARK_GRADIENT } from "@/components/ui/dark-band";
import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";
import { careers } from "@/data/careers";

/** `.band` on this page. */
const BAND = "py-[clamp(56px,7.6vh,96px)]";

/**
 * `--abpad` on this page: the full-bleed hero and dark bands keep a 32px
 * gutter at every width, even where `.wrap` steps down to 24 / 18px.
 */
const CR_BLEED = "px-[max(2rem,calc((100vw-var(--container-site))/2+2rem))]";

/** The shared card lift `.hstep` picks up from the template's hover mechanics. */
const CARD_LIFT =
  "transition-[background,transform,box-shadow,border-color,translate] duration-400 ease-brand hover:-translate-y-[3px] hover:shadow-[0_26px_48px_-30px_rgb(0_0_0/0.42),inset_0_1px_0_var(--color-brand)]";

/** `.kicker` — same enlarged eyebrow the other pages use. */
function Kicker({
  children,
  onDark = false,
  className,
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        // careers keeps the original 11.5px eyebrow; the enlarged one is only on
        // index, about and solutions.
        "accent-underscore mb-[22px] font-sans text-[11.5px] font-medium uppercase tracking-[0.22em]",
        onDark ? "text-brand-on-dark" : "text-brand-deep",
        className
      )}
    >
      {children}
    </div>
  );
}

/** `.abrule` — the short accent rule under a dark heading. */
function AbRule({ className }: { className?: string }) {
  return <hr className={cn("h-px w-16 border-0 bg-brand-on-dark", className)} />;
}

/** `.cr-split` / `.cr-cult-top` — the shared 0.9fr / 1.1fr header. */
function CrSplit({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("grid items-start gap-11 max-[981px]:gap-9 min-[1081px]:grid-cols-[0.9fr_1.1fr] min-[1081px]:gap-21", className)}>
      {children}
    </div>
  );
}

/** `.darkband` — full-bleed charcoal panel with the angled top-left notch. */
function DarkPanel({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        "relative left-1/2 w-screen -translate-x-1/2 overflow-hidden",
        DARK_GRADIENT,
        CR_BLEED,
        // `#cr-culture .darkband` outranks the template's responsive block, so
        // the 132 / 118 padding and the notch hold at every width.
        "pt-[132px] pb-[118px]",
        "[clip-path:polygon(0_48px,26%_48px,calc(26%+94px)_0,100%_0,100%_100%,0_100%)]"
      )}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */

/** The hero: a full-bleed dark band, copy left and a full-height photo right. */
export function CareersHero() {
  const { hero } = careers;
  return (
    // The hero stays pinned while the first band scrolls over it.
    <section id="cr-hero" className="sticky top-0 z-0 p-0 motion-reduce:relative">
      <Container>
        <div
          className={cn(
            "relative left-1/2 w-screen -translate-x-1/2 overflow-hidden",
            DARK_GRADIENT
          )}
        >
          <div className="grid items-stretch gap-11 max-[981px]:gap-9 min-[1081px]:grid-cols-[1.05fr_0.95fr] min-[1081px]:gap-0">
            <div
              className={cn(
                // `.crh-txt`: 150/132 beside the photo, 120/60 stacked, 104/52 from 980 and a 96px top from 760.
                "relative z-[2] pt-[104px] pb-[52px] max-[761px]:pt-24 min-[981px]:pt-[120px] min-[981px]:pb-[60px] min-[1081px]:pt-[150px] min-[1081px]:pb-[132px]",
                CR_BLEED
              )}
            >
              <Reveal>
                <Kicker onDark className="mb-0">
                  {hero.kicker}
                </Kicker>
                <h1 className="mt-6.5 max-w-[13ch] font-display text-[clamp(38px,5vw,64px)] font-extralight leading-[1.06] tracking-[-0.035em] text-white max-[481px]:text-[27px] max-[481px]:leading-[1.14]">
                  {hero.title}{" "}
                  <em className="text-brand-on-dark not-italic">{hero.titleAccent}</em>
                </h1>
                <AbRule className="mt-7.5 mb-7" />
                <p className="max-w-[46ch] text-[16px] font-light leading-[1.78] text-white/62">
                  {hero.lede}
                </p>
                <div className="mt-8.5 flex flex-wrap gap-3.5 max-[481px]:w-full max-[481px]:[&>a]:flex-auto max-[481px]:[&>a]:justify-center">
                  <ButtonLink href={`mailto:${hero.ctaEmail}`} variant="brand" arrow>
                    Join now
                  </ButtonLink>
                  <ButtonLink href="/about" variant="lineOnDark" arrow>
                    Meet the team
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <div className="relative min-h-[300px] overflow-hidden min-[981px]:min-h-[340px] min-[1081px]:min-h-[520px]">
              {hero.image ? (
                <Image
                  src={hero.image}
                  alt={hero.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1080px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : null}
              {/* fades the photo into the band: downward when stacked, sideways when beside */}
              <span
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,28,28,.85)_0%,rgba(28,28,28,.1)_45%)] min-[1081px]:bg-[linear-gradient(90deg,#1c1c1c_0%,rgba(28,28,28,.55)_28%,rgba(28,28,28,.1)_70%)]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** "What to expect" — the perks ledger. */
export function WhatToExpect() {
  const { expect } = careers;
  return (
    <section id="cr-expect" className={cn("bg-paper", BAND)}>
      <Container>
        <Reveal className="mb-16">
          <CrSplit>
            <div className="max-w-[660px]">
              <Kicker>{expect.kicker}</Kicker>
              <h2 className="text-[clamp(29px,4.3vw,50px)] font-extralight leading-[1.12] tracking-[-0.03em]">
                {expect.title}
              </h2>
            </div>
            <p className="max-w-[56ch] text-[16px] font-light leading-[1.8] text-ink-soft max-[481px]:text-[14.6px]">
              {expect.lede}
            </p>
          </CrSplit>
        </Reveal>

        <ul className="grid border-t border-line min-[761px]:grid-cols-2 min-[821px]:border-l min-[1081px]:grid-cols-3">
          {expect.perks.map((perk, i) => (
            <Reveal
              as="li"
              key={perk.label}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="group flex items-center gap-5 border-t border-b border-l border-line bg-panel px-8 py-8.5 transition-[background,transform,box-shadow,translate] duration-400 ease-brand hover:-translate-y-[5px] hover:bg-soft hover:shadow-lift min-[821px]:border-r"
            >
              <span className="flex h-13 w-13 flex-none items-center justify-center rounded-lg border border-line bg-soft transition-colors duration-400 ease-brand group-hover:border-brand/45">
                {perk.icon ? (
                  <Image src={perk.icon} alt="" width={26} height={26} className="h-6.5 w-6.5 object-contain" />
                ) : null}
              </span>
              <b className="font-display text-[17px] font-normal tracking-[-0.012em] text-ink">
                {perk.label}
              </b>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** "Our culture" — dark band plus the full-bleed photo marquee. */
export function CareersCulture() {
  const { culture } = careers;
  return (
    <section id="cr-culture">
      <Container>
        <Reveal>
          <DarkPanel>
            <CrSplit>
              <div>
                <Kicker onDark>{culture.kicker}</Kicker>
                <h2 className="mt-4.5 max-w-[14ch] text-[clamp(29px,4.3vw,50px)] font-extralight leading-[1.12] tracking-[-0.03em] text-white">
                  {culture.title}
                </h2>
                <AbRule className="mt-6.5" />
              </div>
              <div className="mt-8.5 grid gap-7 min-[821px]:grid-cols-2 min-[821px]:gap-11">
                {culture.blocks.map((block) => (
                  <div key={block.title}>
                    <h4 className="mb-3 font-display text-[18px] font-normal tracking-[-0.015em] text-white">
                      {block.title}
                    </h4>
                    <p className="text-[14.6px] font-light leading-[1.75] text-white/56">
                      {block.blurb}
                    </p>
                  </div>
                ))}
              </div>
            </CrSplit>

            {/* Edge-masked marquee; figures butt together with a hairline between. */}
            <div className="group relative left-1/2 mt-19 w-screen -translate-x-1/2 overflow-hidden border-y border-white/14 [mask-image:linear-gradient(90deg,transparent,#000_4%,#000_96%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,#000_4%,#000_96%,transparent)]">
              <div className="flex w-max animate-marquee [animation-duration:68s] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                {[0, 1].map((pass) => (
                  <div key={pass} className="flex" aria-hidden={pass === 1 ? true : undefined}>
                    {culture.gallery.map((img, i) => (
                      <figure
                        key={`${pass}-${i}`}
                        className="group/fig relative m-0 h-[150px] flex-none overflow-hidden border-r border-white/14 min-[481px]:h-[180px] min-[761px]:h-[230px] min-[981px]:h-[320px]"
                      >
                        <Image
                          src={img.src}
                          alt={pass === 1 ? "" : img.alt}
                          width={480}
                          height={320}
                          className="h-full w-auto max-w-none object-cover saturate-90 transition-[transform,filter] duration-900 ease-brand group-hover/fig:scale-104 group-hover/fig:saturate-100"
                        />
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </DarkPanel>
        </Reveal>
      </Container>
    </section>
  );
}

/** "How we hire" — four ruled steps, each drawing a rule on hover. */
export function HowWeHire() {
  const { hiring } = careers;
  return (
    <section id="cr-hire" className={cn("bg-paper", BAND)}>
      <Container>
        <Reveal className="mb-16">
          <CrSplit>
            <div className="max-w-[660px]">
              <Kicker>{hiring.kicker}</Kicker>
              <h2 className="text-[clamp(29px,4.3vw,50px)] font-extralight leading-[1.12] tracking-[-0.03em]">
                {hiring.title}
              </h2>
            </div>
            <p className="max-w-[56ch] text-[16px] font-light leading-[1.8] text-ink-soft max-[481px]:text-[14.6px]">
              {hiring.lede}
            </p>
          </CrSplit>
        </Reveal>

        <ol className="grid border-t border-line min-[761px]:grid-cols-2 min-[1081px]:grid-cols-4">
          {hiring.steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className={cn(
                "group relative border-line",
                CARD_LIFT,
                // `.hstep` ladder: 1 col to 760, 2 cols to 1080, 4 from 1081; the
                // column divider only appears from 821. Padding steps
                // 30/24/34 -> 34/26/38 -> 44/34/46 at 980 and 1080.
                "border-t px-6 pt-[30px] pb-[34px] first:border-t-0",
                "min-[761px]:border-t-0 min-[761px]:nth-[n+3]:border-t",
                "min-[821px]:border-r min-[821px]:nth-[2n]:border-r-0",
                "min-[981px]:px-[26px] min-[981px]:pt-[34px] min-[981px]:pb-[38px]",
                "min-[1081px]:px-8.5 min-[1081px]:pt-11 min-[1081px]:pb-11.5 min-[1081px]:first:pl-0 min-[1081px]:last:border-r-0 min-[1081px]:last:pr-0",
                "min-[1081px]:nth-[2n]:border-r min-[1081px]:nth-[n+3]:border-t-0"
              )}
            >
              <span
                aria-hidden
                className="absolute inset-x-0 -top-px h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-500 ease-brand group-hover:scale-x-100"
              />
              <span className="block font-display text-[12.5px] tracking-[0.2em] text-brand-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-5.5 mb-5 block leading-[0] text-brand/50 transition-colors duration-400 ease-brand group-hover:text-brand">
                <svg
                  viewBox={step.icon.viewBox}
                  width={40}
                  height={40}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={step.icon.strokeWidth}
                  aria-hidden
                  // Icon markup comes from our own templates at build time.
                  dangerouslySetInnerHTML={{ __html: step.icon.markup }}
                />
              </span>
              <h3 className="mb-3 font-display text-[19px] font-normal tracking-[-0.015em] text-ink">
                {step.title}
              </h3>
              <p className="max-w-[32ch] text-[14.4px] leading-[1.72] text-ink-soft">{step.blurb}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/** "Open applications" — the closing dark band. */
export function OpenApplications() {
  const { apply } = careers;
  return (
    <section id="cr-apply">
      <Container>
        <Reveal>
          <DarkPanel>
            <div className="grid items-end gap-11 max-[981px]:gap-9 min-[1081px]:grid-cols-[0.95fr_1.05fr] min-[1081px]:gap-21">
              <div>
                <Kicker onDark>{apply.kicker}</Kicker>
                <h2 className="mt-4 max-w-[15ch] text-[clamp(30px,3.4vw,46px)] font-extralight leading-[1.14] tracking-[-0.03em] text-white max-[481px]:text-[22px]">
                  {apply.title}
                </h2>
              </div>
              <div>
                <p className="max-w-[54ch] text-[16px] font-light leading-[1.8] text-white/62">
                  {apply.lede}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3.5 max-[481px]:w-full max-[481px]:[&>a:first-child]:flex-auto max-[481px]:[&>a:first-child]:justify-center">
                  <ButtonLink href={`mailto:${apply.email}`} variant="brand" arrow>
                    Join now
                  </ButtonLink>
                  <a
                    href={`mailto:${apply.email}`}
                    className="border-b border-[rgb(120_193_196/0.4)] pb-1.5 font-display text-[15px] tracking-[0.02em] text-brand-on-dark transition-colors duration-300 ease-brand hover:border-brand-on-dark"
                  >
                    {apply.email}
                  </a>
                </div>
              </div>
            </div>
          </DarkPanel>
        </Reveal>
      </Container>
    </section>
  );
}
