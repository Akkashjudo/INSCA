"use client";

import Image from "next/image";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, m } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { workshopImages } from "@/data/gallery";
import { EASE } from "@/lib/motion";

/**
 * The gallery, kept deliberately quiet.
 *
 * No filters, no captions, no category labels — a masonry wall of
 * photographs and nothing else. Every one of these images already carries a
 * caption somewhere it earns its place (the showcase sequence, the
 * experience pillars); repeating them over a grid of thirty-six turned the
 * page into a list of headings that happened to have pictures behind them.
 *
 * Hover is a slow, small scale and a faint darkening: enough to say "this is
 * clickable", not enough to become an effect. `alt` still carries the full
 * description for assistive technology and for search, so removing the
 * visible text costs nothing semantically.
 *
 * A Radix dialog supplies the lightbox — focus trapping, Escape and scroll
 * locking come with it; arrow keys move between images.
 */
export function GalleryGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const images = workshopImages;
  const active = openIndex !== null ? images[openIndex] : null;

  const move = (delta: number) => {
    setOpenIndex((current) => {
      if (current === null) return current;
      return (current + delta + images.length) % images.length;
    });
  };

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((img, i) => (
          <m.figure
            key={img.src}
            data-reveal=""
            initial={{ opacity: 0.85, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE, delay: Math.min(i * 0.02, 0.18) }}
            className="mb-4 break-inside-avoid"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative block w-full overflow-hidden rounded-xl bg-canvas-3 text-left"
              aria-label={`View larger: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
                loading={i < 6 ? "eager" : "lazy"}
                className="h-auto w-full transition-transform duration-700 [transition-timing-function:var(--ease-insca)] group-hover:scale-[1.04] motion-reduce:transition-none"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-ink-950/0 transition-colors duration-400 group-hover:bg-ink-950/10 group-focus-visible:bg-ink-950/10"
              />
            </button>
          </m.figure>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog.Root
        open={openIndex !== null}
        onOpenChange={(o) => !o && setOpenIndex(null)}
      >
        <AnimatePresence>
          {active ? (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="fixed inset-0 z-[60] bg-ink-950/94 backdrop-blur-sm"
                />
              </Dialog.Overlay>

              <Dialog.Content
                asChild
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") move(1);
                  if (e.key === "ArrowLeft") move(-1);
                }}
              >
                <m.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.28, ease: EASE }}
                  className="fixed inset-0 z-[61] flex flex-col items-center justify-center p-4 sm:p-8"
                >
                  {/*
                    The dialog still needs an accessible name and description
                    even though nothing is drawn — both are the photograph's
                    own alt text, read only by assistive technology.
                  */}
                  <Dialog.Title className="sr-only">{active.alt}</Dialog.Title>
                  <Dialog.Description className="sr-only">
                    Image {(openIndex ?? 0) + 1} of {images.length} from the INSCA
                    workshop gallery.
                  </Dialog.Description>

                  <div className="relative max-h-[78vh] w-full max-w-5xl">
                    <Image
                      src={active.src}
                      alt={active.alt}
                      width={active.width}
                      height={active.height}
                      sizes="(max-width: 1024px) 92vw, 1024px"
                      quality={90}
                      className="mx-auto h-auto max-h-[78vh] w-auto rounded-xl object-contain"
                    />
                  </div>

                  <div className="mt-5 flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => move(-1)}
                      aria-label="Previous image"
                      className="grid size-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/15"
                    >
                      <ChevronLeft className="size-5" />
                    </button>

                    <p className="tabular text-xs font-medium text-ink-300">
                      {(openIndex ?? 0) + 1} / {images.length}
                    </p>

                    <button
                      type="button"
                      onClick={() => move(1)}
                      aria-label="Next image"
                      className="grid size-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/15"
                    >
                      <ChevronRight className="size-5" />
                    </button>
                  </div>

                  <Dialog.Close
                    aria-label="Close"
                    className="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/15 sm:right-6 sm:top-6"
                  >
                    <X className="size-5" />
                  </Dialog.Close>
                </m.div>
              </Dialog.Content>
            </Dialog.Portal>
          ) : null}
        </AnimatePresence>
      </Dialog.Root>
    </>
  );
}
