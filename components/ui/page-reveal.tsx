"use client";

import { usePathname } from "next/navigation";

/**
 * Branded wipe that uncovers the page.
 *
 * Keyed on the pathname, so it remounts and replays on every route change —
 * that gives each navigation a wipe-in without intercepting the router, and
 * because Next keeps the previous page mounted until the next one is ready,
 * there is never a white flash between routes.
 *
 * The animation itself is pure CSS (`.wipe`, see globals.css) with
 * `fill-mode: forwards`, so the panels clear themselves even if this
 * component never hydrates. The page underneath is fully rendered the whole
 * time — nothing waits on the wipe.
 */
export function PageReveal() {
  const pathname = usePathname();

  return (
    <div key={pathname} aria-hidden="true">
      <div className="wipe wipe-ink" />
      <div className="wipe wipe-red" />
    </div>
  );
}
