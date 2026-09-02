"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowGlyph, ButtonLink } from "@/components/ui/button";
import { AccreditationLockup } from "@/components/layout/brand";
import { level1A } from "@/data/course";
import { site } from "@/data/site";
import { EASE } from "@/lib/motion";

/**
 * Homepage hero — typography-led, no photograph.
 *
 * The organisation's own name is the artwork: four lines of tight display
 * type on an off-white ground, with a single red accent. Supporting copy and
 * a data strip of course facts sit beneath a hairline rule, so the section
 * reads as an institutional masthead rather than a marketing banner.
 *
 * Photography still carries the rest of the page — it simply does not belong
 * behind the headline, where it fought the type for attention.
 */

const HEADLINE = ["Indian National", "Strength &", "Conditioning", "Association"];

const facts = [
  { k: "Venue", v: level1A.venueShort },
  { k: "Dates", v: level1A.dateLabelShort },
  { k: "Duration", v: `${level1A.durationDays} days` },
  { k: "Learning", v: `${level1A.hoursTotal} hours` },
];

export function Hero() {
  const reduce = useReducedMotion();

  /** Line mask: each line rises out of its own clipped box. */
  const line = (i: number) =>
    reduce
      ? {}
      : {
          initial: { y: "108%" },
          animate: { y: "0%" },
          transition: { duration: 0.85, ease: EASE, delay: 0.15 + i * 0.09 },
        };

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: EASE, delay },
        };

  return (
    <section className="relative isolate overflow-hidden bg-canvas-2 pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
      {/* Structural grid + a single restrained red bloom */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute -right-40 top-[45%] size-[560px] rounded-full bg-insca-500/[0.045] blur-[150px]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-hairline" />
      </div>

      <div className="wrap relative">
        {/* Eyebrow */}
        <motion.div
          {...fade(0.05)}
          data-reveal=""
          className="flex flex-wrap items-center gap-x-4 gap-y-2"
        >
          <span className="t-eyebrow inline-flex items-center gap-2.5 text-insca-500">
            <span aria-hidden="true" className="h-px w-8 bg-insca-500" />
            Est. {site.foundingDate}
          </span>
          <span className="tabular text-[0.72rem] font-medium uppercase tracking-[0.14em] text-ink-400">
            Reg. {site.registrationNo}
          </span>
        </motion.div>

        {/* The name, as the artwork */}
        <h1 className="t-hero mt-7 text-ink-900 sm:mt-9">
          {HEADLINE.map((text, i) => (
            <span key={text} className="block overflow-hidden pb-[0.06em]">
              <motion.span {...line(i)} data-reveal="" className="block">
                {text}
                {i === HEADLINE.length - 1 ? (
                  <span className="text-insca-500">.</span>
                ) : null}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Statement + actions */}
        <div className="mt-10 grid gap-8 border-t border-hairline pt-8 sm:mt-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-14">
          <motion.div {...fade(0.62)} data-reveal="" className="max-w-xl">
            <p className="font-display text-lg font-bold leading-snug text-ink-900 sm:text-xl">
              {level1A.positioning}
            </p>
            <p className="mt-3 text-[0.97rem] leading-relaxed text-ink-500">
              India&apos;s national professional body for Strength &amp; Conditioning —
              advancing education, certification and applied sports science.
            </p>
          </motion.div>

          <motion.div
            {...fade(0.72)}
            data-reveal=""
            className="flex flex-col gap-3 min-[420px]:flex-row lg:shrink-0"
          >
            <ButtonLink href="/courses/level-1a" variant="dark" size="lg">
              Explore Programs
              <ArrowGlyph />
            </ButtonLink>
            <ButtonLink href={level1A.registrationUrl} size="lg">
              Register Now
            </ButtonLink>
          </motion.div>
        </div>

        {/* Data strip — the current programme, stated as facts */}
        <motion.dl
          {...fade(0.82)}
          data-reveal=""
          className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-hairline pt-8 sm:grid-cols-4 sm:mt-12"
        >
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
        </motion.dl>

        <motion.div {...fade(0.9)} data-reveal="" className="mt-10">
          <AccreditationLockup />
        </motion.div>
      </div>
    </section>
  );
}
