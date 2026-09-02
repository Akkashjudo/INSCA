"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { m } from "framer-motion";
import { level1A } from "@/data/course";
import { EASE, viewportOnce } from "@/lib/motion";
import { Accent, SectionHeading } from "@/components/ui/section-heading";

/**
 * Curriculum accordion. Radix supplies the keyboard behaviour and ARIA
 * wiring; the height transition is CSS driven by Radix's own
 * --radix-accordion-content-height variable.
 */
export function Curriculum() {
  return (
    <section id="curriculum" className="scroll-mt-24 section-y">
      <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Complete curriculum"
            title={
              <>
                Fourteen modules across{" "}
                <Accent>four disciplines</Accent>
              </>
            }
            lead={`${level1A.hoursTotal} hours of structured learning, grouped so each block builds on the one before it.`}
          />

          <div className="mt-8 rounded-2xl border border-hairline bg-canvas-2 p-6">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.13em] text-ink-900">
              Practical sessions
            </h3>
            <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-500">
              Every module is paired with floor time. These are the applied
              components you will be coached through:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {level1A.practicals.map((p) => (
                <li
                  key={p}
                  className="rounded-lg border border-hairline bg-white px-2.5 py-1.5 text-[0.79rem] font-medium text-ink-600"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Accordion.Root
          type="multiple"
          defaultValue={[level1A.curriculum[0].group]}
          className="space-y-3"
        >
          {level1A.curriculum.map((block, i) => (
            <m.div
              key={block.group}
              data-reveal=""
              initial={{ opacity: 0.85, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.4, ease: EASE, delay: i * 0.04 }}
            >
              <Accordion.Item
                value={block.group}
                className="overflow-hidden rounded-2xl border border-hairline bg-white data-[state=open]:border-insca-200 data-[state=open]:shadow-[var(--shadow-card)]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 p-5 text-left transition-colors duration-300 hover:bg-canvas-2 sm:p-6">
                    <span className="flex items-baseline gap-3.5">
                      <span className="tabular font-display text-xs font-bold text-insca-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block font-display text-[1.05rem] font-bold leading-snug text-ink-900 sm:text-[1.15rem]">
                          {block.group}
                        </span>
                        <span className="mt-1 block text-[0.85rem] leading-snug text-ink-400">
                          {block.blurb}
                        </span>
                      </span>
                    </span>

                    <span className="grid size-8 shrink-0 place-items-center rounded-full border border-hairline text-ink-500 transition-all duration-400 [transition-timing-function:var(--ease-insca)] group-hover:border-insca-300 group-data-[state=open]:rotate-45 group-data-[state=open]:border-insca-500 group-data-[state=open]:bg-insca-500 group-data-[state=open]:text-white">
                      <Plus className="size-4" aria-hidden="true" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_260ms_var(--ease-insca)] data-[state=open]:animate-[accordion-down_260ms_var(--ease-insca)]">
                  <ul className="grid gap-px border-t border-hairline bg-hairline sm:grid-cols-2">
                    {block.modules.map((m) => (
                      <li
                        key={m}
                        className="flex items-center gap-3 bg-white px-5 py-3.5 text-[0.92rem] font-medium text-ink-700 sm:px-6"
                      >
                        <span
                          aria-hidden="true"
                          className="size-1.5 shrink-0 rotate-45 bg-insca-500"
                        />
                        {m}
                      </li>
                    ))}
                  </ul>
                </Accordion.Content>
              </Accordion.Item>
            </m.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
