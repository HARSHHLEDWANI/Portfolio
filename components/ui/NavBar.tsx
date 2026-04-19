'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Work',    href: '#projects' },
  { label: 'Skills',  href: '#skills'   },
  { label: 'About',   href: '#about'    },
  { label: 'Contact', href: '#contact'  },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function NavBar() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      setVisible(y < lastY.current || y < 100);
      lastY.current = y;
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.nav
      animate={{ y: visible ? 0 : -80 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: 56, padding: '0 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(8,11,20,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        zIndex: 100,
      }}
    >
      <span style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: 16, fontWeight: 700, color: '#00FF88' }}>
        HARSH.SYS
      </span>

      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="nav-links">
        {NAV_LINKS.map((link) => (
          <button
            key={link.label}
            onClick={() => scrollTo(link.href)}
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: 13, color: '#8892A4',
              background: 'none', border: 'none', cursor: 'pointer',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#00CFFF')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#8892A4')}
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => window.open('/resume.pdf', '_blank')}
          style={{
            fontFamily: 'var(--font-syne), sans-serif',
            fontSize: 12, color: '#00FF88',
            background: 'none',
            border: '1px solid #00FF88',
            padding: '7px 18px', borderRadius: 0,
            cursor: 'pointer', transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(0,255,136,0.1)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'none')}
        >
          Resume ↓
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) { .nav-links > button:not(:last-child) { display: none; } }
      `}</style>
    </motion.nav>
  );
}
