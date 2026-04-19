'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ROLES = [
  'Full-Stack Developer',
  'AI Systems Builder',
  'ML Engineer',
  'CS @ SIT Pune',
];

function StatusPill() {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      border: '1px solid rgba(0,255,136,0.4)',
      borderRadius: 20, padding: '5px 14px',
      background: 'rgba(0,255,136,0.06)',
    }}>
      <span className="pulse-dot" style={{
        width: 6, height: 6, borderRadius: '50%',
        background: '#00FF88', display: 'inline-block',
      }} />
      <span style={{
        fontFamily: 'var(--font-jetbrains), monospace',
        fontSize: 11, color: '#00FF88', letterSpacing: '0.1em',
      }}>
        AVAILABLE FOR INTERNSHIPS · 2026
      </span>
    </div>
  );
}

function TypingRole() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[roleIdx];
    if (!deleting && charIdx < role.length) {
      const t = setTimeout(() => setCharIdx(c => c + 1), 60);
      return () => clearTimeout(t);
    }
    if (!deleting && charIdx === role.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx > 0) {
      const t = setTimeout(() => setCharIdx(c => c - 1), 30);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIdx(r => (r + 1) % ROLES.length);
    }
  }, [charIdx, deleting, roleIdx]);

  return (
    <p style={{
      fontFamily: 'var(--font-jetbrains), monospace',
      fontSize: 20, color: '#00CFFF', letterSpacing: '0.04em',
    }}>
      {ROLES[roleIdx].slice(0, charIdx)}
      <span className="cursor-blink">|</span>
    </p>
  );
}

export default function HeroOverlay() {
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 10,
      pointerEvents: 'none',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'flex-end', padding: '0 48px 80px',
    }}>
      {/* Status pill — top centre */}
      <div style={{
        position: 'absolute', top: 72, left: '50%',
        transform: 'translateX(-50%)', pointerEvents: 'auto',
      }}>
        <StatusPill />
      </div>

      {/* Bottom-left identity block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ pointerEvents: 'auto' }}
      >
        <p style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: 11, color: '#8892A4',
          letterSpacing: '0.15em', marginBottom: 8,
        }}>
          HARSH LEDWANI · CS @ SIT PUNE · 2026
        </p>
        <h1 style={{
          fontFamily: 'var(--font-syne), sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(42px, 7vw, 84px)',
          color: '#F0EDE8', lineHeight: 1.0, marginBottom: 12,
        }}>
          HARSH<span style={{ color: '#FFD700' }}>.</span>
        </h1>
        <TypingRole />
        <p style={{
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontSize: 16, color: '#8892A4',
          marginTop: 12, marginBottom: 24, maxWidth: 440,
        }}>
          Building systems where correctness meets craft.
        </p>
        <div style={{ display: 'flex', gap: 12 }}>
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontSize: 14, color: '#00FF88',
              background: 'transparent',
              border: '1.5px solid #00FF88',
              padding: '12px 28px', borderRadius: 0,
              cursor: 'pointer', transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(0,255,136,0.1)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
          >
            View Work →
          </button>
          <button
            onClick={() => window.open('/resume.pdf', '_blank')}
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontSize: 14, fontWeight: 700, color: '#080B14',
              background: '#00FF88',
              border: 'none', padding: '12px 28px', borderRadius: 0,
              cursor: 'pointer',
            }}
          >
            Resume ↓
          </button>
        </div>
      </motion.div>

      {/* Bottom hint */}
      <div style={{
        position: 'absolute', bottom: 24, left: '50%',
        transform: 'translateX(-50%)', textAlign: 'center', pointerEvents: 'none',
      }}>
        <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 10, color: '#3D4557' }}>
          CLICK GLOWING ZONES TO EXPLORE
        </p>
        <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 10, color: '#3D4557', marginTop: 4 }}>
          DRAG TO ORBIT · SCROLL TO ZOOM
        </p>
      </div>
    </div>
  );
}
