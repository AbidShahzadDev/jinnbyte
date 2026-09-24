"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type MouseEvent,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  /** Stagger index; each step adds 80ms, matching the template's .d1–.d4 classes. */
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
  /** Render as something other than a div, e.g. "section" or "li". */
  as?: ElementType;
  style?: CSSProperties;
  /** Anything else (id, role, aria-*) is forwarded to the rendered element. */
  [key: `aria-${string}`]: unknown;
  [key: `data-${string}`]: unknown;
  id?: string;
  role?: string;
  onMouseMove?: (e: MouseEvent<HTMLElement>) => void;
};

/**
 * Replaces the template's `.rv` / `.in` IntersectionObserver pattern. Each
 * instance observes itself once and then disconnects, so a long page costs one
 * observer per element but no scroll listeners.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  return (
    <Tag
      ref={ref}
      {...rest}
      data-reveal={shown ? "in" : ""}
      style={delay ? { ...style, transitionDelay: `${delay * 0.08}s` } : style}
      // Named group so children can run their own choreography off this
      // element's revealed state, e.g. `group-data-[reveal=in]/reveal:w-[46px]`.
      className={cn("group/reveal", className)}
    >
      {children}
    </Tag>
  );
}
