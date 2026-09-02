"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav } from "@/data/site";
import { level1A } from "@/data/course";
import { EASE } from "@/lib/motion";
import { ButtonLink } from "@/components/ui/button";
import { InscaLogo } from "./brand";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll and support Escape while the menu is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  /** The bar is opaque once scrolled or while the mobile menu is open. */
  const solid = scrolled || open;

  const isActive = (href: string) => {
    const base = href.split("#")[0];
    if (base === "/") return pathname === "/";
    return pathname === base || pathname.startsWith(base + "/");
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-400",
          "[transition-timing-function:var(--ease-insca)]",
          solid
            ? "border-b border-hairline bg-white/88 backdrop-blur-xl shadow-[0_1px_0_rgba(15,18,24,0.04)]"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="wrap flex h-[68px] items-center justify-between gap-4 sm:h-[76px]">
          <Link
            href="/"
            aria-label="INSCA — home"
            className="flex min-h-11 shrink-0 items-center"
          >
            <InscaLogo priority />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-[0.92rem] font-medium transition-colors duration-300",
                  isActive(item.href)
                    ? "text-insca-600"
                    : "text-ink-600 hover:text-ink-900",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-insca-500",
                    "transition-transform duration-400 [transition-timing-function:var(--ease-insca)]",
                    isActive(item.href) ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <ButtonLink
              href={level1A.registrationUrl}
              size="sm"
              className="hidden sm:inline-flex"
            >
              Register Now
            </ButtonLink>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={cn(
                "grid size-11 place-items-center rounded-full border transition-colors duration-300 lg:hidden",
                "border-ink-200 text-ink-900 hover:bg-ink-50",
              )}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <m.div
            id="mobile-menu"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: EASE }}
            className="fixed inset-x-0 top-[68px] z-40 max-h-[calc(100dvh-68px)] overflow-y-auto border-b border-hairline bg-white sm:top-[76px] sm:max-h-[calc(100dvh-76px)] lg:hidden"
          >
            <nav aria-label="Mobile" className="wrap flex flex-col py-3">
              {nav.map((item, i) => (
                <m.div
                  key={item.href}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i + 0.05, duration: 0.35, ease: EASE }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between border-b border-hairline py-4 font-display text-lg font-semibold text-ink-900"
                  >
                    {item.label}
                    <span className="tabular text-xs font-medium text-ink-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </m.div>
              ))}

              <div className="flex flex-col gap-2.5 py-5">
                <ButtonLink href={level1A.registrationUrl} size="lg" block>
                  Register for Level 1A
                </ButtonLink>
                <ButtonLink href="/contact" variant="outline" size="lg" block>
                  Contact INSCA
                </ButtonLink>
              </div>
            </nav>
          </m.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
