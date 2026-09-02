"use client";

import { useEffect, useRef, useState } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";
import { level1A } from "@/data/course";
import { EASE, viewportOnce } from "@/lib/motion";
import { Accent, SectionHeading } from "@/components/ui/section-heading";

/**
 * Counts a numeric stat up when it enters the viewport.
 * Non-numeric values ("Real Athlete", "Expert") render as-is.
 */
function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const numeric = /^\d+$/.test(value);
  const target = numeric ? parseInt(value, 10) : 0;
  const [display, setDisplay] = useState(numeric ? "0" : value);

  useEffect(() => {
    if (!numeric || !inView) return;
    if (reduceMotion) {
      setDisplay(String(target));
      return;
    }

    let frame = 0;
    const duration = 1400;
    let start: number | null = null;

    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(String(Math.round(target * eased)));
      if (p < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, numeric, target, reduceMotion]);

  return (
    <span ref={ref} className="tabular">
      {display}
    </span>
  );
}

export function CourseStats() {
  return (
    <section className="bg-canvas-2 section-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="Course overview"
          align="center"
          title={
            <>
              Build your career in{" "}
              <Accent>high-performance sport</Accent>
            </>
          }
          lead={level1A.overview}
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {level1A.stats.map((stat, i) => (
            <m.div
              key={stat.label}
              data-reveal=""
              initial={{ opacity: 0.85, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.4, ease: EASE, delay: i * 0.045 }}
              className="rounded-2xl border border-hairline bg-white p-5 text-center sm:p-6 last:max-lg:col-span-2"
            >
              <div className="font-display text-2xl font-bold leading-none text-insca-500 sm:text-3xl">
                <StatValue value={stat.value} />
              </div>
              <div className="mt-2.5 text-[0.82rem] font-medium leading-snug text-ink-500">
                {stat.label}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
