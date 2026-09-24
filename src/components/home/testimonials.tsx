"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";

import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionKicker } from "@/components/ui/section-kicker";
import { cn } from "@/lib/cn";
import { home } from "@/data/home";

/** Stars pop in one after another once the card is revealed, 60ms apart. */
function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-[3px]" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          aria-hidden
          style={{ transitionDelay: `${i * 0.06}s` }}
          className={cn(
            "h-[15px] w-[15px] fill-[#f5b301]",
            "scale-50 rotate-[-20deg] opacity-0",
            "transition-[opacity,transform,translate,scale] duration-500 [transition-timing-function:cubic-bezier(.3,1.4,.5,1)]",
            "group-data-[reveal=in]/reveal:scale-100 group-data-[reveal=in]/reveal:rotate-0 group-data-[reveal=in]/reveal:opacity-100"
          )}
        >
          <path d="M12 2l2.9 6.3 6.8.8-5 4.7 1.3 6.8L12 17.4 6 20.6l1.3-6.8-5-4.7 6.8-.8z" />
        </svg>
      ))}
    </span>
  );
}

const ARROW =
  "flex h-[46px] w-[46px] cursor-pointer items-center justify-center border border-white/22 bg-transparent text-[15px] text-white transition-[background,border-color,color,opacity,transform,translate,scale] duration-300 ease-brand enabled:hover:border-brand enabled:hover:bg-brand disabled:cursor-default disabled:opacity-28";

/**
 * "Client voice" — a peek carousel on the dark band: three cards visible with
 * the next one edging in. Scrolling is native with snap points so touch and
 * keyboard both work; the pill dots double as a progress readout.
 */
export function Testimonials({ sectionClassName }: { sectionClassName?: string } = {}) {
  const { testimonials } = home;
  const railRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  const measure = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.firstElementChild as HTMLElement | null;
    if (!card) return;
    const step = card.offsetWidth + 24;
    setPages(Math.max(1, Math.round((rail.scrollWidth - rail.clientWidth) / step) + 1));
    setPage(Math.round(rail.scrollLeft / step));
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    measure();
    rail.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      rail.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const goTo = (i: number) => {
    const rail = railRef.current;
    const card = rail?.firstElementChild as HTMLElement | null;
    if (!rail || !card) return;
    rail.scrollTo({
      left: i * (card.offsetWidth + 24),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  /** Feeds the radial glow's centre, as the template's pointer handler did. */
  const trackSpotlight = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section
      id="testimonials"
      className={cn(
        "relative overflow-hidden bg-[#1c1c1c] bg-[linear-gradient(100deg,#163336_0%,#1a1a1a_8%,#1c1c1c_72%,#1a1a1a_92%,#163336_100%)] py-[clamp(96px,9vh,140px)]",
        sectionClassName
      )}
    >
      <Container className="relative">
        <Reveal className="mb-[clamp(44px,6vh,80px)] max-w-[660px]">
          <SectionKicker onDark>{testimonials.kicker}</SectionKicker>
          <h2 className="mt-4 text-[clamp(30px,4.6vw,56px)] font-extralight leading-[1.08] tracking-[-0.03em] text-white">
            {testimonials.title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <div
          ref={railRef}
          tabIndex={0}
          role="group"
          aria-label="Client testimonials"
          className={cn(
            "mt-[-9px] mb-[-16px] grid snap-x snap-mandatory grid-flow-col gap-6 overflow-x-auto overflow-y-hidden pt-[9px] pb-4",
            "auto-cols-[86%] min-[761px]:auto-cols-[calc(50%-12px)] min-[1081px]:auto-cols-[calc(33.3333%-16px)]",
            "[-ms-overflow-style:none] [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-on-dark [&::-webkit-scrollbar]:hidden"
          )}
        >
          {testimonials.quotes.map((q, i) => (
            <Reveal
              as="article"
              key={q.company}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              onMouseMove={trackSpotlight}
              className={cn(
                "group relative flex h-full min-w-0 snap-start flex-col overflow-hidden border border-white/12 bg-white/[0.045] px-7 pt-7 pb-6.5",
                "transition-[transform,box-shadow,translate,scale] duration-350 ease-brand hover:-translate-y-1 hover:shadow-card",
                "after:pointer-events-none after:absolute after:inset-0 after:z-[3] after:opacity-0 after:transition-opacity after:duration-450 after:ease-brand after:content-['']",
                "after:bg-[radial-gradient(320px_circle_at_var(--mx,50%)_var(--my,50%),rgba(120,193,196,.13),transparent_62%)]",
                "hover:after:opacity-100"
              )}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <Stars count={q.stars} />
                {q.avatar ? (
                  <Image
                    src={q.avatar}
                    alt=""
                    width={56}
                    height={56}
                    className="h-14 w-14 flex-shrink-0 rounded-full object-cover shadow-[0_0_0_1px_rgba(255,255,255,.18)] max-[560px]:h-12 max-[560px]:w-12"
                  />
                ) : null}
              </div>

              <p className="mb-5 flex-1 text-[16px] leading-[1.5] text-white/90">{q.quote}</p>

              <div className="flex items-center gap-3.5 border-t border-white/14 pt-5">
                <div className="min-w-0 flex-1">
                  <b className="accent-underscore block font-display text-[14px] font-normal text-white">
                    {q.company}
                  </b>
                  <span className="mt-0.5 block text-[12.5px] text-white/55">{q.person}</span>
                </div>
                {q.logo ? (
                  // Logos come from mixed local and WordPress-hosted sources.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={q.logo}
                    alt={q.company}
                    loading="lazy"
                    className="h-[34px] max-w-[112px] flex-none object-contain"
                  />
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-7.5 flex items-center justify-between gap-5">
          <div className="flex min-w-0 items-center gap-2.5">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={page === i}
                onClick={() => goTo(i)}
                className="relative h-[7px] min-w-[22px] flex-[0_1_54px] cursor-pointer rounded-[7px] border-0 bg-white/18 p-0 transition-colors duration-300 ease-brand hover:bg-white/34 before:absolute before:inset-x-0 before:-top-3 before:-bottom-3 before:content-['']"
              >
                <span
                  aria-hidden
                  className="absolute top-0 left-0 h-full rounded-[inherit] bg-brand transition-[width] duration-400 ease-brand"
                  style={{ width: page === i ? "100%" : "0%" }}
                />
              </button>
            ))}
          </div>
          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={() => goTo(Math.max(0, page - 1))}
              disabled={page === 0}
              aria-label="Previous testimonials"
              className={cn(ARROW, "enabled:hover:-translate-x-[3px]")}
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={() => goTo(Math.min(pages - 1, page + 1))}
              disabled={page >= pages - 1}
              aria-label="Next testimonials"
              className={cn(ARROW, "enabled:hover:translate-x-[3px]")}
            >
              &rarr;
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
