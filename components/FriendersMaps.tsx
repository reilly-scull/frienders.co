"use client";

// Two-map system adapted from rsystems-nyc/rsystems.nyc (d3-geo Mercator SVGs
// with staggered pin drops): a square NYC map with borough shorelines from NYC
// Open Data, and a wide US-through-Europe map. Restyled to the Frienders palette.

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type RefObject,
} from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Geometry, MultiPoint } from "geojson";
import countriesTopo from "world-atlas/countries-110m.json";

export type Spot = { id: string; label: string; lat: number; lng: number };

const LAND = "rgba(244, 239, 230, 0.07)";
const LAND_SOLID = "rgba(244, 239, 230, 0.1)";
const BORDER = "rgba(244, 239, 230, 0.22)";
const PIN = "#ffb347";
const PIN_STROKE = "#101014";

const round = (n: number) => Math.round(n * 1000) / 1000;

// ---------- shared animation helpers ----------
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
      { rootMargin: "0px 0px -15% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView]);
  return [ref, inView];
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return reduced;
}

// Teardrop pin drawn tip-at-origin, from the rsystems map.
const PIN_PATH =
  "M 0 0 C -2.16 -4.32, -4.5 -6.24, -4.5 -9.6 A 4.5 4.5 0 1 1 4.5 -9.6 C 4.5 -6.24, 2.16 -4.32, 0 0 Z";

function Pin({
  delayMs,
  inView,
  reducedMotion,
  scale = 1,
}: {
  delayMs: number;
  inView: boolean;
  reducedMotion: boolean;
  scale?: number;
}) {
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
      <g transform={scale === 1 ? undefined : `scale(${scale})`}>
        <path d={PIN_PATH} fill={PIN} stroke={PIN_STROKE} strokeWidth={0.5} />
        <circle cx={0} cy={-9.6} r={1.8} fill={PIN_STROKE} />
      </g>
    </g>
  );
}

// ---------- world (US through Europe) ----------
const W_WIDTH = 800;
const W_HEIGHT = 280;
const W_PAD = 8;

// Fit to the window that actually contains the pins: US west coast through
// the Mediterranean, cropped to the latitudes in play. Corner points rather
// than a polygon: polygon edges are great arcs in d3-geo, and the top edge of
// a 140-degree-wide box bulges far north of its corner latitude, inflating
// the fit. Two opposite corners bound the same Mercator box with no edges.
const WORLD_REGION: MultiPoint = {
  type: "MultiPoint",
  coordinates: [
    [-126, 15],
    [14, 53],
  ],
};

const worldProjection = geoMercator().fitExtent(
  [
    [W_PAD, W_PAD],
    [W_WIDTH - W_PAD, W_HEIGHT - W_PAD],
  ],
  WORLD_REGION
);
const worldPath = geoPath(worldProjection);

const allCountries = feature(
  countriesTopo,
  countriesTopo.objects.countries
) as unknown as { features: Feature<Geometry>[] };

const countryPaths = allCountries.features.map((country, index) => ({
  key: index,
  d: worldPath(country) ?? "",
}));

function WorldMap({ spots }: { spots: Spot[] }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const reducedMotion = useReducedMotion();

  const markers = useMemo(
    () =>
      spots
        .map((s) => {
          const xy = worldProjection([s.lng, s.lat]);
          return xy ? { id: s.id, x: round(xy[0]), y: round(xy[1]) } : null;
        })
        .filter((m): m is { id: string; x: number; y: number } => m !== null),
    [spots]
  );

  return (
    <div ref={ref} className="where-map">
      <svg
        viewBox={`0 0 ${W_WIDTH} ${W_HEIGHT}`}
        style={{ width: "100%", height: "auto", display: "block" }}
        role="img"
        aria-label="Map from the United States to Europe showing places Frienders has produced events"
      >
        <defs>
          <linearGradient id="w-fade-x" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity={0.25} />
            <stop offset="0.06" stopColor="#fff" stopOpacity={1} />
            <stop offset="0.94" stopColor="#fff" stopOpacity={1} />
            <stop offset="1" stopColor="#fff" stopOpacity={0.25} />
          </linearGradient>
          <mask id="w-fade-x-mask">
            <rect width={W_WIDTH} height={W_HEIGHT} fill="url(#w-fade-x)" />
          </mask>
        </defs>
        <g mask="url(#w-fade-x-mask)">
          {countryPaths.map((c) => (
            <path key={c.key} d={c.d} fill={LAND_SOLID} />
          ))}
        </g>
        {markers.map((m, i) => (
          <g key={m.id} transform={`translate(${m.x} ${m.y})`}>
            <Pin delayMs={staggerDelay(i)} inView={inView} reducedMotion={reducedMotion} scale={0.9} />
          </g>
        ))}
      </svg>
    </div>
  );
}

