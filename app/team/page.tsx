import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { leadership, directors, support, djs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The leadership, directors, resident DJs, and support team behind Frienders Collective, the NYC private event production and experiences company.",
};

const tints = ["#ffb347", "#ff5c47", "#67c6e8", "#b78bff"];

function PersonCard({ name, role, i }: { name: string; role: string; i: number }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div className="person reveal">
      <div className="mono" style={{ background: tints[i % tints.length] }}>
        {initials}
      </div>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        compact
        kicker="The team"
        title={
          <>
            Run like a company.
            <br />
            <span className="accent">Staffed like a crew.</span>
          </>
        }
        sub="Titles are real. So is the org chart. The Chancellor of Sass reports directly to the board."
        img="/img/formal-fountain.jpg"
        alt="The team dressed up around a city fountain"
      />

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <p className="kicker">Leadership</p>
            <h2>The board.</h2>
          </div>
          <div className="team-grid">
            {leadership.map((p, i) => (
              <PersonCard key={p.name} name={p.name} role={p.role} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-tint">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="kicker">Directors</p>
            <h2>Department heads.</h2>
          </div>
          <div className="team-grid">
            {directors.map((p, i) => (
              <PersonCard key={p.name} name={p.name} role={p.role} i={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <p className="kicker">The residents</p>
            <h2>The DJ roster.</h2>
            <p className="lede">
              Six residents, bookable for your event.{" "}
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
          <Link className="section-foot-link reveal" href="/services/djs">
            How DJ bookings work
          </Link>
        </div>
      </section>

      <section className="section-tint">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="kicker">Support</p>
            <h2>The ones who actually run it.</h2>
          </div>
          <div className="team-grid">
            {support.map((p, i) => (
              <PersonCard key={p.name} name={p.name} role={p.role} i={i + 2} />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Want this crew at your event?"
        body="Every booking comes with the people on this page behind it. Tell us what you're planning."
      />
    </>
  );
}
