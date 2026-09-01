import { disciplines } from "@/data/site";

/**
 * A single CSS-animated track of the disciplines INSCA actually teaches.
 * Duplicated once and translated -50%, so the loop is seamless; pure
 * transform, so it never triggers layout.
 */
export function DisciplineMarquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-hairline bg-canvas-2 py-4"
      aria-label="Disciplines covered by INSCA programmes"
    >
      {/* Edge fades */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-canvas-2 to-transparent sm:w-28"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-canvas-2 to-transparent sm:w-28"
      />

      <div className="flex w-max animate-marquee will-change-transform">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex shrink-0 items-center"
            aria-hidden={copy === 1 ? "true" : undefined}
          >
            {disciplines.map((term) => (
              <li
                key={term}
                className="flex shrink-0 items-center gap-8 px-5 font-display text-[0.85rem] font-semibold uppercase tracking-[0.13em] text-ink-500 sm:text-[0.92rem]"
              >
                {term}
                <span aria-hidden="true" className="size-1.5 rotate-45 bg-insca-500/70" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
