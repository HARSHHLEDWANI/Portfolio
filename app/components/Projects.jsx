'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import { projects } from '@/lib/projects';

const EASE = [0.22, 1, 0.36, 1];

/* ─── Featured flagship panel ──────────────────────────────── */
function FeaturedProject({ project }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: EASE }}
      className="group relative rounded-2xl overflow-hidden border border-[#1F1F1F] hover:border-[#7C3AED]/40 transition-all duration-500 mb-6"
      style={{ background: '#111111' }}
    >
      {/* Hover glow ring */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
        style={{ boxShadow: 'inset 0 0 80px rgba(124,58,237,0.07)' }}
      />

      <div className="grid lg:grid-cols-2 min-h-[520px]">

        {/* Left: content */}
        <div className="flex flex-col justify-between p-10 lg:p-14 gap-10">
          <div>
            {/* Top badges */}
            <div className="flex items-center gap-3 mb-10">
              <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-[#7C3AED] bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-full">
                Featured Project
              </span>
              <span className="text-xs font-mono text-[#52525B]">01</span>
            </div>

            {/* Title */}
            <h3
              className="font-display font-bold text-white mb-3 tracking-tight"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.025em' }}
            >
              {project.title}
            </h3>
            <p className="text-[#A1A1AA] text-base mb-10 leading-relaxed">{project.tagline}</p>

            {/* Case study grid */}
            <div className="space-y-7">
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.14em] text-[#52525B] mb-2">
                  Problem
                </p>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.14em] text-[#52525B] mb-2">
                  Solution
                </p>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">{project.solution}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.14em] text-[#52525B] mb-3">
                  Impact
                </p>
                <ul className="space-y-2">
                  {project.impact.map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-sm">
                      <span className="w-1 h-1 rounded-full bg-[#22C55E] shrink-0" style={{ boxShadow: '0 0 6px rgba(34,197,94,0.6)' }} />
                      <span className="text-white font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom: stack + links */}
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 text-[11px] font-mono text-[#A1A1AA] bg-[#1A1A1A] border border-[#2A2A2A] rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-5 pt-1">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-[#A1A1AA] hover:text-white transition-colors font-medium"
              >
                <FiGithub size={15} /> Source
              </a>
              {project.liveLink !== '#' && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-semibold"
                  style={{
                    background: 'linear-gradient(90deg, #8B5CF6, #06B6D4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  <FiExternalLink size={14} className="text-[#8B5CF6]" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative min-h-[280px] lg:min-h-0 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          {/* Blend from left on desktop */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, #111111 0%, rgba(17,17,17,0.5) 25%, transparent 55%), linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 40%)',
            }}
          />
          {/* Violet glow overlay on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: 'radial-gradient(circle at 60% 50%, rgba(124,58,237,0.10) 0%, transparent 70%)' }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Secondary project card ────────────────────────────────── */
function ProjectCard({ project, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
      whileHover={{ y: -4, borderColor: 'rgba(124,58,237,0.30)' }}
      className="group flex flex-col rounded-xl overflow-hidden border border-[#1F1F1F] transition-all duration-300"
      style={{ background: '#111111' }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #111111 0%, rgba(17,17,17,0.3) 50%, transparent 100%)' }}
        />
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)' }}
        />
        {project.ongoing && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0A0A0A]/80 backdrop-blur-sm border border-[#22C55E]/25">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"
              style={{ animation: 'glow-pulse 2s ease-in-out infinite' }}
            />
            <span className="text-[9px] font-mono font-bold text-[#22C55E] uppercase tracking-wider">Active</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-[9px] font-mono font-bold text-[#52525B] uppercase tracking-[0.12em]">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display font-bold text-white text-lg mb-2.5 leading-snug tracking-tight">
          {project.title}
        </h3>

        <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4 line-clamp-2 flex-1">
          {project.problem}
        </p>

        {project.impact && (
          <p className="text-xs font-semibold text-[#22C55E] mb-4">
            {project.impact[0]}
          </p>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.slice(0, 3).map(tech => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-mono text-[#52525B] bg-[#1A1A1A] border border-[#252525] rounded"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-0.5 text-[10px] font-mono text-[#52525B]">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-[#1F1F1F]">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-white transition-colors font-medium"
          >
            <FiGithub size={13} /> Code
          </a>
          {project.liveLink !== '#' ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#8B5CF6] hover:text-[#A78BFA] transition-colors"
            >
              <FiExternalLink size={12} /> Live
            </a>
          ) : (
            <span className="text-xs text-[#3A3A3A] font-mono">in progress</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export function Projects() {
  const sectionRef = useRef(null);
  const inView     = useInView(sectionRef, { once: true, margin: '-80px' });

  const featured = projects.find(p => p.featured);
  const rest     = projects.filter(p => !p.featured);

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 px-6 lg:px-8 overflow-hidden bg-[#0A0A0A]">

      {/* Ambient orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          top: '10%',
          right: '-15%',
          background: 'radial-gradient(circle, rgba(124,58,237,1) 0%, transparent 70%)',
          filter: 'blur(130px)',
          opacity: 0.055,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-4"
        >
          <span className="section-tag">02 / Work</span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.h2
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', letterSpacing: '-0.025em', lineHeight: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.7, ease: EASE }}
          >
            Selected Work
          </motion.h2>
          <motion.p
            className="text-[#A1A1AA] text-sm max-w-[260px] leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Systems built to perform under real-world conditions.
          </motion.p>
        </div>

        {/* Featured flagship */}
        {featured && <FeaturedProject project={featured} />}

        {/* 2-column grid */}
        <div className="grid sm:grid-cols-2 gap-5 mt-5">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
