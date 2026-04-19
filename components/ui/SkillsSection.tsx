'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SKILLS, LEVEL_FILL, LEVEL_COLOR, Level } from '@/lib/skills';

function SkillBar({ name, level, index }: { name: string; level: Level; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 13, color: '#F0EDE8' }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: LEVEL_COLOR[level], letterSpacing: '0.06em' }}>{level}</span>
      </div>
      <div style={{ width: '100%', height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: inView ? LEVEL_FILL[level] : 0 }}
          transition={{ duration: 1.2, delay: index * 0.05, ease: 'easeOut' }}
          style={{ height: '100%', background: LEVEL_COLOR[level], borderRadius: 2, transformOrigin: 'left' }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: '120px 0', background: '#0D1117' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 80px' }} className="skills-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: '#3D4557', letterSpacing: '0.1em', marginBottom: 12 }}>
            03 / SKILLS
          </p>
          <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: 52, fontWeight: 700, color: '#F0EDE8', margin: '0 0 12px', lineHeight: 1.1 }} className="skills-heading">
            Tools of the Trade
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 16, color: '#8892A4' }}>
            Mission control — systems I operate.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }} className="skills-grid">
          {/* LEFT — XP Bars */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.15 }}
          >
            {SKILLS.map((cat) => (
              <div key={cat.cat} style={{ marginBottom: 32 }}>
                <p style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: 10, color: '#3D4557',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  marginBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: 8,
                }}>
                  {cat.cat}
                </p>
                {cat.items.map((skill, idx) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} index={idx} />
                ))}
              </div>
            ))}
          </motion.div>

          {/* RIGHT — GitHub Activity */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.25 }}
          >
            <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: '#3D4557', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
              COMMIT ACTIVITY
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github-readme-stats.vercel.app/api?username=HARSHHLEDWANI&show_icons=true&theme=dark&bg_color=0D1117&hide_border=true&icon_color=00FF88&title_color=FFD700&text_color=8892A4"
              alt="GitHub stats"
              style={{ width: '100%', borderRadius: 8, border: '1px solid rgba(255,255,255,0.07)', marginBottom: 12, display: 'block' }}
              loading="lazy"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=HARSHHLEDWANI&theme=dark&background=0D1117&hide_border=true&ring=00FF88&fire=FFB347&currStreakLabel=00CFFF&dates=8892A4"
              alt="GitHub streak"
              style={{ width: '100%', borderRadius: 8, border: '1px solid rgba(255,255,255,0.07)', marginBottom: 24, display: 'block' }}
              loading="lazy"
            />

            {/* Currently building pill */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,179,71,0.06)',
              border: '1px solid rgba(255,179,71,0.3)',
              borderRadius: 20, padding: '8px 16px',
            }}>
              <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#FFB347', display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 12, color: '#FFB347', letterSpacing: '0.04em' }}>
                Neuro-Adaptive AI Learning System
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-inner { padding: 0 24px !important; }
          .skills-heading { font-size: 32px !important; }
          .skills-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
