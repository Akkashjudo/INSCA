/**
 * Organisation-level facts for INSCA.
 * Everything here is carried over from the original INSCA website
 * (registration number, addresses, phone numbers, vision/mission copy).
 */

export const site = {
  name: "Indian National Strength & Conditioning Association",
  shortName: "INSCA",
  url: "https://www.insca.in",
  registrationNo: "DRB3/SOR/103/2024–2025",
  foundingDate: "2024",
  tagline: "Empowering coaches. Developing athletes. Strengthening India.",
  description:
    "INSCA is India's national professional body for Strength & Conditioning — advancing education, certification, research and applied sports science.",
} as const;

export const contact = {
  /** Primary course + general enquiry line (from the Level 1A brochure). */
  phone: "+91 8277713616",
  phoneHref: "tel:+918277713616",
  phoneRaw: "918277713616",
  /** Official course email (from the Level 1A brochure). */
  email: "inscaindia@gmail.com",
  emailHref: "mailto:inscaindia@gmail.com",
} as const;

export const venue = {
  name: "Tamil Nadu Centre for Sports Science",
  shortName: "TACSS, Chennai",
  building: "4th Floor, Olympic Academy Building",
  authority: "Sports Development Authority of Tamil Nadu (SDAT)",
  street: "Jawaharlal Nehru Stadium",
  locality: "Chennai",
  region: "Tamil Nadu",
  postalCode: "600003",
  country: "IN",
  mapsQuery: "Jawaharlal+Nehru+Stadium+Chennai",
  get fullAddress() {
    return `${this.building}, ${this.name}, SDAT, ${this.street}, ${this.locality} – ${this.postalCode}`;
  },
} as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Level 1A", href: "/courses/level-1a" },
  { label: "Faculty", href: "/courses/level-1a#faculty" },
  { label: "Workshops", href: "/workshops" },
  { label: "Contact", href: "/contact" },
] as const;

/** Kept from the original site: INSCA's eight stated mission commitments. */
export const missionPoints = [
  {
    title: "Advance Education",
    body: "Advance Strength & Conditioning education throughout India.",
  },
  {
    title: "Evidence & Research",
    body: "Promote evidence-based sports science and research.",
  },
  {
    title: "National Certification",
    body: "Develop nationally recognised certification programmes.",
  },
  {
    title: "Build Community",
    body: "Build a collaborative network of performance professionals.",
  },
  {
    title: "Athlete Development",
    body: "Support athlete development through scientific training.",
  },
  {
    title: "Heritage + Science",
    body: "Bridge traditional Indian knowledge with modern sports science.",
  },
  {
    title: "Continuous Learning",
    body: "Create opportunities for continuous professional education.",
  },
  {
    title: "Inspire Excellence",
    body: "Inspire excellence in coaching, rehabilitation and performance.",
  },
] as const;

/** Founder's message — preserved verbatim from the original INSCA site. */
export const foundersMessage = {
  pullQuote:
    "It has always been our dream and mission to restore India's historic leadership in the fields of health, physical excellence, and human performance.",
  paragraphs: [
    "India has contributed immensely to the world through Ayurveda, Siddha, Yoga, Martial Arts, and holistic well-being. These timeless systems have shaped global understanding of health and performance for centuries. One important dimension that deserves renewed focus is Strength and Physical Conditioning.",
    "INSCA was established to bridge this gap by combining India's rich heritage with modern sports science, international collaboration, and evidence-based practice. Through education, certification, research, and innovation, we aspire to develop professionals who will contribute to stronger athletes, healthier communities, and a more resilient nation.",
    "This initiative is not merely an organization — it is a long-term commitment to building a stronger future for India and inspiring excellence across the world.",
  ],
} as const;

export const vision =
  "To establish India as a global leader in Strength & Conditioning education, research, and applied sports science — developing world-class professionals and creating internationally recognised standards of excellence.";

export const aboutParagraphs = [
  "The Indian National Strength & Conditioning Association (INSCA) is a national professional organisation established to advance the science, education, and application of Strength & Conditioning across India.",
  "INSCA serves as a platform for coaches, physiotherapists, sports scientists, fitness professionals, researchers, and educators — providing internationally aligned education, certification programmes, workshops, conferences, and collaborative opportunities. Our goal is to raise professional standards, encourage research and innovation, and contribute to healthier individuals, stronger athletes, and a more physically prepared nation.",
] as const;

/** Marquee terms — the disciplines INSCA actually teaches. */
export const disciplines = [
  "Strength & Conditioning",
  "Applied Sports Science",
  "Athlete Monitoring",
  "Speed Development",
  "Olympic Lifting",
  "Force–Velocity Profiling",
  "Testing & Monitoring",
  "Return to Performance",
  "High Performance",
] as const;
