"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads only the DOM animation feature set instead of the whole framer-motion
 * bundle. Every animated component in this project uses `m.*` rather than
 * `motion.*`, so `strict` is on — it throws if a full `motion` component
 * sneaks back in and silently re-adds the weight we just removed.
 *
 * `domAnimation` deliberately excludes layout/shared-element animation. The
 * navbar's active indicator was the only thing that needed it, and it now
 * uses a CSS transform transition instead — a far cheaper way to get the
 * same result.
 *
 * This is a client boundary, but `children` is passed through as a prop, so
 * the tree inside it stays server-rendered.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
