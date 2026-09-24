import Image from "next/image";

import { ButtonLink } from "@/components/ui/button";
import { BLEED_PADDING, DARK_GRADIENT } from "@/components/ui/dark-band";
import { Container } from "@/components/ui/section";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import { SectionKicker, SectionLede } from "@/components/ui/section-kicker";
import { cn } from "@/lib/cn";
import { home } from "@/data/home";

/** Light accents for the numerals in the dark "Why JinnByte" band. */
const WHY_ACCENTS = ["120,193,196", "150,160,230", "226,182,94", "232,158,130"] as const;

function Lines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className="block">
          {line}
        </span>
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ */

export function Hero() {
  const { hero } = home;
  return (
    <section
      // Marks the dark hero so the sticky header renders transparent over it.
      data-hero
      className="relative -mt-19 flex min-h-[max(660px,100svh)] items-center overflow-hidden bg-night max-[760px]:min-h-0"
    >
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_50%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(3,8,18,.9)_0%,rgba(3,8,18,.74)_26%,rgba(3,8,18,.28)_58%,rgba(3,8,18,0)_100%)]" />

      <Container className="relative z-[2] flex-1 pt-32 pb-16 md:pt-[140px] md:pb-30">
        <div className="max-w-full lg:max-w-[min(62ch,64%)]">
          <h1 className="mt-4.5 mb-5 text-[clamp(30px,4.6vw,58px)] font-extralight leading-[1.12] tracking-[-0.035em] text-white lg:whitespace-nowrap">
            <Lines lines={hero.title} />
          </h1>
          <p className="mb-7.5 max-w-[44ch] text-[clamp(16px,1.9vw,18.5px)] font-light text-white/80">
            {hero.lede}
          </p>
          <div className="flex flex-wrap gap-3.5">
            <ButtonLink href="/#contact" variant="brand" arrow>
              {hero.ctas[0]?.label ?? "Discuss your challenge"}
            </ButtonLink>
            <ButtonLink href="/work" variant="lineOnDark" arrow>
              {hero.ctas[1]?.label ?? "Explore our work"}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AtAGlance() {
  const { glance } = home;
  return (
    <section id="journey" className="bg-soft">
      <Container>
        <div
          className={cn(
            "relative left-1/2 w-screen -translate-x-1/2 overflow-hidden md:pt-[clamp(124px,15vh,180px)] pt-10",
            DARK_GRADIENT,
            BLEED_PADDING
          )}
        >
          <div className="grid items-center gap-[clamp(52px,5.8vw,92px)] md:pb-[clamp(155px,21vh,230px)] pb-10 lg:grid-cols-[1.08fr_0.92fr]">
            <Reveal>
              <SectionKicker onDark className="mb-5.5">
                {glance.kicker}
              </SectionKicker>
              <h2 className="text-[clamp(26px,3vw,42px)] font-extralight leading-[1.13] tracking-[-0.032em] text-white">
                <Lines lines={glance.title} />
              </h2>
              <hr className="mt-6.5 mb-5.5 h-0.5 w-11 border-0 bg-brand-on-dark" />
              <p className="text-[15px] leading-[1.72] font-light text-white/58">{glance.lede}</p>
            </Reveal>

            {/* The template's 2x2 block has no cell rules — only spacing. */}
            <dl className="grid h-full grid-cols-2 content-between gap-x-[clamp(32px,3.4vw,60px)] gap-y-[34px]">
              {glance.stats.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                  className="flex flex-col items-start justify-start gap-7 py-[clamp(18px,2.6vh,26px)]"
                >
                  <dd className="flex items-baseline font-display text-[clamp(38px,4vw,54px)] font-extralight leading-none tracking-[-0.04em] text-white">
                    <CountUp to={s.to} suffix={s.suffix} plus={s.plus} delay={260 + i * 160} />
                  </dd>
                  <dt className="max-w-[22em] text-[14px] leading-[1.6] text-white/60">{s.label}</dt>
                </Reveal>
              ))}
            </dl>
          </div>

          {/* Notched offices panel, a step lighter than the band behind it. */}
          <Reveal
            className={cn(
              "relative left-1/2 w-screen -translate-x-1/2 bg-[#2A2A2A] md:pt-[clamp(134px,16vh,185px)] pt-10 md:pb-[clamp(100px,12vh,145px)] pb-10",
              BLEED_PADDING,
              "min-[821px]:[clip-path:polygon(0_46px,26%_46px,calc(26%+92px)_0,100%_0,100%_100%,0_100%)]"
            )}
          >
            <div className="mb-5 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-[#6FD3D3]">
              {glance.officesLabel}
            </div>
            <div className="grid gap-8 min-[1081px]:grid-cols-3">
              {glance.offices.map((o) => (
                <div key={o.city} className="border-l border-white/16 pl-5.5">
                  <div className="flex items-center gap-[11px]">
                    {o.flag ? (
                      <Image
                        src={o.flag}
                        alt=""
                        width={24}
                        height={16}
                        className="flex-none rounded-[2px] opacity-92"
                        style={{ width: 24, height: "auto" }}
                      />
                    ) : null}
                    <h4 className="font-display text-[24px] font-normal tracking-[-0.015em] text-white">
                      {o.city}
                    </h4>
                  </div>
                  <span className="mt-[7px] block text-[13px] text-[#6FD3D3]">{o.country}</span>
                  <span className="mt-2 block text-[13.5px] leading-[1.55] font-light text-[#8CA6B0]">
                    {o.address}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function Clients() {
  const { clients } = home;
  return (
    <section id="clients" className="dot-field relative overflow-hidden bg-soft py-[clamp(40px,5.6vh,72px)]">
      <Container className="relative z-[1]">
        <Reveal className="mx-auto mb-[clamp(44px,6vh,80px)] max-w-[66ch] text-center">
          <SectionKicker className="mb-3.5 justify-center">{clients.kicker}</SectionKicker>
          <h2 className="text-[clamp(25px,2.6vw,36px)] font-extralight leading-[1.16] tracking-[-0.03em]">
            {clients.title}
          </h2>
          <SectionLede className="mt-3.5 text-[15.6px] font-light leading-[1.74] text-ink-soft [@media(max-height:790px)]:text-[14.5px]">
            {clients.lede}
          </SectionLede>
        </Reveal>

        <Reveal className="grid grid-cols-2 min-[641px]:grid-cols-4 min-[1081px]:grid-cols-6">
          {clients.logos.map((logo) => (
            <div
              key={logo.name}
              className={cn(
                "group relative flex items-center justify-center overflow-hidden rounded-[12px]",
                "min-h-[132px] px-5 pt-7 pb-7.5",
                "max-[1080px]:min-h-[124px] max-[1080px]:px-4.5 max-[1080px]:py-6",
                "[@media(max-height:790px)]:min-h-[92px] [@media(max-height:790px)]:p-3.5",
                "transition-[transform,background,box-shadow,translate,scale] duration-400 ease-brand",
                "hover:-translate-y-[3px] hover:bg-white hover:shadow-[0_14px_34px_-14px_rgb(15_30_39/0.22)]"
              )}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={Math.round(logo.w)}
                height={Math.round(logo.h)}
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: `min(${logo.w}px, 100%)`,
                  maxHeight: `${logo.h}px`,
                }}
                className="object-contain transition-transform duration-400 ease-brand group-hover:translate-y-[-10px] group-hover:scale-102"
              />
              <span className="pointer-events-none absolute inset-x-3 bottom-3.5 translate-y-1.5 text-center text-[11px] font-semibold uppercase leading-[1.25] tracking-[0.05em] text-brand-deep opacity-0 transition-[opacity,transform,translate,scale] duration-350 ease-brand group-hover:translate-y-0 group-hover:opacity-100">
                {logo.name}
              </span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

export function WhyJinnByte() {
  const { why } = home;
  return (
    <section id="why" className="bg-[#0F1E27] py-[62px] md:py-20 lg:py-28">
      <Container>
        <Reveal className="mb-11 max-w-[760px] md:mb-14">
          <SectionKicker onDark className="mb-4 md:mb-5.5">{why.kicker}</SectionKicker>
          <h2 className="text-[clamp(29px,4.3vw,50px)] font-extralight tracking-[-0.03em] text-white">
            <Lines lines={why.title} />
          </h2>
        </Reveal>

        <div className="grid border-t border-white/16 sm:grid-cols-2 lg:grid-cols-4">
          {why.columns.map((col, i) => (
            <Reveal
              key={col.title}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="border-b border-white/16 py-6.5 sm:border-r sm:px-6.5 lg:border-b-0 lg:pt-8.5 lg:pb-2 max-sm:border-r-0"
            >
              <span
                className="mb-5.5 block font-display text-[32px] font-extralight tracking-[-0.03em] opacity-85"
                style={{ color: `rgb(${WHY_ACCENTS[i % WHY_ACCENTS.length]})` }}
              >
                {col.n}
              </span>
              <h3 className="mb-2.5 font-display text-[18px] font-normal text-white">{col.title}</h3>
              <p className="text-[14px] leading-[1.7] text-white/64">{col.blurb}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Recognition() {
  const { certs } = home;
  return (
    <section className="bg-soft py-16 md:py-20.5">
      <Container>
        <div className="grid items-center gap-10.5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-15">
          <Reveal>
            <SectionKicker className="mb-4 md:mb-5.5">{certs.kicker}</SectionKicker>
            <h2 className="text-[clamp(29px,4.3vw,50px)] font-extralight tracking-[-0.03em]">
              {certs.title}
            </h2>
            <p className="mt-5 text-[15.5px] font-light text-ink-soft md:text-[17px]">{certs.lede}</p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {certs.seals.map((seal, i) => (
              <Reveal
                key={seal.alt}
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                className="group flex flex-col gap-4 rounded-lg border border-line-soft bg-panel px-6.5 py-7 transition-[transform,box-shadow,border-color,translate,scale] duration-400 ease-brand hover:-translate-y-1 hover:border-transparent hover:shadow-card"
              >
                <span className="flex h-9 items-center">
                  {/* Remote SVG badges served from the existing WordPress media library. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={seal.logo}
                    alt={seal.alt}
                    loading="lazy"
                    className="max-h-9 w-auto transition-transform duration-400 ease-brand group-hover:scale-104"
                  />
                </span>
                <span className="text-[13.5px] leading-[1.6] text-ink-soft">{seal.blurb}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ContactSection() {
  const { contact } = home;
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-[#040d10] py-16 md:py-26">
      {contact.image ? (
        <Image src={contact.image} alt="" fill sizes="100vw" className="object-cover object-center" />
      ) : null}
      <div className="absolute inset-0 bg-[#040d10]/78" />

      <Container className="relative z-[1]">
        <div className="grid items-center gap-11 lg:grid-cols-2 lg:gap-15">
          <Reveal>
            <SectionKicker onDark className="mb-4 md:mb-5.5">{contact.kicker}</SectionKicker>
            <h2 className="text-[clamp(29px,4.3vw,50px)] font-extralight tracking-[-0.03em] text-white">
              <Lines lines={contact.title} />
            </h2>
            <p className="mt-5 max-w-[50ch] text-[15.5px] font-light text-white/70 md:text-[17px]">
              {contact.lede}
            </p>

            <ol className="mt-8.5 list-none">
              {contact.steps.map((step, i) => (
                <li key={step.title} className="relative border-t border-white/16 py-5.5 pl-14.5">
                  <span
                    aria-hidden
                    className="absolute top-5.5 left-0 font-display text-[15px] font-light text-brand-on-dark"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <b className="block font-display text-[17px] font-normal text-white">{step.title}</b>
                  <span className="mt-1.5 block text-[14px] leading-[1.65] text-white/60">
                    {step.blurb}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={2}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ContactForm() {
  const { form } = home.contact;

  // Borderless fields with a hairline that draws across on focus, as in the template.
  const controlClass =
    "w-full rounded-none border-0 border-b border-[#d9d9d9] bg-white px-0 py-2.25 font-sans text-[14.5px] font-light text-[#1a1a1a] transition-colors duration-300 outline-none placeholder:text-ink-faint";

  return (
    <form
      // Posts to the existing enquiry endpoint, exactly as the template did.
      action="https://jinnbyte.com/contact/"
      method="get"
      className="rounded-[10px] bg-white px-6.5 py-8 shadow-[0_30px_70px_rgb(0_0_0/0.34)] md:px-9.5 md:py-10"
    >
      <h3 className="font-display text-[21px] font-normal tracking-[-0.015em]">{form.title}</h3>
      <p className="mt-2.5 text-[14px] leading-[1.65] text-ink-soft">{form.lede}</p>

      <div className="mt-6 grid gap-4.5 sm:grid-cols-2">
        {form.fields.map((field) => {
          const full = field.type === "textarea" || field.options.length > 0;
          return (
            <div
              key={field.name}
              className={cn("field group flex flex-col gap-1.75", full && "sm:col-span-2")}
            >
              <label
                htmlFor={`cf-${field.name}`}
                className="text-[12px] uppercase tracking-[0.06em] text-[#7a7a7a] transition-colors duration-300 group-focus-within:text-brand-deep"
              >
                {field.label}
                {field.required ? <i className="ml-[3px] text-brand-deep not-italic">*</i> : null}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={`cf-${field.name}`}
                  name={field.name}
                  rows={3}
                  placeholder={field.placeholder}
                  required={field.required}
                  className={cn(controlClass, "min-h-[78px] resize-y")}
                />
              ) : field.options.length > 0 ? (
                <select
                  id={`cf-${field.name}`}
                  name={field.name}
                  required={field.required}
                  defaultValue=""
                  className={controlClass}
                >
                  {field.options.map((opt, i) => (
                    <option key={opt} value={i === 0 ? "" : opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={`cf-${field.name}`}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  className={controlClass}
                />
              )}
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        className="btn-sheen mt-6.5 inline-flex cursor-pointer items-center justify-center gap-[0.6em] rounded-none bg-brand px-[30px] py-[15px] font-display text-[13px] uppercase tracking-[0.11em] text-white transition-[background,transform,box-shadow,translate,scale] duration-300 ease-brand hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-brand"
      >
        {form.submit || "Send enquiry"}
        <span aria-hidden>&rarr;</span>
      </button>
    </form>
  );
}
