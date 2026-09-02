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
  title:
    "INSCA — Indian National Strength & Conditioning Association | Level 1A Certification",
  description:
    "INSCA is India's national professional body for Strength & Conditioning. Join the INSCA + SDAT Level 1A Certification in Chennai — a 10-day, 80-hour high-performance course featuring practical coaching, athlete monitoring, Olympic lifting and applied sports science.",
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
      <FeaturedCourse />
      <FocusAreas />
      <WorkshopShowcase />
      <ExperiencePillars />
      <div className="wrap"><SectionRule /></div>
      <FacultySection />
      <WhyInsca />
      <FinalCta />
    </>
  );
}
