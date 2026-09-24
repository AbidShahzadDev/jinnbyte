import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/** The teal-to-charcoal gradient used by every full-bleed dark band. */
export const DARK_GRADIENT =
  "bg-[linear-gradient(100deg,#163336_0%,#1a1a1a_8%,#1c1c1c_72%,#1a1a1a_92%,#163336_100%)]";

/** The 32px gutter that keeps full-bleed content aligned to the centred column. */
export const BLEED_PADDING = "px-[max(1.25rem,calc((100vw-var(--container-site))/2+2rem))]";

/**
 * Breaks out of the centred column to run edge to edge while keeping its inner
 * content on the same gutter. `notch` adds the angled top-left cut the closing
 * CTA bands use.
 */
export function DarkBand({
  children,
  className,
  notch = false,
}: {
  children: ReactNode;
  className?: string;
  notch?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative left-1/2 w-screen -translate-x-1/2 overflow-hidden",
        DARK_GRADIENT,
        BLEED_PADDING,
        // `.darkband` steps its padding at 820 and 640, and drops the gutter
        // back to a flat 30 / 22px once it stops tracking the centred column.
        "min-[821px]:pt-[126px] min-[821px]:pb-[114px]",
        "min-[641px]:max-[821px]:px-[30px] min-[641px]:max-[821px]:pt-[70px] min-[641px]:max-[821px]:pb-[66px]",
        "max-[641px]:px-[22px] max-[641px]:pt-[60px] max-[641px]:pb-[58px]",
        notch &&
          "min-[821px]:[clip-path:polygon(0_48px,26%_48px,calc(26%+94px)_0,100%_0,100%_100%,0_100%)]",
        className
      )}
    >
      {children}
    </div>
  );
}
