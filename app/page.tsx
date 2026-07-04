import Image from "next/image";
import Effects from "@/components/Effects";
import Gallery, { type Shot } from "@/components/Gallery";

const services = [
  {
    title: (
      <>
        Our <em>Parties</em>
      </>
    ),
    body: "Boats, rooftops, warehouses, beaches. We produce our own events in NYC, across the US, and internationally. Get on the list.",
    img: "/img/sail-skyline.jpg",
    alt: "Group on a sailboat in front of the Manhattan skyline",
  },
  {
    title: (
      <>
        Private <em>Events</em>
      </>
    ),
    body: "Birthdays, weddings, corporate offsites, things that defy category. Full production, hosted by us, thrown for you.",
    img: "/img/tent-dance.jpg",
    alt: "Guests dancing at a private tented event",
  },
  {
    title: (
      <>
        The <em>Venue</em>
      </>
    ),
    body: "Our space, your night. A rentable venue with the bones for dinners, showcases, launches, and dance floors.",
    img: "/img/venue-hall.jpg",
    alt: "Warm timber event hall with long candlelit tables",
  },
  {
    title: (
      <>
        Equipment <em>Rentals</em>
      </>
    ),
    body: "Sound, lighting, decks, subs, and professional speakers. Only the best, delivered and dialed in by people who use it weekly.",
    img: "/img/decks.jpg",
    alt: "Professional DJ decks and turntables",
  },
  {
    title: (
      <>
        DJs &amp; <em>Talent</em>
      </>
    ),
    body: "A roster of staff DJs who read a room and pack a floor. Booked with or without our sound rig.",
    img: "/img/dj-red.jpg",
    alt: "DJ performing under red light",
  },
  {
    title: (
      <>
        Catering, Bar &amp; <em>Staff</em>
      </>
    ),
    body: "Catering for events, bartenders who can pour through a rush, and event staff for hire. Fed, watered, handled.",
    img: "/img/champagne.jpg",
    alt: "Champagne bottles and cans stacked on ice",
  },
];

const shots: Shot[] = [
  { src: "/img/beach-crew.jpg", alt: "Group celebrating on a Caribbean beach", caption: "Island chapter", width: 1024, height: 768 },
  { src: "/img/dj-blue.jpg", alt: "DJ set under blue geometric lights", caption: "Resident at work", width: 1050, height: 1400 },
  { src: "/img/hill-picnic.jpg", alt: "Picnic blankets on a hillside at golden hour", caption: "Upstate, uphill", width: 1400, height: 1050 },
  { src: "/img/ski-crew.jpg", alt: "Crew in ski gear celebrating in deep snow", caption: "First chair, last call", width: 1118, height: 806 },
  { src: "/img/sunset-hammock.jpg", alt: "Sunset over the water from a hammock on deck", caption: "Golden hour, every hour", width: 1050, height: 1400 },
  { src: "/img/pool-party.jpg", alt: "Pool party with DJ playing under a cabana", caption: "Cabana sessions", width: 1500, height: 1125 },
  { src: "/img/tuscany-dinner.jpg", alt: "Long lunch on a stone terrace with wine", caption: "The long lunch", width: 1050, height: 1400 },
  { src: "/img/rafting.jpg", alt: "Whitewater rafting crew mid-rapid", caption: "Team building, technically", width: 1284, height: 943 },
  { src: "/img/rooftop-sunset.jpg", alt: "Friends on a rooftop at sunset", caption: "Rooftop rituals", width: 1400, height: 1050 },
  { src: "/img/disco-selfie.jpg", alt: "Sequins and a very good wig", caption: "Dress code enforced", width: 1400, height: 1050 },
  { src: "/img/boat-girls.jpg", alt: "Friends celebrating on a boat in turquoise water", caption: "Open water office", width: 1400, height: 1049 },
  { src: "/img/winter-sail.jpg", alt: "Crew in life vests sailing New York Harbor in winter", caption: "Harbor, off season", width: 1400, height: 1050 },
  { src: "/img/wings.jpg", alt: "Performer with illuminated wings at night", caption: "Production value", width: 1400, height: 1050 },
  { src: "/img/beach-nyc.jpg", alt: "Beach picnic with the city skyline behind", caption: "The city, from the sand", width: 1400, height: 1050 },
  { src: "/img/photobooth.jpg", alt: "Costumed friends in a photo booth", caption: "October, obviously", width: 1400, height: 933 },
  { src: "/img/food.jpg", alt: "Plated dinner from our catering team", caption: "From the kitchen", width: 1400, height: 1050 },
  { src: "/img/golden-portrait.jpg", alt: "Golden hour portrait wrapped in a blanket", caption: "Sunset uniform", width: 1400, height: 1050 },
  { src: "/img/private-dining.jpg", alt: "Candlelit private dining room set for dinner", caption: "Table for whoever shows", width: 1400, height: 934 },
];

const tickerItems = [
  "Our parties",
  "Private events",
  "Venue rental",
  "Sound & lighting",
  "Resident DJs",
  "Catering & bar",
  "Staffing",
  "Travel desk",
];

