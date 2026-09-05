/**
 * Workshop media library.
 *
 * Every image is a genuine photograph from a previous INSCA workshop at the
 * Tamil Nadu Centre for Sports Science. Sources: the September 2026 workshop
 * photo set and the original INSCA website's own archive. All were converted
 * to WebP and trimmed to remove the camera watermark.
 *
 * Intrinsic width/height are recorded so <Image> can reserve space and avoid
 * layout shift.
 */

export type WorkshopCategory =
  | "practical"
  | "strength"
  | "testing"
  | "classroom"
  | "analysis"
  | "cpr"
  | "cohort"
  | "archive";

export type WorkshopImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /**
   * Short label, shown ONLY on the curated showcase sequence. The gallery
   * itself is deliberately captionless — thirty-six titled thumbnails read
   * as a list of headings rather than as photographs.
   */
  caption: string;
  /** Organises the library and mirrors the folder each file lives in. */
  category: WorkshopCategory;
};

export const workshopImages: WorkshopImage[] = [
  // ---- Practical demonstrations ----
  {
    src: "/workshops/practical/overhead-demo.webp",
    width: 1600,
    height: 801,
    alt: "A coach demonstrates an overhead barbell catch position to the INSCA cohort at TACSS, Chennai",
    caption: "Olympic lifting coaching",
    category: "practical",
  },
  {
    src: "/workshops/practical/sprint-start.webp",
    width: 1600,
    height: 801,
    alt: "Sprint start position demonstrated with a coaching bar in front of INSCA participants",
    caption: "Sprint mechanics",
    category: "practical",
  },
  {
    src: "/workshops/practical/balance-demo.webp",
    width: 1600,
    height: 801,
    alt: "Single-leg balance and hip-hinge demonstration during an INSCA practical session",
    caption: "Movement screening",
    category: "practical",
  },
  {
    src: "/workshops/practical/box-jump.webp",
    width: 1600,
    height: 801,
    alt: "Box jump and jump-profiling demonstration at an INSCA workshop",
    caption: "Jump profiling",
    category: "practical",
  },
  {
    src: "/workshops/practical/group-demo.webp",
    width: 1600,
    height: 801,
    alt: "Coaches leading a movement demonstration for seated INSCA participants",
    caption: "Applied coaching",
    category: "practical",
  },
  {
    src: "/workshops/practical/jump-demo.webp",
    width: 1600,
    height: 801,
    alt: "Vertical jump demonstration during an INSCA practical session",
    caption: "Plyometric training",
    category: "practical",
  },

  // ---- Gym-based strength work ----
  {
    src: "/workshops/strength/barbell-hinge.webp",
    width: 1600,
    height: 801,
    alt: "INSCA participants practising the barbell hip hinge on the indoor track at TACSS",
    caption: "Barbell technique",
    category: "strength",
  },
  {
    src: "/workshops/strength/gym-floor.webp",
    width: 1600,
    height: 801,
    alt: "INSCA participants on the TACSS high-performance gym floor",
    caption: "High-performance facility",
    category: "strength",
  },
  {
    src: "/workshops/strength/barbell-coaching.webp",
    width: 1600,
    height: 801,
    alt: "Barbell technique coaching on the high-performance gym floor",
    caption: "Gym-based practical",
    category: "strength",
  },
  {
    src: "/workshops/strength/bar-setup.webp",
    width: 1600,
    height: 801,
    alt: "Coaches setting up a barbell during an INSCA gym-based practical",
    caption: "Loading & set-up",
    category: "strength",
  },
  {
    src: "/workshops/strength/gym-briefing.webp",
    width: 1600,
    height: 801,
    alt: "Group briefing on the strength training floor at TACSS",
    caption: "Coaching the room",
    category: "strength",
  },
  {
    src: "/workshops/strength/warmup-floor.webp",
    width: 1600,
    height: 801,
    alt: "Warm-up and mobility preparation before an INSCA practical session",
    caption: "Mobility screening",
    category: "strength",
  },

  // ---- Testing & monitoring ----
  {
    src: "/workshops/testing/sprint-lineup.webp",
    width: 1600,
    height: 801,
    alt: "INSCA participants lined up for sprint testing on the indoor track at TACSS",
    caption: "Sprint timing systems",
    category: "testing",
  },
  {
    src: "/workshops/testing/sprint-track.webp",
    width: 1600,
    height: 801,
    alt: "Sprint testing and timing session during an INSCA workshop",
    caption: "Athlete testing",
    category: "testing",
  },
  {
    src: "/workshops/testing/hurdle-drills.webp",
    width: 1600,
    height: 801,
    alt: "Hurdle and plyometric drill setup during an INSCA practical session",
    caption: "Change of direction",
    category: "testing",
  },

  // ---- Applied sports science / analysis ----
  {
    src: "/workshops/analysis/force-curve.webp",
    width: 1600,
    height: 801,
    alt: "Force–velocity data reviewed on screen during an INSCA applied sports science session",
    caption: "Force–velocity profiling",
    category: "analysis",
  },
  {
    src: "/workshops/analysis/speed-lecture.webp",
    width: 1600,
    height: 801,
    alt: "Speed development lecture during an INSCA workshop",
    caption: "Speed development",
    category: "analysis",
  },
  {
    src: "/workshops/analysis/app-session.webp",
    width: 1600,
    height: 801,
    alt: "Athlete monitoring technology demonstrated to INSCA participants",
    caption: "Athlete monitoring",
    category: "analysis",
  },

  // ---- Classroom / theory ----
  {
    src: "/workshops/classroom/full-room.webp",
    width: 1600,
    height: 801,
    alt: "A full lecture room of INSCA participants at the Tamil Nadu Centre for Sports Science",
    caption: "Theory sessions",
    category: "classroom",
  },
  {
    src: "/workshops/classroom/demo-lecture.webp",
    width: 1600,
    height: 801,
    alt: "A live movement demonstration during an INSCA theory session",
    caption: "Theory meets practice",
    category: "classroom",
  },
  {
    src: "/workshops/classroom/attentive.webp",
    width: 1280,
    height: 640,
    alt: "INSCA cohort in course kit during a classroom session",
    caption: "The cohort",
    category: "classroom",
  },
  {
    src: "/workshops/classroom/cohort-notes.webp",
    width: 1280,
    height: 640,
    alt: "INSCA participants taking notes during a theory session at TACSS",
    caption: "Evidence-based learning",
    category: "classroom",
  },
  {
    src: "/workshops/classroom/session.webp",
    width: 1600,
    height: 801,
    alt: "Theory session in progress at the Tamil Nadu Centre for Sports Science",
    caption: "Applied sports science",
    category: "classroom",
  },
  {
    src: "/workshops/classroom/coach-talk.webp",
    width: 1600,
    height: 801,
    alt: "A coach addressing INSCA participants during a practical briefing",
    caption: "Expert interaction",
    category: "classroom",
  },
  {
    src: "/workshops/classroom/video-session.webp",
    width: 1600,
    height: 801,
    alt: "Participants reviewing a movement analysis session on screen",
    caption: "2D video analysis",
    category: "classroom",
  },
  {
    src: "/workshops/classroom/lecture-wide.webp",
    width: 1600,
    height: 1071,
    alt: "Wide view of an INSCA lecture at TACSS, Chennai",
    caption: "Lecture theatre",
    category: "classroom",
  },
  {
    src: "/workshops/classroom/intro.webp",
    width: 1280,
    height: 857,
    alt: "Opening session of an INSCA Strength & Conditioning workshop",
    caption: "Day one",
    category: "classroom",
  },

  // ---- CPR / Basic Life Support ----
  {
    src: "/workshops/cpr/practical.webp",
    width: 1600,
    height: 801,
    alt: "Hands-on CPR practice on manikins during an INSCA workshop",
    caption: "CPR practical",
    category: "cpr",
  },
  {
    src: "/workshops/cpr/briefing.webp",
    width: 1600,
    height: 801,
    alt: "Basic Life Support and CPR training briefing at an INSCA workshop",
    caption: "Basic life support",
    category: "cpr",
  },

  // ---- Cohort ----
  {
    src: "/workshops/cohort/group-photo.webp",
    width: 1600,
    height: 1068,
    alt: "The full INSCA cohort at the Tamil Nadu Centre for Sports Science, Chennai",
    caption: "The INSCA cohort",
    category: "cohort",
  },

  // ---- Archive: earlier INSCA workshops ----
  {
    src: "/workshops/archive/certification-ceremony-1.webp",
    width: 1169,
    height: 736,
    alt: "Certificate presentation at a previous INSCA Strength & Conditioning workshop",
    caption: "Certification",
    category: "archive",
  },
  {
    src: "/workshops/archive/certification-ceremony-2.webp",
    width: 1032,
    height: 601,
    alt: "An INSCA participant receiving their certification",
    caption: "Certification",
    category: "archive",
  },
  {
    src: "/workshops/archive/cohort-2024.webp",
    width: 1095,
    height: 561,
    alt: "An earlier INSCA workshop cohort with visiting faculty at TACSS, Chennai",
    caption: "Earlier cohort",
    category: "archive",
  },
  {
    src: "/workshops/archive/lecture-charts.webp",
    width: 1034,
    height: 568,
    alt: "Sports science lecture with data on screen at an INSCA workshop",
    caption: "Sports science lecture",
    category: "archive",
  },
  {
    src: "/workshops/archive/presenter.webp",
    width: 997,
    height: 547,
    alt: "An instructor presenting to INSCA workshop participants",
    caption: "Expert sessions",
    category: "archive",
  },
  {
    src: "/workshops/archive/workshop-slide.webp",
    width: 991,
    height: 534,
    alt: "Presentation session during an earlier INSCA workshop",
    caption: "Workshop sessions",
    category: "archive",
  },
];