// ---------- NYC ----------
const N_WIDTH = 480;
const N_HEIGHT = 480;
const N_PAD = 20;

// Borough boundaries (shoreline-clipped) from NYC Open Data, simplified
// server-side so the payload is ~110KB. Fetched on mount, cached per session.
const NYC_BOROUGHS_URL =
  "https://data.cityofnewyork.us/resource/gthc-hcne.geojson?$select=simplify(the_geom,0.0005)%20as%20the_geom,boroname";

// Frame extended past the rsystems Manhattan crop to reach Rockaway Beach in
// the southeast. Span ratio keeps the box roughly square in Mercator here.
const FRAME_SW: [number, number] = [-74.13, 40.53];
const FRAME_NE: [number, number] = [-73.72, 40.84];
const NYC_FRAME: MultiPoint = {
  type: "MultiPoint",
  coordinates: [FRAME_SW, FRAME_NE],
};

const nycProjection = geoMercator().fitExtent(
  [
    [N_PAD, N_PAD],
    [N_WIDTH - N_PAD, N_HEIGHT - N_PAD],
  ],
  NYC_FRAME
);
const nycPath = geoPath(nycProjection);

let boroughsCache: FeatureCollection | null = null;

function NYCMap({ spots }: { spots: Spot[] }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const reducedMotion = useReducedMotion();
  const [boroughs, setBoroughs] = useState<FeatureCollection | null>(boroughsCache);

  useEffect(() => {
    if (boroughs) return;
    let cancelled = false;
    fetch(NYC_BOROUGHS_URL)
      .then((r) => r.json())
      .then((geo: { features?: { the_geom: Geometry; boroname: string }[] } & FeatureCollection) => {
        if (cancelled) return;
        // The SoQL select returns rows with `the_geom`; normalize to features.
        const fc: FeatureCollection =
          geo.type === "FeatureCollection"
            ? geo
            : {
                type: "FeatureCollection",
                features: (geo.features ?? []).map((row, i) => ({
                  type: "Feature",
                  properties: { i },
                  geometry: row.the_geom,
                })),
              };
        boroughsCache = fc;
        setBoroughs(fc);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [boroughs]);

  const markers = useMemo(
    () =>
      spots
        .map((s) => {
          const xy = nycProjection([s.lng, s.lat]);
          return xy ? { id: s.id, x: round(xy[0]), y: round(xy[1]) } : null;
        })
        .filter((m): m is { id: string; x: number; y: number } => m !== null),
    [spots]
  );

  return (
    <div ref={ref} className="where-map">
      <svg
        viewBox={`0 0 ${N_WIDTH} ${N_HEIGHT}`}
        style={{ width: "100%", height: "auto", display: "block" }}
        role="img"
        aria-label="Map of New York City showing Frienders venues and event locations"
      >
        {boroughs?.features.map((f, i) => (
          <path
            key={i}
            d={nycPath(f as Feature<Geometry>) ?? ""}
            fill={LAND}
            stroke={BORDER}
            strokeWidth={0.8}
          />
        ))}
        {markers.map((m, i) => (
          <g key={m.id} transform={`translate(${m.x} ${m.y})`}>
            <Pin delayMs={staggerDelay(i)} inView={inView} reducedMotion={reducedMotion} scale={1.4} />
          </g>
        ))}
      </svg>
    </div>
  );
}

// ---------- combined ----------
export default function FriendersMaps({
  nycSpots,
  worldSpots,
}: {
  nycSpots: Spot[];
  worldSpots: Spot[];
}) {
  return (
    <div>
      <div className="maps-grid">
        <div>
          <p className="map-label">New York City</p>
          <NYCMap spots={nycSpots} />
        </div>
        <div>
          <p className="map-label">And everywhere the party goes</p>
          <WorldMap spots={worldSpots} />
        </div>
      </div>
    </div>
  );
}
