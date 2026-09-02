import Image from "next/image";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ImageReveal } from "@/components/ui/image-reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { level1A } from "@/data/course";
import { cn } from "@/lib/utils";

/**
 * "What you'll learn".
 *
 * A typographic index rather than a grid of identical cards — nine numbered
 * rules paired with one large photograph. The surrounding sections already
 * carry cards, so this one is deliberately type-led to break the rhythm.
 */
export function FocusAreas({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";

  return (
    <section className={cn("section-y", dark ? "on-dark bg-ink-900" : "bg-canvas-2")}>
      <div className="wrap">
        <SectionHeading
          eyebrow="What you'll learn"
          tone={tone}
          title={
            <>
              Nine core areas of{" "}
              <Accent tone={tone}>high-performance practice</Accent>
            </>
          }
          lead="Each area is taught as theory and then coached on the floor — the two halves of the certification are deliberately inseparable."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-start lg:gap-16">
          {/* Photography, shown plainly */}
          <div className="lg:sticky lg:top-28">
            {/*
              The source is 1600x801 (ratio 2.00). A portrait `lg:aspect-3/4`
              crop cut the instructor's head off on desktop, because a portrait
              container forces a VERTICAL crop of a landscape frame.

              At 4/3 the crop is horizontal only — full height is retained, so
              the head cannot be clipped at any width. 33% of the width is
              dropped; `object-position: 15%` spends that on the right of the
              frame, leaving him with headroom and clear of the left edge while
              the force-velocity chart stays readable. Chosen by rendering the
              actual cover crops at the measured container size (479x360).
            */}
            <ImageReveal from="left" className="aspect-4/3 rounded-2xl">
              <Image
                src="/workshops/analysis/force-curve.webp"
                alt="Force–velocity data reviewed on screen during an INSCA applied sports science session"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[15%_center]"
              />
            </ImageReveal>
            <p
              className={cn(
                "mt-4 text-[0.84rem] leading-relaxed",
                dark ? "text-ink-400" : "text-ink-400",
              )}
            >
              Applied sports science sessions at the Tamil Nadu Centre for Sports
              Science.
            </p>
          </div>

          {/* The index */}
          <RevealGroup as="ul" staggerChildren={0.04}>
            {level1A.focusAreas.map((area, i) => (
              <RevealItem
                as="li"
                key={area}
                className={cn(
                  "group relative flex items-baseline gap-5 border-t py-5 sm:gap-7 sm:py-6",
                  "transition-colors duration-400 [transition-timing-function:var(--ease-insca)]",
                  dark ? "border-white/10" : "border-hairline",
                  i === level1A.focusAreas.length - 1 &&
                    (dark ? "border-b border-b-white/10" : "border-b border-b-hairline"),
                )}
              >
                <span
                  className={cn(
                    "tabular shrink-0 font-display text-[0.78rem] font-bold tracking-[0.1em]",
                    "transition-all duration-400 [transition-timing-function:var(--ease-insca)]",
                    "group-hover:-translate-y-0.5 group-hover:scale-110",
                    dark
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
                    dark ? "text-white" : "text-ink-900",
                  )}
                >
                  {area}
                </h3>

                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500",
                    "[transition-timing-function:var(--ease-insca)] group-hover:scale-x-100",
                    dark ? "bg-insca-400" : "bg-insca-500",
                  )}
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
