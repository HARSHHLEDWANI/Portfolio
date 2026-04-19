'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setBlink(b => !b), 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const current = ROLES[roleIdx];

    if (!deleting && charIdx <= current.length) {
      const id = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx(c => c + 1);
      }, 65);
      return () => clearTimeout(id);
    }

    if (!deleting && charIdx > current.length) {
      const id = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(id);
    }

    if (deleting && charIdx > 0) {
      const id = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      }, 35);
      return () => clearTimeout(id);
    }

    if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIdx(r => (r + 1) % ROLES.length);
    }
  }, [charIdx, deleting, roleIdx]);

  return (
    <div style={{
      fontFamily: 'var(--font-jetbrains), monospace',
      fontSize: 20, color: '#00CFFF', letterSpacing: '0.04em',
      minHeight: 30, display: 'flex', alignItems: 'center',
    }}>
      {displayed}
      <span style={{ opacity: blink ? 1 : 0, marginLeft: 2, color: '#00FF88', transition: 'opacity 0.1s' }}>|</span>
    </div>
  );
}

function ShootHint() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setVisible(false), 8000);
    return () => clearTimeout(id);
  }, []);
  return (
    <p style={{
      fontFamily: 'var(--font-jetbrains), monospace',
      fontSize: 10, color: 'rgba(255,255,255,0.18)',
      letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0,
      opacity: visible ? 1 : 0,
      transition: 'opacity 0.8s ease',
    }}>
      Click the player to shoot 🏀
    </p>
  );
}

export default function HeroOverlay() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none' }}>
      {/* Status pill — top centre */}
      <div style={{
        position: 'absolute', top: 72, left: '50%',
        transform: 'translateX(-50%)', pointerEvents: 'auto',
      }}>
        <StatusPill />
      </div>

      {/* Hero content — bottom left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          position: 'absolute', bottom: 80, left: 48,
          maxWidth: 560, pointerEvents: 'auto',
        }}
      >
        <p style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: 11, color: '#8892A4',
          letterSpacing: '0.15em', marginBottom: 8,
          userSelect: 'none', WebkitUserSelect: 'none',
          background: 'transparent',
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
          userSelect: 'none', WebkitUserSelect: 'none',
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

      {/* Bottom hint — bottom centre, gold-tinted, fades in after 3s */}
      <div style={{
        position: 'absolute', bottom: 20, left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center', pointerEvents: 'none',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
        animation: 'fadeInHint 1s ease 3s both',
      }}>
        <p style={{
          fontFamily: 'var(--font-jetbrains), monospace', fontSize: 10,
          color: 'rgba(255,215,0,0.5)', letterSpacing: '0.12em', margin: 0,
          textTransform: 'uppercase',
          userSelect: 'none', WebkitUserSelect: 'none',
        }}>
          ↑ Click glowing zones to explore
        </p>
        <p style={{
          fontFamily: 'var(--font-jetbrains), monospace', fontSize: 10,
          color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em', margin: 0,
          textTransform: 'uppercase',
          userSelect: 'none', WebkitUserSelect: 'none',
        }}>
          Drag to orbit · Scroll to zoom
        </p>
        <ShootHint />
      </div>
    </div>
  );
}
