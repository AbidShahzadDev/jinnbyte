import type { CSSProperties } from "react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionKicker, SectionLede } from "@/components/ui/section-kicker";
import { cn } from "@/lib/cn";
import { home, type SolutionCard } from "@/data/home";

/**
 * Per-card accent pairs, from the template's `nth-of-type` palette. Stored as
 * bare RGB triples because the template composes them as `rgb(var(--acc))` and
 * `rgba(var(--acc), .5)`.
 */
const CARD_ACCENTS = [
  ["83,178,179", "120,193,196"],
  ["112,124,206", "150,160,230"],
  ["200,150,60", "226,182,94"],
  ["216,126,100", "232,158,130"],
  ["82,170,128", "120,200,160"],
  ["162,116,188", "190,150,214"],
] as const;

/** The card's horizontal padding, reused by the top rule and the number disc. */
const GUTTER = "clamp(26px,2.5vw,36px)";

export type CapabilityContent = {
  kicker: string;
  title: string[];
  lede: string;
  cards: SolutionCard[];
};

/**
 * "Our solutions" — a seamless hairline matrix of cards.
 *
 * At rest each card shows only its artwork, centred, with the title anchored to
 * the base. On hover the card turns dark, the artwork retreats to the top-right
 * corner at 54%, the top rule draws out to 64px and the description expands via
 * a 0fr -> 1fr grid row. Every measure is viewport-height driven, as in the
 * template, so the section stays on one screen.
 */
export function SolutionsGrid({
  content,
  cta,
  sectionClassName,
}: {
  content?: CapabilityContent;
  /** Omitted on /solutions, where the grid is already on the destination page. */
  cta?: { href: string; label: string };
  /** Lets /solutions add its one-screen band treatment. */
  sectionClassName?: string;
}) {
  const solutions = content ?? home.solutions;

  return (
    <section id="solutions" className={cn("py-[clamp(18px,2.8vh,52px)]", sectionClassName)}>
      <Container>
        <Reveal className="mb-[clamp(12px,2vh,28px)] grid items-center gap-5.5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-[70px]">
          <div>
            <SectionKicker rule className="mb-[clamp(9px,1.6vh,18px)]">
              {solutions.kicker}
            </SectionKicker>
            <h2 className="max-w-[22ch] text-[clamp(22px,min(2.8vw,4.4vh),38px)] font-light leading-[1.13] tracking-[-0.03em]">
              {solutions.title.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <SectionLede className="max-w-[44ch] self-center text-[clamp(13.6px,1.75vh,15px)] leading-[1.7] text-ink-soft">
            {solutions.lede}
          </SectionLede>
        </Reveal>

        <div className="grid grid-cols-1 border-t border-line min-[761px]:grid-cols-2 min-[761px]:border-l min-[1201px]:grid-cols-3">
          {solutions.cards.map((card, i) => {
            const [acc, accL] = CARD_ACCENTS[i % CARD_ACCENTS.length];
            return (
              <article
                key={card.title}
                style={{ "--acc": acc, "--accL": accL } as CSSProperties}
                className={cn(
                  "group relative flex flex-col justify-end overflow-hidden border-b border-line min-[821px]:border-r",
                  "h-[clamp(198px,29vh,306px)] no-hover:h-auto",
                  "px-[clamp(26px,2.5vw,36px)] pt-[clamp(66px,9.6vh,92px)] pb-[clamp(20px,3vh,30px)]",
                  "no-hover:pt-[clamp(36px,5.4vh,50px)]",
                  "transition-[background-color,color,padding-top] duration-450 ease-brand",
                  "hover:bg-[#0F1E27] hover:pt-[clamp(32px,5vh,50px)]"
                )}
              >
                {/* top rule, drawing out from the gutter on hover */}
                <span
                  aria-hidden
                  style={{ left: GUTTER }}
                  className="absolute top-0 h-0.5 w-0 bg-[rgb(var(--acc))] transition-[width,background-color] duration-500 ease-brand group-hover:w-16 group-hover:bg-[rgb(var(--accL))]"
                />

                {/* the index in its own disc, clear of the copy */}
                <span
                  aria-hidden
                  style={{ left: GUTTER }}
                  className={cn(
                    "absolute z-[3] grid place-items-center rounded-full bg-brand font-display font-normal tracking-[0.08em] text-white",
                    "pointer-events-none leading-none",
                    "top-[clamp(20px,3.2vh,32px)] size-[clamp(34px,4.8vh,44px)] text-[clamp(12px,1.6vh,14.5px)]",
                    "transition-[top,width,height,font-size] duration-450 ease-brand",
                    "group-hover:top-[clamp(9px,1.4vh,16px)] group-hover:size-[clamp(28px,3.8vh,34px)] group-hover:text-[clamp(10.5px,1.35vh,12px)]",
                    "no-hover:top-3.5 no-hover:size-[34px] no-hover:text-[12px]"
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* artwork: the resting focal point, then it retreats to the corner */}
                <span
                  aria-hidden
                  className={cn(
                    // Written as a literal `transform` rather than Tailwind's
                    // translate/scale utilities: v4 emits those as separate
                    // `translate:`/`scale:` properties, which this transition
                    // would not animate.
                    "pointer-events-none absolute right-1/2 top-[44%] leading-none",
                    "[transform:translate(50%,-50%)_scale(1)]",
                    "text-[rgba(var(--acc),0.5)]",
                    "transition-[right,top,transform,color,translate,scale] duration-550 ease-brand",
                    "group-hover:right-[4%] group-hover:top-[5%] group-hover:[transform:translate(0,0)_scale(0.54)] group-hover:text-[rgba(var(--accL),0.72)]",
                    "no-hover:right-[5%] no-hover:top-[6%] no-hover:[transform:translate(0,0)_scale(0.6)]"
                  )}
                >
                  <svg
                    viewBox={card.icon.viewBox}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={card.icon.strokeWidth}
                    style={{ width: "clamp(78px,min(8.6vw,13vh),128px)", height: "auto" }}
                    // Icon markup comes from our own templates at build time.
                    dangerouslySetInnerHTML={{ __html: card.icon.markup }}
                  />
                </span>

                <h3 className="relative z-[2] m-0 max-w-[15ch] text-[clamp(16px,min(1.42vw,2.2vh),20px)] font-normal leading-[1.27] tracking-[-0.015em] transition-colors duration-450 ease-brand group-hover:text-white md:mt-0 mt-6">
                  {card.title}
                </h3>

                {/* the detail expands from 0fr to 1fr on hover */}
                <div className="relative z-[2] grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-500 ease-brand group-hover:grid-rows-[1fr] group-hover:opacity-100 no-hover:grid-rows-[1fr] no-hover:opacity-100">
                  <div className="min-h-0 overflow-hidden">
                    <p className="mt-[clamp(10px,1.5vh,13px)] line-clamp-4 max-w-[44ch] text-[clamp(12.6px,1.6vh,13.8px)] leading-[1.58] text-ink-soft transition-colors duration-450 ease-brand group-hover:text-white/62 [@media(max-height:930px)]:line-clamp-3 no-hover:line-clamp-none">
                      {card.blurb}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {cta ? (
          <Reveal className="mt-[clamp(12px,2vh,26px)] flex justify-center">
            <ButtonLink href={cta.href} variant="line" arrow>
              {cta.label}
            </ButtonLink>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
