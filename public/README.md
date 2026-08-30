# Public assets

Drop static files here — they're served from the site root (`/`).

## To add the MSA logo
Save the MSA logo image as **`logo.png`** in this folder.
It will appear automatically in the navbar and footer badge.
(Until then, a styled "M" monogram is shown as a fallback.)

## Photos for the gallery
Add event photos to `/public/gallery/` and reference them in
`data/events.ts` → `PAST_EVENT_CATEGORIES[i].image = "/gallery/your-photo.jpg"`.

## Leadership photos
Add headshots to `/public/leadership/` and reference them in
`data/leadership.ts` → `photo: "/leadership/first-last.jpg"`.
