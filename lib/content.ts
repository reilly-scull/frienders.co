export type Img = { src: string; alt: string; width: number; height: number };

export type Service = {
  slug: string;
  name: string;
  short: string;
  card: string;
  cardImg: string;
  cardAlt: string;
  kicker: string;
  heroImg: string;
  heroAlt: string;
  intro: string[];
  features?: { title: string; body: string }[];
  specs?: { heading: string; items: string[] }[];
  gallery?: Img[];
  faq?: { q: string; a: string }[];
  theme?: "default" | "alert";
  pricing?: { label: string; from: string; note: string };
  cta: { title: string; body: string; button: string };
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "private-events",
    name: "Private Events",
    short: "Full event production",
    card: "Birthdays, weddings, corporate offsites, things that defy category. Full production, hosted by us, thrown for you.",
    cardImg: "/img/tent-dance.jpg",
    cardAlt: "Guests dancing dressed up under string lights at a private event",
    kicker: "Full production",
    heroImg: "/img/tent-dance.jpg",
    heroAlt: "Guests dancing dressed up under string lights at a private event",
    intro: [
      "You bring the occasion and the guest list. We bring everything else: the venue, the sound, the lights, the music, the bar, the food, and the people who make it all run.",
      "We work best with groups under 150 who care about production value. Every event gets a dedicated producer, a run-of-show, and a crew that has done this a hundred times and still loves it.",
    ],
    features: [
      { title: "Design and production", body: "Concept, decor, lighting design, floor plans, timelines. We handle vendors, permits, and load-in so you never see a clipboard." },
      { title: "Music, handled", body: "Resident DJs matched to your room, backed by our own Electro-Voice and QSC rigs. No wedding-band roulette." },
      { title: "Bar, kitchen, and floor", body: "Bartenders who can pour through a rush, catering through our partners at Curated Kitchen, and staff who read a room." },
      { title: "The morning after", body: "Strike, cleanup, lost-and-found, recovery services. The venue looks like nothing happened. You will know better." },
    ],
    gallery: [
      { src: "/img/festival-crew.jpg", alt: "A private production under the Kosciuszko Bridge", width: 1125, height: 1500 },
      { src: "/img/park-blanket.jpg", alt: "An afternoon event on blankets in the park", width: 1125, height: 1500 },
      { src: "/img/food.jpg", alt: "A catered course, mid-service", width: 1400, height: 1050 },
    ],
    pricing: { label: "Full-service production", from: "$5,000", note: "Flat fee scaled to scope; most fall between $5k and $25k" },
    cta: { title: "You bring the occasion. We bring the machine.", body: "Date, headcount, ambition level. A producer replies within one business day with a plan, not a pitch.", button: "Start the production" },
    seoTitle: "Private Event Production in NYC",
    seoDescription: "Full-service private event production in New York City for groups under 150: venues, DJs, sound, lighting, catering, bar, and staff. One producer, one budget, one text thread.",
  },
  {
    slug: "venues",
    name: "Venues",
    short: "Partner spaces across NYC",
    card: "Partner venues across the city: an East Village ground floor, a Williamsburg bar, a Gowanus hi-fi listening bar.",
    cardImg: "/img/venue-hall.jpg",
    cardAlt: "Warm timber event hall with long candlelit tables",
    kicker: "Spaces we know cold",
    heroImg: "/img/venue-hall.jpg",
    heroAlt: "Warm timber event hall with long candlelit tables",
    intro: [
      "We book events into a short list of partner venues we know cold: the sightlines, the sound limits, the neighbors, the good corners. You get a space that already works, with a production team the room already trusts.",
      "Every venue booking can come with as much or as little of the rest of our stack as you want: sound, lighting, DJs, bar, catering, and staff.",
    ],
    specs: [
      { heading: "East Village", items: ["1,500 square feet, ground floor", "Flexible layout for dinners, launches, and dance floors", "Groups up to 120"] },
      { heading: "Williamsburg", items: ["Full-service bar with staff who know a party", "Buyouts and partial takeovers", "Steps from the Bedford stop"] },
      { heading: "Gowanus", items: ["Hi-fi listening bar with an audiophile-grade system", "Intimate rooms for 20 to 80", "Made for people who care what it sounds like"] },
    ],
    gallery: [
      { src: "/img/ev-bar.jpg", alt: "A dinner party in full swing at a partner space", width: 1125, height: 1500 },
      { src: "/img/lounge-neon.jpg", alt: "The hi-fi lounge mid-house-party", width: 1500, height: 1125 },
    ],
    pricing: { label: "Venue buyouts", from: "$3,000", note: "Weeknight minimum spend; weekends scale with the room" },
    cta: { title: "We know a room for that.", body: "Tell us the headcount and the vibe, and we will match you to a space we know cold.", button: "Find your room" },
    seoTitle: "Event Venues in NYC: East Village, Williamsburg, Gowanus",
    seoDescription: "Book partner event venues in Manhattan and Brooklyn through Frienders Collective: a 1,500 sq ft East Village ground floor, a Williamsburg bar, and a Gowanus hi-fi listening bar.",
  },
  {
    slug: "equipment",
    name: "Equipment Rentals",
    short: "Sound, DJ gear, lighting",
    card: "Electro-Voice and QSC sound, Sennheiser mics, AlphaTheta and Pioneer DJ gear, and lighting packages. Delivered and dialed in.",
    cardImg: "/img/decks.jpg",
    cardAlt: "Professional DJ decks and turntables",
    kicker: "Pro gear, dialed in",
    heroImg: "/img/decks.jpg",
    heroAlt: "Professional DJ decks, mixer, and turntables ready for a set",
    intro: [
      "The same rigs we run at our own parties, available for yours. Everything arrives tested, gets set up and tuned by people who use it weekly, and gets picked up when the party is over.",
      "Rent a single speaker or a full production. Delivery across NYC, and further by arrangement.",
    ],
    specs: [
      { heading: "Sound", items: ["Electro-Voice and QSC loudspeakers, 400 to 1,000 watts per channel", "Subwoofers, stands, and cabling included", "Systems sized to your room, from dinner-party warm to full dance floor"] },
      { heading: "Microphones and monitoring", items: ["Sennheiser microphones, wired and wireless", "Sennheiser headphones and accessories", "Speeches, toasts, live sets, panels"] },
      { heading: "DJ equipment", items: ["AlphaTheta / Pioneer DJ players and mixers", "Club-standard layouts your DJ already knows", "Booth monitors and laptop stands on request"] },
      { heading: "Lighting packages", items: ["Basic: clean, warm, and flattering", "Ambiance: color washes, uplights, and texture", "Dance: moving heads, beams, and haze. The full permission slip"] },
    ],
    gallery: [
      { src: "/img/boat-dj.jpg", alt: "DJ playing on deck of a boat with headphones", width: 1125, height: 1500 },
      { src: "/img/dj-booth.jpg", alt: "DJ booth under blue geometric light", width: 1125, height: 1500 },
      { src: "/img/equipment-2.jpg", alt: "DJ controller with the dance-lighting package firing", width: 1050, height: 1400 },
      { src: "/img/street-pair.jpg", alt: "Our rig outside the pencil factory party in Greenpoint", width: 1500, height: 1125 },
    ],
    pricing: { label: "Sound systems", from: "$400/day", note: "Delivered, set up, and tuned; lighting packages from $300" },
    cta: { title: "Our rigs, your room.", body: "Tell us the space and the crowd; we size the system, deliver it, and tune it before doors.", button: "Book the gear" },
    seoTitle: "DJ and Sound Equipment Rental in NYC and Brooklyn",
    seoDescription: "Rent Electro-Voice and QSC PA systems (400-1,000 WPC), Sennheiser microphones, AlphaTheta / Pioneer DJ gear, and lighting packages in NYC. Delivered, set up, and tuned.",
  },
  {
    slug: "djs",
    name: "Resident DJs",
    short: "The roster",
    card: "Six residents who read a room and pack a floor. Booked with or without our sound rigs.",
    cardImg: "/img/dj-red.jpg",
    cardAlt: "DJ performing under red light",
    kicker: "The roster",
    heroImg: "/img/dj-red.jpg",
    heroAlt: "Resident DJ performing under deep red light",
    intro: [
      "Our residents grew up in Brooklyn warehouses, dust-covered playa stages, and boat decks in three time zones. They read rooms, not just requests.",
      "Every booking includes an advance conversation about your crowd and your arc for the night. Pair any resident with our sound and lighting rigs for a turnkey dance floor.",
    ],
    pricing: { label: "Resident DJ, 4-hour set", from: "$1,000", note: "Includes the advance call; add our rig for a turnkey floor" },
    cta: { title: "Your dance floor has an opening.", body: "Tell us your crowd and your arc for the night, and we will match you with the resident who already plays it.", button: "Book a resident" },
    seoTitle: "Book Resident DJs in NYC",
    seoDescription: "Book Frienders Collective resident DJs for private events in NYC and beyond: G.Thomas, Lina Grace, jacqsmiley, Getyn Afteret, Dario Dee, and Sasta. 4-hour sets from $1,000.",
  },
  {
    slug: "catering",
    name: "Catering, Bar & Staff",
    short: "Fed, watered, handled",
    card: "Catering with our partners at Curated Kitchen, bartenders who can pour through a rush, and event staff for hire.",
    cardImg: "/img/champagne.jpg",
    cardAlt: "Champagne bottles and cans stacked on ice",
    kicker: "Fed, watered, handled",
    heroImg: "/img/champagne.jpg",
    heroAlt: "Champagne bottles and cans stacked on ice behind the bar",
    intro: [
      "Food and drink are half the memory of a night. We run catering through our partners at Curated Kitchen, staff the bar with people who can pour through a rush, and place floor staff who make everything feel effortless.",
      "From passed bites for 20 to a plated dinner for 120, with bar programs to match.",
    ],
    features: [
      { title: "Catering packages", body: "Menus built with Curated Kitchen around your event: family style, plated, stations, or late-night revival food. Dietary needs handled without drama." },
      { title: "Bar programs", body: "Full bar builds, batched cocktails, champagne moments, and zero-proof options that are not an afterthought." },
      { title: "Staff for hire", body: "Bartenders, servers, coat check, door, and production hands. Insured, experienced, and actually pleasant." },
    ],
    gallery: [
      { src: "/img/food-cauliflower.jpg", alt: "Roasted cauliflower dish plated for service", width: 1125, height: 1500 },
      { src: "/img/limes.jpg", alt: "Fresh-cut limes on a board behind the bar", width: 1500, height: 1125 },
      { src: "/img/dinner-bw.jpg", alt: "The Friendsgiving table in black and white", width: 1500, height: 844 },
      { src: "/img/drink-flight.jpg", alt: "Colorful cocktail flight with citrus", width: 1125, height: 1500 },
      { src: "/img/breads.jpg", alt: "Jalapeno-cheddar pretzel knots, fresh from the oven", width: 1125, height: 1500 },
      { src: "/img/steak-dinner.jpg", alt: "Beef wellington, plated, with a glass of red", width: 1125, height: 1500 },
    ],
    pricing: { label: "Catering", from: "$45/head", note: "Passed bites; plated dinners from $125/head. Bartenders from $60/hr, 4-hour minimum" },
    cta: { title: "Feed them well. They will forgive anything.", body: "From passed bites for 20 to plated for 120, tell us the occasion and we will build the menu around it.", button: "Build the menu" },
    seoTitle: "Event Catering, Bartenders, and Staff in NYC",
    seoDescription: "Event catering with Curated Kitchen, bar programs, bartenders from $60/hr, and event staff for hire in New York City. Passed bites for 20 to plated dinners for 120.",
  },
  {
    slug: "party-photography",
    name: "Party Photography",
    short: "The night, documented",
    card: "Photographers who work dance floors, not step-and-repeats. Film and digital coverage of the night the way it actually felt.",
    cardImg: "/img/bokeh-pair.jpg",
    cardAlt: "Two friends close together under bokeh party lights",
    kicker: "The night, documented",
    heroImg: "/img/bokeh-pair.jpg",
    heroAlt: "Two friends photographed close-up under glittering party lights",
    intro: [
      "Most event photography looks like evidence. Ours looks like the night felt: flash-lit, close, a little feral, and full of people who did not notice the camera.",
      "We shoot digital for speed and film for texture, and we know when to put the camera down. Edited galleries land within three business days; a same-week highlight reel is standard.",
    ],
    features: [
      { title: "Dance floor coverage", body: "Photographers who move with the room and never make anyone pose. The good stuff happens after midnight; we stay for it." },
      { title: "Film and flash", body: "35mm film and hard-flash digital for that shot-on-a-night-out texture. Prints available, and yes, the grain is intentional." },
      { title: "Photo booth builds", body: "A staffed booth with props and instant output, or a freestanding setup styled to your event. The line becomes part of the party." },
      { title: "Fast turnaround", body: "Edited gallery in three business days, rush available. Full usage rights for the host, discretion guaranteed for the guests." },
    ],
    gallery: [
      { src: "/img/film-flash.jpg", alt: "Friends laughing at a party, shot on film", width: 1400, height: 928 },
      { src: "/img/captain.jpg", alt: "Three friends in captain hats at a boat party", width: 928, height: 1400 },
      { src: "/img/film-women.jpg", alt: "Flash-lit portrait of two friends mid-laugh", width: 995, height: 1500 },
      { src: "/img/flash-crew.jpg", alt: "Flash selfie of the whole crew at a house party", width: 1127, height: 1500 },
      { src: "/img/wine-pair.jpg", alt: "Two friends posing at a wine bar", width: 1125, height: 1500 },
      { src: "/img/club-film.jpg", alt: "The dance floor on 35mm, hard flash", width: 1500, height: 995 },
      { src: "/img/photobooth.jpg", alt: "Friends piled into a photo booth mid-party", width: 1400, height: 933 },
      { src: "/img/sam-sc.jpg", alt: "Golden hour portrait on the South Carolina trip", width: 1500, height: 1125 },
    ],
    pricing: { label: "Event coverage", from: "$450/hr", note: "2-hour minimum; photo booth builds from $900" },
    cta: { title: "It happened. Prove it.", body: "Our photographers work dance floors, not step-and-repeats, so you get the night the way it actually felt.", button: "Book the coverage" },
    seoTitle: "Party and Event Photographer in NYC",
    seoDescription: "Party photography in New York City: dance-floor coverage, 35mm film and flash digital, photo booth builds, and edited galleries in 3 business days. From $450/hr.",
  },
  {
    slug: "travel",
    name: "The Travel Desk",
    short: "We move the party",
    card: "In-house travel agents who move the whole crew: flights, villas, boats, and ground transport. You pick the destination.",
    cardImg: "/img/acro-sunset.jpg",
    cardAlt: "Airplane pose at golden hour on a trip",
    kicker: "We move the party",
    heroImg: "/img/caribbean-bay.jpg",
    heroAlt: "A Caribbean bay with anchored boats seen from the hillside",
    intro: [
      "Hira runs our in-house travel desk: flights, villas, boats, drivers, and the thousand small logistics that make a group trip feel easy. You pick the destination, we move the party there.",
      "Travel pairs with everything else we do. Book the trip, then add DJs, sound, catering, and production on the ground. See the productions page for what that looks like in practice.",
    ],
    features: [
      { title: "Group flights and transfers", body: "One itinerary for 6 to 20 people, with contingency plans for the friend who always misses the flight." },
      { title: "Villas, farmhouses, beach houses", body: "Sourced, vetted, and walked before you arrive. Enough bedrooms, the right kitchen, and neighbors at a safe distance." },
      { title: "On-the-ground production", body: "Off-grid sound systems, local staff, chefs, boats, and backup generators. The playa taught us self-reliance." },
    ],
    gallery: [
      { src: "/img/boat-laugh.jpg", alt: "Guest laughing on a boat on Lake Como", width: 1000, height: 1500 },
      { src: "/img/como-boat.jpg", alt: "Guest laughing on a speedboat on an alpine lake", width: 934, height: 1400 },
      { src: "/img/calm-boat.jpg", alt: "A quiet afternoon on the water between anchorages", width: 1500, height: 1125 },
      { src: "/img/med-yacht.jpg", alt: "The whole charter gathered on the stern at dusk in the Med", width: 1125, height: 1500 },
      { src: "/img/mexico-pool.jpg", alt: "The villa pool in Mexico, palms and footbridge included", width: 1125, height: 1500 },
      { src: "/img/tuscany-dinner.jpg", alt: "A long lunch on a stone terrace abroad", width: 1050, height: 1400 },
    ],
    pricing: { label: "Trip planning", from: "$150/person", note: "Groups of 6 to 20; on-the-ground production quoted per trip" },
    cta: { title: "Pick the place. We move the party.", body: "Send us a destination and a headcount, and the travel desk handles flights, villas, boats, and everything in between.", button: "Start a trip" },
    seoTitle: "Group Trip Planning and Travel Desk",
    seoDescription: "In-house travel agents for group trips of 6 to 20: flights, villas, sailing charters, and on-the-ground event production in the Hamptons, Caribbean, Mexico, and the Mediterranean.",
  },
  {
    slug: "party911",
    name: "Party911",
    short: "Last-minute rescue",
    card: "Day-of cancellations, no-show vendors, unexpected disasters. A limited menu at premium prices, when you are out of options.",
    cardImg: "/img/night-sideways.jpg",
    cardAlt: "Two guests holding each other up as the night goes sideways",
    kicker: "Emergency party support",
    heroImg: "/img/night-sideways.jpg",
    heroAlt: "Two guests mid-laugh holding each other up in a dark bar",
    intro: [
      "The DJ cancelled at 3pm. The caterer stopped answering. The venue flooded. Whatever just happened, Party911 is our rapid-response line for events in trouble today.",
      "This is a limited menu at premium prices. We will be honest about what is possible on the clock you have. But if you are in a jam, we can help you get out of it.",
    ],
    features: [
      { title: "Emergency DJ and sound", body: "A resident DJ with a full rig, dispatched same-day across NYC. Music by the time your guests arrive." },
      { title: "Emergency bar and staff", body: "Bartenders, servers, and door staff on short notice. Ice, mixers, and glassware if the order never showed." },
      { title: "Venue rescue", body: "If your space falls through, we work our partner venues and network to re-home the night. No promises, strong odds." },
      { title: "Care packages", body: "The essentials, stocked and delivered: drinks, mixers, munchies, and the things everyone forgot." },
    ],
    gallery: [
      { src: "/img/film-guys.jpg", alt: "Film-flash shot of the rescue crew mid-party", width: 1500, height: 995 },
      { src: "/img/bubbly-ice.jpg", alt: "A bathtub stocked with champagne and sparkling water on ice", width: 1125, height: 1500 },
      { src: "/img/suit-bus.jpg", alt: "Guest in a suit celebrating chaotically on a party bus", width: 1125, height: 1500 },
    ],
    faq: [
      { q: "How fast can you actually get here?", a: "Within NYC, a DJ with a rig can typically be playing within 3 to 4 hours of a confirmed booking. Bar and staff bookings are usually faster. Outside the city, call and we will be straight with you." },
      { q: "Why is it more expensive than booking ahead?", a: "Same-day dispatch means paying our people premium rates to drop everything, plus expedited transport and gear prep. You are buying certainty on a day that has none." },
      { q: "What if my event is tomorrow, not today?", a: "Still call. Anything with more than 24 hours of runway books at closer-to-normal rates, and you get more menu to choose from." },
      { q: "What can you not fix?", a: "Weather, heartbreak, and guest lists. Almost everything else has a workaround." },
    ],
    theme: "alert",
    pricing: { label: "Same-day dispatch", from: "$1,500", note: "Callout fee; emergency DJ with rig from $2,500. Premium rates, real answers" },
    cta: { title: "Sound the alarm.", body: "Email 911@frienders.co with PARTY911 in the subject, your location, and your timeline. We triage fastest before 6pm.", button: "Get help today" },
    seoTitle: "Party911: Last-Minute Party Rescue in NYC",
    seoDescription: "Emergency event support in New York City: same-day DJs with sound from $2,500, bartenders and staff, venue rescue, and care packages. Day-of cancellations handled within 3 to 4 hours.",
  },
];

