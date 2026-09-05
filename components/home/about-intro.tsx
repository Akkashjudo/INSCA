import Image from "next/image";
import { ArrowGlyph, ButtonLink } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SplitReveal } from "@/components/ui/split-reveal";
import { ImageReveal } from "@/components/ui/image-reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { aboutParagraphs, aboutSummaryPoints, site } from "@/data/site";

/**
 * Verifiable institutional facts only — registration, accreditation, venue
 * and programme scale. No participant-count or reach claims are made,
 * because nothing in the supplied material substantiates them.
 */
const facts = [
  { value: "2024", label: "Established" },
  { value: "INSCA + SDAT", label: "Accreditation" },
  { value: "TACSS", label: "Chennai high-performance centre" },
  { value: "7", label: "Level 1A faculty" },
];

export function AboutIntro() {
  return (
    <section className="section-y">
      <div className="wrap grid gap-14 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-20">
        <SplitReveal from="left">
          <SectionHeading
            eyebrow="Who we are"
            title={
              <>
                India&apos;s national professional body for{" "}
                <Accent>Strength &amp; Conditioning</Accent>
              </>
            }
          />

          <Reveal delay={0.05}>
            {/*
              One paragraph, then three scannable points. The second
              paragraph of the full statement is ~75 words and belongs on
              /about, which the button below leads to.
            */}
            <p className="mt-7 t-lead text-ink-500">{aboutParagraphs[0]}</p>

            <ul className="mt-6 space-y-2.5">
              {aboutSummaryPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rotate-45 bg-insca-500"
                  />
                  <span className="text-[0.95rem] leading-relaxed text-ink-600">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <ButtonLink href="/about" variant="outline" size="md">
                About INSCA
                <ArrowGlyph />
              </ButtonLink>
              <span className="tabular text-sm text-ink-400">
                Reg. No. {site.registrationNo}
              </span>
            </div>
          </Reveal>
        </SplitReveal>

        <SplitReveal from="right" delay={0.06}>
          <figure className="relative">
            <ImageReveal from="right" className="aspect-4/3 rounded-2xl">
              <Image
                src="/workshops/cohort/group-photo.webp"
                alt="The full INSCA cohort at the Tamil Nadu Centre for Sports Science, Chennai"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-[50%_42%]"
              />
              {/* Overlay only where there is room for it */}
              <div aria-hidden="true" className="absolute inset-0 hidden scrim-caption sm:block" />
            </ImageReveal>

            {/*
              The caption wraps to three lines at 320px, where overlaying it
              covered 62% of the photograph. It sits in normal flow below the
              image on narrow screens and only overlays from `sm` up.
            */}
            <figcaption className="mt-3 sm:absolute sm:inset-x-0 sm:bottom-0 sm:mt-0 sm:p-6">
              <p className="font-display text-[0.95rem] font-semibold text-ink-900 sm:text-base sm:text-white">
                Tamil Nadu Centre for Sports Science
              </p>
              <p className="mt-0.5 text-[0.85rem] text-ink-500 sm:text-sm sm:text-ink-200">
                SDAT · Jawaharlal Nehru Stadium, Chennai
              </p>
            </figcaption>
          </figure>

          <RevealGroup
            className="mt-5 grid grid-cols-2 gap-3 sm:gap-4"
            delayChildren={0.05}
          >
            {facts.map((f) => (
              <RevealItem
                key={f.label}
                className="rounded-xl border border-hairline bg-canvas-2 p-4 sm:p-5"
              >
                <div className="font-display text-lg font-bold leading-tight text-ink-900 sm:text-xl">
                  {f.value}
                </div>
                <div className="mt-1 text-[0.78rem] leading-snug text-ink-400">
                  {f.label}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </SplitReveal>
      </div>
    </section>
  );
}
