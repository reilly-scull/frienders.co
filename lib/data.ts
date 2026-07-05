// Central content for frienders.co — one source of truth shared by pages.

export type ServiceCard = {
  slug: string;
  title: string;
  accent: string; // the <em> word
  short: string;
  img: string;
  alt: string;
};

export const services: ServiceCard[] = [
  {
    slug: "private-events",
    title: "Private",
    accent: "Events",
    short:
      "Birthdays, weddings, offsites, things that defy category. Full production, hosted by us, thrown for you.",
    img: "/img/tent-dance.jpg",
    alt: "Guests dancing at a private tented event",
  },
  {
    slug: "party-911",
    title: "Party",
    accent: "911",
    short:
      "Day-of cancellations. Vanished vendors. Disasters mid-untucking. A limited menu at premium prices, when you need it most.",
    img: "/img/party-bus.jpg",
    alt: "A guest in a suit keeping the party bus alive",
  },
  {
    slug: "venues",
    title: "The",
    accent: "Venues",
    short:
      "Partner rooms in the East Village, Williamsburg, and Gowanus. Dinners, showcases, launches, dance floors.",
    img: "/img/venue-hall.jpg",
    alt: "Warm timber event hall with long candlelit tables",
  },
  {
    slug: "equipment",
    title: "Equipment",
    accent: "Rentals",
    short:
      "Electro-Voice and QSC rigs from 400 to 1,000 watts per channel. Sennheiser mics. AlphaTheta decks. Three lighting packages.",
    img: "/img/decks.jpg",
    alt: "Professional DJ decks and turntables",
  },
  {
    slug: "djs",
    title: "Resident",
    accent: "DJs",
    short:
      "Six residents who read a room and pack a floor. Booked with or without our sound rig.",
    img: "/img/dj-red.jpg",
    alt: "DJ performing under red light",
  },
  {
    slug: "catering",
    title: "Catering, Bar &",
    accent: "Staff",
    short:
      "Menus with our partners at Curated Kitchen, bartenders who can pour through a rush, staff who have seen everything.",
    img: "/img/cauliflower.jpg",
    alt: "Roasted cauliflower plated by our catering partners",
  },
  {
    slug: "travel",
    title: "The Travel",
    accent: "Desk",
    short:
      "In-house agents who move the whole crew: flights, villas, transfers. You pick the place. We move the party there.",
    img: "/img/como-boat.jpg",
    alt: "Guest laughing on a speedboat on an alpine lake",
  },
];

export type Trip = {
  slug: string;
  name: string;
  stats: string; // "15 people · 4 days · Hamptons"
  body: string[];
  img: string;
  alt: string;
  img2?: string;
  alt2?: string;
};

