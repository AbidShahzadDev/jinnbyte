import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";
import type { InlineIcon } from "@/data/solutions";

/**
 * `.band` on this page — roughly one section per screen, but only where the
 * viewport is big enough to carry it. Below that it falls back to normal flow.
 */
export const BAND =
  "py-[78px] screenband:flex screenband:min-h-[100svh] screenband:flex-col screenband:justify-center screenband:py-[clamp(96px,11vh,140px)]";

/** `.kicker` — this page uses a slightly tighter tracking than the others. */
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
        "accent-underscore mb-[22px] font-sans text-[clamp(13.5px,1.05vw,16px)] font-medium uppercase tracking-[0.18em]",
        onDark ? "text-brand-on-dark" : "text-brand-deep",
        className
      )}
    >
      {children}
    </div>
  );
}

/** `.sec-head` — kicker, heading and optional lede. */
export function SecHead({
  kicker,
  title,
  lede,
  onDark = false,
  className,
}: {
  kicker: string;
  title: ReactNode;
  lede?: string;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-[clamp(52px,6vh,80px)] max-w-[660px]", className)}>
      <Kicker onDark={onDark}>{kicker}</Kicker>
      <h2
        className={cn(
          "text-[clamp(29px,4.3vw,50px)] font-extralight leading-[1.12] tracking-[-0.03em]",
          onDark && "text-white"
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p className={cn("mt-5 text-[17px] font-light", onDark ? "text-white/66" : "text-ink-soft")}>
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}

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

export function Icon({ icon, className }: { icon: InlineIcon; className?: string }) {
  return (
    <svg
      viewBox={icon.viewBox}
      aria-hidden
      className={cn("fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]", className)}
      // Icon markup comes from our own templates at build time.
      dangerouslySetInnerHTML={{ __html: icon.markup }}
    />
  );
}
