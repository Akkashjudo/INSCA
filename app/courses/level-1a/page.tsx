import type { Metadata } from "next";
import { CalendarDays, Clock, MapPin, ShieldCheck } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { ArrowGlyph, ButtonLink } from "@/components/ui/button";
import { CourseStats } from "@/components/course/course-stats";
import { Audience } from "@/components/course/audience";
import { Advantages } from "@/components/course/advantages";
import { FocusAreas } from "@/components/course/focus-areas";
import { Curriculum } from "@/components/course/curriculum";
import { CourseDetails } from "@/components/course/course-details";
import { WhyInsca } from "@/components/course/why-insca";
import { Faq } from "@/components/course/faq";
import { FinalCta } from "@/components/course/final-cta";
import { FacultySection } from "@/components/people/faculty-section";
import { WorkshopShowcase } from "@/components/gallery/workshop-showcase";
import { CourseSchema, FaqSchema, BreadcrumbSchema } from "@/components/seo/schema";
import { level1A } from "@/data/course";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "Level 1A Strength & Conditioning Certification",
  description:
    "Join the INSCA + SDAT Level 1A Strength & Conditioning Certification in Chennai. A 10-day, 80-hour high-performance course featuring practical coaching, athlete monitoring, Olympic lifting, speed development and applied sports science.",
  alternates: { canonical: "/courses/level-1a" },
  openGraph: {
    title: "INSCA + SDAT Level 1A Strength & Conditioning Certification",
    description: `${level1A.durationDays} days. ${level1A.hoursTotal} hours. ${level1A.positioning}. ${level1A.venueShort} — ${level1A.dateLabel}.`,
    url: "/courses/level-1a",
  },
};

const meta = [
  { icon: MapPin, label: "Location", value: level1A.venueShort },
  { icon: CalendarDays, label: "Dates", value: level1A.dateLabelShort },
  {
    icon: Clock,
    label: "Duration",
    value: `${level1A.durationDays} days · ${level1A.hoursTotal} hours`,
  },
  { icon: ShieldCheck, label: "Certification", value: "INSCA + SDAT Accredited" },
];

export default function Level1APage() {
  return (
    <>
      <CourseSchema />
      <FaqSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Courses", href: "/courses/level-1a" },
          { name: "Level 1A", href: "/courses/level-1a" },
        ]}
      />

      <PageHeader
        eyebrow="INSCA + SDAT Accredited Certification"
        title={
          <>
            Level 1A Strength &amp; <br className="hidden sm:block" />
            Conditioning Certification
          </>
        }
        lead={level1A.summary}
        image="/workshops/strength/gym-floor.webp"
        imagePosition="50% 42%"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Level 1A Certification", href: "/courses/level-1a" },
        ]}
      >
        <p className="mt-6 font-display text-xl font-bold text-insca-600 sm:text-2xl">
          {level1A.positioning}
        </p>

        <div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-5 border-y border-hairline py-6 sm:grid-cols-4 sm:gap-x-6">
          {meta.map(({ icon: Icon, label, value }) => (
            <div key={label}>
              <span className="flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-ink-400">
                <Icon className="size-3.5 text-insca-400" aria-hidden="true" />
                {label}
              </span>
              <span className="mt-1.5 block font-display text-[0.9rem] font-semibold leading-snug text-ink-900 sm:text-[0.95rem]">
                {value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={level1A.registrationUrl} size="lg">
            Apply for Level 1A
            <ArrowGlyph />
          </ButtonLink>
          <ButtonLink href="#curriculum" variant="outline" size="lg">
            View the curriculum
          </ButtonLink>
        </div>
      </PageHeader>

      <CourseStats />
      <Audience />
      <Advantages />
      <FocusAreas />
      <Curriculum />
      <WorkshopShowcase />
      <FacultySection />
      <CourseDetails />
      <WhyInsca />
      <Faq />
      <FinalCta />
    </>
  );
}
