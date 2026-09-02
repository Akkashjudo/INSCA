"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { m } from "framer-motion";
import { faqs } from "@/data/faq";
import { EASE, viewportOnce } from "@/lib/motion";
import { Accent, SectionHeading } from "@/components/ui/section-heading";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 section-y">
      <div className="wrap-tight">
        <SectionHeading
          eyebrow="FAQ"
          align="center"
          title={
            <>
              Questions, <Accent>answered</Accent>
            </>
          }
        />

        <Accordion.Root type="single" collapsible defaultValue={faqs[0].question} className="mt-11">
          {faqs.map((item, i) => (
            <m.div
              key={item.question}
              data-reveal=""
              initial={{ opacity: 0.85, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.38, ease: EASE, delay: i * 0.03 }}
            >
              <Accordion.Item
                value={item.question}
                className="border-b border-hairline"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-5 py-5 text-left">
                    <span className="font-display text-[1.02rem] font-semibold leading-snug text-ink-900 transition-colors duration-300 group-hover:text-insca-600 sm:text-[1.1rem]">
                      {item.question}
                    </span>
                    <span className="grid size-8 shrink-0 place-items-center rounded-full border border-hairline text-ink-500 transition-all duration-400 [transition-timing-function:var(--ease-insca)] group-data-[state=open]:rotate-45 group-data-[state=open]:border-insca-500 group-data-[state=open]:bg-insca-500 group-data-[state=open]:text-white">
                      <Plus className="size-4" aria-hidden="true" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_260ms_var(--ease-insca)] data-[state=open]:animate-[accordion-down_260ms_var(--ease-insca)]">
                  <p className="max-w-2xl pb-6 pr-10 text-[0.94rem] leading-relaxed text-ink-500">
                    {item.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            </m.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
