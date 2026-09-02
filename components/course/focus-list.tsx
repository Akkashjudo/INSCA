"use client";

import { useEffect, useRef, useState } from "react";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/**
 * The learning index, with the row nearest the reading line marked active.
 *
 * One IntersectionObserver watches a narrow band across the middle of the
 * viewport and reports which row is crossing it — cheaper and steadier than
 * a scroll handler measuring every row on every frame.
 *
 * Active state is presentation only: every row is fully legible at all times,
 * so nothing depends on the observer having fired.
 */
export function FocusList({
  areas,
  dark = false,
}: {
  areas: readonly string[];
  dark?: boolean;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const rows = ref.current?.querySelectorAll("li");
    if (!rows?.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.index);
            if (!Number.isNaN(i)) setActive(i);
          }
        }
      },
      // A band across the middle of the viewport acts as the reading line.
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    rows.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <RevealGroup as="ul" staggerChildren={0.04}>
      <ul ref={ref} className="contents">
        {areas.map((area, i) => {
          const isActive = i === active;
          return (
            <RevealItem
              as="li"
              key={area}
              className={cn(
                "group relative flex items-baseline gap-5 border-t py-5 sm:gap-7 sm:py-6",
                "transition-colors duration-400 [transition-timing-function:var(--ease-insca)]",
                dark ? "border-white/10" : "border-hairline",
                i === areas.length - 1 &&
                  (dark ? "border-b border-b-white/10" : "border-b border-b-hairline"),
              )}
            >
              <span
                data-index={i}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
              />

              <span
                className={cn(
                  "tabular shrink-0 font-display text-[0.78rem] font-bold tracking-[0.1em]",
                  "transition-all duration-400 [transition-timing-function:var(--ease-insca)]",
                  "group-hover:-translate-y-0.5 group-hover:scale-110",
                  isActive
                    ? "scale-110 text-insca-500"
                    : dark
                      ? "text-ink-500 group-hover:text-insca-400"
                      : "text-ink-300 group-hover:text-insca-500",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3
                className={cn(
                  "font-display text-[1.15rem] font-bold leading-snug sm:text-[1.35rem]",
                  "transition-transform duration-400 [transition-timing-function:var(--ease-insca)]",
                  "group-hover:translate-x-2",
                  isActive && "translate-x-1.5",
                  dark ? "text-white" : "text-ink-900",
                )}
              >
                {area}
              </h3>

              {/* Rule grows on hover, and stays drawn on the active row */}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-0 top-0 h-px origin-left transition-transform duration-500",
                  "[transition-timing-function:var(--ease-insca)] group-hover:scale-x-100",
                  isActive ? "scale-x-100" : "scale-x-0",
                  dark ? "bg-insca-400" : "bg-insca-500",
                )}
              />
            </RevealItem>
          );
        })}
      </ul>
    </RevealGroup>
  );
}
