"use client";

import { useEffect, useRef } from "react";

export default function BubbleCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices
    if ("ontouchstart" in window) return;

    const outer = outerRef.current;
    const dot = dotRef.current;
    if (!outer || !dot) return;

    let tx = -999;
    let ty = -999;
    let cx = -999;
    let cy = -999;
    let animId = 0;
    let visible = false;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!visible) {
        cx = tx;
        cy = ty;
        visible = true;
        outer.style.opacity = "1";
        dot.style.opacity = "1";
      }
    };

    const onLeave = () => {
      visible = false;
      outer.style.opacity = "0";
      dot.style.opacity = "0";
    };

    const animate = () => {
      if (visible) {
        cx = lerp(cx, tx, 0.09);
        cy = lerp(cy, ty, 0.09);
        outer.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
        dot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      {/* Outer bubble — slow, glowing orb */}
      <div
        ref={outerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "192px",
          height: "192px",
          borderRadius: "50%",
          border: "1px solid rgba(79,142,247,0.22)",
          background:
            "radial-gradient(circle, rgba(79,142,247,0.035) 0%, rgba(124,58,237,0.015) 50%, transparent 75%)",
          boxShadow:
            "0 0 32px rgba(79,142,247,0.07), inset 0 0 24px rgba(124,58,237,0.05)",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: 0,
          transition: "opacity 0.4s",
          willChange: "transform",
        }}
      />
      {/* Inner dot — precise cursor position */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "rgba(79,142,247,0.9)",
          boxShadow: "0 0 8px rgba(79,142,247,0.7)",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: 0,
          transition: "opacity 0.4s",
          willChange: "transform",
        }}
      />
    </>
  );
}
