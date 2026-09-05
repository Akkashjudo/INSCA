/**
 * Faculty and leadership.
 *
 * Photographs are used ONLY where a genuine INSCA image exists. Nobody is
 * given a stock or generated face; `photo: null` stays a deliberate value and
 * renders an initials monogram instead.
 *
 * PORTRAIT PIPELINE
 * Every faculty photograph in /public/people is 720x900 (4:5) — the same
 * ratio the card frames — so `object-cover` never actually crops one and no
 * head can be clipped at any width. The crops were taken from the supplied
 * originals: the phone-screenshot chrome and the INSCA banner overlay on four
 * of them were removed by framing above them, not by cloning or repainting,
 * so no face or background has been reconstructed.
 */

import { contact } from "./site";

export type Person = {
  name: string;
  /** Primary role — the one line that identifies them. */
  role: string;
  /** Employing organisation / institution. */
  org?: string;
  /** Post-nominals and qualifications, shown as chips. */
  credentials?: string[];
  photo?: string | null;
  /**
   * Only needed if a photograph is NOT already 4:5 — the faculty portraits
   * are, so they need no per-person nudging. Kept for any future headshot
   * that arrives in a different shape.
   */
  photoPosition?: string;
};

/** Level 1A teaching faculty, in the order given by the official brochure. */
export const level1AFaculty: Person[] = [
  {
    name: "Dr. Saju Joseph",
    role: "High Performance Manager",
    org: "SDAT, TACSS",
    photo: "/people/saju-joseph.webp",
  },
  {
    name: "Mrs. Devi Meena",
    role: "High Performance Director",
    org: "Basketball Federation of India",
    credentials: ["MS (S&C)", "MS (HPS)", "CSCS,*D", "ASCA AL2", "CF-L1"],
    photo: "/people/devi-meena.webp",
  },
  {
    name: "Mr. Ranjith Nahak",
    role: "Strength & Conditioning Expert",
    org: "Haryana Steelers",
    credentials: ["Ex-SAI"],
    photo: "/people/ranjith-nahak.webp",
  },
  {
    name: "Mr. A.K. Narashiman",
    role: "Strength & Conditioning Expert",
    org: "UKSCA",
    photo: "/people/ak-narashiman.webp",
  },
  {
    name: "M. Onesimus Raja Singh",
    role: "Sports Biomechanist",
    org: "SDAT, TACSS",
    credentials: ["MSc Sports Biomechanics", "Loughborough University"],
    photo: "/people/onesimus-raja-singh.webp",
  },
  {
    name: "M. Ajith Parthiban",
    role: "Strength & Conditioning Expert",
    org: "SDAT, TACSS",
    credentials: ["Masters HPSC — UCAM Spain", "ASCA L2", "NSNIS"],
    photo: "/people/ajith-parthiban.webp",
  },
  {
    name: "Ms. Hari Priya",
    role: "Strength & Conditioning Expert",
    org: "SDAT, TACSS",
    credentials: [
      "BSc Sports & Exercise Science",
      "MSc Fitness, Exercise Rehabilitation & Nutrition Care",
    ],
    photo: "/people/hari-priya.webp",
  },
];

/**
 * INSCA office bearers — carried over from the original website.
 *
 * Phone numbers are personal to each office bearer; email is the single
 * official INSCA address (`contact.email`), so there is exactly one inbox to
 * maintain and no per-person address can go stale.
 */
export const leadership = [
  {
    name: "Dr. Arugan C. Arjun",
    role: "Founder & President",
    org: "INSCA",
    /**
     * The only supplied original is 199x194 — smaller than the 260px square
     * the president's message draws it into, so the browser was upscaling it
     * and it read as blurry. This WebP is that file resampled once, offline,
     * with Lanczos3 and a light unsharp mask, at 597x582. It cannot add
     * detail the original never had; a genuinely sharp portrait needs a
     * higher-resolution photograph from INSCA.
     */
    photo: "/people/arugan-c-arjun.webp",
    bio: "Visionary leader dedicated to advancing Strength & Conditioning education, sports science and professional excellence across India through innovation, research and global collaboration.",
    phone: "+91 95358 33554",
    phoneHref: "tel:+919535833554",
    email: contact.email,
  },
  {
    name: "Dr. Saju Joseph",
    role: "Founder & Secretary",
    org: "INSCA · High Performance Manager, SDAT TACSS",
    photo: "/people/saju-joseph.webp",
    bio: "Committed to strengthening the professional ecosystem of Strength & Conditioning by promoting education, research, certification and evidence-based performance practices.",
    phone: "+91 82777 13616",
    phoneHref: "tel:+918277713616",
    email: contact.email,
  },
] as const;

/** Builds the monogram used when no genuine photograph exists. */
export function initialsOf(name: string): string {
  const parts = name
    .replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.|M\.)\s*/i, "")
    .split(/\s+/)
    .filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}
