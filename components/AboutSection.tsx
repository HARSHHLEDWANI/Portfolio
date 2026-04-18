'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TIMELINE = [
  {
    title: 'B.Tech — Computer Science Engineering',
    sub: 'Symbiosis Institute of Technology, Pune',
    date: '2023 — 2027 (Expected)',
    active: true,
  },
  {
    title: 'Class XII — CBSE',
    sub: 'Greenway Modern Sr. Sec. School, New Delhi',
    date: '2023',
    active: false,
  },
  {
    title: 'Class X — CBSE',
    sub: 'Greenway Modern Sr. Sec. School, New Delhi',
    date: '2021',
    active: false,
  },
];

function TimelineEntry({
  entry,
  index,
  inView,
}: {
  entry: (typeof TIMELINE)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
      style={{ display: 'flex', gap: 16, marginBottom: 28 }}
    >
      {/* Dot + line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div
          style={{
            width: entry.active ? 10 : 8,
            height: entry.active ? 10 : 8,
            borderRadius: '50%',
            background: entry.active ? 'var(--neon-cyan)' : 'var(--border-dim)',
            border: entry.active ? '2px solid var(--neon-cyan)' : '1px solid var(--border-dim)',
            flexShrink: 0,
            marginTop: 4,
          }}
        />
        {index < TIMELINE.length - 1 && (
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: 48 } : {}}
            transition={{ duration: 0.4, delay: 0.55 + index * 0.15 }}
            style={{ width: 1, background: 'rgba(255,255,255,0.1)', marginTop: 6 }}
          />
        )}
      </div>

      {/* Content */}
      <div style={{ paddingBottom: 4 }}>
        <p
          style={{
            fontFamily: 'var(--font-syne), sans-serif',
            fontSize: entry.active ? 15 : 14,
            fontWeight: 600,
            color: 'var(--text-primary)',
            margin: '0 0 4px',
          }}
        >
          {entry.title}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: 13,
            color: 'var(--text-secondary)',
            margin: '0 0 4px',
          }}
        >
          {entry.sub}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: 11,
            color: 'var(--text-dim)',
            margin: 0,
          }}
        >
          {entry.date}
        </p>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      className="section-padding"
      style={{ background: 'var(--bg-primary)' }}
      ref={ref}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }} className="section-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 64 }}
        >
          <p
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 11,
              color: 'var(--text-dim)',
              letterSpacing: '0.1em',
              marginBottom: 12,
            }}
          >
            04 / ABOUT
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontSize: 48,
              fontWeight: 700,
              color: 'var(--text-primary)',
              margin: 0,
              lineHeight: 1.1,
            }}
            className="section-heading"
          >
            Who I Am
          </h2>
        </motion.div>

        {/* Two columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '45fr 55fr', gap: 80 }} className="about-grid">
          {/* LEFT — Identity card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
          >
            {/* HL Monogram */}
            <div
              style={{
                width: 200,
                height: 200,
                border: '2px solid rgba(255,215,0,0.3)',
                background: 'linear-gradient(135deg, rgba(255,215,0,0.05), rgba(0,207,255,0.05))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
                flexShrink: 0,
              }}
            >
              {/* Replace with <Image> when photo is available */}
              <span
                style={{
                  fontFamily: 'var(--font-syne), sans-serif',
                  fontSize: 96,
                  fontWeight: 800,
                  color: 'var(--court-line)',
                  lineHeight: 1,
                }}
              >
                HL
              </span>
            </div>

            {/* Identity tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['🏀 Basketball Mindset', '♟ Strategic Thinker', '🌙 Late Night Builder'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: 12,
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border-dim)',
                    padding: '4px 12px',
                    borderRadius: 20,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Bio + Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: 16,
                color: 'var(--text-primary)',
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              I&apos;m a Computer Science undergraduate at Symbiosis Institute of Technology, Pune — building
              systems across the full stack, from ML pipelines to production web platforms. I care about both
              the correctness and the craft.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: 16,
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: 48,
              }}
            >
              My work spans fraud detection systems, NGO infrastructure, F1 analytics, and adaptive learning
              platforms. I approach every problem like a chess match — every move calculated, every system
              designed to scale.
            </p>

            {/* Education Timeline */}
            <p
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: 10,
                color: 'var(--text-dim)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              Education
            </p>
            {TIMELINE.map((entry, i) => (
              <TimelineEntry key={i} entry={entry} index={i} inView={inView} />
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .section-inner { padding: 0 24px !important; }
          .section-heading { font-size: 32px !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
