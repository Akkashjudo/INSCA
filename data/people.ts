/**
 * Faculty and leadership.
 *
 * Photographs are used ONLY where a genuine INSCA image exists.
 * Everyone else renders an initials monogram — no stock portraits,
 * no generated faces. `photo: null` is a deliberate value, not a TODO.
 */

export type Person = {
  name: string;
  /** Primary role — the one line that identifies them. */
  role: string;
  /** Employing organisation / institution. */
  org?: string;
  /** Post-nominals and qualifications, shown as chips. */
  credentials?: string[];
  photo?: string | null;
  photoPosition?: string;
};

/**
 * Level 1A teaching faculty, in the order given by the official brochure.
 * Dr. Saju Joseph is the only faculty member with a genuine INSCA
 * photograph on file (he is also one of INSCA's Founders, and its Secretary).
 */
export const level1AFaculty: Person[] = [
  {
    name: "Dr. Saju Joseph",
    role: "High Performance Manager",
    org: "SDAT, TACSS",
    photo: "/people/saju-joseph.webp",
    photoPosition: "50% 30%",
  },
  {
    name: "Mrs. Devi Meena",
    role: "High Performance Director",
    org: "Basketball Federation of India",
    credentials: ["MS (S&C)", "MS (HPS)", "CSCS,*D", "ASCA AL2", "CF-L1"],
    photo: null,
  },
  {
    name: "Mr. Ranjith Nahak",
    role: "Strength & Conditioning Expert",
    org: "Haryana Steelers",
    credentials: ["Ex-SAI"],
    photo: null,
  },
  {
    name: "Mr. A.K. Narashiman",
    role: "Strength & Conditioning Expert",
    org: "UKSCA",
    photo: null,
  },
  {
    name: "M. Onesimus Raja Singh",
    role: "Sports Biomechanist",
    org: "SDAT, TACSS",
    credentials: ["MSc Sports Biomechanics", "Loughborough University"],
    photo: null,
  },
  {
    name: "M. Ajith Parthiban",
    role: "Strength & Conditioning Expert",
    org: "SDAT, TACSS",
    credentials: ["Masters HPSC — UCAM Spain", "ASCA L2", "NSNIS"],
    photo: null,
  },
  {
    name: "Ms. Hari Priya",
    role: "Strength & Conditioning Expert",
    org: "SDAT, TACSS",
    credentials: ["MSc FERN"],
    photo: null,
  },
];

/** INSCA office bearers — carried over from the original website. */
export const leadership = [
  {
    name: "Dr. Arugan C. Arjun",
    role: "Founder & President",
    org: "INSCA",
    photo: "/people/arugan-c-arjun.png",
    bio: "Visionary leader dedicated to advancing Strength & Conditioning education, sports science and professional excellence across India through innovation, research and global collaboration.",
    phone: "+91 95358 33554",
    phoneHref: "tel:+919535833554",
    email: "arjun@insca.in",
  },
  {
    name: "Dr. Saju Joseph",
    role: "Founder & Secretary",
    org: "INSCA · High Performance Manager, SDAT TACSS",
    photo: "/people/saju-joseph.webp",
    photoPosition: "50% 30%",
    bio: "Committed to strengthening the professional ecosystem of Strength & Conditioning by promoting education, research, certification and evidence-based performance practices.",
    phone: "+91 82777 13616",
    phoneHref: "tel:+918277713616",
    email: "saju@insca.in",
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
