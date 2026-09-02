import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ImageReveal } from "@/components/ui/image-reveal";
import { maskUp, riseIn } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Crumb = { name: string; href: string };

/**
 * Inner-page masthead, built on the same off-white ground as the homepage
 * hero so the navbar's transparent state is legible everywhere.
 *
 * Photography is shown as a contained band beneath the copy rather than as a
 * darkened backdrop behind it — the picture stays a picture, and the type
 * keeps full contrast. No scrim is involved.
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
    <section className="relative isolate overflow-hidden bg-canvas-2 pt-32 sm:pt-40">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute -right-40 top-[30%] size-[480px] rounded-full bg-insca-500/[0.04] blur-[140px]" />
      </div>

      <div className="wrap relative pb-12 sm:pb-16">
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
                    <ChevronRight className="size-3.5 text-ink-300" aria-hidden="true" />
                  ) : null}
                  {i === crumbs.length - 1 ? (
                    <span
                      aria-current="page"
                      className="inline-flex min-h-8 items-center py-1 text-ink-600"
                    >
                      {c.name}
                    </span>
                  ) : (
                    <Link
                      href={c.href}
                      className="inline-flex min-h-8 items-center py-1 transition-colors hover:text-insca-600"
                    >
                      {c.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <RevealGroup
          staggerChildren={0.09}
          className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}
        >
          {eyebrow ? (
            <RevealItem
              as="span"
              variants={riseIn}
              className={cn(
                "t-eyebrow inline-flex items-center gap-2.5 text-insca-500",
                align === "center" && "justify-center",
              )}
            >
              <span aria-hidden="true" className="h-px w-8 bg-insca-500" />
              {eyebrow}
            </RevealItem>
          ) : null}

          <RevealItem variants={maskUp} className="mt-4">
            <h1 className="t-display text-ink-900">{title}</h1>
          </RevealItem>

          {lead ? (
            <RevealItem
              as="p"
              variants={riseIn}
              className={cn("t-lead mt-6 max-w-2xl text-ink-500", align === "center" && "mx-auto")}
            >
              {lead}
            </RevealItem>
          ) : null}
        </RevealGroup>

        {children ? <Reveal delay={0.14}>{children}</Reveal> : null}
      </div>

      {/* The photograph, shown plainly and in full */}
      {image ? (
        <div className="wrap relative pb-14 sm:pb-20">
          <ImageReveal className="aspect-16/10 rounded-2xl sm:aspect-[21/9]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1240px"
              className="object-cover"
              style={{ objectPosition: imagePosition }}
            />
          </ImageReveal>
        </div>
      ) : null}
    </section>
  );
}
