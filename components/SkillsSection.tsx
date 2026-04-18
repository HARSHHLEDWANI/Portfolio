'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { skillCategories, levelConfig, type SkillLevel } from '../lib/skills';

function SkillBar({ name, level, index }: { name: string; level: SkillLevel; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const cfg = levelConfig[level];

  return (
    <div ref={ref} style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, alignItems: 'center' }}>
        <span
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: 13,
            color: 'var(--text-primary)',
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: 11,
            color: cfg.color,
            letterSpacing: '0.06em',
          }}
        >
          {level}
        </span>
      </div>
      <div
        style={{
          width: '100%',
          height: 4,
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${cfg.fill}%` : 0 }}
          transition={{ duration: 1.2, delay: index * 0.08, ease: 'easeOut' }}
          style={{ height: '100%', background: cfg.color, borderRadius: 2 }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }} className="section-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
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
            03 / SKILLS
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontSize: 48,
              fontWeight: 700,
              color: 'var(--text-primary)',
              margin: '0 0 12px',
              lineHeight: 1.1,
            }}
            className="section-heading"
          >
            Tools of the Trade
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: 16,
              color: 'var(--text-secondary)',
            }}
          >
            Mission control — systems I operate.
          </p>
        </motion.div>

        {/* Two column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }} className="skills-grid">
          {/* LEFT — XP Bars */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {skillCategories.map((cat) => (
              <div key={cat.category} style={{ marginBottom: 32 }}>
                <p
                  style={{
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: 10,
                    color: 'var(--text-dim)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: 16,
                    borderBottom: '1px solid var(--border-dim)',
                    paddingBottom: 8,
                  }}
                >
                  {cat.category}
                </p>
                {cat.skills.map((skill, idx) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} index={idx} />
                ))}
              </div>
            ))}
          </motion.div>

          {/* RIGHT — GitHub Activity */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: 11,
                color: 'var(--text-dim)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              COMMIT ACTIVITY
            </p>

            <div
              style={{
                border: '1px solid var(--border-dim)',
                borderRadius: 8,
                overflow: 'hidden',
                marginBottom: 16,
                background: 'var(--bg-panel)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-stats.vercel.app/api?username=HARSHHLEDWANI&show_icons=true&theme=dark&bg_color=111520&hide_border=true&color=00FF88&icon_color=00CFFF&title_color=F0EDE8"
                alt="GitHub Stats"
                style={{ width: '100%', display: 'block' }}
                loading="lazy"
              />
            </div>

            <div
              style={{
                border: '1px solid var(--border-dim)',
                borderRadius: 8,
                overflow: 'hidden',
                marginBottom: 24,
                background: 'var(--bg-panel)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=HARSHHLEDWANI&theme=dark&background=111520&hide_border=true&ring=00FF88&fire=FFB347&currStreakLabel=00CFFF"
                alt="GitHub Streak"
                style={{ width: '100%', display: 'block' }}
                loading="lazy"
              />
            </div>

            {/* Currently Building pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(255,179,71,0.08)',
                border: '1px solid rgba(255,179,71,0.3)',
                borderRadius: 20,
                padding: '6px 14px',
              }}
            >
              <span
                className="pulse-dot"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'var(--neon-amber)',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: 12,
                  color: 'var(--neon-amber)',
                  letterSpacing: '0.04em',
                }}
              >
                Neuro-Adaptive AI Learning System
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .section-inner { padding: 0 24px !important; }
          .section-heading { font-size: 32px !important; }
          .skills-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
