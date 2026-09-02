import Image from "next/image";
import { Check } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SplitReveal } from "@/components/ui/split-reveal";
import { ImageReveal } from "@/components/ui/image-reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { level1A } from "@/data/course";

export function WhyInsca() {
  return (
    <section className="section-y">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-16">
        <SplitReveal from="left">
          <SectionHeading
            eyebrow="Why INSCA Level 1A?"
            title={
              <>
                Don&apos;t just study Strength &amp; Conditioning.{" "}
                <Accent>Experience high-performance sport.</Accent>
              </>
            }
            lead={level1A.notFor}
          />

          <RevealGroup className="mt-9 space-y-3" staggerChildren={0.04}>
            {level1A.differentiators.map((point) => (
              <RevealItem
                key={point}
                className="flex items-start gap-3.5 rounded-xl border border-hairline bg-white p-4 transition-colors duration-400 hover:border-insca-200"
              >
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-insca-500 text-white">
                  <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-[0.95rem] font-medium leading-snug text-ink-800">
                  {point}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </SplitReveal>

        <SplitReveal from="right" delay={0.06}>
          {/*
            Both photographs are 1600x801 (ratio 2.00). They previously sat in
            aspect-3/4 portrait frames, which threw away ~62% of each frame and
            left the second one on a default centre crop — the subject ended up
            badly composed. They now keep a landscape ratio with a focal point
            chosen per photograph, and simply stack on narrow screens.
          */}
          <ImageReveal from="right" className="aspect-16/10 rounded-2xl">
            <Image
              src="/workshops/practical/sprint-start.webp"
              alt="Sprint start position demonstrated in front of INSCA participants"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover object-[54%_46%]"
            />
          </ImageReveal>

          {/*
            Narrower and right-aligned from `sm` for editorial rhythm. It is
            deliberately NOT overlapped onto the frame above: an overlap risks
            covering a subject and reads as a mistake rather than intent.
          */}
          <div className="mt-4 sm:ml-auto sm:mt-5 sm:w-[78%]">
            <ImageReveal from="right" className="aspect-16/10 rounded-2xl" delay={0.05}>
              <Image
                src="/workshops/analysis/force-curve.webp"
                alt="Force–velocity data reviewed during an INSCA applied sports science session"
                fill
                sizes="(max-width: 640px) 100vw, 36vw"
                className="object-cover object-[28%_center]"
              />
            </ImageReveal>
          </div>

          <div className="mt-6 rounded-2xl border border-hairline bg-canvas-2 p-6 sm:mt-8 sm:p-7">
            <p className="font-display text-lg font-bold leading-snug text-ink-900 sm:text-xl">
              &ldquo;{level1A.positioning}&rdquo;
            </p>
            <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-500">
              A certification positioned for athlete performance, monitoring and
              high-performance support roles — accredited by INSCA and the Sports
              Development Authority of Tamil Nadu.
            </p>
          </div>
        </SplitReveal>
      </div>
    </section>
  );
}
