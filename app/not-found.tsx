import type { Metadata } from "next";
import { ArrowGlyph, ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-canvas-2 pt-28">
      <div aria-hidden="true" className="absolute inset-0 hero-grid" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_30%,rgba(224,31,38,0.06),transparent_60%)]"
      />

      <div className="wrap relative text-center">
        <p className="tabular font-display text-6xl font-bold text-insca-500 sm:text-7xl">
          404
        </p>
        <h1 className="t-h2 mx-auto mt-5 max-w-xl text-ink-900">
          This page isn&apos;t part of the programme.
        </h1>
        <p className="t-lead mx-auto mt-5 max-w-lg text-ink-500">
          The page you were looking for may have moved. The Level 1A certification and
          everything else is a click away.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            Back to home
            <ArrowGlyph />
          </ButtonLink>
          <ButtonLink href="/courses/level-1a" variant="outline" size="lg">
            Explore Level 1A
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
