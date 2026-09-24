/** Content for the /about route, lifted from the original company-about.html template. */

export type InlineIcon = { viewBox: string; markup: string };

export type TeamMember = { name: string; role: string; photo: string; linkedin: string };

export type About = {
  hero: {
    kicker: string;
    title: string[];
    lede: string;
    image: string;
    imageAlt: string;
    stats: { value: string; to: number; suffix: string; plus: boolean; label: string }[];
  };
  value: { kicker: string; title: string; lede: string; cells: { title: string; blurb: string; icon: InlineIcon }[] };
  think: { kicker: string; title: string[]; lede: string; columns: { title: string; blurb: string }[] };
  believe: { kicker: string; title: string[]; paragraphs: string[] };
  story: {
    kicker: string;
    title: string[];
    paragraphs: string[];
    locations: { flag: string; city: string; country: string; address: string }[];
  };
  team: { kicker: string; title: string; lede: string; members: TeamMember[] };
  culture: { kicker: string; title: string[]; paragraphs: string[]; gallery: { src: string; alt: string }[] };
  impact: { kicker: string; title: string[]; paragraphs: string[]; image: string; imageAlt: string };
  cta: { kicker: string; title: string; body: string };
};

export const about: About = {
  "hero": {
    "kicker": "About JinnByte",
    "title": [
      "A solution partner,",
      "not just a software house."
    ],
    "lede": "We bring strategy, product thinking, engineering and AI together to solve meaningful business challenges and create digital solutions built for long-term value.",
    "image": "/images/the-jinnbyte-office.jpg",
    "imageAlt": "The JinnByte office",
    "stats": [
      {
        "value": "2018",
        "to": 0,
        "suffix": "",
        "plus": false,
        "label": "Founded"
      },
      {
        "value": "",
        "to": 200,
        "suffix": "",
        "plus": true,
        "label": "Clients"
      },
      {
        "value": "",
        "to": 300,
        "suffix": "",
        "plus": true,
        "label": "Projects"
      },
      {
        "value": "",
        "to": 5,
        "suffix": "M",
        "plus": true,
        "label": "Users across our products"
      }
    ]
  },
  "value": {
    "kicker": "Where we create value",
    "title": "What the right technology should change.",
    "lede": "Every engagement starts with a business objective. We combine product thinking, engineering and AI to improve how products perform, how teams operate and how businesses scale.",
    "cells": [
      {
        "title": "Operational Efficiency",
        "blurb": "Connect systems, automate repetitive workflows and remove the manual work that slows teams down.",
        "icon": {
          "viewBox": "0 0 40 40",
          "markup": "<circle cx=\"20.00\" cy=\"20.00\" r=\"16.80\"></circle><ellipse cx=\"20.00\" cy=\"20.00\" rx=\"5.38\" ry=\"16.80\"></ellipse><ellipse cx=\"20.00\" cy=\"20.00\" rx=\"11.09\" ry=\"16.80\"></ellipse><line x1=\"20.00\" y1=\"3.20\" x2=\"20.00\" y2=\"36.80\"></line><ellipse cx=\"20.00\" cy=\"9.58\" rx=\"13.18\" ry=\"2.90\"></ellipse><ellipse cx=\"20.00\" cy=\"15.97\" rx=\"16.31\" ry=\"3.59\"></ellipse><ellipse cx=\"20.00\" cy=\"24.03\" rx=\"16.31\" ry=\"3.59\"></ellipse><ellipse cx=\"20.00\" cy=\"30.42\" rx=\"13.18\" ry=\"2.90\"></ellipse>"
        }
      },
      {
        "title": "Faster Time to Market",
        "blurb": "Move from opportunity to production with clearer decisions, fewer handoffs and a delivery path built around what matters first.",
        "icon": {
          "viewBox": "0 0 40 40",
          "markup": "<circle cx=\"13.80\" cy=\"17.00\" r=\"8.00\" stroke-opacity=\"1.0\"></circle><circle cx=\"26.20\" cy=\"17.00\" r=\"8.00\" stroke-opacity=\"1.0\"></circle><circle cx=\"20.00\" cy=\"26.20\" r=\"8.00\" stroke-opacity=\"1.0\"></circle><circle cx=\"20.00\" cy=\"20.20\" r=\"16.00\" stroke-opacity=\"0.25\"></circle>"
        }
      },
      {
        "title": "Scalable Digital Products",
        "blurb": "Build platforms designed to perform as users, data, functionality and business complexity grow.",
        "icon": {
          "viewBox": "0 0 40 40",
          "markup": "<polyline points=\"32.00 6.40 31.96 6.75 31.86 7.09 31.68 7.43 31.43 7.77 31.11 8.10 30.73 8.42 30.28 8.74 29.78 9.05 29.21 9.34 28.59 9.63 27.91 9.90 27.19 10.15 26.43 10.39 25.63 10.62 24.79 10.83 23.93 11.02 23.04 11.20 22.13 11.35 21.22 11.49 20.29 11.61 19.36 11.71 18.44 11.80 17.52 11.86 16.62 11.90 15.74 11.93 14.89 11.94 14.07 11.94 13.28 11.91 12.53 11.88 11.83 11.82 11.17 11.76 10.57 11.68 10.03 11.59 9.54 11.49 9.12 11.38 8.76 11.26 8.47 11.13 8.25 11.00 8.09 10.87 8.01 10.74 8.01 10.60 8.07 10.46 8.20 10.33 8.41 10.20 8.68 10.07 9.02 9.95 9.43 9.84 9.90 9.74 10.43 9.64 11.02 9.56 11.66 9.49 12.35 9.44 13.09 9.39 13.87 9.37 14.68 9.36 15.53 9.36 16.40 9.39 17.30 9.43 18.21 9.49 19.13 9.57 20.06 9.66 20.98 9.78 21.91 9.91 22.82 10.06 23.71 10.23 24.58 10.42 25.42 10.63 26.23 10.85 27.01 11.09 27.74 11.34 28.42 11.61 29.06 11.89 29.64 12.18 30.16 12.48 30.63 12.80 31.02 13.12 31.36 13.45 31.62 13.78 31.82 14.12 31.94 14.47 32.00 14.81 31.98 15.16 31.89 15.50 31.73 15.85 31.50 16.18 31.20 16.52 30.83 16.84 30.40 17.16 29.91 17.47 29.36 17.77 28.75 18.06 28.09 18.33 27.38 18.59 26.62 18.84 25.83 19.07 25.00 19.28 24.15 19.48 23.26 19.65 22.36 19.82 21.45 19.96 20.52 20.08 19.59 20.19 18.67 20.28 17.75 20.34 16.85 20.40 15.96 20.43 15.10 20.44 14.27 20.44 13.47 20.42 12.71 20.39 12.00 20.34 11.33 20.27 10.72 20.20 10.16 20.11 9.66 20.01 9.22 19.90 8.84 19.79 8.53 19.67 8.30 19.54 8.13 19.40 8.03 19.27 8.00 19.13 8.05 19.00 8.16 18.86 8.35 18.73 8.61 18.60 8.93 18.48 9.32 18.37 9.78 18.26 10.29 18.17 10.87 18.08 11.49 18.01 12.17 17.95 12.90 17.90 13.67 17.87 14.47 17.86 15.31 17.86 16.18 17.88 17.07 17.92 17.98 17.97 18.90 18.04 19.83 18.14 20.75 18.25 21.68 18.38 22.59 18.52 23.49 18.69 24.36 18.87 25.21 19.07 26.03 19.29 26.82 19.52 27.56 19.77 28.26 20.04 28.90 20.31 29.50 20.60 30.04 20.91 30.52 21.22 30.93 21.54 31.28 21.87 31.56 22.20 31.78 22.54 31.92 22.88 31.99 23.23 31.99 23.57 31.92 23.92 31.78 24.26 31.56 24.60 31.28 24.93 30.93 25.26 30.52 25.58 30.04 25.89 29.50 26.20 28.90 26.49 28.26 26.76 27.56 27.03 26.82 27.28 26.03 27.51 25.21 27.73 24.36 27.93 23.49 28.11 22.59 28.28 21.68 28.42 20.75 28.55 19.83 28.66 18.90 28.76 17.98 28.83 17.07 28.88 16.18 28.92 15.31 28.94 14.47 28.94 13.67 28.93 12.90 28.90 12.17 28.85 11.49 28.79 10.87 28.72 10.29 28.63 9.78 28.54 9.32 28.43 8.93 28.32 8.61 28.20 8.35 28.07 8.16 27.94 8.05 27.80 8.00 27.67 8.03 27.53 8.13 27.40 8.30 27.26 8.53 27.13 8.84 27.01 9.22 26.90 9.66 26.79 10.16 26.69 10.72 26.60 11.33 26.53 12.00 26.46 12.71 26.41 13.47 26.38 14.27 26.36 15.10 26.36 15.96 26.37 16.85 26.40 17.75 26.46 18.67 26.52 19.59 26.61 20.52 26.72 21.45 26.84 22.36 26.98 23.26 27.15 24.15 27.32 25.00 27.52 25.83 27.73 26.62 27.96 27.38 28.21 28.09 28.47 28.75 28.74 29.36 29.03 29.91 29.33 30.40 29.64 30.83 29.96 31.20 30.28 31.50 30.62 31.73 30.95 31.89 31.30 31.98 31.64 32.00 31.99 31.94 32.33 31.82 32.68 31.62 33.02 31.36 33.35 31.02 33.68 30.63 34.00 30.16 34.32 29.64 34.62 29.06 34.91 28.42 35.19 27.74 35.46 27.01 35.71 26.23 35.95 25.42 36.17 24.58 36.38 23.71 36.57\" stroke-linejoin=\"round\"></polyline>"
        }
      },
      {
        "title": "Smarter Decision-Making",
        "blurb": "Put AI, automation and your own data to work to surface better insights and support better decisions.",
        "icon": {
          "viewBox": "0 0 40 40",
          "markup": "<polyline points=\"4.00 9.60 4.53 9.88 5.07 10.14 5.60 10.39 6.13 10.62 6.67 10.83 7.20 10.99 7.73 11.12 8.27 11.21 8.80 11.25 9.33 11.24 9.87 11.19 10.40 11.09 10.93 10.95 11.47 10.78 12.00 10.57 12.53 10.33 13.07 10.08 13.60 9.81 14.13 9.53 14.67 9.26 15.20 8.99 15.73 8.75 16.27 8.52 16.80 8.33 17.33 8.17 17.87 8.05 18.40 7.98 18.93 7.95 19.47 7.97 20.00 8.03 20.53 8.14 21.07 8.29 21.60 8.47 22.13 8.69 22.67 8.93 23.20 9.19 23.73 9.46 24.27 9.74 24.80 10.01 25.33 10.27 25.87 10.51 26.40 10.73 26.93 10.91 27.47 11.06 28.00 11.17 28.53 11.23 29.07 11.25 29.60 11.22 30.13 11.15 30.67 11.03 31.20 10.87 31.73 10.68 32.27 10.45 32.80 10.21 33.33 9.94 33.87 9.67 34.40 9.39 34.93 9.12 35.47 8.87 36.00 8.63\" stroke-opacity=\"0.60\"></polyline><polyline points=\"4.00 13.88 4.53 14.20 5.07 14.48 5.60 14.72 6.13 14.91 6.67 15.05 7.20 15.14 7.73 15.17 8.27 15.14 8.80 15.05 9.33 14.90 9.87 14.71 10.40 14.47 10.93 14.19 11.47 13.88 12.00 13.54 12.53 13.19 13.07 12.84 13.60 12.50 14.13 12.17 14.67 11.86 15.20 11.59 15.73 11.37 16.27 11.18 16.80 11.06 17.33 10.98 17.87 10.97 18.40 11.01 18.93 11.12 19.47 11.27 20.00 11.48 20.53 11.73 21.07 12.02 21.60 12.34 22.13 12.68 22.67 13.03 23.20 13.38 23.73 13.72 24.27 14.04 24.80 14.34 25.33 14.60 25.87 14.82 26.40 14.99 26.93 15.10 27.47 15.16 28.00 15.16 28.53 15.10 29.07 14.98 29.60 14.81 30.13 14.59 30.67 14.33 31.20 14.04 31.73 13.71 32.27 13.37 32.80 13.02 33.33 12.67 33.87 12.33 34.40 12.01 34.93 11.72 35.47 11.47 36.00 11.27\" stroke-opacity=\"0.73\"></polyline><polyline points=\"4.00 18.36 4.53 18.63 5.07 18.85 5.60 18.99 6.13 19.07 6.67 19.08 7.20 19.01 7.73 18.88 8.27 18.68 8.80 18.42 9.33 18.11 9.87 17.75 10.40 17.36 10.93 16.95 11.47 16.52 12.00 16.10 12.53 15.68 13.07 15.30 13.60 14.94 14.13 14.63 14.67 14.37 15.20 14.18 15.73 14.05 16.27 13.99 16.80 14.00 17.33 14.08 17.87 14.23 18.40 14.45 18.93 14.72 19.47 15.04 20.00 15.41 20.53 15.81 21.07 16.22 21.60 16.65 22.13 17.07 22.67 17.48 23.20 17.86 23.73 18.21 24.27 18.50 24.80 18.75 25.33 18.93 25.87 19.04 26.40 19.08 26.93 19.05 27.47 18.96 28.00 18.79 28.53 18.56 29.07 18.27 29.60 17.94 30.13 17.56 30.67 17.16 31.20 16.74 31.73 16.31 32.27 15.89 32.80 15.49 33.33 15.11 33.87 14.78 34.40 14.50 34.93 14.27 35.47 14.10 36.00 14.01\" stroke-opacity=\"0.87\"></polyline><polyline points=\"4.00 22.80 4.53 22.94 5.07 23.00 5.60 22.97 6.13 22.87 6.67 22.68 7.20 22.42 7.73 22.09 8.27 21.70 8.80 21.26 9.33 20.79 9.87 20.30 10.40 19.79 10.93 19.30 11.47 18.82 12.00 18.38 12.53 17.98 13.07 17.64 13.60 17.36 14.13 17.16 14.67 17.04 15.20 17.00 15.73 17.05 16.27 17.17 16.80 17.38 17.33 17.66 17.87 18.01 18.40 18.41 18.93 18.85 19.47 19.33 20.00 19.83 20.53 20.33 21.07 20.82 21.60 21.29 22.13 21.73 22.67 22.11 23.20 22.44 23.73 22.70 24.27 22.88 24.80 22.98 25.33 23.00 25.87 22.93 26.40 22.78 26.93 22.56 27.47 22.26 28.00 21.90 28.53 21.48 29.07 21.03 29.60 20.54 30.13 20.04 30.67 19.54 31.20 19.06 31.73 18.59 32.27 18.17 32.80 17.80 33.33 17.49 33.87 17.25 34.40 17.09 34.93 17.01 35.47 17.01 36.00 17.10\" stroke-opacity=\"1.00\"></polyline><polyline points=\"4.00 26.02 4.53 25.97 5.07 25.85 5.60 25.66 6.13 25.42 6.67 25.12 7.20 24.77 7.73 24.39 8.27 23.98 8.80 23.55 9.33 23.13 9.87 22.71 10.40 22.31 10.93 21.95 11.47 21.63 12.00 21.36 12.53 21.15 13.07 21.01 13.60 20.93 14.13 20.92 14.67 20.99 15.20 21.12 15.73 21.32 16.27 21.59 16.80 21.90 17.33 22.26 17.87 22.65 18.40 23.06 18.93 23.49 19.47 23.91 20.00 24.33 20.53 24.71 21.07 25.07 21.60 25.38 22.13 25.63 22.67 25.83 23.20 25.95 23.73 26.01 24.27 26.00 24.80 25.92 25.33 25.76 25.87 25.55 26.40 25.27 26.93 24.95 27.47 24.58 28.00 24.18 28.53 23.77 29.07 23.34 29.60 22.92 30.13 22.51 30.67 22.13 31.20 21.78 31.73 21.49 32.27 21.25 32.80 21.07 33.33 20.96 33.87 20.92 34.40 20.95 34.93 21.05 35.47 21.22 36.00 21.45\" stroke-opacity=\"0.87\"></polyline><polyline points=\"4.00 28.84 4.53 28.67 5.07 28.45 5.60 28.19 6.13 27.89 6.67 27.56 7.20 27.22 7.73 26.87 8.27 26.52 8.80 26.18 9.33 25.86 9.87 25.58 10.40 25.33 10.93 25.13 11.47 24.97 12.00 24.87 12.53 24.83 13.07 24.85 13.60 24.93 14.13 25.06 14.67 25.25 15.20 25.48 15.73 25.75 16.27 26.06 16.80 26.39 17.33 26.74 17.87 27.09 18.40 27.43 18.93 27.77 19.47 28.08 20.00 28.35 20.53 28.59 21.07 28.78 21.60 28.92 22.13 29.01 22.67 29.03 23.20 29.00 23.73 28.91 24.27 28.76 24.80 28.57 25.33 28.32 25.87 28.04 26.40 27.73 26.93 27.39 27.47 27.04 28.00 26.69 28.53 26.35 29.07 26.02 29.60 25.72 30.13 25.45 30.67 25.22 31.20 25.04 31.73 24.92 32.27 24.85 32.80 24.84 33.33 24.88 33.87 24.99 34.40 25.15 34.93 25.36 35.47 25.61 36.00 25.90\" stroke-opacity=\"0.73\"></polyline><polyline points=\"4.00 31.51 4.53 31.30 5.07 31.05 5.60 30.79 6.13 30.52 6.67 30.24 7.20 29.97 7.73 29.71 8.27 29.47 8.80 29.26 9.33 29.07 9.87 28.93 10.40 28.82 10.93 28.76 11.47 28.75 12.00 28.78 12.53 28.86 13.07 28.98 13.60 29.14 14.13 29.34 14.67 29.56 15.20 29.81 15.73 30.08 16.27 30.35 16.80 30.63 17.33 30.90 17.87 31.15 18.40 31.39 18.93 31.59 19.47 31.77 20.00 31.90 20.53 31.99 21.07 32.04 21.60 32.05 22.13 32.00 22.67 31.91 23.20 31.78 23.73 31.61 24.27 31.41 24.80 31.18 25.33 30.92 25.87 30.65 26.40 30.38 26.93 30.10 27.47 29.84 28.00 29.59 28.53 29.36 29.07 29.16 29.60 29.00 30.13 28.87 30.67 28.79 31.20 28.75 31.73 28.76 32.27 28.82 32.80 28.92 33.33 29.06 33.87 29.24 34.40 29.45 34.93 29.68 35.47 29.94 36.00 30.21\" stroke-opacity=\"0.60\"></polyline>"
        }
      }
    ]
  },
  "think": {
    "kicker": "How we think",
    "title": [
      "Technology follows",
      "the solution."
    ],
    "lede": "We look at the business, the user and the outcome before deciding what should be built. The technology is selected around the solution, not the other way around.",
    "columns": [
      {
        "title": "Solution-Led Thinking",
        "blurb": "We look at the wider business and user context before defining how technology should support it."
      },
      {
        "title": "Applied AI & Automation",
        "blurb": "AI and automation are considered from the beginning where they can meaningfully improve efficiency, intelligence or experience."
      },
      {
        "title": "End-to-End Capability",
        "blurb": "Strategy, product, UX, engineering, QA and infrastructure work together throughout delivery."
      },
      {
        "title": "Global Collaboration",
        "blurb": "Teams across multiple markets work within one delivery approach, supporting clients across North America, Europe, the Middle East and Asia."
      }
    ]
  },
  "believe": {
    "kicker": "What we believe",
    "title": [
      "Technology should solve",
      "the right problem first."
    ],
    "paragraphs": [
      "The strongest digital products are built when business context, user needs and technology are considered together.",
      "AI, automation and emerging technologies matter when they create meaningful improvement, not simply because they are new.",
      "Our role is to understand where technology can create that value, then engineer the solution to make it real."
    ]
  },
  "story": {
    "kicker": "Our story",
    "title": [
      "Built through the products we've helped bring to life."
    ],
    "paragraphs": [
      "JinnByte began in 2018 with a belief that strong technology partnerships should go beyond executing a brief.",
      "Since then, we have grown into a multidisciplinary team working across products, industries and markets, helping emerging ventures, growing digital businesses and established organisations move from early direction through production and scale.",
      "Today, our teams bring product strategy, experience design, engineering, AI and infrastructure together around the same objective: building technology that creates lasting value."
    ],
    "locations": [
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
  "team": {
    "kicker": "Our team",
    "title": "The people behind the work.",
    "lede": "Product, design, engineering, AI and delivery work as one team around the products and businesses we support.",
    "members": [
      {
        "name": "Junaid Malik",
        "role": "Director",
        "photo": "/images/junaid-malik.jpg",
        "linkedin": "https://www.linkedin.com/in/jinnmalik"
      },
      {
        "name": "Ahmad Bilal Khan",
        "role": "Chief Executive Officer",
        "photo": "/images/ahmad-bilal-khan.jpg",
        "linkedin": "https://www.linkedin.com/in/ahmad-bilal-khan-42a34396"
      },
      {
        "name": "Raza Ahmed",
        "role": "Chief Technology Officer",
        "photo": "/images/raza-ahmed.jpg",
        "linkedin": "https://www.linkedin.com/in/raza-ahmed-cs"
      },
      {
        "name": "Bilal Rana",
        "role": "Chief Growth Officer",
        "photo": "/images/bilal-rana.jpg",
        "linkedin": ""
      },
      {
        "name": "Mudassar Hussain",
        "role": "Head of Solutions",
        "photo": "/images/mudassar-hussain.jpg",
        "linkedin": "https://www.linkedin.com/in/mudassar-hussain-58b5b892"
      },
      {
        "name": "Widad Kamran",
        "role": "Head of Strategic Partnerships",
        "photo": "/images/widad-kamran.jpg",
        "linkedin": "https://www.linkedin.com/in/widad-kamran-42a53a311/"
      },
      {
        "name": "Hamza Ghouri",
        "role": "Head of Engineering",
        "photo": "/images/hamza-ghouri.jpg",
        "linkedin": "https://www.linkedin.com/in/hamza-ghouri-dev"
      },
      {
        "name": "Usama Alvi",
        "role": "Head of Product & Experience Design",
        "photo": "/images/usama-alvi.jpg",
        "linkedin": "https://www.linkedin.com/in/graphicdesigner-uiux-graphicdesign-expert"
      },
      {
        "name": "Usama Tahir",
        "role": "Business Solutions Analyst",
        "photo": "/images/usama-tahir.jpg",
        "linkedin": "https://www.linkedin.com/in/usama-ali-tahir-32036a307"
      },
      {
        "name": "Zain Mustafa",
        "role": "Product Delivery Manager",
        "photo": "/images/zain-mustafa.jpg",
        "linkedin": "https://www.linkedin.com/in/zain-mustafa-project-manager"
      },
      {
        "name": "Uzair Majed",
        "role": "Growth & Delivery Manager",
        "photo": "/images/uzair-majed.jpg",
        "linkedin": "https://www.linkedin.com/in/uzairmajed"
      },
      {
        "name": "Wardah Bilal",
        "role": "EdTech & Instructional Design Lead",
        "photo": "/images/wardah-bilal.jpg",
        "linkedin": "https://www.linkedin.com/in/wardah-s-385118193/"
      }
    ]
  },
  "culture": {
    "kicker": "Our culture",
    "title": [
      "Different perspectives.",
      "One team."
    ],
    "paragraphs": [
      "Our people work across disciplines, cultures and markets while sharing the same focus on collaboration, ownership and quality.",
      "Knowledge moves across teams, projects and disciplines, helping individual development strengthen the collective capability of the company."
    ],
    "gallery": [
      {
        "src": "https://jinnbyte.com/wp-content/uploads/2023/09/Mask-Group-48-1-5.png",
        "alt": "An engineer testing an AR build"
      },
      {
        "src": "https://jinnbyte.com/wp-content/uploads/2023/09/img-3-2.jpg-3.png",
        "alt": "The team on a retreat"
      },
      {
        "src": "https://jinnbyte.com/wp-content/uploads/2023/09/img-4-1.png",
        "alt": "A working session in the Lahore office"
      },
      {
        "src": "https://jinnbyte.com/wp-content/uploads/2023/09/Mask-Group-46-2-6-1024x694.png",
        "alt": "The JinnByte team at work"
      },
      {
        "src": "https://jinnbyte.com/wp-content/uploads/2026/05/our-culture-images.jpg",
        "alt": "Life at JinnByte"
      },
      {
        "src": "https://jinnbyte.com/wp-content/uploads/2023/09/fun-facts-image-2.jpg-2.png",
        "alt": "The full team at an office celebration"
      },
      {
        "src": "https://jinnbyte.com/wp-content/uploads/2023/09/Mask-Group-48-1-5.png",
        "alt": "An engineer testing an AR build"
      },
      {
        "src": "https://jinnbyte.com/wp-content/uploads/2023/09/img-3-2.jpg-3.png",
        "alt": "The team on a retreat"
      },
      {
        "src": "https://jinnbyte.com/wp-content/uploads/2023/09/img-4-1.png",
        "alt": "A working session in the Lahore office"
      },
      {
        "src": "https://jinnbyte.com/wp-content/uploads/2023/09/Mask-Group-46-2-6-1024x694.png",
        "alt": "The JinnByte team at work"
      },
      {
        "src": "https://jinnbyte.com/wp-content/uploads/2026/05/our-culture-images.jpg",
        "alt": "Life at JinnByte"
      },
      {
        "src": "https://jinnbyte.com/wp-content/uploads/2023/09/fun-facts-image-2.jpg-2.png",
        "alt": "The full team at an office celebration"
      }
    ]
  },
  "impact": {
    "kicker": "Our impact",
    "title": [
      "Talent is evenly spread. Opportunity is not."
    ],
    "paragraphs": [
      "Most young people are asked to choose a career long before anyone has shown them what the work actually involves.",
      "We run workshops for school and college students that introduce them to careers in technology through the work itself, what engineers, designers and product managers actually do, the problems they solve and the routes into each role.",
      "A clearer view of those opportunities early on can help more people choose a path that genuinely fits them."
    ],
    "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=78",
    "imageAlt": "A JinnByte workshop introducing students to careers in technology"
  },
  "cta": {
    "kicker": "Let's build",
    "title": "Have a business challenge worth solving?",
    "body": "Tell us what you're trying to build, improve or automate. We'll help define the right solution and the path to get it into production."
  }
};
