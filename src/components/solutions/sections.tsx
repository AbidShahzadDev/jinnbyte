import Image from "next/image";
import type { CSSProperties } from "react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";
import { solutions } from "@/data/solutions";
import { BAND, Icon, Kicker, Lines, SecHead } from "@/components/solutions/section-parts";
import { IndustryAccordion } from "@/components/solutions/industry-accordion";

/* ------------------------------------------------------------------ */

export function SolutionsHero() {
  const { hero } = solutions;
  return (
    <section
      data-hero
      className="relative -mt-19 flex min-h-[max(660px,100svh)] items-center overflow-hidden bg-night"
    >
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_50%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(3,8,18,.9)_0%,rgba(3,8,18,.74)_26%,rgba(3,8,18,.28)_58%,rgba(3,8,18,0)_100%)]" />

      <Container className="relative z-[2] flex-1 pt-32 pb-16 md:pt-[140px] md:pb-30">
        <div className="max-w-full lg:max-w-[min(64ch,66%)]">
          <h1 className="mb-5 text-[clamp(30px,4.6vw,58px)] font-extralight leading-[1.12] tracking-[-0.035em] text-white">
            {hero.title}
          </h1>
          <p className="mb-7.5 max-w-[52ch] text-[clamp(16px,1.9vw,17px)] font-light text-white/80">
            {hero.lede}
          </p>
          <ButtonLink href="/#contact" variant="brand" arrow>
            Discuss your project
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

