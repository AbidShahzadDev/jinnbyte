"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties } from "react";

import { industries } from "@/data/industries";
import { contact } from "@/lib/site";
import styles from "./industry-cards.module.css";

type IndustryCardsProps =
  | { variant: "solutions"; onPick?: never }
  | { variant: "portfolio"; onPick: (cat: string) => void };

/** Shared template panels: hover previews a card; clicking keeps it selected. */
export function IndustryCards({ variant, onPick }: IndustryCardsProps) {
  const [selected, setSelected] = useState(industries[0].cat);
  const [hovered, setHovered] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);
  const active = hovered ?? focused ?? selected;

  return (
    <div className={styles.row} data-variant={variant} onMouseLeave={() => setHovered(null)}>
      {industries.map((panel) => {
        const open = active === panel.cat;
        const count = panel.caseStudies.length;
        return (
          <div
            key={panel.cat}
            className={styles.panel}
            data-open={open}
            role="group"
            aria-label={panel.label}
            tabIndex={0}
            onMouseEnter={() => setHovered(panel.cat)}
            onFocus={() => setFocused(panel.cat)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setFocused(null);
            }}
            onClick={(event) => {
              if (!(event.target as HTMLElement).closest("a, button")) setSelected(panel.cat);
            }}
            onKeyDown={(event) => {
              // Let nested links/buttons handle Enter and Space themselves.
              if (event.target !== event.currentTarget) return;
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelected(panel.cat);
              }
            }}
            style={{
              "--icon-background": panel.iconBackground,
              "--icon-foreground": panel.iconForeground,
            } as CSSProperties}
          >
            <Image
              src={panel.image}
              alt=""
              fill
              sizes={variant === "solutions" ? "(max-width: 900px) 100vw, 35vw" : "(max-width: 820px) 100vw, 35vw"}
              className={styles.image}
              onError={(event) => { event.currentTarget.style.display = "none"; }}
            />
            <span aria-hidden className={styles.overlay} />
            <span className={styles.top}>
              <span className={styles.icon}>
                <svg
                  viewBox={panel.icon.viewBox}
                  aria-hidden
                  // Exact SVG shapes extracted from the supplied templates.
                  dangerouslySetInnerHTML={{ __html: panel.icon.markup }}
                />
              </span>
              <b>{panel.label}</b>
            </span>
            <div className={styles.body}>
              <p>{panel.blurb}</p>
              {variant === "solutions" ? (
                <Link href="/work" className={styles.cta}>
                  See related work <span aria-hidden>&rarr;</span>
                </Link>
              ) : count > 0 ? (
                <button type="button" className={styles.cta} onClick={() => onPick(panel.cat)}>
                  View {count} case {count === 1 ? "study" : "studies"} <span aria-hidden>&rarr;</span>
                </button>
              ) : (
                <Link href={contact.ctaHref} className={styles.cta}>
                  Discuss a project <span aria-hidden>&rarr;</span>
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
