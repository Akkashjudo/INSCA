"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_IN_OUT, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Editorial wipe for a major section.
 *
 * A brand panel covers content that is already in the DOM, then retracts to
 * uncover it. Because the content is real and present the whole time, this
 * cannot leave a section blank — the panel simply lifts off it.
 *
 * Reserved for LEVEL 1 moments (a handful per page). Using it on cards would
 * turn the page into a slideshow.
 */
export function SectionReveal({
  children,
  className,
  /** Edge the panel retracts toward. */
  toward = "right",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  toward?: "left" | "right";
  delay?: number;
}) {
  return (
    <div className={cn("relative isolate", className)}>
      {children}
      <m.span
        data-reveal=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-insca-500"
        style={{ transformOrigin: toward === "right" ? "right center" : "left center" }}
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7, ease: EASE_IN_OUT, delay }}
      />
    </div>
  );
}
