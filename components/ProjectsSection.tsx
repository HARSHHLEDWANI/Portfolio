'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { projects, type ProjectStatus } from '../lib/projects';

const STATUS_STYLE: Record<ProjectStatus, { color: string; border: string }> = {
  BUILDING:  { color: 'var(--neon-amber)', border: '1px solid var(--neon-amber)' },
  COMPLETED: { color: 'var(--neon-green)', border: '1px solid var(--neon-green)' },
  LIVE:      { color: 'var(--neon-cyan)',  border: '1px solid var(--neon-cyan)' },
};

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const toggle = (id: string) => setExpandedId((prev) => (prev === id ? null : id));

  return (
    <section
      id="projects"
      className="section-padding"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }} className="section-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 11,
              color: 'var(--text-dim)',
              letterSpacing: '0.1em',
              marginBottom: 12,
            }}
          >
            02 / WORK
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontSize: 48,
              fontWeight: 700,
              color: 'var(--text-primary)',
              margin: '0 0 12px',
              lineHeight: 1.1,
            }}
            className="section-heading"
          >
            Selected Projects
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: 16,
              color: 'var(--text-secondary)',
              marginBottom: 64,
            }}
          >
            Systems built to perform under real conditions.
          </p>
        </motion.div>

        {/* Project list */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative' }}
        >
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;
            const isHovered = hoveredId === project.id;
            const statusStyle = STATUS_STYLE[project.status];

            return (
              <div key={project.id}>
                {/* Row */}
                <div
                  className="row-hover-fill"
                  onClick={() => toggle(project.id)}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    padding: '24px 0',
                    borderBottom: '1px solid var(--border-dim)',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                >
                  {/* Number */}
                  <span
                    style={{
                      fontFamily: 'var(--font-jetbrains), monospace',
                      fontSize: 14,
                      color: 'var(--text-dim)',
                      width: 40,
                      flexShrink: 0,
                    }}
                  >
                    {project.number}
                  </span>

                  {/* Middle */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        marginBottom: 8,
                        flexWrap: 'wrap',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-syne), sans-serif',
                          fontSize: 20,
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                        }}
                      >
                        {project.name}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-jetbrains), monospace',
                          fontSize: 10,
                          color: statusStyle.color,
                          border: statusStyle.border,
                          padding: '2px 8px',
                          borderRadius: 4,
                          letterSpacing: '0.06em',
                          animation: project.status === 'BUILDING' ? 'pulse-dot 1.5s ease-in-out infinite' : 'none',
                        }}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Stack tags */}
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontFamily: 'var(--font-jetbrains), monospace',
                            fontSize: 10,
                            color: 'var(--text-secondary)',
                            border: '1px solid var(--border-dim)',
                            padding: '2px 8px',
                            borderRadius: 4,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <motion.span
                    animate={{ x: isHovered ? 4 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      fontSize: 20,
                      color: 'var(--neon-cyan)',
                      flexShrink: 0,
                      transform: isExpanded ? 'rotate(90deg)' : 'none',
                      transition: 'transform 0.2s',
                    }}
                  >
                    →
                  </motion.span>

                  {/* Preview image on hover (desktop) */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: 'absolute',
                        right: 60,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 160,
                        height: 100,
                        zIndex: -1,
                        borderRadius: 4,
                        overflow: 'hidden',
                        pointerEvents: 'none',
                      }}
                      className="preview-img"
                    >
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        style={{ objectFit: 'cover', opacity: 0.6 }}
                        loading="lazy"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Expanded panel */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        style={{
                          background: 'var(--bg-panel)',
                          borderLeft: '2px solid var(--neon-cyan)',
                          padding: 20,
                          marginBottom: 0,
                        }}
                      >
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginBottom: 20 }} className="panel-grid">
                          {[
                            { label: 'Problem', text: project.problem },
                            { label: 'Solution', text: project.solution },
                            { label: 'Impact', text: project.impact },
                          ].map(({ label, text }) => (
                            <div key={label}>
                              <span
                                style={{
                                  fontFamily: 'var(--font-jetbrains), monospace',
                                  fontSize: 10,
                                  color: 'var(--neon-cyan)',
                                  letterSpacing: '0.1em',
                                  textTransform: 'uppercase',
                                  display: 'block',
                                  marginBottom: 6,
                                }}
                              >
                                {label}:
                              </span>
                              <p
                                style={{
                                  fontFamily: 'var(--font-dm-sans), sans-serif',
                                  fontSize: 13,
                                  color: 'var(--text-secondary)',
                                  margin: 0,
                                  lineHeight: 1.6,
                                }}
                              >
                                {text}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Links */}
                        <div style={{ display: 'flex', gap: 12 }}>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                fontFamily: 'var(--font-jetbrains), monospace',
                                fontSize: 12,
                                color: 'var(--text-secondary)',
                                border: '1px solid var(--border-dim)',
                                padding: '6px 16px',
                                borderRadius: 0,
                                textDecoration: 'none',
                                transition: 'color 0.2s, border-color 0.2s',
                              }}
                              onMouseEnter={(e) => {
                                (e.target as HTMLElement).style.color = 'var(--neon-cyan)';
                                (e.target as HTMLElement).style.borderColor = 'var(--neon-cyan)';
                              }}
                              onMouseLeave={(e) => {
                                (e.target as HTMLElement).style.color = 'var(--text-secondary)';
                                (e.target as HTMLElement).style.borderColor = 'var(--border-dim)';
                              }}
                            >
                              GitHub →
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                fontFamily: 'var(--font-jetbrains), monospace',
                                fontSize: 12,
                                color: 'var(--neon-cyan)',
                                border: '1px solid var(--neon-cyan)',
                                padding: '6px 16px',
                                borderRadius: 0,
                                textDecoration: 'none',
                              }}
                            >
                              Live ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .section-inner { padding: 0 24px !important; }
          .section-heading { font-size: 32px !important; }
          .preview-img { display: none !important; }
          .panel-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
