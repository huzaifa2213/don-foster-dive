# Changes — Contact/Booking, Boat Diving wording, and content fixes

## 1. Email address (`lib/site.ts`)
`business.email` changed from `dfdretail@donfosters.com` to `dfd@donfosters.com`.
This propagates automatically everywhere the business email is used (Header, Footer,
Contact info card, mailto links).

## 2. Photo & Video Services — removed rental mention (`lib/site.ts`)
The Adventure Diving summary card for Photo & Video Services previously said
"Rent underwater camera equipment or have one of our team capture your dive on
photo or video to take home." Changed to: "Have one of our team guide your dive
and capture your photo or video to take home." (No other page referenced rentals
for this service — the detail page itself never mentioned rentals.)

## 3. Boat Diving — 2 PM dive card (`app/adventure-diving/boat-diving/page.tsx`)
The "One-Tank Afternoon Dive" card no longer advertises a fixed "2:00 PM Departure."
It now reads "Available Upon Request" with copy explaining it requires a minimum
of 5 divers, isn't a guaranteed daily trip, and that most days close by 2:00–2:30 PM
unless dives are already booked.

## 4. JotForm integration (Contact form + new Booking page)
- **New component:** `components/JotFormEmbed.tsx` — embeds a JotForm form using
  the same manual-DOM-injection pattern already used for the Trustindex reviews
  widget (JotForm's loader script, like Trustindex's, needs to find its own
  `<script>` tag's DOM position to know where to inject the form — `next/script`
  doesn't guarantee that position, so we create/append the script manually in a
  `useEffect`).
- **Contact page** (`components/ContactSection.tsx`): the old custom React
  `ContactForm` (which only toggled a "submitted" message locally and wasn't wired
  to any backend) has been replaced with your **Contact Form Code** JotForm embed
  (`31893946371869`). Submissions now route to your email the same way they do on
  JotForm directly, and you can edit the form fields anytime in JotForm without
  needing a code change.
- **New Booking page** (`app/booking/page.tsx`, route `/booking`): embeds your
  **Booking Page Form Code** JotForm (`31964493207863`).
- **"Book Now" buttons** in `Header.tsx`, `MobileNav.tsx`, and `Footer.tsx` now
  link to `/booking` instead of `/contact`, so the main booking CTA across the
  site goes straight to the booking form. The Contact page itself is unchanged
  in purpose — general inquiries still go there, now via the JotForm contact form.

## Not included in this round
- **Homepage staff photo swap** ("4 Staff... star shape" → new circle photo): the
  photo you described wasn't attached to this upload, so `lib/images.ts`'s
  `passionateInstructors` entry was left as-is. Please attach that image file and
  I'll wire it in — it needs to be saved to `public/images/Home-Page/` and
  `img.home.passionateInstructors` repointed to it.

## How to apply
Copy these files into your project at the same relative paths, overwriting the
originals, then delete any old file that's no longer referenced (none required
for this round — `components/ContactForm.tsx` is no longer used but left in
place; safe to delete or keep). Run `npm run build` to verify — this exact
set was verified to build clean (38/38 static pages generated, no errors).
