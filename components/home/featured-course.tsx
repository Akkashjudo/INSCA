import Image from "next/image";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import { ArrowGlyph, ButtonLink } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ImageReveal } from "@/components/ui/image-reveal";
import { level1A, formatFee } from "@/data/course";

const specs = [
  { icon: MapPin, label: "Venue", value: level1A.venue },
  { icon: CalendarDays, label: "Dates", value: level1A.dateLabel },
  {
    icon: Clock,
    label: "Duration",
    value: `${level1A.durationDays} days · ${level1A.hoursTotal} hours`,
  },
  { icon: Users, label: "Admission", value: level1A.admission },
];

export function FeaturedCourse() {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-ink-950 section-y">
      <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-70" />
      <div
        aria-hidden="true"
        className="absolute -right-32 top-1/4 hidden size-[440px] rounded-full bg-insca-500/12 blur-[100px] lg:block"
      />

      <div className="wrap relative">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          {/* Media */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <ImageReveal from="left" className="aspect-[4/3] rounded-2xl sm:aspect-[16/11]">
                <Image
                  src="/workshops/strength/barbell-hinge.webp"
                  alt="INSCA participants practising the barbell hip hinge on the indoor track at TACSS"
                  fill
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </ImageReveal>

              {/* Offset secondary frame */}
              <div className="absolute -bottom-8 -right-2 hidden w-44 overflow-hidden rounded-xl border-4 border-ink-950 sm:block lg:-right-8 lg:w-52">
                <div className="relative aspect-4/3">
                  <Image
                    src="/workshops/testing/sprint-lineup.webp"
                    alt="INSCA participants lined up for sprint testing at TACSS"
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
              </div>

              <span className="absolute left-4 top-4 rounded-full bg-insca-500 px-3.5 py-1.5 font-display text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white">
                Current Programme
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="t-eyebrow inline-flex items-center gap-2.5 text-insca-400">
                <span aria-hidden="true" className="h-px w-6 rounded bg-insca-400" />
                INSCA + SDAT Accredited
              </span>
              <h2 className="t-h2 mt-3.5 text-white">
                {level1A.title}
              </h2>
              <p className="mt-4 font-display text-lg font-semibold text-insca-400 sm:text-xl">
                {level1A.positioning}
              </p>
              <p className="t-lead mt-5 text-ink-300">{level1A.overview}</p>
            </Reveal>

            <RevealGroup className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2" delayChildren={0.04}>
              {specs.map(({ icon: Icon, label, value }) => (
                <RevealItem key={label}>
                  <span className="flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-ink-400">
                    <Icon className="size-3.5 text-insca-400" aria-hidden="true" />
                    {label}
                  </span>
                  <span className="mt-1.5 block text-[0.94rem] font-medium leading-snug text-white">
                    {value}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.06}>
              <div className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-xl border border-white/12 bg-white/5 px-5 py-4">
                <span className="font-display text-2xl font-bold text-white">
                  {formatFee(level1A.fees[0].amount)}
                </span>
                <span className="text-sm font-medium text-insca-400">
                  {level1A.fees[0].label}
                </span>
                <span className="w-full text-xs text-ink-400 sm:w-auto">
                  · {formatFee(level1A.fees[1].amount)} after{" "}
                  {level1A.earlyBirdDeadlineLabel}
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/courses/level-1a" size="lg">
                  Explore Level 1A
                  <ArrowGlyph />
                </ButtonLink>
                <ButtonLink href={level1A.registrationUrl} variant="ghostLight" size="lg">
                  Register Now
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
