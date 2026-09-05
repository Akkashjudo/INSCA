import { Mail, Phone } from "lucide-react";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { leadership } from "@/data/people";
import { contact } from "@/data/site";

/**
 * Office bearers, deliberately without portraits.
 *
 * This section only ever renders on /about, directly beneath the president's
 * message — which already carries his photograph at 260px. Repeating the same
 * face as a 72px avatar two hundred pixels later added nothing and made the
 * page feel like it owned one photograph. Dropping the avatar from just one
 * of the two cards would have left them lopsided, so both are type-led: the
 * role chip carries the hierarchy and a red rule anchors the card.
 */
export function LeadershipSection() {
  return (
    <section id="leadership" className="bg-canvas-2 section-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="Leadership"
          align="center"
          title={
            <>
              Guided by experienced{" "}
              <Accent>professionals</Accent>
            </>
          }
        />

        <RevealGroup
          className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2"
          staggerChildren={0.1}
        >
          {leadership.map((person) => (
            <RevealItem
              key={person.name}
              className="group flex h-full flex-col rounded-2xl border border-hairline bg-white p-6 transition-all duration-400 [transition-timing-function:var(--ease-insca)] hover:-translate-y-1 hover:border-insca-200 hover:shadow-[var(--shadow-lift)] sm:p-7"
            >
              <span
                aria-hidden="true"
                className="h-0.5 w-9 rounded-full bg-insca-500 transition-[width] duration-500 [transition-timing-function:var(--ease-insca)] group-hover:w-14"
              />

              <span className="mt-5 block font-display text-[0.7rem] font-bold uppercase tracking-[0.14em] text-insca-500">
                {person.role}
              </span>
              <h3 className="mt-1.5 font-display text-[1.15rem] font-bold leading-tight text-ink-900">
                {person.name}
              </h3>
              <p className="mt-1.5 text-[0.82rem] leading-snug text-ink-400">
                {person.org}
              </p>

              <p className="mt-5 flex-1 text-[0.9rem] leading-relaxed text-ink-500">
                {person.bio}
              </p>

              {/*
                Phone is personal to each office bearer; email is the single
                official INSCA address, so printing it on both cards simply
                showed the same string twice. It now appears once, below.
              */}
              <div className="mt-5 flex flex-wrap gap-2 border-t border-hairline pt-5">
                <a
                  href={person.phoneHref}
                  className="inline-flex min-h-9 items-center gap-2 rounded-full border border-hairline px-3.5 text-[0.82rem] font-medium text-ink-600 transition-colors duration-300 hover:border-insca-300 hover:text-insca-600"
                >
                  <Phone className="size-3.5" aria-hidden="true" />
                  {person.phone}
                </a>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mx-auto mt-8 max-w-4xl">
          <div className="rounded-2xl border border-hairline bg-white p-6 sm:p-8">
            <h3 className="font-display text-[1.05rem] font-bold text-ink-900">
              A multidisciplinary team behind every credential
            </h3>
            <p className="mt-3 text-[0.93rem] leading-relaxed text-ink-500">
              INSCA is powered by a multidisciplinary team of sports scientists,
              coaches, physiotherapists, educators, biomechanists, researchers and
              healthcare professionals — working together to build an environment where
              knowledge is shared, innovation is encouraged, and future leaders in
              Strength &amp; Conditioning are developed.
            </p>

            <a
              href={contact.emailHref}
              className="mt-5 inline-flex min-h-11 items-center gap-2.5 rounded-full border border-hairline px-4 font-display text-[0.85rem] font-semibold text-ink-700 transition-colors duration-300 hover:border-insca-300 hover:bg-insca-50 hover:text-insca-600"
            >
              <Mail className="size-4 text-insca-500" aria-hidden="true" />
              {contact.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
