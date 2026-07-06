import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Private event production, partner venues, equipment rentals, resident DJs, catering and staff, group travel, and Party911 emergency support. One crew, one budget, one text thread.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        compact
        kicker="What we do"
        title={
          <>
            Everything the party needs.
            <br />
            <span className="accent">Under one roof.</span>
          </>
        }
        sub="Book the whole production or just the piece you're missing. Every service is in-house. No brokers, no markups on markups."
        img="/img/skyline-dusk.jpg"
        alt="The city skyline under a dramatic dusk sky"
      />

      <section>
        <div className="wrap">
          <div className="svc-grid">
            {services.map((svc) => {
              const words = svc.name.split(" ");
              const last = words.pop();
              const isAlert = svc.theme === "alert";
              return (
                <Link
                  className={`svc reveal ${isAlert ? "alert" : ""}`}
                  href={`/services/${svc.slug}`}
                  key={svc.slug}
                >
                  <Image
                    src={svc.cardImg}
                    alt={svc.cardAlt}
                    fill
                    sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw"
                  />
                  <div className="svc-body">
                    <h3>
                      {words.length > 0 ? (
                        <>
                          <span className="plain">{words.join(" ")}</span>{" "}
                          <em>{last}</em>
                        </>
                      ) : (
                        <em>{last}</em>
                      )}
                    </h3>
                    <p>{svc.card}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand
        variant="disco"
        title="Not sure what you need?"
        body="Start with the date and the headcount. A producer will map the rest with you, within one business day."
        cta="Start the conversation"
      />
    </>
  );
}
