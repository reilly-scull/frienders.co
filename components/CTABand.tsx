import Link from "next/link";

// Four-point star, drawn with smooth concave edges. Rendered as inline SVG so
// the sparkles stay crisp at any resolution and can carry a gradient + glow.
const STAR =
  "M12 0C13.1 6.9 17.1 10.9 24 12c-6.9 1.1-10.9 5.1-12 12-1.1-6.9-5.1-10.9-12-12C6.9 10.9 10.9 6.9 12 0Z";

function Sparkle({ pos, size, delay }: { pos: string; size: number; delay: number }) {
  return (
    <svg
      className={`sparkle ${pos}`}
      style={{ width: size, height: size, animationDelay: `${delay}ms` }}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sparkle-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff8e7" />
          <stop offset="55%" stopColor="#ffd28a" />
          <stop offset="100%" stopColor="#ffb347" />
        </radialGradient>
      </defs>
      <path d={STAR} fill="url(#sparkle-grad)" />
    </svg>
  );
}

export default function CTABand({
  kicker,
  title = "Let's put a date on it.",
  body = "Tell us the date, the headcount, and how ambitious we are allowed to be. A producer replies within one business day.",
  cta = "Plan something",
  href = "/contact",
}: {
  kicker?: string;
  title?: React.ReactNode;
  body?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="cta-band">
      <div className="wrap reveal">
        {kicker && <p className="kicker">{kicker}</p>}
        <h2>{title}</h2>
        <p className="lede">{body}</p>
        <Link className="btn btn-solid btn-sparkle" href={href}>
          {cta}
          <Sparkle pos="s1" size={18} delay={0} />
          <Sparkle pos="s2" size={12} delay={550} />
          <Sparkle pos="s3" size={22} delay={250} />
          <Sparkle pos="s4" size={13} delay={850} />
          <Sparkle pos="s5" size={9} delay={1150} />
        </Link>
      </div>
    </section>
  );
}
