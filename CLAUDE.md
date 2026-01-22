# Operational Hub - GTM & Website

## Project Scope
This project encompasses both the **website** and the broader **go-to-market strategy** for Achra's Operational Hub service. Claude is used here for:
- Website development and iteration
- Meeting notes and call summaries
- Pricing model analysis and updates
- GTM strategy and content

## Product Overview
Operational Hub is a back office system for global teams with invoicing, payouts, and compliance. Swiss entity focus (Zug-based Association).

**Brand color:** Purple `#7A3AFF` / `rgb(122, 58, 255)` - used across Achra and Operational Hub

---

## Website

### Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Deployed via Vercel

### Key Files
- `app/opshub/page.tsx` - Main landing page
- `app/opshub/content.ts` - All landing page copy/content (easy to edit)
- `app/pricing/page.tsx` - Pricing tiers and FAQ
- `app/included/page.tsx` - What's included details
- `app/swiss-entity/page.tsx` - Swiss entity info
- `app/contact/page.tsx` - Contact/booking page
- `app/layout.tsx` - Root layout, metadata, favicon config
- `app/_components/` - Shared header/footer
- `app/opshub/_components/` - Landing page components (Hero, FAQ, etc.)

### Git Info
- Remote: https://github.com/0xkilgore/operational-hub-landing-page.git
- Branches: `main` (production), `free-tier` (includes Free pricing tier)

### Site Notes
- Content is centralized in `app/opshub/content.ts` for easy updates
- Brand color: `#7A3AFF` / CSS var `--achra`
- Plausible analytics enabled with custom event tracking for Cal.com bookings ('Call Booked' event)
- Cal.com embed used for booking calls
- Tidio chat installed (integrates with HubSpot)
- Google Search Console verified
- Blog in navigation on all pages
- Animations (animate-fade-in-up) added to all pages
- Pricing terminology: "per regular contractor" (not "per seat")
- Setup fee: mentioned on pricing page but specific amount ($3,000) not displayed

---

## Project Management

Location: `project management/`

### Meeting Notes
- Store call notes and summaries in `project management/feeder content/`
- PDFs of transcripts and meeting notes go here
- When processing meeting notes, extract action items and key decisions

### Pricing Model
- **Home base doc:** `project management/OH-GTM-Home-Base.md` (master reference with all doc links)
- Interactive model: `project management/Operational Hub Pricing Model.xlsx`
- Quick reference: `PRICING_MODEL.md`
- Key numbers (confirmed Jan 21, 2026):
  - Setup fee: **$3,000** (all tiers) - pending final MME agreement first week Feb
  - Platform fee: $750/mo base
  - Standard tier: $500/contractor/mo (not "seat" - use "contractor" for value framing)
  - Starter tier: $21/invoice
  - Monthly cost: $1,949/entity ($1,250 Accountable + $699 ops)
  - Break-even: 3 contributors
  - Sweet spot: 5+ contributors = 40%+ margins
  - Add-ons: 15% margin, rounded to clean numbers

### GTM Strategy
- Master GTM doc: `project management/OH-gtm-v2.pdf`
- Launch target: January 26, 2026
- Channels: Outbound (primary), Paid Search, SEO/Content, Social

---

## Content & Ads (In Progress)

### Blog Posts - Awaiting Colleague Review
Two SEO-focused thought leadership posts drafted, need review before publishing:

1. **Lawyer Perspective** (`project management/blog-draft-lawyer-perspective.md`)
   - "Legal Structures for Open-Source Teams: What Builders Need to Know"
   - Compares entity options (fiscal hosting, LLC, Swiss Association, Foundation)
   - Status: Draft outline ready for lawyer review

2. **Operator Perspective** (`project management/blog-draft-operator-perspective.md`)
   - "Stop Doing Ops as a Side Job: The Operations Ceiling Every Builder Team Hits"
   - Pain points: invoicing chaos, payout nightmares, month-end panic
   - Status: Draft outline ready for operator review

**Next steps:** Get colleague feedback, then write full posts or have them write from outlines.

