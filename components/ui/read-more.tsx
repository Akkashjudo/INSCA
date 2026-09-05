"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Progressive disclosure for genuinely long content.
 *
 * Used sparingly — a president's message, a ten-card advantage grid — never
 * as a default wrapper. If a section can simply be shorter, shorten it
 * instead of hiding it behind a button.
 *
 * HOW THE HEIGHT ANIMATES
 * `grid-template-rows: 0fr -> 1fr` on a wrapper whose only child has
 * `min-height: 0` and `overflow: hidden`. That transitions to the content's
 * natural height with no measuring pass, no ResizeObserver and no layout
 * thrash — and it degrades to an instant open if the transition is disabled.
 *
 * WHY THE CONTENT STAYS IN THE DOM
 * Crawlers and screen readers still see it, so nothing is hidden from search
 * or assistive technology. `inert` takes the collapsed region out of the tab
 * order and the accessibility tree while it is closed, so a keyboard user
 * cannot land inside a panel they cannot see.
 */
export function ReadMore({
  children,
  moreLabel = "Read more",
  lessLabel = "Read less",
  tone = "light",
  align = "left",
  className,
}: {
  children: ReactNode;
  moreLabel?: string;
  lessLabel?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const dark = tone === "dark";

  return (
    <div className={className}>
      <div
        id={id}
        inert={!open}
        aria-hidden={!open}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-500",
          "[transition-timing-function:var(--ease-insca)] motion-reduce:transition-none",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0 overflow-hidden">{children}</div>
      </div>

      <div className={cn("mt-5 flex", align === "center" && "justify-center")}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={id}
          className={cn(
            "group/more inline-flex min-h-11 items-center gap-2 rounded-full border px-5",
            "font-display text-[0.85rem] font-semibold",
            "transition-colors duration-300 [transition-timing-function:var(--ease-insca)]",
            dark
              ? "border-white/25 text-white hover:border-white/50 hover:bg-white/10"
              : "border-ink-200 text-ink-900 hover:border-insca-300 hover:bg-insca-50 hover:text-insca-600",
          )}
        >
          {open ? lessLabel : moreLabel}
          <ChevronDown
            aria-hidden="true"
            className={cn(
              "size-4 transition-transform duration-400",
              "[transition-timing-function:var(--ease-insca)] motion-reduce:transition-none",
              open && "rotate-180",
            )}
          />
        </button>
      </div>
    </div>
  );
}
