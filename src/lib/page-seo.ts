/**
 * The titles and meta descriptions the original HTML templates shipped with.
 * Kept verbatim because they carry deliberate keyword targeting; the routes
 * use them as absolute titles so the layout's "%s | JinnByte" template does
 * not append the brand a second time.
 *
 * The seven case studies are deliberately absent: in the templates they all
 * shared one copy-pasted portfolio title and description, so /work/[slug]
 * generates a unique pair per case instead.
 */
export const pageSeo = {
  home: {
    title: "JinnByte | AI, Software & Digital Solutions Engineering",
    description:
      "JinnByte is a solution-led technology partner combining product strategy, software engineering, AI, automation, UX and cloud to build and scale digital products and platforms.",
  },
  about: {
    title: "About JinnByte | Digital Products & Engineering",
    description:
      "JinnByte is the result of a passion for innovation and investing in great ideas. Since 2018 we have delivered cutting-edge solutions using diverse software technologies.",
  },
  solutions: {
    title: "Solutions | AI & Software Development Company | JinnByte",
    description:
      "AI engineering, digital product development, system integration, UX, and cloud. Explore JinnByte's solutions, the industries we build for, and how we deliver.",
  },
  work: {
    title: "Case Studies & Portfolio | Software Development Company | JinnByte",
    description:
      "The products JinnByte has designed, built and shipped, across education, healthcare, consumer AI, fitness, wellness, recruitment and field services.",
  },
  careers: {
    title: "Careers | Top Tech Company | Hiring Talent | JinnByte",
    description:
      "Experience working on world-class projects that impact millions of customers. We provide anything you need to get the job done.",
  },
} as const;
