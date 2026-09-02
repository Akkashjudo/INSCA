import { ArrowGlyph, ButtonLink } from "@/components/ui/button";
import { MaskedText } from "@/components/ui/masked-text";
import { AccreditationLockup } from "@/components/layout/brand";
import { level1A } from "@/data/course";
import { site } from "@/data/site";

/**
 * Homepage hero — typography-led, no photograph.
 *
 * A SERVER COMPONENT, deliberately. It previously used Framer Motion, which
 * server-renders its initial state as inline `opacity: 0` — so the first
 * screen stayed blank until the JS bundle downloaded, hydrated and resolved
 * its feature set. The entrance is now pure CSS (`.enter` / `.enter-line` in
 * globals.css), which runs as soon as the stylesheet parses. There is no
 * JavaScript on the critical path to first paint at all.
 *
 * Choreography is ~0.55s end to end; the last element starts moving at 250ms.
 */

const HEADLINE = ["Indian National", "Strength &", "Conditioning", "Association"];

const facts = [
  { k: "Venue", v: level1A.venueShort },
  { k: "Dates", v: level1A.dateLabelShort },
  { k: "Duration", v: `${level1A.durationDays} days` },
  { k: "Learning", v: `${level1A.hoursTotal} hours` },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-canvas-2 pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
      {/* Structural grid. The decorative bloom is desktop-only — a 150px blur
          is expensive to composite and buys nothing on a phone. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 hero-grid" />
        {/* Slow tracking line — desktop only, where there is room for it */}
        <div className="absolute inset-y-0 left-0 hidden w-px bg-gradient-to-b from-transparent via-insca-500/35 to-transparent hero-sweep lg:block" />
        <div className="absolute -right-40 top-[45%] hidden size-[460px] rounded-full bg-insca-500/[0.05] blur-[110px] lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-hairline" />
      </div>

      <div className="wrap relative">
        <div className="enter d-0 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="t-eyebrow inline-flex items-center gap-2.5 text-insca-500">
            <span aria-hidden="true" className="h-px w-8 bg-insca-500" />
            Est. {site.foundingDate}
          </span>
          <span className="tabular text-[0.72rem] font-medium uppercase tracking-[0.14em] text-ink-400">
            Reg. {site.registrationNo}
          </span>
        </div>

        <MaskedText
          as="h1"
          immediate
          delay={0.12}
          className="t-hero mt-7 text-ink-900 sm:mt-9"
          lines={HEADLINE.map((text, i) =>
            i === HEADLINE.length - 1 ? (
              <>
                {text}
                <span className="text-insca-500">.</span>
              </>
            ) : (
              text
            ),
          )}
        />

        <div className="mt-10 grid gap-8 border-t border-hairline pt-8 sm:mt-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-14">
          <div className="enter d-5 max-w-xl">
            <p className="font-display text-lg font-bold leading-snug text-ink-900 sm:text-xl">
              {level1A.positioning}
            </p>
            <p className="mt-3 text-[0.97rem] leading-relaxed text-ink-500">
              India&apos;s national professional body for Strength &amp; Conditioning —
              advancing education, certification and applied sports science.
            </p>
          </div>

          <div className="enter d-5 flex flex-col gap-3 min-[420px]:flex-row lg:shrink-0">
            <ButtonLink href="/courses/level-1a" variant="dark" size="lg">
              Explore Programs
              <ArrowGlyph />
            </ButtonLink>
            <ButtonLink href={level1A.registrationUrl} size="lg">
              Register Now
            </ButtonLink>
          </div>
        </div>

        <dl className="enter d-6 mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-hairline pt-8 sm:mt-12 sm:grid-cols-4">
          {facts.map(({ k, v }) => (
            <div key={k}>
              <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-ink-400">
                {k}
              </dt>
              <dd className="tabular mt-1.5 font-display text-[0.95rem] font-bold leading-snug text-ink-900">
                {v}
              </dd>
            </div>
          ))}
        </dl>

        <div className="enter d-6 mt-10">
          <AccreditationLockup />
        </div>
      </div>
    </section>
  );
}
