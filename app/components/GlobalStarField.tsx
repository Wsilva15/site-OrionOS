"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  tx: number; // resting/target x (viewport fraction)
  ty: number;
  radius: number;
  alpha: number;
  color: string;
  isStar: boolean;    // Orion star
  starRadius: number;
}

// Orion star positions as viewport fractions (right portion, away from left-aligned text)
const ORION = [
  { name: "Meissa",     fx: 0.63, fy: 0.16 },
  { name: "Betelgeuse", fx: 0.74, fy: 0.30 },
  { name: "Bellatrix",  fx: 0.54, fy: 0.31 },
  { name: "Mintaka",    fx: 0.58, fy: 0.50 },
  { name: "Alnilam",    fx: 0.63, fy: 0.52 },
  { name: "Alnitak",    fx: 0.68, fy: 0.50 },
  { name: "Rigel",      fx: 0.51, fy: 0.70 },
  { name: "Saiph",      fx: 0.73, fy: 0.71 },
];

const LINES = [
  [0, 1], [0, 2],           // head to shoulders
  [1, 4], [2, 3],           // shoulders to belt
  [3, 4], [4, 5],           // belt
  [3, 6], [5, 7],           // belt to feet
];

const COLORS = ["#4f8ef7", "#7c3aed", "#6b9fff", "#a78bfa", "#93c5fd"];
const AMBIENT_COUNT = 300;
const REPEL_RADIUS = 90;

export default function GlobalStarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let mouse = { x: -9999, y: -9999 };
    let animId = 0;
    let startTime = performance.now();
    // convergence: 0 = fully scattered, 1 = fully formed
    let convergence = 0;
    let lineAlpha = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      const w = canvas.width;
      const h = canvas.height;
      particles = [];

      // Orion stars first (indices 0..7)
      for (const s of ORION) {
        const tx = s.fx * w;
        const ty = s.fy * h;
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          tx,
          ty,
          radius: 1,
          alpha: 0.5 + Math.random() * 0.3,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          isStar: true,
          starRadius: 2.5 + Math.random() * 1.5,
        });
      }

      // Ambient stars
      for (let i = 0; i < AMBIENT_COUNT; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.07,
          vy: (Math.random() - 0.5) * 0.07,
          tx: x,
          ty: y,
          radius: 0.4 + Math.random() * 1.0,
          alpha: 0.12 + Math.random() * 0.38,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          isStar: false,
          starRadius: 1,
        });
      }

      if (reduced) {
        // Skip animation — snap Orion to position
        for (let i = 0; i < ORION.length; i++) {
          particles[i].x = particles[i].tx;
          particles[i].y = particles[i].ty;
        }
        convergence = 1;
        lineAlpha = 0.28;
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const draw = (now: number) => {
      const w = canvas.width;
      const h = canvas.height;
      const elapsed = now - startTime;

      // Update convergence (starts after 1.8s, takes ~1.5s to complete)
      if (!reduced && elapsed > 1800) {
        convergence = Math.min(1, (elapsed - 1800) / 1500);
        lineAlpha = Math.min(0.28, convergence * 0.28);
      }

      // Update target positions for Orion stars (resize-responsive)
      for (let i = 0; i < ORION.length; i++) {
        particles[i].tx = ORION[i].fx * w;
        particles[i].ty = ORION[i].fy * h;
      }

      ctx.clearRect(0, 0, w, h);

      // Draw constellation lines
      if (lineAlpha > 0) {
        ctx.save();
        ctx.strokeStyle = `rgba(79,142,247,${lineAlpha})`;
        ctx.lineWidth = 0.7;
        for (const [ai, bi] of LINES) {
          const pa = particles[ai];
          const pb = particles[bi];
          ctx.beginPath();
          ctx.moveTo(pa.x, pa.y);
          ctx.lineTo(pb.x, pb.y);
          ctx.stroke();
        }
        ctx.restore();
      }

      // Draw particles
      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const inRange = dist < REPEL_RADIUS && dist > 0;

        // Mouse repulsion
        if (inRange) {
          const force = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * 1.6;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // For Orion stars: spring toward constellation target (weighted by convergence)
        // For ambient stars: spring toward their resting position
        const springStrength = p.isStar ? 0.022 * convergence : 0.016;
        p.vx += (p.tx - p.x) * springStrength;
        p.vy += (p.ty - p.y) * springStrength;

        // Damping + micro drift
        p.vx = p.vx * 0.84 + (Math.random() - 0.5) * (p.isStar ? 0.002 : 0.005);
        p.vy = p.vy * 0.84 + (Math.random() - 0.5) * (p.isStar ? 0.002 : 0.005);

        p.x = Math.max(0, Math.min(w, p.x + p.vx));
        p.y = Math.max(0, Math.min(h, p.y + p.vy));

        const glow = inRange ? (REPEL_RADIUS - dist) / REPEL_RADIUS : 0;
        const r = p.isStar
          ? lerp(p.radius, p.starRadius, convergence) + glow * 0.8
          : p.radius + glow * 0.4;

        ctx.save();
        ctx.globalAlpha = Math.min(1, p.alpha + glow * 0.45);
        if (glow > 0 || (p.isStar && convergence > 0.5)) {
          ctx.shadowColor = p.color;
          ctx.shadowBlur = p.isStar
            ? lerp(0, 14, convergence) + glow * 6
            : glow * 8;
        }
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.3, r), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    animId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 3,
        pointerEvents: "none",
        mixBlendMode: "screen",
      }}
    />
  );
}
