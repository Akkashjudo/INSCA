"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Guarantees every route change starts at the top of the new page.
 *
 * The App Router already scrolls on navigation, but two things in this
 * project fight it:
 *
 *   1. `html { scroll-behavior: smooth }` — needed for the in-page anchors
 *      (#curriculum, #faculty, #faq). Left alone it turns a route change into
 *      a long animated scroll up through the OLD page's height, which reads
 *      as the browser "jumping" rather than as a new page.
 *   2. The page wipe covers the swap for ~0.6s. If anything restores a
 *      scroll position underneath it, the reader is dropped mid-page with no
 *      idea how they got there.
 *
 * So: on every pathname change with no hash, the scroll position is reset
 * instantly — smooth behaviour is suspended for exactly that one jump and
 * restored immediately afterwards, so anchor links keep their easing.
 *
 * BACK / FORWARD is deliberately untouched. Browsers restore the previous
 * position on a history pop and readers expect that; this only governs
 * forward navigation, which is what "clicking through to a new page" means.
 */
export function ScrollManager() {
  const pathname = usePathname();
  const isPop = useRef(false);

  useEffect(() => {
    const onPopState = () => {
      isPop.current = true;
      // Cleared on the next frame, after this render's effect has run.
      requestAnimationFrame(() => {
        isPop.current = false;
      });
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (isPop.current) return;
    if (window.location.hash) return;

    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previous;
  }, [pathname]);

  return null;
}
