import Image from "next/image";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { experiencePillars } from "@/data/gallery";
import { fadeIn } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * "Inside the INSCA Experience".
 *
 * RESPONSIVE STRUCTURE
 * From `sm` up the copy is overlaid on the photograph, which has room to
 * carry it. Below `sm` the copy moves into normal flow beneath the image:
 * a title plus a sentence was covering 61–65% of a 208–256px tall frame,
 * burying the picture it was meant to caption. The text is never absolutely
 * positioned at mobile widths, so it cannot collide with the image.
 */

type PillarProps = {
  title: string;
  body: string;
  image: string;
  /** Focal point, art-directed per photograph. */
  position?: string;
  lead?: boolean;
};

function Pillar({ title, body, image, position = "center", lead = false }: PillarProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-hairline bg-white",
        "transition-all duration-400 [transition-timing-function:var(--ease-insca)]",
        "hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]",
        "sm:border-0",
        lead ? "sm:min-h-[26rem] sm:h-full" : "sm:h-60",
      )}
    >
      <div className="relative aspect-16/10 sm:absolute sm:inset-0 sm:aspect-auto">
        <Image
          src={image}
          alt={title}
          fill
          sizes={
            lead
              ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="object-cover transition-transform duration-700 [transition-timing-function:var(--ease-insca)] group-hover:scale-[1.04]"
          style={{ objectPosition: position }}
        />
        <div aria-hidden="true" className="absolute inset-0 hidden scrim-card sm:block" />
      </div>

      <div
        className={cn(
          "relative p-5",
          "sm:absolute sm:inset-x-0 sm:bottom-0",
          lead ? "sm:p-8" : "sm:p-5",
        )}
      >
        <h3
          className={cn(
            "font-display font-bold leading-snug text-ink-900 sm:text-white",
            lead ? "text-[1.15rem] sm:t-h3" : "text-base",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-2 leading-relaxed text-ink-500 sm:text-ink-200",
            lead ? "max-w-md text-[0.92rem] sm:text-[0.95rem]" : "text-[0.84rem] sm:text-ink-300",
          )}
        >
          {body}
        </p>
      </div>
    </article>
  );
}

/** Focal points chosen per photograph so subjects stay in frame. */
const FOCUS: Record<string, string> = {
  "/workshops/strength/barbell-hinge.webp": "52% 42%",
  "/workshops/testing/sprint-lineup.webp": "50% 38%",
  "/workshops/practical/box-jump.webp": "46% 40%",
  "/workshops/classroom/coach-talk.webp": "50% 35%",
  "/workshops/analysis/force-curve.webp": "28% center",
};

export function ExperiencePillars() {
  const [lead, ...rest] = experiencePillars;

  return (
    <section className="section-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="Inside the INSCA experience"
          title={
            <>
              Learning that happens <Accent>beyond the classroom</Accent>
            </>
          }
          lead="Level 1A is built around exposure — to real athletes, real testing equipment and the people who run high-performance systems for a living."
        />

        <RevealGroup
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          staggerChildren={0.05}
        >
          <RevealItem variants={fadeIn} className="sm:col-span-2 lg:row-span-2">
            <Pillar
              lead
              title={lead.title}
              body={lead.body}
              image={lead.image}
              position={FOCUS[lead.image]}
            />
          </RevealItem>

          {rest.map((pillar) => (
            <RevealItem key={pillar.title} variants={fadeIn}>
              <Pillar
                title={pillar.title}
                body={pillar.body}
                image={pillar.image}
                position={FOCUS[pillar.image]}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
