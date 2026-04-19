'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TIMELINE = [
  {
    title: 'B.Tech — Computer Science Engineering',
    sub: 'Symbiosis Institute of Technology, Pune',
    date: '2023 — 2027 (Expected)',
    current: true,
  },
  {
    title: 'Class XII — CBSE',
    sub: 'Greenway Modern Sr. Sec. School, New Delhi',
    date: '2023',
    current: false,
  },
  {
    title: 'Class X — CBSE',
    sub: 'Greenway Modern Sr. Sec. School, New Delhi',
    date: '2021',
    current: false,
  },
];

export default function AboutSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(lineRef, { once: true, margin: '-80px' });

  return (
    <section id="about" style={{ padding: '120px 0', background: '#080B14' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 80px' }} className="about-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: '#3D4557', letterSpacing: '0.1em', marginBottom: 12 }}>
            04 / ABOUT
          </p>
          <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: 52, fontWeight: 700, color: '#F0EDE8', margin: '0', lineHeight: 1.1 }} className="about-heading">
            Who I Am
          </h2>
        </motion.div>

        {/* Two columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '40% 60%', gap: 80 }} className="about-grid">
          {/* LEFT — Monogram */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div style={{
              width: 220, height: 220,
              border: '2px solid rgba(255,215,0,0.25)',
              background: 'linear-gradient(135deg, rgba(255,215,0,0.05), rgba(0,207,255,0.05))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 24,
            }}>
              {/* Replace with <img> when photo ready */}
              <span style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: 96, fontWeight: 800, color: '#FFD700' }}>
                HL
              </span>
            </div>

            {/* Identity pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['🏀 Basketball Mindset', '♟ Strategic Thinker', '🌙 Late Night Builder'].map(pill => (
                <span key={pill} style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: 12, color: '#8892A4',
                  border: '1px solid rgba(255,255,255,0.07)',
                  padding: '5px 14px', borderRadius: 20,
                }}>{pill}</span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Bio + Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.25 }}
          >
            <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 16, color: '#F0EDE8', lineHeight: 1.75, marginBottom: 16 }}>
              I&apos;m a Computer Science undergraduate at Symbiosis Institute of Technology, Pune — building systems across the full stack, from ML pipelines to production web platforms. I care about both the correctness and the craft.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 15, color: '#8892A4', lineHeight: 1.7, marginBottom: 48 }}>
              My work spans fraud detection systems, NGO infrastructure, F1 analytics, and adaptive learning platforms. I approach every problem like a chess match — every move calculated, every system designed to scale.
            </p>

            {/* Timeline */}
            <div ref={lineRef} style={{ position: 'relative', paddingLeft: 24 }}>
              {/* Animated vertical line */}
              <motion.div
                animate={{ height: inView ? '100%' : '0%' }}
                transition={{ duration: 1.2 }}
                style={{
                  position: 'absolute', left: 0, top: 0,
                  width: 1, background: '#FFD700', opacity: 0.4,
                }}
              />

              {TIMELINE.map((entry, i) => (
                <div key={i} style={{ position: 'relative', paddingLeft: 20, marginBottom: 32 }}>
                  {/* Dot */}
                  <div style={{
                    position: 'absolute', left: -24, top: 6,
                    width: 10, height: 10, borderRadius: '50%',
                    background: entry.current ? '#00CFFF' : 'transparent',
                    border: entry.current ? 'none' : '1px solid rgba(255,255,255,0.07)',
                  }} />
                  <p style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: entry.current ? 15 : 14, color: '#F0EDE8', margin: '0 0 4px' }}>
                    {entry.title}
                  </p>
                  <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 13, color: '#8892A4', margin: '0 0 4px' }}>
                    {entry.sub}
                  </p>
                  <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: '#3D4557', margin: 0 }}>
                    {entry.date}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-inner { padding: 0 24px !important; }
          .about-heading { font-size: 32px !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
