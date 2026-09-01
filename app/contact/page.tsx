import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { ArrowGlyph, ButtonLink } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { AccreditationLockup } from "@/components/layout/brand";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { contact, venue } from "@/data/site";
import { leadership } from "@/data/people";
import { level1A } from "@/data/course";

export const metadata: Metadata = {
  title: "Contact INSCA",
  description: `Contact the Indian National Strength & Conditioning Association. Call ${contact.phone} or email ${contact.email} for Level 1A certification enquiries and registration.`,
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: Phone,
    label: "Call us",
    value: contact.phone,
    href: contact.phoneHref,
    note: "Course registration and general enquiries",
  },
  {
    icon: Mail,
    label: "Email us",
    value: contact.email,
    href: contact.emailHref,
    note: "We respond to course questions within a working day",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: venue.name,
    href: `https://www.google.com/maps?q=${venue.mapsQuery}`,
    note: `${venue.building}, SDAT, ${venue.street}, ${venue.locality} – ${venue.postalCode}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      <PageHeader
        eyebrow="Get in touch"
        title={
          <>
            Talk to <span className="text-insca-500">INSCA</span>
          </>
        }
        lead="Questions about the Level 1A certification, eligibility, the venue or registration? Reach us directly — we would rather answer properly than have you guess."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      <section className="section-y">
        <div className="wrap">
          <RevealGroup className="grid gap-4 lg:grid-cols-3" staggerChildren={0.08}>
            {channels.map(({ icon: Icon, label, value, href, note }) => (
              <RevealItem key={label}>
                <a
                  href={href}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex h-full flex-col rounded-2xl border border-hairline bg-white p-6 transition-all duration-400 [transition-timing-function:var(--ease-insca)] hover:-translate-y-1 hover:border-insca-200 hover:shadow-[var(--shadow-lift)] sm:p-7"
                >
                  <span className="grid size-11 place-items-center rounded-lg bg-insca-50 text-insca-500 transition-colors duration-400 group-hover:bg-insca-500 group-hover:text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="mt-5 font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-ink-400">
                    {label}
                  </span>
                  <span className="mt-1.5 font-display text-[1.05rem] font-bold leading-snug text-ink-900">
                    {value}
                  </span>
                  <span className="mt-2.5 text-[0.86rem] leading-relaxed text-ink-500">
                    {note}
                  </span>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Registration card + map */}
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
            <Reveal>
              <div className="rounded-2xl border border-insca-200 bg-insca-50 p-6 sm:p-8">
                <span className="t-eyebrow text-insca-600">Register for Level 1A</span>
                <h2 className="t-h3 mt-3.5 text-ink-900">
                  Applications are open for the 2026 cohort
                </h2>
                <p className="mt-3.5 text-[0.93rem] leading-relaxed text-ink-600">
                  {level1A.dateLabel} · {level1A.venueShort} · {level1A.durationDays}{" "}
                  days · {level1A.hoursTotal} hours. Slots are limited and allocated{" "}
                  {level1A.admission.toLowerCase()}.
                </p>
                <ButtonLink
                  href={level1A.registrationUrl}
                  size="lg"
                  block
                  className="mt-6"
                >
                  Join the Programme
                  <ArrowGlyph />
                </ButtonLink>
              </div>

              <div className="mt-6">
                <AccreditationLockup />
              </div>

              <div className="mt-8">
                <SectionHeading
                  as="h3"
                  eyebrow="Office bearers"
                  title={
                    <>
                      Speak to <Accent>the team</Accent>
                    </>
                  }
                />
                <ul className="mt-6 space-y-3">
                  {leadership.map((person) => (
                    <li
                      key={person.name}
                      className="rounded-xl border border-hairline bg-white p-5"
                    >
                      <span className="font-display text-[0.7rem] font-bold uppercase tracking-[0.14em] text-insca-500">
                        {person.role}
                      </span>
                      <p className="mt-1 font-display font-bold text-ink-900">
                        {person.name}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <a
                          href={person.phoneHref}
                          className="inline-flex min-h-9 items-center gap-2 rounded-full border border-hairline px-3.5 text-[0.82rem] font-medium text-ink-600 transition-colors hover:border-insca-300 hover:text-insca-600"
                        >
                          <Phone className="size-3.5" aria-hidden="true" />
                          {person.phone}
                        </a>
                        <a
                          href={`mailto:${person.email}`}
                          className="inline-flex min-h-9 items-center gap-2 rounded-full border border-hairline px-3.5 text-[0.82rem] font-medium text-ink-600 transition-colors hover:border-insca-300 hover:text-insca-600"
                        >
                          <Mail className="size-3.5" aria-hidden="true" />
                          {person.email}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-hairline bg-canvas-2">
                <iframe
                  title="INSCA venue — Jawaharlal Nehru Stadium, Chennai"
                  src={`https://www.google.com/maps?q=${venue.mapsQuery}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[380px] w-full border-0 sm:h-[520px] lg:h-full lg:min-h-[640px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
