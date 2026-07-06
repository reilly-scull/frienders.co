import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import { pricingRows } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Starting prices for Frienders Collective: event production from $5,000, resident DJs from $1,000, sound systems from $400/day, catering from $45/head, party photography from $450/hr, and Party911 same-day rescue from $1,500.",
};

export default function PricingPage() {
  return (
    <>
      <section style={{ paddingTop: 160 }}>
        <div className="wrap">
          <div className="section-head reveal">
            <p className="kicker">Pricing</p>
            <h2>
              Real numbers.
              <br />
              <span className="accent">No mystery meat.</span>
            </h2>
            <p className="lede">
              Starting prices, so you can plan before we talk. Every job is
              quoted to its scope; minimums and premium dates apply. If your
              budget and your ambition disagree, tell us both and we will
              broker the peace.
            </p>
          </div>

          <table className="price-table reveal">
            <thead>
              <tr>
                <th>Service</th>
                <th>Covers</th>
                <th>From</th>
                <th>The fine print</th>
              </tr>
            </thead>
            <tbody>
              {pricingRows.map((r) => (
                <tr key={r.slug}>
                  <td className="svc-name">
                    <Link href={`/services/${r.slug}`}>{r.service}</Link>
                  </td>
                  <td>{r.label}</td>
                  <td className="from">{r.from}</td>
                  <td className="note">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="form-note reveal" style={{ marginTop: 26, maxWidth: 640 }}>
            Group trips, multi-day productions, and things that defy category
            are quoted individually. Our own parties are private events too:
            somebody hires us, and the night follows. It could be you.
          </p>
        </div>
      </section>

      <CTABand
        variant="disco"
        title="Get a real quote."
        body="Send the date, the headcount, and the budget range. A producer replies within one business day with numbers you can hold us to."
        cta="Start the conversation"
      />
    </>
  );
}
