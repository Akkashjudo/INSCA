"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Photography reveal: the frame uncovers from the top down while the image
 * inside settles from a slight overscale. Two nested elements because the
 * clip has to live on the frame — scaling the frame would scale the clip
 * with it.
 *
 * Intended for `fill` images: the inner element is absolutely positioned, so
 * the frame must carry its own height (an aspect ratio or a fixed height).
 *
 * Both elements are marked `data-reveal`, so the reduced-motion rule in
 * globals.css clears the clip and the transform together.
 */
export function ImageReveal({
  children,
  className,
  /** Seconds to wait before revealing. */
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      data-reveal=""
      className={cn("relative overflow-hidden", className)}
      initial={{ clipPath: "inset(12% 0% 0% 0%)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.85, ease: EASE, delay }}
    >
      <motion.div
        data-reveal=""
        className="absolute inset-0"
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.1, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
