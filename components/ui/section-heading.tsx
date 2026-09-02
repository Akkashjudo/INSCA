import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { RevealGroup, RevealItem } from "./reveal";
import { maskUp, riseIn, slideIn } from "@/lib/motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  /** Renders as h3 inside sections that already own the h2. */
  as?: "h2" | "h3";
  /** Direction the eyebrow and lead travel in from. */
  from?: "left" | "right" | "up";
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
  className,
  as: Tag = "h2",
  from = "up",
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <RevealGroup
      staggerChildren={0.09}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <RevealItem
          as="span"
          variants={from === "up" ? riseIn : slideIn(from)}
          className={cn(
            "t-eyebrow inline-flex items-center gap-2.5",
            dark ? "text-insca-400" : "text-insca-500",
            align === "center" && "justify-center",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "h-px w-6 rounded",
              dark ? "bg-insca-400" : "bg-insca-500",
            )}
          />
          {eyebrow}
        </RevealItem>
      ) : null}

      <RevealItem variants={maskUp} className="mt-3.5">
        <Tag className={cn("t-h2", dark ? "text-white" : "text-ink-900")}>
          {title}
        </Tag>
      </RevealItem>

      {lead ? (
        <RevealItem
          as="p"
          variants={from === "up" ? riseIn : slideIn(from)}
          className={cn("t-lead mt-5", dark ? "text-ink-300" : "text-ink-500")}
        >
          {lead}
        </RevealItem>
      ) : null}
    </RevealGroup>
  );
}

/** Highlights a fragment of a heading in INSCA red. */
export function Accent({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span className={tone === "dark" ? "text-insca-400" : "text-insca-500"}>
      {children}
    </span>
  );
}
