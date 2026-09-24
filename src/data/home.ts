/**
 * Home-page content, lifted from the original index.html template.
 * Headings that used a deliberate <br> are stored as an array of lines.
 */

export type Stat = { to: number; suffix: string; plus: boolean; label: string };

export type SolutionCard = {
  title: string;
  blurb: string;
  /** Inline SVG taken from the template; rendered inside a sized <svg>. */
  icon: { viewBox: string; strokeWidth: string; markup: string };
};

export type ImpactSlide = {
  chip: string;
  name: string;
  headline: string;
  desc: string;
  kpi: string;
  kpiLabel: string;
  href: string;
  image: string;
  objectPosition: string;
};

export type Quote = {
  stars: number;
  avatar: string;
  quote: string;
  company: string;
  person: string;
  logo: string;
};

export type FormField = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  options: string[];
};

export type Home = {
  hero: { title: string[]; lede: string; image: string; imageAlt: string; ctas: { label: string; href: string }[] };
  solutions: { kicker: string; title: string[]; lede: string; cards: SolutionCard[] };
  glance: {
    kicker: string;
    title: string[];
    lede: string;
    stats: Stat[];
    officesLabel: string;
    offices: { flag: string; city: string; country: string; address: string }[];
  };
  clients: { kicker: string; title: string; lede: string; logos: { src: string; name: string; w: number; h: number }[] };
  impact: { kicker: string; title: string; lede: string; slides: ImpactSlide[] };
  why: { kicker: string; title: string[]; columns: { n: string; title: string; blurb: string }[] };
  testimonials: { kicker: string; title: string[]; quotes: Quote[] };
  certs: { kicker: string; title: string; lede: string; seals: { logo: string; alt: string; blurb: string }[] };
  contact: {
    kicker: string;
    title: string[];
    lede: string;
    image: string;
    steps: { title: string; blurb: string }[];
    form: { title: string; lede: string; fields: FormField[]; submit: string };
  };
};

