import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { productions } from "@/lib/content";

export function generateStaticParams() {
  return productions.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const prod = productions.find((p) => p.slug === slug);
  if (!prod) return {};
  return {
    title: `${prod.name} | Productions`,
    description: prod.body.slice(0, 155),
    openGraph: { images: [prod.img.src] },
  };
}

export default async function ProductionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const prod = productions.find((p) => p.slug === slug);
  if (!prod) notFound();

  const cs = prod.caseStudy;

  return (
    <>
      <PageHero
        kicker="Case study"
        title={prod.name}
        sub={prod.stats}
        img={prod.img.src}
        alt={prod.img.alt}
      />

      <section>
        <div className="wrap prose reveal">
          <p>{prod.body}</p>
        </div>
      </section>

      {/* Case-study scaffold: sections render real content when it exists in
          lib/content.ts (caseStudy field), and an honest placeholder when it
          does not. Fill in brief/build/night/numbers per production. */}
      <section className="section-tint" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="feature-grid">
            <div className="feature reveal">
              <h3>The brief</h3>
              <p>{cs?.brief ?? "What the host asked for, in their words. Full case study in progress."}</p>
            </div>
            <div className="feature reveal">
              <h3>The build</h3>
              <p>{cs?.build ?? "Crew, gear, and the days of prep nobody saw. Full case study in progress."}</p>
            </div>
            <div className="feature reveal">
              <h3>The night</h3>
              <p>{cs?.night ?? "How it actually went. Ask us about this one; we love telling it."}</p>
            </div>
            <div className="feature reveal">
              <h3>By the numbers</h3>
              {cs?.numbers ? (
                <ul className="cs-numbers">
                  {cs.numbers.map((n) => (
                    <li key={n.label}>
                      <b>{n.value}</b> {n.label}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Headcount, watts, candles, sunrises. Being tallied.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {prod.extras && (
        <section>
          <div className="wrap">
            <div className="gallery-strip reveal" style={{ marginTop: 0 }}>
              {prod.extras.map((x) => (
                <Image
                  key={x.src}
                  src={x.src}
                  alt={x.alt}
                  width={x.width}
                  height={x.height}
                  sizes="(max-width: 720px) 100vw, 33vw"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ paddingTop: prod.extras ? 0 : undefined, paddingBottom: 64 }}>
        <div className="wrap reveal">
          <Link className="section-foot-link" href="/productions">
            All productions
          </Link>
        </div>
      </section>

      <CTABand
        title="Want one like it?"
        body="Every production adapts. Tell us the occasion and the headcount, and we will draw up your version."
        cta="Start the conversation"
      />
    </>
  );
}
