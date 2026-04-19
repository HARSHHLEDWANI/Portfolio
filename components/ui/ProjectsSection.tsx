'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { PROJECTS } from '@/lib/projects';

const STATUS_COLOR: Record<string, string> = {
  LIVE: '#00CFFF', COMPLETED: '#00FF88', BUILDING: '#FFB347',
};

export default function ProjectsSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(p => p === id ? null : id);

  return (
    <section id="projects" style={{ padding: '120px 0', background: '#080B14' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 80px' }} className="projects-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
        >
          <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: '#3D4557', letterSpacing: '0.1em', marginBottom: 12 }}>
            02 / WORK
          </p>
          <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: 52, fontWeight: 700, color: '#F0EDE8', margin: '0 0 12px', lineHeight: 1.1 }} className="projects-heading">
            Selected Projects
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 16, color: '#8892A4', marginBottom: 64 }}>
            Systems built to perform under real conditions.
          </p>
        </motion.div>

        {/* List */}
        {PROJECTS.map((project, idx) => {
          const isOpen = openId === project.id;
          const isHovered = hoveredId === project.id;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
            >
              {/* Row */}
              <div
                className="row-hover-fill"
                onClick={() => toggle(project.id)}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 20,
                  padding: '20px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                  cursor: 'pointer', position: 'relative',
                }}
              >
                {/* Number */}
                <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 14, color: '#3D4557', width: 44, flexShrink: 0 }}>
                  {project.number}
                </span>

                {/* Middle */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: 20, fontWeight: 600, color: '#F0EDE8' }}>
                      {project.name}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-jetbrains), monospace',
                      fontSize: 10, color: STATUS_COLOR[project.status],
                      border: `1px solid ${STATUS_COLOR[project.status]}`,
                      padding: '2px 8px', borderRadius: 3,
                    }}>
                      {project.status}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {project.stack.map(tech => (
                      <span key={tech} style={{
                        fontFamily: 'var(--font-jetbrains), monospace',
                        fontSize: 10, color: '#8892A4',
                        border: '1px solid rgba(255,255,255,0.07)',
                        padding: '2px 8px', borderRadius: 4,
                      }}>{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <motion.span
                  animate={{ x: isHovered ? 4 : 0 }}
                  style={{ fontSize: 20, color: '#00CFFF', flexShrink: 0, transition: 'transform 0.2s', transform: isOpen ? 'rotate(90deg)' : 'none' }}
                >→</motion.span>

                {/* Hover preview image */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: 'absolute', right: 48, top: '50%',
                      transform: 'translateY(-50%)',
                      width: 180, height: 110, zIndex: -1,
                      borderRadius: 4, overflow: 'hidden', pointerEvents: 'none',
                    }}
                    className="preview-img"
                  >
                    <Image src={project.image} alt={project.name} fill style={{ objectFit: 'cover', opacity: 0.5 }} />
                  </motion.div>
                )}
              </div>

              {/* Expanded panel */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{
                      background: `repeating-linear-gradient(
                        -45deg,
                        transparent,
                        transparent 10px,
                        rgba(255,255,255,0.015) 10px,
                        rgba(255,255,255,0.015) 11px
                      ), #1a3a1a`,
                      borderLeft: '3px solid #2d5a2d',
                      padding: '20px 24px', marginBottom: 0,
                      position: 'relative', overflow: 'hidden',
                      boxShadow: 'inset 0 0 60px rgba(0,0,0,0.4)',
                    }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginBottom: 20 }} className="panel-grid">
                        {[
                          { label: 'Problem', text: project.problem },
                          { label: 'Solution', text: project.solution },
                          { label: 'Impact', text: project.impact },
                        ].map(({ label, text }) => (
                          <div key={label}>
                            <span style={{
                              fontFamily: 'var(--font-syne), sans-serif',
                              fontStyle: 'italic',
                              fontSize: 10, color: 'rgba(255,255,255,0.5)',
                              textTransform: 'uppercase', letterSpacing: '0.15em',
                              display: 'block', marginBottom: 6,
                            }}>
                              → {label}
                            </span>
                            <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.6 }}>
                              {text}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', gap: 12 }}>
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                            style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: 13, color: '#fff', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '8px 20px', textDecoration: 'none', borderRadius: 0 }}
                          >GitHub →</a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer"
                            style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: 13, color: '#fff', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '8px 20px', textDecoration: 'none', borderRadius: 0 }}
                          >PLAY →</a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-inner { padding: 0 24px !important; }
          .projects-heading { font-size: 32px !important; }
          .preview-img { display: none !important; }
          .panel-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
