import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

/**
 * The INSCA wordmark always sits on a clean white chip and is never
 * recoloured or distorted — carried over from the original brand guidance.
 */
export function InscaLogo({
  className,
  imgClassName,
  priority = false,
}: {
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-white px-2.5 py-1.5",
        className,
      )}
    >
      <Image
        src="/brand/insca-logo.png"
        alt={`${site.shortName} — ${site.name}`}
        width={1600}
        height={347}
        priority={priority}
        sizes="(max-width: 640px) 168px, 210px"
        className={cn("h-auto w-[152px] sm:w-[186px]", imgClassName)}
      />
    </span>
  );
}

export function SdatLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/sdat-logo.png"
      alt="Sports Development Authority of Tamil Nadu (SDAT)"
      width={238}
      height={222}
      sizes="72px"
      className={cn("h-auto w-14 object-contain", className)}
    />
  );
}

/**
 * INSCA × SDAT accreditation lockup. Both marks sit on white so neither
 * logo is shown against a colour it was not designed for.
 */
export function AccreditationLockup({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-4 rounded-2xl border px-4 py-3",
        tone === "dark"
          ? "border-white/15 bg-white/95"
          : "border-hairline bg-white shadow-[var(--shadow-card)]",
        className,
      )}
    >
      <Image
        src="/brand/insca-logo.png"
        alt="INSCA"
        width={1600}
        height={347}
        sizes="140px"
        className="h-auto w-[118px] sm:w-[140px]"
      />
      <span aria-hidden="true" className="h-9 w-px bg-ink-200" />
      <SdatLogo className="w-11 sm:w-12" />
    </div>
  );
}
