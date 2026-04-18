'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import CourtCanvas from './CourtCanvas';

const ROLES = ['Full-Stack Developer', 'AI Systems Builder', 'ML Engineer', 'CS @ SIT Pune'];

const NAME_CHARS = 'HARSH.'.split('');

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showHint, setShowHint] = useState(false);
  const typeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Typing animation
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let i = 0;
    setDisplayedRole('');
    setIsTyping(true);

    const typeNext = () => {
      if (i <= currentRole.length) {
        setDisplayedRole(currentRole.slice(0, i));
        i++;
        typeTimerRef.current = setTimeout(typeNext, 60);
      } else {
        setIsTyping(false);
        typeTimerRef.current = setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 2400);
      }
    };

    typeTimerRef.current = setTimeout(typeNext, 200);
    return () => {
      if (typeTimerRef.current) clearTimeout(typeTimerRef.current);
    };
  }, [roleIndex]);

  // Show court hint after 3s
  useEffect(() => {
    const t = setTimeout(() => setShowHint(true), 3000);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleZoneClick = (zone: string) => {
    if (zone === 'resume') return;
    scrollTo(zone);
  };

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Court canvas background */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <CourtCanvas onZoneClick={handleZoneClick} />
      </div>

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(8,11,20,0.55)',
          pointerEvents: 'none',
        }}
      />

      {/* Status pill */}
      <div
        style={{
          position: 'absolute',
          top: 80,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(0,255,136,0.08)',
          border: '1px solid rgba(0,255,136,0.4)',
          borderRadius: 20,
          padding: '6px 16px',
          zIndex: 10,
          whiteSpace: 'nowrap',
        }}
      >
        <span
          className="pulse-dot"
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: 'var(--neon-green)',
            display: 'inline-block',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: 11,
            color: 'var(--neon-green)',
            letterSpacing: '0.08em',
          }}
        >
          AVAILABLE FOR INTERNSHIPS · 2026
        </span>
      </div>

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '0 48px',
          maxWidth: 1200,
          margin: '0 auto',
          width: '100%',
        }}
        className="hero-content"
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: 11,
            color: 'var(--text-secondary)',
            letterSpacing: '0.15em',
            marginBottom: 16,
            textTransform: 'uppercase',
          }}
        >
          HARSH LEDWANI · CS @ SIT PUNE
        </motion.p>

        {/* Name with stagger */}
        <h1
          style={{
            fontFamily: 'var(--font-syne), sans-serif',
            fontWeight: 800,
            lineHeight: 1,
            margin: '0 0 24px',
            display: 'flex',
          }}
          className="hero-name"
        >
          {NAME_CHARS.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                color: char === '.' ? 'var(--neon-green)' : 'var(--text-primary)',
                display: 'inline-block',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        {/* Role typing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: 22,
            color: 'var(--neon-cyan)',
            marginBottom: 16,
            minHeight: 34,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
          className="hero-role"
        >
          <span>{displayedRole}</span>
          <span
            className="cursor-blink"
            style={{
              display: 'inline-block',
              width: 2,
              height: 22,
              background: 'var(--neon-cyan)',
              marginLeft: 2,
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: 16,
            color: 'var(--text-secondary)',
            maxWidth: 480,
            marginBottom: 40,
            lineHeight: 1.7,
          }}
          className="hero-tagline"
        >
          Building systems where correctness meets craft.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
        >
          <motion.button
            whileHover={{ scale: 1.02, background: 'rgba(0,255,136,0.1)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('projects')}
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--neon-green)',
              background: 'transparent',
              border: '1.5px solid var(--neon-green)',
              borderRadius: 0,
              padding: '12px 28px',
              cursor: 'pointer',
              transition: 'background 0.2s',
              letterSpacing: '0.05em',
            }}
          >
            View Work →
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.open('/resume.pdf', '_blank')}
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontSize: 14,
              fontWeight: 700,
              color: '#080B14',
              background: 'var(--neon-green)',
              border: '1.5px solid var(--neon-green)',
              borderRadius: 0,
              padding: '12px 28px',
              cursor: 'pointer',
              letterSpacing: '0.05em',
            }}
          >
            Resume ↓
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: 10,
            color: 'var(--text-dim)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          SCROLL TO EXPLORE
        </span>
        <span className="chevron-bounce" style={{ color: 'var(--text-dim)', fontSize: 16 }}>
          ∨
        </span>
      </div>

      {/* Court hint */}
      {showHint && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'absolute',
            bottom: 32,
            right: 48,
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: 10,
            color: 'var(--text-dim)',
            letterSpacing: '0.05em',
            zIndex: 10,
          }}
        >
          [ hover the court to explore sections ]
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hero-content { padding: 0 24px !important; }
          .hero-name { font-size: 42px !important; }
          .hero-role { font-size: 18px !important; }
          .hero-tagline { display: none; }
        }
        .hero-name { font-size: 80px; }
      `}</style>
    </section>
  );
}
