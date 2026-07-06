import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import WhereMap, { type Spot } from "@/components/WhereMap";
import { productions } from "@/lib/content";

const spots: Spot[] = [
  { id: "nyc", label: "New York City", lat: 40.7128, lng: -74.006 },
  { id: "cdmx", label: "Mexico City", lat: 19.4326, lng: -99.1332 },
  { id: "boulder", label: "Boulder", lat: 40.015, lng: -105.2705 },
  { id: "vegas", label: "Las Vegas", lat: 36.1699, lng: -115.1398 },
  { id: "grand-canyon", label: "Grand Canyon", lat: 36.0544, lng: -112.1401 },
  { id: "zion", label: "Zion", lat: 37.2982, lng: -113.0263 },
];

export const metadata: Metadata = {
  title: "Productions",
  description:
    "Twelve productions and counting: a Hamptons farmhouse takeover, an upstate gold party, festival trips to Mexico, sailing charters, a Public Records takeover, and a 100-candle Valentine's dinner. All invite-only. All repeatable.",
  openGraph: { images: ["/img/hillside-blanket.jpg"] },
};

export default function ProductionsPage() {
  return (
    <>
      <PageHero
        kicker="The record"
        title={
          <>
            Productions<span className="accent">.</span>
          </>
        }
        sub="A running record of professionally good times. Every one of these was a private event: no tickets, no door sales, just a host who wanted an unforgettable night and a crew that builds them. This is what it looks like when you hire us."
        img="/img/island-nap.jpg"
        alt="An afternoon nap on the sand after a long beach day"
      />

      <section className="section-tint" style={{ paddingBottom: 64 }}>
        <div className="wrap">
          <div className="section-head reveal" style={{ marginBottom: 32 }}>
            <p className="kicker">The territory</p>
            <h2>Have rig, will travel.</h2>
          </div>
          <div className="reveal">
            <WhereMap spots={spots} />
            <p className="map-caption">
              {spots.map((s) => s.label).join(" · ")}
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 40 }}>
        <div className="wrap">
          {productions.map((prod) => (
            <article className="trip" key={prod.slug} id={prod.slug}>
              <div className="trip-media reveal">
                <Image
                  src={prod.img.src}
                  alt={prod.img.alt}
                  width={prod.img.width}
                  height={prod.img.height}
                  sizes="(max-width: 820px) 100vw, 50vw"
                />
                {prod.extras && (
                  <div className="trip-extras">
                    {prod.extras.map((x) => (
                      <Image
                        key={x.src}
                        src={x.src}
                        alt={x.alt}
                        width={x.width}
                        height={x.height}
                        sizes="(max-width: 820px) 33vw, 16vw"
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="reveal">
                <h3>{prod.name}</h3>
                <p className="stats">{prod.stats}</p>
                <p className="body">{prod.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABand
        title="Your chapter goes here."
        body="Every production on this page started as a text that said 'what if we...'. Send us yours."
        cta="Start something"
      />
    </>
  );
}
