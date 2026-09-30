import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/section";
import { contact, footerBlurb, footerNavItems, offices, socials, site } from "@/lib/site";

function SocialMark({ label }: { label: string }) {
  const colorClass =
    label === "Facebook"
      ? "text-[#1877F2]"
      : label === "Twitter"
        ? "text-black"
        : label === "Linkedin"
          ? "text-[#0A66C2]"
          : "text-[#E4405F]";
  const common = {
    "aria-hidden": true as const,
    className: `h-4.5 w-4.5 shrink-0 ${colorClass}`,
    viewBox: "0 0 24 24",
  };

  switch (label) {
    case "Facebook":
      return (
        <svg {...common} fill="currentColor">
          <path d="M13.2 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7v3.1h2.8v8z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg
          {...common}
          className="h-4.5 w-4.5 shrink-0"
          fill="none"
          stroke="url(#instagram-gradient)"
          strokeWidth="1.7"
        >
          <defs>
            <radialGradient id="instagram-gradient" gradientUnits="userSpaceOnUse" cx="7.2" cy="25.68" r="30.69">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="5%" stopColor="#fdf497" />
              <stop offset="45%" stopColor="#fd5949" />
              <stop offset="60%" stopColor="#d6249f" />
              <stop offset="90%" stopColor="#285AEB" />
            </radialGradient>
          </defs>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".8" fill="url(#instagram-gradient)" stroke="none" />
        </svg>
      );
    case "Twitter":
      return (
        <svg {...common} fill="currentColor">
          <path d="M18.9 3h2.7l-7.5 8.6 8.8 9.4H16l-5.4-6.5-5.7 6.5H2.2l8-9.2L1.8 3h7.1l4.9 5.9L18.9 3Zm-1 16.3h1.5L7.8 4.6H6.2l11.7 14.7Z" />
        </svg>
      );
    case "Linkedin":
      return (
        <svg {...common} fill="currentColor">
          <path d="M5.2 3.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM3.6 8.5h3.2V21H3.6V8.5Zm5.2 0h3.1v1.7h.1a3.4 3.4 0 0 1 3.1-1.9c3.3 0 3.9 2.2 3.9 5V21h-3.2v-6.8c0-1.6 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H8.8V8.5Z" />
        </svg>
      );
    default:
      return null;
  }
}

function ContactMark({ type }: { type: "email" | "phone" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 fill-none stroke-brand stroke-[1.6] transition-colors group-hover:stroke-brand-deep"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {type === "email" ? (
        <>
          <rect x="3" y="5.5" width="18" height="13" rx="2" />
          <path d="m3.5 7 8.5 6 8.5-6" />
        </>
      ) : (
        <path d="M6.6 3.5h2.6l1.4 4.2-2 1.3a11.5 11.5 0 0 0 6.4 6.4l1.3-2 4.2 1.4v2.6a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z" />
      )}
    </svg>
  );
}

function ColumnHeading({ children }: { children: string }) {
  return (
    <h4 className="accent-underscore mb-4.5 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink-faint">
      {children}
    </h4>
  );
}

const linkClass =
  "group mb-3 flex w-fit items-center gap-3 text-[14px] leading-[1.65] text-ink-soft transition-[color,transform,translate,scale] duration-300 ease-brand hover:translate-x-[3px] hover:text-brand-deep";

export function SiteFooter() {
  return (
    <footer className="bg-soft pt-17.5 pb-10">
      <Container>
        <div className="grid gap-11 max-[860px]:gap-9 min-[981px]:grid-cols-[1.6fr_1fr_1fr_1.3fr] min-[761px]:max-[980px]:grid-cols-2 max-[760px]:grid-cols-1">
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
                <SocialMark label={s.label} />
                {s.label}
              </a>
            ))}
          </div>

          <div>
            <ColumnHeading>Email</ColumnHeading>
            {contact.emails.map((e) => (
              <a key={e.href} href={e.href} className={linkClass}>
                <ContactMark type="email" />
                {e.label}
              </a>
            ))}
            <div className="mt-8">
              <ColumnHeading>Phone</ColumnHeading>
              {contact.phones.map((p) => (
                <a key={p.href} href={p.href} className={linkClass}>
                  <ContactMark type="phone" />
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
                  <b className="flex items-center gap-2.5 font-display text-[12.5px] font-normal uppercase tracking-[0.06em] text-ink">
                    <Image src={o.flag} alt="" width={20} height={14} className="h-auto w-5 shrink-0 rounded-xs" />
                    {o.city}
                  </b>
                  <span className="block pl-7.5">{o.street}</span>
                </div>
              ))}
            </address>
          </div>
        </div>

        <div className="mt-13.5 flex flex-wrap justify-between gap-3 border-t border-line-soft pt-6.5 text-[12.5px] text-ink-faint">
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
