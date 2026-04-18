'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

const SKILL_GROUPS = [
  {
    label: 'FRONTEND',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'HTML5 / CSS3', 'TypeScript'],
  },
  {
    label: 'BACKEND',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'WebSockets'],
  },
  {
    label: 'ML & AI',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'LLM APIs'],
  },
  {
    label: 'LANGUAGES',
    skills: ['Python', 'JavaScript', 'C++', 'Java', 'C', 'SQL'],
  },
  {
    label: 'DATABASES',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase', 'Redis'],
  },
  {
    label: 'CLOUD',
    skills: ['AWS EC2', 'Git / GitHub', 'Linux', 'CI/CD', 'Docker'],
  },
  {
    label: 'SECURITY',
    skills: ['RSA / AES', 'SHA Hashing', 'IDS', 'Auth Systems', 'Network Security'],
  },
  {
    label: 'SYSTEMS',
    skills: ['Distributed Systems', 'Deadlock Handling', 'Fault Tolerance', 'Blockchain'],
  },
];

// Flatten into card list with rotation alternation
const ALL_CARDS = SKILL_GROUPS.flatMap((group, gi) =>
  group.skills.map((skill, si) => ({
    skill,
    label: group.label,
    rotation: ((gi + si) % 2 === 0 ? -1.5 : 1.5),
  }))
);

function SkillCard({ skill, label, rotation }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="flex-shrink-0 flex flex-col justify-between p-4 select-none"
      style={{
        width: 130,
        height: 200,
        background: '#0F0F0F',
        border: '1px solid #2A2A2A',
        rotate: hovered ? 0 : rotation,
        scale: hovered ? 1.05 : 1,
        borderColor: hovered ? '#FF3D00' : '#2A2A2A',
        transition: 'transform 0.2s var(--ease-out), border-color 0.2s',
      }}
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.14em]" style={{ color: '#555550' }}>
        {label}
      </span>
      <span className="font-sans text-sm font-medium" style={{ color: '#F0EDE8' }}>
        {skill}
      </span>
      <div
        className="h-0.5 origin-left"
        style={{
          background: '#C8FF00',
          transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 0.2s var(--ease-out)',
        }}
      />
    </motion.div>
  );
}

export function Skills() {
  const sectionRef = useRef(null);
  const stripRef = useRef(null);
  const containerRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const calc = () => {
      if (stripRef.current && containerRef.current) {
        const overflow = stripRef.current.scrollWidth - containerRef.current.clientWidth;
        setConstraints({ left: Math.max(-overflow, -5000), right: 0 });
      }
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-32 overflow-hidden" style={{ background: '#0A0A0A' }}>

      {/* Ghost number */}
      <div className="section-ghost absolute top-0 right-0 pointer-events-none select-none" aria-hidden>
        03
      </div>

      <div className="max-w-[1200px] mx-auto px-6 mb-14">
        <div className="rule-vermillion mb-14" style={{ width: '60px' }} />

        <motion.p
          className="section-tag mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          03 / SKILLS
        </motion.p>

        <motion.h2
          className="font-display"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', color: '#F0EDE8', letterSpacing: '0.03em' }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
        >
          TOOLS OF<br />THE TRADE
        </motion.h2>

        <motion.p
          className="font-sans mt-6 text-base max-w-sm"
          style={{ color: '#555550' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Drag to explore · {ALL_CARDS.length} technologies
        </motion.p>
      </div>

      {/* Film reel strip */}
      <motion.div
        ref={containerRef}
        className="overflow-hidden px-6"
        style={{ cursor: 'grab' }}
        whileTap={{ cursor: 'grabbing' }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.div
          ref={stripRef}
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.04}
          dragTransition={{ bounceStiffness: 200, bounceDamping: 30 }}
          className="flex gap-3 py-4"
          style={{ width: 'max-content' }}
        >
          {ALL_CARDS.map(({ skill, label, rotation }, i) => (
            <SkillCard key={`${skill}-${i}`} skill={skill} label={label} rotation={rotation} />
          ))}
        </motion.div>
      </motion.div>

      {/* Group labels row */}
      <div className="max-w-[1200px] mx-auto px-6 mt-10">
        <div className="flex flex-wrap gap-3">
          {SKILL_GROUPS.map((g) => (
            <span
              key={g.label}
              className="font-mono text-[10px] uppercase tracking-[0.14em] px-3 py-1.5"
              style={{
                border: '1px solid #2A2A2A',
                color: '#555550',
              }}
            >
              {g.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
