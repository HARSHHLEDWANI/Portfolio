'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

const CATEGORIES = [
  {
    id: 'languages',
    label: 'Languages',
    skills: ['C++', 'Java', 'Python', 'JavaScript', 'C'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'HTML5 / CSS3'],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST API Design', 'FastAPI', 'API Integration'],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase'],
  },
  {
    id: 'ml',
    label: 'ML & AI',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    skills: ['AWS (EC2)', 'Git / GitHub', 'Linux / Ubuntu', 'CI/CD Concepts', 'Virtualization'],
  },
  {
    id: 'security',
    label: 'Security',
    skills: ['Cryptography (RSA, AES)', 'Hashing (SHA)', 'Network Security', 'Authentication Systems', 'IDS'],
  },
  {
    id: 'distributed',
    label: 'Distributed Systems',
    skills: ['Synchronization', 'Deadlock Handling', 'Fault Tolerance', 'Distributed Architecture'],
  },
];

export function Skills() {
  const [selected, setSelected] = useState('all');
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const displayed = selected === 'all' ? CATEGORIES : CATEGORIES.filter((c) => c.id === selected);

  return (
    <section id="skills" ref={sectionRef} className="relative py-32 px-6 lg:px-8 overflow-hidden">
      {/* Ambient orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          borderRadius: '50%',
          top: '30%',
          left: '-25%',
          background: 'radial-gradient(circle, rgba(123,110,255,1) 0%, transparent 70%)',
          filter: 'blur(120px)',
          opacity: 0.055,
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
          <span className="section-tag">03 / Skills</span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.h2
            className="font-bold text-dark-text"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.025em' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.7, ease: EASE }}
          >
            Tools of the trade
          </motion.h2>
          <motion.p
            className="text-dark-text-secondary text-base max-w-xs"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.14, duration: 0.6, ease: EASE }}
          >
            Technologies I use to build robust, scalable systems.
          </motion.p>
        </div>

        {/* Category filter tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
        >
          <button
            onClick={() => setSelected('all')}
            className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
            style={{
              background: selected === 'all' ? 'var(--accent)' : 'rgba(255,255,255,0.04)',
              color: selected === 'all' ? '#fff' : 'var(--text-secondary)',
              border: selected === 'all' ? 'none' : '1px solid rgba(255,255,255,0.07)',
            }}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelected(cat.id)}
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              style={{
                background: selected === cat.id ? 'var(--accent)' : 'rgba(255,255,255,0.04)',
                color: selected === cat.id ? '#fff' : 'var(--text-secondary)',
                border: selected === cat.id ? 'none' : '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {displayed.map((cat, ci) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.32, delay: ci * 0.04, ease: EASE }}
                className="group p-5 rounded-2xl transition-all"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                whileHover={{
                  borderColor: 'rgba(123,110,255,0.25)',
                  background: 'rgba(123,110,255,0.04)',
                }}
              >
                <h3
                  className="text-[10px] font-bold uppercase tracking-widest mb-4 transition-colors"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: si * 0.04 }}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium text-dark-text-secondary cursor-default transition-all"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
