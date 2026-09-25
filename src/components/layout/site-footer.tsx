import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/section";
import { contact, footerBlurb, footerNavItems, offices, socials, site } from "@/lib/site";

function ColumnHeading({ children }: { children: string }) {
  return (
    <h4 className="accent-underscore mb-4.5 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink-faint">
      {children}
    </h4>
  );
}

const linkClass =
  "mb-3 block w-fit text-[14px] leading-[1.65] text-ink-soft transition-[color,transform,translate,scale] duration-300 ease-brand hover:translate-x-[3px] hover:text-brand-deep";

export function SiteFooter() {
  return (
    <footer className="bg-soft pt-17.5 pb-10">
      <Container>
        <div className="grid gap-11 max-[861px]:gap-9 min-[981px]:grid-cols-[1.6fr_1fr_1fr_1.3fr] min-[761px]:max-[981px]:grid-cols-2 max-[761px]:grid-cols-1">
          <div>
            <Link href="/" aria-label="JinnByte home" className="block w-fit">
              <Image
                src="/images/logo-light.png"
                alt="JinnByte"
                width={120}
                height={26}
                style={{ width: "auto", height: 26 }}
              />
            </Link>
            <p className="mt-4.5 max-w-[24em] text-[14px] leading-[1.65] text-ink-soft">{footerBlurb}</p>
          </div>

          <div>
            <ColumnHeading>Follow Us</ColumnHeading>
            {socials.map((s) => (
              <a key={s.label} href={s.href} className={linkClass} rel="noreferrer noopener" target="_blank">
                {s.label}
              </a>
            ))}
          </div>

          <div>
            <ColumnHeading>Email</ColumnHeading>
            {contact.emails.map((e) => (
              <a key={e.href} href={e.href} className={linkClass}>
                {e.label}
              </a>
            ))}
            <div className="mt-8">
              <ColumnHeading>Phone</ColumnHeading>
              {contact.phones.map((p) => (
                <a key={p.href} href={p.href} className={linkClass}>
                  {p.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <ColumnHeading>Address</ColumnHeading>
            <address className="not-italic">
              {offices.map((o) => (
                <div key={o.city} className="mb-3.75 text-[13.5px] leading-normal text-ink-soft">
                  <b className="block font-display text-[12.5px] font-normal uppercase tracking-[0.06em] text-ink">
                    {o.city}
                  </b>
                  {o.street}
                </div>
              ))}
            </address>
          </div>
        </div>

        <div className="md:mt-13.5 mt-4 flex flex-wrap justify-between gap-3 border-t border-line-soft pt-6.5 text-[12.5px] text-ink-faint">
          <span>&copy; {site.name}. All Rights Reserved.</span>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-5.5">
            {footerNavItems.map((item) =>
              item.href.startsWith("http") ? (
                <a
                  key={item.href}
                  href={item.href}
                  rel="noreferrer"
                  className="transition-colors hover:text-brand-deep"
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} href={item.href} className="transition-colors hover:text-brand-deep">
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
