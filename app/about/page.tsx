import type { Metadata } from "next";
import Image from "next/image";

import { PageHeader } from "@/components/layout/page-header";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { FounderMessage } from "@/components/people/founder-message";
import { LeadershipSection } from "@/components/people/leadership-section";
import { FinalCta } from "@/components/course/final-cta";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { aboutParagraphs, missionPoints, site, vision } from "@/data/site";
import { fadeIn } from "@/lib/motion";

export const metadata: Metadata = {
  title: "About INSCA",
  description:
    "INSCA is India's national professional body for Strength & Conditioning — advancing education, certification, research and applied sports science. Read our vision, mission and leadership.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <PageHeader
        eyebrow="Who we are"
        title={
          <>
            India&apos;s national body for
            <br className="hidden sm:block" /> Strength &amp; Conditioning
          </>
        }
        lead={aboutParagraphs[0]}
        image="/workshops/classroom/full-room.webp"
        imagePosition="50% 40%"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About INSCA", href: "/about" },
        ]}
      >
        <p className="tabular mt-7 text-sm text-ink-500">
          Registration No. {site.registrationNo} · Established {site.foundingDate}
        </p>
      </PageHeader>

      {/* Purpose + vision */}
      <section className="section-y">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our purpose"
              title={
                <>
                  Raising the standard of{" "}
                  <Accent>the profession</Accent>
                </>
              }
            />
            <Reveal delay={0.08}>
              <div className="mt-7 space-y-5 text-ink-500 t-lead">
                <p>{aboutParagraphs[1]}</p>
                <p>
                  The primary objective of INSCA is to advance the principles,
                  education, training, research and practical application of Strength
                  &amp; Conditioning in India. By integrating scientific evidence with
                  practical application, INSCA strengthens India&apos;s sports
                  performance ecosystem while contributing to the global advancement of
                  the field.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal variants={fadeIn} delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative aspect-4/3">
                <Image
                  src="/workshops/archive/cohort-2024.webp"
                  alt="An earlier INSCA workshop cohort with visiting faculty at TACSS, Chennai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-insca-200 bg-insca-50 p-6 sm:p-7">
              <span className="t-eyebrow text-insca-600">Our vision</span>
              <p className="mt-3.5 font-display text-[1.05rem] font-bold leading-snug text-ink-900">
                A global leader in applied sports science
              </p>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-600">
                {vision}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="on-dark relative overflow-hidden bg-ink-950 section-y">
        <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-60" />
        <div className="wrap relative">
          <SectionHeading
            eyebrow="Our mission"
            tone="dark"
            align="center"
            title={
              <>
                Eight commitments to a{" "}
                <Accent tone="dark">stronger India</Accent>
              </>
            }
          />

          <RevealGroup
            className="mt-12 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
            staggerChildren={0.05}
          >
            {missionPoints.map((point, i) => (
              <RevealItem
                key={point.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-400 [transition-timing-function:var(--ease-insca)] hover:-translate-y-1 hover:border-insca-500/45 hover:bg-white/[0.07]"
              >
                <span className="tabular font-display text-[0.72rem] font-bold tracking-[0.14em] text-insca-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-[0.98rem] font-bold leading-snug text-white">
                  {point.title}
                </h3>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-ink-400">
                  {point.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <FounderMessage />
      <LeadershipSection />
      <FinalCta />
    </>
  );
}
