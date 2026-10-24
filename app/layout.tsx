import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyCta } from "@/components/layout/sticky-cta";
import { ScrollManager } from "@/components/layout/scroll-manager";
import { BackToTop } from "@/components/layout/back-to-top";
import { MotionProvider } from "@/components/motion-provider";
import { PageReveal } from "@/components/ui/page-reveal";
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
    /* Fallback for any route that does not set its own title; kept identical
       to the homepage so the brand reads the same wherever it surfaces. */
    default: "INSCA | Strength & Conditioning Certification India",
    template: "%s | INSCA",
  },
  description:
    "Indian National Strength & Conditioning Association (INSCA). Explore professional strength and conditioning certifications, education and training programs in India.",
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
    title: "INSCA | Strength & Conditioning Certification India",
    description:
      "Indian National Strength & Conditioning Association (INSCA). Explore professional strength and conditioning certifications, education and training programs in India.",
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
    title: "INSCA | Strength & Conditioning Certification India",
    description:
      "Indian National Strength & Conditioning Association (INSCA). Explore professional strength and conditioning certifications, education and training programs in India.",
    images: ["/workshops/practical/overhead-demo.webp"],
  },
  /*
   * One icon set, declared once. The .ico is a genuine multi-resolution file
   * (16, 32 and 48px inside it) — 48px is the size Google indexes for the
   * search-result favicon, so it is listed first and its sizes are explicit
   * rather than "any". The SVG covers high-DPI browser tabs and the two PNGs
   * give crawlers and Android a raster path without going via the manifest.
   */
  icons: {
    icon: [
      { url: "/icons/favicon.ico", sizes: "48x48 32x32 16x16", type: "image/x-icon" },
      { url: "/icons/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: { url: "/icons/apple-touch-icon.png", sizes: "180x180" },
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
    /*
      `data-scroll-behavior="smooth"` tells the App Router that the smooth
      scrolling in globals.css is deliberate, so it keeps suspending it during
      route transitions. Without it Next warns, and a future version would
      stop suspending — which would animate every route change up through the
      previous page's full height.
    */
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sora.variable} ${inter.variable}`}
    >
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
          <ScrollManager />
          <PageReveal />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <StickyCta />
          <BackToTop />
        </MotionProvider>
      </body>
    </html>
  );
}
