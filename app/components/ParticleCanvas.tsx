"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
  targetX: number;
  targetY: number;
  isStar: boolean;
  starRadius: number;
}

const COLORS = ["#4f8ef7", "#7c3aed", "#6b9fff", "#9b59f0", "#4f8ef7"];

const ORION_STARS = [
  { name: "Meissa",     nx: 0.50, ny: 0.14 },
  { name: "Betelgeuse", nx: 0.63, ny: 0.28 },
  { name: "Bellatrix",  nx: 0.39, ny: 0.30 },
  { name: "Mintaka",    nx: 0.44, ny: 0.50 },
  { name: "Alnilam",    nx: 0.50, ny: 0.52 },
  { name: "Alnitak",    nx: 0.56, ny: 0.50 },
  { name: "Rigel",      nx: 0.36, ny: 0.73 },
  { name: "Saiph",      nx: 0.60, ny: 0.75 },
];

const ORION_LINES = [
  [0, 1], [0, 2],
  [1, 4], [2, 3],
  [3, 4], [4, 5],
  [3, 6], [5, 7],
];

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    particles: [] as Particle[],
    mouse: { x: -999, y: -999 },
    phase: "scatter" as "scatter" | "constellation" | "explode",
    phaseAlpha: 0,
    lineAlpha: 0,
    globalAlpha: 1,
    animFrameId: 0,
    startTime: 0,
    scrollExplode: false,
    reducedMotion: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const s = stateRef.current;
    s.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    s.startTime = performance.now();

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      const w = canvas.width;
      const h = canvas.height;
      const count = 800;

      s.particles = Array.from({ length: count }, (_, i) => {
        const isStar = i < ORION_STARS.length;
        const star = isStar ? ORION_STARS[i] : null;
        const tx = star ? star.nx * w : Math.random() * w;
        const ty = star ? star.ny * h : Math.random() * h;

        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: isStar ? 1 : 0.5 + Math.random() * 1.5,
          alpha: 0.3 + Math.random() * 0.5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          targetX: tx,
          targetY: ty,
          isStar,
          starRadius: isStar ? 3 + Math.random() * 2 : 1,
        };
      });
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const draw = (now: number) => {
      const w = canvas.width;
      const h = canvas.height;
      const elapsed = now - s.startTime;

      // Phase transitions
      if (s.reducedMotion) {
        s.phase = "constellation";
        s.phaseAlpha = 1;
        s.lineAlpha = 0.3;
      } else if (s.scrollExplode) {
        s.phase = "explode";
      } else if (elapsed > 2000 && s.phase === "scatter") {
        s.phase = "constellation";
      }

      if (s.phase === "constellation") {
        s.phaseAlpha = Math.min(s.phaseAlpha + 0.008, 1);
        s.lineAlpha = Math.min(s.lineAlpha + 0.004, 0.3);
      }

      if (s.phase === "explode") {
        s.globalAlpha = Math.max(s.globalAlpha - 0.025, 0);
      }

      ctx.clearRect(0, 0, w, h);

      if (s.globalAlpha <= 0) {
        s.animFrameId = requestAnimationFrame(draw);
        return;
      }

      ctx.globalAlpha = s.globalAlpha;

      // Draw constellation lines
      if (s.lineAlpha > 0) {
        ctx.save();
        ctx.strokeStyle = `rgba(79,142,247,${s.lineAlpha})`;
        ctx.lineWidth = 0.8;
        for (const [ai, bi] of ORION_LINES) {
          const pa = s.particles[ai];
          const pb = s.particles[bi];
          const ax = s.phase === "constellation" ? lerp(pa.x, pa.targetX, s.phaseAlpha) : pa.x;
          const ay = s.phase === "constellation" ? lerp(pa.y, pa.targetY, s.phaseAlpha) : pa.y;
          const bx = s.phase === "constellation" ? lerp(pb.x, pb.targetX, s.phaseAlpha) : pb.x;
          const by = s.phase === "constellation" ? lerp(pb.y, pb.targetY, s.phaseAlpha) : pb.y;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.stroke();
        }
        ctx.restore();
      }

      // Draw particles
      for (const p of s.particles) {
        const mx = s.mouse.x;
        const my = s.mouse.y;

        if (s.phase === "scatter" || s.phase === "explode") {
          // Mouse repulsion
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && dist > 0) {
            const force = (120 - dist) / 120;
            p.vx += (dx / dist) * force * 0.5;
            p.vy += (dy / dist) * force * 0.5;
          }

          // Damping
          p.vx *= 0.96;
          p.vy *= 0.96;

          if (s.phase === "explode") {
            const cx = w / 2;
            const cy = h / 2;
            p.vx += (p.x - cx) * 0.003;
            p.vy += (p.y - cy) * 0.003;
          }

          p.x += p.vx;
          p.y += p.vy;

          // Wrap edges
          if (p.x < 0) p.x = w;
          if (p.x > w) p.x = 0;
          if (p.y < 0) p.y = h;
          if (p.y > h) p.y = 0;
        }

        // Draw position
        let px = p.x;
        let py = p.y;
        let r = p.radius;

        if (s.phase === "constellation") {
          px = lerp(p.x, p.targetX, s.phaseAlpha);
          py = lerp(p.y, p.targetY, s.phaseAlpha);

          // Mouse repulsion even in constellation phase
          const dx = px - mx;
          const dy = py - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100 && dist > 0) {
            const force = (100 - dist) / 100;
            px += (dx / dist) * force * 20;
            py += (dy / dist) * force * 20;
          }

          if (p.isStar) {
            r = lerp(p.radius, p.starRadius, s.phaseAlpha);
          }
        }

        ctx.save();
        if (p.isStar && s.phaseAlpha > 0.5) {
          const glow = s.phaseAlpha;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 12 * glow;
        }
        ctx.globalAlpha = s.globalAlpha * p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      s.animFrameId = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      s.mouse.x = e.clientX - rect.left;
      s.mouse.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      s.mouse.x = -999;
      s.mouse.y = -999;
    };

    const onScroll = () => {
      if (window.scrollY > 60) {
        s.scrollExplode = true;
      }
    };

    resize();
    s.animFrameId = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(s.animFrameId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
