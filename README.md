# frienders.co

Marketing site for Frienders Collective, an experiences company est. 2018. Built with Next.js (App Router, TypeScript).

## Running it

    npm install
    npm run dev

Then open <http://localhost:3000>. There is also a `.claude/launch.json` config named `frienders-site` for the Claude Code preview panel.

`npm run build` produces the production build. The site prerenders fully static.

## Structure

- `app/layout.tsx` - root layout, shared nav/footer, metadata, Organization schema, self-hosted fonts
- `app/page.tsx` - home
- `app/about`, `app/team`, `app/trips`, `app/contact` - static pages
- `app/services/page.tsx` + `app/services/[slug]/page.tsx` - services landing and 7 detail pages driven by `lib/content.ts` (private-events, venues, equipment, djs, catering, travel, party911)
- `app/sitemap.ts`, `app/robots.ts` - SEO
- `lib/content.ts` - all copy/data: services, trips, DJ roster, team
- `components/` - SiteNav (mobile menu), SiteFooter, PageHero, CTABand, Gallery (lightbox), ContactForm, Effects
- `app/globals.css` - all styles
- `public/img/` - 59 web-optimized photos selected and renamed from `source_assets/`
- `source_assets/` - original photo dumps and concept notes; gitignored, local only

The contact form and scheduler are visual placeholders; nothing sends yet (see TODO in `components/ContactForm.tsx`).

## Deploying

Vercel auto-detects Next.js: import the GitHub repo, accept the defaults, deploy. Every push to `main` redeploys.

## Open questions for next round

- Case studies vs. the current "field notes" gallery approach
- Real contact email and any social links
- Gallery captions are playful placeholders; swap in real trip names/locations if desired