export const home: Home = {
  "hero": {
    "title": [
      "Engineering Tomorrow’s",
      "AI-Powered Digital Products"
    ],
    "lede": "We design and engineer digital products, platforms and intelligent systems, bringing strategy, software, AI and automation together around the outcomes your business needs.",
    "image": "/images/software-team-working-late-in-a-modern.webp",
    "imageAlt": "Software team working late in a modern city-view office",
    "ctas": [
      {
        "label": "Discuss your challenge",
        "href": "#contact"
      },
      {
        "label": "Explore our work",
        "href": "#portfolio"
      }
    ]
  },
  "solutions": {
    "kicker": "Our solutions",
    "title": [
      "Built around what your",
      "business needs next."
    ],
    "lede": "Every challenge calls for a different combination of strategy, engineering and intelligence. Our capabilities come together around the objective rather than operating in isolation.",
    "cards": [
      {
        "title": "AI Engineering & Machine Learning",
        "blurb": "Embedding AI, machine learning and intelligent automation into products and workflows to improve efficiency, insight and decision-making.",
        "icon": {
          "viewBox": "0 0 56 56",
          "strokeWidth": "1.0",
          "markup": "<ellipse cx=\"28.00\" cy=\"28.00\" rx=\"24.64\" ry=\"9.52\" transform=\"rotate(0 28.00 28.00)\"></ellipse><ellipse cx=\"28.00\" cy=\"28.00\" rx=\"24.64\" ry=\"9.52\" transform=\"rotate(60 28.00 28.00)\"></ellipse><ellipse cx=\"28.00\" cy=\"28.00\" rx=\"24.64\" ry=\"9.52\" transform=\"rotate(120 28.00 28.00)\"></ellipse><circle cx=\"28.00\" cy=\"28.00\" r=\"3.08\"></circle>"
        }
      },
      {
        "title": "Digital Solutions Engineering",
        "blurb": "Engineering scalable web, mobile and digital platforms tailored to evolving business and user needs.",
        "icon": {
          "viewBox": "0 0 56 56",
          "strokeWidth": "1.0",
          "markup": "<path d=\"M28.00 6.72 L46.43 17.36 L46.43 38.64 L28.00 49.28 L9.57 38.64 L9.57 17.36 Z\"></path><path d=\"M28.00 28.00 L28.00 6.72\"></path><path d=\"M28.00 28.00 L9.57 38.64\"></path><path d=\"M28.00 28.00 L46.43 38.64\"></path><line x1=\"21.86\" y1=\"10.27\" x2=\"40.29\" y2=\"20.91\"></line><line x1=\"34.14\" y1=\"10.27\" x2=\"15.71\" y2=\"20.91\"></line><line x1=\"15.71\" y1=\"13.81\" x2=\"34.14\" y2=\"24.45\"></line><line x1=\"40.29\" y1=\"13.81\" x2=\"21.86\" y2=\"24.45\"></line>"
        }
      },
      {
        "title": "System Integration",
        "blurb": "Connecting applications, APIs and business systems to create seamless workflows and consistent movement of data.",
        "icon": {
          "viewBox": "0 0 56 56",
          "strokeWidth": "0.9",
          "markup": "<circle cx=\"28.00\" cy=\"28.00\" r=\"4.76\"></circle><line x1=\"28.00\" y1=\"23.24\" x2=\"28.00\" y2=\"7.84\" stroke-opacity=\"0.55\"></line><circle cx=\"28.00\" cy=\"7.84\" r=\"3.08\"></circle><line x1=\"32.12\" y1=\"25.62\" x2=\"45.46\" y2=\"17.92\" stroke-opacity=\"0.55\"></line><circle cx=\"45.46\" cy=\"17.92\" r=\"3.08\"></circle><line x1=\"32.12\" y1=\"30.38\" x2=\"45.46\" y2=\"38.08\" stroke-opacity=\"0.55\"></line><circle cx=\"45.46\" cy=\"38.08\" r=\"3.08\"></circle><line x1=\"28.00\" y1=\"32.76\" x2=\"28.00\" y2=\"48.16\" stroke-opacity=\"0.55\"></line><circle cx=\"28.00\" cy=\"48.16\" r=\"3.08\"></circle><line x1=\"23.88\" y1=\"30.38\" x2=\"10.54\" y2=\"38.08\" stroke-opacity=\"0.55\"></line><circle cx=\"10.54\" cy=\"38.08\" r=\"3.08\"></circle><line x1=\"23.88\" y1=\"25.62\" x2=\"10.54\" y2=\"17.92\" stroke-opacity=\"0.55\"></line><circle cx=\"10.54\" cy=\"17.92\" r=\"3.08\"></circle><circle cx=\"28.00\" cy=\"28.00\" r=\"23.52\" stroke-opacity=\"0.28\"></circle>"
        }
      },
      {
        "title": "User Experience Design",
        "blurb": "Creating intuitive, user-focused digital experiences that simplify complex journeys and encourage meaningful engagement.",
        "icon": {
          "viewBox": "0 0 56 56",
          "strokeWidth": "0.9",
          "markup": "<circle cx=\"28.00\" cy=\"28.00\" r=\"23.52\"></circle><ellipse cx=\"28.00\" cy=\"28.00\" rx=\"7.53\" ry=\"23.52\"></ellipse><ellipse cx=\"28.00\" cy=\"28.00\" rx=\"15.52\" ry=\"23.52\"></ellipse><line x1=\"28.00\" y1=\"4.48\" x2=\"28.00\" y2=\"51.52\"></line><ellipse cx=\"28.00\" cy=\"13.42\" rx=\"18.45\" ry=\"4.06\"></ellipse><ellipse cx=\"28.00\" cy=\"22.36\" rx=\"22.83\" ry=\"5.02\"></ellipse><ellipse cx=\"28.00\" cy=\"33.64\" rx=\"22.83\" ry=\"5.02\"></ellipse><ellipse cx=\"28.00\" cy=\"42.58\" rx=\"18.45\" ry=\"4.06\"></ellipse>"
        }
      },
      {
        "title": "Cloud & Infrastructure",
        "blurb": "Building secure, scalable cloud environments that support reliability, performance and continued growth.",
        "icon": {
          "viewBox": "0 0 56 56",
          "strokeWidth": "0.9",
          "markup": "<circle cx=\"28.00\" cy=\"28.00\" r=\"23.52\"></circle><ellipse cx=\"28.00\" cy=\"28.00\" rx=\"22.84\" ry=\"23.52\"></ellipse><ellipse cx=\"28.00\" cy=\"28.00\" rx=\"20.83\" ry=\"23.52\"></ellipse><ellipse cx=\"28.00\" cy=\"28.00\" rx=\"17.60\" ry=\"23.52\"></ellipse><ellipse cx=\"28.00\" cy=\"28.00\" rx=\"13.36\" ry=\"23.52\"></ellipse><ellipse cx=\"28.00\" cy=\"28.00\" rx=\"8.34\" ry=\"23.52\"></ellipse><ellipse cx=\"28.00\" cy=\"28.00\" rx=\"2.84\" ry=\"23.52\"></ellipse><ellipse cx=\"28.00\" cy=\"28.00\" rx=\"2.84\" ry=\"23.52\"></ellipse><ellipse cx=\"28.00\" cy=\"28.00\" rx=\"8.34\" ry=\"23.52\"></ellipse><ellipse cx=\"28.00\" cy=\"28.00\" rx=\"13.36\" ry=\"23.52\"></ellipse><ellipse cx=\"28.00\" cy=\"28.00\" rx=\"17.60\" ry=\"23.52\"></ellipse><ellipse cx=\"28.00\" cy=\"28.00\" rx=\"20.83\" ry=\"23.52\"></ellipse><ellipse cx=\"28.00\" cy=\"28.00\" rx=\"22.84\" ry=\"23.52\"></ellipse>"
        }
      },
      {
        "title": "Discovery Workshops",
        "blurb": "Bringing business, product and technology perspectives together to clarify opportunities, validate direction and define the right solution before development begins.",
        "icon": {
          "viewBox": "0 0 56 56",
          "strokeWidth": "0.9",
          "markup": "<circle cx=\"28.00\" cy=\"28.00\" r=\"23.52\"></circle><circle cx=\"28.00\" cy=\"28.00\" r=\"14.56\" stroke-opacity=\"0.7\"></circle><circle cx=\"28.00\" cy=\"28.00\" r=\"5.60\"></circle><line x1=\"42.56\" y1=\"28.00\" x2=\"51.52\" y2=\"28.00\" stroke-opacity=\"0.6\"></line><line x1=\"35.28\" y1=\"40.61\" x2=\"39.76\" y2=\"48.37\" stroke-opacity=\"0.6\"></line><line x1=\"20.72\" y1=\"40.61\" x2=\"16.24\" y2=\"48.37\" stroke-opacity=\"0.6\"></line><line x1=\"13.44\" y1=\"28.00\" x2=\"4.48\" y2=\"28.00\" stroke-opacity=\"0.6\"></line><line x1=\"20.72\" y1=\"15.39\" x2=\"16.24\" y2=\"7.63\" stroke-opacity=\"0.6\"></line><line x1=\"35.28\" y1=\"15.39\" x2=\"39.76\" y2=\"7.63\" stroke-opacity=\"0.6\"></line>"
        }
      }
    ]
  },
  "glance": {
    "kicker": "JinnByte at a glance",
    "title": [
      "Built across products,",
      "industries and markets."
    ],
    "lede": "From emerging ventures to established organisations, our teams work across markets and disciplines to take digital products from direction through production and scale.",
    "stats": [
      {
        "to": 200,
        "suffix": "",
        "plus": true,
        "label": "Clients served globally"
      },
      {
        "to": 300,
        "suffix": "",
        "plus": true,
        "label": "Projects delivered across industries"
      },
      {
        "to": 40,
        "suffix": "%",
        "plus": false,
        "label": "Up to 40% reduction in churn through deeper engagement"
      },
      {
        "to": 70,
        "suffix": "%",
        "plus": false,
        "label": "Up to 70% reduction in dev cost through AI-native development"
      }
    ],
    "officesLabel": "Global offices",
    "offices": [
      {
        "flag": "/images/flags/usa.webp",
        "city": "California",
        "country": "United States",
        "address": "839 N Cedar, Ave B-4 #5027"
      },
      {
        "flag": "/images/flags/canada.webp",
        "city": "Toronto",
        "country": "Canada",
        "address": "235 Dixon Rd, Unit 106"
      },
      {
        "flag": "/images/flags/pakistan.webp",
        "city": "Lahore",
        "country": "Pakistan",
        "address": "227-CCA FF Block, DHA Phase IV"
      }
    ]
  },
  "clients": {
    "kicker": "Trusted by",
    "title": "The companies we build for.",
    "lede": "Our clients focus on moving the business forward, without being held back by their technology stack.",
    "logos": [
      {
        "src": "/images/systems-limited.png",
        "name": "Systems Limited",
        "w": 112.8,
        "h": 39.9
      },
      {
        "src": "/images/visionet.png",
        "name": "Visionet",
        "w": 148,
        "h": 19.5
      },
      {
        "src": "/images/integry.png",
        "name": "Integry",
        "w": 134,
        "h": 33.6
      },
      {
        "src": "/images/we-skoolhouse.png",
        "name": "We Skoolhouse",
        "w": 64,
        "h": 64
      },
      {
        "src": "/images/reteta.png",
        "name": "Reteta",
        "w": 129.2,
        "h": 34.8
      },
      {
        "src": "/images/partnerlinq.png",
        "name": "PartnerLinQ",
        "w": 148,
        "h": 27
      },
      {
        "src": "/images/british-american-tobacco.png",
        "name": "British American Tobacco",
        "w": 88.7,
        "h": 50.7
      },
      {
        "src": "/images/total-parco.png",
        "name": "Total Parco",
        "w": 132.6,
        "h": 33.9
      },
      {
        "src": "/images/lucky-core-industries.png",
        "name": "Lucky Core Industries",
        "w": 92.9,
        "h": 48.4
      },
      {
        "src": "/images/pantera-energy.png",
        "name": "Pantera Energy",
        "w": 117.1,
        "h": 38.4
      },
      {
        "src": "/images/canopy.png",
        "name": "Canopy",
        "w": 118.7,
        "h": 37.9
      },
      {
        "src": "/images/truckoom.png",
        "name": "Truckoom",
        "w": 146,
        "h": 30.8
      },
      {
        "src": "/images/errands.png",
        "name": "Errands",
        "w": 137.8,
        "h": 32.7
      },
      {
        "src": "/images/nourri.png",
        "name": "Nourri",
        "w": 122.4,
        "h": 36.8
      },
      {
        "src": "/images/bss.png",
        "name": "BSS",
        "w": 66.3,
        "h": 64
      },
      {
        "src": "/images/fidak-farms.png",
        "name": "Fidak Farms",
        "w": 72.3,
        "h": 62.3
      },
      {
        "src": "/images/anzen.png",
        "name": "Anzen",
        "w": 63.5,
        "h": 64
      },
      {
        "src": "/images/unboxed.png",
        "name": "Unboxed",
        "w": 64,
        "h": 64
      },
      {
        "src": "/images/slide.png",
        "name": "Slide",
        "w": 46.2,
        "h": 74.9
      },
      {
        "src": "/images/face.png",
        "name": "FACE",
        "w": 114.8,
        "h": 39.2
      },
      {
        "src": "/images/sparrow.png",
        "name": "Sparrow",
        "w": 125.8,
        "h": 35.8
      },
      {
        "src": "/images/buff.png",
        "name": "BUFF",
        "w": 71.2,
        "h": 63.2
      },
      {
        "src": "/images/prickly-bear.png",
        "name": "Prickly Bear",
        "w": 69.6,
        "h": 64
      },
      {
        "src": "/images/calling-all-kids.png",
        "name": "Calling All Kids",
        "w": 64,
        "h": 64
      }
    ]
  },
  "impact": {
    "kicker": "Proven impact",
    "title": "Solutions shaped around real-world challenges.",
    "lede": "We measure the work by what changes after the technology goes live, for the business, its users and the teams operating it.",
    "slides": [
      {
        "chip": "Ed-Tech",
        "name": "LingoLane",
        "headline": "Digitising 100% of the curriculum to extend learning beyond the classroom.",
        "desc": "A connected foundational learning ecosystem combining gamified learning, teacher support and parent visibility around each child’s individual learning journey.",
        "kpi": "100%",
        "kpiLabel": "Curriculum digitised",
        "href": "/work/lingolane",
        "image": "/images/cases/lingolane-hero.webp",
        "objectPosition": "50% 62%"
      },
      {
        "chip": "HR & Recruitment",
        "name": "Maslow",
        "headline": "Bringing intelligence and structure to specialist interviews.",
        "desc": "Interview intelligence that gives hiring teams the knowledge, structure and confidence to assess candidates across specialist roles.",
        "kpi": "80%",
        "kpiLabel": "Reduction in hiring workflow time",
        "href": "/work/maslow",
        "image": "/images/cases/maslow-hero.webp",
        "objectPosition": "50% 40%"
      },
      {
        "chip": "Health & Fitness",
        "name": "BUFF",
        "headline": "Turning fitness content into a complete recurring digital ecosystem.",
        "desc": "An end-to-end fitness ecosystem that transforms workout programmes into measurable, motivating and recurring digital experiences.",
        "kpi": "400%",
        "kpiLabel": "Increase in MRR",
        "href": "/work/buff",
        "image": "/images/cases/buff-hero.webp",
        "objectPosition": "55% 72%"
      },
      {
        "chip": "Relationship & Wellness",
        "name": "Openline",
        "headline": "Making relationship support more accessible and personal.",
        "desc": "An AI companion for the personal and relationship conversations people may not always have somewhere else to take.",
        "kpi": "80%",
        "kpiLabel": "Of conflicts resolved within Openline",
        "href": "/work/openline",
        "image": "/images/cases/openline-hero.webp",
        "objectPosition": "50% 54%"
      },
      {
        "chip": "Consumer AI",
        "name": "FaceBloom",
        "headline": "Combining personalized beauty intelligence with scalable user acquisition.",
        "desc": "A personalised AI beauty experience supported by a performance-driven influencer acquisition and growth ecosystem.",
        "kpi": "$1M+",
        "kpiLabel": "Revenue generated",
        "href": "/work/facebloom",
        "image": "/images/cases/facebloom-hero.webp",
        "objectPosition": "45% 50%"
      },
      {
        "chip": "Field & Home Services",
        "name": "TopTec",
        "headline": "Connecting customers, technicians and service operations through one intelligent platform.",
        "desc": "A connected home-services ecosystem bringing customers, technicians, business operations and autonomous AI into one platform.",
        "kpi": "100%",
        "kpiLabel": "Inbound call coverage",
        "href": "/work/toptec",
        "image": "/images/cases/toptec-hero.webp",
        "objectPosition": "50% 42%"
      }
    ]
  },
  "why": {
    "kicker": "Why JinnByte",
    "title": [
      "One connected team.",
      "One business objective."
    ],
    "columns": [
      {
        "n": "01",
        "title": "Solution-led thinking",
        "blurb": "Business and user context shape the solution before technology choices are made."
      },
      {
        "n": "02",
        "title": "Applied intelligence",
        "blurb": "AI and automation are considered wherever they can create meaningful value."
      },
      {
        "n": "03",
        "title": "End-to-end capability",
        "blurb": "Strategy, product, UX, engineering, QA and infrastructure work together from direction to delivery."
      },
      {
        "n": "04",
        "title": "Partners for the long term",
        "blurb": "We stay involved beyond launch and treat each engagement as a lasting relationship, not a one-off project."
      }
    ]
  },
  "testimonials": {
    "kicker": "Client voice",
    "title": [
      "What our clients say",
      "about working with us."
    ],
    "quotes": [
      {
        "stars": 5,
        "avatar": "/images/hudson-white.webp",
        "quote": "Jinnbyte helped turn our long-standing product vision into a reliable, scalable fitness platform. Their collaborative approach, clear communication and commitment to delivery gave us the confidence to move forward after previous development attempts had fallen short.",
        "company": "BUFF App",
        "person": "Hudson White, Founder",
        "logo": "https://jinnbyte.com/wp-content/uploads/2025/10/Group-1000012554.png"
      },
      {
        "stars": 5,
        "avatar": "/images/elenn-kapandais.webp",
        "quote": "Jinnbyte delivered a reliable and responsive platform with strong performance and minimal downtime. Their professionalism, responsiveness and consistent focus on quality have made a meaningful difference to the overall delivery experience.",
        "company": "Weskool",
        "person": "Elenn Kapandais, Director of Operations",
        "logo": "/images/we-skoolhouse.png"
      },
      {
        "stars": 5,
        "avatar": "/images/maitham-mohamed.webp",
        "quote": "Jinnbyte has successfully delivered a fully functioning game. The team creates a smooth workflow through a reliable project manager, who makes sure both sides are always in touch. If we want to develop any game again, Jinnbyte will always be our first choice.",
        "company": "Plodding Isles",
        "person": "Maitham Mohamed, CEO",
        "logo": "https://jinnbyte.com/wp-content/uploads/2023/09/Group-1000007510.png"
      },
      {
        "stars": 5,
        "avatar": "/images/assi-gol.webp",
        "quote": "Jinnbyte consistently delivered high-quality work while maintaining clear timelines and strong communication throughout the project. Their responsiveness, attention to detail and commitment to outcomes made them a dependable technology partner.",
        "company": "Prickly Bear",
        "person": "Assi Gol, Founder",
        "logo": "/images/prickly-bear.png"
      }
    ]
  },
  "certs": {
    "kicker": "Recognised by",
    "title": "Verified where buyers actually check.",
    "lede": "Independent reviews and public client feedback provide another view of the quality, reliability and relationships behind our work.",
    "seals": [
      {
        "logo": "https://jinnbyte.com/wp-content/uploads/2025/02/clutch.svg",
        "alt": "Clutch",
        "blurb": "Client-verified project reviews, published in full"
      },
      {
        "logo": "https://jinnbyte.com/wp-content/uploads/2025/02/Mask-group-2.svg",
        "alt": "Upwork",
        "blurb": "Repeat clients and long-term contracts"
      },
      {
        "logo": "https://jinnbyte.com/wp-content/uploads/2025/02/Mask-group-1.svg",
        "alt": "Trustpilot",
        "blurb": "Independent reviews, open and verified"
      },
      {
        "logo": "https://jinnbyte.com/wp-content/uploads/2025/02/goodfirms-logo-vector__1_-removebg-preview-2.svg",
        "alt": "GoodFirms",
        "blurb": "Listed among leading development companies"
      }
    ]
  },
  "contact": {
    "kicker": "Start a conversation",
    "title": [
      "Have a business challenge",
      "worth solving?"
    ],
    "lede": "Tell us what you’re trying to build, improve or automate. We’ll help define the right solution and the practical path to get it into production.",
    "image": "/images/goodfirms.jpg",
    "steps": [
      {
        "title": "Discovery call",
        "blurb": "We understand the objective, users, current environment and what needs to change."
      },
      {
        "title": "Solution direction",
        "blurb": "We define the recommended approach, scope, architecture and delivery path."
      },
      {
        "title": "Proposal & kickoff",
        "blurb": "We align the team, timeline and commercial structure, then move into delivery."
      }
    ],
    "form": {
      "title": "Tell us what you’re working on.",
      "lede": "Share as much or as little context as you have. We’ll come back with the right questions and a clear next step.",
      "fields": [
        {
          "name": "name",
          "label": "Name",
          "type": "text",
          "placeholder": "Your name",
          "required": true,
          "options": []
        },
        {
          "name": "email",
          "label": "Email address",
          "type": "email",
          "placeholder": "you@company.com",
          "required": true,
          "options": []
        },
        {
          "name": "company",
          "label": "Company name",
          "type": "text",
          "placeholder": "Company",
          "required": false,
          "options": []
        },
        {
          "name": "phone",
          "label": "Phone",
          "type": "tel",
          "placeholder": "+1 (555) 000-0000",
          "required": false,
          "options": []
        },
        {
          "name": "interest",
          "label": "Interested in",
          "type": "select",
          "placeholder": "",
          "required": true,
          "options": [
            "Please select",
            "AI Engineering & Machine Learning",
            "Digital Solutions Engineering",
            "System Integration",
            "User Experience Design",
            "Cloud & Infrastructure",
            "Discovery Workshops",
            "Not sure yet"
          ]
        },
        {
          "name": "message",
          "label": "Message",
          "type": "textarea",
          "placeholder": "What are you building, and what is blocking it?",
          "required": true,
          "options": []
        }
      ],
      "submit": "Send enquiry"
    }
  }
};
