import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { level1A } from "@/data/course";

/**
 * The ten course advantages, presented as cards rather than a numbered
 * wall of text. The lead card is emphasised so the grid has a focal point.
 */
export function Advantages() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink-900 section-y">
      <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -left-24 bottom-0 hidden size-[380px] rounded-full bg-insca-500/10 blur-[90px] lg:block"
      />

      <div className="wrap relative">
        <SectionHeading
          eyebrow="Course advantages"
          tone="dark"
          title={
            <>
              Ten reasons this certification{" "}
              <Accent tone="dark">stands apart</Accent>
            </>
          }
          lead="Everything below is what Level 1A actually delivers — the practical grounding, the access, and the credential itself."
        />

        <RevealGroup
          className="mt-12 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
          staggerChildren={0.05}
        >
          {level1A.advantages.map((adv, i) => (
            <RevealItem
              key={adv.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-400 [transition-timing-function:var(--ease-insca)] hover:-translate-y-1 hover:border-insca-500/45 hover:bg-white/[0.07]"
            >
              <span
                aria-hidden="true"
                className="tabular font-display text-[0.72rem] font-bold tracking-[0.14em] text-insca-400"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-3.5 font-display text-[1.02rem] font-bold leading-snug text-white">
                {adv.title}
              </h3>
              <p className="mt-2.5 text-[0.89rem] leading-relaxed text-ink-400">
                {adv.body}
              </p>

              {/* Bottom rule that fills on hover */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px w-0 bg-insca-500 transition-[width] duration-500 [transition-timing-function:var(--ease-insca)] group-hover:w-full"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
