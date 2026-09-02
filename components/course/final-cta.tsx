import Image from "next/image";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import { ArrowGlyph, ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { level1A } from "@/data/course";
import { contact } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

const details = [
  { icon: MapPin, value: level1A.venueShort },
  { icon: CalendarDays, value: level1A.dateLabel },
  { icon: Clock, value: `${level1A.durationDays} days · ${level1A.hoursTotal} hours` },
  { icon: Users, value: "Limited slots" },
];

export function FinalCta() {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-ink-950">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src="/workshops/classroom/full-room.webp"
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover object-[50%_38%]"
        />
        {/* One centred scrim: dark behind the copy, open at the edges. */}
        <div className="absolute inset-0 scrim-center" />
        <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_0%,rgba(224,31,38,0.16),transparent_65%)]" />
      </div>

      <div className="wrap section-y text-center">
        <Reveal>
          <span className="t-eyebrow inline-flex items-center gap-2.5 text-insca-400">
            <span aria-hidden="true" className="h-px w-6 rounded bg-insca-400" />
            Registration open
          </span>

          <h2 className="t-h2 mx-auto mt-4 max-w-3xl text-white">
            High Performance Sport Demands{" "}
            <span className="text-insca-500">High Performance Professionals.</span>
          </h2>

          <p className="t-lead mx-auto mt-6 max-w-2xl text-ink-100">
            If you are serious about working in elite sport and high-performance
            systems, this course is built for you.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={level1A.registrationUrl} size="lg">
              Register for INSCA Level 1A
              <ArrowGlyph />
            </ButtonLink>
            <ButtonLink href={contact.whatsapp} variant="ghostLight" size="lg">
              <WhatsAppIcon className="size-[1.15em]" />
              Enquire on WhatsApp
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <ul className="mx-auto mt-11 flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-3 border-t border-white/12 pt-8 sm:gap-x-5">
            {details.map(({ icon: Icon, value }) => (
              <li
                key={value}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.82rem] font-medium text-white backdrop-blur-sm"
              >
                <Icon className="size-3.5 shrink-0 text-insca-400" aria-hidden="true" />
                {value}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
