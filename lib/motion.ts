import type { Variants, Transition } from "framer-motion";

/**
 * One motion vocabulary for the whole site.
 *
 * Everything reveals the same way — a short rise with a fade, on a single
 * easing curve. Consistency is what makes motion read as craft rather than
 * decoration, so resist adding new variants unless a section genuinely
 * needs different behaviour.
 */

export const EASE = [0.22, 0.61, 0.36, 1] as const;

export const transition: Transition = {
  duration: 0.6,
  ease: EASE,
};

/** Standard scroll reveal: rise + fade. */
export const riseIn: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition },
};

/** Softer variant for large media, which shouldn't travel as far. */
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { ...transition, duration: 0.7 } },
};

/**
 * Headings: a soft mask that uncovers the type as it rises. Paired with the
 * clip-path reveal used for photography so text and image share one idea.
 */
export const maskUp: Variants = {
  hidden: { opacity: 0, y: 20, clipPath: "inset(0% 0% 38% 0%)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.75, ease: EASE },
  },
};

/** Parent that staggers its children's reveals. */
export const stagger = (staggerChildren = 0.07, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/** Viewport config shared by every scroll-triggered section. */
export const viewportOnce = { once: true, amount: 0.2, margin: "0px 0px -8% 0px" } as const;
