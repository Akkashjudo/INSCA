import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { level1A } from "@/data/course";

export function Audience() {
  return (
    <section className="section-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="Who should attend"
          title={
            <>
              Built for people going into{" "}
              <Accent>elite sport</Accent>
            </>
          }
          lead="This is a certification for the performance side of sport. If your goal is a career working with athletes, this course is aimed squarely at you."
        />

        <RevealGroup
          className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3"
          staggerChildren={0.04}
        >
          {level1A.audience.map((item, i) => (
            <RevealItem
              key={item.title}
              className="group bg-white p-6 transition-colors duration-400 hover:bg-canvas-2 sm:p-7"
            >
              <span className="tabular font-display text-xs font-bold text-insca-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-[1.05rem] font-bold leading-snug text-ink-900">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink-500">
                {item.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
