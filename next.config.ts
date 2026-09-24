import type { NextConfig } from "next";

/**
 * Two remote sources carried over from the templates:
 *  - Unsplash, which the case studies and industry panels hot-linked. Kept
 *    remote rather than vendored so the licensing story stays unchanged.
 *  - the existing WordPress media library, which still serves the culture
 *    galleries, client logos and review badges.
 */
const remotePatterns = [
  { protocol: "https" as const, hostname: "images.unsplash.com", pathname: "/**" },
  { protocol: "https" as const, hostname: "jinnbyte.com", pathname: "/wp-content/**" },
];

/** Old flat-HTML URLs -> their new routes, so existing inbound links keep working. */
const legacyRoutes: Record<string, string> = {
  "/index.html": "/",
  "/company-about.html": "/about",
  "/solutions.html": "/solutions",
  "/portfolio.html": "/work",
  "/careers.html": "/careers",
  "/case-buff.html": "/work/buff",
  "/case-facebloom.html": "/work/facebloom",
  "/case-lingolane.html": "/work/lingolane",
  "/case-maslow.html": "/work/maslow",
  "/case-openline.html": "/work/openline",
  "/case-smf.html": "/work/smf",
  "/case-toptec.html": "/work/toptec",
};

const nextConfig: NextConfig = {
  images: {
    remotePatterns,
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return Object.entries(legacyRoutes).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
