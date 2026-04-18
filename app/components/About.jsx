'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const EASE = [0.16, 1, 0.3, 1];

const EDUCATION = [
  {
    degree: 'B.TECH — COMPUTER SCIENCE ENGINEERING',
    institution: 'Symbiosis Institute of Technology, Pune',
    period: '2023 — 2027',
    current: true,
  },
  {
    degree: 'CLASS XII — CBSE',
    institution: 'Greenway Modern Sr. Sec. School, New Delhi',
    period: '2023',
    current: false,
  },
  {
    degree: 'CLASS X — CBSE',
    institution: 'Greenway Modern Sr. Sec. School, New Delhi',
    period: '2021',
    current: false,
  },
];

export function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6 overflow-hidden" style={{ background: '#0A0A0A' }}>

      {/* Ghost section number */}
      <div
        className="section-ghost absolute top-0 right-0 select-none pointer-events-none leading-none"
        style={{ lineHeight: 1 }}
        aria-hidden
      >
        02
      </div>

      {/* Vermillion rule */}
      <div className="max-w-[1200px] mx-auto">
        <div className="rule-vermillion mb-14" style={{ width: '60px' }} />

        {/* Section label */}
        <motion.p
          className="section-tag mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
        >
          02 / ABOUT
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="font-display mb-16"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', color: '#F0EDE8', letterSpacing: '0.03em' }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
        >
          WHO I AM
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ── Left: Bio ── */}
          <div className="flex flex-col gap-8">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
            >
              <p className="font-sans text-lg leading-relaxed" style={{ color: '#F0EDE8' }}>
                I'm a Computer Science undergraduate at{' '}
                <span style={{ color: '#FF3D00', fontWeight: 600 }}>Symbiosis Institute of Technology</span>,
                building systems across the full stack — from data-driven backends to polished frontends.
              </p>
              <p className="font-sans text-base leading-relaxed" style={{ color: '#888882' }}>
                My work spans Formula 1 analytics platforms, NGO donation infrastructure, and ML-powered security tools.
                Each project reflects a commitment to real-world utility over technical novelty.
              </p>
              <p className="font-sans text-base leading-relaxed" style={{ color: '#888882' }}>
                I've led workshops on C programming and Linux for peers, contributed to technical fest design teams,
                and believe that great engineering is inseparable from clear communication.
              </p>
            </motion.div>

            {/* Currently building */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.6, ease: EASE }}
              style={{ borderLeft: '4px solid #C8FF00', paddingLeft: '20px' }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] mb-2" style={{ color: '#C8FF00' }}>
                CURRENTLY BUILDING
              </p>
              <p className="font-sans text-sm" style={{ color: '#888882' }}>
                Neuro-Adaptive AI Learning Assistant — adaptive curriculum engine with ML knowledge-state tracking
                <span
                  className="inline-block w-0.5 h-4 ml-1 align-middle"
                  style={{ background: '#FF3D00', animation: 'blink 1s step-end infinite' }}
                />
              </p>
            </motion.div>
          </div>

          {/* ── Right: Education Timeline ── */}
          <div>
            <motion.p
              className="font-mono text-[10px] uppercase tracking-[0.16em] mb-10"
              style={{ color: '#555550' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25 }}
            >
              EDUCATION
            </motion.p>

            <div className="relative">
              {/* Timeline line */}
              <motion.div
                className="absolute left-1.5 top-2 bottom-2 w-px"
                style={{
                  background: '#2A2A2A',
                  transformOrigin: 'top',
                  scaleY: inView ? 1 : 0,
                  transition: 'transform 1s var(--ease-out)',
                }}
              />

              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={i}
                  className="relative pl-10 pb-10 last:pb-0"
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.6, ease: EASE }}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-0 top-1 w-3 h-3"
                    style={{
                      background: edu.current ? '#FF3D00' : '#2A2A2A',
                      border: edu.current ? 'none' : '1px solid #3A3A3A',
                      boxShadow: edu.current ? '0 0 10px rgba(255,61,0,0.5)' : 'none',
                    }}
                  />

                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <p className="font-display text-base leading-snug" style={{ color: '#F0EDE8', letterSpacing: '0.04em' }}>
                        {edu.degree}
                      </p>
                      <span
                        className="font-mono text-[10px] tracking-[0.1em] shrink-0 px-2 py-0.5"
                        style={{
                          background: edu.current ? 'rgba(255,61,0,0.1)' : 'rgba(255,255,255,0.04)',
                          color: edu.current ? '#FF3D00' : '#555550',
                          border: `1px solid ${edu.current ? 'rgba(255,61,0,0.25)' : '#2A2A2A'}`,
                        }}
                      >
                        {edu.period}
                      </span>
                    </div>
                    <p className="font-sans text-sm" style={{ color: '#555550' }}>{edu.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
