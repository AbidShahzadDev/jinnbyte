/** Content for the /solutions route, lifted from the original solutions.html template. */

import type { SolutionCard, ImpactSlide } from "@/data/home";

export type InlineIcon = { viewBox: string; markup: string };

export type Solutions = {
  hero: { title: string; lede: string; image: string; imageAlt: string };
  capabilities: { kicker: string; title: string[]; lede: string; cards: SolutionCard[] };
  whereWeHelp: {
    kicker: string;
    title: string[];
    lede: string;
    cards: { n: string; title: string; blurb: string; accent: string }[];
  };
  industries: {
    kicker: string;
    title: string[];
    lede: string;
    panels: { cat: string; label: string; blurb: string; image: string; icon: InlineIcon; cta: string }[];
  };
  impact: { kicker: string; title: string; lede: string; slides: ImpactSlide[] };
  process: {
    kicker: string;
    title: string;
    lede: string;
    steps: { n: string; title: string; blurb: string; items: string[]; accent: string }[];
  };
  why: { kicker: string; title: string; lede: string; cards: { title: string; blurb: string; icon: InlineIcon }[] };
  tech: {
    kicker: string;
    title: string[];
    paragraphs: string[];
    rows: { category: string; items: { label: string; icon: string }[] }[];
  };
  recognition: { kicker: string; title: string; lede: string; badges: { src: string; alt: string }[] };
  cta: { kicker: string; title: string; body: string };
};

