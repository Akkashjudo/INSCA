/**
 * INSCA + SDAT Level 1A Strength & Conditioning Certification.
 *
 * SINGLE SOURCE OF TRUTH. Every page, CTA, meta tag and JSON-LD block
 * reads from this object — updating a future cohort means editing here only.
 *
 * Source: "INSCA_Level_1A_Brochure_Draft_2nd.docx" (official course brochure).
 */

export type FeeTier = {
  label: string;
  amount: number;
  /** Human-readable condition, e.g. "Until 18 September 2026, 5:00 PM". */
  condition: string;
  featured?: boolean;
};

export const level1A = {
  id: "level-1a",
  title: "Level 1A Strength & Conditioning Certification",
  shortTitle: "Level 1A",
  accreditedBy: "INSCA + SDAT",
  collaboration: "Sports Development Authority of Tamil Nadu (SDAT)",
  positioning: "Built for High Performance Sport",

  summary:
    "A 10-day intensive Strength & Conditioning certification combining evidence-based theory, applied sports science and hands-on practical learning.",

  overview:
    "The INSCA + SDAT Level 1A Strength & Conditioning Certification combines evidence-based theory, practical coaching and real high-performance exposure to prepare aspiring professionals to work confidently within modern sports-performance environments.",

  /** Verbatim positioning statement from the official brochure. */
  notFor:
    "This certification is not designed for regular commercial fitness trainers. It is built for professionals aiming to work within elite sport and high-performance systems where athlete monitoring, force production, performance optimisation, return-to-play strategy and evidence-based coaching matter.",

  // ---- Logistics -------------------------------------------------------
  venue: "Tamil Nadu Centre for Sports Science (TACSS), Chennai",
  venueShort: "TACSS, Chennai",
  startDate: "2026-09-23",
  endDate: "2026-10-02",
  dateLabel: "September 23 – October 2, 2026",
  dateLabelShort: "23 Sep – 2 Oct 2026",
  durationDays: 10,
  hoursTotal: 80,
  hoursPerDay: 8,
  durationLabel: "10 Days Intensive Immersion",
  /**
   * Shown under "Time" in the registration panel.
   *
   * The official brochure specifies 8 hours per day across 10 days but gives
   * no clock times. Nothing else in the supplied material states a daily
   * start/finish, so none is invented here. When SDAT confirms the daily
   * schedule, replace this string (e.g. "9:00 AM – 5:00 PM daily") and it
   * updates the header panel, the details table and the contact page at once.
   */
  timeLabel: "Full-day sessions · 8 hours per day",
  admission: "First Come – First Serve",
  certification: "INSCA + SDAT Accredited Certification",

  // ---- Registration ----------------------------------------------------
  /** Official Google Form, taken from the Level 1A brochure. */
  registrationUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSeCT2fZLXipAAQvlF0zCNRtnpnC1uActMZs4Ajwy8iQAA6i2Q/viewform",

  currency: "INR",

  /**
   * NOTE ON THE FEE DEADLINE
   * The official brochure states the regular ₹50,000 fee applies
   * "After September 18th 2026, 5:00 pm". No other supplied file
   * (existing website, assets, sitemap, schema) contains a fee or a
   * competing date, so the brochure is the only authority available.
   * If the deadline moves, change `earlyBirdDeadline` + the two
   * `condition` strings below — nothing else references the date.
   */
  earlyBirdDeadline: "2026-09-18T17:00:00+05:30",
  earlyBirdDeadlineLabel: "18 September 2026, 5:00 PM",

  fees: [
    {
      label: "Early Bird",
      amount: 45000,
      condition: "On or before 18 September 2026, 5:00 PM",
      featured: true,
    },
    {
      label: "Regular",
      amount: 50000,
      condition: "After 18 September 2026, 5:00 PM",
    },
  ] satisfies FeeTier[],

  // ---- Headline stats --------------------------------------------------
  stats: [
    { value: "10", label: "Days" },
    { value: "80", label: "Hours" },
    { value: "Real Athlete", label: "Exposure" },
    { value: "Expert", label: "Faculty" },
    { value: "Practical", label: "Learning" },
  ],

  // ---- Audience --------------------------------------------------------
  audience: [
    {
      title: "Aspiring S&C Coaches",
      body: "Coaches who want to build a career inside professional strength & conditioning rather than commercial fitness.",
    },
    {
      title: "Sports Science Students",
      body: "Students who need applied, hands-on exposure to close the gap between the syllabus and the training floor.",
    },
    {
      title: "Physical Education Professionals",
      body: "PE professionals looking to work to modern, evidence-based performance standards.",
    },
    {
      title: "Sports Coaches",
      body: "Sport coaches who want to programme physical preparation properly alongside technical work.",
    },
    {
      title: "Trainers Moving into Elite Sport",
      body: "Experienced trainers making the transition from general population into athlete performance.",
    },
    {
      title: "High-Performance Aspirants",
      body: "Anyone targeting a role in athlete performance, monitoring or high-performance support teams.",
    },
  ],

  // ---- Why this course -------------------------------------------------
  advantages: [
    {
      title: "Theory and Practice Together",
      body: "An S&C certification built on theoretical foundations and taught through direct practical application.",
    },
    {
      title: "80 Hours Across 10 Days",
      body: "A full immersion — ten consecutive days, roughly eighty hours of structured learning.",
    },
    {
      title: "Career Pathways",
      body: "Positioned to open career and job opportunities inside sport, not just the fitness industry.",
    },
    {
      title: "Competitive Course Fee",
      body: "Strong competency development at a fee that compares well against international certifications offered in India.",
    },
    {
      title: "No Expiry, No Re-certification",
      body: "No repeated certification and no certification expiry requirement.",
    },
    {
      title: "Leading S&C Professionals",
      body: "Direct learning from established strength & conditioning practitioners working in elite sport.",
    },
    {
      title: "Additional CPR Certification",
      body: "An additional CPR certification alongside the Level 1A credential.",
    },
    {
      title: "Observe Athletes Training",
      body: "Practical experience observing real athletes as they train inside a high-performance centre.",
    },
    {
      title: "Access to High-Performance Coaches",
      body: "Discussion opportunities with coaches working day-to-day in high-performance environments.",
    },
    {
      title: "Versatile Performance Learning",
      body: "Learning that transfers across sports, athlete populations and performance settings.",
    },
  ],

  // ---- Core focus areas ------------------------------------------------
  /**
   * "What you'll learn" — the taught areas of the certification.
   * Rendered by <FocusAreas> and also published as `teaches` in the Course
   * JSON-LD, so the count in the section heading is derived, never typed.
   */
  focusAreas: [
    "Athlete Monitoring",
    "Force Production & Orientation",
    "Biomechanics of Strength Training",
    "Mechanics of Exercise",
    "Speed Training",
    "Plyometric Training",
    "Olympic Lifting",
    "Psychology of Strength Training",
    "Recovery Massage",
    "Rehab & First Aid",
    "Return to Sport",
    "Testing & Monitoring",
    "CPR Certification",
    "Evidence-Based Coaching",
  ],

  // ---- Curriculum, grouped ---------------------------------------------
  curriculum: [
    {
      group: "Performance Science",
      blurb: "The measurement layer — how performance is quantified, profiled and interpreted.",
      modules: [
        "Applied Biomechanics",
        "Athlete Monitoring",
        "Testing Protocols",
        "Force–Velocity Profiling",
      ],
    },
    {
      group: "Strength & Power",
      blurb: "Developing force, rate of force development and the qualities that underpin athleticism.",
      modules: [
        "Olympic Lifting",
        "Plyometrics",
        "Advanced Periodisation & Program Design",
        "Load Management",
      ],
    },
    {
      group: "Speed & Movement",
      blurb: "Sprint mechanics, acceleration and the ability to change direction under control.",
      modules: [
        "Sprint Mechanics",
        "Speed Development",
        "Change of Direction",
        "Movement Screening",
      ],
    },
    {
      group: "Recovery & Return",
      blurb: "Managing fatigue and returning athletes to performance, not just to play.",
      modules: [
        "Recovery Science",
        "Return to Performance",
        "Rehab Progressions",
        "Sports Nutrition",
      ],
    },
  ],

  // ---- Practical components -------------------------------------------
  practicals: [
    "Sprint Timing Systems",
    "2D Video Analysis",
    "Gym-Based Practical",
    "Olympic Lifting Coaching",
    "Jump Profiling",
    "Speed Mechanics",
    "Mobility Screening",
    "Change of Direction Drills",
    "Rehab Progressions",
    "Testing & Monitoring Performance",
  ],

  // ---- Differentiators -------------------------------------------------
  differentiators: [
    "INSCA + SDAT accredited certification",
    "Practical-heavy learning",
    "Real athlete exposure",
    "Hands-on testing and monitoring",
    "Learning from experienced high-performance professionals",
    "Theory connected directly to practical coaching",
  ],

  /**
   * "What's Included" — exactly the six items listed in the official
   * brochure. CPR appears in the course advantages (and in INSCA's own
   * workshop record) but is NOT in the brochure's inclusions table, so it
   * is deliberately not claimed here.
   */
  included: [
    "Lunch provided for all 10 days",
    "Refreshments included",
    "Official course T-shirt",
    "Accredited certification",
    "Theory + practical sessions",
    "Hands-on athlete testing exposure",
  ],
} as const;

export type Level1ACourse = typeof level1A;

/** Formats a rupee amount the Indian way: ₹45,000. */
export function formatFee(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}
