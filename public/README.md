# Public assets

Drop static files here — they're served from the site root (`/`).

## To add the MSA logo
Save the MSA logo image as **`logo.png`** in this folder.
It will appear automatically in the navbar and footer badge.
(Until then, a styled "M" monogram is shown as a fallback.)

## Photos for the gallery
Add event photos to `/public/gallery/` and reference them in
`data/events.ts` → `PAST_EVENT_CATEGORIES[i].image = "/gallery/your-photo.jpg"`.

## Meeting minutes
Upload Executive Board minutes (PDF recommended) to `/public/minutes/`, then
list them in `data/minutes.ts`. They appear on the **Minutes** page.

## Hero font (Grandview)
The hero top-line headline uses **Grandview**. It's a commercial font, so
self-host it: save `Grandview.woff2` (and optionally `Grandview.woff`) in
`/public/fonts/`. Until then the headline falls back to the sans stack.

## Leadership photos
Add headshots to `/public/leadership/` and reference them in
`data/leadership.ts` → `photo: "/leadership/first-last.jpg"`.
