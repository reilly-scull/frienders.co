import Image from "next/image";

export default function PageHero({
  kicker,
  title,
  sub,
  img,
  alt,
  compact,
}: {
  kicker: string;
  title: React.ReactNode;
  sub?: string;
  img: string;
  alt: string;
  compact?: boolean;
}) {
  return (
    <div className={`page-hero ${compact ? "compact" : ""}`}>
      <div className="page-hero-bg">
        <Image src={img} alt={alt} fill priority sizes="100vw" />
      </div>
      <div className="page-hero-inner">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        {sub && <p className="hero-sub">{sub}</p>}
      </div>
    </div>
  );
}
