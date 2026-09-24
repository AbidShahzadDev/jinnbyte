import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/cn";

const BASE =
  "btn-sheen inline-flex cursor-pointer items-center gap-[0.6em] border border-transparent font-display font-normal uppercase transition-[transform,background,color,border-color,box-shadow,translate,scale] duration-300 ease-brand";

/**
 * Each template re-cuts the button, so the metrics travel together: most pages
 * run the squared 13px cut and shrink it below 480px, case studies run it a
 * half-step smaller, and the portfolio page never re-cut the original at all.
 */
export const BUTTON_SIZES = {
  default:
    "rounded-none px-[30px] py-[15px] text-[13px] tracking-[0.11em] max-[481px]:px-[22px] max-[481px]:py-[13px] max-[481px]:text-[12px]",
  case: "rounded-none px-[26px] py-[14px] text-[12.5px] tracking-[0.11em] max-[481px]:px-[22px] max-[481px]:py-[13px] max-[481px]:text-[12px]",
  classic:
    "rounded-[6px] px-[26px] py-[13px] text-[14px] tracking-[0.06em] max-[381px]:px-[18px] max-[381px]:py-[12px] max-[381px]:text-[13px]",
} as const;

export type ButtonSize = keyof typeof BUTTON_SIZES;

const VARIANTS = {
  /** Solid teal — the primary call to action. */
  brand: "bg-brand text-white hover:bg-brand-hover hover:-translate-y-0.5 hover:shadow-brand",
  /** Hairline outline on light surfaces. */
  line: "bg-transparent text-ink border-line hover:border-ink hover:-translate-y-0.5",
  /** Hairline outline on dark surfaces. */
  lineOnDark:
    "bg-transparent text-white border-white/40 hover:border-white hover:bg-white/10 hover:-translate-y-0.5",
  /** White fill for dark panels. */
  white: "bg-white text-[#16181d] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgb(0_0_0/0.3)]",
  /**
   * Case studies re-cut both buttons around the study's own accent: the solid
   * one carries an accent ring and empties out on hover, the outlined one
   * washes instead of changing colour.
   */
  caseBrand:
    "bg-brand text-white shadow-[inset_0_0_0_1px_var(--acc)] hover:-translate-y-0.5 hover:bg-transparent hover:text-[var(--accd)] hover:shadow-[inset_0_0_0_1px_var(--acc)]",
  caseLine:
    "bg-transparent text-white border-white/30 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/8",
  /** `.btn-ghost` — the frosted outline the portfolio hero uses on its dark band. */
  ghost:
    "bg-white/6 text-white border-white/42 backdrop-blur-[10px] hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-ink hover:shadow-[0_12px_30px_rgb(0_0_0/0.32)]",
} as const;

export type ButtonVariant = keyof typeof VARIANTS;

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  /** Renders the animated arrow that slides right on hover. */
  arrow?: boolean;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "brand",
  size = "default",
  children,
  arrow = false,
  className,
  ...rest
}: ButtonLinkProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const classes = cn(BASE, BUTTON_SIZES[size], VARIANTS[variant], "group", className);

  const inner = (
    <>
      {children}
      {arrow ? (
        <span aria-hidden className="transition-transform duration-300 ease-brand group-hover:translate-x-1">
          &rarr;
        </span>
      ) : null}
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes} rel="noreferrer">
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {inner}
    </Link>
  );
}

/** The small uppercase text link with a trailing arrow, `.tlink` in the template. */
export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-link group inline-flex items-center gap-[7px] font-display text-[13px] font-normal uppercase tracking-[0.08em] text-brand-deep",
        className
      )}
    >
      {children}
      <span aria-hidden className="transition-transform duration-300 ease-brand group-hover:translate-x-1">
        &rarr;
      </span>
    </Link>
  );
}
