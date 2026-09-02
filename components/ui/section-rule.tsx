"use client";

import { m } from "framer-motion";
import { drawLine, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * A hairline that draws itself in as the section arrives. Used between major
 * blocks so scrolling has rhythm instead of hard cuts.
 *
 * `scaleX` on a 1px rule is cheap — it composites on the GPU and never
 * triggers layout.
 */
export function SectionRule({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <m.div
      data-reveal=""
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={drawLine}
      className={cn(
        "h-px w-full origin-left",
        tone === "dark" ? "bg-white/15" : "bg-hairline",
        className,
      )}
    />
  );
}
