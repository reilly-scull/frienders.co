"use client";

// Canvas mirror-ball fill for the disco CTA, gold edition.
//
// The inner canvas renders the equator band of a rotating gold mirror ball:
// facet columns are projected with x = R*sin(longitude), so tiles are square
// at the center of the button and compress toward the ends exactly like a
// real ball's limbs. Each facet keeps a stable pseudo-random brightness as
// it travels, gets a subtle beveled gradient across its face, and blooms
// with soft overexposure glow when it flashes past the light angle.
//
// A second, larger canvas sits behind the label but outside the pill's
// clip, and occasionally throws thin light rays outward from the glint
// zone, like a real ball scattering beams. Everything runs only on hover.

import { useEffect, useRef } from "react";

const ROWS = 3;
const OMEGA = 0.34; // rad/s rotation speed
const GLINT_ANGLE = -0.35; // fixed light direction (radians from center)
const HALF_PI = Math.PI / 2;
const RAY_PAD = 56; // how far rays may extend past the button, px

// Deterministic hash -> [0, 1); stable per facet index so each mirror keeps
// its identity while traversing the ball.
const hash = (n: number) => {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

type Ray = {
  x: number; // origin x in button coords
  y: number;
  angle: number;
  len: number;
  width: number;
  born: number;
  life: number;
};

export default function DiscoFill() {
  const ballRef = useRef<HTMLCanvasElement>(null);
  const raysRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ball = ballRef.current;
    const raysCv = raysRef.current;
    if (!ball || !raysCv) return;
    const btn = ball.parentElement?.parentElement as HTMLElement;
    const ctx = ball.getContext("2d");
    const rtx = raysCv.getContext("2d");
    if (!ctx || !rtx || !btn) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let phi = 0;
    let last = 0;
    let rays: Ray[] = [];
    let nextSpawn = 0;

    const drawBall = (now: number) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      const w = btn.offsetWidth;
      const h = btn.offsetHeight;
      if (w === 0 || h === 0) return;
      if (ball.width !== Math.round(w * dpr)) {
        ball.width = Math.round(w * dpr);
        ball.height = Math.round(h * dpr);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Grout between mirrors: warm near-black.
      ctx.fillStyle = "#171004";
      ctx.fillRect(0, 0, w, h);

      const R = w / 2;
      const cx = w / 2;
      const rowH = h / ROWS;
      const delta = rowH / R; // angular tile width -> square tiles at center

      const iMin = Math.floor((phi - HALF_PI) / delta) - 1;
      const iMax = Math.ceil((phi + HALF_PI) / delta) + 1;

      type Bloom = { x: number; y: number; a: number };
      const blooms: Bloom[] = [];

      for (let i = iMin; i <= iMax; i++) {
        const lam0 = Math.max(i * delta - phi, -HALF_PI);
        const lam1 = Math.min(i * delta - phi + delta, HALF_PI);
        if (lam1 <= lam0) continue;
        const x0 = cx + R * Math.sin(lam0);
        const x1 = cx + R * Math.sin(lam1);
        if (x1 - x0 < 0.6) continue; // sub-pixel slivers at the limbs
        const mid = (lam0 + lam1) / 2;
        const light = Math.pow(Math.max(Math.cos(mid), 0), 0.8);

        // Specular: how close this facet is to the light angle right now.
        const d = mid - GLINT_ANGLE;
        const spec = Math.exp(-(d * d) / (2 * 0.13 * 0.13));

        for (let r = 0; r < ROWS; r++) {
          const base = 0.3 + 0.5 * hash(i * 7.13 + r * 3.71);
          const hot = hash(i * 13.77 + r * 5.23) > 0.88 ? 0.35 : 0;
          const flash = spec * (0.4 + 0.6 * hash(i * 3.31 + r * 9.17));
          const lum = Math.min(base * light + hot * light + flash, 1);

          // Gold: saturation collapses toward white as a facet overexposes.
          const sat = Math.max(70 - flash * 55 - (lum > 0.85 ? 25 : 0), 12);
          const l0 = Math.round(lum * 88);
          const y0 = r * rowH;

          // Beveled facet: a diagonal gradient across the mirror face.
          const g = ctx.createLinearGradient(x0, y0, x1, y0 + rowH);
          g.addColorStop(0, `hsl(41, ${sat}%, ${Math.min(l0 + 10, 97)}%)`);
          g.addColorStop(0.55, `hsl(41, ${sat}%, ${l0}%)`);
          g.addColorStop(1, `hsl(38, ${Math.min(sat + 8, 80)}%, ${Math.max(l0 - 12, 4)}%)`);
          ctx.fillStyle = g;
          ctx.fillRect(x0 + 0.5, y0 + 0.5, x1 - x0 - 1, rowH - 1);

          // Overexposed facets bloom past their edges.
          if (lum > 0.8) {
            blooms.push({ x: (x0 + x1) / 2, y: y0 + rowH / 2, a: (lum - 0.8) * 1.6 });
          }
        }
      }

      // Bloom pass: soft warm glow bleeding over neighboring facets.
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (const b of blooms) {
        const rad = rowH * 1.9;
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, rad);
        g.addColorStop(0, `rgba(255, 236, 190, ${Math.min(b.a * 0.5, 0.5)})`);
        g.addColorStop(0.4, `rgba(255, 214, 140, ${Math.min(b.a * 0.2, 0.2)})`);
        g.addColorStop(1, "rgba(255, 200, 110, 0)");
        ctx.fillStyle = g;
        ctx.fillRect(b.x - rad, b.y - rad, rad * 2, rad * 2);
      }
      ctx.restore();

      // Soft vertical shading over the band: lit above, shaded below.
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "rgba(255,244,214,0.12)");
      grad.addColorStop(0.35, "rgba(255,244,214,0)");
      grad.addColorStop(0.8, "rgba(40,20,0,0.12)");
      grad.addColorStop(1, "rgba(30,14,0,0.28)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Occasionally throw a light ray out of the glint zone.
      if (!reduced && now >= nextSpawn) {
        nextSpawn = now + 650 + Math.random() * 1400;
        const count = Math.random() < 0.35 ? 2 : 1;
        for (let k = 0; k < count; k++) {
          const gx = cx + R * Math.sin(GLINT_ANGLE) + (Math.random() - 0.5) * R * 0.5;
          const up = Math.random() < 0.5;
          const spread = (Math.random() - 0.5) * 1.4; // lean left/right
          rays.push({
            x: Math.max(Math.min(gx, w - 4), 4),
            y: Math.random() * h,
            angle: (up ? -HALF_PI : HALF_PI) + spread,
            len: 26 + Math.random() * (RAY_PAD + 20),
            width: 1 + Math.random() * 1.6,
            born: now,
            life: 480 + Math.random() * 520,
          });
        }
      }
    };

    const drawRays = (now: number) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      const w = btn.offsetWidth + RAY_PAD * 2;
      const h = btn.offsetHeight + RAY_PAD * 2;
      if (raysCv.width !== Math.round(w * dpr)) {
        raysCv.width = Math.round(w * dpr);
        raysCv.height = Math.round(h * dpr);
      }
      rtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rtx.clearRect(0, 0, w, h);
      rays = rays.filter((ray) => now - ray.born < ray.life);
      rtx.save();
      rtx.globalCompositeOperation = "lighter";
      rtx.lineCap = "round";
      for (const ray of rays) {
        const p = (now - ray.born) / ray.life;
        const a = Math.sin(p * Math.PI) * 0.75;
        const ox = ray.x + RAY_PAD;
        const oy = ray.y + RAY_PAD;
        const tx = ox + Math.cos(ray.angle) * ray.len * (0.6 + 0.4 * p);
        const ty = oy + Math.sin(ray.angle) * ray.len * (0.6 + 0.4 * p);
        const g = rtx.createLinearGradient(ox, oy, tx, ty);
        g.addColorStop(0, `rgba(255, 246, 220, ${a})`);
        g.addColorStop(0.35, `rgba(255, 224, 150, ${a * 0.55})`);
        g.addColorStop(1, "rgba(255, 210, 120, 0)");
        rtx.strokeStyle = g;
        rtx.lineWidth = ray.width;
        rtx.beginPath();
        rtx.moveTo(ox, oy);
        rtx.lineTo(tx, ty);
        rtx.stroke();
        // Tiny cross-arm flare at the origin.
        const ca = ray.angle + HALF_PI;
        const cl = ray.len * 0.16;
        rtx.strokeStyle = `rgba(255, 246, 220, ${a * 0.5})`;
        rtx.lineWidth = Math.max(ray.width * 0.6, 0.8);
        rtx.beginPath();
        rtx.moveTo(ox - Math.cos(ca) * cl, oy - Math.sin(ca) * cl);
        rtx.lineTo(ox + Math.cos(ca) * cl, oy + Math.sin(ca) * cl);
        rtx.stroke();
      }
      rtx.restore();
    };

    const tick = (t: number) => {
      if (last) phi += ((t - last) / 1000) * OMEGA;
      last = t;
      drawBall(t);
      drawRays(t);
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (reduced) {
        drawBall(performance.now()); // static frame, no motion
        return;
      }
      if (!raf) {
        last = 0;
        nextSpawn = performance.now() + 250;
        raf = requestAnimationFrame(tick);
      }
    };
    const stop = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
      rays = [];
    };

    drawBall(performance.now()); // initial frame so the fade-in reveals a finished ball
    btn.addEventListener("mouseenter", start);
    btn.addEventListener("mouseleave", stop);
    btn.addEventListener("focus", start);
    btn.addEventListener("blur", stop);
    return () => {
      stop();
      btn.removeEventListener("mouseenter", start);
      btn.removeEventListener("mouseleave", stop);
      btn.removeEventListener("focus", start);
      btn.removeEventListener("blur", stop);
    };
  }, []);

  return (
    <>
      <span className="disco-rays" aria-hidden="true" style={{ inset: -RAY_PAD }}>
        <canvas ref={raysRef} />
      </span>
      <span className="disco-fill" aria-hidden="true">
        <canvas ref={ballRef} />
      </span>
    </>
  );
}