/** "Where we help" — four entry points in a two-column ledger, each topped by its accent. */
export function WhereWeHelp() {
  const { whereWeHelp } = solutions;
  return (
    <section className={BAND}>
      <Container>
        <SecHead
          kicker={whereWeHelp.kicker}
          title={<Lines lines={whereWeHelp.title} />}
          lede={whereWeHelp.lede}
        />

        <div className="grid gap-x-[60px] gap-y-1.5 min-[761px]:grid-cols-2">
          {whereWeHelp.cards.map((card, i) => (
            <Reveal
              as="article"
              key={card.title}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              style={{ "--acc": card.accent } as CSSProperties}
              className="relative border-t-2 border-[var(--acc)] pt-8.5 pb-10.5"
            >
              <div className="mb-5 font-display text-[13.5px] font-extralight tracking-[0.2em] text-[var(--acc)]">
                {card.n}
              </div>
              <h3 className="mb-3.5 text-[clamp(22px,2.5vw,28px)] font-light leading-[1.14] tracking-[-0.02em]">
                {card.title}
              </h3>
              <p className="max-w-[46ch] text-[14.5px] leading-[1.72] text-ink-soft">{card.blurb}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** "Industries" — a dark band carrying the expanding image accordion. */
export function IndustriesStrip() {
  const { industries } = solutions;
  return (
    <section id="industries" className={cn("bg-[#141414]", BAND)}>
      <Container>
        <Reveal className="mb-[clamp(40px,5vh,60px)] flex flex-wrap items-end justify-between gap-7">
          <div>
            <Kicker onDark>{industries.kicker}</Kicker>
            <h2 className="md:text-[42px] text-[28px] font-light leading-[1.12] tracking-[-0.03em] text-white">
              <Lines lines={industries.title} />
            </h2>
          </div>
          <p className="max-w-[42ch] text-[16px] font-light text-white/62">{industries.lede}</p>
        </Reveal>

        <Reveal>
          <IndustryAccordion panels={industries.panels} />
        </Reveal>
      </Container>
    </section>
  );
}

/** "Why JinnByte" — four icon columns on the dark band. */
export function WhySolutions() {
  const { why } = solutions;
  /** Per-column icon tints, from the template's nth-of-type rules. */
  const tints = ["rgb(120,193,196)", "rgb(226,182,94)", "rgb(232,158,130)", "rgb(150,160,230)"];
  return (
    <section className={cn("bg-[#141414]", BAND)}>
      <Container>
        <SecHead kicker={why.kicker} title={why.title} lede={why.lede} onDark />

        <div className="grid border-t border-white/15 min-[481px]:grid-cols-2 min-[901px]:grid-cols-4">
          {why.cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className={cn(
                "border-white/15 py-9 min-[481px]:px-7.5 min-[481px]:pt-10.5 min-[481px]:pb-3",
                "border-t first:border-t-0 min-[481px]:border-t-0 min-[481px]:border-r",
                "min-[481px]:nth-[2n]:border-r-0 min-[481px]:nth-[n+3]:border-t min-[901px]:nth-[2n]:border-r min-[901px]:nth-[n+3]:border-t-0 min-[901px]:last:border-r-0"
              )}
            >
              {/* `.whic` sets line-height 0 around an inline glyph, which lands at 20px.
                  Tailwind's preflight makes SVGs block, so the box is set explicitly. */}
              <span className="mb-5.5 block h-5 leading-[0]" style={{ color: tints[i % tints.length] }}>
                <Icon icon={card.icon} className="h-6.5 w-6.5" />
              </span>
              <h3 className="mb-2.75 font-display text-[19px] font-normal tracking-[-0.015em] text-white">
                {card.title}
              </h3>
              <p className="text-[14.4px] leading-[1.7] text-white/62">{card.blurb}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** "Technology" — the stack, grouped by discipline. */
export function TechStack() {
  const { tech } = solutions;
  return (
    <section className={BAND}>
      <Container>
        <Reveal className="mb-[clamp(52px,6vh,76px)] grid items-start gap-12 min-[901px]:grid-cols-2">
          <div>
            <Kicker>{tech.kicker}</Kicker>
            <h2 className="md:text-[42px] text-[28px] font-extralight leading-[1.12] tracking-[-0.03em]">
              <Lines lines={tech.title} />
            </h2>
          </div>
          <div>
            {tech.paragraphs.map((p, i) => (
              <p key={i} className={cn("text-[15px] leading-[1.72] text-ink-soft", i > 0 && "mt-3.5")}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="border-t border-line">
          {tech.rows.map((row, i) => (
            <Reveal
              key={row.category}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="grid items-baseline gap-3 border-b border-line py-5 min-[701px]:grid-cols-[210px_1fr] min-[701px]:gap-8 min-[701px]:py-5.5"
            >
              <div className="font-display text-[15.5px] font-normal tracking-[-0.01em] text-ink">
                {row.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {row.items.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-[7px] rounded-[999px] border border-line bg-white py-1.5 pr-3.25 pl-2.5 text-[12.5px] text-ink-soft transition-[border-color,color] duration-300 ease-brand hover:border-brand/50 hover:text-ink"
                  >
                    {item.icon ? (
                      <Image src={item.icon} alt="" width={16} height={16} className="h-4 w-4 object-contain" />
                    ) : null}
                    {item.label}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** "Recognised by" — one clean row of review badges. */
export function Recognition() {
  const { recognition } = solutions;
  return (
    <section className="bg-soft py-[clamp(84px,12vh,150px)]">
      <Container>
        <Reveal>
          <Kicker>{recognition.kicker}</Kicker>
          <h2 className="md:text-[42px] text-[28px] font-extralight leading-[1.12] tracking-[-0.03em]">
            {recognition.title}
          </h2>
          <p className="mt-5 max-w-[32em] text-[16px] text-ink-soft">{recognition.lede}</p>

          <div className="mt-8.5 flex flex-wrap items-center gap-x-8 gap-y-6 border-t border-line-soft pt-7">
            {recognition.badges.map((b) => (
              // Badge artwork is served from the existing WordPress media library.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={b.alt}
                src={b.src}
                alt={b.alt}
                loading="lazy"
                className="h-11 w-auto max-w-[150px] object-contain transition-transform duration-300 ease-brand hover:scale-105"
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function SolutionsCta() {
  const { cta } = solutions;
  return (
    <section className={BAND}>
      <Container>
        <Reveal className="rounded-[10px] bg-[linear-gradient(100deg,#163336_0%,#1a1a1a_8%,#1c1c1c_72%,#1a1a1a_92%,#163336_100%)] px-7 py-12 md:p-19">
          <div className="grid items-center gap-8 min-[901px]:grid-cols-[0.9fr_1fr] min-[901px]:gap-16">
            <div>
              <Kicker onDark>{cta.kicker}</Kicker>
              <h2 className="max-w-[16ch] md:text-[42px] text-[28px]  font-extralight leading-[1.14] tracking-[-0.03em] text-white">
                {cta.title}
              </h2>
            </div>
            <div>
              <p className="max-w-[52ch] text-[16px] font-light leading-[1.75] text-white/64">
                {cta.body}
              </p>
              <div className="mt-7 flex flex-wrap gap-3.5 max-[760px]:flex-col">
                <ButtonLink href="/#contact" variant="brand" arrow className="max-[760px]:justify-center">
                  Discuss your project
                </ButtonLink>
                <ButtonLink href="/work" variant="lineOnDark" arrow className="max-[760px]:justify-center">
                  Explore our work
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
