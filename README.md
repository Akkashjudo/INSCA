# INSCA — Indian National Strength & Conditioning Association

The official INSCA website, rebuilt as a Next.js application. It replaces the
previous single-page static HTML site (preserved under `_legacy/`) and features
the **INSCA + SDAT Level 1A Strength & Conditioning Certification**.

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** — design tokens declared in `app/globals.css` via `@theme`
- **Framer Motion** — scroll reveals and page transitions
- **Radix UI** — accordion (curriculum, FAQ) and dialog (gallery lightbox)

## Commands

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # production build
npm start       # serve the production build
```

> Do not run `npm run build` while `npm run dev` is running — they share the
> `.next` directory and the build will strip the dev server's CSS.

## Project structure

```
app/
  layout.tsx              # fonts, metadata, org JSON-LD, chrome
  page.tsx                # homepage
  about/page.tsx          # organisation, vision, mission, founder, leadership
  courses/level-1a/page.tsx
  workshops/page.tsx      # filterable workshop gallery
  contact/page.tsx
  sitemap.ts  robots.ts  not-found.tsx
  globals.css             # design tokens + utilities

components/
  layout/     navbar, footer, page-header, brand lockups, sticky CTA
  home/       hero, marquee, trust strip, about intro, featured course
  course/     stats, audience, advantages, focus areas, curriculum,
              details, why-insca, FAQ, final CTA
  gallery/    workshop showcase, experience pillars, gallery grid
  people/     faculty, leadership, founder's message
  seo/        JSON-LD builders
  ui/         button, section heading, reveal primitives

data/         course.ts · site.ts · people.ts · gallery.ts · faq.ts
lib/          utils.ts (cn) · motion.ts (shared motion vocabulary)
public/       brand/ · people/ · icons/ · workshops/<category>/
_legacy/      the original HTML site, kept for reference
```

## Editing course content

**`data/course.ts` is the single source of truth** for the Level 1A programme.
Dates, venue, fees, curriculum, faculty, the registration URL and every CTA all
read from it — no course fact is hard-coded in a component. Running a new cohort
means editing that one file.

The fee deadline lives in `earlyBirdDeadline` / `earlyBirdDeadlineLabel` plus the
two `condition` strings on the `fees` array. Nothing else references the date.

Organisation-level facts (registration number, addresses, phone, mission, vision,
founder's message) live in `data/site.ts`. People are in `data/people.ts`.

## Images

Workshop photography lives in `public/workshops/<category>/` as WebP, sized to a
1600px long edge. Every file is a genuine photograph from a previous INSCA
programme at TACSS, Chennai; the source set was trimmed to remove the camera
watermark. `data/gallery.ts` records intrinsic dimensions so `next/image` can
reserve space and avoid layout shift.

**Faculty portraits:** a card renders a photograph only where INSCA has a genuine
one on file. Everyone else gets an initials monogram — `photo: null` in
`data/people.ts` is deliberate, not a placeholder to fill with stock imagery.

## Image treatment

INSCA's photography is the strongest asset the site has, so no photograph is
ever blanketed in a flat overlay. `globals.css` defines five scrims and a
section uses exactly one of them — never two stacked:

| Scrim | Use |
| --- | --- |
| `scrim-left` | Copy sits left of a full-bleed photo (hero, page headers, `md`+) |
| `scrim-bottom` | Copy is bottom-anchored on narrow screens (mobile hero) |
| `scrim-caption` | A one-line caption seated on an image |
| `scrim-card` | A title plus a paragraph on an image card |
| `scrim-center` | Centred copy over full-bleed media (final CTA) |

The stops come from contrast maths rather than taste: against a worst-case
white pixel, white text needs ~0.82 alpha to clear 4.5:1 and ~0.70 to clear
3:1. Each scrim holds that much only across the band where words actually
land, then falls to 8–30% so the rest of the frame reads as a photograph.

Below `md`, page headers do not overlay text on the image at all — the copy
runs on a plain dark ground and the photograph appears beneath it as a
full-bleed band with no scrim, which keeps both perfectly legible.

## Motion

All motion runs through one vocabulary in `lib/motion.ts` — a single easing
curve and four variants (`riseIn`, `fadeIn`, `maskUp`, `stagger`) applied via
the `Reveal`, `RevealGroup` and `RevealItem` primitives in
`components/ui/reveal.tsx`.

Two treatments carry the character: section titles use `maskUp` (the type
uncovers as it rises), and photography uses `ImageReveal`
(`components/ui/image-reveal.tsx`), which uncovers the frame with a clip-path
while the image settles from a slight overscale. The clip lives on the frame
and the scale on a nested element, because scaling the frame would scale the
clip with it.

Every animated wrapper carries a `data-reveal` attribute. Under
`prefers-reduced-motion: reduce`, `globals.css` force-resets those elements to
their visible state. This is handled in CSS rather than by branching on
`useReducedMotion()` in React — that hook returns `null` during server rendering
and `true` on the client, which renders two different trees and causes a
hydration mismatch. The CSS approach also keeps content visible if JS never
runs (a `<noscript>` block in `app/layout.tsx` does the same for that case).
The reset clears `clip-path` as well as opacity and transform, so the image
and heading reveals cannot strand content either.

## Deployment

Every route is statically prerendered, so the site deploys to Vercel, Netlify or
Cloudflare Pages with no configuration. Update `site.url` in `data/site.ts` if
the domain changes — canonical URLs, Open Graph tags, the sitemap and JSON-LD all
derive from it.
