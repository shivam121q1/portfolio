"use client";

import React, { useEffect, useRef } from "react";

/**
 * CursorBubbles
 * A lightweight canvas-based cursor "bubbling" / particle trail effect.
 *
 * Drop <CursorBubbles /> anywhere (e.g., in app/layout.tsx) to enable globally.
 *
 * Props let you customize color, size, and density.
 */
export default function CursorBubbles({
  color = "#ffffff", // default: Tailwind's blue-500 @ ~80% opacity
  maxParticles = 120,
  size = { min: 1, max: 10 },
  gravity = -0.02, // negative = float upward like bubbles
  friction = 0.985, // velocity damping each frame
  blur = 8, // canvas shadowBlur for glow
  spawnEvery = 1, // spawn a particle every N mousemove events
  disabledOnMobile = true,
}: {
  color?: string;
  maxParticles?: number;
  size?: { min: number; max: number };
  gravity?: number;
  friction?: number;
  blur?: number;
  spawnEvery?: number;
  disabledOnMobile?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const spawnTick = useRef(0);
  const mouseRef = useRef({ x: -9999, y: -9999, vx: 0, vy: 0 });
  const dprRef = useRef(1);

  useEffect(() => {
    const isTouch = matchMedia("(hover: none), (pointer: coarse)").matches;
    if (disabledOnMobile && isTouch) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      dprRef.current = dpr;
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
    };

    setSize();
    window.addEventListener("resize", setSize);

    let lastX = mouseRef.current.x;
    let lastY = mouseRef.current.y;
    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      mouseRef.current.vx = x - lastX;
      mouseRef.current.vy = y - lastY;
      mouseRef.current.x = x;
      mouseRef.current.y = y;
      lastX = x;
      lastY = y;

      spawnTick.current++;
      if (spawnTick.current % spawnEvery === 0) spawnParticle(x, y);
    };

    const onLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    const loop = () => {
      draw(ctx);
      rafRef.current = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [blur, color, friction, gravity, maxParticles, size.max, size.min, spawnEvery, disabledOnMobile]);

  function rand(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  type Particle = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number; // radius
    life: number; // 0..1
    decay: number; // how fast it fades
  };

  function spawnParticle(x: number, y: number) {
    const parts = particlesRef.current;
    if (parts.length > maxParticles) parts.shift();

    const speedJitter = 0.3;
    const p: Particle = {
      x,
      y,
      vx: mouseRef.current.vx * rand(0.05, 0.12) + rand(-speedJitter, speedJitter),
      vy: mouseRef.current.vy * rand(0.05, 0.12) + rand(-speedJitter, speedJitter),
      r: rand(size.min, size.max),
      life: 1,
      decay: rand(0.008, 0.02),
    };
    parts.push(p);
  }

  function draw(ctx: CanvasRenderingContext2D) {
    const w = ctx.canvas.width / dprRef.current;
    const h = ctx.canvas.height / dprRef.current;

    // Fade the canvas slightly each frame for a soft trail
    ctx.clearRect(0, 0, w, h);

    ctx.save();
    ctx.shadowBlur = blur;
    ctx.shadowColor = color;

    const parts = particlesRef.current;

    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i];
      p.vx *= friction;
      p.vy = p.vy * friction + gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;

      if (p.life <= 0) {
        parts.splice(i, 1);
        continue;
      }

      ctx.globalAlpha = Math.max(0, p.life);
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
    ctx.globalAlpha = 1;
  }

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[100]"
      aria-hidden
    />
  );
}
