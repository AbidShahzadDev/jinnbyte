"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

type CountUpProps = {
  /** Target number to animate to. */
  to: number;
  prefix?: string;
  /** Rendered in the accent colour, e.g. "%". */
  suffix?: string;
  /** Appends an accent-coloured "+". */
  plus?: boolean;
  /** Small uppercase label set before the number, e.g. "UP TO". */
  lead?: string;
  className?: string;
  /** Stagger in ms before this counter starts. */
  delay?: number;
};

const DURATION = 1900;

/**
 * Port of the template's `countUp()` helper. Starts when scrolled into view,
 * eases out quartic, and renders the final value immediately when the visitor
 * prefers reduced motion.
 *
 * The "already started" flag is a ref, not state: as a dependency it would
 * re-run this effect and the cleanup would cancel the animation it just
 * scheduled, leaving every counter stuck on zero.
 */
export function CountUp({ to, prefix, suffix, plus, lead, className, delay = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let timer = 0;

    const run = () => {
      if (started.current) return;
      started.current = true;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setValue(to);
        return;
      }

      timer = window.setTimeout(() => {
        let start: number | null = null;
        const step = (t: number) => {
          if (start === null) start = t;
          const p = Math.min((t - start) / DURATION, 1);
          setValue(Math.round(to * (1 - Math.pow(1 - p, 4))));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      }, delay);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [to, delay]);

  return (
    <span ref={ref} className={cn(className)}>
      {lead ? (
        <em className="mr-[7px] font-sans text-[14.6px] font-normal tracking-[0.18em] whitespace-nowrap text-current/50 not-italic uppercase">
          {lead}
        </em>
      ) : null}
      {prefix}
      {value}
      {suffix ? <em className="text-brand-on-dark not-italic">{suffix}</em> : null}
      {plus ? <i className="text-brand-on-dark not-italic">+</i> : null}
    </span>
  );
}
