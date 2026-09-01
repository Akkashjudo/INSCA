"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { riseIn, stagger, viewportOnce } from "@/lib/motion";

/**
 * Tags a reveal may render as.
 *
 * These are looked up on framer-motion's `motion` proxy, which caches one
 * component per tag. Creating the component inside render instead (via
 * `motion.create`) produces a new component identity every render, which
 * remounts the element and resets its in-view observer — the reveal then
 * sticks at opacity 0 forever. Keep this lookup outside the render path.
 */
type RevealTag =
  | "div"
  | "section"
  | "article"
  | "figure"
  | "ul"
  | "li"
  | "span"
  | "p";

const motionFor = (tag: RevealTag) => motion[tag];

/**
 * REDUCED MOTION
 *
 * Every reveal carries `data-reveal`, and globals.css force-resets those
 * elements to their visible state inside a `prefers-reduced-motion` query.
 *
 * This is handled in CSS rather than by branching on `useReducedMotion()`:
 * that hook returns `null` during server rendering and `true` on the client,
 * so branching on it renders two different trees and produces a hydration
 * mismatch. CSS also keeps the content visible if JavaScript never runs.
 */

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds of delay before this element reveals. */
  delay?: number;
  as?: RevealTag;
  variants?: Variants;
};

/**
 * The site's only scroll-reveal wrapper. The client boundary stops here, so
 * the content passed in stays a Server Component.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  variants = riseIn,
}: RevealProps) {
  const MotionTag = motionFor(as);

  return (
    <MotionTag
      data-reveal=""
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
  as?: RevealTag;
};

/** Staggers direct <RevealItem> children as the group enters the viewport. */
export function RevealGroup({
  children,
  className,
  staggerChildren = 0.07,
  delayChildren = 0,
  as = "div",
}: RevealGroupProps) {
  const MotionTag = motionFor(as);

  return (
    <MotionTag
      data-reveal=""
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={stagger(staggerChildren, delayChildren)}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
  variants = riseIn,
}: {
  children: ReactNode;
  className?: string;
  as?: RevealTag;
  variants?: Variants;
}) {
  const MotionTag = motionFor(as);

  return (
    <MotionTag data-reveal="" className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
