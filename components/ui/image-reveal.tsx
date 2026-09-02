"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { DUR, EASE_OUT_EXPO, type Direction } from "@/lib/motion";
import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";

/**
 * Masked image reveal.
 *
 * The frame uncovers with a clip-path travelling in a chosen direction while
 * the image settles from a slight overscale. Direction is set per usage, so
 * frames on the left of a layout open left-to-right and those on the right
 * mirror it — the page reads as composed rather than uniformly animated.
 *
 * A 100% clip means a reveal that never fires leaves the image completely
 * invisible, which is exactly what happened when this relied on an observer
 * alone. `useReveal` supplies the guards: the clip is applied only after
 * mount, and a timeout settles anything the observer missed.
 *
 * Two nested elements because the clip has to live on the frame; scaling the
 * frame would scale the clip with it. Intended for `fill` images — the frame
 * must carry its own height.
 */
const START: Record<Direction, string> = {
  left: "inset(0 100% 0 0)",   // uncovers left -> right
  right: "inset(0 0 0 100%)",  // uncovers right -> left
  up: "inset(100% 0 0 0)",     // uncovers bottom -> top
};

export function ImageReveal({
  children,
  className,
  delay = 0,
  from = "left",
  immediate = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: Direction;
  /** Play on mount — required for anything at or near the top of a page. */
  immediate?: boolean;
}) {
  const { ref, revealed } = useReveal(immediate);

  return (
    <m.div
      ref={ref}
      data-reveal=""
      className={cn("relative overflow-hidden", className)}
      initial={false}
      animate={{ clipPath: revealed ? "inset(0 0 0 0)" : START[from] }}
      transition={{ duration: DUR.reveal, ease: EASE_OUT_EXPO, delay: revealed ? delay : 0 }}
    >
      <m.div
        data-reveal=""
        className="absolute inset-0 will-change-transform"
        initial={false}
        animate={{ scale: revealed ? 1 : 1.08 }}
        transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: revealed ? delay : 0 }}
      >
        {children}
      </m.div>
    </m.div>
  );
}
