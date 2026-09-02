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
  duration: 0.42,
  ease: EASE,
};

/**
 * Standard scroll reveal: rise + a shallow fade.
 *
 * It starts at 0.85 rather than 0 on purpose. Framer Motion bakes the
 * `hidden` state into the server-rendered HTML, so a fully transparent start
 * means every below-fold section is invisible until the bundle loads and the
 * observer fires — scroll quickly on a slow connection and you arrive at an
 * empty section. At 0.85 the content is legible the moment the HTML paints,
 * and the transform still does the visible work of the reveal.
 */
export const riseIn: Variants = {
  hidden: { opacity: 0.85, y: 16 },
  visible: { opacity: 1, y: 0, transition },
};

/** Softer variant for large media, which shouldn't travel as far. */
export const fadeIn: Variants = {
  hidden: { opacity: 0.9, y: 10 },
  visible: { opacity: 1, y: 0, transition: { ...transition, duration: 0.45 } },
};

/**
 * Headings: a soft mask that uncovers the type as it rises. Paired with the
 * clip-path reveal used for photography so text and image share one idea.
 */
export const maskUp: Variants = {
  hidden: { opacity: 0.85, y: 14, clipPath: "inset(0% 0% 18% 0%)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.45, ease: EASE },
  },
};

/** Parent that staggers its children's reveals. */
export const stagger = (staggerChildren = 0.05, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/**
 * Viewport config shared by every scroll-triggered section.
 *
 * `amount: 0.02` fires as soon as a sliver is in range, and the POSITIVE
 * bottom margin extends the trigger region 14% past the fold so a section is
 * already revealing before the reader reaches it. The previous config did the
 * opposite — it needed 20% of the element visible AND shrank the viewport by
 * 8%, so you scrolled into a section and watched it sit empty.
 */
export const viewportOnce = { once: true, amount: 0.02, margin: "0px 0px 14% 0px" } as const;
