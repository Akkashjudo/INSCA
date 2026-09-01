# INSCA — Indian National Strength & Conditioning Association

Production-ready, premium single-page website for INSCA. Built as a fast static
site (HTML + CSS + vanilla JS, GSAP via CDN) — no build step, deploy the folder as-is.

## Run locally
Any static server works. With Node installed:

```
npx serve -l 8899 .
```

Then open http://localhost:8899 . (Use a server rather than opening `index.html`
directly, so the root-absolute paths like `/assets/...` resolve.)

## Deploy
Upload the whole folder to the web root of **www.insca.in** (Netlify, Vercel,
Cloudflare Pages, GitHub Pages, or any host). All links are root-absolute, so the
site must be served from the domain root. HTTPS is required for the WhatsApp CTAs
and Google Maps embed to behave correctly.

## Project structure
```
index.html            # full page: all sections + SEO meta + JSON-LD schema
robots.txt            # allow-all + sitemap reference
sitemap.xml           # XML sitemap (with image entry)
site.webmanifest      # PWA / app icon manifest
assets/
  css/styles.css      # design system (colours derived from the INSCA logo)
  js/main.js          # nav, reveals, counters, magnetic CTAs, parallax, lightbox
  img/                # all photos (renamed) + favicon.svg
.claude/launch.json   # local preview server config
```

## Design system (derived from the logo)
- **Red** `#e12b26` — from the INSCA wordmark → primary "Register" CTAs
- **Gold / saffron** `#eab24c / #ff9a3c` — premium accents, headline gradient
- **Royal blue** `#2e5bd6` — depth/authority (dumbbell bars in the logo)
- **Green** `#17a45a` — WhatsApp + success accents (flag green)
- Dark premium background, glass morphism, soft shadows, rounded cards
- Fonts: **Sora** (display) + **Inter** (body)
- The logo is never recoloured/distorted — it sits on clean white "chips"
  (navbar, footer, accreditation seal) per brand guidance.

## Image mapping
- Logo → navbar, mobile menu, footer, accreditation seal, OG image
- **Dr. Arugan C. Arjun** (President) → Founder's Message + Leadership
- **Dr. Saju Joseph** (Secretary) → Leadership
- Box-jump / balance / bench-press photos → hero collage
- Lecture, coaching, certificate & gym-floor photos → workshop, gallery, CTA

## Conversion
Primary goal = workshop registrations via WhatsApp. Every WhatsApp CTA opens
`wa.me/918277713616` with a pre-filled registration message. A sticky bar
(mobile) and floating WhatsApp button (desktop) keep the CTA always reachable.
Secondary CTAs: `tel:` links to the same number + leadership numbers.

## SEO implemented
- Unique meta title/description, keywords, canonical, theme-color, robots
- Open Graph + Twitter Card tags
- JSON-LD: EducationalOrganization/SportsOrganization, Course, FAQPage
- Semantic HTML5, single H1, ordered heading hierarchy, ARIA labels
- Lazy-loaded images with descriptive alt text, `max-image-preview:large`
- robots.txt + sitemap.xml
- Consistent **NAP** (Name / Address / Phone) across header schema, contact,
  footer and map embed for local SEO.

---

## Recommended next steps (off-page + local SEO)

### Google Business Profile
1. Create/claim a Business Profile: **Indian National Strength & Conditioning
   Association**, category *"Sports school" / "Educational institution"*.
2. Use the exact NAP: Tamil Nadu Centre for Sports Science, SDAT, Jawaharlal
   Nehru Stadium, Chennai – 600003 · Phone **+91 8277713616** · www.insca.in
3. Add the logo, workshop photos, services (Level 1A Certification), and post
   each new workshop date. Collect reviews from certified participants.

### Local SEO targets (already reflected in copy/schema)
Strength & Conditioning Certification Chennai · Sports Science Course Chennai ·
Strength Coach Certification India · INSCA Chennai · Sports Performance Workshop
India. Keep NAP identical everywhere it appears online.

### Off-page strategy
- List INSCA in Indian sports-science / education directories and SDAT partner pages.
- Publish workshop recaps + certified-coach spotlights (fresh, indexable content).
- Earn backlinks from participating universities, academies and physiotherapy
  bodies; encourage certified coaches to link their INSCA credential.
- Build social profiles (Instagram/LinkedIn/YouTube) with consistent branding and
  link them in the footer (`.footer .social` — swap the placeholder hrefs).

### Performance / assets
- Photos are already reasonably sized (~40–120 KB). For best Lighthouse scores,
  convert the JPEGs to WebP/AVIF and add `width`/`height` attributes, or serve
  through an image CDN. The logo can be re-exported as a transparent PNG/SVG for
  even crisper rendering on the white chips.
- Replace the generic map query with the precise Google Maps place URL for the
  venue once the Business Profile is live.
