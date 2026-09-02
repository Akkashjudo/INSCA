import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

/**
 * INSCA wordmark.
 *
 * The asset is a genuine transparent PNG (the white background baked into the
 * original artwork was keyed out and the edges un-premultiplied), so the mark
 * sits directly on whatever surface it is placed on. It must never be wrapped
 * in a white chip, card, border or shadow.
 */
export function InscaLogo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/brand/insca-logo.png"
      alt={`${site.shortName} — ${site.name}`}
      width={1560}
      height={314}
      priority={priority}
      sizes="(max-width: 640px) 170px, 210px"
      className={cn("h-auto w-[158px] sm:w-[192px]", className)}
    />
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

/** INSCA × SDAT accreditation lockup. */
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
        "inline-flex items-center gap-4 rounded-xl border px-4 py-3",
        tone === "dark"
          ? "border-white/12 bg-white/[0.04]"
          : "border-hairline bg-white",
        className,
      )}
    >
      <InscaLogo className="w-[124px] sm:w-[140px]" />
      <span
        aria-hidden="true"
        className={cn("h-8 w-px", tone === "dark" ? "bg-white/15" : "bg-ink-200")}
      />
      <SdatLogo className="w-11 sm:w-12" />
    </div>
  );
}
