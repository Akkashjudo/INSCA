"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { DUR, EASE_OUT_EXPO } from "@/lib/motion";
import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";

/**
 * One half of a split section, entering from its own side.
 *
 * Copy on the left travels in from the left while imagery on the right
 * mirrors it, so the halves close on the layout together rather than
 * everything drifting upward. Alternate the pairing section to section and
 * scrolling gains a rhythm.
 *
 * Uses `useReveal`, so a missed observer settles the half into place instead
 * of parking it 44px off-position — which is exactly what happened when this
 * relied on `whileInView` alone.
 *
 * The 44px offset is modest by design: `body` is `overflow-x: clip`, so it
 * cannot produce a horizontal scrollbar at any width.
 */
export function SplitReveal({
  children,
  from,
  className,
  delay = 0,
}: {
  children: ReactNode;
  from: "left" | "right";
  className?: string;
  delay?: number;
}) {
  const { ref, revealed } = useReveal();

  return (
    <m.div
      ref={ref}
      data-reveal=""
      className={cn("will-change-transform", className)}
      initial={false}
      animate={{
        opacity: revealed ? 1 : 0.72,
        x: revealed ? 0 : from === "left" ? -44 : 44,
      }}
      transition={{ duration: DUR.reveal, ease: EASE_OUT_EXPO, delay: revealed ? delay : 0 }}
    >
      {children}
    </m.div>
  );
}
