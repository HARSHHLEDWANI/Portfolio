'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';

const NAV_ITEMS = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

const EASE = [0.22, 1, 0.36, 1];

function scrollTo(href) {
  const el = document.querySelector(href);
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 80], ['rgba(6,6,10,0)', 'rgba(6,6,10,0.92)']);
  const navBorder = useTransform(scrollY, [0, 80], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.07)']);

  const handleNav = useCallback((href) => {
    scrollTo(href);
    setMobileOpen(false);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pointer-events-none"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="relative flex items-center justify-between px-5 py-3 rounded-2xl pointer-events-auto overflow-hidden"
            style={{ backgroundColor: navBg, borderColor: navBorder, borderWidth: 1, borderStyle: 'solid' }}
          >
            {/* Backdrop blur layer */}
            <div className="absolute inset-0 backdrop-blur-xl -z-10 rounded-2xl" />

            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-base font-bold tracking-tight text-dark-text"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span style={{ color: 'var(--accent)' }}>H</span>arsh
              <span className="text-dark-text-secondary font-medium ml-1">Ledwani</span>
            </motion.a>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className="relative px-4 py-2 text-sm font-medium text-dark-text-secondary hover:text-dark-text rounded-xl transition-colors group"
                  whileHover="hover"
                  whileTap={{ scale: 0.97 }}
                >
                  <motion.span
                    className="absolute inset-0 rounded-xl bg-white/[0.05] opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <motion.a
                href="https://github.com/HARSHHLEDWANI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl text-white transition-all"
                style={{ background: 'var(--accent)' }}
                whileHover={{ scale: 1.04, backgroundColor: 'var(--accent-light)' }}
                whileTap={{ scale: 0.97 }}
              >
                GitHub
                <FiArrowUpRight size={14} />
              </motion.a>
            </div>

            {/* Mobile menu toggle */}
            <motion.button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 text-dark-text-secondary hover:text-dark-text"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <FiX size={17} /> : <FiMenu size={17} />}
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-x-4 z-40 md:hidden rounded-2xl overflow-hidden"
            style={{ top: '4.75rem' }}
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: EASE }}
          >
            <div className="glass-intense rounded-2xl p-3">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className="flex w-full items-center justify-between px-4 py-3 rounded-xl text-dark-text-secondary hover:text-dark-text hover:bg-white/[0.04] transition-colors text-left"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <span className="font-medium text-sm">{item.label}</span>
                  <FiArrowUpRight size={14} className="opacity-40" />
                </motion.button>
              ))}
              <div className="mt-2 pt-2 border-t border-white/[0.06]">
                <a
                  href="https://github.com/HARSHHLEDWANI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white text-sm font-semibold"
                  style={{ background: 'var(--accent)' }}
                >
                  GitHub <FiArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
