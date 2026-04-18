'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '@/lib/projects';
import { ProjectCard } from './projects/ProjectCard';

const EASE = [0.22, 1, 0.36, 1];

export function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const featured = projects[0];
  const secondary = projects[1];
  const rest = projects.slice(2);

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 px-6 lg:px-8 overflow-hidden">
      {/* Ambient orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          top: '0%',
          right: '-20%',
          background: 'radial-gradient(circle, rgba(123,110,255,1) 0%, transparent 70%)',
          filter: 'blur(120px)',
          opacity: 0.07,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          borderRadius: '50%',
          bottom: '5%',
          left: '-15%',
          background: 'radial-gradient(circle, rgba(0,229,160,1) 0%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.05,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-4"
        >
          <span className="section-tag">04 / Projects</span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.h2
            className="font-bold text-dark-text"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.025em' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.7, ease: EASE }}
          >
            What I've built
          </motion.h2>
          <motion.a
            href="https://github.com/HARSHHLEDWANI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-dark-text-secondary hover:text-dark-text transition-colors shrink-0"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ x: 3 }}
          >
            All repos on GitHub <FiArrowUpRight size={15} />
          </motion.a>
        </div>

        {/* ── Bento grid ── */}
        <div className="space-y-4">

          {/* Row 1: featured (2/3) + secondary (1/3) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              {featured && <ProjectCard project={featured} featured index={0} />}
            </div>
            <div className="lg:col-span-1">
              {secondary && <ProjectCard project={secondary} index={1} />}
            </div>
          </div>

          {/* Row 2: remaining 3 equal */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i + 2} />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
