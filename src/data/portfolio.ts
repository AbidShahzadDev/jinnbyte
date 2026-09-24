/** Content for the /work route, lifted from the original portfolio.html template. */

export type Project = {
  slug: string;
  cat: string;
  tag: string;
  name: string;
  outcome: string;
  kpi: { value: string; label: string };
  chips: string[];
  image: string;
  alt: string;
  /** CSS object-position, preserving each card's art direction. */
  objectPosition: string;
};

export type IndustryPanel = {
  cat: string;
  label: string;
  blurb: string;
  image: string;
  /** Path "d" attributes drawn inside a 28x28 viewBox. */
  icon: string[];
  cta: string;
};

export type Portfolio = {
  hero: { kicker: string; title: string; lede: string };
  industries: { kicker: string; title: string; lede: string; panels: IndustryPanel[] };
  work: {
    kicker: string;
    title: string;
    lede: string;
    filters: { cat: string; label: string }[];
    projects: Project[];
  };
  cta: { kicker: string; title: string; body: string };
};

export const portfolio: Portfolio = {
  "hero": {
    "kicker": "Selected work",
    "title": "The work, and what it moved.",
    "lede": "Seven products in production across education, healthcare, consumer AI, fitness, wellness, recruitment and field services. Each one built end to end, then measured by what it changed."
  },
  "industries": {
    "kicker": "By industry",
    "title": "Depth where it counts.",
    "lede": "We build inside the language of each field, not around it. Open one to see what that looks like.",
    "panels": [
      {
        "cat": "education",
        "label": "Education",
        "blurb": "Gamified, connected learning that reaches past the classroom to teachers and parents.",
        "image": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=70",
        "icon": [
          "M4 9 14 4l10 5-10 5z",
          "M9 12v6c0 1 2.2 2.4 5 2.4S19 19 19 18v-6",
          "M24 9v6"
        ],
        "cta": "View 1 case study →"
      },
      {
        "cat": "healthcare",
        "label": "Healthcare",
        "blurb": "AI that turns scattered medical records into one clear, structured health picture.",
        "image": "https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?auto=format&fit=crop&w=1400&q=70",
        "icon": [
          "M4 14h4l2.5-6 4 12 3-8 2 2h4.5"
        ],
        "cta": "View 1 case study →"
      },
      {
        "cat": "consumer",
        "label": "Consumer",
        "blurb": "Personalised consumer AI paired with growth engines that actually acquire users.",
        "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=70",
        "icon": [
          "M14 4c1.6 4.2 3.8 6.4 8 8-4.2 1.6-6.4 3.8-8 8-1.6-4.2-3.8-6.4-8-8 4.2-1.6 6.4-3.8 8-8z"
        ],
        "cta": "View 1 case study →"
      },
      {
        "cat": "wellness",
        "label": "Wellness",
        "blurb": "Programmes, companions and habits that keep people coming back, day after day.",
        "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=70",
        "icon": [
          "M6.2 14h15.6",
          "M8 8v12M20 8v12"
        ],
        "cta": "View 2 case studies →"
      },
      {
        "cat": "hr",
        "label": "Recruitment",
        "blurb": "Interview intelligence that gives hiring teams structure, speed and confidence.",
        "image": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=70",
        "icon": [
          "M4 23c0-4.2 3.1-7 7-7 1.7 0 3.2.5 4.4 1.4",
          "M17.5 19.5l2.2 2.2 4-4.4"
        ],
        "cta": "View 1 case study →"
      },
      {
        "cat": "field",
        "label": "Field Services",
        "blurb": "Customers, technicians, operations and autonomous voice AI in one platform.",
        "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=70",
        "icon": [
          "M18.4 6.6a4.6 4.6 0 0 0-6 6L5 20l3 3 7.4-7.4a4.6 4.6 0 0 0 6-6l-3 3-2.6-.4-.4-2.6z"
        ],
        "cta": "View 1 case study →"
      }
    ]
  },
  "work": {
    "kicker": "Case studies",
    "title": "Every build, in one place.",
    "lede": "Filter by industry, or read them all. Each links through to the full story behind the product.",
    "filters": [
      {
        "cat": "all",
        "label": "All"
      },
      {
        "cat": "education",
        "label": "Education"
      },
      {
        "cat": "healthcare",
        "label": "Healthcare"
      },
      {
        "cat": "consumer",
        "label": "Consumer"
      },
      {
        "cat": "wellness",
        "label": "Fitness & Wellness"
      },
      {
        "cat": "hr",
        "label": "Recruitment"
      },
      {
        "cat": "field",
        "label": "Field Services"
      }
    ],
    "projects": [
      {
        "slug": "lingolane",
        "cat": "education",
        "tag": "Education",
        "name": "LingoLane",
        "outcome": "Extending foundational learning beyond the classroom.",
        "kpi": {
          "value": "100%",
          "label": "Curriculum digitised"
        },
        "chips": [
          "Solutions Engineering",
          "UX Design",
          "AI & ML"
        ],
        "image": "/images/cases/lingolane-hero.webp",
        "alt": "LingoLane product screen",
        "objectPosition": "center 72%"
      },
      {
        "slug": "smf",
        "cat": "healthcare",
        "tag": "Healthcare",
        "name": "SMF Med",
        "outcome": "Medical records, turned into a connected health record.",
        "kpi": {
          "value": "100%",
          "label": "Reports made structured"
        },
        "chips": [
          "AI & ML",
          "Solutions Engineering",
          "System Integration"
        ],
        "image": "https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?auto=format&fit=crop&w=1400&q=70",
        "alt": "SMF Med product screen",
        "objectPosition": "center 50%"
      },
      {
        "slug": "facebloom",
        "cat": "consumer",
        "tag": "Consumer",
        "name": "FaceBloom",
        "outcome": "Personalised beauty intelligence, built to scale.",
        "kpi": {
          "value": "$1M+",
          "label": "Revenue generated"
        },
        "chips": [
          "AI & ML",
          "Solutions Engineering",
          "UX Design"
        ],
        "image": "/images/cases/facebloom-hero.webp",
        "alt": "FaceBloom product screen",
        "objectPosition": "center 57%"
      },
      {
        "slug": "buff",
        "cat": "wellness",
        "tag": "Fitness & Wellness",
        "name": "BUFF",
        "outcome": "Fitness content, turned into a recurring digital ecosystem.",
        "kpi": {
          "value": "400%",
          "label": "Increase in MRR"
        },
        "chips": [
          "Solutions Engineering",
          "UX Design",
          "Cloud & Infra"
        ],
        "image": "/images/cases/buff-hero.webp",
        "alt": "BUFF product screen",
        "objectPosition": "center 66%"
      },
      {
        "slug": "openline",
        "cat": "wellness",
        "tag": "Fitness & Wellness",
        "name": "Openline",
        "outcome": "Relationship support made accessible and personal.",
        "kpi": {
          "value": "80%",
          "label": "Conflicts resolved in-app"
        },
        "chips": [
          "AI & ML",
          "Solutions Engineering",
          "UX Design"
        ],
        "image": "/images/cases/openline-hero.webp",
        "alt": "Openline product screen",
        "objectPosition": "center 82%"
      },
      {
        "slug": "maslow",
        "cat": "hr",
        "tag": "Recruitment",
        "name": "Maslow",
        "outcome": "Structure and intelligence for every interview.",
        "kpi": {
          "value": "80%",
          "label": "Less time in hiring"
        },
        "chips": [
          "AI & ML",
          "Solutions Engineering",
          "UX Design"
        ],
        "image": "/images/cases/maslow-hero.webp",
        "alt": "Maslow product screen",
        "objectPosition": "center 60%"
      },
      {
        "slug": "toptec",
        "cat": "field",
        "tag": "Field Services",
        "name": "TopTec",
        "outcome": "Customers, technicians and operations on one platform.",
        "kpi": {
          "value": "80%",
          "label": "Sales from AI voice agent"
        },
        "chips": [
          "AI & ML",
          "Solutions Engineering",
          "System Integration"
        ],
        "image": "/images/cases/toptec-hero.webp",
        "alt": "TopTec product screen",
        "objectPosition": "center 70%"
      }
    ]
  },
  "cta": {
    "kicker": "Let's build what's next",
    "title": "Start with the challenge. Define the right solution.",
    "body": "Whether you are creating a new digital product, integrating AI into existing operations or evolving the systems already supporting your business, we can help define and engineer the right path forward."
  }
};

export const projects: readonly Project[] = portfolio.work.projects;
