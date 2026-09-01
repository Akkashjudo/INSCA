"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowGlyph, ButtonLink } from "@/components/ui/button";
import { level1A } from "@/data/course";
import { EASE } from "@/lib/motion";

/**
 * Homepage hero.
 *
 * Deliberately spare: one badge, an eyebrow, the headline, one sentence, a
 * single line of course facts and two actions. The accreditation lockup and
 * the supporting proof points live in the trust strip immediately below, so
 * the hero does not have to carry them.
 *
 * Layout: on narrow screens the copy is bottom-anchored so the top of the
 * photograph stays clear; from `lg` up it sits left against a left-weighted
 * scrim, leaving the right of the frame close to untouched.
 */

const facts = [
  level1A.venueShort,
  level1A.dateLabelShort,
  `${level1A.durationDays} days`,
  `${level1A.hoursTotal} hours`,
];

const step = (i: number) => ({
  "data-reveal": "",
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay: 0.12 + i * 0.1 },
});

export function Hero() {
  return (
    <section className="on-dark relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden bg-ink-950 pb-14 pt-28 sm:min-h-[88svh] sm:pb-20 lg:min-h-[calc(100svh-76px)] lg:justify-center lg:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src="/workshops/practical/overhead-demo.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          /*
           * The coaching group and the lifting athlete sit right of centre.
           * Narrow screens pull the crop toward them; wide screens can show
           * more of the frame, since the copy only occupies the left.
           */
          className="object-cover object-[68%_38%] sm:object-[64%_42%] lg:object-[58%_center]"
        />
        <div className="absolute inset-0 scrim-bottom lg:hidden" />
        <div className="absolute inset-0 hidden lg:block scrim-left" />
      </div>

      <div className="wrap relative">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.div {...step(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-insca-500/40 bg-insca-500/15 px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-insca-400 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-insca-400" />
              </span>
              Limited Slots Available
            </span>
          </motion.div>

          <motion.p
            {...step(1)}
            className="mt-6 font-display text-[0.8rem] font-bold uppercase tracking-[0.22em] text-insca-400"
          >
            INSCA &times; SDAT
          </motion.p>

          <motion.h1 {...step(2)} className="t-display mt-3.5 text-white">
            Built for High
            <br />
            Performance <span className="text-insca-500">Sport.</span>
          </motion.h1>

          <motion.p {...step(3)} className="t-lead mt-5 max-w-lg text-ink-200">
            Ten days of evidence-based theory, applied sports science and
            hands-on coaching.
          </motion.p>

          <motion.ul
            {...step(4)}
            className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.85rem] font-medium text-ink-200 sm:gap-x-4"
          >
            {facts.map((fact, i) => (
              <li key={fact} className="flex items-center gap-3 sm:gap-4">
                {i > 0 ? (
                  <span aria-hidden="true" className="size-1 rounded-full bg-insca-500" />
                ) : null}
                {fact}
              </li>
            ))}
          </motion.ul>

          <motion.div
            {...step(5)}
            className="mt-9 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:items-center"
          >
            <ButtonLink href={level1A.registrationUrl} size="lg">
              Register Now
              <ArrowGlyph />
            </ButtonLink>
            <ButtonLink href="/courses/level-1a" variant="ghostLight" size="lg">
              Explore the Course
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
