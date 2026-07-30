import { useEffect, useRef } from "react";

/**
 * Wireframe icosahedron that tracks the cursor.
 *
 * Canvas 2D rather than a WebGL library: the whole thing is a dozen vertices
 * and thirty edges, which is not worth shipping three.js for.
 */

const PHI = (1 + Math.sqrt(5)) / 2;

const VERTICES: [number, number, number][] = [
  [0, 1, PHI], [0, -1, PHI], [0, 1, -PHI], [0, -1, -PHI],
  [1, PHI, 0], [-1, PHI, 0], [1, -PHI, 0], [-1, -PHI, 0],
  [PHI, 0, 1], [-PHI, 0, 1], [PHI, 0, -1], [-PHI, 0, -1],
];

// On an icosahedron of edge length 2, adjacent vertices are exactly 2 apart.
const EDGES: [number, number][] = (() => {
  const out: [number, number][] = [];
  for (let i = 0; i < VERTICES.length; i++) {
    for (let j = i + 1; j < VERTICES.length; j++) {
      const [ax, ay, az] = VERTICES[i];
      const [bx, by, bz] = VERTICES[j];
      const d = Math.hypot(ax - bx, ay - by, az - bz);
      if (Math.abs(d - 2) < 0.001) out.push([i, j]);
    }
  }
  return out;
})();

/** Reads an HSL triplet CSS variable (e.g. "210 85% 48%") into a css color string. */
const readVar = (name: string, fallback: string) => {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v ? `hsl(${v})` : fallback;
};

const HeroObject = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let brand1 = readVar("--brand-1", "hsl(210 85% 48%)");
    let brand2 = readVar("--brand-2", "hsl(265 80% 56%)");

    // Re-read palette when the theme class flips so the object follows light/dark.
    const themeObserver = new MutationObserver(() => {
      brand1 = readVar("--brand-1", "hsl(210 85% 48%)");
      brand2 = readVar("--brand-2", "hsl(265 80% 56%)");
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Cursor drives a target rotation; actual rotation eases toward it.
    let targetX = 0;
    let targetY = 0;
    let rotX = 0;
    let rotY = 0;

    const onPointer = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      targetY = nx * 0.85;
      targetX = ny * 0.6;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    let spin = 0;
    let raf = 0;

    const project = (v: [number, number, number], scale: number) => {
      const [x, y, z] = v;
      // Y rotation
      const cy = Math.cos(rotY + spin);
      const sy = Math.sin(rotY + spin);
      let px = x * cy - z * sy;
      let pz = x * sy + z * cy;
      // X rotation
      const cx = Math.cos(rotX);
      const sx = Math.sin(rotX);
      const py = y * cx - pz * sx;
      pz = y * sx + pz * cx;

      const depth = 6;
      const persp = depth / (depth + pz);
      return {
        x: width / 2 + px * scale * persp,
        y: height / 2 + py * scale * persp,
        // 0 = far, 1 = near. Drives opacity and dot size.
        d: (pz + PHI) / (2 * PHI),
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      rotX += (targetX - rotX) * 0.05;
      rotY += (targetY - rotY) * 0.05;
      if (!reduceMotion) spin += 0.0022;

      const scale = Math.min(width, height) * 0.22;
      const pts = VERTICES.map((v) => project(v, scale));

      for (const [a, b] of EDGES) {
        const p = pts[a];
        const q = pts[b];
        const near = (p.d + q.d) / 2;
        const grad = ctx.createLinearGradient(p.x, p.y, q.x, q.y);
        grad.addColorStop(0, brand1);
        grad.addColorStop(1, brand2);
        ctx.globalAlpha = 0.10 + near * 0.40;
        ctx.strokeStyle = grad;
        ctx.lineWidth = 0.6 + near * 1.1;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.stroke();
      }

      for (const p of pts) {
        ctx.globalAlpha = 0.25 + p.d * 0.65;
        ctx.fillStyle = brand2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.3 + p.d * 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full pointer-events-none"
    />
  );
};

export default HeroObject;
