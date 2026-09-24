"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/cn";
import type { IndustryPanel } from "@/data/portfolio";

/**
 * The accordion strip of industry panels. One panel is expanded at a time;
 * hovering or focusing another expands it instead, matching the template's
 * flex-grow transition.
 */
export function IndustryPanels({
  panels,
  onPick,
}: {
  panels: readonly IndustryPanel[];
  /** Scrolls the grid into view filtered to this category. */
  onPick: (cat: string) => void;
}) {
  const [active, setActive] = useState(panels[0]?.cat ?? "");

  return (
    <div className="flex flex-col gap-3 min-[821px]:h-[470px] min-[821px]:flex-row min-[821px]:gap-3.5">
      {panels.map((panel) => {
        const open = active === panel.cat;
        return (
          <div
            key={panel.cat}
            role="group"
            aria-label={panel.label}
            tabIndex={0}
            onMouseEnter={() => setActive(panel.cat)}
            onFocus={() => setActive(panel.cat)}
            className={cn(
              "group relative min-w-0 cursor-pointer overflow-hidden rounded-[14px] bg-[#1a1a1a] transition-[flex-grow] duration-600 ease-brand max-[641px]:h-[200px] min-[641px]:max-[821px]:h-[190px] min-[821px]:h-auto min-[821px]:flex-1 min-[821px]:basis-0",
              open && "min-[821px]:grow-[2.7]"
            )}
          >
            <Image
              src={panel.image}
              alt=""
              fill
              sizes="(max-width: 820px) 100vw, 40vw"
              className={cn(
                "object-cover object-center contrast-[1.02] grayscale-[28%] transition-transform duration-1000 ease-brand",
                open && "scale-105"
              )}
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,51,54,.30)_0%,rgba(20,20,20,.32)_42%,rgba(15,15,15,.86)_100%)]"
            />

            <span className="absolute top-5.5 right-4.5 left-5.5 z-[2] flex items-center gap-2.75 text-white">
              <svg
                viewBox="0 0 28 28"
                aria-hidden
                className="h-6 w-6 flex-none fill-none stroke-brand-on-dark stroke-[1.4] [stroke-linecap:round] [stroke-linejoin:round]"
              >
                {panel.icon.map((d, i) => (
                  <path key={i} d={d} />
                ))}
              </svg>
              <b className="font-display text-[17px] font-normal tracking-[-0.01em] whitespace-nowrap">
                {panel.label}
              </b>
            </span>

            <span
              className={cn(
                "absolute right-5.5 bottom-6 left-5.5 z-[2] transition-[opacity,transform,translate,scale] delay-50 duration-500 ease-brand",
                "max-[820px]:opacity-100",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              <p className="mb-4 max-[641px]:max-w-none min-[641px]:max-w-[30ch] text-[14.5px] font-light leading-[1.62] text-white/82 max-[640px]:max-w-none">
                {panel.blurb}
              </p>
              <button
                type="button"
                onClick={() => onPick(panel.cat)}
                className="group/btn inline-flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 font-display text-[12.5px] font-normal uppercase tracking-[0.08em] text-brand-on-dark transition-colors hover:text-white"
              >
                {panel.cta}
                <span aria-hidden className="transition-transform duration-300 ease-brand group-hover/btn:translate-x-1">
                  &rarr;
                </span>
              </button>
            </span>
          </div>
        );
      })}
    </div>
  );
}
