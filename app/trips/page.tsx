import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { trips } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Trips",
  description:
    "Field notes from Frienders Collective trips: the Hamptons, upstate NY, South Carolina, Mexico, sailing in the Caribbean and Mediterranean, Vermont, the desert, and more. 6 to 20 people, full production.",
};

export default function TripsPage() {
  return (
    <>
      <PageHero
        kicker="Field notes"
        title={
          <>
            The trips<span className="accent">.</span>
          </>
        }
        sub="A running record of professionally good times. Some were our parties, some were client events. All of them ended too late. Every one of these is repeatable, including for you."
        img="/img/hillside-blanket.jpg"
        alt="Lounging on a blanket over a green valley"
      />

      <section style={{ paddingTop: 40 }}>
        <div className="wrap">
          {trips.map((trip) => (
            <article className="trip" key={trip.slug} id={trip.slug}>
              <div className="trip-media reveal">
                <Image
                  src={trip.img.src}
                  alt={trip.img.alt}
                  width={trip.img.width}
                  height={trip.img.height}
                  sizes="(max-width: 820px) 100vw, 50vw"
                />
              </div>
              <div className="reveal">
                <h3>{trip.name}</h3>
                <p className="stats">{trip.stats}</p>
                <p className="body">{trip.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABand
        title="Your chapter goes here."
        body="Every trip on this page started as a text that said 'what if we...'. Send us yours. The travel desk handles the rest."
        cta="Start a trip"
      />
    </>
  );
}
