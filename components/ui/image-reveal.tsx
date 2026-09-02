"use client";

import { m, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { DUR, EASE_OUT_EXPO, type Direction } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Masked image reveal.
 *
 * The frame uncovers with a clip-path travelling in a chosen direction while
 * the image settles from a slight overscale. Direction is set per usage, so
 * images on the left of a layout open left-to-right and those on the right
 * mirror it — the page reads as composed rather than uniformly animated.
 *
 * FAIL-SAFE BY DESIGN
 * A 100% clip means a reveal that never fires leaves the image completely
 * invisible. Relying on an intersection observer alone is therefore unsafe:
 * eleven frames were found stranded at `inset(0 100% 0 0)` during testing.
 * Three things guard against that:
 *
 *   1. The clip is only applied after mount. Server-rendered HTML, and the
 *      first paint, show the image in full.
 *   2. A timeout force-reveals anything still hidden after 1.2s, whatever
 *      the observer did.
 *   3. `data-reveal` lets the reduced-motion rule clear the clip outright.
 *
 * Intended for `fill` images — the frame must carry its own height.
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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.02, margin: "0px 0px 14% 0px" });
  const [armed, setArmed] = useState(false);
  const [forced, setForced] = useState(false);

  // Arm on the next frame so the first paint shows the image uncovered.
  useEffect(() => {
    const id = requestAnimationFrame(() => setArmed(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Safety net: never leave a frame hidden, whatever the observer does.
  useEffect(() => {
    const id = setTimeout(() => setForced(true), 1200);
    return () => clearTimeout(id);
  }, []);

  const revealed = !armed || immediate || inView || forced;

  return (
    <m.div
      ref={ref}
      data-reveal=""
      className={cn("relative overflow-hidden", className)}
      animate={{ clipPath: revealed ? "inset(0 0 0 0)" : START[from] }}
      initial={false}
      transition={{ duration: DUR.reveal, ease: EASE_OUT_EXPO, delay: revealed ? delay : 0 }}
    >
      <m.div
        data-reveal=""
        className="absolute inset-0 will-change-transform"
        animate={{ scale: revealed ? 1 : 1.08 }}
        initial={false}
        transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: revealed ? delay : 0 }}
      >
        {children}
      </m.div>
    </m.div>
  );
}
