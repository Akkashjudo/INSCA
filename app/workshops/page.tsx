import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionRule } from "@/components/ui/section-rule";
import { ExperiencePillars } from "@/components/gallery/experience-pillars";
import { FinalCta } from "@/components/course/final-cta";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { workshopImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Workshop Gallery",
  description:
    "Photographs from previous INSCA Strength & Conditioning workshops at the Tamil Nadu Centre for Sports Science, Chennai — coaching, testing and CPR training.",
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
        imageAlt="Coaches leading a movement demonstration for INSCA participants at TACSS, Chennai"
        imagePosition="50% 45%"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Workshop Gallery", href: "/workshops" },
        ]}
      />

      {/*
        The gallery is headed simply "Gallery" and carries nothing but the
        photographs — no filters, no per-image titles, no category labels.
        The only supporting line is the count, which is orientation rather
        than caption.
      */}
      <section className="section-y">
        <div className="wrap">
          <SectionHeading title="Gallery" />
          <p className="tabular mt-4 text-sm text-ink-400">
            {workshopImages.length} photographs from INSCA programmes at TACSS,
            Chennai
          </p>

          <div className="mt-10">
            <GalleryGrid />
          </div>
        </div>
      </section>

      <div className="wrap">
        <SectionRule />
      </div>

      <ExperiencePillars />
      <FinalCta />
    </>
  );
}
