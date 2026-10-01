# Don Foster's Dive Cayman — Website Redesign (Next.js)

A full rebuild of donfosters.com using the design language, layout patterns and UX
principles of caymanscubadiving.com as a reference, with Don Foster's own logo,
photography, brand information and page topics — in Don Foster's blue-led brand
palette, with motion throughout.

## Getting started

```bash
npm install
npm run dev
```
Open http://localhost:3000

Production build:
```bash
npm run build
npm start
```

## Brand palette (blue-led)

- Blue `#0E5BF9` (`brand-500`) — the **primary** color: default button fill,
  eyebrow badges, hover states, nav underline, header/footer CTAs, dropdown
  accents.
- Red `#f51024` (`accent-500`) — a **secondary** highlight used sparingly
  (slider dots, a small decorative circle, footer heading underline).
- Black `#000000` (`ink`) — headings, header top area removed, footer background.

## What changed in this revision

- **Header**: removed the "Don Foster's Dive Cayman" wordmark next to the logo
  (logo only now, using its real transparent background — no more white
  circle behind it), removed the black contact top-bar entirely, and widened
  the nav bar to a `1600px` max width with more breathing room between links.
- **Courses navigation** now nested to match your spec:
  `Courses → Diving (6 course links) / EFR (2 links) / Digital Underwater
  Photo (direct link)`. Both desktop (multi-column flyout) and mobile
  (recursive expandable menu, `components/MobileNav.tsx`) support this
  two-level structure.
- **Courses page** (`/courses`) is now split into three real sections instead
  of one mixed grid: a "Diving Courses" grid (`#diving`), an "EFR Courses"
  grid (`#efr`), and a dedicated Digital Underwater Photo spotlight block
  linking straight to its own page. The nav's dropdown links jump straight to
  these sections.
- **FAQ** redesigned as a full-width two-column section (question list fills
  the row instead of being centered in a narrow column) with its own
  "Ask Us a Question" CTA.
- **CTA banner** simplified — dropped the background-photo + gradient style
  in favor of a clean solid brand-blue block with two soft decorative circles
  and an outlined white button.
- **Footer** logo now renders on transparent background (no white circle),
  and two stale nav links (`/diving`, `/snorkelling`) were fixed to the
  correct `/adventure-diving` and `/advanced-snorkelling` routes.
- **Color theme** rebalanced so blue is the dominant color throughout
  (buttons, badges, hover states, dropdown highlights); red is now used only
  as a small secondary accent.

## What's inside

- **Next.js 14 App Router + TypeScript + Tailwind CSS**
- `public/images/` — your uploaded logo and photo library, organized exactly as
  supplied.
- `lib/images.ts` — a single typed map from every page/component to its real
  image path.
- `lib/site.ts` — business info, navigation (including the nested Courses
  menu), diving/course data with `category` tags (`diving` / `efr` / `photo`),
  testimonials, FAQs.
- `components/` — Header, MobileNav (recursive, arbitrary depth), Hero/HeroSlider,
  PageHero, SectionHeading, buttons, ServiceCard/Grid, FeatureCard,
  ImageTextSection/TextImageSection, Gallery, TestimonialSection, FAQ/FAQAccordion,
  CTASection, ContactSection/Form, Breadcrumbs, Footer, SocialLinks, ScrollReveal.
- `app/` — one route per page. `app/sitemap.ts` / `app/robots.ts` for SEO.

## Images

Every hero, breadcrumb banner, featured card, gallery grid, and staff photo
pulls from your real photo library via `lib/images.ts` and Next's `<Image>`
component. The only remaining placeholder is the contact page's map embed —
swap it for a real Google Maps iframe when ready.

## Revision: reviews widget, nav flyout, CTA redesign

- **Google Reviews** (`components/GoogleReviews.tsx`) replaces the old fake
  testimonials. It links directly to your real Google Business Profile
  (`business.googleReviews` in `lib/site.ts`) and shows a few short,
  paraphrased guest highlights rather than a fabricated star rating —
  the live rating/count is only accurate on Google itself, so the widget
  sends visitors there instead of guessing a number.
- **Nav dropdown** rebuilt as a true multi-level flyout (`components/Header.tsx`):
  hovering "Courses" shows Diving / EFR / Digital Underwater Photo; hovering
  "Diving" or "EFR" opens a second flyout panel to the right with the actual
  course links, matching the reference screenshot.
- **CTA banner** rebuilt as a contained rounded box (not full-width background
  color) with a solid brand-blue card, a circular photo with a dotted ring
  accent, and a white pill button with an arrow bubble — closer to the
  reference design without copying it exactly.

## Revision: reviews widget upgrade, footer, FAQ layout, nav arrows

- **Google Reviews section** is now light-themed (white, matching the rest of
  the site) and includes: 6 paraphrased real-guest highlights (up from 3),
  and a **live embedded Google Map** card (`components/GoogleReviews.tsx`)
  pointing at your real address — its pin shows Google's own live rating
  when clicked, since it's Google's iframe rendering Google's live data, no
  API key required. The "Read All Reviews on Google" button still links to
  your real profile.

  **Important limitation, please read:** a fully automatic feed that pulls
  and displays *every* review's text live requires either (a) a Google
  Places API key with billing enabled on your Google Cloud account, or
  (b) a third-party widget service (Trustindex, Elfsight, EmbedSocial, etc.)
  tied to your Google Business Profile. I don't have credentials for either,
  so I can't wire up true live-scrolling review text — the map above is the
  most "live" data available without one of those. If you set up a
  Trustindex/Elfsight account (most have a free tier), send me the embed
  script and I'll drop it straight into `GoogleReviews.tsx`.

- **Footer logo**: removed the "Don Foster's Dive Cayman" wordmark next to
  the logo — logo image only now, sized up slightly to compensate.
- **FAQ section**: restructured from a two-column (heading beside accordion)
  layout to a stacked one — heading, description and "Ask Us a Question" CTA
  at the top, with the full-width FAQ accordion directly below.
- **Nav arrows**: top-level items with a dropdown (About, Adventure Diving,
  Courses) now show a small chevron next to the label that rotates open on
  hover, in addition to the existing flyout behavior.
