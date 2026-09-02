import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const button = cva(
  [
    "group/btn relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap",
    "font-display font-semibold rounded-full",
    "transition-[background-color,color,border-color,box-shadow,transform] duration-300",
    "[transition-timing-function:var(--ease-insca)]",
    "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
    // Layered sweep: a tint wipes left -> right behind the label on hover
    "isolate overflow-hidden",
    "before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0",
    "before:transition-transform before:duration-500",
    "before:[transition-timing-function:var(--ease-insca)] hover:before:scale-x-100",
    "hover:scale-[1.015]",
    // Comfortable touch target on every variant
    "min-h-11",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-insca-500 text-white shadow-[var(--shadow-red)] before:bg-white/20 hover:bg-insca-600 hover:shadow-[0_14px_38px_rgba(224,31,38,0.36)]",
        dark: "bg-ink-900 text-white before:bg-white/18 hover:bg-ink-800",
        outline:
          "border border-ink-200 text-ink-900 bg-white/60 before:bg-ink-900/[0.07] hover:border-ink-900 hover:bg-white",
        ghostLight:
          "border border-white/25 text-white bg-white/5 backdrop-blur-sm before:bg-white/15 hover:bg-white/15 hover:border-white/50",
        subtle: "bg-ink-50 text-ink-900 before:bg-ink-900/[0.06] hover:bg-ink-100",
      },
      size: {
        sm: "text-[0.85rem] px-4 py-2.5",
        md: "text-[0.925rem] px-5 py-3",
        lg: "text-[0.98rem] px-6 py-3.5 sm:px-7 sm:py-4",
      },
      block: {
        true: "w-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonBaseProps = VariantProps<typeof button> & {
  className?: string;
  children: ReactNode;
};

export type ButtonLinkProps = ButtonBaseProps &
  Omit<ComponentProps<typeof Link>, "className" | "children">;

/** Anchor-flavoured button. Automatically marks external links safe. */
export function ButtonLink({
  variant,
  size,
  block,
  className,
  children,
  href,
  ...props
}: ButtonLinkProps) {
  const isExternal = typeof href === "string" && /^(https?:)?\/\//.test(href);

  return (
    <Link
      href={href}
      className={cn(button({ variant, size, block }), className)}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </Link>
  );
}

export type ButtonProps = ButtonBaseProps &
  Omit<ComponentProps<"button">, "className" | "children">;

export function Button({ variant, size, block, className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(button({ variant, size, block }), className)} {...props}>
      {children}
    </button>
  );
}

/** Arrow that slides on hover — used inside buttons and links. */
export function ArrowGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={cn(
        "size-[1.05em] shrink-0 transition-transform duration-300 [transition-timing-function:var(--ease-insca)] group-hover/btn:translate-x-1",
        className,
      )}
    >
      <path
        d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { button as buttonVariants };
