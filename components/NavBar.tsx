'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    if (y > lastY.current && y > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastY.current = y;
  });

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        background: 'rgba(8,11,20,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-dim)',
      }}
    >
      {/* Logo */}
      <span
        style={{
          fontFamily: 'var(--font-syne), sans-serif',
          fontSize: 16,
          fontWeight: 700,
          color: 'var(--neon-green)',
          letterSpacing: '0.05em',
          cursor: 'pointer',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        HARSH.SYS
      </span>

      {/* Nav links — hidden on mobile */}
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 32 }}
        className="nav-links"
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: 13,
              color: 'var(--text-secondary)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--neon-cyan)')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-secondary)')}
          >
            {link.label}
          </button>
        ))}

        <button
          onClick={() => window.open('/resume.pdf', '_blank')}
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: 13,
            color: 'var(--neon-green)',
            background: 'none',
            border: '1px solid var(--neon-green)',
            borderRadius: 20,
            padding: '6px 16px',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.background = 'rgba(0,255,136,0.08)')}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.background = 'none')}
        >
          Resume ↓
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
}
