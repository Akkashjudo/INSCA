import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { leadership } from "@/data/people";

export function LeadershipSection() {
  return (
    <section id="leadership" className="scroll-mt-24 bg-canvas-2 section-y">
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
              <div className="flex items-center gap-4">
                <span className="relative size-[4.5rem] shrink-0 overflow-hidden rounded-xl bg-canvas-3">
                  <Image
                    src={person.photo}
                    alt={`${person.name}, ${person.role} of INSCA`}
                    fill
                    sizes="72px"
                    className="object-cover"
                    style={{
                      objectPosition:
                        "photoPosition" in person ? person.photoPosition : "50% 20%",
                    }}
                  />
                </span>
                <div className="min-w-0">
                  <span className="font-display text-[0.7rem] font-bold uppercase tracking-[0.14em] text-insca-500">
                    {person.role}
                  </span>
                  <h3 className="mt-1 font-display text-[1.15rem] font-bold leading-tight text-ink-900">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-[0.8rem] leading-snug text-ink-400">
                    {person.org}
                  </p>
                </div>
              </div>

              <p className="mt-5 flex-1 text-[0.9rem] leading-relaxed text-ink-500">
                {person.bio}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-hairline pt-5">
                <a
                  href={person.phoneHref}
                  className="inline-flex min-h-9 items-center gap-2 rounded-full border border-hairline px-3.5 text-[0.82rem] font-medium text-ink-600 transition-colors duration-300 hover:border-insca-300 hover:text-insca-600"
                >
                  <Phone className="size-3.5" aria-hidden="true" />
                  {person.phone}
                </a>
                <a
                  href={`mailto:${person.email}`}
                  className="inline-flex min-h-9 items-center gap-2 rounded-full border border-hairline px-3.5 text-[0.82rem] font-medium text-ink-600 transition-colors duration-300 hover:border-insca-300 hover:text-insca-600"
                >
                  <Mail className="size-3.5" aria-hidden="true" />
                  {person.email}
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
