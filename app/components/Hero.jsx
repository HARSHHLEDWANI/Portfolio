'use client';

import { motion } from 'framer-motion';

const EASE      = [0.22, 1, 0.36, 1];
const HEADLINE  = ['Building', 'Secure,', 'Scalable', 'Digital', 'Systems'];
const TECH_TAGS = ['Python', 'TypeScript', 'React', 'Next.js', 'FastAPI', 'TensorFlow', 'Node.js', 'PostgreSQL'];
const STATS     = [
  { value: '3+',  label: 'Years building'   },
  { value: '10+', label: 'Projects shipped'  },
  { value: '20+', label: 'Technologies'      },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">

      {/* Subtle line grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 85% 75% at 50% 45%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 45%, black 20%, transparent 100%)',
        }}
      />

      {/* Violet glow — top left */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 640,
          height: 640,
          borderRadius: '50%',
          top: '-8%',
          left: '-12%',
          background: 'radial-gradient(circle, rgba(124,58,237,1) 0%, transparent 70%)',
          filter: 'blur(130px)',
          opacity: 0.09,
        }}
      />

      {/* Cyan glow — bottom right */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          borderRadius: '50%',
          bottom: '5%',
          right: '-8%',
          background: 'radial-gradient(circle, rgba(6,182,212,1) 0%, transparent 70%)',
          filter: 'blur(110px)',
          opacity: 0.07,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-28 pb-20 w-full">

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
          className="flex items-center gap-2.5 mb-10"
        >
          <span
            className="w-2 h-2 rounded-full bg-[#22C55E] shrink-0"
            style={{ boxShadow: '0 0 8px rgba(34,197,94,0.6)', animation: 'glow-pulse 2.5s ease-in-out infinite' }}
          />
          <span className="text-xs font-mono text-[#A1A1AA] tracking-[0.14em] uppercase">
            Available for opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          className="font-display font-bold text-white mb-8 leading-[0.9]"
          style={{ fontSize: 'clamp(3.2rem, 8.5vw, 7.5rem)', letterSpacing: '-0.03em' }}
        >
          {HEADLINE.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 48, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.65, delay: 0.35 + i * 0.09, ease: EASE }}
              className="inline-block mr-[0.22em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Gradient subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
          className="font-display font-semibold text-xl md:text-2xl mb-5"
          style={{
            background: 'linear-gradient(90deg, #8B5CF6, #06B6D4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '0.04em',
          }}
        >
          AI · Blockchain · Full Stack
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: EASE }}
          className="text-[#A1A1AA] text-base md:text-lg leading-relaxed mb-12 max-w-[520px]"
        >
          CS undergraduate building production-grade systems — from ML fraud detection to real-time analytics platforms. I care about both the correctness and the craft.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: EASE }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-[0.95rem] font-semibold text-white rounded-xl
              bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]
              hover:from-[#8B5CF6] hover:to-[#22D3EE]
              transition-all duration-200 hover:scale-[1.03]
              shadow-[0_0_28px_rgba(124,58,237,0.35)]
              hover:shadow-[0_0_42px_rgba(124,58,237,0.55)]"
          >
            View Work
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-[0.95rem] font-semibold text-white rounded-xl
              border border-[#2A2A2A] hover:border-[#3A3A3A]
              bg-[#111111] hover:bg-[#161616]
              transition-all duration-200 hover:scale-[1.02]"
          >
            Contact
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.25, ease: EASE }}
          className="flex flex-wrap gap-10 pb-16 border-b border-[#1F1F1F]"
        >
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="font-display font-bold text-white text-2xl leading-none mb-1"
                style={{ letterSpacing: '-0.02em' }}>
                {value}
              </p>
              <p className="text-xs text-[#52525B] font-mono uppercase tracking-[0.1em]">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.45, ease: EASE }}
          className="flex flex-wrap gap-2 pt-8"
        >
          {TECH_TAGS.map(tech => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-mono text-[#52525B] border border-[#1F1F1F] rounded-full bg-[#111111]/60 hover:text-[#A1A1AA] hover:border-[#2A2A2A] transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-[#52525B] font-mono uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-[#2A2A2A] to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
