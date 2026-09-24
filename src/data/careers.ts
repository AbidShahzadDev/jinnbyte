/** Content for the /careers route, lifted from the original careers.html template. */

export type InlineIcon = { viewBox: string; markup: string };

export type StrokeIcon = { viewBox: string; strokeWidth: string; markup: string };

export type Careers = {
  hero: {
    kicker: string;
    title: string;
    titleAccent: string;
    lede: string;
    image: string;
    imageAlt: string;
    ctaEmail: string;
  };
  expect: { kicker: string; title: string; lede: string; perks: { label: string; icon: string }[] };
  culture: {
    kicker: string;
    title: string;
    blocks: { title: string; blurb: string }[];
    gallery: { src: string; alt: string }[];
  };
  hiring: { kicker: string; title: string; lede: string; steps: { title: string; blurb: string; icon: StrokeIcon }[] };
  apply: { kicker: string; title: string; lede: string; email: string };
};

export const careers: Careers = {
  "hero": {
    "kicker": "Careers at JinnByte",
    "title": "We’re always looking for",
    "titleAccent": "talent",
    "lede": "We love challenges. Experience working on world-class projects that impact millions of customers. We provide anything you need to get the job done.",
    "image": "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?fm=jpg&q=76&w=1800&auto=format&fit=crop",
    "imageAlt": "A team working together around a table",
    "ctaEmail": "hr@jinnbyte.com"
  },
  "expect": {
    "kicker": "What to expect",
    "title": "Everything you need to do the work well.",
    "lede": "We focus on what gets done, not on the hours it took. The rest is there so the work is the only thing you have to think about.",
    "perks": [
      {
        "label": "Free Equipment",
        "icon": "https://jinnbyte.com/wp-content/uploads/2026/05/free-equipment-icon.png"
      },
      {
        "label": "Annual Party",
        "icon": "https://jinnbyte.com/wp-content/uploads/2026/05/annual-party-icon.png"
      },
      {
        "label": "Birthdays",
        "icon": "https://jinnbyte.com/wp-content/uploads/2026/05/birthday-icon.png"
      },
      {
        "label": "In-house Games",
        "icon": "https://jinnbyte.com/wp-content/uploads/2026/05/in-house-games-icon.png"
      },
      {
        "label": "Monthly Bonus",
        "icon": "https://jinnbyte.com/wp-content/uploads/2026/05/monthly-bonus.png"
      },
      {
        "label": "Team Retreat",
        "icon": "https://jinnbyte.com/wp-content/uploads/2026/05/team-retreat-icon.png"
      }
    ]
  },
  "culture": {
    "kicker": "Our culture",
    "title": "A dynamic space to produce the very best, day in, day out.",
    "blocks": [
      {
        "title": "Homely team culture",
        "blurb": "Meet the kind of people you want to spend time with after work. We focus on what gets done, not on the hours it took. Sports and outdoor activities are supported and encouraged."
      },
      {
        "title": "Get to know us",
        "blurb": "We’ve slowly, steadily created a culture that’s unique; a dynamic space for us to produce the very best day in, day out. We don’t just look for folks who are exceptional at what they do, we want people who will help enhance this culture."
      }
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
  "hiring": {
    "kicker": "How we hire",
    "title": "Four steps, no guesswork.",
    "lede": "We keep the process short and tell you where you stand at every stage. You will speak to the people you would actually work with.",
    "steps": [
      {
        "title": "Apply",
        "blurb": "Send your CV and anything you are proud of. Portfolios, repositories and side projects count as much as the CV.",
        "icon": {
          "viewBox": "0 0 72 72",
          "strokeWidth": "0.9",
          "markup": "<circle cx=\"36.00\" cy=\"36.00\" r=\"30.24\"></circle><circle cx=\"36.00\" cy=\"36.00\" r=\"18.72\" stroke-opacity=\"0.7\"></circle><circle cx=\"36.00\" cy=\"36.00\" r=\"7.20\"></circle><line x1=\"54.72\" y1=\"36.00\" x2=\"66.24\" y2=\"36.00\" stroke-opacity=\"0.6\"></line><line x1=\"45.36\" y1=\"52.21\" x2=\"51.12\" y2=\"62.19\" stroke-opacity=\"0.6\"></line><line x1=\"26.64\" y1=\"52.21\" x2=\"20.88\" y2=\"62.19\" stroke-opacity=\"0.6\"></line><line x1=\"17.28\" y1=\"36.00\" x2=\"5.76\" y2=\"36.00\" stroke-opacity=\"0.6\"></line><line x1=\"26.64\" y1=\"19.79\" x2=\"20.88\" y2=\"9.81\" stroke-opacity=\"0.6\"></line><line x1=\"45.36\" y1=\"19.79\" x2=\"51.12\" y2=\"9.81\" stroke-opacity=\"0.6\"></line>"
        }
      },
      {
        "title": "Intro call",
        "blurb": "A short conversation about what you have built, what you want to work on next and how we work here.",
        "icon": {
          "viewBox": "0 0 72 72",
          "strokeWidth": "1.0",
          "markup": "<ellipse cx=\"36.00\" cy=\"36.00\" rx=\"31.68\" ry=\"12.24\" transform=\"rotate(0 36.00 36.00)\"></ellipse><ellipse cx=\"36.00\" cy=\"36.00\" rx=\"31.68\" ry=\"12.24\" transform=\"rotate(60 36.00 36.00)\"></ellipse><ellipse cx=\"36.00\" cy=\"36.00\" rx=\"31.68\" ry=\"12.24\" transform=\"rotate(120 36.00 36.00)\"></ellipse><circle cx=\"36.00\" cy=\"36.00\" r=\"3.96\"></circle>"
        }
      },
      {
        "title": "Craft conversation",
        "blurb": "A working session with the people you would join. Real problems, no puzzles designed to trip you up.",
        "icon": {
          "viewBox": "0 0 72 72",
          "strokeWidth": "1.0",
          "markup": "<path d=\"M36.00 8.64 L59.69 22.32 L59.69 49.68 L36.00 63.36 L12.31 49.68 L12.31 22.32 Z\"></path><path d=\"M36.00 36.00 L36.00 8.64\"></path><path d=\"M36.00 36.00 L12.31 49.68\"></path><path d=\"M36.00 36.00 L59.69 49.68\"></path><line x1=\"28.10\" y1=\"13.20\" x2=\"51.80\" y2=\"26.88\"></line><line x1=\"43.90\" y1=\"13.20\" x2=\"20.20\" y2=\"26.88\"></line><line x1=\"20.20\" y1=\"17.76\" x2=\"43.90\" y2=\"31.44\"></line><line x1=\"51.80\" y1=\"17.76\" x2=\"28.10\" y2=\"31.44\"></line>"
        }
      },
      {
        "title": "Offer and onboarding",
        "blurb": "A clear offer, a named buddy and a first project you contribute to from the first week.",
        "icon": {
          "viewBox": "0 0 72 72",
          "strokeWidth": "0.9",
          "markup": "<circle cx=\"36.00\" cy=\"36.00\" r=\"30.24\"></circle><ellipse cx=\"36.00\" cy=\"36.00\" rx=\"9.68\" ry=\"30.24\"></ellipse><ellipse cx=\"36.00\" cy=\"36.00\" rx=\"19.96\" ry=\"30.24\"></ellipse><line x1=\"36.00\" y1=\"5.76\" x2=\"36.00\" y2=\"66.24\"></line><ellipse cx=\"36.00\" cy=\"17.25\" rx=\"23.73\" ry=\"5.22\"></ellipse><ellipse cx=\"36.00\" cy=\"28.74\" rx=\"29.36\" ry=\"6.46\"></ellipse><ellipse cx=\"36.00\" cy=\"43.26\" rx=\"29.36\" ry=\"6.46\"></ellipse><ellipse cx=\"36.00\" cy=\"54.75\" rx=\"23.73\" ry=\"5.22\"></ellipse>"
        }
      }
    ]
  },
  "apply": {
    "kicker": "Open applications",
    "title": "Nothing open that fits? Write to us anyway.",
    "lede": "We hire when we meet the right people, not only when a role is posted. Send your CV along with anything you are proud of and tell us what you want to work on next.",
    "email": "hr@jinnbyte.com"
  }
};
