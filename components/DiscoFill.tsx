"use client";

// Canvas mirror-ball fill for the disco CTA. Renders the equator band of a
// rotating sphere: facet columns are projected with x = R*sin(longitude), so
// tiles are square at the center of the button and compress toward the ends
// exactly like a real ball's limbs. Each facet keeps a stable pseudo-random
// brightness as it travels, lighting falls off with cos(longitude), and
// facets flash specular white as they sweep past a fixed light angle.
// Animates only while the parent button is hovered.

import { useEffect, useRef } from "react";

const ROWS = 3;
const OMEGA = 0.38; // rad/s rotation speed
const GLINT_ANGLE = -0.35; // fixed light direction (radians from center)
const HALF_PI = Math.PI / 2;

// Deterministic hash -> [0, 1); stable per facet index so each mirror keeps
// its identity while traversing the ball.
const hash = (n: number) => {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

export default function DiscoFill() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const wrap = canvas.parentElement as HTMLElement; // .disco-fill span
    const btn = wrap.parentElement as HTMLElement; // the button link
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let phi = 0;
    let last = 0;

    const draw = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      const w = btn.offsetWidth;
      const h = btn.offsetHeight;
      if (w === 0 || h === 0) return;
      if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Grout / gaps between mirrors.
      ctx.fillStyle = "#101218";
      ctx.fillRect(0, 0, w, h);

      const R = w / 2;
      const cx = w / 2;
      const rowH = h / ROWS;
      const delta = rowH / R; // angular tile width -> square tiles at center

      const iMin = Math.floor((phi - HALF_PI) / delta) - 1;
      const iMax = Math.ceil((phi + HALF_PI) / delta) + 1;

      for (let i = iMin; i <= iMax; i++) {
        const lam0 = Math.max(i * delta - phi, -HALF_PI);
        const lam1 = Math.min(i * delta - phi + delta, HALF_PI);
        if (lam1 <= lam0) continue;
        const x0 = cx + R * Math.sin(lam0);
        const x1 = cx + R * Math.sin(lam1);
        if (x1 - x0 < 0.6) continue; // sub-pixel slivers at the limbs
        const mid = (lam0 + lam1) / 2;
        const light = Math.pow(Math.max(Math.cos(mid), 0), 0.75);

        // Specular: how close this facet is to the light angle right now.
        const d = mid - GLINT_ANGLE;
        const spec = Math.exp(-(d * d) / (2 * 0.13 * 0.13));

        for (let r = 0; r < ROWS; r++) {
          const base = 0.36 + 0.5 * hash(i * 7.13 + r * 3.71);
          // A few facets catch stray room light and run hot.
          const hot = hash(i * 13.77 + r * 5.23) > 0.88 ? 0.35 : 0;
          const flash = spec * (0.45 + 0.55 * hash(i * 3.31 + r * 9.17));
          const lum = Math.min(base * light + hot * light + flash, 1);
          // Near-monochrome silver; barely-there cool cast on some facets.
          const sat = hash(i * 5.7 + r * 1.9) < 0.2 ? 9 : 4;
          ctx.fillStyle = `hsl(222, ${sat}%, ${Math.round(lum * 93)}%)`;
          ctx.fillRect(x0 + 0.5, r * rowH + 0.5, x1 - x0 - 1, rowH - 1);
        }
      }

      // Soft vertical shading over the band: lit above, shaded below.
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "rgba(255,255,255,0.10)");
      grad.addColorStop(0.35, "rgba(255,255,255,0)");
      grad.addColorStop(0.8, "rgba(0,0,0,0.10)");
      grad.addColorStop(1, "rgba(0,0,0,0.22)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    };

    const tick = (t: number) => {
      if (last) phi += ((t - last) / 1000) * OMEGA;
      last = t;
      draw();
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (reduced) {
        draw(); // static frame, no motion
        return;
      }
      if (!raf) {
        last = 0;
        raf = requestAnimationFrame(tick);
      }
    };
    const stop = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    draw(); // initial frame so the fade-in reveals a finished ball
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
    <span className="disco-fill" aria-hidden="true">
      <canvas ref={canvasRef} />
    </span>
  );
}
