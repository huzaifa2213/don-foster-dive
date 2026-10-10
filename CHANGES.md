# Correction — JotForm fields are in a real iframe (can't be styled from code)

## What I got wrong last round
I claimed JotForm's "jsform" embed injects plain HTML into the page and gave
you CSS to restyle the fields. I verified it properly this time by fetching
and reading JotForm's actual loader script, and that was wrong: it builds a
real `<iframe>` pointed at `form.jotform.com` (`createFrame()` →
`document.createElement('iframe')`, confirmed in the script itself). That's
why your screenshot still showed JotForm's raw dark theme — the CSS I shipped
last round could never reach inside it. This isn't a Next.js/code limitation;
browsers block any page from styling a cross-origin iframe's contents, for
every website, as a security boundary.

## What this delivery does
- `styles/globals.css` — removed the JotForm field CSS block from last round
  (it was dead code, matched nothing, and could be misleading if left in).
- `components/JotFormEmbed.tsx` — corrected the comment to explain the real
  situation; no functional change to the card/header/skeleton styling from
  two rounds ago, which is all still in effect and does work (that part is
  our own markup, not inside the iframe).

## The actual fix: JotForm's Form Designer (2 minutes, in your JotForm account)
This is the only place the fields themselves can be restyled, and because
it's baked into the form (not per-field), it keeps applying automatically to
any field you add, remove, or reorder later — exactly what you asked for.

1. Log into jotform.com and open the **Contact Form** (ID `31893946371869`)
   in the form editor.
2. In the left-hand toolbar, click the **paint roller icon** — this opens
   **Form Designer** (sometimes labeled "Themes").
3. Right now the form is using a **dark/black theme** — that's a deliberate
   theme choice, not a bug. Switch it to a light theme: look for "Clean,"
   "Minimal," or "Classic" near the top of the theme gallery, or start from
   **Blank/Custom** if you want full control.
4. Under **Colors** (or **Form Style → Colors**):
   - Background: white (`#FFFFFF`)
   - Field border / input background: light gray or white
   - Primary/button color: your brand blue `#0E5BF9`
   - Text/label color: black or near-black
5. Under **Border & Corners**, set input and button corner radius to
   "Rounded" (medium-large) to match the rest of the site.
6. Under **Button**, set the Submit button to filled, blue, rounded/pill
   shape if that option exists.
7. Click **Save**. The live embed on the website updates automatically — no
   code change needed, and this will be true even after you add new fields.
8. Repeat steps 1–7 for the **Booking form** (ID `31964493207863`) so both
   match.

If you'd like, screen-share or send me screenshots of the Form Designer panel
once you're in there and I can tell you exactly which toggles to click.

## How to apply (code side)
Copy these 2 files into your project at the same relative paths, overwriting
the originals — this only removes dead CSS and fixes a comment, so visually
nothing changes until you update the theme in JotForm itself. Verified with
`npm run build` — all 38 pages build clean, no errors.