export const solutions: Solutions = {
  "hero": {
    "title": "Solutions Your Business Needs Next",
    "lede": "Every technology challenge starts somewhere different. You may be rebuilding core systems, bringing a product to market, or introducing AI into existing operations. We bring the strategy and engineering needed to turn those priorities into scalable, practical results.",
    "image": "/images/modern-office-at-dusk.jpg",
    "imageAlt": "Modern office at dusk"
  },
  "capabilities": {
    "kicker": "Our solutions",
    "title": [
      "The capabilities behind the solution."
    ],
    "lede": "Every engagement brings together the right combination of strategy, AI, engineering, integration, experience design and infrastructure around one business objective.",
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
  "whereWeHelp": {
    "kicker": "Where we help",
    "cards": [
      {
        "n": "01",
        "title": "Build a New Digital Product",
        "blurb": "Turn an opportunity into a working product through discovery, experience design, engineering, infrastructure and launch.",
        "accent": "#53B2B3"
      },
      {
        "n": "02",
        "title": "Modernize an Existing Platform",
        "blurb": "Improve aging systems, architecture and experiences to create a stronger foundation for continued growth.",
        "accent": "#C39A5A"
      },
      {
        "n": "03",
        "title": "Introduce AI & Automation",
        "blurb": "Identify where intelligence can create meaningful value, then integrate AI and automation into the products and workflows already running the business.",
        "accent": "#CB8878"
      },
      {
        "n": "04",
        "title": "Connect Systems & Operations",
        "blurb": "Bring applications, APIs, data and workflows together so disconnected processes operate as one digital ecosystem.",
        "accent": "#8E88C2"
      }
    ],
    "title": [
      "Different starting points.",
      "One solution-led approach."
    ],
    "lede": "Some clients come to us with something new to build. Others need to improve what already exists, connect fragmented operations or put AI to practical work."
  },
  "industries": {
    "kicker": "Industries",
    "title": [
      "Experience across industries.",
      "Solutions shaped around each one."
    ],
    "lede": "We engineer digital products and platforms across markets where technology is changing how organisations operate, engage customers and deliver value.",
    "panels": [
      {
        "cat": "edu",
        "label": "Ed-Tech",
        "blurb": "Digital learning ecosystems that make education more engaging, accessible and personalised.",
        "image": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=70",
        "icon": {
          "viewBox": "0 0 24 24",
          "markup": "<path d=\"M3 6.2c3-1.3 6-1.3 9 0 3-1.3 6-1.3 9 0v12.6c-3-1.3-6-1.3-9 0-3-1.3-6-1.3-9 0z\"></path><path d=\"M12 6.2v12.6\"></path>"
        },
        "cta": "See related work →"
      },
      {
        "cat": "hr",
        "label": "HR & Recruitment",
        "blurb": "Intelligent hiring solutions that bring greater structure, visibility and confidence to recruitment.",
        "image": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=70",
        "icon": {
          "viewBox": "0 0 24 24",
          "markup": "<circle cx=\"9\" cy=\"8\" r=\"3.1\"></circle><path d=\"M3.6 20a5.4 5.4 0 0 1 10.8 0\"></path><circle cx=\"17\" cy=\"9\" r=\"2.4\"></circle><path d=\"M16.2 20a5 5 0 0 1 4.4-6\"></path>"
        },
        "cta": "See related work →"
      },
      {
        "cat": "fit",
        "label": "Health & Fitness",
        "blurb": "Connected fitness experiences built around training, progress, motivation and long-term engagement.",
        "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=70",
        "icon": {
          "viewBox": "0 0 24 24",
          "markup": "<path d=\"M4 9v6M7 7.5v9M17 7.5v9M20 9v6M7 12h10\"></path>"
        },
        "cta": "See related work →"
      },
      {
        "cat": "field",
        "label": "Field & On-Demand Services",
        "blurb": "Digital ecosystems connecting customers, field teams, operations and service delivery.",
        "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=70",
        "icon": {
          "viewBox": "0 0 24 24",
          "markup": "<path d=\"M4 11l8-6 8 6\"></path><path d=\"M6 10v9h12v-9\"></path><path d=\"M10.5 19v-4h3v4\"></path>"
        },
        "cta": "See related work →"
      },
      {
        "cat": "ecom",
        "label": "E-Commerce & Retail",
        "blurb": "Intelligent platforms that improve how products are structured, discovered, compared and purchased.",
        "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=70",
        "icon": {
          "viewBox": "0 0 24 24",
          "markup": "<circle cx=\"9\" cy=\"20\" r=\"1.4\"></circle><circle cx=\"17.5\" cy=\"20\" r=\"1.4\"></circle><path d=\"M3 4h2.2l2.1 11h10l1.9-8H6.2\"></path>"
        },
        "cta": "See related work →"
      },
      {
        "cat": "wellness",
        "label": "Wellness & Recovery",
        "blurb": "Personalised digital experiences supporting wellbeing, guidance and everyday progress.",
        "image": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=70",
        "icon": {
          "viewBox": "0 0 24 24",
          "markup": "<path d=\"M5 19c0-7.5 5.2-13 15-13 0 9.5-6 14-15 13z\"></path><path d=\"M5 19c4-5.5 8-8.5 12.5-10.5\"></path>"
        },
        "cta": "See related work →"
      },
      {
        "cat": "lifestyle",
        "label": "Consumer Lifestyle",
        "blurb": "Technology-led consumer products combining personalisation, engagement and growth.",
        "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1400&q=70",
        "icon": {
          "viewBox": "0 0 24 24",
          "markup": "<path d=\"M12 3.5l2.1 6.4 6.4 2.1-6.4 2.1L12 20.5l-2.1-6.4L3.5 12l6.4-2.1z\"></path>"
        },
        "cta": "See related work →"
      },
      {
        "cat": "local",
        "label": "Local Discovery",
        "blurb": "Platforms connecting user intent with relevant experiences, venues and services.",
        "image": "https://images.unsplash.com/photo-1733840592793-93fbd895d779?auto=format&fit=crop&w=1400&q=70",
        "icon": {
          "viewBox": "0 0 24 24",
          "markup": "<path d=\"M12 21.5s6.8-6.3 6.8-11a6.8 6.8 0 1 0-13.6 0c0 4.7 6.8 11 6.8 11z\"></path><circle cx=\"12\" cy=\"10.5\" r=\"2.4\"></circle>"
        },
        "cta": "See related work →"
      }
    ]
  },
  "impact": {
    "kicker": "Proven impact",
    "title": "Solutions shaped around real-world challenges.",
    "lede": "Across industries, our work starts with understanding what the business, product and user need to achieve, then engineering the technology around that outcome.",
    "slides": [
      {
        "chip": "Ed-Tech",
        "name": "LingoLane",
        "headline": "Extending foundational learning beyond the classroom.",
        "desc": "A connected foundational learning ecosystem combining gamified learning, teacher support and parent visibility around each child’s individual learning journey.",
        "kpi": "100%",
        "kpiLabel": "Curriculum digitised",
        "href": "/work/lingolane",
        "image": "/images/cases/lingolane-hero.webp",
        "objectPosition": "50% 50%"
      },
      {
        "chip": "HR & Recruitment",
        "name": "Maslow",
        "headline": "Bringing intelligence and structure to every interview.",
        "desc": "Interview intelligence that gives hiring teams the knowledge, structure and confidence to assess candidates across specialist roles.",
        "kpi": "80%",
        "kpiLabel": "Reduction in hiring workflow time",
        "href": "/work/maslow",
        "image": "/images/cases/maslow-hero.webp",
        "objectPosition": "50% 50%"
      },
      {
        "chip": "Health & MedTech",
        "name": "SMF Med",
        "headline": "Turning medical records into connected health intelligence.",
        "desc": "An AI-powered health records platform that turns uploaded medical documents into structured patient history, giving patients and doctors one clear view of the health journey.",
        "kpi": "100%",
        "kpiLabel": "Reports converted into structured records",
        "href": "/work/smfmed",
        "image": "https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?fm=jpg&q=76&w=1600&auto=format&fit=crop",
        "objectPosition": "50% 50%"
      },
      {
        "chip": "Health & Fitness",
        "name": "BUFF",
        "headline": "Turning fitness content into a complete digital ecosystem.",
        "desc": "An end-to-end fitness ecosystem that transforms workout programmes into measurable, motivating and recurring digital experiences.",
        "kpi": "400%",
        "kpiLabel": "Increase in MRR",
        "href": "/work/buff",
        "image": "/images/cases/buff-hero.webp",
        "objectPosition": "50% 50%"
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
        "objectPosition": "50% 50%"
      },
      {
        "chip": "Consumer AI",
        "name": "FaceBloom",
        "headline": "Personalised beauty intelligence with scalable acquisition.",
        "desc": "A personalised AI beauty experience supported by a performance-driven influencer acquisition and growth ecosystem.",
        "kpi": "$1M+",
        "kpiLabel": "Revenue generated",
        "href": "/work/facebloom",
        "image": "/images/cases/facebloom-hero.webp",
        "objectPosition": "50% 50%"
      },
      {
        "chip": "Field & Home Services",
        "name": "TopTec",
        "headline": "Connecting customers, technicians and service operations.",
        "desc": "A connected home-services ecosystem bringing customers, technicians, business operations and autonomous AI into one platform.",
        "kpi": "100%",
        "kpiLabel": "Inbound call coverage",
        "href": "/work/toptec",
        "image": "/images/cases/toptec-hero.webp",
        "objectPosition": "50% 50%"
      }
    ]
  },
  "process": {
    "kicker": "How we work",
    "title": "A collaborative path from opportunity to scale.",
    "lede": "Each stage brings greater clarity to the solution while giving stakeholders visibility into decisions, progress and outcomes.",
    "steps": [
      {
        "n": "01",
        "title": "Discovery",
        "blurb": "Understanding the business objective, users, market context and opportunities that will shape the solution.",
        "items": [
          "Market research",
          "User journeys",
          "Business requirements",
          "Feature prioritisation",
          "Success criteria"
        ],
        "accent": "#53B2B3"
      },
      {
        "n": "02",
        "title": "Planning & Architecture",
        "blurb": "Translating the direction into a practical product and technical roadmap.",
        "items": [
          "Solution scope",
          "Feature sequencing",
          "System architecture",
          "Integration planning",
          "Technology selection"
        ],
        "accent": "#C39A5A"
      },
      {
        "n": "03",
        "title": "Build & Validate",
        "blurb": "Developing iteratively with continuous quality assurance and regular stakeholder collaboration.",
        "items": [
          "Agile development",
          "Continuous QA",
          "Testing",
          "Sprint reviews",
          "Product validation"
        ],
        "accent": "#CB8878"
      },
      {
        "n": "04",
        "title": "Deploy & Scale",
        "blurb": "Moving into production and continuing to improve performance as the product evolves.",
        "items": [
          "Deployment",
          "Monitoring",
          "Analytics",
          "Performance optimisation",
          "Ongoing enhancement"
        ],
        "accent": "#8E88C2"
      }
    ]
  },
  "why": {
    "kicker": "Why JinnByte",
    "title": "One connected team from direction to delivery.",
    "lede": "Product, design, engineering, AI, QA and infrastructure stay aligned around the same business objective throughout the lifecycle of the solution.",
    "cards": [
      {
        "title": "Solution-Led Thinking",
        "blurb": "We understand the wider business and user context before defining how technology should support it.",
        "icon": {
          "viewBox": "0 0 24 24",
          "markup": "<circle cx=\"12\" cy=\"12\" r=\"8.5\"></circle><circle cx=\"12\" cy=\"12\" r=\"3.6\"></circle><circle cx=\"12\" cy=\"12\" r=\"0.6\"></circle>"
        }
      },
      {
        "title": "Applied AI & Automation",
        "blurb": "AI and automation are considered wherever they can meaningfully improve efficiency, intelligence or experience.",
        "icon": {
          "viewBox": "0 0 24 24",
          "markup": "<rect x=\"7\" y=\"7\" width=\"10\" height=\"10\" rx=\"1.6\"></rect><path d=\"M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3\"></path>"
        }
      },
      {
        "title": "End-to-End Capability",
        "blurb": "Strategy, product, UX, engineering, QA and infrastructure work together rather than through disconnected handoffs.",
        "icon": {
          "viewBox": "0 0 24 24",
          "markup": "<circle cx=\"5\" cy=\"12\" r=\"2.2\"></circle><circle cx=\"12\" cy=\"12\" r=\"2.2\"></circle><circle cx=\"19\" cy=\"12\" r=\"2.2\"></circle><path d=\"M7.2 12h2.6M14.2 12h2.6\"></path>"
        }
      },
      {
        "title": "Global Collaboration",
        "blurb": "Teams across multiple markets work through one delivery approach to keep communication, decisions and execution aligned.",
        "icon": {
          "viewBox": "0 0 24 24",
          "markup": "<circle cx=\"12\" cy=\"12\" r=\"8.5\"></circle><path d=\"M3.6 12h16.8\"></path><path d=\"M12 3.5c2.5 2.5 2.5 14.5 0 17M12 3.5c-2.5 2.5-2.5 14.5 0 17\"></path>"
        }
      }
    ]
  },
  "tech": {
    "kicker": "Technology",
    "title": [
      "Technology selected",
      "around the solution."
    ],
    "paragraphs": [
      "Different products require different combinations of intelligence, infrastructure, platforms and engineering approaches.",
      "Our teams work across AI, machine learning, web, mobile, cloud and data technologies, selecting the tools that best support the needs of each solution. This lets us engineer across the complete digital ecosystem while remaining flexible as products, users and requirements evolve."
    ],
    "rows": [
      {
        "category": "AI",
        "items": [
          {
            "label": "MCP",
            "icon": "/images/tech/mcp.png"
          },
          {
            "label": "OpenAI",
            "icon": "/images/tech/openai.png"
          },
          {
            "label": "Gemini",
            "icon": "/images/tech/gemini.png"
          },
          {
            "label": "Claude",
            "icon": "/images/tech/claude.png"
          },
          {
            "label": "RAG",
            "icon": "/images/tech/rag.png"
          },
          {
            "label": "Agentic AI",
            "icon": "/images/tech/agentic-ai.png"
          },
          {
            "label": "LangChain",
            "icon": "/images/tech/langchain.png"
          },
          {
            "label": "LLM",
            "icon": "/images/tech/llm.png"
          }
        ]
      },
      {
        "category": "Machine Learning",
        "items": [
          {
            "label": "Python",
            "icon": "/images/tech/python.png"
          },
          {
            "label": "TensorFlow",
            "icon": "/images/tech/tensorflow.png"
          },
          {
            "label": "PyTorch",
            "icon": "/images/tech/pytorch.png"
          },
          {
            "label": "ML Kit",
            "icon": "/images/tech/ml-kit.png"
          },
          {
            "label": "NLP",
            "icon": "/images/tech/nlp.png"
          },
          {
            "label": "Neural Networks",
            "icon": "/images/tech/neural-networks.png"
          }
        ]
      },
      {
        "category": "Front End",
        "items": [
          {
            "label": "Next.js",
            "icon": "/images/tech/next-js.png"
          },
          {
            "label": "TypeScript",
            "icon": "/images/tech/typescript.png"
          },
          {
            "label": "HTML",
            "icon": "/images/tech/html.png"
          },
          {
            "label": "CSS",
            "icon": "/images/tech/css.png"
          },
          {
            "label": "JavaScript",
            "icon": "/images/tech/javascript.png"
          }
        ]
      },
      {
        "category": "Mobile",
        "items": [
          {
            "label": "Android",
            "icon": "/images/tech/android.png"
          },
          {
            "label": "iOS",
            "icon": "/images/tech/ios.png"
          },
          {
            "label": "Flutter",
            "icon": "/images/tech/flutter.png"
          },
          {
            "label": "React Native",
            "icon": "/images/tech/react-native.png"
          }
        ]
      },
      {
        "category": "Back End",
        "items": [
          {
            "label": "Python",
            "icon": "/images/tech/python.png"
          },
          {
            "label": "Node.js",
            "icon": "/images/tech/node-js.png"
          }
        ]
      },
      {
        "category": "DevOps",
        "items": [
          {
            "label": "AWS",
            "icon": "/images/tech/aws.png"
          },
          {
            "label": "GitHub",
            "icon": "/images/tech/github.png"
          },
          {
            "label": "CI/CD Pipelines",
            "icon": "/images/tech/ci-cd-pipelines.png"
          },
          {
            "label": "Serverless",
            "icon": "/images/tech/serverless.png"
          }
        ]
      },
      {
        "category": "Database",
        "items": [
          {
            "label": "PostgreSQL",
            "icon": "/images/tech/postgresql.png"
          },
          {
            "label": "MongoDB",
            "icon": "/images/tech/mongodb.png"
          },
          {
            "label": "Supabase",
            "icon": "/images/tech/supabase.png"
          },
          {
            "label": "MySQL",
            "icon": "/images/tech/mysql.png"
          }
        ]
      }
    ]
  },
  "recognition": {
    "kicker": "Recognised by",
    "title": "Verified where buyers actually check.",
    "lede": "Independent reviews and public client feedback provide another view of the quality, reliability and relationships behind our work.",
    "badges": [
      {
        "src": "https://jinnbyte.com/wp-content/uploads/2025/02/clutch.svg",
        "alt": "Clutch"
      },
      {
        "src": "https://jinnbyte.com/wp-content/uploads/2025/02/goodfirms-logo-vector__1_-removebg-preview-2.svg",
        "alt": "GoodFirms"
      },
      {
        "src": "https://jinnbyte.com/wp-content/uploads/2025/02/Mask-group-2.svg",
        "alt": "Upwork"
      },
      {
        "src": "https://jinnbyte.com/wp-content/uploads/2025/02/Mask-group-1.svg",
        "alt": "Trustpilot"
      }
    ]
  },
  "cta": {
    "kicker": "Let’s build what’s next",
    "title": "Start with the challenge. Define the right solution.",
    "body": "Whether you are launching a new product, adding AI to existing operations or evolving the systems you already run, we can help define and engineer the path forward."
  }
};
