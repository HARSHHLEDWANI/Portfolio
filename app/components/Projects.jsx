'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '@/lib/projects';

const EASE = [0.16, 1, 0.3, 1];

const PROJECT_LIST = [
  {
    index: '01',
    title: 'SECUREFLOW ML FRAUD DETECTION',
    stack: ['Python', 'TensorFlow', 'FastAPI'],
    year: '2024',
    active: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    href: 'https://github.com/HARSHHLEDWANI',
    description: '99.2% fraud detection accuracy · <50ms inference · Real-time ML pipeline with blockchain audit trails',
  },
  {
    index: '02',
    title: 'NEURO-ADAPTIVE AI LEARNING',
    stack: ['Python', 'FastAPI', 'React'],
    year: '2025',
    active: true,
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    href: 'https://github.com/HARSHHLEDWANI',
    description: 'Adaptive curriculum engine · ML knowledge-state tracking · Real-time personalization',
  },
  {
    index: '03',
    title: 'F1 RACE ANALYTICS PLATFORM',
    stack: ['React', 'Node.js', 'D3.js'],
    year: '2024',
    active: false,
    image: 'https://images.unsplash.com/photo-1617386214930-dae6126db84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    href: 'https://f1-theta-seven.vercel.app',
    description: 'Multi-season F1 data viz · Live race telemetry · Interactive dashboards deployed on Vercel',
  },
  {
    index: '04',
    title: 'ZUNJ DIVYANG — NGO PLATFORM',
    stack: ['Next.js', 'Cashfree API', 'MongoDB'],
    year: '2025',
    active: true,
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    href: 'https://github.com/HARSHHLEDWANI',
    description: 'Live payment integration · Auto donor receipts · Webhook-driven real-time campaign tracking',
  },
  {
    index: '05',
    title: 'PHISHING WEBSITE DETECTOR',
    stack: ['Python', 'Scikit-learn', 'Chrome API'],
    year: '2024',
    active: false,
    image: 'https://images.unsplash.com/photo-1550439062-61a15eec98d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    href: 'https://github.com/HARSHHLEDWANI',
    description: '94%+ detection accuracy · Real-time URL scanning · Chrome extension shipped',
  },
];

function ProjectRow({ project, index: rowIndex }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.a
      ref={ref}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-row relative block overflow-hidden"
      style={{ borderBottom: '1px solid #2A2A2A' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: rowIndex * 0.06, duration: 0.55, ease: EASE }}
    >
      {/* Fill background (clip-path reveal from left) */}
      <div
        className="project-fill absolute inset-0"
        style={{ background: '#141414' }}
      />

      {/* Preview image (bleeds in from right) */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-72 overflow-hidden pointer-events-none"
        initial={{ clipPath: 'inset(0 0 0 100%)' }}
        animate={{ clipPath: hovered ? 'inset(0 0 0 0%)' : 'inset(0 0 0 100%)' }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.25 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #141414 0%, transparent 60%)' }}
        />
      </motion.div>

      {/* Row content */}
      <div className="relative z-10 flex flex-wrap items-center gap-4 py-7 pr-4">
        {/* Index */}
        <span className="font-mono text-[12px] w-8 shrink-0" style={{ color: '#555550' }}>
          {project.index}
        </span>

        {/* Title */}
        <h3
          className="font-display flex-1 min-w-[200px]"
          style={{
            fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
            color: hovered ? '#FF3D00' : '#F0EDE8',
            letterSpacing: '0.04em',
            transition: 'color 0.25s',
          }}
        >
          {project.title}
        </h3>

        {/* Description — visible on hover, hidden otherwise */}
        <motion.p
          className="hidden lg:block font-sans text-xs max-w-[260px] text-right"
          style={{ color: '#555550' }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
          transition={{ duration: 0.25 }}
        >
          {project.description}
        </motion.p>

        {/* Stack tags */}
        <div className="flex gap-2 flex-wrap">
          {project.stack.map((s) => (
            <span key={s} className="font-mono text-[10px] tracking-[0.1em]" style={{ color: '#555550' }}>
              {s}
            </span>
          ))}
        </div>

        {/* Year */}
        <span className="font-mono text-[11px] w-10 text-right shrink-0" style={{ color: '#555550' }}>
          {project.year}
        </span>

        {/* Active badge */}
        {project.active && (
          <span
            className="font-mono text-[9px] tracking-[0.14em] uppercase px-2 py-0.5 shrink-0"
            style={{ background: 'rgba(200,255,0,0.08)', color: '#C8FF00', border: '1px solid rgba(200,255,0,0.2)' }}
          >
            ACTIVE
          </span>
        )}

        {/* Arrow */}
        <span
          className="font-sans text-xl shrink-0 ml-2 transition-all duration-200"
          style={{
            color: hovered ? '#FF3D00' : '#2A2A2A',
            transform: hovered ? 'translateX(6px)' : 'translateX(0)',
          }}
        >
          →
        </span>
      </div>
    </motion.a>
  );
}

export function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 overflow-hidden" style={{ background: '#0A0A0A' }}>

      {/* Ghost number */}
      <div className="section-ghost absolute top-0 right-0 pointer-events-none select-none" aria-hidden>
        01
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="rule-vermillion mb-14" style={{ width: '60px' }} />

        <motion.p
          className="section-tag mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          01 / WORK
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.h2
            className="font-display"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', color: '#F0EDE8', letterSpacing: '0.03em' }}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
          >
            SELECTED<br />WORK
          </motion.h2>
          <motion.p
            className="font-sans text-sm max-w-[240px]"
            style={{ color: '#555550' }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.22 }}
          >
            Systems built to perform under real-world conditions.
          </motion.p>
        </div>

        {/* Project list */}
        <div>
          {PROJECT_LIST.map((project, i) => (
            <ProjectRow key={project.index} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
