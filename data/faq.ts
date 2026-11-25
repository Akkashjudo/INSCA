import { level1A, formatFee } from "./course";
import { contact, site, venue } from "./site";

export const faqs = [
  {
    question: "What is INSCA?",
    answer: `The Indian National Strength & Conditioning Association (INSCA) is a national professional organisation established to advance the science, education, certification and applied practice of Strength & Conditioning across India. Registration No. ${site.registrationNo}.`,
  },
  {
    question: "Who is the Level 1A certification for?",
    answer:
      "It is built for people aiming to work within elite sport and high-performance systems — aspiring S&C coaches, sports science students, physical education professionals, sport coaches and trainers moving into athlete performance. It is not designed as a general commercial fitness trainer certification.",
  },
  {
    question: "What certification will I receive?",
    answer: `Participants receive an ${level1A.certification} on completion — accredited by INSCA and delivered in collaboration with the ${level1A.collaboration}. There is no repeated certification or certification expiry requirement.`,
  },
  {
    question: "Where and when does the course run?",
    answer: `The course runs ${level1A.dateLabel} at the ${level1A.venue} — ${venue.building}, SDAT, ${venue.street}, ${venue.locality} – ${venue.postalCode}. It is a ${level1A.durationDays}-day intensive of roughly ${level1A.hoursPerDay} hours per day, ${level1A.hoursTotal} hours in total.`,
  },
  {
    question: "What does the course fee cover?",
    answer: `Early Bird registration for the ${level1A.batch} is ${formatFee(level1A.fees[0].amount)} on or before ${level1A.earlyBirdDeadlineLabel} — a saving of ${formatFee(level1A.fees[1].amount - level1A.fees[0].amount)}. After that the fee is ${formatFee(level1A.fees[1].amount)}. It includes ${level1A.included.map((i) => i.toLowerCase()).join(", ")}.`,
  },
  {
    question: "How much of the course is practical?",
    answer:
      "Level 1A is deliberately practical-heavy. Alongside the theory modules you are coached through sprint timing systems, 2D video analysis, gym-based practical, Olympic lifting coaching, jump profiling, speed mechanics, mobility screening, change of direction drills, rehab progressions, and testing and monitoring performance.",
  },
  {
    question: "How do I register?",
    answer: `Registration is through the official INSCA Google Form linked from every "Register" button on this site. Slots are limited and allocated first come, first serve. For questions, call ${contact.phone} or email ${contact.email}.`,
  },
] as const;