### Google Ads Strategy
- Strategy doc: `project management/google-ads-strategy.md`
- Test budget: ~$1,800/month
- Two campaigns: High-Intent (crypto ops keywords) + Problem-Aware (pain points)
- Target: 10-15 qualified calls/month, $100-200 cost per call
- **Needs:** Landing pages (/lp/crypto-ops, /lp/open-source, /lp/swiss-entity), conversion tracking setup

### Outbound Plan (Lumen)
- Plan doc: `project management/outbound-plan-lumen.md`
- Owner: Lumen
- Target segments (priority order):
  1. Maker ecosystem teams (Jetstream as case study, Atlas Access as target)
  2. Open Collective organizations ($50K+ transactions)
  3. DAO restructuring targets (mid-tier protocols moving away from DAO model)
  4. Privacy-first builders
- Weekly targets: 25-30 outreach emails, 3-5 calls booked
- **ETHDenver 2026:** Feb 17-21 - pre-event outreach, 10-15 meetings target, post-event follow-up plan
- **Needs:** List building, one-pager PDF (also print for ETHDenver), case study doc (Jetstream), comparison chart, demo deck
- Context: KG/LP call (Jan 19) in `project management/feeder content/`

---

## Session Continuity

When starting a new session on this project:

1. **Check recent changes**: Run `git log --oneline -10` to see recent commits
2. **Review meeting notes**: Check `project management/feeder content/` for new PDFs
3. **Pricing updates**: If discussing pricing, reference `PRICING_MODEL.md` first

### What to Update After Sessions
- Add new meeting notes to `project management/feeder content/`
- Update `PRICING_MODEL.md` if pricing decisions change
- Update this file's "Recent Changes" section for significant website updates
- Commit changes with clear messages for future context

---

## Recent Changes (Jan 2026)
1. Updated favicon from v0 branding to `/public/Achra-abstract.png`
2. Removed direct mention of "Franklin" competitor from pricing FAQ (now says "Most payroll tools")
3. Created `project management/` folder for meeting notes and GTM materials
4. Added blog post draft outlines (lawyer + operator perspectives) - awaiting colleague review
5. Created Google Ads strategy doc with campaign structure, keywords, and budget recommendations
6. Created detailed outbound plan for Lumen with target segments, templates, and sales call structure
7. **Jan 21:** GTM meeting - pricing confirmed at $3,000 setup, soft launch Jan 26
8. **Jan 21:** Created `Operational Hub Pricing Model.xlsx` (interactive Excel with scenarios)
9. **Jan 21:** Created `OH-GTM-Home-Base.md` (master reference doc with all document links)
10. **Jan 21:** Created `platform-pricing-reconciliation-feedback.md` (platform vs website pricing gaps)
11. **Jan 21:** Tidio chat + Google Search Console installed
12. **Jan 21:** Next meeting agenda created for Jan 28
13. **Jan 22:** Added Blog to navigation on all pages (SharedHeader)
14. **Jan 22:** Added entrance animations to pricing, included, swiss-entity, and blog pages
15. **Jan 22:** Enhanced "Powered by Powerhouse" section with visual improvements
16. **Jan 22:** Added Plausible custom event tracking for Cal.com bookings ('Call Booked' event)
17. **Jan 22:** Removed all MME references from site (replaced with "top Swiss firms")
18. **Jan 22:** Changed pricing terminology from "per seat" to "per regular contractor"
19. **Jan 22:** Setup fee mentioned but specific amount removed from display
20. **Jan 22:** Created `free-tier` branch with Free pricing tier option

## Upcoming Dates
- **Jan 26:** Soft launch (blog content, outbound begins)
- **Jan 28:** Next GTM meeting
- **Jan 31:** Wouter @ Brussels conference
- **First week Feb:** Layer Zero + MME meeting (setup cost finalized)
- **Feb 17-21:** ETH Denver

## Key Contacts (from meeting)
- **Layer Zero:** Legal/entity setup, MME relationship
- **Dracaena (Dana):** Accountable relationship, Jetstream operations
- **Lumen:** Outbound sales, GTM strategy
- **Willow:** Platform design, checkout flow
- **Wouter:** Product, Acra platform
