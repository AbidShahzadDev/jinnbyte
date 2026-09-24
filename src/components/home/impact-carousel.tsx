"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionKicker } from "@/components/ui/section-kicker";
import { cn } from "@/lib/cn";
import type { ImpactSlide } from "@/data/home";

/** Each slide holds for 5s, as in the template. */
const DWELL = 5000;
/** The panel copy fades out, swaps, then fades back in. */
const SWAP = 230;

const pad = (n: number) => String(n + 1).padStart(2, "0");

export type ImpactContent = {
  kicker: string;
  title: string;
  lede: string;
  slides: ImpactSlide[];
};

const ARROW =
  "flex h-11 w-11 cursor-pointer items-center justify-center border border-line bg-transparent text-[15px] text-ink transition-[background,border-color,color,transform,translate,scale] duration-300 ease-brand hover:border-brand hover:bg-brand hover:text-white";

/**
 * "Proven impact" — one panel with a name rail beneath it. Each slide holds for
 * five seconds while its rail bar fills, then advances. Hovering, focusing,
 * hiding the tab or scrolling the section out of view pauses it.
 */
export function ImpactCarousel({
  impact,
  sectionClassName,
}: {
  impact: ImpactContent;
  /** Lets /solutions add its one-screen band treatment. */
  sectionClassName?: string;
}) {
  const slides = impact.slides;
  const total = slides.length;

  const [active, setActive] = useState(0);
  /** Trails `active` by SWAP so the copy can fade out before it changes. */
  const [shown, setShown] = useState(0);
  const [swapping, setSwapping] = useState(false);
  const [paused, setPaused] = useState(false);

  const boxRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(true);

  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const swapTimer = useRef<number | undefined>(undefined);

  /**
   * Advance, fading the copy out and back in around the content change so the
   * panel never flashes between slides.
   */
  const go = useCallback(
    (n: number) => {
      const next = ((n % total) + total) % total;
      setActive(next);

      window.clearTimeout(swapTimer.current);
      if (reduce) {
        setShown(next);
        return;
      }
      setSwapping(true);
      swapTimer.current = window.setTimeout(() => {
        setShown(next);
        setSwapping(false);
      }, SWAP);
    },
    [total, reduce],
  );

  useEffect(() => () => window.clearTimeout(swapTimer.current), []);

  // Pause while off-screen or on a hidden tab.
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => setVisible(es.some((e) => e.isIntersecting)),
      {
        threshold: 0.2,
      },
    );
    io.observe(el);
    const onVis = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  // The dwell timer, which also drives the active slide's progress bar.
  useEffect(() => {
    if (reduce || paused || !visible) return;

    // Captured so the cleanup below never reads a stale ref node.
    const bar = barRef.current;
    let raf = 0;
    let start: number | null = null;

    const frame = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / DWELL, 1);
      if (bar) bar.style.width = `${(p * 100).toFixed(2)}%`;
      if (p >= 1) {
        go(active + 1);
        return;
      }
      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      if (bar) bar.style.width = "0%";
    };
  }, [active, paused, visible, reduce, go]);

  // Keep the active name in view when the rail scrolls on narrow screens.
  useEffect(() => {
    const rail = railRef.current;
    const btn = rail?.children[active] as HTMLElement | undefined;
    if (!rail || !btn || rail.scrollWidth <= rail.clientWidth + 2) return;
    rail.scrollTo({
      left: btn.offsetLeft - (rail.clientWidth - btn.offsetWidth) / 2,
      behavior: reduce ? "auto" : "smooth",
    });
  }, [active, reduce]);

  const slide = slides[shown];

  return (
    <section
      id="portfolio"
      className={cn(
        "dot-field relative overflow-hidden bg-paper py-[clamp(96px,9vh,140px)]",
        sectionClassName,
      )}
    >
      <Container className="relative z-[1]">
        <div
          ref={boxRef}
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <Reveal className="mb-5.5 flex flex-col items-start justify-between gap-5.5 border-b border-line pb-5 min-[881px]:flex-row min-[881px]:items-end min-[881px]:gap-[46px]">
            <div className="min-w-full">
              <SectionKicker className="mb-2.5">{impact.kicker}</SectionKicker>
              <h2 className="text-[clamp(28px,4vw,50px)] font-extralight leading-[1.08] tracking-[-0.03em] max-[620px]:whitespace-normal min-[621px]:whitespace-nowrap">
                {impact.title}
              </h2>
              <div className="flex justify-between items-end gap-5.5 w-full min-w-full">
                <p className="mt-4 max-w-[54ch] text-[15.5px] text-ink-soft">
                  {impact.lede}
                </p>
                <div className="flex flex-none items-center gap-5">
                  <span className="font-display text-[13px] tracking-[0.16em] text-ink-faint">
                    <b className="font-normal text-brand-deep">{pad(active)}</b>{" "}
                    / {pad(total - 1)}
                  </span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => go(active - 1)}
                      aria-label="Previous case study"
                      className={cn(ARROW, "hover:-translate-x-[3px]")}
                    >
                      &larr;
                    </button>
                    <button
                      type="button"
                      onClick={() => go(active + 1)}
                      aria-label="Next case study"
                      className={cn(ARROW, "hover:translate-x-[3px]")}
                    >
                      &rarr;
                    </button>
                  </div>
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-[0.6em] border-b border-[rgb(47_127_128/0.35)] pb-[3px] font-display text-[12px] font-normal uppercase tracking-[0.14em] text-brand-deep transition-[gap,border-color] duration-300 ease-brand hover:gap-[1em] hover:border-brand-deep"
                  >
                    All case studies
                    <span aria-hidden>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal
            className="relative grid overflow-hidden border border-white/10 bg-[#0F1E27] min-[881px]:min-h-[clamp(340px,50vh,500px)] min-[881px]:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)]"
            role="tabpanel"
          >
            <div
              className={cn(
                "relative z-[2] flex flex-col justify-center px-[clamp(26px,2.6vw,42px)] pt-[clamp(26px,2.6vw,42px)] pb-[clamp(40px,4.2vw,64px)]",
                "transition-[opacity,transform,translate,scale] duration-[240ms] ease-brand",
                swapping
                  ? "translate-y-[9px] opacity-0"
                  : "translate-y-0 opacity-100",
              )}
            >
              <span className="self-start border border-[rgb(120_193_196/0.34)] bg-[rgb(120_193_196/0.08)] px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-on-dark">
                {slide.chip}
              </span>
              <div className="mt-5 font-display text-[12px] font-normal uppercase tracking-[0.22em] text-white/50">
                {slide.name}
              </div>
              <h3 className="mt-2.5 line-clamp-3 min-h-[2.3em] max-w-[34ch] font-display text-[clamp(21px,2.15vw,30px)] font-extralight leading-[1.15] tracking-[-0.03em] text-white">
                {slide.headline}
              </h3>

              <div className="mt-[clamp(20px,2.6vh,30px)] flex flex-col items-start gap-[clamp(26px,3.6vh,40px)]">
                <div className="flex items-baseline gap-3.5">
                  <b className="font-display text-[clamp(32px,3.2vw,46px)] font-extralight leading-none tracking-[-0.042em] whitespace-nowrap text-brand-on-dark">
                    {slide.kpi}
                  </b>
                  <span className="line-clamp-2 min-h-[2.9em] max-w-[16em] text-[12.5px] leading-[1.45] text-white/50">
                    {slide.kpiLabel}
                  </span>
                </div>
                <Link
                  href={slide.href}
                  className="inline-flex flex-none items-center gap-[0.7em] border border-white/32 bg-transparent px-6 py-3.25 font-display text-[12px] font-normal uppercase tracking-[0.14em] text-white transition-[background,border-color,gap] duration-300 ease-brand hover:gap-[1.1em] hover:border-brand hover:bg-brand"
                >
                  Read case study
                  <span aria-hidden>&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="relative order-first h-[clamp(190px,28vh,270px)] overflow-hidden min-[881px]:order-none min-[881px]:h-auto">
              {slides.map((s, i) => (
                <Image
                  key={s.name}
                  src={s.image}
                  alt={i === shown ? `${s.name} — ${s.headline}` : ""}
                  fill
                  sizes="(max-width: 880px) 100vw, 45vw"
                  style={{ objectPosition: s.objectPosition }}
                  className={cn(
                    "object-cover transition-opacity duration-[620ms] ease-brand",
                    i === active ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
              {/* fades the photo into the panel: left-to-right on wide, bottom-up when stacked */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,30,39,0)_44%,#0F1E27_100%)] min-[881px]:bg-[linear-gradient(90deg,#0F1E27_0%,rgba(15,30,39,.55)_18%,rgba(15,30,39,0)_48%)]"
              />
              <span
                aria-hidden
                className="absolute top-[clamp(12px,1.4vw,20px)] right-[clamp(16px,1.8vw,26px)] z-[2] font-display text-[clamp(34px,3.4vw,52px)] font-extralight leading-none tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,.45)]"
              >
                {pad(active)}
              </span>
            </div>
          </Reveal>

          <div
            ref={railRef}
            role="tablist"
            aria-label="Case studies"
            className="mt-5 grid gap-4 max-[880px]:auto-cols-[minmax(112px,1fr)] max-[880px]:grid-flow-col max-[880px]:overflow-x-auto max-[880px]:[-ms-overflow-style:none] max-[880px]:[scrollbar-width:none] min-[881px]:grid-cols-6 [&::-webkit-scrollbar]:hidden"
          >
            {slides.map((s, i) => (
              <button
                key={s.name}
                type="button"
                role="tab"
                aria-selected={i === active}
                tabIndex={i === active ? 0 : -1}
                onClick={() => (i === active ? setPaused(false) : go(i))}
                className="group block min-w-0 cursor-pointer border-0 bg-transparent p-0 text-left"
              >
                <b
                  className={cn(
                    "block overflow-hidden font-display text-[14px] font-normal tracking-[-0.005em] text-ellipsis whitespace-nowrap pb-3 transition-colors duration-350 ease-brand group-hover:text-ink",
                    i === active ? "text-ink" : "text-ink-faint",
                  )}
                >
                  {s.name}
                </b>
                <span className="block h-0.5 bg-[rgb(39_39_39/0.12)]">
                  <span
                    ref={i === active ? barRef : undefined}
                    className="block h-full bg-brand"
                    style={{ width: i === active && reduce ? "100%" : "0%" }}
                  />
                </span>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
