import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

import { ButtonLink } from "@/components/ui/button";
import { BLEED_PADDING, DARK_GRADIENT } from "@/components/ui/dark-band";
import { CountUp } from "@/components/ui/count-up";
import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionKicker } from "@/components/ui/section-kicker";
import { cn } from "@/lib/cn";
import { about, type InlineIcon } from "@/data/about";

/** The four numbered accents used across the value matrix and the think columns. */
const ACCENTS = ["#33ADAE", "#3C90C1", "#57A876", "#D5964C"] as const;

/** `.band` — the light sections' vertical rhythm. */
const BAND = "py-[clamp(80px,12vh,144px)]";

export function Lines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className="block">
          {line}
        </span>
      ))}
    </>
  );
}

/** `.abrule` — the short accent rule under a dark-band heading. */
function AbRule({ onDark = true }: { onDark?: boolean }) {
  return (
    <hr className={cn("mt-6.5 h-px w-16 border-0", onDark ? "bg-brand-on-dark" : "bg-brand")} />
  );
}

/**
 * `.darkband` — full-bleed charcoal panel with the angled top-left notch.
 * Its generous padding is what gives these sections their height.
 */
function DarkBandPanel({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        "relative left-1/2 w-screen -translate-x-1/2 overflow-hidden",
        DARK_GRADIENT,
        BLEED_PADDING,
        "py-[60px] min-[981px]:pt-[150px] min-[981px]:pb-[140px]",
        "min-[981px]:[clip-path:polygon(0_48px,26%_48px,calc(26%+94px)_0,100%_0,100%_100%,0_100%)]"
      )}
    >
      {children}
    </div>
  );
}

/** `.absplit` — the shared 0.9fr / 1.1fr header used by most sections. */
function AbSplit({
  children,
  className,
  /** "Our story" leads with the narrative, so its columns invert to 1.5fr / 1fr. */
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid items-start gap-9 min-[1081px]:gap-21",
        wide ? "min-[1081px]:grid-cols-[1.5fr_1fr]" : "min-[1081px]:grid-cols-[0.9fr_1.1fr]",
        className
      )}
    >
      {children}
    </div>
  );
}

function StrokeIcon({ icon, size }: { icon: InlineIcon; size: number }) {
  return (
    <svg
      viewBox={icon.viewBox}
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      aria-hidden
      // Icon markup comes from our own templates at build time.
      dangerouslySetInnerHTML={{ __html: icon.markup }}
    />
  );
}

/* ------------------------------------------------------------------ */

