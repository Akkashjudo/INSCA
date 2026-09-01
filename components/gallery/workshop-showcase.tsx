import Image from "next/image";
import { ArrowGlyph, ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ImageReveal } from "@/components/ui/image-reveal";
import { imagesIn, type WorkshopImage } from "@/data/gallery";

/**
 * "See INSCA in Action".
 *
 * Desktop: a sticky statement on the left while a sequence of real workshop
 * photographs scrolls past on the right. Uses native CSS `position: sticky`
 * rather than scroll-hijacking, so the page still scrolls at the reader's
 * own pace and keyboard/reduced-motion users are unaffected.
 *
 * Mobile: the same photographs become a scroll-snapped horizontal track.
 */

const sequence: WorkshopImage[] = [
  ...imagesIn("practical").slice(0, 2),
  ...imagesIn("testing").slice(0, 1),
  ...imagesIn("strength").slice(0, 1),
  ...imagesIn("analysis").slice(0, 1),
  ...imagesIn("cpr").slice(0, 1),
];

export function WorkshopShowcase() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink-950">
      <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-50" />

      <div className="wrap relative section-y">
        <div className="lg:grid lg:grid-cols-[0.86fr_1fr] lg:gap-16">
          {/* Sticky statement */}
          <div className="lg:sticky lg:top-28 lg:self-start lg:py-8">
            <Reveal>
              <span className="t-eyebrow inline-flex items-center gap-2.5 text-insca-400">
                <span aria-hidden="true" className="h-px w-6 rounded bg-insca-400" />
                See INSCA in action
              </span>

              <h2 className="t-h2 mt-4 text-white">
                High Performance
                <br />
                Is Learned by{" "}
                <span className="text-insca-500">Doing.</span>
              </h2>

              <p className="t-lead mt-6 max-w-md text-ink-300">
                Explore glimpses from previous INSCA workshops and see how classroom
                learning is translated into practical high-performance coaching
                environments.
              </p>

              <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-ink-400">
                Every photograph here is from a real INSCA programme at the Tamil Nadu
                Centre for Sports Science — the same facility, faculty and equipment
                Level 1A participants will work with.
              </p>

              <div className="mt-8 hidden lg:block">
                <ButtonLink href="/workshops" variant="ghostLight" size="lg">
                  View the full gallery
                  <ArrowGlyph />
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          {/* Desktop: scrolling photo sequence */}
          <div className="mt-12 hidden lg:mt-0 lg:block">
            <div className="space-y-6">
              {sequence.map((img, i) => (
                <figure key={img.src} className="group relative overflow-hidden rounded-2xl">
                  <ImageReveal className="aspect-16/10">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 52vw"
                        loading="lazy"
                        className="object-cover transition-transform duration-700 [transition-timing-function:var(--ease-insca)] group-hover:scale-[1.03]"
                    />
                  </ImageReveal>
                  <div className="pointer-events-none absolute inset-0 scrim-caption" />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
                    <span className="tabular text-xs font-semibold text-insca-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-sm font-semibold text-white">
                      {img.caption}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile / tablet: horizontal swipe track */}
        <div className="mt-10 lg:hidden">
          <ul className="no-scrollbar -mx-[clamp(20px,5vw,56px)] flex snap-x snap-mandatory gap-4 overflow-x-auto px-[clamp(20px,5vw,56px)] pb-2">
            {sequence.map((img, i) => (
              <li
                key={img.src}
                className="w-[82vw] max-w-sm shrink-0 snap-center sm:w-[62vw]"
              >
                <figure className="relative overflow-hidden rounded-2xl">
                  <div className="relative aspect-4/3">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 82vw, 62vw"
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 scrim-caption" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 p-4">
                    <span className="tabular text-[0.7rem] font-semibold text-insca-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[0.85rem] font-semibold text-white">
                      {img.caption}
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <p className="mt-3 text-xs text-ink-500">Swipe to explore →</p>

          <div className="mt-7">
            <ButtonLink href="/workshops" variant="ghostLight" size="lg" block>
              View the full gallery
              <ArrowGlyph />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
