import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { productions } from "@/lib/content";

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
        sub="A running record of professionally good times. Some were ours, some were clients'. Our own parties are invite-only, not to keep anyone out, but because a room under 150 only works when everyone in it was meant to be there. The surest way in is to throw something with us."
        img="/img/hillside-blanket.jpg"
        alt="Lounging on a blanket over a green valley"
      />

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
