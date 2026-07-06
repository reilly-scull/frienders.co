import Image from "next/image";
import Link from "next/link";
import Gallery, { type Shot } from "@/components/Gallery";
import CTABand from "@/components/CTABand";
import { services, djs, productions } from "@/lib/content";

const homeShots: Shot[] = [
  { src: "/img/hill-picnic.jpg", alt: "Picnic blankets on a hillside at golden hour", caption: "Upstate, uphill", width: 1400, height: 1050 },
  { src: "/img/bunzy-group.jpg", alt: "The crew in all white on the lawn", caption: "Bunzy Day, all white", width: 930, height: 1400 },
  { src: "/img/rockaway-pool.jpg", alt: "Pool party with a flag and floaties", caption: "Pool rules suspended", width: 1290, height: 1271 },
  { src: "/img/sunset-hammock.jpg", alt: "Sunset over the water from a hammock on deck", caption: "Puerto Rico, properly paced", width: 1050, height: 1400 },
  { src: "/img/dj-skyline.jpg", alt: "Resident DJ on the decks with the Manhattan skyline behind", caption: "Rooftop rituals", width: 1125, height: 1500 },
  { src: "/img/snow-hike.jpg", alt: "The crew hiking through the snow to the lift", caption: "First chair earned", width: 1290, height: 919 },
  { src: "/img/li-beach.jpg", alt: "Umbrellas and towels at a Long Island beach day", caption: "Long Island, low tide", width: 1400, height: 1050 },
  { src: "/img/dj-duo.jpg", alt: "Two DJs playing back to back under red light", caption: "Back to back", width: 1400, height: 1050 },
  { src: "/img/winter-sail.jpg", alt: "Crew in life vests sailing New York Harbor in winter", caption: "Harbor, off season", width: 1400, height: 1050 },
  { src: "/img/pool-heart.jpg", alt: "A heart-shaped floatie in the farmhouse pool", caption: "Summer's end, full send", width: 1050, height: 1400 },
  { src: "/img/dog-overlook.jpg", alt: "A quiet moment with the dog above the river", caption: "The quiet parts", width: 1050, height: 1400 },
  { src: "/img/costume-night.jpg", alt: "Costumed crew out in the night", caption: "October, obviously", width: 1050, height: 1400 },
  { src: "/img/tray-shots.jpg", alt: "A tray of shots delivered to the table", caption: "A round arrives", width: 1050, height: 1400 },
  { src: "/img/bushwick-sunrise.jpg", alt: "The crew on a Bushwick corner as the sun comes up", caption: "Bushwick, sunrise shift", width: 1500, height: 1125 },
  { src: "/img/beach-club.jpg", alt: "A Mediterranean beach club afternoon", caption: "Beach club, Med", width: 1400, height: 1050 },
  { src: "/img/sail-drinks.jpg", alt: "Drinks up on a sailing trip", caption: "Anchors and aperitifs", width: 1050, height: 1400 },
  { src: "/img/beach-nyc.jpg", alt: "Beach picnic with the city skyline behind", caption: "The city, from the sand", width: 1400, height: 1050 },
  { src: "/img/parachute-toss.jpg", alt: "A parachute game in full swing", caption: "Group activity, mandatory fun", width: 1400, height: 1050 },
  { src: "/img/wine-lineup.jpg", alt: "A lineup of wine bottles for the tasting", caption: "Tasting, then not tasting", width: 1400, height: 1050 },
  { src: "/img/wburg-sunset.jpg", alt: "Sunset over the Williamsburg Bridge from a rooftop", caption: "Borough golden hour", width: 1500, height: 1125 },
  { src: "/img/costume-baby.jpg", alt: "A committed and questionable costume choice", caption: "Commitment to the bit", width: 806, height: 1400 },
];

const tickerItems = [
  "Private productions",
  "Private events",
  "Venues",
  "Sound & lighting",
  "Resident DJs",
  "Catering & bar",
  "Party photography",
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
            We throw parties in New York and around the world. We got so good
            at it that people started hiring us to throw theirs.
          </p>
          <div className="cta-row">
            <Link className="btn btn-solid" href="/contact">
              Plan something
            </Link>
            <Link className="btn btn-ghost" href="/productions">
              See the productions
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
              src="/img/rooftop-sunset.jpg"
              alt="Friends on a rooftop at golden hour"
              width={1400}
              height={1050}
              sizes="(max-width: 860px) 50vw, 25vw"
            />
            <Image
              src="/img/boat-dance.jpg"
              alt="Dancing under the Kosciuszko Bridge in pink light"
              width={1125}
              height={1500}
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

      <section className="bliss-band">
        <div className="reveal">
          <div className="whisper">
            Ephemeral bliss<span className="dim">,</span>
            <br />
            timeless memories<span className="dim">.</span>
          </div>
          <p>The night ends. The story doesn&apos;t.</p>
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
          <Link className="btn btn-alert btn-siren reveal" href="/services/party911">
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

      <section className="section-tint" id="productions">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="kicker">The record</p>
            <h2>Productions.</h2>
            <p className="lede">
              {productions.length} chapters and counting: the Hamptons,
              upstate, Mexico, the Mediterranean, and a few places we agreed
              not to name. Every one was a private event somebody hired us to
              build. Yours goes at the top of this page.
            </p>
          </div>
          <Gallery shots={homeShots} />
          <Link className="section-foot-link reveal" href="/productions">
            Every production, in detail
          </Link>
        </div>
      </section>

      <CTABand
        kicker="Book us"
        title={
          <>
            Let&apos;s put a date
            <br />
            on it.
          </>
        }
      />
    </>
  );
}
