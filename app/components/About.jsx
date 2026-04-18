'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const EASE = [0.22, 1, 0.36, 1];

const STATS = [
  { value: 3, suffix: '+', label: 'Years building' },
  { value: 10, suffix: '+', label: 'Projects shipped' },
  { value: 20, suffix: '+', label: 'Technologies' },
];

const EDUCATION = [
  {
    degree: 'B.Tech — Computer Science Engineering',
    institution: 'Symbiosis Institute of Technology, Pune',
    period: '2023 — 2027 (Expected)',
    current: true,
  },
  {
    degree: 'Class XII — CBSE',
    institution: 'Greenway Modern Sr. Sec. School, New Delhi',
    period: '2023',
    current: false,
  },
  {
    degree: 'Class X — CBSE',
    institution: 'Greenway Modern Sr. Sec. School, New Delhi',
    period: '2021',
    current: false,
  },
];

function AnimatedNumber({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6 lg:px-8 overflow-hidden">
      {/* Ambient orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          top: '10%',
          right: '-20%',
          background: 'radial-gradient(circle, rgba(123,110,255,1) 0%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.06,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <span className="section-tag">02 / About</span>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">

          {/* ── Left: heading + stats ── */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
            >
              <h2
                className="font-bold text-dark-text mb-4"
                style={{ fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '-0.025em', lineHeight: 1.05 }}
              >
                Who I am
              </h2>
              <p className="text-dark-text-secondary text-lg leading-relaxed">
                Building at the intersection of full-stack engineering and AI — from responsive web platforms to machine learning systems.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.7, ease: EASE }}
            >
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div
                    className="text-4xl font-bold mb-1"
                    style={{ color: 'var(--accent-light)', letterSpacing: '-0.02em' }}
                  >
                    <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-dark-text-secondary font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Currently building badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.6, ease: EASE }}
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{ background: 'rgba(0,229,160,0.06)', border: '1px solid rgba(0,229,160,0.18)' }}
            >
              <span
                className="mt-0.5 w-2 h-2 rounded-full shrink-0"
                style={{ background: 'var(--accent-mint)', boxShadow: '0 0 8px var(--accent-mint)', animation: 'glow-pulse 2s ease-in-out infinite' }}
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--accent-mint)' }}>
                  Currently Building
                </p>
                <p className="text-sm text-dark-text-secondary">
                  Neuro-Adaptive AI Learning Assistant — adaptive curriculum engine with ML knowledge-state tracking.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Right: bio + education ── */}
          <div className="lg:col-span-3 flex flex-col gap-12">

            {/* Bio paragraphs */}
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.75, ease: EASE }}
            >
              <p className="text-lg text-dark-text leading-relaxed">
                I'm a Computer Science undergraduate at{' '}
                <span style={{ color: 'var(--accent-light)' }} className="font-semibold">
                  Symbiosis Institute of Technology
                </span>
                , building systems across the full stack — from data-driven backends to polished frontends. I care about both the correctness and the craft.
              </p>
              <p className="text-lg text-dark-text-secondary leading-relaxed">
                My work spans{' '}
                <span className="text-dark-text font-medium">Formula 1 analytics platforms</span>,{' '}
                <span className="text-dark-text font-medium">NGO donation infrastructure</span>, and{' '}
                <span className="text-dark-text font-medium">ML-powered security tools</span>. Each project reflects a commitment to real-world utility over technical novelty.
              </p>
              <p className="text-lg text-dark-text-secondary leading-relaxed">
                I've led workshops on C programming and Linux for peers, contributed to technical fest design teams, and believe that great engineering is inseparable from clear communication.
              </p>
            </motion.div>

            {/* Highlight skills */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.28, duration: 0.6, ease: EASE }}
            >
              {['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'TensorFlow', 'AWS'].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium text-dark-text-secondary cursor-default"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Education timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.7, ease: EASE }}
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-dark-text-secondary mb-6">
                Education
              </h3>
              <div className="relative space-y-0">
                {/* Vertical line */}
                <div
                  className="absolute left-2 top-2 bottom-2 w-px"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                />
                {EDUCATION.map((edu, i) => (
                  <motion.div
                    key={i}
                    className="relative pl-8 pb-8 last:pb-0"
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: EASE }}
                  >
                    {/* Dot */}
                    <div
                      className="absolute left-0 top-1.5 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{
                        background: edu.current ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
                        border: '2px solid rgba(255,255,255,0.12)',
                        boxShadow: edu.current ? '0 0 12px var(--accent-glow)' : 'none',
                      }}
                    >
                      {edu.current && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </div>

                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <p className="font-semibold text-dark-text text-sm leading-snug">
                          {edu.degree}
                        </p>
                        <span
                          className="shrink-0 text-xs font-medium px-2 py-0.5 rounded"
                          style={{
                            background: edu.current ? 'rgba(123,110,255,0.12)' : 'rgba(255,255,255,0.05)',
                            color: edu.current ? 'var(--accent-light)' : 'var(--text-muted)',
                          }}
                        >
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-sm text-dark-text-secondary mt-1">{edu.institution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
