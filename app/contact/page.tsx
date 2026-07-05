import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Book Us",
  description:
    "Book Frienders Collective for private events, trips, DJs, equipment, catering, and staff in NYC and beyond. A producer replies within one business day. Emergencies: Party911.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        compact
        kicker="Book us"
        title={
          <>
            Your party called.
            <br />
            <span className="accent">We picked up.</span>
          </>
        }
        sub="One crew, one budget, one text thread. Tell us what you're planning and a producer replies within one business day."
        img="/img/dinner-toast.jpg"
        alt="Friends raising glasses at a long dinner table"
      />

      <section>
        <div className="wrap contact-grid">
          <div className="reveal">
            <div className="section-head" style={{ marginBottom: 28 }}>
              <p className="kicker">The inquiry</p>
              <h2>Tell us the vibe.</h2>
            </div>
            <ContactForm />
          </div>

          <div className="contact-aside reveal">
            <div className="contact-card">
              <h3>
                Email <span>direct</span>
              </h3>
              <p>
                Prefer to write it your way?{" "}
                <a className="mail" href="mailto:hello@frienders.co">
                  hello@frienders.co
                </a>
                <br />
                Include a date and a headcount and you skip a step.
              </p>
            </div>

            <div className="scheduler">
              <h3>Book a discovery call</h3>
              <p>
                Twenty minutes with a producer to size up the job. Direct
                calendar booking goes live shortly; until then, mention your
                availability in the form and we will send times by email.
              </p>
            </div>

            <div className="contact-card alert">
              <h3>
                It&apos;s happening <span>today</span>
              </h3>
              <p>
                Skip the form. Email{" "}
                <a className="mail" href="mailto:911@frienders.co">
                  911@frienders.co
                </a>{" "}
                with &quot;PARTY911&quot; in the subject, or read the{" "}
                <Link href="/services/party911">Party911 menu</Link> first.
                Within NYC we can usually have music playing within 3 to 4
                hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
