'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Work',    href: '#projects' },
  { label: 'About',   href: '#about'    },
  { label: 'Skills',  href: '#skills'   },
  { label: 'Contact', href: '#contact'  },
];

const EASE = [0.22, 1, 0.36, 1];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActive]  = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#0A0A0A]/90 backdrop-blur-2xl border-b border-[#1F1F1F]'
            : 'py-5'
        }`}
      >
        <nav className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="font-display font-bold text-[1.15rem] tracking-tight text-white hover:opacity-80 transition-opacity select-none"
          >
            Harsh
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]">.</span>
          </Link>

          {/* Center nav links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.slice(1);
              const active = activeSection === id;
              return (
                <li key={label}>
                  <a
                    href={href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 group ${
                      active ? 'text-white' : 'text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]
                        transition-transform duration-300 origin-left ${
                          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Hire Me CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2 text-sm font-semibold text-white rounded-lg
                bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]
                hover:from-[#8B5CF6] hover:to-[#22D3EE]
                transition-all duration-200 hover:scale-[1.04]
                shadow-[0_0_20px_rgba(124,58,237,0.30)]
                hover:shadow-[0_0_32px_rgba(124,58,237,0.50)]"
            >
              Hire Me
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block h-px w-5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-8">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.08, ease: EASE }}
                >
                  <a
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="text-[2.5rem] font-display font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#22D3EE] transition-all duration-200"
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, ease: EASE }}
              onClick={() => setMobileOpen(false)}
              className="mt-12 px-8 py-3.5 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
