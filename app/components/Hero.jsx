'use client';

import dynamic from 'next/dynamic';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi';

const Hero3D = dynamic(
  () => import('./Hero3D').then((m) => ({ default: m.Hero3D })),
  { ssr: false, loading: () => null }
);

const EASE = [0.22, 1, 0.36, 1];

function WordReveal({ text, delay = 0, className = '' }) {
  const words = text.split(' ');
  return (
    <span className={`inline-flex flex-wrap ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: '115%' }}
            animate={{ y: '0%' }}
            transition={{ delay: delay + i * 0.13, duration: 0.88, ease: EASE }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

function MagneticLink({ children, href, className, onClick, target, rel }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.22);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.22);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

const SOCIAL = [
  { icon: FiGithub,   href: 'https://github.com/HARSHHLEDWANI', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/harsh-ledwani', label: 'LinkedIn' },
  { icon: FiMail,     href: 'mailto:ledwani830@gmail.com', label: 'Email' },
];

export function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Three.js background ── */}
      <div className="absolute inset-0 z-0" style={{ opacity: 0.35 }}>
        <Hero3D />
      </div>

      {/* ── Radial vignette overlay ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(6,6,10,0.1) 0%, rgba(6,6,10,0.7) 60%, rgba(6,6,10,1) 100%)',
        }}
      />

      {/* ── Ambient orb top-left (indigo) ── */}
      <div
        className="absolute z-[1] pointer-events-none"
        style={{
          width: 700,
          height: 700,
          borderRadius: '50%',
          top: -250,
          left: -250,
          background: 'radial-gradient(circle, rgba(123,110,255,1) 0%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.10,
          animation: 'orb-drift 18s ease-in-out infinite',
        }}
      />

      {/* ── Ambient orb bottom-right (mint) ── */}
      <div
        className="absolute z-[1] pointer-events-none"
        style={{
          width: 500,
          height: 500,
          borderRadius: '50%',
          bottom: -180,
          right: -180,
          background: 'radial-gradient(circle, rgba(0,229,160,1) 0%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.07,
          animation: 'orb-drift 24s ease-in-out infinite reverse',
        }}
      />

      {/* ── Dot grid overlay ── */}
      <div className="absolute inset-0 z-[1] dot-grid opacity-30 pointer-events-none" />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-16">

        {/* Available badge */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.65, ease: EASE }}
        >
          <div
            className="flex items-center gap-2.5 px-5 py-2 rounded-full text-sm font-medium"
            style={{
              background: 'rgba(123,110,255,0.10)',
              border: '1px solid rgba(123,110,255,0.28)',
              color: 'var(--accent-light)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: 'var(--accent-mint)', boxShadow: '0 0 8px var(--accent-mint)', animation: 'glow-pulse 2s ease-in-out infinite' }}
            />
            Open to new opportunities
          </div>
        </motion.div>

        {/* Hero heading — word mask reveal */}
        <div className="text-center">
          <h1
            className="font-bold"
            style={{
              fontSize: 'clamp(52px, 10.5vw, 148px)',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              color: '#EDEDF5',
            }}
          >
            <WordReveal text="Harsh" delay={0.30} />
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, var(--accent-light) 0%, var(--accent) 60%, var(--accent-mint) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
              }}
            >
              <WordReveal text="Ledwani" delay={0.46} />
            </span>
          </h1>
        </div>

        {/* Role line */}
        <motion.p
          className="text-center text-xl md:text-2xl font-medium text-dark-text-secondary mt-6 tracking-tight"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7, ease: EASE }}
        >
          Full-Stack Developer
          <span className="mx-3 opacity-30">·</span>
          CS Student
          <span className="mx-3 opacity-30">·</span>
          Creative Builder
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-center text-base md:text-lg text-dark-text-tertiary max-w-lg mx-auto mt-5 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7, ease: EASE }}
        >
          Building full-stack systems that combine engineering precision with thoughtful design.
          Currently developing an AI-powered adaptive learning platform.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.65, ease: EASE }}
        >
          <MagneticLink
            href="#projects"
            onClick={scrollToProjects}
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white transition-all"
            style={{ background: 'var(--accent)', boxShadow: '0 0 0 0 var(--accent-glow)' }}
          >
            View My Work
            <FiArrowUpRight size={16} />
          </MagneticLink>
          <MagneticLink
            href="#contact"
            onClick={scrollToContact}
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-dark-text transition-all"
            style={{ border: '1px solid rgba(255,255,255,0.12)' }}
          >
            Get in Touch
          </MagneticLink>
        </motion.div>
      </div>

      {/* ── Left side social links ── */}
      <motion.div
        className="absolute left-8 bottom-16 hidden lg:flex flex-col items-center gap-4 z-10"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.7, duration: 0.6, ease: EASE }}
      >
        {SOCIAL.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ scale: 1.2, x: 3 }}
            className="text-dark-text-secondary hover:text-accent transition-colors"
            style={{ color: 'rgba(237,237,245,0.55)' }}
          >
            <Icon size={19} />
          </motion.a>
        ))}
        <div className="w-px h-14 bg-white/15 mt-1" />
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.6 }}
      >
        <span className="text-[10px] text-dark-text-tertiary tracking-[0.18em] uppercase font-medium">Scroll</span>
        <motion.div
          className="text-dark-text-secondary"
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={17} />
        </motion.div>
      </motion.div>
    </section>
  );
}
