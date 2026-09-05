import Image from "next/image";
import { FocusList } from "./focus-list";
import { ImageReveal } from "@/components/ui/image-reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { level1A } from "@/data/course";
import { cn } from "@/lib/utils";

/**
 * "What you'll learn".
 *
 * A typographic index rather than a grid of identical cards — numbered rules
 * paired with one large photograph. The surrounding sections already carry
 * cards, so this one is deliberately type-led to break the rhythm.
 *
 * The count in the heading is DERIVED from the data. Adding or removing a
 * taught area updates the sentence, the index and the Course JSON-LD
 * together, so they cannot drift apart.
 */
const COUNT_WORDS = [
  "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight",
  "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
  "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty",
] as const;

const areaCount =
  COUNT_WORDS[level1A.focusAreas.length] ?? String(level1A.focusAreas.length);

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
              {areaCount} core areas of{" "}
              <Accent tone={tone}>high-performance practice</Accent>
            </>
          }
          lead="Each area is taught as theory and then coached on the floor — the two halves of the certification are deliberately inseparable."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-start lg:gap-16">
          {/* Photography, shown plainly */}
          <div className="lg:sticky lg:top-28 lg:self-start">
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
              Force–velocity data reviewed with the cohort at the Tamil Nadu
              Centre for Sports Science.
            </p>
          </div>

          {/* The index — tracks the row at the reading line */}
          <FocusList areas={level1A.focusAreas} dark={dark} />
        </div>
      </div>
    </section>
  );
}
