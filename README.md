# frienders.co

First draft of the Frienders marketing site. Frienders is an experiences company, est. 2018.

## Running it

Any static file server works. For example:

    python3 -m http.server 4173

Then open <http://localhost:4173>. There is also a `.claude/launch.json` config named `frienders-site` for the Claude Code preview panel.

## Structure

- `index.html` - the entire site (markup, styles, and script in one file)
- `assets/img/` - 28 web-optimized photos (max 1600px, JPEG q80) selected and renamed from `source_assets/`
- `source_assets/` - original photo dumps and the party911.txt concept notes (not served; keep out of production deploys)

## Sections

- Hero: "A professionally good time."
- Story: founded 2018 by friends across tech, finance, music, nightlife, entertainment
- What We Do: our parties, private events, venue rental, equipment rentals, DJs and talent, catering/bar/staff, travel desk
- The Trips: masonry photo gallery with lightbox
- Book Us: contact CTA (placeholder email hello@frienders.co)

## Open questions for next round

- Case studies vs. the current "field notes" gallery approach
- Real contact email and any social links
- Gallery captions are playful placeholders; swap in real trip names/locations if desired
- Fonts load from Google Fonts (Anton + Inter); self-host them before production if needed
