"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { navItems, contact } from "@/lib/site";

/**
 * Sticky site header. Three visual states, carried over from the template:
 *
 *  - default   translucent white, blurred
 *  - scrolled  more opaque with a hairline bottom border
 *  - overHero  fully transparent with white type, used while a full-bleed dark
 *              hero is still behind it (the home page marks its hero `data-hero`)
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [overHero, setOverHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const onScroll = useCallback(() => {
    const y = window.scrollY;
    const doc = document.documentElement;
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    const max = doc.scrollHeight - doc.clientHeight;

    setScrolled(y > 8);
    setOverHero(hero ? y < hero.offsetHeight - 96 : false);
    setProgress(max > 0 ? Math.min(y / max, 1) : 0);
  }, []);

  useEffect(() => {
    let frame: number | null = null;
    const handler = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        onScroll();
        frame = null;
      });
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [onScroll, pathname]);

  // Close the mobile panel when the viewport grows past the breakpoint.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1080) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Use the homepage treatment everywhere; an open menu needs a light surface.
  const transparent = overHero && !menuOpen;

  return (
    <header
      className={cn(
        "sticky top-0 z-[70] border-b border-transparent transition-[background-color,border-color,backdrop-filter] duration-350",
        transparent
          ? "bg-transparent"
          : "bg-white/72 backdrop-blur-[18px] backdrop-saturate-[180%]",
        (scrolled || menuOpen) && !transparent && "border-line-soft bg-white/90"
      )}
    >
      <div className="mx-auto flex h-19 w-full max-w-site items-center justify-between gap-6 px-8 max-[761px]:px-6 max-[481px]:px-4.5">
        <Link href="/" aria-label="JinnByte home" onClick={() => setMenuOpen(false)} className="flex flex-none items-center">
          <Image
            src={transparent ? "/images/logo-dark.png" : "/images/logo-light.png"}
            alt="JinnByte"
            width={120}
            height={26}
            priority
            style={{ width: "auto", height: 26 }}
            className="transition-opacity duration-350 ease-brand"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className={cn(
            "hidden gap-[34px] text-sm font-normal min-[1081px]:flex",
            transparent ? "text-white/76" : "text-ink-soft"
          )}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              className={cn(
                "group relative transition-[color,transform,translate,scale] duration-250 ease-brand hover:-translate-y-px",
                isCurrent(item.href) && (transparent ? "text-white" : "text-ink"),
                transparent ? "hover:text-white" : "hover:text-ink"
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute -bottom-1.5 left-0 h-px transition-[width] duration-350 ease-brand group-hover:w-full",
                  isCurrent(item.href) ? "w-full" : "w-0",
                  transparent ? "bg-brand-on-dark" : "bg-brand"
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className={cn(
              "inline-flex h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-md border bg-transparent min-[1081px]:hidden",
              transparent ? "border-white/34 text-white" : "border-line text-ink"
            )}
          >
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-none stroke-current stroke-[1.6] [stroke-linecap:round]">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>

          <ButtonLink
            href={contact.ctaHref}
            variant={transparent ? "ghost" : "brand"}
            className={cn(
              "hidden min-[1081px]:inline-flex",
              transparent
                ? "bg-white/8"
                : "shadow-[inset_0_0_0_1px_var(--color-brand)] hover:bg-transparent hover:text-brand-deep hover:shadow-[inset_0_0_0_1px_var(--color-brand)]"
            )}
          >
            Let&rsquo;s talk
          </ButtonLink>
        </div>
      </div>

      {/* Scroll progress, hidden while the transparent hero header is showing. */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -bottom-px left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-brand-deep to-brand transition-opacity duration-400 ease-brand",
          transparent ? "opacity-0" : "opacity-100"
        )}
        style={{ transform: `scaleX(${progress})` }}
      />

      {menuOpen ? (
        <nav id="mobile-nav" aria-label="Mobile navigation" className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-line-soft bg-paper min-[1081px]:hidden">
          <div className="mx-auto flex w-full max-w-site flex-col gap-0.5 px-8 pt-3.5 pb-4.5 max-[761px]:px-6 max-[481px]:px-4.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "border-b border-line-soft px-0.5 py-3.25 text-base last:border-b-0",
                  isCurrent(item.href) ? "text-ink" : "text-ink-soft"
                )}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink
              href={contact.ctaHref}
              onClick={() => setMenuOpen(false)}
              className="mt-3.5 w-full justify-center"
            >
              Let&rsquo;s talk
            </ButtonLink>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
