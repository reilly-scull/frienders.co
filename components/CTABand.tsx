import Link from "next/link";

export default function CTABand({
  title = "Let's put a date on it.",
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
        <Link className="btn btn-solid btn-sparkle" href={href}>
          {cta}
          <span className="sparkle s1" aria-hidden="true">&#10022;</span>
          <span className="sparkle s2" aria-hidden="true">&#10022;</span>
          <span className="sparkle s3" aria-hidden="true">&#10023;</span>
          <span className="sparkle s4" aria-hidden="true">&#10023;</span>
        </Link>
      </div>
    </section>
  );
}
