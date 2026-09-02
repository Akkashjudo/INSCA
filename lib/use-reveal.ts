"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { useInView } from "framer-motion";
import { viewportOnce } from "./motion";

/**
 * Whether a reveal should be in its resting (visible) state.
 *
 * `whileInView` on its own has proved unreliable in this project: fast
 * scrolling repeatedly left sections stranded in their `hidden` state —
 * images fully clipped, split columns parked 44px off-position. Every reveal
 * therefore goes through this hook, which adds two guarantees on top of the
 * observer:
 *
 *   1. `armed` — the hidden state is only applied on the frame after mount,
 *      so server-rendered HTML and first paint always show finished content.
 *   2. `forced` — a timeout settles anything the observer missed, so a reveal
 *      can never strand content no matter what the observer does.
 *
 * The animation still plays normally in the common case; these only decide
 * how it fails.
 */
export function useReveal(immediate = false) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, viewportOnce);
  const [armed, setArmed] = useState(false);
  const [forced, setForced] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setArmed(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setForced(true), 1200);
    return () => clearTimeout(id);
  }, []);

  const revealed = !armed || immediate || inView || forced;
  return { ref: ref as RefObject<HTMLDivElement>, revealed };
}