export const djs = [
  { name: "G.Thomas", url: "https://soundcloud.com/gthomasny", blurb: "Deep, chugging house for long nights that refuse to end." },
  { name: "Lina Grace", url: "https://soundcloud.com/lina-grace-deforca", blurb: "Melodic and hypnotic, built for sunsets and open air." },
  { name: "jacqsmiley", url: "https://soundcloud.com/jacqsmiley", blurb: "Disco, edits, and joy. The dance floor's best friend." },
  { name: "Getyn Afteret", url: "https://soundcloud.com/kyle-stoddard-948502533", blurb: "Peak-hour energy with a wink. Yes, that is the name." },
  { name: "Dario Dee", url: "https://soundcloud.com/dariodee_music", blurb: "Groove-first house with teeth, from warmup to close." },
  { name: "Sasta", url: "https://soundcloud.com/sastamusic", blurb: "Textured, worldly, and warm. Sets that tell a story." },
];

export type Production = {
  slug: string;
  name: string;
  stats: string;
  body: string;
  img: Img;
  extras?: Img[];
  // Case-study scaffold: fill these in per production and the detail page
  // at /productions/[slug] renders them in place of the placeholders.
  caseStudy?: {
    brief?: string;
    build?: string;
    night?: string;
    numbers?: { label: string; value: string }[];
  };
};

