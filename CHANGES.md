# Update: Gallery page → autoplay slider on all 8 sections

Drop this file into your project at the same relative path (overwriting the
existing one), then `rm -rf .next && npm run dev`.

## Changed file
- `app/gallery/page.tsx` — all 8 sections (Adventure Diving, Boat Diving,
  Shore Diving, Night Diving, Kittiwake Wreck, Black Water Diving, Our Boats
  & Facilities, Cruise Ship Excursions) now use `GallerySlider` — the same
  autoplay-loop, click-to-open-lightbox pattern used everywhere else on the
  site — instead of the old static grid. Sections alternate white/mist
  backgrounds for visual rhythm.
