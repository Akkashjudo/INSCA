import { Check } from "lucide-react";
import { ArrowGlyph, ButtonLink } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { AccreditationLockup } from "@/components/layout/brand";
import { level1A, formatFee } from "@/data/course";
import { venue } from "@/data/site";
import { cn } from "@/lib/utils";

const rows = [
  { k: "Programme", v: `INSCA + SDAT ${level1A.title}` },
  { k: "Batch", v: level1A.batch },
  {
    k: "Venue",
    v: level1A.venue,
    sub: `${venue.building}, SDAT, ${venue.street}, ${venue.locality} – ${venue.postalCode}`,
  },
  { k: "Dates", v: level1A.dateLabel },
  { k: "Time", v: level1A.timeLabel },
  { k: "Duration", v: level1A.durationLabel },
  { k: "Learning duration", v: `${level1A.hoursTotal} hours` },
  {
    k: "Registration",
    v: level1A.admission,
    sub: `Limited slots · Early Bird closes ${level1A.earlyBirdDeadlineLabel}`,
  },
  { k: "Certification", v: level1A.certification },
];

export function CourseDetails() {
  return (
    <section id="details" className="bg-canvas-2 section-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="Course details"
          title={
            <>
              Everything you need to <Accent>be there</Accent>
            </>
          }
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          {/* Detail table */}
          <Reveal>
            <dl className="overflow-hidden rounded-2xl border border-hairline bg-white">
              {rows.map((row, i) => (
                <div
                  key={row.k}
                  className={cn(
                    "grid gap-1 px-5 py-4 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-5 sm:px-6 sm:py-5",
                    i > 0 && "border-t border-hairline",
                  )}
                >
                  <dt className="text-[0.78rem] font-semibold uppercase tracking-[0.11em] text-ink-400">
                    {row.k}
                  </dt>
                  <dd>
                    <span className="block font-medium leading-snug text-ink-900">
                      {row.v}
                    </span>
                    {row.sub ? (
                      <span className="mt-1 block text-[0.85rem] leading-relaxed text-ink-400">
                        {row.sub}
                      </span>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6">
              <AccreditationLockup />
            </div>
          </Reveal>

          {/* Pricing + inclusions */}
          <div className="space-y-5">
            <RevealGroup
              className={cn("grid gap-4", level1A.fees.length > 1 && "sm:grid-cols-2")}
              staggerChildren={0.05}
            >
              {level1A.fees.map((fee) => (
                <RevealItem
                  key={fee.label}
                  className={cn(
                    "relative flex flex-col rounded-2xl border p-6",
                    fee.featured
                      ? "border-insca-500 bg-white shadow-[var(--shadow-lift)]"
                      : "border-hairline bg-white",
                  )}
                >
                  {fee.featured && level1A.fees.length > 1 ? (
                    <span className="absolute -top-2.5 left-6 rounded-full bg-insca-500 px-3 py-1 font-display text-[0.72rem] font-bold uppercase tracking-[0.13em] text-white">
                      Save{" "}
                      {formatFee(
                        Math.max(...level1A.fees.map((f) => f.amount)) - fee.amount,
                      )}
                    </span>
                  ) : null}

                  <span className="font-display text-[0.8rem] font-bold uppercase tracking-[0.13em] text-ink-400">
                    {fee.label}
                  </span>
                  <span
                    className={cn(
                      "tabular mt-2 font-display text-3xl font-bold leading-none",
                      fee.featured ? "text-insca-500" : "text-ink-900",
                    )}
                  >
                    {formatFee(fee.amount)}
                  </span>
                  <span className="mt-3 text-[0.83rem] leading-relaxed text-ink-500">
                    {fee.condition}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.06}>
              <div className="rounded-2xl border border-hairline bg-white p-6">
                <h3 className="font-display text-[0.8rem] font-bold uppercase tracking-[0.13em] text-ink-900">
                  What&apos;s included
                </h3>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {level1A.included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full bg-insca-50 text-insca-500">
                        <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="text-[0.88rem] leading-snug text-ink-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-2xl border border-insca-200 bg-insca-50 p-6">
                <p className="font-display text-base font-bold text-ink-900">
                  Slots are limited and allocated first come, first serve.
                </p>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-600">
                  Early Bird pricing closes {level1A.earlyBirdDeadlineLabel} —
                  after that the fee is{" "}
                  {formatFee(Math.max(...level1A.fees.map((f) => f.amount)))}.
                </p>
                <ButtonLink
                  href={level1A.registrationUrl}
                  size="lg"
                  block
                  className="mt-5"
                >
                  Secure Your Seat
                  <ArrowGlyph />
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
