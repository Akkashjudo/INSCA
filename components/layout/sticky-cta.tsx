"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { level1A } from "@/data/course";
import { contact } from "@/data/site";
import { EASE } from "@/lib/motion";

/**
 * Mobile-only registration bar. Appears once the visitor is past the first
 * screen, so it never competes with the hero's own call to action.
 */
export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <m.div
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          exit={{ y: "110%" }}
          transition={{ duration: 0.4, ease: EASE }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-white/95 backdrop-blur-xl sm:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="flex items-center gap-2.5 px-4 py-3">
            <a
              href={level1A.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 flex-1 items-center justify-center rounded-full bg-insca-500 px-5 font-display text-[0.95rem] font-semibold text-white shadow-[var(--shadow-red)] active:scale-[0.98]"
            >
              Register for Level 1A
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enquire about Level 1A on WhatsApp"
              className="grid size-12 shrink-0 place-items-center rounded-full border border-tricolour-green/40 bg-tricolour-green/10 text-tricolour-green active:scale-95"
            >
              <WhatsAppIcon className="size-5" />
            </a>
          </div>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
