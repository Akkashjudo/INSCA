import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyCta } from "@/components/layout/sticky-cta";
import { MotionProvider } from "@/components/motion-provider";
import { OrganizationSchema } from "@/components/seo/schema";
import { site } from "@/data/site";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "INSCA — Indian National Strength & Conditioning Association | Level 1A Certification",
    template: "%s | INSCA",
  },
  description:
    "INSCA is India's national professional body for Strength & Conditioning. Join the INSCA + SDAT Level 1A Certification in Chennai — a 10-day, 80-hour high-performance course.",
  keywords: [
    "Strength and Conditioning Certification India",
    "INSCA Level 1A",
    "Sports Science Course Chennai",
    "Strength Coach Certification India",
    "SDAT Chennai",
    "Athlete Monitoring Course",
    "Olympic Lifting Certification India",
    "High Performance Sport India",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  openGraph: {
    type: "website",
    siteName: `${site.shortName} — ${site.name}`,
    locale: "en_IN",
    url: site.url,
    title: "Built for High Performance Sport — INSCA Level 1A Certification",
    description:
      "A 10-day, 80-hour INSCA + SDAT accredited Strength & Conditioning certification at TACSS, Chennai. Practical coaching, athlete monitoring and applied sports science.",
    images: [
      {
        url: "/workshops/practical/overhead-demo.webp",
        width: 1600,
        height: 801,
        alt: "An INSCA Strength & Conditioning practical session at TACSS, Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INSCA + SDAT Level 1A Strength & Conditioning Certification",
    description:
      "10 days. 80 hours. Built for high performance sport. TACSS, Chennai — 23 Sep to 2 Oct 2026.",
    images: ["/workshops/practical/overhead-demo.webp"],
  },
  icons: {
    icon: [
      { url: "/icons/favicon.ico", sizes: "any" },
      { url: "/icons/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        {/*
          Scroll reveals are server-rendered at opacity 0 and revealed by
          framer-motion. Without JavaScript nothing would ever reveal them, so
          this resets them to their visible state — the page stays fully
          readable with scripting disabled.
        */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>

        <OrganizationSchema />
        <MotionProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <StickyCta />
        </MotionProvider>
      </body>
    </html>
  );
}
