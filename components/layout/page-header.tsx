import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Crumb = { name: string; href: string };

/**
 * Dark page header used at the top of every inner page. Because it is always
 * dark, the fixed navbar can safely render its transparent (light-text) state
 * over it before the visitor scrolls.
 *
 * IMAGE TREATMENT
 * From `md` up the photograph sits behind the text with a left-weighted
 * scrim: the copy column stays dark enough to read while the right-hand
 * third of the frame is left essentially untouched.
 *
 * Below `md` the heading spans the full width, so any scrim strong enough to
 * keep it legible would black the photograph out entirely. Instead the text
 * runs on a plain dark ground and the photograph is shown beneath it as a
 * full-bleed band with no overlay at all — fully visible, and the copy keeps
 * maximum contrast.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
  image,
  imageAlt = "",
  imagePosition = "center",
  crumbs,
  children,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-ink-950 pt-32 sm:pt-40">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {image ? (
          <div className="absolute inset-0 hidden md:block">
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: imagePosition }}
            />
            <div
              className={cn(
                "absolute inset-0",
                align === "center" ? "scrim-center" : "scrim-left",
              )}
            />
            {/* Seats the header into the section below it. */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-950 to-transparent" />
          </div>
        ) : null}

        {/* Plain ground on mobile, and everywhere when there is no photograph */}
        <div className={cn("absolute inset-0 grid-lines opacity-60", image && "md:hidden")} />
        <div
          className={cn(
            "absolute inset-0 bg-[radial-gradient(100%_70%_at_20%_20%,rgba(224,31,38,0.18),transparent_60%)]",
            image && "md:hidden",
          )}
        />
      </div>

      <div className="wrap relative pb-14 sm:pb-20">
        {crumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol
              className={cn(
                "flex flex-wrap items-center gap-1.5 text-[0.8rem] text-ink-400",
                align === "center" && "justify-center",
              )}
            >
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-1.5">
                  {i > 0 ? (
                    <ChevronRight className="size-3.5 text-ink-600" aria-hidden="true" />
                  ) : null}
                  {i === crumbs.length - 1 ? (
                    <span
                      aria-current="page"
                      className="inline-flex min-h-8 items-center py-1 text-ink-200"
                    >
                      {c.name}
                    </span>
                  ) : (
                    <Link
                      href={c.href}
                      className="inline-flex min-h-8 items-center py-1 transition-colors hover:text-white"
                    >
                      {c.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          <Reveal>
            {eyebrow ? (
              <span
                className={cn(
                  "t-eyebrow inline-flex items-center gap-2.5 text-insca-400",
                  align === "center" && "justify-center",
                )}
              >
                <span aria-hidden="true" className="h-px w-6 rounded bg-insca-400" />
                {eyebrow}
              </span>
            ) : null}

            <h1 className="t-display mt-4 text-white">{title}</h1>

            {/*
              Held to max-w-xl so the lead never runs past the dark part of
              the desktop scrim — body copy needs a higher contrast ratio
              than the display heading does.
            */}
            {lead ? (
              <p
                className={cn(
                  "t-lead mt-6 max-w-xl text-ink-200",
                  align === "center" && "mx-auto",
                )}
              >
                {lead}
              </p>
            ) : null}
          </Reveal>

          {children ? <Reveal delay={0.12}>{children}</Reveal> : null}
        </div>
      </div>

      {/* Mobile: the photograph, shown plainly and completely */}
      {image ? (
        <div className="relative h-56 w-full md:hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
        </div>
      ) : null}
    </section>
  );
}
