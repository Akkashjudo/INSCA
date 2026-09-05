import { Award, GraduationCap, HeartPulse, ShieldCheck } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SdatLogo } from "@/components/layout/brand";
import { site } from "@/data/site";

const marks = [
  {
    icon: ShieldCheck,
    title: "Registered National Body",
    body: `A registered professional association — Reg. No. ${site.registrationNo}.`,
  },
  {
    icon: Award,
    title: "INSCA + SDAT Accredited",
    body: "Delivered in collaboration with the Sports Development Authority of Tamil Nadu.",
  },
  {
    icon: GraduationCap,
    title: "Evidence-Based Curriculum",
    body: "Built on current sports science and taught through applied coaching practice.",
  },
  {
    icon: HeartPulse,
    title: "Certification Without Expiry",
    body: "No repeated certification and no expiry requirement.",
  },
];

export function TrustStrip() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="border-b border-hairline section-y-sm"
    >
      <div className="wrap">
        {/*
          The four marks below are <h3>, which left the homepage outline
          jumping straight from the h1 to h3 — this section is shown without
          a heading by design, so it gets one for the outline and for screen
          readers rather than a visible one being invented.
        */}
        <h2 id="trust-heading" className="sr-only">
          Accreditation and standards
        </h2>

        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerChildren={0.05}>
          {marks.map(({ icon: Icon, title, body }) => (
            <RevealItem key={title} className="flex gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-insca-50 text-insca-500">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-[0.95rem] font-bold leading-snug text-ink-900">
                  {title}
                </h3>
                <p className="mt-1.5 text-[0.86rem] leading-relaxed text-ink-500">
                  {body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-11 flex flex-col items-center gap-5 rounded-2xl border border-hairline bg-canvas-2 px-6 py-6 text-center sm:flex-row sm:justify-center sm:gap-7 sm:text-left">
          <SdatLogo className="w-14 shrink-0" />
          <p className="max-w-xl text-[0.92rem] leading-relaxed text-ink-500">
            <strong className="font-semibold text-ink-900">
              In collaboration with SDAT.
            </strong>{" "}
            INSCA programmes are delivered at the Tamil Nadu Centre for Sports Science,
            the Sports Development Authority of Tamil Nadu&apos;s high-performance
            facility in Chennai.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
