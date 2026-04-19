'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SKILLS, LEVEL_FILL, LEVEL_COLOR, Level } from '@/lib/skills';
import { SkillCardSkeleton, GitHubSkeleton } from '@/components/ui/Skeleton';

const CATEGORY_ACCENT: Record<string, string> = {
  'Languages':      '#FFD700',
  'Frontend':       '#00CFFF',
  'Backend':        '#00FF88',
  'Databases':      '#FF8C00',
  'ML & AI':        '#FF3D3D',
  'Cloud & Security': '#7B61FF',
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function StatCard({ cat, items }: { cat: string; items: { name: string; level: Level }[] }) {
  const accent = CATEGORY_ACCENT[cat] ?? '#FFD700';
  return (
    <motion.div
      variants={cardVariants}
      style={{
        background: '#0D1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderTop: `3px solid ${accent}`,
        borderRadius: 0,
        padding: '20px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Category label top-right */}
      <div style={{
        position: 'absolute', top: 16, right: 16,
        fontFamily: 'var(--font-jetbrains), monospace', fontSize: 9,
        color: accent, letterSpacing: '0.1em', opacity: 0.6,
      }}>
        {cat.toUpperCase()}
      </div>

      {/* Stats rows */}
      {items.map((skill, index) => (
        <div
          key={skill.name}
          style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', padding: '8px 0',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
          }}
        >
          <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 13, color: '#F0EDE8' }}>
            {skill.name}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* Mini bar */}
            <div style={{ width: 60, height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
              <motion.div
                style={{ height: '100%', background: LEVEL_COLOR[skill.level], borderRadius: 2, transformOrigin: 'left' }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: LEVEL_FILL[skill.level] }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.06 }}
              />
            </div>
            {/* Level badge */}
            <span style={{
              fontFamily: 'var(--font-jetbrains), monospace', fontSize: 9,
              color: LEVEL_COLOR[skill.level], minWidth: 70,
              textAlign: 'right', letterSpacing: '0.05em',
            }}>
              {skill.level}
            </span>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default function SkillsSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 800);
    return () => clearTimeout(t);
  }, []);

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

        {/* Stat card grid */}
        {!loaded ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
            marginBottom: 64,
          }} className="skills-cards">
            {[1,2,3,4,5,6].map(i => <SkillCardSkeleton key={i} />)}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 16,
              marginBottom: 64,
            }}
            className="skills-cards"
          >
            {SKILLS.map((cat) => (
              <StatCard key={cat.cat} cat={cat.cat} items={cat.items} />
            ))}
          </motion.div>
        )}

        {/* GitHub activity */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          {!loaded ? (
            <GitHubSkeleton />
          ) : (<>
          <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: '#3D4557', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
            COMMIT ACTIVITY
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=HARSHHLEDWANI&bg_color=0D1117&color=00FF88&line=00CFFF&point=FFD700&area=true&hide_border=true"
            alt="Harsh's GitHub activity"
            style={{ width: '100%', borderRadius: 4, border: '1px solid rgba(255,255,255,0.07)', marginBottom: 12, display: 'block' }}
            loading="lazy"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=HARSHHLEDWANI&theme=dark&background=0D1117&hide_border=true&ring=00FF88&fire=FFB347&currStreakLabel=00CFFF"
            alt="Harsh's streak"
            style={{ width: '100%', borderRadius: 4, border: '1px solid rgba(255,255,255,0.07)', marginBottom: 24, display: 'block' }}
            loading="lazy"
          />

          {/* Manual stat fallback grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }} className="github-stats-grid">
            {[
              { label: 'REPOS', value: '10+' },
              { label: 'LANGUAGES', value: 'JS, PY, TS' },
              { label: 'ACTIVE SINCE', value: '2023' },
            ].map(({ label, value }) => (
              <div key={label} style={{
                background: '#0A0C10',
                border: '1px solid rgba(255,255,255,0.07)',
                padding: '12px 16px',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 9, color: '#3D4557', letterSpacing: '0.1em', marginBottom: 6 }}>
                  {label}
                </div>
                <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 16, color: '#F0EDE8', fontWeight: 700 }}>
                  {value}
                </div>
              </div>
            ))}
          </div>

          {/* Currently building pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,179,71,0.06)',
            border: '1px solid rgba(255,179,71,0.3)',
            borderRadius: 20, padding: '8px 16px', marginTop: 24,
          }}>
            <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#FFB347', display: 'inline-block' }} />
            <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 12, color: '#FFB347', letterSpacing: '0.04em' }}>
              Neuro-Adaptive AI Learning System
            </span>
          </div>
          </>)}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-inner { padding: 0 24px !important; }
          .skills-heading { font-size: 32px !important; }
          .skills-cards { grid-template-columns: 1fr !important; }
          .github-stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
