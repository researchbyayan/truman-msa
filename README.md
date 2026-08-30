# Truman MSA Website

The official website for the **Muslim Student Association (MSA)** at **Truman State University**, Kirksville, Missouri.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide** icons. Designed to deploy on **Vercel** at `trumanmsa.vercel.app`.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this repo to GitHub (`reallyayen/truman-msa`).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No env vars needed.
4. Set the production domain to `trumanmsa.vercel.app` in Project → Settings → Domains.

## Editing content (no coding needed for most changes)

All editable content lives in **`/data`**:

| File | What it controls |
|------|------------------|
| `data/site.ts` | Org name, email, Jummah times, **social links**, planner URLs, constitution link, nav |
| `data/leadership.ts` | Executive Board members (add photos, majors, bios) |
| `data/events.ts` | Upcoming events + gallery categories |
| `data/committees.ts` | Committees (flip `active` to launch new ones) |
| `data/faq.ts` | FAQ questions & answers |

### Add social links
In `data/site.ts`, fill in `SOCIAL_LINKS.instagram` and `SOCIAL_LINKS.groupme`.
Empty values show a tasteful "Coming Soon" state instead of a broken link.

### Add the logo
Save the MSA logo as `public/logo.png` — it appears automatically.

## The Fall 2026 Planner
The Google Sheet is embedded via Google's `/preview` endpoint (`data/site.ts` → `PLANNER`).
If Google ever blocks the iframe, in Google Sheets go to **File → Share → Publish to web → Embed**
and replace `PLANNER.previewUrl` with the generated `.../pubhtml?widget=true&headers=false` URL.

## Pages
Home · About · Events · Planner · Leadership · Committees · Resources · Get Involved
