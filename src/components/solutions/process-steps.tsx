"use client";

import { useEffect, useRef, type CSSProperties } from "react";

import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";
import { solutions } from "@/data/solutions";
import { BAND, SecHead } from "@/components/solutions/section-parts";

/**
 * "How we work" — four ruled columns sitting on a connector that fills as the
 * section rises through the viewport, lighting each node as it passes. The
 * track is hidden below 900px, and reduced motion gets the finished state.
 */
export function ProcessSteps() {
  const { process } = solutions;
  const gridRef = useRef<HTMLOListElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    const fill = fillRef.current;
    if (!grid || !fill) return;

    const nodes = [...grid.querySelectorAll<HTMLElement>("[data-node]")];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 900px)");

    if (reduce.matches) {
      fill.style.transform = "scaleX(1)";
      nodes.forEach((n) => n.setAttribute("data-node", "on"));
      return;
    }

    let ticking = false;
    const update = () => {
      ticking = false;
      if (mobile.matches) return;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const r = grid.getBoundingClientRect();
      // fills from 0 to 1 as the grid rises from 82vh to 38vh
      const p = Math.min(Math.max((vh * 0.82 - r.top) / (vh * 0.82 - vh * 0.38), 0), 1);
      fill.style.transform = `scaleX(${p.toFixed(4)})`;

      const w = r.width || 1;
      for (const node of nodes) {
        const nr = node.getBoundingClientRect();
        const at = (nr.left + nr.width / 2 - r.left) / w;
        node.setAttribute("data-node", p >= at ? "on" : "");
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className={BAND}>
      <Container>
        <SecHead kicker={process.kicker} title={process.title} lede={process.lede} />

        <ol
          ref={gridRef}
          className="relative grid border-t border-line min-[481px]:grid-cols-2 min-[901px]:grid-cols-4"
        >
          {/* the connector, drawn across the top rule */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-px left-0 h-0.5 w-full overflow-hidden max-[900px]:hidden"
          >
            <span
              ref={fillRef}
              className="block h-full w-full origin-left bg-[linear-gradient(90deg,#53B2B3_0%,#C39A5A_34%,#CB8878_67%,#8E88C2_100%)] will-change-transform"
              // Use the same property as the scroll animation; scale-x-0 sets a separate CSS scale.
              style={{ transform: "scaleX(0)" }}
            />
          </span>

          {process.steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              style={{ "--nc": step.accent } as CSSProperties}
              className={cn(
                "relative border-line py-8.5 min-[481px]:px-7.5 min-[481px]:pt-9.5 min-[481px]:pb-10",
                "border-t first:border-t-0 min-[481px]:border-t-0 min-[481px]:border-r",
                "min-[481px]:nth-[2n]:border-r-0 min-[481px]:nth-[n+3]:border-t min-[901px]:nth-[2n]:border-r min-[901px]:nth-[n+3]:border-t-0 min-[901px]:last:border-r-0"
              )}
            >
              <span
                aria-hidden
                data-node=""
                className={cn(
                  "absolute -top-1.5 left-7.5 z-[2] h-[11px] w-[11px] rounded-full border-2 border-line bg-soft max-[900px]:hidden",
                  "transition-[background,border-color,transform,box-shadow,translate,scale] duration-300 ease-brand",
                  "data-[node=on]:scale-[1.18] data-[node=on]:border-[var(--nc)] data-[node=on]:bg-[var(--nc)]",
                  "data-[node=on]:shadow-[0_0_0_5px_color-mix(in_srgb,var(--nc)_16%,transparent)]"
                )}
              />
              <div className="mb-5.5 font-display text-[14px] tracking-[0.18em] text-brand-deep">
                {step.n}
              </div>
              <h3 className="mb-2.75 text-[18px] font-normal tracking-[-0.015em]">{step.title}</h3>
              <p className="text-[13.8px] leading-[1.64] text-ink-soft">{step.blurb}</p>
              <ul className="mt-4.5 flex list-none flex-col gap-1.75 p-0">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className="relative pl-[15px] text-[12.3px] leading-[1.4] text-ink-soft before:absolute before:top-1.5 before:left-0 before:h-[5px] before:w-[5px] before:rounded-full before:bg-brand before:opacity-75 before:content-['']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
