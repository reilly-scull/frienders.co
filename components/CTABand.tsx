import Link from "next/link";

export default function CTABand({
  title = "Your party called. We picked up.",
  body = "Tell us the date, the headcount, and how ambitious we are allowed to be. A producer replies within one business day.",
  cta = "Plan something",
  href = "/contact",
}: {
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="cta-band">
      <div className="wrap reveal">
        <h2>{title}</h2>
        <p className="lede">{body}</p>
        <Link className="btn btn-solid" href={href}>
          {cta}
        </Link>
      </div>
    </section>
  );
}
