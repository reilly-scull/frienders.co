import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { services, djs } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return {};
  return {
    title: svc.seoTitle,
    description: svc.seoDescription,
    openGraph: { title: svc.seoTitle, description: svc.seoDescription, images: [svc.heroImg] },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) notFound();

  const isAlert = svc.theme === "alert";
  const words = svc.name.split(" ");
  const last = words.pop();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.seoTitle,
    description: svc.seoDescription,
    provider: {
      "@type": "Organization",
      name: "Frienders Collective",
      url: "https://frienders.co",
    },
    areaServed: "New York City",
  };
  const faqSchema = svc.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: svc.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <div className={isAlert ? "alert-theme" : ""}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <PageHero
        kicker={svc.kicker}
        title={
          <>
            {words.join(" ")} {words.length > 0 && <br />}
            <span className="accent">{last}</span>
          </>
        }
        img={svc.heroImg}
        alt={svc.heroAlt}
      />

      <section>
        <div className="wrap prose reveal">
          {svc.intro.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </section>

      {svc.features && (
        <section className="section-tint" style={{ paddingTop: 64 }}>
          <div className="wrap">
            <div className="feature-grid">
              {svc.features.map((f) => (
                <div className="feature reveal" key={f.title}>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {svc.specs && (
        <section style={{ paddingTop: svc.features ? 96 : 24 }}>
          <div className="wrap">
            <div className="spec-grid">
              {svc.specs.map((s) => (
                <div className="spec reveal" key={s.heading}>
                  <h3>{s.heading}</h3>
                  <ul>
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {svc.slug === "djs" && (
        <section className="section-tint">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="kicker">The roster</p>
              <h2>The residents.</h2>
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
          </div>
        </section>
      )}

      {svc.gallery && (
        <section>
          <div className="wrap">
            <div className="gallery-strip reveal" style={{ marginTop: 0 }}>
              {svc.gallery.map((g) => (
                <Image
                  key={g.src}
                  src={g.src}
                  alt={g.alt}
                  width={g.width}
                  height={g.height}
                  sizes="(max-width: 720px) 100vw, 33vw"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {svc.faq && (
        <section className="section-tint">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="kicker">Straight answers</p>
              <h2>Questions people ask at 3pm on the day of.</h2>
            </div>
            <div className="faq reveal">
              {svc.faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {isAlert ? (
        <section className="cta-band">
          <div className="wrap reveal">
            <p className="kicker" style={{ color: "var(--coral)" }}>
              In a jam right now?
            </p>
            <h2>Sound the alarm.</h2>
            <p className="lede">
              Email{" "}
              <a href="mailto:911@frienders.co" style={{ color: "var(--coral)" }}>
                911@frienders.co
              </a>{" "}
              with &quot;PARTY911&quot; in the subject, your location, and your
              timeline. We triage fastest before 6pm.
            </p>
            <Link className="btn btn-alert" href="/contact">
              Get help today
            </Link>
          </div>
        </section>
      ) : (
        <CTABand
          title={`Add ${svc.name.toLowerCase()} to your event.`}
          body="Tell us the date, the headcount, and what you have in mind. A producer replies within one business day."
        />
      )}
    </div>
  );
}