export function AboutHero() {
  const { hero } = about;
  return (
    // Unlike the home and work heroes, the About template never runs the header
    // in "over-hero" mode — the hero starts below it, so no data-hero here.
    <section id="ab2-hero" className="relative overflow-hidden bg-night">
      {hero.image ? (
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          // Slow ken-burns drift, as `ab2kb` does in the template.
          className="animate-kenburns object-cover object-[62%_50%] [animation-duration:24s] motion-reduce:animate-none"
        />
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(3,8,18,.92)_0%,rgba(3,8,18,.78)_44%,rgba(3,8,18,.36)_63%,rgba(3,8,18,.03)_100%),linear-gradient(0deg,rgba(3,8,18,.55)_0%,rgba(3,8,18,0)_46%)]" />

      <Container className="relative z-[2] w-full pt-[120px] pb-[96px]">
        <Reveal className="max-w-full lg:max-w-[min(600px,58%)]">
          <SectionKicker onDark className="mb-4">{hero.kicker}</SectionKicker>
          <h1 className="mb-6 text-[clamp(36px,4.6vw,52px)] font-extralight leading-[1.06] tracking-[-0.035em] text-white">
            <Lines lines={hero.title} />
          </h1>
          <p className="max-w-[60ch] text-[clamp(16px,1.9vw,18.5px)] font-light leading-[1.72] text-white/78">
            {hero.lede}
          </p>
          <div className="mt-8.5">
            <ButtonLink href="/#contact" variant="brand" arrow>
              Let&rsquo;s talk
            </ButtonLink>
          </div>
        </Reveal>

        <dl className="mt-14 grid grid-cols-2 gap-x-10 gap-y-8 border-t border-white/18 pt-8 lg:grid-cols-4">
          {hero.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <dd className="font-display text-[clamp(32px,3.2vw,46px)] font-extralight leading-none tracking-[-0.04em] text-white">
                {stat.to ? (
                  <CountUp to={stat.to} suffix={stat.suffix} plus={stat.plus} delay={260 + i * 160} />
                ) : (
                  stat.value
                )}
              </dd>
              <dt className="mt-3 max-w-[16em] text-[13px] leading-[1.5] text-white/55">
                {stat.label}
              </dt>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}

/**
 * "Where we create value" — a hairline matrix whose cells turn dark on hover,
 * each numbered and tinted with its own accent.
 */
export function WhereWeCreateValue() {
  const { value } = about;
  return (
    <section id="ab-solve" className={cn("bg-paper", BAND)}>
      <Container>
        <Reveal className="mb-11 md:mb-16">
          <AbSplit>
            <div>
              <SectionKicker>{value.kicker}</SectionKicker>
              <h2 className="mt-4 text-[clamp(29px,4.3vw,50px)] font-extralight leading-[1.12] tracking-[-0.03em]">
                {value.title}
              </h2>
            </div>
            <p className="max-w-[56ch] text-[16px] font-light leading-[1.8] text-ink-soft">
              {value.lede}
            </p>
          </AbSplit>
        </Reveal>

        <div className="grid border-t border-line min-[761px]:grid-cols-2 min-[761px]:border-l min-[1081px]:grid-cols-4">
          {value.cells.map((cell, i) => {
            const acc = ACCENTS[i % ACCENTS.length];
            return (
              <Reveal
                as="article"
                key={cell.title}
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                style={{ "--acc": acc } as CSSProperties}
                className={cn(
                  "group relative flex flex-col overflow-hidden border-b border-line bg-panel min-[981px]:min-h-[300px]",
                  "px-9 pt-11 pb-11.5 min-[761px]:border-r",
                  "transition-[background,transform,box-shadow,border-color,translate,scale] duration-450 ease-brand hover:-translate-y-[3px] hover:bg-[#0F1E27] hover:shadow-[0_26px_48px_-30px_rgb(0_0_0/0.42),inset_0_1px_0_var(--color-brand)]"
                )}
              >
                <span
                  aria-hidden
                  className="absolute top-0 left-9 h-0.5 w-6.5 bg-[var(--acc)] transition-[width] duration-500 ease-brand group-hover:w-16"
                />
                <span className="mb-6 block font-display text-[32px] font-extralight leading-[1.3] tracking-[-0.03em] text-[var(--acc)] opacity-50 transition-opacity duration-450 ease-brand group-hover:opacity-100">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-3 font-display text-[19px] font-normal leading-[1.3] tracking-[-0.015em] transition-colors duration-450 ease-brand group-hover:text-white">
                  {cell.title}
                </h3>
                <p className="max-w-[40ch] text-[14.4px] leading-[1.72] text-ink-soft transition-colors duration-450 ease-brand group-hover:text-white/62">
                  {cell.blurb}
                </p>
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-5 bottom-4 leading-none text-[var(--acc)] opacity-34 transition-[opacity,transform,translate,scale] duration-550 ease-brand group-hover:-translate-y-[3px] group-hover:opacity-50"
                >
                  <StrokeIcon icon={cell.icon} size={66} />
                </span>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/** "How we think" — ruled columns on the dark band. */
export function HowWeThink() {
  const { think } = about;
  return (
    <section id="ab-think">
      <Container>
        <Reveal>
          <DarkBandPanel>
            <AbSplit>
              <div>
                <SectionKicker onDark>{think.kicker}</SectionKicker>
                <h2 className="mt-4.5 max-w-[16ch] text-[clamp(29px,4.3vw,50px)] font-extralight leading-[1.12] tracking-[-0.03em] text-white">
                  <Lines lines={think.title} />
                </h2>
                <AbRule />
              </div>
              <p className="max-w-[56ch] text-[16px] font-light leading-[1.8] text-white/82">
                {think.lede}
              </p>
            </AbSplit>

            <div className="mt-13 grid border-t border-white/16 min-[601px]:grid-cols-2 min-[981px]:mt-21.5 min-[1081px]:grid-cols-3 min-[1201px]:grid-cols-4">
              {think.columns.map((col, i) => (
                <div
                  key={col.title}
                  style={{ "--acc": ACCENTS[i % ACCENTS.length] } as CSSProperties}
                  className={cn(
                    "group relative border-b border-white/12 py-7 transition-colors duration-450 ease-brand hover:bg-[rgba(120,193,196,.06)]",
                    "min-[981px]:border-r min-[981px]:border-b-0 min-[981px]:px-8.5 min-[981px]:pt-11 min-[981px]:pb-11.5 min-[981px]:first:pl-0 min-[981px]:last:border-r-0 min-[981px]:last:pr-0"
                  )}
                >
                  <span
                    aria-hidden
                    className="absolute -top-px left-0 h-0.5 w-11 bg-brand transition-[width] duration-450 ease-brand group-hover:w-18 min-[981px]:left-8.5 min-[981px]:first:left-0"
                  />
                  <span className="block font-display text-[48px] font-extralight leading-none tracking-[-0.04em] text-[var(--acc)] opacity-92 transition-[transform,opacity,translate,scale] duration-450 ease-brand group-hover:-translate-y-[3px] group-hover:opacity-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6.5 mb-3 font-display text-[19px] font-normal tracking-[-0.015em] text-white">
                    {col.title}
                  </h3>
                  <p className="max-w-[34ch] text-[14.4px] font-light leading-[1.72] text-white/62">
                    {col.blurb}
                  </p>
                </div>
              ))}
            </div>
          </DarkBandPanel>
        </Reveal>
      </Container>
    </section>
  );
}

export function WhatWeBelieve() {
  const { believe } = about;
  return (
    <section id="ab-vision" className={cn("bg-paper", BAND)}>
      <Container>
        <AbSplit>
          <Reveal>
            <SectionKicker>{believe.kicker}</SectionKicker>
            <h2 className="mt-4.5 max-w-[15ch] text-[clamp(30px,3.6vw,44px)] font-extralight leading-[1.12] tracking-[-0.03em]">
              <Lines lines={believe.title} />
            </h2>
          </Reveal>
          <Reveal delay={2}>
            {believe.paragraphs.map((p, i) => (
              <p
                key={i}
                className="mb-4.5 max-w-[56ch] text-[16.5px] font-light leading-[1.85] text-ink-soft last:mb-0"
              >
                {p}
              </p>
            ))}
          </Reveal>
        </AbSplit>
      </Container>
    </section>
  );
}

/** "Our story" — the narrative plus the office ledger that closes it. */
export function OurStory() {
  const { story } = about;
  return (
    <section id="ab-edge">
      <Container>
        <Reveal>
          <DarkBandPanel>
            <AbSplit wide>
              <div>
                <SectionKicker onDark>{story.kicker}</SectionKicker>
                <h2 className="mt-4.5 max-w-[17ch] text-[clamp(30px,3.4vw,42px)] font-extralight leading-[1.12] tracking-[-0.03em] text-white">
                  <Lines lines={story.title} />
                </h2>
                <AbRule />
              </div>
              <div>
                {story.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="mb-4 max-w-[56ch] text-[16px] font-light leading-[1.8] text-white/82 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </AbSplit>

            <div className="mt-16 grid border-t border-white/16 pt-10 max-[680px]:gap-0 min-[681px]:grid-cols-3 min-[681px]:gap-6">
              {story.locations.map((loc, i) => (
                <div
                  key={loc.city}
                  className={cn(
                    "max-[680px]:border-b max-[680px]:border-white/10 max-[680px]:py-5.5 max-[680px]:last:border-b-0",
                    "min-[681px]:border-r min-[681px]:border-white/10 min-[681px]:pr-7 min-[681px]:last:border-r-0",
                    i === 0 && "max-[680px]:pt-0"
                  )}
                >
                  <div className="flex items-center gap-3.5">
                    {loc.flag ? (
                      <Image
                        src={loc.flag}
                        alt=""
                        width={34}
                        height={23}
                        style={{ width: 34, height: "auto" }}
                        className="rounded-[4px]"
                      />
                    ) : null}
                    <span className="font-display text-[30px] font-extralight leading-none tracking-[-0.03em] text-white">
                      {loc.city}
                    </span>
                  </div>
                  <div className="mt-3.5 text-[14px] text-brand-on-dark">{loc.country}</div>
                  <div className="mt-2 text-[13.5px] text-white/50">{loc.address}</div>
                </div>
              ))}
            </div>
          </DarkBandPanel>
        </Reveal>
      </Container>
    </section>
  );
}

export function OurTeam() {
  const { team } = about;
  return (
    <section id="ab-team" className={cn("bg-paper", BAND)}>
      <Container>
        {/* the team header sits tighter to its grid than the other splits */}
        <Reveal className="mb-9 md:mb-[46px]">
          <AbSplit>
            <div>
              <SectionKicker>{team.kicker}</SectionKicker>
              <h2 className="mt-4 text-[clamp(29px,4.3vw,50px)] font-extralight leading-[1.12] tracking-[-0.03em]">
                {team.title}
              </h2>
            </div>
            <p className="max-w-[56ch] text-[16px] font-light leading-[1.8] text-ink-soft">{team.lede}</p>
          </AbSplit>
        </Reveal>

        <ul className="grid grid-cols-1 gap-x-6 gap-y-5.5 min-[761px]:grid-cols-2 min-[981px]:grid-cols-3 min-[1201px]:grid-cols-4">
          {team.members.map((m, i) => (
            <Reveal as="li" key={m.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className="group relative">
              <div className="relative aspect-[4/4.6] overflow-hidden border border-line bg-soft-2 rounded-xl">
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="(max-width: 820px) 100vw, (max-width: 1080px) 50vw, 25vw"
                    className="object-cover transition-transform duration-900 ease-brand group-hover:scale-104"
                  />
                ) : null}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,30,39,0)_55%,rgba(15,30,39,.42)_100%)] opacity-0 transition-opacity duration-450 ease-brand group-hover:opacity-100"
                />
                {m.linkedin ? (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="absolute right-3 bottom-3 z-[2] flex h-9 w-9 translate-y-2 items-center justify-center bg-brand opacity-0 transition-[opacity,transform,background,translate,scale] duration-350 ease-brand group-hover:translate-y-0 group-hover:opacity-100 hover:bg-brand-deep focus-visible:translate-y-0 focus-visible:opacity-100 rounded-full"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-white">
                      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C20.4 8.75 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2V21H9z" />
                    </svg>
                  </a>
                ) : null}
              </div>
              <h3 className="mt-5 font-display text-[19px] font-normal leading-[1.25] tracking-[-0.015em] text-ink">
                {m.name}
              </h3>
              <span className="mt-2 block text-[13px] leading-[1.5] text-ink-soft max-[760px]:whitespace-normal min-[761px]:whitespace-nowrap">
                {m.role}
              </span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function OurCulture() {
  const { culture } = about;
  return (
    <section id="ab-culture">
      <Container>
        <Reveal>
          <DarkBandPanel>
            <AbSplit>
              <div>
                <SectionKicker onDark>{culture.kicker}</SectionKicker>
                <h2 className="mt-4.5 max-w-[14ch] text-[clamp(28px,3.4vw,44px)] font-extralight leading-[1.12] tracking-[-0.03em] text-white">
                  <Lines lines={culture.title} />
                </h2>
                <AbRule />
              </div>
              <div>
                {culture.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className={cn("max-w-[56ch] text-[16px] font-light leading-[1.8] text-white/82", i > 0 && "mt-4.5")}
                  >
                    {p}
                  </p>
                ))}
                <div className="mt-7.5">
                  <ButtonLink href="/careers" variant="brand" arrow>
                    Explore Careers
                  </ButtonLink>
                </div>
              </div>
            </AbSplit>

            {/* Full-bleed, edge-masked marquee that pauses on hover. */}
            <div className="group relative left-1/2 mt-19 w-screen -translate-x-1/2 overflow-hidden border-y border-white/14 [mask-image:linear-gradient(90deg,transparent,#000_4%,#000_96%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,#000_4%,#000_96%,transparent)]">
              <div className="flex w-max animate-marquee [animation-duration:68s] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                {[0, 1].map((pass) => (
                  <div key={pass} className="flex" aria-hidden={pass === 1 ? true : undefined}>
                    {culture.gallery.map((img, i) => (
                      <figure
                        key={`${pass}-${i}`}
                        className="group/fig relative mr-3.5 h-[150px] flex-none overflow-hidden rounded-[12px] min-[481px]:h-[180px] min-[761px]:h-[230px] min-[981px]:h-[320px]"
                      >
                        <Image
                          src={img.src}
                          alt={pass === 1 ? "" : img.alt}
                          width={480}
                          height={320}
                          className="h-full w-auto max-w-none object-cover saturate-85 transition-[transform,filter,translate,scale] duration-900 ease-brand group-hover/fig:scale-104 group-hover/fig:saturate-100"
                        />
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </DarkBandPanel>
        </Reveal>
      </Container>
    </section>
  );
}

export function OurImpact() {
  const { impact } = about;
  return (
    <section id="ab-impact" className={BAND}>
      <Container>
        <Reveal className="grid items-center gap-8 min-[861px]:grid-cols-2 min-[861px]:gap-14">
          <div className="relative aspect-4/3 max-h-[520px] overflow-hidden rounded-[14px] bg-soft-2">
            {impact.image ? (
              <Image
                src={impact.image}
                alt={impact.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-[14px] object-cover"
              />
            ) : null}
          </div>
          <div>
            <SectionKicker>{impact.kicker}</SectionKicker>
            <h2 className="max-w-[15ch] text-[clamp(29px,4.3vw,50px)] font-extralight leading-[1.12] tracking-[-0.03em]">
              <Lines lines={impact.title} />
            </h2>
            {impact.paragraphs.map((p, i) => (
              <p
                key={i}
                className="mb-4 max-w-[52ch] text-[16px] font-light leading-[1.8] text-ink-soft last:mb-0"
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function AboutCta() {
  const { cta } = about;
  return (
    <section id="ab-cta" className={BAND}>
      <Container>
        <Reveal className="mx-auto max-w-[780px] text-center">
          <SectionKicker className="mb-4 flex justify-center">{cta.kicker}</SectionKicker>
          <h2 className="mb-5 text-[clamp(30px,4.2vw,52px)] font-extralight leading-[1.08] tracking-[-0.03em]">
            {cta.title}
          </h2>
          <p className="mx-auto mb-8 max-w-[52ch] text-[17px] font-light leading-[1.72] text-ink-soft">
            {cta.body}
          </p>
          <div className="flex justify-center">
            <ButtonLink href="/#contact" variant="brand" arrow>
              Start a conversation
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