export const productions: Production[] = [
  {
    slug: "summers-end-full-send",
    name: "Summer's End Full Send",
    stats: "15 people. 4 days. Hamptons farmhouse.",
    body: "The season's closing argument. Three DJs rotating across four days, 2,000 watts of sound in a barn that could take it, fireworks over the field, glow-in-the-dark lawn games after midnight, and full catering so nobody had to leave the property. Summer ended. We made sure it noticed.",
    img: { src: "/img/pool-party.jpg", alt: "Pool party with a DJ playing under a cabana", width: 1500, height: 1125 },
    extras: [
      { src: "/img/farmhouse-pool.jpg", alt: "The pool cabana rig at the Hamptons farmhouse", width: 1125, height: 1500 },
      { src: "/img/summers-end-2.jpg", alt: "The farmhouse pool, vineyard view included", width: 1125, height: 1500 },
    ],
  },
  {
    slug: "gold-party",
    name: "The Gold Rush",
    stats: "20 people. Upstate New York. Dress code: gold.",
    body: "Twenty people in a house upstate, every one of them in gold. Costumes, floor-to-ceiling decorations, three DJs, and a massage table running all weekend because recovery is part of the program. The photos look like a fever dream. They are accurate.",
    img: { src: "/img/wings.jpg", alt: "Performer in glowing gold illuminated wings at night", width: 1400, height: 1050 },
    extras: [
      { src: "/img/gold-crawl.jpg", alt: "Gold sequins, sometime past midnight", width: 1500, height: 1125 },
      { src: "/img/golden-portrait.jpg", alt: "Golden hour in full gold dress code", width: 1400, height: 1050 },
      { src: "/img/gold-kit.jpg", alt: "The Gold Rush welcome kit with favors and wristbands", width: 1125, height: 1500 },
      { src: "/img/gold-lounge.jpg", alt: "Gold chains and a long recovery lounge", width: 1500, height: 1125 },
      { src: "/img/den-morning.jpg", alt: "Still in gold, the morning after", width: 1500, height: 1125 },
    ],
  },
  {
    slug: "south-carolina",
    name: "South Carolina",
    stats: "15 people. 5 days. Barrier-island beach house.",
    body: "Five days on a barrier island with a house full of friends and a schedule with exactly one item on it: the tide. Long beach days, longer dinners, and the kind of quiet that makes the loud parts feel earned.",
    img: { src: "/img/sc-beach-dusk.jpg", alt: "The crew walking the beach at dusk, dressed for dinner", width: 1125, height: 1500 },
    extras: [
      { src: "/img/sc-pool.jpg", alt: "Golden hour at the beach-house pool", width: 1500, height: 1125 },
      { src: "/img/sc-pool-floaties.jpg", alt: "Pool floaties and raised arms at the beach house", width: 1125, height: 1500 },
      { src: "/img/sc-grotto.jpg", alt: "The grotto pool near the beach house", width: 1125, height: 844 },
      { src: "/img/beach-selfie.jpg", alt: "Beach-day selfie on the barrier island", width: 1500, height: 1125 },
      { src: "/img/pool-pair.jpg", alt: "Poolside at the barrier-island house", width: 1125, height: 1500 },
    ],
  },
  {
    slug: "sailing",
    name: "Sailing Trips",
    stats: "6 to 20 people. NYC, Caribbean, Mediterranean.",
    body: "Day outings in New York Harbor and week-long charters in the Caribbean and Mediterranean. Deserted islands, beach towns, seaside restaurants, beach parties, and an off-grid sound system that turns any anchorage into a venue. The captain knows. The captain has always known.",
    img: { src: "/img/sail-rainbow.jpg", alt: "Sailing under a rainbow in open water", width: 1500, height: 1125 },
    extras: [
      { src: "/img/sail-flag.jpg", alt: "Pointing at the Statue of Liberty from the bow", width: 1125, height: 1400 },
      { src: "/img/beach-crew.jpg", alt: "The crew ashore on a Caribbean sailing trip", width: 1024, height: 768 },
      { src: "/img/sail-liberty.jpg", alt: "Sailing past the Statue of Liberty at golden hour", width: 1125, height: 1500 },
      { src: "/img/sail-skyline.jpg", alt: "The crew in matching sailor hats with the Manhattan skyline behind", width: 1440, height: 1080 },
      { src: "/img/sail-anchor.jpg", alt: "Anchored over clear water, swimmers off the bow", width: 1280, height: 720 },
      { src: "/img/sail-golden.jpg", alt: "Golden hour on a New York Harbor sail", width: 1500, height: 1125 },
      { src: "/img/sunset-sail.jpg", alt: "Sunset over the bow on an evening sail", width: 1500, height: 1125 },
      { src: "/img/sail-selfie.jpg", alt: "Captain-hat selfie somewhere off the coast", width: 1500, height: 1127 },
      { src: "/img/sail-travis.jpg", alt: "At the helm on a week-long sailing charter", width: 994, height: 1500 },
    ],
  },
  {
    slug: "vermont-ski",
    name: "Vermont Ski Trip",
    stats: "Big house. Big mountain. Bigger fireplace.",
    body: "First chair to last call. A big house at the base, s'mores and fire pits when the lifts close, hot chocolate with options, a catered dinner worth coming in early for, and an after-party that made the hot tub a load-bearing amenity.",
    img: { src: "/img/ski-crew.jpg", alt: "Crew in ski gear celebrating in deep snow", width: 1118, height: 806 },
  },
  {
    slug: "desert-adventures",
    name: "Desert Adventures",
    stats: "6 people. 1 week. Boulder to Joshua Tree.",
    body: "Six people, one week, and a route that read like a dare: parties in Boulder and Joshua Tree with pit stops across Utah and Nevada. Red rocks, empty highways, borrowed dance floors, roadside barbecue, and a sound system that never once got to rest.",
    img: { src: "/img/desert-rv.jpg", alt: "The crew and the rented RV parked in red-rock desert", width: 1500, height: 1125 },
    extras: [
      { src: "/img/zion.jpg", alt: "The canyon walls of Zion at midday", width: 1500, height: 1124 },
      { src: "/img/joshua-tree.jpg", alt: "A desert fire pit blazing at dusk in Joshua Tree", width: 1124, height: 1500 },
      { src: "/img/desert-beer.jpg", alt: "A cold one on a boulder above the desert horizon", width: 1500, height: 1125 },
      { src: "/img/dj-blue.jpg", alt: "The desert party stage under blue geometric light", width: 1050, height: 1400 },
      { src: "/img/desert-bbq.jpg", alt: "Roadside barbecue: ribs, slaw, and no regrets", width: 1125, height: 1500 },
    ],
  },
  {
    slug: "halloween",
    name: "Halloween",
    stats: "Many editions. Many locations. Zero restraint.",
    body: "Our high holiday. Warehouses, brownstones, barns, and bars, each year a different city block and a different fever. Costumes are mandatory, effort is noticed, and the photographic evidence is permanent.",
    img: { src: "/img/wig-trio.jpg", alt: "Three guests in full costume and wigs on Halloween", width: 1125, height: 1500 },
    extras: [
      { src: "/img/halloween-dj.jpg", alt: "The DJ in costume under red light", width: 1500, height: 1125 },
      { src: "/img/halloween-group.jpg", alt: "The costume crew crammed into one frame", width: 1500, height: 917 },
      { src: "/img/halloween-pair.jpg", alt: "Costumes holding up surprisingly well past midnight", width: 1125, height: 1500 },
    ],
  },
  {
    slug: "beach-parties",
    name: "Beach Parties",
    stats: "Rockaways to the islands. Sound included.",
    body: "Speakers in the sand, a parachute for shade, coolers with a plan, and the ocean doing the lighting design. Our beach parties run from Rockaway day trips to full weekends on warmer water.",
    img: { src: "/img/beach-towels.jpg", alt: "Friends lined up on beach towels on white sand", width: 1500, height: 1125 },
    extras: [
      { src: "/img/beach-selfie-2.jpg", alt: "Beach day group selfie", width: 1500, height: 1124 },
      { src: "/img/island-nap.jpg", alt: "An afternoon nap in the shade at Rockaway Beach", width: 1500, height: 1125 },
      { src: "/img/parachute-beach.jpg", alt: "Parachute games at a Mediterranean beach party", width: 1125, height: 1500 },
      { src: "/img/captain-guy.jpg", alt: "The off-grid sound rig, beach edition", width: 1125, height: 1500 },
    ],
  },
  {
    slug: "woodland",
    name: "Woodland",
    stats: "Deep woods. Off grid. On purpose.",
    body: "A house at the end of a road that stops being a road. Firelight, forest air, a sound system running off our own power, and nights that go exactly as long as they want to. What happens in the woods stays pleasantly unverifiable.",
    img: { src: "/img/woodland-dusk.jpg", alt: "Lake house glowing at dusk in the woods", width: 1125, height: 1500 },
  },
  {
    slug: "public-records-takeover",
    name: "A Birthday at Public Records",
    stats: "Private takeover. World-class sound.",
    body: "Every year, one very lucky birthday takes over Public Records: a private takeover of one of the best-sounding rooms in New York. Our nightlife connections handle the room and the staff, our residents handle the music, and the birthday boy handles exactly nothing. Rinse, repeat, annually.",
    img: { src: "/img/public-records-2.jpg", alt: "The birthday crew mid-takeover at Public Records", width: 1500, height: 1000 },
    extras: [
      { src: "/img/disco-selfie.jpg", alt: "Sequins and a very good wig on the Public Records floor", width: 1400, height: 1050 },
    ],
  },
  {
    slug: "valentines",
    name: "An Intimate Valentine's",
    stats: "12 people. 3 days of prep. 100 candles.",
    body: "Three days of prep for one dinner: rose petals everywhere, a hundred candles, rose prosecco on arrival, roast tomato soup, osso buco alla milanese, and a Barolo that deserved its own place setting. Proof that production value works at twelve covers, too.",
    img: { src: "/img/private-dining.jpg", alt: "Candlelit private dining room set for a Valentine's dinner", width: 1400, height: 934 },
  },
];

