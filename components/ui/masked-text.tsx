"use client";

import { m } from "framer-motion";
import { maskLine, STAGGER, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Masked line reveal for headings.
 *
 * Each line gets its own `overflow: hidden` wrapper and rises from beneath
 * it, so the type is uncovered rather than faded. Lines are supplied
 * explicitly — no text splitting — which keeps it predictable and avoids
 * shipping a measuring pass.
 *
 * Content is real text in the DOM, so it is always readable to a screen
 * reader and to search engines even before the animation runs.
 */
export function MaskedText({
  lines,
  className,
  lineClassName,
  as: Tag = "h2",
  /** Play on mount instead of waiting for the viewport (hero use). */
  immediate = false,
  delay = 0,
}: {
  lines: React.ReactNode[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  immediate?: boolean;
  delay?: number;
}) {
  const trigger = immediate
    ? { animate: "visible" as const }
    : { whileInView: "visible" as const, viewport: viewportOnce };

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className={cn("block overflow-hidden pb-[0.08em]", lineClassName)}>
          <m.span
            data-reveal=""
            className="block will-change-transform"
            initial="hidden"
            {...trigger}
            variants={maskLine}
            transition={{ delay: delay + i * STAGGER.line }}
          >
            {line}
          </m.span>
        </span>
      ))}
    </Tag>
  );
}
