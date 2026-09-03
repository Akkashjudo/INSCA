import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { foundersMessage } from "@/data/site";
import { leadership } from "@/data/people";
import { fadeIn } from "@/lib/motion";

const founder = leadership[0];

export function FounderMessage() {
  return (
    <section id="founder" className="scroll-mt-24 section-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="President's message"
          title={
            <>
              A vision rooted in{" "}
              <Accent>India&apos;s heritage</Accent>
            </>
          }
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.62fr_1fr] lg:gap-16">
          <Reveal variants={fadeIn}>
            <div className="lg:sticky lg:top-28">
              <div className="relative mx-auto w-full max-w-[260px] lg:mx-0">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-canvas-3">
                  <Image
                    src={founder.photo}
                    alt={`${founder.name}, ${founder.role} of INSCA`}
                    fill
                    sizes="260px"
                    className="object-cover"
                  />
                </div>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-insca-500 px-4 py-1.5 font-display text-[0.7rem] font-bold uppercase tracking-[0.13em] text-white">
                  President — INSCA
                </span>
              </div>

              <div className="mt-9 text-center lg:text-left">
                <p className="font-display text-lg font-bold text-ink-900">
                  {founder.name}
                </p>
                <p className="mt-1 text-[0.88rem] text-ink-500">
                  {founder.role} — INSCA
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-1 -top-8 select-none font-display text-[7rem] leading-none text-insca-100 sm:-left-3 sm:text-[9rem]"
              >
                &ldquo;
              </span>

              <blockquote className="relative font-display text-xl font-bold leading-snug text-ink-900 sm:text-2xl">
                {foundersMessage.pullQuote}
              </blockquote>

              <div className="mt-8 space-y-5 text-ink-500 t-lead">
                {foundersMessage.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>

              <div className="mt-9 flex items-center gap-4 border-t border-hairline pt-7">
                <span aria-hidden="true" className="h-px w-10 bg-insca-500" />
                <div>
                  <p className="font-display font-bold text-ink-900">{founder.name}</p>
                  <p className="text-[0.84rem] text-insca-600">President, INSCA</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
