'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];
const HEADLINE = ['BUILDING', 'SYSTEMS', 'THAT SCALE.'];

function useCounter(target, inView) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = 16;
    const inc = target / (1200 / step);
    const t = setInterval(() => {
      start += inc;
      if (start >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(t);
  }, [inView, target]);
  return count;
}

function StatBlock({ value, label, inView }) {
  const num = useCounter(parseInt(value), inView);
  return (
    <div className="flex flex-col" style={{ borderLeft: '1px solid #2A2A2A', paddingLeft: '20px' }}>
      <span className="font-display text-[2.8rem] leading-none" style={{ color: '#F0EDE8', letterSpacing: '0.02em' }}>
        {num}+
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] mt-1" style={{ color: '#555550' }}>
        {label}
      </span>
    </div>
  );
}

export function Hero() {
  const [blobFast, setBlobFast] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
      { threshold: 0.5 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#0A0A0A' }}
      onMouseEnter={() => setBlobFast(true)}
      onMouseLeave={() => setBlobFast(false)}
    >
      {/* Subtle line grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 40% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 40% 50%, black 20%, transparent 100%)',
        }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-0 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-8">

            {/* Tiny label */}
            <motion.p
              className="font-mono text-[11px] tracking-[0.18em] uppercase"
              style={{ color: '#555550' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            >
              HARSH LEDWANI · CS @ SIT PUNE · 2026
            </motion.p>

            {/* Headline */}
            <h1 className="font-display leading-none" style={{ letterSpacing: '0.03em' }}>
              {HEADLINE.map((line, i) => (
                <motion.span
                  key={line}
                  className="block"
                  style={{
                    fontSize: 'clamp(4.5rem, 13vw, 11rem)',
                    color: i === 2 ? '#FF3D00' : '#F0EDE8',
                  }}
                  initial={{ opacity: 0, y: 80, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.7, delay: 0.25 + i * 0.12, ease: EASE }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            {/* Status pill */}
            <motion.div
              className="flex items-center gap-2.5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5, ease: EASE }}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{
                  background: '#FF3D00',
                  boxShadow: '0 0 8px rgba(255,61,0,0.7)',
                  animation: 'glow-pulse 2s ease-in-out infinite',
                }}
              />
              <span className="font-mono text-[11px] tracking-[0.16em] uppercase" style={{ color: '#888882' }}>
                OPEN TO INTERNSHIPS
              </span>
            </motion.div>

            {/* Subtext */}
            <motion.p
              className="font-sans text-base md:text-lg leading-relaxed max-w-[440px]"
              style={{ color: '#888882' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6, ease: EASE }}
            >
              AI · Blockchain · Full-Stack — from fraud detection to real-time analytics.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.88, duration: 0.5, ease: EASE }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-mono text-[12px] tracking-[0.14em] uppercase font-bold transition-all duration-200"
                style={{
                  border: '2px solid #FF3D00',
                  color: '#FF3D00',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FF3D00';
                  e.currentTarget.style.color = '#0A0A0A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#FF3D00';
                }}
              >
                VIEW WORK →
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 font-mono text-[12px] tracking-[0.14em] uppercase font-bold transition-all duration-200"
                style={{ background: '#C8FF00', color: '#0A0A0A' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#DEFF40'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#C8FF00'; }}
              >
                RESUME ↓
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              className="flex gap-8 pt-4"
              style={{ borderTop: '1px solid #2A2A2A', paddingTop: '24px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.6, ease: EASE }}
            >
              <StatBlock value={3}  label="Years Building"   inView={statsVisible} />
              <StatBlock value={10} label="Projects Shipped" inView={statsVisible} />
              <StatBlock value={20} label="Technologies"     inView={statsVisible} />
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — Morphing Blob ── */}
          <div className="relative hidden lg:flex items-center justify-center h-[600px]">
            {/* HL Ghost monogram */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
              aria-hidden
            >
              <span
                className="font-display"
                style={{ fontSize: '22rem', color: '#F0EDE8', opacity: 0.055, lineHeight: 1, letterSpacing: '-0.02em' }}
              >
                HL
              </span>
            </div>

            {/* Blob */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1.2, ease: EASE }}
              style={{ position: 'relative', zIndex: 1 }}
            >
              <div
                className={blobFast ? 'blob-fast' : 'blob'}
                style={{
                  width: 520,
                  height: 520,
                  background: 'conic-gradient(from 0deg, #C8FF00 0%, #FF3D00 40%, #FF6B00 60%, #C8FF00 100%)',
                  mixBlendMode: 'screen',
                  position: 'relative',
                  right: '-60px',
                }}
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] tracking-widest uppercase" style={{ color: '#555550' }}>
          SCROLL
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.3, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 origin-top"
          style={{ background: 'linear-gradient(to bottom, #FF3D00, transparent)' }}
        />
      </motion.div>
    </section>
  );
}
