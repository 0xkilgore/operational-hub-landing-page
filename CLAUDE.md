# Operational Hub Website

## Project Overview
Next.js website for Achra's "Operational Hub" service - a back office system for global teams with invoicing, payouts, and compliance. Swiss entity focus.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Deployed via Vercel

## Key Files
- `app/opshub/page.tsx` - Main landing page
- `app/opshub/content.ts` - All landing page copy/content (easy to edit)
- `app/pricing/page.tsx` - Pricing tiers and FAQ
- `app/included/page.tsx` - What's included details
- `app/swiss-entity/page.tsx` - Swiss entity info
- `app/contact/page.tsx` - Contact/booking page
- `app/layout.tsx` - Root layout, metadata, favicon config
- `app/_components/` - Shared header/footer
- `app/opshub/_components/` - Landing page components (Hero, FAQ, etc.)

## Git Info
- Remote: https://github.com/0xkilgore/operational-hub-landing-page.git
- Working branch: `feedback`

## Recent Changes (Jan 2026)
1. Updated favicon from v0 branding to `/public/Achra-abstract.png`
2. Removed direct mention of "Franklin" competitor from pricing FAQ (now says "Most payroll tools")

## Notes
- Content is centralized in `app/opshub/content.ts` for easy updates
- Brand color is purple: `rgb(122,58,255)` / CSS var `--achra`
- Plausible analytics enabled
- Cal.com embed used for booking calls