export default function Home() {
  return (
    <>
      <Effects />

      <nav>
        <a className="wordmark" href="#top">
          FRIENDERS COLLECTIVE<span>.</span>
        </a>
        <div className="links">
          <a href="#story">Story</a>
          <a href="#services">What We Do</a>
          <a href="#trips">The Trips</a>
          <a href="#contact">Book Us</a>
        </div>
      </nav>

      <header id="top">
        <div className="bg">
          <Image
            src="/img/hero-hilltop.jpg"
            alt="Hilltop sunset over fall foliage"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-inner">
          <p className="kicker">An experiences company. Est. 2018.</p>
          <h1>
            A professionally
            <br />
            <span className="accent">good time.</span>
          </h1>
          <p className="hero-sub">
            We throw parties in New York, across the country, and around the
            world. Then we got so good at it, people started hiring us to throw
            theirs.
          </p>
          <div className="cta-row">
            <a className="btn btn-solid" href="#contact">
              Plan something
            </a>
            <a className="btn btn-ghost" href="#trips">
              See the proof
            </a>
          </div>
        </div>
      </header>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((copy) =>
            tickerItems.map((item) => (
              <span key={`${copy}-${item}`}>
                {item} <b>&#9679;</b>
              </span>
            ))
          )}
        </div>
      </div>

      <section id="story">
        <div className="wrap story">
          <div className="reveal">
            <div className="section-head" style={{ marginBottom: 28 }}>
              <p className="kicker">The story</p>
              <h2>
                Started by friends.
                <br />
                Staffed by professionals.
                <br />
                Same people.
              </h2>
            </div>
            <p>
              In 2018, a group of friends from tech, finance, music, nightlife,
              and entertainment kept ending up in charge of everyone else&apos;s
              fun. The sound system. The boat. The bartender who never showed.
              Somebody had to handle it, and it kept being us.
            </p>
            <p>
              So we made it official. <b>Frienders Collective</b> is an experiences
              company. We produce our own parties in NYC, across the US, and
              internationally. We host private events for people who want
              theirs handled the same way. And everything we use to do it, from
              the venue to the speakers to the staff behind the bar, is
              available to you.
            </p>
            <p>
              The rule from day one has not changed: every event should feel
              like it was thrown by your most capable friend. Because it was.
            </p>
          </div>
          <div className="story-photos reveal">
            <Image
              src="/img/film-flash.jpg"
              alt="Friends laughing at a party, shot on film"
              width={1400}
              height={928}
              sizes="(max-width: 860px) 50vw, 25vw"
            />
            <Image
              src="/img/captain.jpg"
              alt="Three friends in captain hats at a boat party"
              width={928}
              height={1400}
              sizes="(max-width: 860px) 50vw, 25vw"
            />
          </div>
        </div>
      </section>

      <section id="services">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="kicker">What we do</p>
            <h2>
              Everything the party needs.
              <br />
              Under one roof.
            </h2>
            <p className="lede">
              Book the whole production or just the piece you&apos;re missing.
              Every service below is in-house. No brokers, no markups on
              markups.
            </p>
          </div>
          <div className="svc-grid">
            {services.map((svc) => (
              <a className="svc reveal" href="#contact" key={svc.img}>
                <Image
                  src={svc.img}
                  alt={svc.alt}
                  fill
                  sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw"
                />
                <div className="svc-body">
                  <h3>{svc.title}</h3>
                  <p>{svc.body}</p>
                </div>
              </a>
            ))}
            <a className="svc svc-wide reveal" href="#contact">
              <Image
                src="/img/como-boat.jpg"
                alt="Guest laughing on a speedboat on an alpine lake"
                fill
                sizes="100vw"
              />
              <div className="svc-body">
                <h3>
                  The Travel <em>Desk</em>
                </h3>
                <p>
                  In-house travel agents who coordinate flights,
                  transportation, and accommodations for the whole crew. You
                  pick the destination. We move the party there.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="trips">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="kicker">Field notes</p>
            <h2>The trips.</h2>
            <p className="lede">
              A running record of professionally good times. Some of these were
              our parties. Some were client events. All of them ended too late.
            </p>
          </div>
          <Gallery shots={shots} />
        </div>
      </section>

      <section id="contact">
        <div className="wrap reveal">
          <p className="kicker">Book us</p>
          <h2>
            Your party called.
            <br />
            We picked up.
          </h2>
          <p className="lede">
            Tell us the date, the headcount, and how ambitious we are allowed
            to be. We will take it from there.
          </p>
          <a className="btn btn-solid" href="mailto:hello@frienders.co">
            hello@frienders.co
          </a>
          <p className="contact-line">
            New York City and wherever the trip goes.{" "}
            <a href="https://frienders.co">frienders.co</a>
          </p>
        </div>
      </section>

      <footer>
        <div>&copy; 2026 Frienders Collective. Est. 2018.</div>
        <div className="tag">&quot;Help. We&apos;ve fallen and must turn up.&quot;</div>
      </footer>
    </>
  );
}
