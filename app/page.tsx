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
  /*
   * Search appearance for the homepage.
   *
   * The title is 51 characters, inside the ~60 Google renders before it
   * truncates. Open Graph and Twitter are NOT overridden here on purpose:
   * Next replaces a parent `openGraph` object rather than merging into it,
   * so declaring one would silently drop the social card image. The root
   * layout carries both, and this page inherits them.
   */
  title: "INSCA | Strength & Conditioning Certification India",
  description:
    "Indian National Strength & Conditioning Association (INSCA). Explore professional strength and conditioning certifications, education and training programs in India.",
  /*
   * Absolute, and pointing at the www host the apex 308-redirects to.
   *
   * Next renders this as "https://www.insca.in" with no trailing slash and
   * normalises any attempt to add one. That is not worth fighting: for an
   * http(s) URL an empty path is equivalent to "/" (RFC 3986 6.2.3), so
   * Google treats the two as the same URL. Forcing the slash would mean
   * either `trailingSlash: true`, which rewrites every route on the site, or
   * a hand-written second <link rel="canonical">, which is exactly the
   * duplicate-canonical state that makes Google ignore both.
   */
  alternates: { canonical: "https://www.insca.in/" },
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
