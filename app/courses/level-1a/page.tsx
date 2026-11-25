import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { ButtonLink } from "@/components/ui/button";
import { RegistrationPanel } from "@/components/course/registration-panel";
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
import { level1A, formatFee } from "@/data/course";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "Level 1A Strength & Conditioning Certification",
  description:
    "The INSCA + SDAT Level 1A Strength & Conditioning Certification in Chennai: 10 days, 80 hours of practical coaching, athlete monitoring and Olympic lifting.",
  alternates: { canonical: "/courses/level-1a" },
  openGraph: {
    title: "INSCA + SDAT Level 1A Strength & Conditioning Certification",
    description: `${level1A.durationDays} days. ${level1A.hoursTotal} hours. ${level1A.positioning}. ${level1A.venueShort} — ${level1A.dateLabel}.`,
    url: "/courses/level-1a",
    /*
      Next REPLACES a parent `openGraph` object rather than merging into it,
      so declaring one here without images left the most-shared page on the
      site with no social card image at all.
    */
    images: [
      {
        url: "/workshops/strength/gym-floor.webp",
        width: 1600,
        height: 801,
        alt: "INSCA participants on the high-performance gym floor at TACSS, Chennai",
      },
    ],
  },
};

/**
 * Programme facts that sit BESIDE the registration panel, not inside it.
 * Date, time, location and deadline all live in <RegistrationPanel> so the
 * conversion path reads as one block; these are the supporting details.
 */
const programme = [
  {
    label: "Duration",
    value: `${level1A.durationDays} days · ${level1A.hoursTotal} hours`,
  },
  { label: "Certification", value: "INSCA + SDAT Accredited" },
  { label: "Admission", value: level1A.admission },
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
        imageAlt="INSCA participants on the high-performance gym floor at TACSS, Chennai"
        imagePosition="50% 42%"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Level 1A Certification", href: "/courses/level-1a" },
        ]}
      >
        <p className="mt-6 font-display text-xl font-bold text-insca-600 sm:text-2xl">
          {level1A.positioning}
        </p>

        {/*
          Registration is the point of this page, so it is given its own
          panel in the masthead rather than a row of equal-weight facts and a
          button underneath. Programme details stay on the left; date, time,
          location, deadline and the CTA read top-to-bottom on the right.
        */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_minmax(0,21.5rem)] lg:items-start lg:gap-12">
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-2xl border border-insca-200 bg-insca-50 px-5 py-4">
              <span className="tabular font-display text-2xl font-bold text-insca-600">
                {formatFee(level1A.fees[0].amount)}
              </span>
              <span className="font-display text-sm font-semibold text-ink-700">
                {level1A.fees[0].label}
              </span>
              <span className="w-full text-[0.82rem] text-ink-500 sm:w-auto">
                · {level1A.admission}
              </span>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 border-y border-hairline py-6 sm:grid-cols-3 sm:gap-x-6">
              {programme.map(({ label, value }) => (
                <div key={label} className="last:max-sm:col-span-2">
                  <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-ink-400">
                    {label}
                  </dt>
                  <dd className="mt-1.5 font-display text-[0.9rem] font-semibold leading-snug text-ink-900 sm:text-[0.95rem]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <ButtonLink
              href="#curriculum"
              variant="outline"
              size="lg"
              className="mt-6"
            >
              View the curriculum
            </ButtonLink>
          </div>

          <RegistrationPanel />
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
