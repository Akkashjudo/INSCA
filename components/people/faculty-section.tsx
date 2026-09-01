import Image from "next/image";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { initialsOf, level1AFaculty, type Person } from "@/data/people";
import { cn } from "@/lib/utils";

/**
 * Faculty cards.
 *
 * Where INSCA has a genuine photograph we use it. Where it does not, the card
 * renders an initials monogram — deliberately, rather than substituting a
 * stock or generated portrait for a real person.
 */
function FacultyCard({ person }: { person: Person }) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-hairline bg-white p-5 sm:p-6",
        "transition-all duration-400 [transition-timing-function:var(--ease-insca)]",
        "hover:-translate-y-1 hover:border-insca-200 hover:shadow-[var(--shadow-lift)]",
      )}
    >
      <div className="flex items-center gap-4">
        {person.photo ? (
          <span className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-canvas-3 sm:size-[4.5rem]">
            <Image
              src={person.photo}
              alt={person.name}
              fill
              sizes="72px"
              className="object-cover"
              style={{ objectPosition: person.photoPosition ?? "50% 20%" }}
            />
          </span>
        ) : (
          <span
            aria-hidden="true"
            className={cn(
              "grid size-16 shrink-0 place-items-center rounded-xl sm:size-[4.5rem]",
              "bg-gradient-to-br from-ink-900 to-ink-700",
              "font-display text-lg font-bold tracking-tight text-white",
              "ring-1 ring-inset ring-white/10",
            )}
          >
            {initialsOf(person.name)}
          </span>
        )}

        <div className="min-w-0">
          <h3 className="font-display text-[1.02rem] font-bold leading-tight text-ink-900">
            {person.name}
          </h3>
          <p className="mt-1 text-[0.86rem] font-medium leading-snug text-insca-600">
            {person.role}
          </p>
          {person.org ? (
            <p className="mt-0.5 text-[0.82rem] leading-snug text-ink-400">
              {person.org}
            </p>
          ) : null}
        </div>
      </div>

      {person.credentials?.length ? (
        <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-hairline pt-4">
          {person.credentials.map((c) => (
            <li
              key={c}
              className="rounded-md bg-canvas-2 px-2 py-1 text-[0.72rem] font-medium text-ink-500 transition-colors duration-300 group-hover:bg-insca-50 group-hover:text-insca-700"
            >
              {c}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export function FacultySection() {
  return (
    <section id="faculty" className="scroll-mt-24 bg-canvas-2 section-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="Expert faculty guidance"
          align="center"
          title={
            <>
              Taught by people who work in{" "}
              <Accent>elite sport</Accent>
            </>
          }
          lead="Level 1A is delivered by practitioners from SDAT's high-performance centre, national federations and professional sport — not by career lecturers alone."
        />

        <RevealGroup
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          staggerChildren={0.06}
        >
          {level1AFaculty.map((person) => (
            <RevealItem key={person.name} className="h-full">
              <FacultyCard person={person} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
