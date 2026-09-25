import Image from "next/image";
import { Fragment } from "react";

import { HeroMotion } from "@/components/home/hero-motion";
import { ButtonLink } from "@/components/ui/button";
import { home } from "@/data/home";
import styles from "./hero.module.css";

/** Uses the final hero styles and motion from templates/index.html. */
export function Hero() {
  const { hero } = home;

  return (
    <section data-hero className={styles.hero}>
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        preload
        unoptimized
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.wrap}>
        <HeroMotion className={styles.inner}>
          <h1 className={styles.headline}>
            {hero.title.map((line, index) => (
              <Fragment key={line}>
                {index > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </h1>
          <p className={styles.lede}>{hero.lede}</p>
          <div className={styles.cta}>
            <ButtonLink href="/#contact" className={styles.primary} arrow>
              {hero.ctas[0]?.label ?? "Discuss your challenge"}
            </ButtonLink>
            <ButtonLink href="/work" variant="lineOnDark" className={styles.secondary} arrow>
              {hero.ctas[1]?.label ?? "Explore our work"}
            </ButtonLink>
          </div>
        </HeroMotion>
      </div>
    </section>
  );
}
