"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { InscaLogo } from "@/components/layout/brand";

/**
 * Branded entry and route transitions.
 *
 * FIRST LOAD of a session shows the preloader: the mark settles, a red rule
 * draws beneath it, then white and charcoal panels wipe off to the right.
 * ~1.05s, and only once — coming back to a page later gets the short wipe
 * instead, because a loader you have already watched is just a delay.
 *
 * EVERY ROUTE CHANGE replays the wipe, keyed on pathname. Next keeps the old
 * page mounted until the next is ready, so the panel covers the swap and
 * there is no white flash.
 *
 * All of it is CSS with `fill-mode: forwards` and `pointer-events: none`, so
 * nothing can be stranded behind a panel or blocked from clicking, even if
 * this component never hydrates. The page renders underneath the whole time.
 */
export function PageReveal() {
  const pathname = usePathname();
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    // sessionStorage read happens after mount, so SSR and hydration agree.
    try {
      if (!sessionStorage.getItem("insca:seen")) {
        setFirstLoad(true);
        sessionStorage.setItem("insca:seen", "1");
      }
    } catch {
      /* private mode — skip the loader rather than risk showing it forever */
    }
  }, []);

  return (
    <>
      {firstLoad ? (
        <div aria-hidden="true">
          <div className="loader-trail" />
          <div className="loader">
            <div className="loader-inner flex flex-col items-center gap-4">
              <InscaLogo className="w-[210px] sm:w-[260px]" priority />
              <span className="loader-rule h-0.5 w-[210px] rounded-full bg-insca-500 sm:w-[260px]" />
            </div>
          </div>
        </div>
      ) : null}

      <div key={pathname} aria-hidden="true">
        <div className="wipe wipe-ink" />
        <div className="wipe wipe-red" />
      </div>
    </>
  );
}
