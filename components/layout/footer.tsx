import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { contact, site, venue } from "@/data/site";
import { level1A } from "@/data/course";
import { InscaLogo, SdatLogo } from "./brand";

const explore = [
  { label: "About INSCA", href: "/about" },
  { label: "Level 1A Certification", href: "/courses/level-1a" },
  { label: "Curriculum", href: "/courses/level-1a#curriculum" },
  { label: "Faculty", href: "/courses/level-1a#faculty" },
  { label: "Workshop Gallery", href: "/workshops" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-ink-950 text-ink-300">
      <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -left-40 top-0 hidden size-[380px] rounded-full bg-insca-500/10 blur-[90px] lg:block"
      />

      <div className="wrap relative section-y-sm">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Identity */}
          <div>
            {/*
              The mark is a route home wherever it appears — the navbar's and
              this one behave identically, so a reader who reaches the bottom
              of a long page always has the logo as a way back.
            */}
            <Link
              href="/"
              aria-label={`${site.shortName} — home`}
              className="inline-flex min-h-11 items-center"
            >
              <InscaLogo />
            </Link>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed">
              Advancing Strength &amp; Conditioning through education, research,
              certification, innovation and professional excellence.
            </p>
            <p className="mt-5 font-display text-[0.95rem] font-semibold text-white">
              Empowering coaches. Developing athletes.{" "}
              <span className="text-insca-400">Strengthening India.</span>
            </p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <SdatLogo className="w-10" />
              <div className="text-xs leading-snug">
                <span className="block font-display font-semibold text-white">
                  In collaboration with SDAT
                </span>
                <span className="text-ink-400">
                  Sports Development Authority of Tamil Nadu
                </span>
              </div>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h2 className="t-eyebrow text-white">Explore</h2>
            <ul className="mt-4 space-y-1">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex min-h-9 items-center gap-2 py-1 text-[0.94rem] transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-insca-400 transition-[width] duration-300 group-hover:w-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="t-eyebrow text-white">Get in touch</h2>
            <ul className="mt-4 space-y-2 text-[0.94rem]">
              <li>
                <a
                  href={contact.phoneHref}
                  className="inline-flex min-h-9 items-center gap-3 py-1 transition-colors duration-300 hover:text-white"
                >
                  <Phone className="size-4 shrink-0 text-insca-400" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-9 items-center gap-3 py-1 transition-colors duration-300 hover:text-white"
                >
                  <WhatsAppIcon className="size-4 shrink-0 text-insca-400" />
                  WhatsApp enquiry
                </a>
              </li>
              <li>
                <a
                  href={contact.emailHref}
                  className="inline-flex min-h-9 items-center gap-3 break-all py-1 transition-colors duration-300 hover:text-white"
                >
                  <Mail className="size-4 shrink-0 text-insca-400" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.google.com/maps?q=${venue.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-3 py-1 leading-relaxed transition-colors duration-300 hover:text-white"
                >
                  <MapPin className="mt-1 size-4 shrink-0 text-insca-400" />
                  <span>
                    {venue.name}
                    <br />
                    SDAT, {venue.street}, {venue.locality} – {venue.postalCode}
                  </span>
                </a>
              </li>
            </ul>

            <div className="mt-7 rounded-xl border border-insca-500/25 bg-insca-500/10 p-4">
              <p className="font-display text-sm font-semibold text-white">
                {level1A.shortTitle} · {level1A.dateLabelShort}
              </p>
              <p className="mt-1 text-xs text-ink-400">
                {level1A.venueShort} · {level1A.admission}
              </p>
              <Link
                href={level1A.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex min-h-9 items-center text-sm font-semibold text-insca-400 underline-offset-4 hover:text-white hover:underline"
              >
                Register now →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span className="tabular">Reg. No. {site.registrationNo}</span>
        </div>
      </div>
    </footer>
  );
}
