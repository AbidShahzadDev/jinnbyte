import type { ReactNode } from "react";

/**
 * The single root element every route renders into.
 *
 * After a client-side navigation Next scrolls the new route's fragment into
 * view, and React does that by calling `scrollIntoView()` on each top-level
 * child in reverse order so the first one wins. When that first child is a
 * `<script>` (JSON-LD) or a sticky hero, the call is a no-op or aligns the
 * hero's *stuck* box, and the page opens on its second section instead. One
 * static wrapper gives Next a single in-flow target whose top already sits
 * under the header, so every route opens at its hero.
 */
export function RouteRoot({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