export type Person = { name: string; role: string; photo?: string };

export const leadership: Person[] = [
  { name: "Samantha", role: "CEO", photo: "/img/team/samantha.jpg" },
  { name: "Kathryn", role: "COO", photo: "/img/team/kathryn.jpg"  },
  { name: "Reilly", role: "CTO & Chairman of the Board", photo: "/img/team/reilly.jpg" },
  { name: "Evan", role: "CFO", photo: "/img/team/evan.jpg"  },
  { name: "Alain", role: "GC", photo: "/img/team/alain.jpg" },
];

export const directors: Person[] = [
  { name: "Maria", role: "Director, Catering", photo: "/img/team/maria.jpg"  },
  { name: "Hira", role: "Director, Travel", photo: "/img/team/hira.jpg"  },
  { name: "Lina", role: "Director, Marketing & Communications", photo: "/img/team/lina.jpg" },
  { name: "Greg", role: "Director, Creative", photo: "/img/team/greg.jpg" },
  { name: "Ashley", role: "Director, Strategic Partnerships", photo: "/img/team/ashley.jpg"  },
  { name: "Kyle", role: "Director, Lighting", photo: "/img/team/kyle.jpg" },
];

export const production: Person[] = [
  { name: "Kelsea", role: "Producer (New York)", photo: "/img/team/kelsea.jpg" },
  { name: "Derek", role: "Producer (New York)", photo: "/img/team/derek.jpg" },
  { name: "Eugenio", role: "Producer (New York)", photo: "/img/team/eugenio.jpg" },
  { name: "Heather", role: "Producer (New York)" },
  { name: "Michelle", role: "Producer (New York)" },
  { name: "Kyle “The Barnikel”", role: "Producer (New York)", photo: "/img/team/kyle-barnikel.jpg" },
  { name: "JP “Pepperflake”", role: "Producer (New York)", photo: "/img/team/jp.jpg" },
  { name: "Saaim Ahmed", role: "Producer (Dallas)", photo: "/img/team/saaim.jpg" },
  { name: "Wendy", role: "Producer (Miami)", photo: "/img/team/wendy.jpg" },
  { name: "Manoli", role: "Producer (Miami)" },
  { name: "Fred", role: "Producer (Los Angeles)", photo: "/img/team/fred.jpg" },
  { name: "Yashar", role: "Production Support" },
];

// DRAFT pricing anchors pending Reilly's sign-off. Sourced from NYC market
// research 7/2026; tuned to the premium end of each range.
export const pricingRows = services
  .filter((s) => s.pricing)
  .map((s) => ({
    slug: s.slug,
    service: s.name,
    label: s.pricing!.label,
    from: s.pricing!.from,
    note: s.pricing!.note,
  }));
