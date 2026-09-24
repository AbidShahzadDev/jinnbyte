"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";

/** Appears after 700px of scroll, matching the template's `.totop` behaviour. */
export function BackToTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setShown(window.scrollY > 700);
        ticking = false;
      });
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        })
      }
      className={cn(
        "fixed right-4 bottom-4 z-[80] flex h-11.5 w-11.5 cursor-pointer items-center justify-center rounded-full border-none bg-brand text-white shadow-[0_12px_34px_rgb(83_178_179/0.38)] transition-[opacity,transform,background,translate,scale] duration-400 ease-brand hover:bg-brand-hover md:right-6.5 md:bottom-6.5",
        shown ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-3.5 scale-90 opacity-0"
      )}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="h-4.5 w-4.5 fill-none stroke-current stroke-[1.7] [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <path d="M12 19V5M6 11l6-6 6 6" />
      </svg>
    </button>
  );
}