export function imageBySrc(src: string): WorkshopImage | undefined {
  return workshopImages.find((i) => i.src === src);
}

/**
 * The five things a previous INSCA workshop demonstrably provides.
 * Each is paired with a real photograph rather than an illustration.
 *
 * IMAGE UNIQUENESS
 * These five sit on the homepage directly beneath the showcase sequence, so
 * they must not reuse anything that sequence — or the featured course block,
 * or the focus-area panel — already shows. Three of them used to, and the
 * homepage repeated the same barbell hinge, sprint line-up and force curve
 * two and three times over. Check `workshop-showcase.tsx` before changing
 * any of these.
 */
export const experiencePillars = [
  {
    title: "Practical Learning",
    body: "Hands-on strength & conditioning sessions, coached on the floor rather than described on a slide.",
    image: "/workshops/strength/gym-briefing.webp",
  },
  {
    title: "Athlete Exposure",
    body: "Observe and understand how real athletes train inside a working high-performance centre.",
    image: "/workshops/testing/hurdle-drills.webp",
  },
  {
    title: "Performance Testing",
    body: "Applied athlete monitoring and testing — sprint timing, jump profiling and movement screening.",
    image: "/workshops/practical/box-jump.webp",
  },
  {
    title: "Expert Interaction",
    body: "Learn directly from experienced coaches and performance professionals working in elite sport.",
    image: "/workshops/classroom/coach-talk.webp",
  },
  {
    title: "High-Performance Environment",
    body: "Experience the professional sports science and training systems used at TACSS, Chennai.",
    image: "/workshops/strength/gym-floor.webp",
  },
] as const;
