import Image from "next/image";
import { ArrowGlyph, ButtonLink } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ImageReveal } from "@/components/ui/image-reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { aboutParagraphs, site } from "@/data/site";

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
        <div>
          <SectionHeading
            eyebrow="Who we are"
            title={
              <>
                India&apos;s national professional body for{" "}
                <Accent>Strength &amp; Conditioning</Accent>
              </>
            }
          />

          <Reveal delay={0.08}>
            <div className="mt-7 space-y-5 text-ink-500 t-lead">
              {aboutParagraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

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
        </div>

        <div>
          <div className="relative">
            <ImageReveal className="aspect-4/3 rounded-2xl">
              <Image
                src="/workshops/cohort/group-photo.webp"
                alt="The full INSCA cohort at the Tamil Nadu Centre for Sports Science, Chennai"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
            </ImageReveal>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-2xl">
              <div className="absolute inset-0 scrim-caption rounded-b-2xl" />
              <div className="relative p-5 sm:p-6">
                <p className="font-display text-base font-semibold text-white">
                  Tamil Nadu Centre for Sports Science
                </p>
                <p className="mt-0.5 text-sm text-ink-200">
                  SDAT · Jawaharlal Nehru Stadium, Chennai
                </p>
              </div>
            </div>
          </div>

          <RevealGroup
            className="mt-5 grid grid-cols-2 gap-3 sm:gap-4"
            delayChildren={0.1}
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
        </div>
      </div>
    </section>
  );
}
