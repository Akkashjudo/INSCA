"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { EASE } from "@/lib/motion";

/**
 * Back to top.
 *
 * The course and gallery pages run to several thousand pixels, and the
 * reader's only route back to the navigation was a long scroll. This appears
 * after two screens — far enough down that it never competes with the hero,
 * and only on pages long enough to need it.
 *
 * POSITIONING
 * Sits above the mobile registration bar (<StickyCta>, `sm:hidden`) rather
 * than beside it, so the two never overlap on a phone. From `sm` up the bar
 * is gone and the button drops back to the normal gutter.
 *
 * The scroll itself respects `prefers-reduced-motion`: smooth for everyone
 * else, instant for readers who have asked for less movement.
 */
export function BackToTop() {
  const [show, setShow] = useState(false);
  /*
   * Safe to branch on here, unlike in the scroll reveals: this component
   * renders `null` until a scroll event fires, so the server and the first
   * client render always agree and there is no hydration mismatch.
   */
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      // Only worth offering on a genuinely long page.
      setShow(scrollable > window.innerHeight * 2 && window.scrollY > window.innerHeight * 2);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {show ? (
        <m.button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.3, ease: EASE }}
          className={[
            "group fixed right-4 z-40 grid size-11 place-items-center rounded-full sm:right-6",
            // Clears the 73px mobile registration bar with room to spare;
            // normal gutter from `sm` up, where that bar is not rendered.
            "bottom-[calc(5.5rem+env(safe-area-inset-bottom))] sm:bottom-6",
            "border border-hairline bg-white/90 text-ink-700 shadow-[var(--shadow-card)] backdrop-blur-xl",
            "transition-colors duration-300 [transition-timing-function:var(--ease-insca)]",
            "hover:border-insca-300 hover:bg-white hover:text-insca-600",
          ].join(" ")}
        >
          <ArrowUp
            className="size-4.5 transition-transform duration-300 [transition-timing-function:var(--ease-insca)] group-hover:-translate-y-0.5 motion-reduce:transition-none"
            aria-hidden="true"
          />
        </m.button>
      ) : null}
    </AnimatePresence>
  );
}
