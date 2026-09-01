import Image from "next/image";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { experiencePillars } from "@/data/gallery";
import { fadeIn } from "@/lib/motion";

/**
 * "Inside the INSCA Experience" — a bento layout where the lead pillar spans
 * two columns. Each card is a real workshop photograph, not an illustration.
 */
export function ExperiencePillars() {
  const [lead, ...rest] = experiencePillars;

  return (
    <section className="section-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="Inside the INSCA experience"
          title={
            <>
              Learning that happens{" "}
              <Accent>beyond the classroom</Accent>
            </>
          }
          lead="Level 1A is built around exposure — to real athletes, real testing equipment and the people who run high-performance systems for a living."
        />

        <RevealGroup
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          staggerChildren={0.08}
        >
          {/* Lead pillar — spans two columns on large screens */}
          <RevealItem
            variants={fadeIn}
            className="group relative overflow-hidden rounded-2xl sm:col-span-2 lg:row-span-2"
          >
            <div className="relative h-64 sm:h-full sm:min-h-[26rem]">
              <Image
                src={lead.image}
                alt={lead.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 [transition-timing-function:var(--ease-insca)] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 scrim-card" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h3 className="t-h3 text-white">{lead.title}</h3>
                <p className="mt-2.5 max-w-md text-[0.95rem] leading-relaxed text-ink-200">
                  {lead.body}
                </p>
              </div>
            </div>
          </RevealItem>

          {rest.map((pillar) => (
            <RevealItem
              key={pillar.title}
              variants={fadeIn}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative h-52 sm:h-60">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 [transition-timing-function:var(--ease-insca)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 scrim-card" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-base font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-[0.84rem] leading-relaxed text-ink-300">
                    {pillar.body}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
