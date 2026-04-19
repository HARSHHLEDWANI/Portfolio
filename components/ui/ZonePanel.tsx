'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ZoneName } from '@/lib/cameraPositions';
import { PROJECTS } from '@/lib/projects';
import { SKILLS, LEVEL_COLOR } from '@/lib/skills';

interface Props {
  zone: ZoneName | null;
  open: boolean;
  onClose: () => void;
}

const STATUS_COLOR: Record<string, string> = {
  LIVE: '#00CFFF', COMPLETED: '#00FF88', BUILDING: '#FFB347',
};

function PanelContent({ zone, onClose }: { zone: ZoneName; onClose: () => void }) {
  const scroll = (id: string) => {
    onClose();
    setTimeout(() => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }), 400);
  };

  const ctaBtn = (label: string, id: string) => (
    <button
      onClick={() => scroll(id)}
      style={{
        marginTop: 20, fontFamily: 'var(--font-syne), sans-serif',
        fontSize: 13, color: '#00FF88',
        background: 'transparent', border: '1px solid #00FF88',
        padding: '10px 20px', borderRadius: 0, cursor: 'pointer',
        transition: 'background 0.2s',
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(0,255,136,0.1)')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
    >
      {label}
    </button>
  );

  if (zone === 'PROJECTS') return (
    <div>
      <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: '#00FF88', letterSpacing: '0.12em', marginBottom: 8 }}>THE PAINT</p>
      <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: 28, color: '#F0EDE8', marginBottom: 12 }}>My Work</h2>
      <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 14, color: '#8892A4', lineHeight: 1.7, marginBottom: 20 }}>
        Click any project below to see details. Scroll down to explore the full list.
      </p>
      {PROJECTS.slice(0, 3).map((p) => (
        <div key={p.id} style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', marginBottom: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: 14, color: '#F0EDE8' }}>{p.name}</span>
            <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 9, color: STATUS_COLOR[p.status], border: `1px solid ${STATUS_COLOR[p.status]}`, padding: '1px 6px', borderRadius: 3 }}>{p.status}</span>
          </div>
        </div>
      ))}
      {ctaBtn('View All Projects →', '#projects')}
    </div>
  );

  if (zone === 'SKILLS') return (
    <div>
      <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: '#00CFFF', letterSpacing: '0.12em', marginBottom: 8 }}>3-POINT LINE</p>
      <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: 28, color: '#F0EDE8', marginBottom: 12 }}>My Stack</h2>
      <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 14, color: '#8892A4', lineHeight: 1.7, marginBottom: 20 }}>
        Technologies I use to build real systems.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {SKILLS.flatMap(c => c.items).slice(0, 12).map((s) => (
          <span key={s.name} style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: 10, color: LEVEL_COLOR[s.level],
            border: `1px solid ${LEVEL_COLOR[s.level]}`,
            padding: '3px 8px', borderRadius: 3, opacity: 0.8,
          }}>{s.name}</span>
        ))}
      </div>
      {ctaBtn('View Full Skills →', '#skills')}
    </div>
  );

  if (zone === 'ABOUT') return (
    <div>
      <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: '#FFD700', letterSpacing: '0.12em', marginBottom: 8 }}>CENTRE COURT</p>
      <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: 28, color: '#F0EDE8', marginBottom: 12 }}>Who I Am</h2>
      <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 14, color: '#8892A4', lineHeight: 1.7, marginBottom: 12 }}>
        I&apos;m a Computer Science undergraduate at Symbiosis Institute of Technology, Pune — building systems across the full stack, from ML pipelines to production web platforms.
      </p>
      <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 14, color: '#8892A4', lineHeight: 1.7, marginBottom: 20 }}>
        I approach every problem like a chess match — every move calculated, every system designed to scale.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 4 }}>
        {['🏀 Basketball Mindset', '♟ Strategic Thinker', '🌙 Late Night Builder'].map(pill => (
          <span key={pill} style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 12, color: '#8892A4', border: '1px solid rgba(255,255,255,0.07)', padding: '4px 12px', borderRadius: 20 }}>{pill}</span>
        ))}
      </div>
      {ctaBtn('Read More →', '#about')}
    </div>
  );

  if (zone === 'CONTACT') return (
    <div>
      <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: '#FFB347', letterSpacing: '0.12em', marginBottom: 8 }}>THE BENCH</p>
      <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: 28, color: '#F0EDE8', marginBottom: 12 }}>Let&apos;s Build</h2>
      <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 14, color: '#8892A4', lineHeight: 1.7, marginBottom: 20 }}>
        Open to internships, collaborations, and interesting problems. Reply within 24 hours.
      </p>
      {[
        { label: 'GitHub →', sub: 'HARSHHLEDWANI', href: 'https://github.com/HARSHHLEDWANI' },
        { label: 'LinkedIn →', sub: 'harsh-ledwani', href: 'https://linkedin.com/in/harsh-ledwani-097571219' },
        { label: 'Email →', sub: 'ledwani830@gmail.com', href: 'mailto:ledwani830@gmail.com' },
      ].map(link => (
        <a key={link.label} href={link.href} target={link.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', textDecoration: 'none' }}>
          <span style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: 15, color: '#F0EDE8' }}>{link.label}</span>
          <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: '#3D4557' }}>{link.sub}</span>
        </a>
      ))}
      {ctaBtn('Send Message →', '#contact')}
    </div>
  );

  return null;
}

export default function ZonePanel({ zone, open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && zone && zone !== 'DEFAULT' && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute', right: 0, top: 0, height: '100%',
            width: 'min(420px, 90vw)',
            background: 'rgba(8,11,20,0.92)',
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid rgba(255,255,255,0.07)',
            padding: '32px 28px',
            overflowY: 'auto',
            zIndex: 20,
          }}
        >
          {/* Close bar */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: 24, paddingBottom: 16,
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}>
            <span style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 10, color: '#3D4557', letterSpacing: '0.12em',
            }}>
              HARSH.SYS / {zone}
            </span>
            <button
              onClick={onClose}
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: 13, color: '#F0EDE8',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                padding: '4px 12px',
                cursor: 'pointer',
                letterSpacing: '0.08em',
              }}
            >
              ✕ CLOSE
            </button>
          </div>
          <PanelContent zone={zone} onClose={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
