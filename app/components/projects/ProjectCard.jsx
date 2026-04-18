'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

const EASE = [0.22, 1, 0.36, 1];

export function ProjectCard({ project, featured = false, index = 0 }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-80, 80], [featured ? 6 : 10, featured ? -6 : -10]);
  const rotateY = useTransform(x, [-80, 80], [featured ? -6 : -10, featured ? 6 : 10]);

  const springConfig = { stiffness: 200, damping: 25 };
  const rx = useSpring(rotateX, springConfig);
  const ry = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.65, ease: EASE }}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full"
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry }}
        className="group relative h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
        whileHover={{ scale: 1.01 }}
      >
        {/* Card background */}
        <div
          className="absolute inset-0 rounded-2xl transition-all duration-500"
          style={{
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        />

        {/* Hover border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
          style={{
            border: '1px solid rgba(123,110,255,0.35)',
            boxShadow: 'inset 0 0 30px rgba(123,110,255,0.05)',
          }}
        />

        {/* Image area */}
        {project.image && (
          <div className={`relative overflow-hidden ${featured ? 'h-52' : 'h-40'}`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(6,6,10,0.9) 100%)' }} />

            {/* Ongoing badge */}
            {project.ongoing && (
              <div
                className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(0,229,160,0.15)', border: '1px solid rgba(0,229,160,0.30)', color: 'var(--accent-mint)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                Live / Ongoing
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col flex-1 p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags?.slice(0, featured ? 4 : 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide"
                style={{ background: 'rgba(123,110,255,0.12)', color: 'var(--accent-light)', border: '1px solid rgba(123,110,255,0.20)' }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3
            className="font-bold text-dark-text mb-2 group-hover:text-accent-light transition-colors"
            style={{ fontSize: featured ? '1.35rem' : '1.05rem', letterSpacing: '-0.01em' }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-dark-text-secondary leading-relaxed flex-1 mb-5" style={{ lineClamp: 3 }}>
            {project.description}
          </p>

          {/* Tech stack chips */}
          {project.techStack && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.techStack.slice(0, featured ? 6 : 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs text-dark-text-secondary font-medium"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div
            className="flex gap-3 pt-4"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            {project.githubLink && project.githubLink !== '#' && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-dark-text-secondary hover:text-dark-text transition-colors"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <FiGithub size={14} /> GitHub
              </motion.a>
            )}
            {project.liveLink && project.liveLink !== '#' && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all"
                style={{ background: 'var(--accent)' }}
              >
                Live Demo <FiArrowUpRight size={13} />
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectCardGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </div>
  );
}
