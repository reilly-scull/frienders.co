# frienders.co

Marketing site for Frienders, an experiences company est. 2018. Built with Next.js (App Router, TypeScript).

## Running it

    npm install
    npm run dev

Then open <http://localhost:3000>. There is also a `.claude/launch.json` config named `frienders-site` for the Claude Code preview panel.

`npm run build` produces the production build. The site prerenders fully static.

## Structure

- `app/layout.tsx` - root layout, metadata, and self-hosted fonts (Anton + Inter via next/font)
- `app/page.tsx` - the one-page site: nav, hero, ticker, story, services, gallery, contact, footer
- `app/globals.css` - all styles
- `components/Gallery.tsx` - masonry photo grid with lightbox (client component)
- `components/Effects.tsx` - scroll-reveal observer (client component)
- `public/img/` - 28 web-optimized photos (max 1600px, JPEG q80) selected and renamed from `source_assets/`
- `source_assets/` - original photo dumps and concept notes; gitignored, local only

## Deploying

Vercel auto-detects Next.js: import the GitHub repo, accept the defaults, deploy. Every push to `main` redeploys.

## Open questions for next round

- Case studies vs. the current "field notes" gallery approach
- Real contact email and any social links
- Gallery captions are playful placeholders; swap in real trip names/locations if desired
