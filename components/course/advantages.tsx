import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ReadMore } from "@/components/ui/read-more";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { level1A } from "@/data/course";

/**
 * The ten course advantages.
 *
 * Ten cards of title-plus-paragraph landed as a wall — roughly 300 words in
 * one dark block, immediately after the six-card audience grid above it. Six
 * are shown (two full rows at desktop, three at tablet) and the remaining
 * four open on request. They stay in the DOM either way, so nothing is
 * hidden from search or from a screen reader.
 */

const PRIMARY = 6;

const GRID = "grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3";

const CARD = [
  "group relative flex h-full flex-col overflow-hidden rounded-2xl",
  "border border-white/10 bg-white/[0.035] p-6",
  "transition-all duration-400 [transition-timing-function:var(--ease-insca)]",
  "hover:-translate-y-1 hover:border-insca-500/45 hover:bg-white/[0.07]",
].join(" ");

function AdvantageBody({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  return (
    <>
      <span
        aria-hidden="true"
        className="tabular font-display text-[0.72rem] font-bold tracking-[0.14em] text-insca-400"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="mt-3.5 font-display text-[1.02rem] font-bold leading-snug text-white">
        {title}
      </h3>
      <p className="mt-2.5 text-[0.89rem] leading-relaxed text-ink-400">{body}</p>

      {/* Bottom rule that fills on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px w-0 bg-insca-500 transition-[width] duration-500 [transition-timing-function:var(--ease-insca)] group-hover:w-full"
      />
    </>
  );
}

export function Advantages() {
  const primary = level1A.advantages.slice(0, PRIMARY);
  const extra = level1A.advantages.slice(PRIMARY);

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

        <RevealGroup className={`mt-12 ${GRID}`} staggerChildren={0.05}>
          {primary.map((adv, i) => (
            <RevealItem key={adv.title} className={CARD}>
              <AdvantageBody index={i} title={adv.title} body={adv.body} />
            </RevealItem>
          ))}
        </RevealGroup>

        {extra.length ? (
          <ReadMore
            tone="dark"
            align="center"
            moreLabel={`View all ${level1A.advantages.length} advantages`}
            lessLabel="Show fewer"
          >
            {/*
              The same column template and gap as the grid above, with the
              row gap carried as padding INSIDE the collapsible region so it
              collapses along with the cards and leaves no dead space.
            */}
            <div className={`${GRID} pt-3 sm:pt-4`}>
              {extra.map((adv, i) => (
                <div key={adv.title} className={CARD}>
                  <AdvantageBody
                    index={PRIMARY + i}
                    title={adv.title}
                    body={adv.body}
                  />
                </div>
              ))}
            </div>
          </ReadMore>
        ) : null}
      </div>
    </section>
  );
}
