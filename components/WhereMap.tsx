"use client";

// Adapted from the WorldMap in rsystems-nyc/rsystems.nyc (d3-geo Mercator SVG
// with staggered pin drops), restyled for the Frienders palette and refit to
// North America, where the pins actually are.

import { useEffect, useMemo, useRef, useState, type CSSProperties, type RefObject } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, Geometry } from "geojson";
import countriesTopo from "world-atlas/countries-110m.json";

export type Spot = { id: string; label: string; lat: number; lng: number };

const WIDTH = 800;
const HEIGHT = 500;
const PAD = 8;
const LAND = "rgba(244, 239, 230, 0.07)";
const BORDER = "rgba(244, 239, 230, 0.22)";
const PIN = "#ffb347";
const PIN_STROKE = "#101014";

// Round to 3 decimals so server- and client-rendered transforms are
// byte-identical (avoids hydration mismatches from float ULP drift).
const round = (n: number) => Math.round(n * 1000) / 1000;

// Fit the projection to a North America window instead of the whole world.
const REGION: Feature<Geometry> = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "Polygon",
    coordinates: [[[-126, 12], [-126, 53], [-63, 53], [-63, 12], [-126, 12]]],
  },
};

const projection = geoMercator().fitExtent(
  [
    [PAD, PAD],
    [WIDTH - PAD, HEIGHT - PAD],
  ],
  REGION
);
const pathOf = geoPath(projection);

const allCountries = feature(
  countriesTopo,
  countriesTopo.objects.countries
) as unknown as { features: Feature<Geometry>[] };

const countryPaths = allCountries.features.map((country, index) => ({
  key: index,
  d: pathOf(country) ?? "",
}));

// Deterministic pseudo-random stagger, identical on server and client.
const STAGGER_WINDOW_MS = 1800;
const staggerDelay = (index: number) =>
  (Math.imul(index + 1, 2654435761) >>> 0) % STAGGER_WINDOW_MS;

function useInView<T extends Element>(): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (typeof IntersectionObserver === "undefined") {
      const id = setTimeout(() => setInView(true), 0);
      return () => clearTimeout(id);
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -20% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView]);
  return [ref, inView];
}

// Teardrop pin drawn tip-at-origin, from the rsystems map.
const PIN_PATH =
  "M 0 0 C -2.16 -4.32, -4.5 -6.24, -4.5 -9.6 A 4.5 4.5 0 1 1 4.5 -9.6 C 4.5 -6.24, 2.16 -4.32, 0 0 Z";

function Pin({ delayMs, inView, reducedMotion }: { delayMs: number; inView: boolean; reducedMotion: boolean }) {
  const style: CSSProperties = reducedMotion
    ? { opacity: inView ? 1 : 0 }
    : {
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(-14px)",
        transition:
          "transform 2.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1.4s ease-out",
        transitionDelay: `${delayMs}ms`,
        willChange: "transform, opacity",
      };
  return (
    <g style={style}>
      <path d={PIN_PATH} fill={PIN} stroke={PIN_STROKE} strokeWidth={0.5} />
      <circle cx={0} cy={-9.6} r={1.8} fill={PIN_STROKE} />
    </g>
  );
}

export default function WhereMap({ spots }: { spots: Spot[] }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const markers = useMemo(
    () =>
      spots
        .map((s) => {
          const xy = projection([s.lng, s.lat]);
          return xy ? { id: s.id, x: round(xy[0]), y: round(xy[1]) } : null;
        })
        .filter((m): m is { id: string; x: number; y: number } => m !== null),
    [spots]
  );

  return (
    <div ref={ref} className="where-map">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        style={{ width: "100%", height: "auto", display: "block" }}
        role="img"
        aria-label="Map of North America showing places Frienders has produced events"
      >
        <defs>
          <linearGradient id="land-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity={0.35} />
            <stop offset="0.25" stopColor="#fff" stopOpacity={1} />
            <stop offset="0.85" stopColor="#fff" stopOpacity={1} />
            <stop offset="1" stopColor="#fff" stopOpacity={0.3} />
          </linearGradient>
          <mask id="land-fade-mask">
            <rect width={WIDTH} height={HEIGHT} fill="url(#land-fade)" />
          </mask>
        </defs>
        <g mask="url(#land-fade-mask)">
          {countryPaths.map((c) => (
            <path key={c.key} d={c.d} fill={LAND} stroke={BORDER} strokeWidth={0.6} />
          ))}
        </g>
        {markers.map((m, i) => (
          <g key={m.id} transform={`translate(${m.x} ${m.y})`}>
            <Pin delayMs={staggerDelay(i)} inView={inView} reducedMotion={reducedMotion} />
          </g>
        ))}
      </svg>
    </div>
  );
}
