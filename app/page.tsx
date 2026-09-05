import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { DisciplineMarquee } from "@/components/home/marquee";
import { TrustStrip } from "@/components/home/trust-strip";
import { AboutIntro } from "@/components/home/about-intro";
import { FeaturedCourse } from "@/components/home/featured-course";
import { FocusAreas } from "@/components/course/focus-areas";
import { WorkshopShowcase } from "@/components/gallery/workshop-showcase";
import { ExperiencePillars } from "@/components/gallery/experience-pillars";
import { FacultySection } from "@/components/people/faculty-section";
import { WhyInsca } from "@/components/course/why-insca";
import { FinalCta } from "@/components/course/final-cta";
import { CourseSchema } from "@/components/seo/schema";
import { SectionRule } from "@/components/ui/section-rule";

export const metadata: Metadata = {
  /* Kept inside what Google actually renders: ~60 chars of title, ~155 of
     description. The longer form truncated mid-phrase in results. */
  title: "INSCA — Indian National Strength & Conditioning Association",
  description:
    "India's national professional body for Strength & Conditioning. The INSCA + SDAT Level 1A Certification in Chennai — 10 days, 80 hours, practical and applied.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <CourseSchema />
      <Hero />
      <DisciplineMarquee />
      <TrustStrip />
      <AboutIntro />
      <div className="wrap"><SectionRule /></div>
      {/*
        SECTION RHYTHM
        The homepage reads as four chapters rather than alternating light and
        dark section by section: an off-white opening (hero → about), one
        continuous dark block for the programme itself, a light block for the
        people and the proof, then the dark close of the CTA into the footer.
        <FocusAreas> is rendered dark here purely so the programme chapter
        stays unbroken; on /courses/level-1a it keeps its light tone, where
        the surrounding rhythm is different.
      */}
      <FeaturedCourse />
      <FocusAreas tone="dark" />
      <WorkshopShowcase />
      <ExperiencePillars />
      <div className="wrap"><SectionRule /></div>
      <FacultySection />
      <WhyInsca />
      <FinalCta />
    </>
  );
}
