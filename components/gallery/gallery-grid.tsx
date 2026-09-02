"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, m } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  categoryLabels,
  workshopImages,
  type WorkshopCategory,
} from "@/data/gallery";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

const filters: ("all" | WorkshopCategory)[] = [
  "all",
  "practical",
  "strength",
  "testing",
  "analysis",
  "classroom",
  "cpr",
  "archive",
];

/**
 * Filterable masonry-style gallery with a Radix dialog lightbox.
 * Radix handles focus trapping, Escape and scroll locking; arrow keys move
 * between images.
 */
export function GalleryGrid() {
  const [filter, setFilter] = useState<"all" | WorkshopCategory>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const images = useMemo(
    () =>
      filter === "all"
        ? workshopImages
        : workshopImages.filter((i) => i.category === filter),
    [filter],
  );

  const active = openIndex !== null ? images[openIndex] : null;

  const move = (delta: number) => {
    setOpenIndex((current) => {
      if (current === null) return current;
      return (current + delta + images.length) % images.length;
    });
  };

  return (
    <>
      {/* Filters */}
      <div className="no-scrollbar -mx-[clamp(20px,5vw,56px)] flex gap-2 overflow-x-auto px-[clamp(20px,5vw,56px)] pb-1">
        {filters.map((f) => {
          const label = f === "all" ? "All" : categoryLabels[f];
          const selected = filter === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => {
                setFilter(f);
                setOpenIndex(null);
              }}
              aria-pressed={selected}
              className={cn(
                "min-h-10 shrink-0 whitespace-nowrap rounded-full border px-4 font-display text-[0.84rem] font-semibold transition-all duration-300",
                selected
                  ? "border-insca-500 bg-insca-500 text-white"
                  : "border-hairline bg-white text-ink-600 hover:border-ink-300 hover:text-ink-900",
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((img, i) => (
          <m.figure
            key={img.src}
            layout
            data-reveal=""
            initial={{ opacity: 0.85, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE, delay: Math.min(i * 0.02, 0.18) }}
            className="mb-4 break-inside-avoid"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative block w-full overflow-hidden rounded-xl text-left"
              aria-label={`View larger: ${img.caption}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
                loading={i < 6 ? "eager" : "lazy"}
                className="h-auto w-full transition-transform duration-700 [transition-timing-function:var(--ease-insca)] group-hover:scale-[1.04]"
              />
              <span className="scrim-caption absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100 group-focus-visible:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-400 [transition-timing-function:var(--ease-insca)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <span className="block font-display text-[0.85rem] font-semibold text-white">
                  {img.caption}
                </span>
                <span className="mt-0.5 block text-[0.72rem] text-ink-300">
                  {categoryLabels[img.category]}
                </span>
              </span>
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
                  <Dialog.Title className="sr-only">{active.caption}</Dialog.Title>
                  <Dialog.Description className="sr-only">
                    {active.alt}
                  </Dialog.Description>

                  <div className="relative max-h-[78vh] w-full max-w-5xl">
                    <Image
                      src={active.src}
                      alt={active.alt}
                      width={active.width}
                      height={active.height}
                      sizes="(max-width: 1024px) 92vw, 1024px"
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

                    <div className="text-center">
                      <p className="font-display text-sm font-semibold text-white">
                        {active.caption}
                      </p>
                      <p className="tabular mt-0.5 text-xs text-ink-400">
                        {(openIndex ?? 0) + 1} / {images.length}
                      </p>
                    </div>

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
