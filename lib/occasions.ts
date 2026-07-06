export type Occasion = {
  slug: string;
  name: string;
  kicker: string;
  heroImg: string;
  heroAlt: string;
  intro: string[];
  features: { title: string; body: string }[];
  gallery?: { src: string; alt: string; width: number; height: number }[];
  seoTitle: string;
  seoDescription: string;
  ctaTitle: string;
};

export const occasions: Occasion[] = [
  {
    slug: "birthdays",
    name: "Birthdays",
    kicker: "Another year, properly marked",
    heroImg: "/img/bar-blooms.jpg",
    heroAlt: "A birthday embrace under the pink lights",
    intro: [
      "A birthday is the one night a year that is officially, unarguably yours. We produce birthday parties in NYC for groups under 150: venue, sound, resident DJ, bar, catering, and a producer who keeps the whole thing pointed at you.",
      "From a listening-bar dinner for 20 to a full takeover with a dance floor that goes late, the production scales to the ambition. The guest of honor's only job is showing up.",
    ],
    features: [
      { title: "The room", body: "Matched from our partner venues, or produced in yours: brownstones, rooftops, boats, and backyards all count." },
      { title: "The soundtrack", body: "A resident DJ briefed on your people and your era of choice. Requests honored, Mr. Brightside negotiable." },
      { title: "The zero-stress clause", body: "One producer, one budget, one text thread. You will attend your own party as a guest." },
    ],
    gallery: [
      { src: "/img/cheers-neon.jpg", alt: "The birthday toast, glasses in", width: 1125, height: 1500 },
    ],
    seoTitle: "Birthday Party Planning and Production in NYC",
    seoDescription: "Birthday party production in New York City for groups under 150: venues, resident DJs, sound, bar, and catering. Dinner for 20 to a full takeover, from $5,000.",
    ctaTitle: "It's your year. Act like it.",
  },
  {
    slug: "weddings",
    name: "Weddings",
    kicker: "The best party either family has seen",
    heroImg: "/img/tent-dance.jpg",
    heroAlt: "Guests dancing dressed up under string lights at a tented reception",
    intro: [
      "We produce weddings the way we produce everything: like the best party anyone in attendance has been to, that happens to include a ceremony. Under-150 guest lists are our specialty, where every table is a good table.",
      "We slot in alongside your planner or run the production end to end: venue, sound, lighting, DJs, catering through Curated Kitchen, bar, staff, and the after-party nobody wants to admit they are planning. That one is our favorite part.",
    ],
    features: [
      { title: "Ceremony to last call", body: "Clean sound for the vows, a floor that fills at the first song, and lighting that flatters every photo." },
      { title: "The after-party", body: "The part guests remember. We keep the energy moving when the venue clock runs out: next room, next chapter." },
      { title: "Family-proof logistics", body: "Shuttles, weather calls, seating chess, and a producer who has seen every version of the toast that runs long." },
    ],
    gallery: [
      { src: "/img/dock-toast.jpg", alt: "A champagne toast on the dock at dusk", width: 702, height: 510 },
      { src: "/img/boat-kiss.jpg", alt: "A kiss on the bow in matching life vests", width: 1500, height: 1125 },
      { src: "/img/wburg-bar.jpg", alt: "jacqsmiley playing from the bar top at the reception", width: 1125, height: 1500 },
    ],
    seoTitle: "Wedding Production and After-Parties in NYC",
    seoDescription: "Wedding production in New York City for celebrations under 150 guests: sound, lighting, DJs, catering, staff, and legendary after-parties. With or alongside your planner.",
    ctaTitle: "Marry them. We'll handle the rest.",
  },
  {
    slug: "corporate-offsites",
    name: "Corporate Offsites",
    kicker: "Team building, technically",
    heroImg: "/img/rafting.jpg",
    heroAlt: "A team whitewater rafting mid-rapid",
    intro: [
      "Offsites, launches, holiday blowouts, and the morale events people actually want to attend. We produce corporate events in NYC and run full offsite trips through our in-house travel desk, for teams under 150.",
      "The difference between an event your team endures and one they bring up in interviews is production: real sound, real food, a real DJ, and an itinerary with slack built in. We invoice like professionals and party like it is not a work event, because for your team, it should not feel like one.",
    ],
    features: [
      { title: "In the city", body: "Partner venues, catering, bar, and staff for launches, milestones, and holiday parties. One invoice, one point of contact." },
      { title: "Out of office", body: "The travel desk moves the whole team: lodges, farmhouses, beach houses, with production waiting on arrival." },
      { title: "Actually fun", body: "Rafting, mountains, boats, bonfires. Trust falls only if requested in writing." },
    ],
    gallery: [
      { src: "/img/corp-event.jpg", alt: "A resident DJ playing the showroom launch", width: 1500, height: 1000 },
      { src: "/img/shark-party.jpg", alt: "The office party, shark included", width: 1500, height: 1000 },
    ],
    seoTitle: "Corporate Offsites and Company Events in NYC",
    seoDescription: "Corporate event production and offsite trips for teams under 150: NYC venues, catering, DJs, and full travel-desk logistics. One invoice, one producer, events people actually attend.",
    ctaTitle: "Morale is a production budget.",
  },
  {
    slug: "bachelor-bachelorette",
    name: "Bachelor & Bachelorette",
    kicker: "The last big one",
    heroImg: "/img/boat-girls.jpg",
    heroAlt: "A bachelorette crew celebrating on a boat in turquoise water",
    intro: [
      "The send-off weekend deserves better than a group chat and a prayer. We produce bachelor and bachelorette trips end to end: the house, the boat, the dinners, the DJ, and the logistics that keep twelve adults moving in the same direction.",
      "NYC weekends, Hamptons houses, sailing charters, or a flight somewhere warm through our travel desk. The maid of honor gets to enjoy the trip she is nominally in charge of.",
    ],
    features: [
      { title: "The itinerary", body: "Built around the guest of honor, budgeted per head, and shared as one clean plan. No spreadsheet democracy." },
      { title: "The boat", body: "Day sails and charters are our signature move: open water, off-grid sound, and no neighbors to apologize to." },
      { title: "The recovery", body: "Late checkouts, greasy breakfasts, and a schedule that respects the previous evening's decisions." },
    ],
    seoTitle: "Bachelor and Bachelorette Party Planning NYC",
    seoDescription: "Bachelor and bachelorette weekends produced end to end: NYC nights, Hamptons houses, sailing charters, and warm-weather trips for groups of 6 to 20. The travel desk handles everything.",
    ctaTitle: "Send them off properly.",
  },
  {
    slug: "holiday-parties",
    name: "Holiday Parties",
    kicker: "December, handled",
    heroImg: "/img/living-room.jpg",
    heroAlt: "The whole crew piled in for the holiday dinner",
    intro: [
      "Company holiday parties, friends-giving blowouts, and end-of-year dinners that outdo last year without anyone having to think about it. December venues in NYC go fast; our partner spaces and production stack mean you can book late and still look early.",
      "Full production for groups under 150: venue, sound, lighting warm enough to forgive the weather, bar programs with a signature pour, and catering that beats the usual trays.",
    ],
    features: [
      { title: "Book late, look early", body: "Partner venues and in-house everything means a December date is a production question, not a miracle." },
      { title: "Warmth as a service", body: "Lighting, food, and a room that makes people stay past the polite hour. The goal is coats forgotten." },
      { title: "The January clause", body: "Winter dates in the new year run quieter calendars and better rates. The party does not know what month it is." },
    ],
    gallery: [
      { src: "/img/song-moment.jpg", alt: "Cannoli service, taken very seriously", width: 1125, height: 1500 },
      { src: "/img/palm-dining.jpg", alt: "The Friendsgiving table, set and waiting", width: 1500, height: 1125 },
    ],
    seoTitle: "Holiday Party Venues and Production in NYC",
    seoDescription: "Company holiday party production in New York City: partner venues in Manhattan and Brooklyn, catering, bar, DJs, and lighting for groups under 150. Late bookings welcome.",
    ctaTitle: "Win December.",
  },
];
