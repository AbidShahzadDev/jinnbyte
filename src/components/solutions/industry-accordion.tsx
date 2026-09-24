"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/cn";
import type { InlineIcon } from "@/data/solutions";

export type IndustryPanel = {
  cat: string;
  label: string;
  blurb: string;
  image: string;
  icon: InlineIcon;
  cta: string;
};

/**
 * The expanding image carousel. One panel is open at a time and grows to 2.7x
 * the others; hovering or focusing another hands the space over. Below 900px it
 * becomes a stack of fixed-height cards with their copy always visible.
 */
export function IndustryAccordion({ panels }: { panels: readonly IndustryPanel[] }) {
  const [active, setActive] = useState(panels[0]?.cat ?? "");

  return (
    <div className="flex flex-col gap-3 min-[901px]:h-[clamp(440px,58vh,560px)] min-[901px]:flex-row min-[901px]:gap-3.5">
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
              "relative h-[184px] min-w-0 cursor-pointer overflow-hidden rounded-[14px] bg-[#141414]",
              "transition-[flex-grow] duration-600 ease-brand focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-brand",
              "min-[901px]:h-auto min-[901px]:flex-1 min-[901px]:basis-0",
              open && "min-[901px]:grow-[2.7]"
            )}
          >
            <Image
              src={panel.image}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className={cn(
                "object-cover object-center contrast-[1.02] grayscale-[24%] transition-transform duration-1000 ease-brand",
                open && "scale-105"
              )}
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,51,54,.26)_0%,rgba(18,18,18,.34)_44%,rgba(10,10,10,.88)_100%)]"
            />

            <span className="absolute top-5.5 right-4.5 left-5.5 z-[2] flex items-center gap-2.75 text-white">
              <svg
                viewBox={panel.icon.viewBox}
                aria-hidden
                className="h-[23px] w-[23px] flex-none fill-none stroke-brand-on-dark stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
                // Icon markup comes from our own templates at build time.
                dangerouslySetInnerHTML={{ __html: panel.icon.markup }}
              />
              <b className="font-display text-[17px] font-normal tracking-[-0.01em] whitespace-nowrap">
                {panel.label}
              </b>
            </span>

            <span
              className={cn(
                "absolute right-5.5 bottom-6 left-5.5 z-[2]",
                "transition-[opacity,transform,translate,scale] delay-50 duration-500 ease-brand",
                "max-[900px]:translate-y-0 max-[900px]:opacity-100",
                open ? "translate-y-0 opacity-100" : "translate-y-3.5 opacity-0"
              )}
            >
              <p className="mb-4 max-w-[34ch] text-[14.5px] font-light leading-[1.62] text-white/86 max-[900px]:max-w-none">
                {panel.blurb}
              </p>
              <Link
                href="/work"
                className="group/go inline-flex items-center gap-2 font-display text-[12.5px] font-normal uppercase tracking-[0.08em] text-brand-on-dark transition-[color,gap] duration-300 ease-brand hover:gap-[1em] hover:text-white"
              >
                {panel.cta || "See related work"}
                <span aria-hidden className="transition-transform duration-300 ease-brand group-hover/go:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </span>
          </div>
        );
      })}
    </div>
  );
}
