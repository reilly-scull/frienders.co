import Image from "next/image";

export default function PageHero({
  kicker,
  title,
  sub,
  img,
  alt,
  compact,
  tall,
  lowText,
  imgPosition,
}: {
  kicker: string;
  title: React.ReactNode;
  sub?: string;
  img: string;
  alt: string;
  compact?: boolean;
  tall?: boolean;
  lowText?: boolean;
  imgPosition?: string;
}) {
  return (
    <div className={`page-hero ${compact ? "compact" : ""} ${tall ? "tall" : ""} ${lowText ? "low-text" : ""}`}>
      <div className="page-hero-bg">
        <Image
          src={img}
          alt={alt}
          fill
          priority
          sizes="100vw"
          style={imgPosition ? { objectPosition: imgPosition } : undefined}
        />
      </div>
      <div className="page-hero-inner">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        {sub && <p className="hero-sub">{sub}</p>}
      </div>
    </div>
  );
}
