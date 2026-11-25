import { CalendarDays, Clock, MapPin, Timer } from "lucide-react";
import { ArrowGlyph, ButtonLink } from "@/components/ui/button";
import { level1A } from "@/data/course";
import { venue } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * The registration block: the single most important thing on a course page.
 *
 * HIERARCHY
 * Event name → date → time → location → deadline → Register Now, read top to
 * bottom in that order at every width. The four facts sit on their own rows
 * with icons and uppercase labels so the eye can find "when is it" without
 * reading a paragraph, and the CTA closes the block rather than floating
 * somewhere above it.
 *
 * The panel is deliberately restrained — a hairline card with one red rule
 * and one red button. It earns attention through position and contrast with
 * the surrounding type, not through size.
 */

const rows = [
  {
    icon: CalendarDays,
    label: "Date",
    value: level1A.dateLabel,
    sub: `${level1A.durationDays} days · ${level1A.hoursTotal} hours total`,
  },
  {
    icon: Clock,
    label: "Time",
    value: level1A.timeLabel,
  },
  {
    icon: MapPin,
    label: "Location",
    value: level1A.venue,
    sub: `${venue.building}, SDAT, ${venue.street}, ${venue.locality} – ${venue.postalCode}`,
  },
  {
    icon: Timer,
    label: "Registration",
    value: level1A.admission,
    sub: "Places are limited and allocated in the order applications arrive.",
  },
];

export function RegistrationPanel({ className }: { className?: string }) {
  return (
    <aside
      aria-label="Registration details"
      className={cn(
        "overflow-hidden rounded-2xl border border-hairline bg-white shadow-[var(--shadow-card)]",
        className,
      )}
    >
      <span aria-hidden="true" className="block h-1 w-full bg-insca-500" />

      <div className="p-6 sm:p-7">
        <span className="t-eyebrow inline-flex items-center gap-2.5 text-insca-500">
          <span aria-hidden="true" className="size-1.5 rotate-45 bg-insca-500" />
          Registration open
        </span>

        {/*
          A real heading, not styled text: this panel is a titled section on
          both pages that use it, and on /contact it is the only h2 between
          the page h1 and the "Speak to the team" h3 below it.
        */}
        <h2 className="mt-3 font-display text-[1.15rem] font-bold leading-snug text-ink-900 sm:text-[1.3rem]">
          INSCA + SDAT {level1A.title}
        </h2>

        {/* Which running of the course these dates belong to. */}
        <p className="mt-2 inline-flex items-center rounded-full bg-insca-50 px-3 py-1 font-display text-[0.78rem] font-bold uppercase tracking-[0.1em] text-insca-600">
          {level1A.batch}
        </p>

        <dl className="mt-6 space-y-4 border-t border-hairline pt-5">
          {rows.map(({ icon: Icon, label, value, sub }) => (
            <div key={label} className="flex gap-3.5">
              <span
                aria-hidden="true"
                className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-insca-50 text-insca-500"
              >
                <Icon className="size-4" />
              </span>
              <div className="min-w-0">
                <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink-400">
                  {label}
                </dt>
                <dd className="mt-0.5 font-display text-[0.98rem] font-bold leading-snug text-ink-900">
                  {value}
                  {sub ? (
                    <span className="mt-0.5 block font-sans text-[0.82rem] font-normal leading-relaxed text-ink-500">
                      {sub}
                    </span>
                  ) : null}
                </dd>
              </div>
            </div>
          ))}
        </dl>

        <ButtonLink
          href={level1A.registrationUrl}
          size="lg"
          block
          className="mt-7"
        >
          Register Now
          <ArrowGlyph />
        </ButtonLink>
      </div>
    </aside>
  );
}
