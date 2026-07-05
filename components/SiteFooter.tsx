import Link from "next/link";
import { services } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer>
      <div className="foot-grid">
        <div className="foot-brand">
          <div className="wordmark">
            FRIENDERS<span>.</span>COLLECTIVE
          </div>
          <p>
            A private event production and experiences company in New York
            City. Founded 2018. Groups under 150, production value without
            ceiling.
          </p>
        </div>
        <div className="foot-col">
          <h4>Services</h4>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>
              {s.name}
            </Link>
          ))}
        </div>
        <div className="foot-col">
          <h4>Company</h4>
          <Link href="/about">About</Link>
          <Link href="/team">Team</Link>
          <Link href="/trips">The Trips</Link>
          <Link href="/contact">Book Us</Link>
        </div>
        <div className="foot-col">
          <h4>Contact</h4>
          <a href="mailto:hello@frienders.co">hello@frienders.co</a>
          <p className="foot-note">
            A producer replies within one business day. In a jam today? See{" "}
            <Link href="/services/party911">Party911</Link>.
          </p>
        </div>
      </div>
      <div className="foot-bar">
        <div>&copy; 2026 Frienders Collective. Est. 2018.</div>
        <div className="tag">&quot;Help. We&apos;ve fallen and must turn up.&quot;</div>
      </div>
    </footer>
  );
}
