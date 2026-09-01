import { contact, site, venue } from "@/data/site";
import { level1A } from "@/data/course";
import { leadership } from "@/data/people";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Content is authored locally in this file — no user input is interpolated.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: `${venue.building}, ${venue.name}, SDAT, ${venue.street}`,
  addressLocality: venue.locality,
  addressRegion: venue.region,
  postalCode: venue.postalCode,
  addressCountry: venue.country,
};

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": ["EducationalOrganization", "SportsOrganization"],
        "@id": `${site.url}/#organization`,
        name: site.name,
        alternateName: site.shortName,
        url: site.url,
        logo: `${site.url}/brand/insca-logo.png`,
        description: site.description,
        foundingDate: site.foundingDate,
        identifier: site.registrationNo,
        areaServed: "IN",
        address: postalAddress,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "Course Registration",
            telephone: contact.phone,
            email: contact.email,
            areaServed: "IN",
            availableLanguage: ["en", "ta", "hi"],
          },
        ],
        member: leadership.map((p) => ({
          "@type": "Person",
          name: p.name,
          jobTitle: p.role,
          email: p.email,
          telephone: p.phone,
        })),
      }}
    />
  );
}

export function CourseSchema() {
  const early = level1A.fees[0];
  const regular = level1A.fees[1];

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Course",
        name: `INSCA + SDAT ${level1A.title}`,
        description: level1A.summary,
        url: `${site.url}/courses/level-1a`,
        provider: {
          "@type": "Organization",
          "@id": `${site.url}/#organization`,
          name: site.name,
          sameAs: site.url,
        },
        educationalCredentialAwarded: level1A.certification,
        teaches: level1A.focusAreas,
        inLanguage: "en",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "onsite",
          courseWorkload: `PT${level1A.hoursTotal}H`,
          startDate: level1A.startDate,
          endDate: level1A.endDate,
          location: {
            "@type": "Place",
            name: level1A.venue,
            address: postalAddress,
          },
          offers: [
            {
              "@type": "Offer",
              name: early.label,
              price: early.amount,
              priceCurrency: level1A.currency,
              url: level1A.registrationUrl,
              availability: "https://schema.org/LimitedAvailability",
              validThrough: level1A.earlyBirdDeadline,
              category: "EarlyBird",
            },
            {
              "@type": "Offer",
              name: regular.label,
              price: regular.amount,
              priceCurrency: level1A.currency,
              url: level1A.registrationUrl,
              availability: "https://schema.org/LimitedAvailability",
              validFrom: level1A.earlyBirdDeadline,
            },
          ],
        },
      }}
    />
  );
}

export function FaqSchema({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${site.url}${item.href}`,
        })),
      }}
    />
  );
}
