import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Frienders Collective is a private event production and experiences company in New York City, founded in 2018 by friends from tech, finance, music, nightlife, and entertainment. No one here is new. Everyone is a pro.",
  openGraph: { images: ["/img/street-crew.jpg"] },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="The story"
        title={
          <>
            No one here is new.
            <br />
            <span className="accent">Everyone is a pro.</span>
          </>
        }
        img="/img/street-crew.jpg"
        alt="The crew posing in front of a mural in Brooklyn"
      />

      <section>
        <div className="wrap story">
          <div className="prose reveal">
            <p>
              <b>Frienders Collective</b> is a private event production and
              experiences company in New York City, founded in 2018,
              specializing in groups under 150 with high standards for
              production value. We produce our own parties in NYC, across the
              US, and internationally, and we hire out the same machine for
              private events: venues, sound, lighting, resident DJs, catering,
              staff, and an in-house travel desk.
            </p>
            <p>
              It started with a group of friends spanning tech, finance, music,
              nightlife, and entertainment who kept ending up in charge of
              everyone else&apos;s fun. The sound system. The boat. The
              bartender who never showed. Somebody had to handle it, and it
              kept being us. Eventually we admitted it was a company.
            </p>
            <p>
              Our roots run through the Burning Man scene of professional
              partygoers: people who build a city in a desert, throw the best
              week of the year, and leave no trace. That culture is our
              operating system. Radical self-reliance means our own generators,
              our own rigs, our own contingency plans. Communal effort means
              the CEO works the door when the door needs working. And
              &quot;leave no trace&quot; means the venue looks like nothing
              happened. You will know better.
            </p>
            <p>
              We are dedicated to having a good time the way professionals are
              dedicated to anything: with preparation, redundancy, and total
              commitment to the bit.
            </p>
            <Link className="section-foot-link" href="/team">
              Meet the team
            </Link>
          </div>
          <div className="story-photos reveal">
            <Image
              src="/img/acro-sunset.jpg"
              alt="Acro yoga at sunset on a hilltop"
              width={1500}
              height={1125}
              sizes="(max-width: 860px) 50vw, 25vw"
            />
            <Image
              src="/img/sash-crew.jpg"
              alt="Crew in matching sashes on a rooftop"
              width={1125}
              height={1500}
              sizes="(max-width: 860px) 50vw, 25vw"
            />
          </div>
        </div>
      </section>

      <section className="section-tint">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="kicker">How we work</p>
            <h2>Three rules. Zero exceptions.</h2>
          </div>
          <div className="feature-grid">
            <div className="feature reveal">
              <h3>One text thread</h3>
              <p>
                One crew, one budget, one point of contact. Every event gets a
                dedicated producer, and a producer replies within one business
                day. You will never be forwarded.
              </p>
            </div>
            <div className="feature reveal">
              <h3>Production value is respect</h3>
              <p>
                Good sound, good light, and good timing are how you tell your
                guests you meant it. We would rather do fewer events at full
                quality than more events at almost.
              </p>
            </div>
            <div className="feature reveal">
              <h3>Leave no trace</h3>
              <p>
                We strike what we build, we return what we borrow, and the
                morning after is our job too. Recovery services are a
                department here, not a joke. Well, both.
              </p>
            </div>
            <div className="feature reveal">
              <h3>Everyone is a pro</h3>
              <p>
                Our DJs, bartenders, chefs, and crew are working professionals
                who party the way they work: prepared. No one is learning on
                your event.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <p className="kicker">The evidence</p>
            <h2>Field documentation.</h2>
          </div>
          <div className="gallery-strip reveal">
            <Image src="/img/beach-cheer.jpg" alt="Crew cheering on a beach" width={1024} height={768} sizes="(max-width: 720px) 100vw, 33vw" />
            <Image src="/img/living-room.jpg" alt="The whole crew piled into a living room" width={1500} height={1125} sizes="(max-width: 720px) 100vw, 33vw" />
            <Image src="/img/parachute-beach.jpg" alt="Parachute games on the beach at sunset" width={1125} height={1500} sizes="(max-width: 720px) 100vw, 33vw" />
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
