import Image from "next/image";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { initialsOf, level1AFaculty, type Person } from "@/data/people";
import { cn } from "@/lib/utils";

/**
 * Faculty cards.
 *
 * PORTRAIT FRAME
 * The photograph leads the card, in a 4:5 frame — the same ratio every file
 * in /public/people is cut to, so `object-cover` has nothing left to crop and
 * no head can be clipped at any width. That is why there is no per-person
 * focal point here: the framing decision was made once, on the source image,
 * where it can be seen. `photoPosition` stays supported for any future
 * headshot that arrives in a different shape.
 *
 * LAYOUT
 * `flex-wrap` rather than a grid so the seventh card centres itself on the
 * last row instead of hanging off the left edge. Every card is the same
 * width at a given breakpoint and stretches to the tallest in its row, so
 * the images line up across the section.
 *
 * The grid goes to two columns at 420px rather than waiting for `sm`: a
 * full-width 4:5 portrait on a 390px phone is ~440px tall, and seven of them
 * turned the section into four thousand pixels of scrolling. One column is
 * kept below 420px, where two would leave the names too cramped to read.
 *
 * Where INSCA has no photograph the card renders an initials monogram in the
 * same frame — deliberately, rather than substituting a stock or generated
 * portrait for a real person.
 */
function FacultyCard({ person }: { person: Person }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-white",
        "transition-[transform,border-color,box-shadow] duration-400 [transition-timing-function:var(--ease-insca)]",
        "hover:-translate-y-1.5 hover:border-insca-300 hover:shadow-[var(--shadow-lift)]",
        "motion-reduce:hover:translate-y-0",
      )}
    >
      <div className="relative aspect-4/5 w-full overflow-hidden bg-canvas-3">
        {person.photo ? (
          <Image
            src={person.photo}
            alt={`${person.name}, ${person.role}${person.org ? ` — ${person.org}` : ""}`}
            fill
            /* Mirrors the width classes below: 1 column under 420px, 2 up to
               the lg breakpoint, then a fixed 365px card at desktop. */
            sizes="(max-width: 419px) 92vw, (max-width: 1023px) 46vw, 365px"
            className="object-cover transition-transform duration-700 [transition-timing-function:var(--ease-insca)] group-hover:scale-[1.035] motion-reduce:transition-none"
            style={person.photoPosition ? { objectPosition: person.photoPosition } : undefined}
          />
        ) : (
          <span
            aria-hidden="true"
            className={cn(
              "absolute inset-0 grid place-items-center",
              "bg-gradient-to-br from-ink-900 to-ink-700",
              "font-display text-4xl font-bold tracking-tight text-white",
              "transition-colors duration-500 group-hover:from-insca-700 group-hover:to-insca-500",
            )}
          >
            {initialsOf(person.name)}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
        <h3 className="font-display text-[0.98rem] font-bold leading-tight text-ink-900 sm:text-[1.05rem]">
          {person.name}
        </h3>
        <p className="mt-1.5 text-[0.84rem] font-medium leading-snug text-insca-600 sm:text-[0.88rem]">
          {person.role}
        </p>
        {person.org ? (
          <p className="mt-1 text-[0.79rem] leading-snug text-ink-400 sm:text-[0.82rem]">
            {person.org}
          </p>
        ) : null}

        {person.credentials?.length ? (
          <>
            {/*
              A growing spacer rather than `mt-auto`, so the chips sit at the
              foot of the card — the rule above them then lines up across a
              row whatever each person's text runs to — while `min-h`
              guarantees a gap even when the text fills the card and the
              spacer collapses.
            */}
            <div aria-hidden="true" className="min-h-3.5 flex-1 sm:min-h-4" />
            <ul className="flex flex-wrap gap-1.5 border-t border-hairline pt-3.5 sm:pt-4">
              {person.credentials.map((c) => (
                <li
                  key={c}
                  className="rounded-md bg-canvas-2 px-2 py-1 text-[0.72rem] font-medium text-ink-500 transition-colors duration-300 group-hover:bg-insca-50 group-hover:text-insca-700"
                >
                  {c}
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>

      {/* Accent rule sweeps across on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-insca-500 transition-transform duration-500 [transition-timing-function:var(--ease-insca)] group-hover:scale-x-100"
      />
    </article>
  );
}

export function FacultySection() {
  return (
    <section id="faculty" className="bg-canvas-2 section-y">
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
          className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4"
          staggerChildren={0.04}
        >
          {level1AFaculty.map((person) => (
            <RevealItem
              key={person.name}
              className="w-full min-[420px]:w-[calc(50%-0.375rem)] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
            >
              <FacultyCard person={person} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
