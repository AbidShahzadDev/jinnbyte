import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/** Shared choreography: the eyebrow slides in from the left once revealed. */
const SLIDE_IN =
  "transition-[opacity,transform,translate,scale] duration-700 ease-brand opacity-0 -translate-x-5 group-data-[reveal=in]/reveal:opacity-100 group-data-[reveal=in]/reveal:translate-x-0";

/**
 * The small uppercase eyebrow above a section heading.
 *
 * Two forms, both from the templates:
 *  - default (`.kicker`) ends in an accent underscore;
 *  - `rule` (`.svc-kick`) ends in a hairline that draws out to 46px on reveal.
 *
 * Must sit inside a <Reveal> for the entrance to run.
 */
export function SectionKicker({
  children,
  rule = false,
  onDark = false,
  className,
}: {
  children: ReactNode;
  rule?: boolean;
  onDark?: boolean;
  className?: string;
}) {
  // `.svc-kick` in the templates: a larger, brand-coloured eyebrow. Its CSS also
  // styles `i`/`b` children, but the markup never had any — only the underscore.
  if (rule) {
    return (
      <div
        className={cn(
          "accent-underscore text-[clamp(11px,1.5vh,12.5px)] font-medium uppercase tracking-[0.18em]",
          onDark ? "text-brand-on-dark" : "text-brand",
          SLIDE_IN,
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "accent-underscore mb-[22px] font-sans text-[clamp(13.5px,1.05vw,16px)] font-medium uppercase tracking-[0.22em]",
        onDark ? "text-brand-on-dark" : "text-brand-deep",
        SLIDE_IN,
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Section sub-copy that lifts into place slightly after the heading,
 * matching `.svc-head .svc-sub` / `.sec-head p` in the templates.
 */
export function SectionLede({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "transition-[opacity,transform,translate,scale] delay-[260ms] duration-800 ease-brand",
        "translate-y-[18px] opacity-0",
        "group-data-[reveal=in]/reveal:translate-y-0 group-data-[reveal=in]/reveal:opacity-100",
        className
      )}
    >
      {children}
    </p>
  );
}
