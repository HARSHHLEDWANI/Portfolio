'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: '01 / WORK',    href: '#projects' },
  { label: '02 / ABOUT',   href: '#about' },
  { label: '03 / SKILLS',  href: '#skills' },
  { label: '04 / CONTACT', href: '#contact' },
];

const EASE = [0.16, 1, 0.3, 1];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = ['projects', 'about', 'skills', 'contact'];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          borderBottom: scrolled ? '1px solid #2A2A2A' : '1px solid transparent',
          background: scrolled ? 'rgba(10,10,10,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          paddingTop: scrolled ? '14px' : '22px',
          paddingBottom: scrolled ? '14px' : '22px',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-[28px] leading-none tracking-widest"
            style={{ color: '#F0EDE8' }}
          >
            HL<span style={{ color: '#FF3D00' }}>.</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '');
              const isActive = active === id;
              return (
                <button
                  key={label}
                  onClick={() => scrollTo(href)}
                  className="group relative font-mono text-[11px] tracking-[0.14em] uppercase transition-colors"
                  style={{ color: isActive ? '#FF3D00' : '#555550' }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#888882'; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = '#555550'; }}
                >
                  {label}
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[#FF3D00] origin-left"
                    style={{
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      transition: 'transform 0.3s var(--ease-out)',
                    }}
                  />
                </button>
              );
            })}
          </nav>

          {/* Hire Me */}
          <div className="hidden md:block">
            <a
              href="mailto:ledwani830@gmail.com"
              className="font-mono text-[11px] tracking-[0.14em] uppercase px-5 py-2.5 font-bold"
              style={{ background: '#FF3D00', color: '#0A0A0A' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#C8FF00'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#FF3D00'; }}
            >
              HIRE ME →
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden font-mono text-[11px] tracking-[0.14em] uppercase"
            style={{ color: mobileOpen ? '#FF3D00' : '#888882' }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </header>

      {/* Mobile bottom sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-end md:hidden"
            style={{ background: 'rgba(10,10,10,0.98)' }}
          >
            <div className="p-8 pb-16" style={{ borderTop: '5px solid #FF3D00' }}>
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.button
                  key={label}
                  onClick={() => scrollTo(href)}
                  className="block w-full text-left font-display py-3"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', color: '#F0EDE8', letterSpacing: '0.04em' }}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: EASE }}
                  whileHover={{ color: '#FF3D00', x: 8 }}
                >
                  {label}
                </motion.button>
              ))}
              <motion.a
                href="mailto:ledwani830@gmail.com"
                className="inline-block mt-6 font-mono text-[11px] tracking-[0.14em] uppercase px-6 py-3 font-bold"
                style={{ background: '#FF3D00', color: '#0A0A0A' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.32 }}
              >
                HIRE ME →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