export const trips: Trip[] = [
  {
    slug: "summers-end",
    name: "Summer's End Full Send",
    stats: "15 people · 4 days · Hamptons farmhouse",
    body: [
      "The season does not fade out. It gets a finale. Fifteen of us take a Hamptons farmhouse for four days with three DJs on rotation and 2,000 watts of sound aimed carefully away from the neighbors.",
      "Fireworks over the field. Glow-in-the-dark lawn games that get taken far too seriously. Full catering, so nobody's weekend is spent at a stove. The pool pavilion becomes a booth at sundown.",
    ],
    img: "/img/farmhouse-pool.jpg",
    alt: "DJ playing from a poolside pavilion at a Hamptons farmhouse",
    img2: "/img/farmhouse-dusk.jpg",
    alt2: "The farmhouse glowing at dusk",
  },
  {
    slug: "gold-party",
    name: "The Gold Party",
    stats: "20 people · Upstate NY · dress code: gold",
    body: [
      "Twenty people, one house upstate, and a single rule: gold. Costumes on arrival, decorations to the rafters, three DJs carrying the night from golden hour to well past it.",
      "There is a massage table. There is always a massage table. Recovery is part of the production.",
    ],
    img: "/img/gold-hour-crew.jpg",
    alt: "The crew in gold at golden hour",
    img2: "/img/lawn-upstate.jpg",
    alt2: "Blankets on the lawn the morning after",
  },
  {
    slug: "south-carolina",
    name: "South Carolina",
    stats: "15 people · 5 days · barrier island beach house",
    body: [
      "A beach house on the barrier islands, five days, fifteen people, and a tide chart as the only schedule. Long mornings, longer dinners, and the Atlantic doing most of the entertaining.",
    ],
    img: "/img/beach-dusk.jpg",
    alt: "Parachute games on the beach at dusk",
  },
  {
    slug: "mexico",
    name: "Mexico",
    stats: "12 people · 3 days · festival + villas",
    body: [
      "Twelve of us, three days, one music festival, and the after-parties that mattered more. Villas close enough to walk home at sunrise, staffed so the fridge never went empty.",
    ],
    img: "/img/island-jump.jpg",
    alt: "The crew mid-jump on a beach with the boat waiting",
  },
  {
    slug: "sailing",
    name: "Sailing Trips",
    stats: "6–20 people · NYC, Caribbean, Mediterranean",
    body: [
      "Day outings in New York Harbor and week-long charters in the Caribbean and the Med. Deserted islands, beach towns, seaside restaurants, and beach parties powered by an off-grid sound system that has no business sounding this good on a boat.",
      "Six to twenty people, crewed, catered, and pointed at the horizon.",
    ],
    img: "/img/sail-schooner.jpg",
    alt: "Guests aboard a schooner in front of the Manhattan skyline",
    img2: "/img/sail-sunset.jpg",
    alt2: "Sunset from the deck",
  },
  {
    slug: "vermont",
    name: "Vermont Ski Trip",
    stats: "Big house · fire pits · first chair",
    body: [
      "A big house near the hill. S'mores and fire pits, hot chocolate with reinforcements, a catered dinner worth coming down the mountain for, and an after-party that ignores the lift schedule.",
    ],
    img: "/img/pow-day.jpg",
    alt: "The crew celebrating a powder day",
  },
  {
    slug: "desert",
    name: "Desert Adventures",
    stats: "5 people · 1 week · Boulder to Joshua Tree",
    body: [
      "Five people, one week, a route that only makes sense on a map drawn at 2am: parties in Boulder and Joshua Tree with pit stops across Utah and Nevada. High desert, higher production value.",
    ],
    img: "/img/desert-gold.jpg",
    alt: "Golden hour in the desert, robes mandatory",
  },
  {
    slug: "halloween",
    name: "Halloween",
    stats: "Many editions · many locations",
    body: [
      "Our high holiday. Different city, different venue, different theme every year — the costumes are non-negotiable and the documentation is extensive.",
    ],
    img: "/img/halloween-crew.jpg",
    alt: "Full-commitment Halloween costumes",
  },
  {
    slug: "beach",
    name: "Beach Parties",
    stats: "NYC sand · full setup · until the rangers come",
    body: [
      "Rockaway to Fort Tilden and beyond: sound, shade, coolers with a logistics plan, and a sunset that always seems to run overtime.",
    ],
    img: "/img/beach-nyc.jpg",
    alt: "Beach picnic with the city skyline behind",
  },
  {
    slug: "woodland",
    name: "Woodland",
    stats: "Upstate · under the canopy",
    body: [
      "Blankets on a hillside, a rig in the trees, and a day that drifts from picnic to dance floor without anyone deciding it should.",
    ],
    img: "/img/hill-picnic.jpg",
    alt: "Picnic blankets on a hillside at golden hour",
  },
  {
    slug: "petes-birthdays",
    name: "Pete's Birthdays at Public Records",
    stats: "Private takeover · world-class sound",
    body: [
      "A full private takeover of one of New York's great listening rooms. World-class sound system, our connections in nightlife, and staff who treat the room like the instrument it is. Pete only turns a year older once a year; the room makes sure everyone hears about it.",
    ],
    img: "/img/club-red.jpg",
    alt: "Red light and vinyl in the booth",
  },
  {
    slug: "valentines",
    name: "An Intimate Valentine's Dinner",
    stats: "12 people · 3 days of prep · 100 candles",
    body: [
      "Three days of prep for one dinner: rose petals everywhere, a hundred candles, rosé prosecco on arrival. Roast tomato soup, then osso buco alla milanese, poured against a Barolo that had been waiting for exactly this.",
    ],
    img: "/img/valentines-room.jpg",
    alt: "A candlelit red dining room set for twelve",
  },
];

