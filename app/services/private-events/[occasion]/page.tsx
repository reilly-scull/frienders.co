import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { occasions } from "@/lib/occasions";

export function generateStaticParams() {
  return occasions.map((o) => ({ occasion: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ occasion: string }>;
}): Promise<Metadata> {
  const { occasion } = await params;
  const occ = occasions.find((o) => o.slug === occasion);
  if (!occ) return {};
  return {
    title: occ.seoTitle,
    description: occ.seoDescription,
    openGraph: { title: occ.seoTitle, description: occ.seoDescription, images: [occ.heroImg] },
  };
}

export default async function OccasionPage({
  params,
}: {
  params: Promise<{ occasion: string }>;
}) {
  const { occasion } = await params;
  const occ = occasions.find((o) => o.slug === occasion);
  if (!occ) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: occ.seoTitle,
    description: occ.seoDescription,
    provider: {
      "@type": "Organization",
      name: "Frienders Collective",
      url: "https://frienders.co",
    },
    areaServed: "New York City",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero
        kicker={occ.kicker}
        title={
          <>
            <span className="accent">{occ.name}</span>
          </>
        }
        img={occ.heroImg}
        alt={occ.heroAlt}
        imgPosition={occ.heroPosition}
        tall={occ.heroTall}
      />

      <section>
        <div className="wrap prose reveal">
          {occ.intro.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <p>
            <Link className="section-foot-link" style={{ marginTop: 10 }} href="/services/private-events">
              How private events work
            </Link>{" "}
            <Link className="section-foot-link" style={{ marginTop: 10, marginLeft: 28 }} href="/pricing">
              See pricing
            </Link>
          </p>
        </div>
      </section>

      <section className="section-tint" style={{ paddingTop: 64 }}>
        <div className="wrap">
          <div className="feature-grid">
            {occ.features.map((f) => (
              <div className="feature reveal" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {occ.gallery && (
        <section>
          <div className="wrap">
            <div className="gallery-strip reveal" style={{ marginTop: 0 }}>
              {occ.gallery.map((g) => (
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

      <CTABand
        title={occ.ctaTitle}
        body="Date, headcount, ambition level. A producer replies within one business day with a plan, not a pitch."
        cta="Start the production"
      />
    </>
  );
}
