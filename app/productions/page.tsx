import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import FriendersMaps, { type Spot } from "@/components/FriendersMaps";
import { productions } from "@/lib/content";

const nycSpots: Spot[] = [
  { id: "east-village", label: "East Village", lat: 40.727, lng: -73.984 },
  { id: "williamsburg", label: "Williamsburg", lat: 40.714, lng: -73.961 },
  { id: "gowanus", label: "Gowanus", lat: 40.673, lng: -73.99 },
  { id: "rockaway", label: "Rockaway Beach", lat: 40.583, lng: -73.815 },
  { id: "harbor", label: "New York Harbor", lat: 40.64, lng: -74.045 },
  { id: "battery-park", label: "Battery Park", lat: 40.7033, lng: -74.017 },
  { id: "central-park", label: "Central Park", lat: 40.7829, lng: -73.9654 },
  { id: "greenpoint", label: "Greenpoint", lat: 40.7304, lng: -73.951 },
  { id: "bushwick", label: "Bushwick", lat: 40.6944, lng: -73.9213 },
  { id: "446-kent", label: "446 Kent (South Williamsburg)", lat: 40.7095, lng: -73.967 },
  { id: "300-powers", label: "300 Powers St", lat: 40.7137, lng: -73.943 },
];

const worldSpots: Spot[] = [
  { id: "nyc", label: "New York City", lat: 40.7128, lng: -74.006 },
  { id: "miami", label: "Miami", lat: 25.7617, lng: -80.1918 },
  { id: "georgia", label: "Georgia", lat: 32.0809, lng: -81.0912 },
  { id: "puerto-rico", label: "Puerto Rico", lat: 18.4655, lng: -66.1057 },
  { id: "usvi", label: "US Virgin Islands", lat: 18.3381, lng: -64.8941 },
  { id: "bvi", label: "British Virgin Islands", lat: 18.4286, lng: -64.6185 },
  { id: "tulum", label: "Tulum", lat: 20.2114, lng: -87.4654 },
  { id: "cdmx", label: "Mexico City", lat: 19.4326, lng: -99.1332 },
  { id: "boulder", label: "Boulder", lat: 40.015, lng: -105.2705 },
  { id: "vegas", label: "Las Vegas", lat: 36.1699, lng: -115.1398 },
  { id: "grand-canyon", label: "Grand Canyon", lat: 36.0544, lng: -112.1401 },
  { id: "zion", label: "Zion", lat: 37.2982, lng: -113.0263 },
  { id: "la", label: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { id: "sf", label: "San Francisco", lat: 37.7749, lng: -122.4194 },
  { id: "london", label: "London", lat: 51.5074, lng: -0.1278 },
  { id: "paris", label: "Paris", lat: 48.8566, lng: 2.3522 },
  { id: "st-tropez", label: "Saint-Tropez", lat: 43.2677, lng: 6.6407 },
  { id: "tuscany", label: "Tuscany", lat: 43.7696, lng: 11.2558 },
  { id: "corsica", label: "Corsica", lat: 42.0396, lng: 9.0129 },
  { id: "sardinia", label: "Sardinia", lat: 40.1209, lng: 9.0129 },
  { id: "ibiza", label: "Ibiza", lat: 38.9067, lng: 1.4206 },
  { id: "maine", label: "Maine", lat: 44.3235, lng: -69.7653 },
  { id: "vermont", label: "Vermont", lat: 44.0, lng: -72.7 },
  { id: "woodstock", label: "Woodstock, NY", lat: 42.0409, lng: -74.1182 },
  { id: "quogue", label: "Quogue, Long Island", lat: 40.8093, lng: -72.6089 },
  { id: "madrid", label: "Madrid", lat: 40.4168, lng: -3.7038 },
  { id: "brittany", label: "Brittany", lat: 48.2020, lng: -2.9326 },
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
        img="/img/hillside-blanket.jpg"
        alt="Sprawled on a blanket over a green valley"
      />

      <section className="section-tint" style={{ paddingBottom: 64 }}>
        <div className="wrap">
          <div className="section-head reveal" style={{ marginBottom: 32 }}>
            <p className="kicker">The territory</p>
            <h2>Have rig, will travel.</h2>
          </div>
          <div className="reveal">
            <FriendersMaps nycSpots={nycSpots} worldSpots={worldSpots} />
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
                <Link className="section-foot-link" href={`/productions/${prod.slug}`}>
                  The full story
                </Link>
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
