# Update: fixed blurry CTA images + medium descriptions on every CTA (28 pages)

Drop these files into your project at the same relative paths (overwriting
the existing ones), then `rm -rf .next && npm run dev`.

## Root cause of the blur (found & fixed)

The CTA's circular photo is 260px wide. All your "gallery" and "featured"
photos are a proper 1000×1000 square — plenty sharp at that size. But 4
places were using the wide **1600×600 banner/slider images** instead (the
ones meant for full-width page headers) — those only have 600px of vertical
detail, which isn't enough to stay sharp once cropped into a 260px circle,
especially on retina/high-DPI screens. That mismatch was the actual blur.

Fixed in `components/CTASection.tsx`: the component's own fallback image
(used when a page passes no `image` prop at all) now points to a proper
square photo instead of a wide slider image.

Fixed directly in these 4 pages, which were explicitly passing a wide image:
- `app/page.tsx` (homepage) — was `home.slider[1]`, now a sharp shore-diving photo
- `app/gallery/page.tsx` — was `home.slider[2]`, now a sharp reef/diver photo
- `app/pricing/page.tsx` — was the wide `pricing.breadcrumb`, now a boat-diving photo
- `app/faq/page.tsx` — was `home.slider[0]`, now the team photo

## Descriptions — every CTA now has one, medium length

11 CTAs had **no description at all** (About hub, Where We Are, Facilities,
Staff, Philosophy, Testimonials, Adventure Diving hub, Black Water Diving,
Courses hub, Gallery, FAQ) — all now have a real 1–2 sentence description
specific to that page.

16 more CTAs had a single short sentence — all expanded to a fuller,
medium-length description (still concise, just more substantial) across
every Course detail page and every Adventure Diving detail page.

Every one of the 28 `CTASection` instances across the site was checked;
confirmed none reference a wide banner image anymore, and all 28 now have a
`description` prop.
