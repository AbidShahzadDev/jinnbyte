"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Keep scroll motion on the parent so the children's entrance animations compose. */
export function HeroMotion({ children, className }: { children: ReactNode; className: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = ref.current;
    if (!inner) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hover = window.matchMedia("(hover: hover)");
    const buttons = Array.from(inner.querySelectorAll<HTMLAnchorElement>("a"));
    let frame: number | null = null;

    const updateScroll = () => {
      frame = null;
      if (reducedMotion.matches) {
        inner.style.transform = "";
        inner.style.opacity = "";
        return;
      }

      // The template moves the copy 12% of the scroll distance and fades at 540px.
      // Clamp beyond its 780px update window so deep links never leave stale copy.
      const y = Math.min(Math.max(window.scrollY, 0), 780);
      inner.style.transform = `translate3d(0,${(y * 0.12).toFixed(1)}px,0)`;
      inner.style.opacity = Math.max(0, 1 - y / 540).toFixed(3);
    };
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(updateScroll);
    };
    const resetButtons = () => {
      buttons.forEach((button) => { button.style.transform = ""; });
    };
    const onPreferenceChange = () => {
      resetButtons();
      onScroll();
    };
    const onPointerMove = (event: PointerEvent) => {
      if (reducedMotion.matches || !hover.matches) return;
      const button = event.currentTarget as HTMLAnchorElement;
      const rect = button.getBoundingClientRect();
      const dx = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
      const dy = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
      button.style.transform = `translate(${(dx * 6).toFixed(2)}px,${(dy * 4 - 2).toFixed(2)}px)`;
    };
    const onPointerLeave = (event: PointerEvent) => {
      (event.currentTarget as HTMLAnchorElement).style.transform = "";
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    reducedMotion.addEventListener("change", onPreferenceChange);
    hover.addEventListener("change", onPreferenceChange);
    buttons.forEach((button) => {
      button.addEventListener("pointermove", onPointerMove);
      button.addEventListener("pointerleave", onPointerLeave);
    });

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      reducedMotion.removeEventListener("change", onPreferenceChange);
      hover.removeEventListener("change", onPreferenceChange);
      buttons.forEach((button) => {
        button.removeEventListener("pointermove", onPointerMove);
        button.removeEventListener("pointerleave", onPointerLeave);
      });
      inner.style.transform = "";
      inner.style.opacity = "";
      resetButtons();
    };
  }, []);

  return <div ref={ref} className={className}>{children}</div>;
}
