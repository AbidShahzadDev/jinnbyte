import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/reveal";

/**
 * `.wrap` — the 1220px centred column. Most templates step its gutter
 * 32 / 24 / 18px; portfolio.html goes straight from 32 to 20 at 640.
 */
const GUTTERS = {
  site: "px-8 max-[761px]:px-6 max-[481px]:px-4.5",
  work: "px-8 max-[641px]:px-5",
} as const;

export function Container({
  children,
  className,
  gutter = "site",
}: {
  children: ReactNode;
  className?: string;
  gutter?: keyof typeof GUTTERS;
}) {
  return <div className={cn("mx-auto w-full max-w-site", GUTTERS[gutter], className)}>{children}</div>;
}

/** `.band` — one section's vertical rhythm. `soft` paints the off-white surface. */
export function Band({
  children,
  id,
  soft = false,
  dark = false,
  className,
}: {
  children: ReactNode;
  id?: string;
  soft?: boolean;
  dark?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-[78px] md:py-28",
        soft && "bg-soft",
        dark && "bg-dark-panel text-white",
        className
      )}
    >
      {children}
    </section>
  );
}

/** `.kicker` — the small uppercase eyebrow above a heading. */
export function Kicker({
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
        "accent-underscore mb-[22px] font-sans text-[11.5px] font-medium uppercase tracking-[0.22em]",
        onDark ? "text-brand-on-dark" : "text-brand-deep",
        className
      )}
    >
      {children}
    </div>
  );
}

/** `.sec-head` — kicker + h2 + optional lede, revealed as one unit. */
export function SectionHead({
  kicker,
  title,
  children,
  onDark = false,
  className,
}: {
  kicker?: ReactNode;
  title: ReactNode;
  children?: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-15 max-w-[660px]", className)}>
      {kicker ? <Kicker onDark={onDark}>{kicker}</Kicker> : null}
      <h2
        className={cn(
          "md:text-[42px] text-[28px] font-extralight tracking-[-0.03em]",
          onDark && "text-white"
        )}
      >
        {title}
      </h2>
      {children ? (
        <div
          className={cn(
            "mt-5 text-[17px] font-light",
            onDark ? "text-white/70" : "text-ink-soft"
          )}
        >
          {children}
        </div>
      ) : null}
    </Reveal>
  );
}
