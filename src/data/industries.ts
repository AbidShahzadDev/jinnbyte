/** Industries copied from the supplied solutions.html and portfolio.html templates.
 * SVG geometry, icon colors, images, ordering and case-study groups are shared.
 */
export type Industry = {
  cat: string;
  label: string;
  blurb: string;
  image: string;
  icon: { viewBox: string; markup: string };
  iconBackground: string;
  iconForeground: string;
  caseStudies: string[];
};

export const industries: readonly Industry[] = [
  {
    "cat": "edu",
    "label": "Ed-Tech",
    "blurb": "Digital learning ecosystems that make education more engaging, accessible and personalised.",
    "image": "https://images.unsplash.com/photo-1520209409554-39094da9b802?auto=format&fit=crop&w=1400&q=70",
    "icon": {
      "viewBox": "0 0 28 28",
      "markup": "<path d=\"M4 9 14 4l10 5-10 5z\"/><path d=\"M9 12v6c0 1 2.2 2.4 5 2.4S19 19 19 18v-6\"/><path d=\"M24 9v6\"/>"
    },
    "iconBackground": "#E3EEF9",
    "iconForeground": "#3A6EA5",
    "caseStudies": [
      "lingolane"
    ]
  },
  {
    "cat": "hr",
    "label": "HR & Recruitment",
    "blurb": "Intelligent hiring solutions that bring greater structure, visibility and confidence to recruitment.",
    "image": "https://images.unsplash.com/photo-1696861270495-7f35c35c3273?auto=format&fit=crop&w=1400&q=70",
    "icon": {
      "viewBox": "0 0 28 28",
      "markup": "<circle cx=\"11\" cy=\"10\" r=\"4.2\"/><path d=\"M4 23c0-4.2 3.1-7 7-7 1.7 0 3.2.5 4.4 1.4\"/><path d=\"M17.5 19.5l2.2 2.2 4-4.4\"/>"
    },
    "iconBackground": "#FBEEDD",
    "iconForeground": "#A5652B",
    "caseStudies": [
      "maslow"
    ]
  },
  {
    "cat": "fit",
    "label": "Health & Fitness",
    "blurb": "Connected fitness experiences built around training, progress, motivation and long-term engagement.",
    "image": "https://images.unsplash.com/photo-1589579234096-25cb6b83e021?auto=format&fit=crop&w=1400&q=70",
    "icon": {
      "viewBox": "0 0 28 28",
      "markup": "<rect x=\"3\" y=\"10\" width=\"3.2\" height=\"8\" rx=\"1.2\"/><rect x=\"21.8\" y=\"10\" width=\"3.2\" height=\"8\" rx=\"1.2\"/><path d=\"M6.2 14h15.6\"/><path d=\"M8 8v12M20 8v12\"/>"
    },
    "iconBackground": "#E2F3EA",
    "iconForeground": "#2F7D58",
    "caseStudies": [
      "buff"
    ]
  },
  {
    "cat": "field",
    "label": "Field & On-Demand Services",
    "blurb": "Digital ecosystems connecting customers, field teams, operations and service delivery.",
    "image": "https://images.unsplash.com/photo-1742828732612-ba79bbdc1235?auto=format&fit=crop&w=1400&q=70",
    "icon": {
      "viewBox": "0 0 28 28",
      "markup": "<path d=\"M18.4 6.6a4.6 4.6 0 0 0-6 6L5 20l3 3 7.4-7.4a4.6 4.6 0 0 0 6-6l-3 3-2.6-.4-.4-2.6z\"/>"
    },
    "iconBackground": "#E1F1F1",
    "iconForeground": "#2F7F80",
    "caseStudies": [
      "toptec"
    ]
  },
  {
    "cat": "ecom",
    "label": "E-Commerce & Retail",
    "blurb": "Intelligent platforms that improve how products are structured, discovered, compared and purchased.",
    "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=70",
    "icon": {
      "viewBox": "0 0 24 24",
      "markup": "<circle cx=\"9\" cy=\"20\" r=\"1.4\"/><circle cx=\"17.5\" cy=\"20\" r=\"1.4\"/><path d=\"M3 4h2.2l2.1 11h10l1.9-8H6.2\"/>"
    },
    "iconBackground": "#F7F0D6",
    "iconForeground": "#8A6D1D",
    "caseStudies": []
  },
  {
    "cat": "wellness",
    "label": "Wellness & Recovery",
    "blurb": "Personalised digital experiences supporting wellbeing, guidance and everyday progress.",
    "image": "https://images.unsplash.com/photo-1690787628851-d36e285c29b0?auto=format&fit=crop&w=1400&q=70",
    "icon": {
      "viewBox": "0 0 28 28",
      "markup": "<path d=\"M4 14h4l2.5-6 4 12 3-8 2 2h4.5\"/>"
    },
    "iconBackground": "#FBE7E7",
    "iconForeground": "#B04A4F",
    "caseStudies": [
      "smf",
      "openline"
    ]
  },
  {
    "cat": "lifestyle",
    "label": "Consumer Lifestyle",
    "blurb": "Technology-led consumer products combining personalisation, engagement and growth.",
    "image": "https://images.unsplash.com/photo-1645186158654-cfa982280fb2?auto=format&fit=crop&w=1400&q=70",
    "icon": {
      "viewBox": "0 0 28 28",
      "markup": "<path d=\"M14 4c1.6 4.2 3.8 6.4 8 8-4.2 1.6-6.4 3.8-8 8-1.6-4.2-3.8-6.4-8-8 4.2-1.6 6.4-3.8 8-8z\"/>"
    },
    "iconBackground": "#EEE7F8",
    "iconForeground": "#6D4FA6",
    "caseStudies": [
      "facebloom"
    ]
  },
  {
    "cat": "local",
    "label": "Local Discovery",
    "blurb": "Platforms connecting user intent with relevant experiences, venues and services.",
    "image": "https://images.unsplash.com/photo-1733840592793-93fbd895d779?auto=format&fit=crop&w=1400&q=70",
    "icon": {
      "viewBox": "0 0 24 24",
      "markup": "<path d=\"M12 21.5s6.8-6.3 6.8-11a6.8 6.8 0 1 0-13.6 0c0 4.7 6.8 11 6.8 11z\"/><circle cx=\"12\" cy=\"10.5\" r=\"2.4\"/>"
    },
    "iconBackground": "#EAF0DC",
    "iconForeground": "#5F7A2E",
    "caseStudies": []
  }
];
