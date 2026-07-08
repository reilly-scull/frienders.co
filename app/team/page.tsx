import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { leadership, directors, production, djs, type Person } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The leadership, directors, producers, and resident DJs behind Frienders Collective, the NYC private event production and experiences company.",
  openGraph: { images: ["/img/the-board.jpg"] },
};

const tints = ["#ffb347", "#ff5c47", "#67c6e8", "#b78bff"];

function PersonCard({ person, i }: { person: Person; i: number }) {
  const initials = person.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div className="person reveal">
      {person.photo ? (
        <Image
          className="headshot"
          src={person.photo}
          alt={`${person.name}, ${person.role}`}
          width={400}
          height={400}
        />
      ) : (
        <div className="mono" style={{ background: tints[i % tints.length] }}>
          {initials}
        </div>
      )}
      <h3>{person.name}</h3>
      <p>{person.role}</p>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        compact
        lowText
        imgPosition="center 28%"
        kicker="The team"
        title={
          <>
            Run like a company.
            <br />
            <span className="accent">Staffed like a crew.</span>
          </>
        }
        sub="Leadership, directors, and the producers who run the room on the day. Titles are real. So is the org chart."
        img="/img/the-board.jpg"
        alt="The board in gold jackets around the boardroom desk"
      />

      <section>
        <div className="wrap">
          <div className="team-grid reveal">
            {leadership.map((p, i) => (
              <PersonCard key={p.name} person={p} i={i} />
            ))}
          </div>
          <div className="team-grid reveal" style={{ marginTop: 16 }}>
            {directors.map((p, i) => (
              <PersonCard key={p.name} person={p} i={i + 1} />
            ))}
          </div>
          <div className="team-grid reveal" style={{ marginTop: 16 }}>
            {production.map((p, i) => (
              <PersonCard key={p.name} person={p} i={i + 2} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-tint">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="kicker">The residents</p>
            <h2>The DJ roster.</h2>
            <p className="lede">Six residents, bookable for your event.</p>
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
          <Link className="section-foot-link reveal" href="/services/djs">
            How DJ bookings work
          </Link>
        </div>
      </section>

      <CTABand
        title="Want this crew at your event?"
        body="Every booking comes with the people on this page behind it. Tell us what you're planning."
      />
    </>
  );
}
