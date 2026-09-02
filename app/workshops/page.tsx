import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { ExperiencePillars } from "@/components/gallery/experience-pillars";
import { FinalCta } from "@/components/course/final-cta";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { workshopImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Workshop Gallery",
  description:
    "Glimpses from previous INSCA Strength & Conditioning workshops at the Tamil Nadu Centre for Sports Science, Chennai — practical coaching, athlete testing, Olympic lifting, performance analysis and CPR training.",
  alternates: { canonical: "/workshops" },
};

export default function WorkshopsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Workshops", href: "/workshops" },
        ]}
      />

      <PageHeader
        eyebrow="Previous workshop glimpses"
        title={
          <>
            See INSCA <span className="text-insca-500">in action</span>
          </>
        }
        lead="Explore glimpses from previous INSCA workshops and see how classroom learning is translated into practical high-performance coaching environments."
        image="/workshops/practical/group-demo.webp"
        imagePosition="50% 45%"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Workshop Gallery", href: "/workshops" },
        ]}
      >
        <p className="tabular mt-7 text-sm text-ink-500">
          {workshopImages.length} photographs from INSCA programmes at TACSS, Chennai
        </p>
      </PageHeader>

      <section className="section-y">
        <div className="wrap">
          <GalleryGrid />
        </div>
      </section>

      <ExperiencePillars />
      <FinalCta />
    </>
  );
}
