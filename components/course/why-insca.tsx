import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { level1A } from "@/data/course";
import { fadeIn } from "@/lib/motion";

export function WhyInsca() {
  return (
    <section className="section-y">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-16">
        <div>
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

          <RevealGroup className="mt-9 space-y-3" staggerChildren={0.06}>
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
        </div>

        <Reveal variants={fadeIn}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative aspect-3/4 overflow-hidden rounded-2xl">
              <Image
                src="/workshops/practical/sprint-start.webp"
                alt="Sprint start position demonstrated in front of INSCA participants"
                fill
                sizes="(max-width: 1024px) 45vw, 24vw"
                className="object-cover object-[58%_center]"
              />
            </div>
            <div className="relative mt-8 aspect-3/4 overflow-hidden rounded-2xl">
              <Image
                src="/workshops/analysis/force-curve.webp"
                alt="Force–velocity data reviewed during an INSCA applied sports science session"
                fill
                sizes="(max-width: 1024px) 45vw, 24vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-hairline bg-canvas-2 p-6 sm:mt-5 sm:p-7">
            <p className="font-display text-lg font-bold leading-snug text-ink-900 sm:text-xl">
              &ldquo;{level1A.positioning}&rdquo;
            </p>
            <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-500">
              A certification positioned for athlete performance, monitoring and
              high-performance support roles — accredited by INSCA and the Sports
              Development Authority of Tamil Nadu.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