export type DJ = { name: string; url: string; blurb: string };

export const djs: DJ[] = [
  {
    name: "G.Thomas",
    url: "https://soundcloud.com/gthomasny",
    blurb: "House with warmth and patience — the set that makes a room settle in for the night.",
  },
  {
    name: "Lina Grace",
    url: "https://soundcloud.com/lina-grace-deforca",
    blurb: "Melodic and precise. Reads a sunset like sheet music.",
  },
  {
    name: "jacqsmiley",
    url: "https://soundcloud.com/jacqsmiley",
    blurb: "Peak-hour energy with a grin. Floors do not stay empty.",
  },
  {
    name: "Getyn Afteret",
    url: "https://soundcloud.com/kyle-stoddard-948502533",
    blurb: "The after-hours specialist. Exactly what the name promises.",
  },
  {
    name: "Dario Dee",
    url: "https://soundcloud.com/dariodee_music",
    blurb: "Groove-first selections that work a boat deck as hard as a basement.",
  },
  {
    name: "Sasta",
    url: "https://soundcloud.com/sastamusic",
    blurb: "Deep, driving, and built for the long game.",
  },
];

export type Person = { name: string; role: string; blurb?: string };

export const leadership: Person[] = [
  { name: "Samantha", role: "Chief Executive Officer", blurb: "Sets the standard. Signs off on nothing less." },
  { name: "Reilly", role: "Chief Technology Officer", blurb: "Sound, signal, systems. If it has a cable, it reports to him." },
  { name: "Kathryn Lewis", role: "Chief Operating Officer", blurb: "Runs the machine that makes it look effortless." },
  { name: "Derek", role: "Director, Strategic Partnerships", blurb: "Knows the room before we book it." },
  { name: "Wendy", role: "Chief of Staff", blurb: "The calendar answers to her." },
  { name: "Olga", role: "Chief Financial Officer", blurb: "Champagne budgets, ledger discipline." },
  { name: "Kyle", role: "Director, Supply Chain Engineering", blurb: "The truck is packed, and packed correctly." },
  { name: "Greg", role: "Director, People & Chancellor of Sass", blurb: "Morale, standards, and quality control on both." },
  { name: "Halima", role: "Director, Recovery Services", blurb: "The morning after is also our department." },
  { name: "Alain", role: "General Counsel", blurb: "Reads the fine print so the party doesn't have to." },
  { name: "Dianna", role: "Chief Medical Officer", blurb: "Licensed, unflappable, and stocked." },
];

export const departmentHeads: Person[] = [
  { name: "Maria", role: "Head of Catering", blurb: "Menus with Curated Kitchen; plates that hold their own against the view." },
  { name: "Hira", role: "Head of Travel", blurb: "Moves 20 people across an ocean like it's a dinner reservation." },
];

export const supportTeam: Person[] = [
  { name: "Kelsea", role: "Guest Experience" },
  { name: "Derek", role: "Logistics & Load-in" },
  { name: "Yashar", role: "Production Support" },
];

export const venues = [
  {
    name: "East Village",
    spec: "1,500 sq ft · ground floor",
    body: "A flexible ground-floor room in the East Village. Dinners for forty, showcases, launches, or a dance floor with room to breathe. Street-level load-in, which your production crew will thank us for.",
    img: "/img/ev-bar.jpg",
    alt: "The East Village room, bar side",
  },
  {
    name: "Williamsburg",
    spec: "Full bar · north Brooklyn",
    body: "A working Williamsburg bar available for private takeovers. Warm wood, a proper back bar, and a staff that has seen a Tuesday turn into a Saturday.",
    img: "/img/wburg-bar.jpg",
    alt: "The Williamsburg bar interior",
  },
  {
    name: "Gowanus",
    spec: "Hi-fi listening bar",
    body: "A hi-fi bar in Gowanus built around the sound: audiophile playback, vinyl in the booth, and an acoustic treatment budget that outran the furniture budget. For listening parties, intimate sets, and rooms where the music is the guest of honor.",
    img: "/img/hifi-bar.jpg",
    alt: "The Gowanus hi-fi listening corner",
  },
];
