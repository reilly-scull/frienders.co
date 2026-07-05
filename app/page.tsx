import Image from "next/image";
import Link from "next/link";
import Gallery, { type Shot } from "@/components/Gallery";
import { services, djs, trips } from "@/lib/content";

const homeShots: Shot[] = [
  { src: "/img/beach-crew.jpg", alt: "Group celebrating on a Caribbean beach", caption: "Island chapter", width: 1024, height: 768 },
  { src: "/img/dj-blue.jpg", alt: "DJ set under blue geometric lights", caption: "Resident at work", width: 1050, height: 1400 },
  { src: "/img/hill-picnic.jpg", alt: "Picnic blankets on a hillside at golden hour", caption: "Upstate, uphill", width: 1400, height: 1050 },
  { src: "/img/sunset-hammock.jpg", alt: "Sunset over the water from a hammock on deck", caption: "Golden hour, every hour", width: 1050, height: 1400 },
  { src: "/img/pool-party.jpg", alt: "Pool party with DJ playing under a cabana", caption: "Cabana sessions", width: 1500, height: 1125 },
  { src: "/img/rooftop-sunset.jpg", alt: "Friends on a rooftop at sunset", caption: "Rooftop rituals", width: 1400, height: 1050 },
  { src: "/img/winter-sail.jpg", alt: "Crew in life vests sailing New York Harbor in winter", caption: "Harbor, off season", width: 1400, height: 1050 },
  { src: "/img/disco-selfie.jpg", alt: "Sequins and a very good wig", caption: "Dress code enforced", width: 1400, height: 1050 },
  { src: "/img/wings.jpg", alt: "Performer with illuminated wings at night", caption: "Production value", width: 1400, height: 1050 },
];

const tickerItems = [
  "Our parties",
  "Private events",
  "Venues",
  "Sound & lighting",
  "Resident DJs",
  "Catering & bar",
  "Staffing",
  "Travel desk",
  "Party911",
];

export default function Home() {
  return (
    <>
      <header className="home-hero" id="top">
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
            <Link className="btn btn-solid" href="/contact">
              Plan something
            </Link>
            <Link className="btn btn-ghost" href="/trips">
              See the proof
            </Link>
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
          <div className="reveal prose">
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
              <b>Frienders Collective</b> is a private event production and
              experiences company in New York City, founded in 2018,
              specializing in groups under 150. We produce our own parties in
              NYC, across the US, and internationally, and we bring the same
              stack to private events: venues, sound, resident DJs, catering,
              staff, and an in-house travel desk.
            </p>
            <p>
              Our crew came up through Brooklyn warehouses, boat decks, and the
              Burning Man scene of professional partygoers. No one here is new.
              Everyone is a pro. That is the whole hiring policy.
            </p>
            <Link className="section-foot-link" href="/about">
              Read the full story
            </Link>
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

      <section className="section-tint" id="services">
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
              One crew, one budget, one text thread.
            </p>
          </div>
          <div className="svc-grid">
            {services
              .filter((s) => s.slug !== "party911")
              .map((svc, i) => {
                const words = svc.name.split(" ");
                const last = words.pop();
                const isWide = svc.slug === "travel";
                return (
                  <Link
                    className={`svc reveal ${isWide ? "svc-wide" : ""}`}
                    href={`/services/${svc.slug}`}
                    key={svc.slug}
                  >
                    <Image
                      src={svc.cardImg}
                      alt={svc.cardAlt}
                      fill
                      sizes={
                        isWide
                          ? "100vw"
                          : "(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw"
                      }
                      loading={i < 3 ? undefined : "lazy"}
                    />
                    <div className="svc-body">
                      <h3>
                        {words.join(" ")} <em>{last}</em>
                      </h3>
                      <p>{svc.card}</p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      <section className="rescue-band">
        <div className="wrap">
          <div className="reveal">
            <p className="kicker">Party911</p>
            <h2>
              The DJ cancelled.
              <br />
              We don&apos;t.
            </h2>
            <p>
              Day-of cancellations, no-show vendors, unexpected disasters. Our
              emergency line runs a limited menu at premium prices, and within
              NYC we can usually have music playing within 3 to 4 hours. If
              you&apos;re in a jam, we can get you out of it.
            </p>
          </div>
          <Link className="btn btn-alert reveal" href="/services/party911">
            Sound the alarm
          </Link>
        </div>
      </section>

      <section id="residents">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="kicker">The residents</p>
            <h2>Six DJs. Zero requests for Mr. Brightside.</h2>
            <p className="lede">
              Our resident roster plays our parties and yours. Every SoundCloud
              link is a preview of your dance floor.
            </p>
          </div>
          <div className="dj-grid">
            {djs.map((dj) => (
              <a
                className="dj-card reveal"
                href={dj.url}
                key={dj.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>{dj.name}</h3>
                <p>{dj.blurb}</p>
                <span className="sc">Listen on SoundCloud</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tint" id="trips">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="kicker">Field notes</p>
            <h2>The trips.</h2>
            <p className="lede">
              {trips.length} chapters and counting: the Hamptons, upstate,
              Mexico, the Mediterranean, and a few places we agreed not to name.
            </p>
          </div>
          <Gallery shots={homeShots} />
          <Link className="section-foot-link reveal" href="/trips">
            Every trip, in detail
          </Link>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap reveal">
          <p className="kicker">Book us</p>
          <h2>
            Your party called.
            <br />
            We picked up.
          </h2>
          <p className="lede">
            Tell us the date, the headcount, and how ambitious we are allowed
            to be. A producer replies within one business day.
          </p>
          <Link className="btn btn-solid" href="/contact">
            Plan something
          </Link>
        </div>
      </section>
    </>
  );
}
