'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const EASE = [0.16, 1, 0.3, 1];

const LINKS = [
  {
    label: 'GITHUB',
    handle: 'HARSHHLEDWANI',
    href: 'https://github.com/HARSHHLEDWANI',
    desc: 'Source code & projects',
  },
  {
    label: 'LINKEDIN',
    handle: 'HARSH-LEDWANI',
    href: 'https://linkedin.com/in/harsh-ledwani',
    desc: 'Professional profile',
  },
  {
    label: 'EMAIL',
    handle: 'LEDWANI830@GMAIL.COM',
    href: 'mailto:ledwani830@gmail.com',
    desc: 'Best for serious inquiries',
  },
];

function LinkRow({ link, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={link.href}
      target={link.href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className="relative block overflow-hidden"
      style={{ borderBottom: '1px solid #2A2A2A' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.08, duration: 0.55, ease: EASE }}
    >
      {/* Fill effect */}
      <div
        className="project-fill absolute inset-0"
        style={{ background: '#141414' }}
      />

      <div className="relative z-10 flex items-center justify-between py-6">
        <div className="flex items-center gap-6">
          <span className="font-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: hovered ? '#FF3D00' : '#F0EDE8', letterSpacing: '0.04em', transition: 'color 0.25s' }}>
            {link.label}
          </span>
          <span className="hidden sm:block font-mono text-[10px] tracking-[0.12em]" style={{ color: '#555550' }}>
            {link.desc}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:block font-mono text-[11px] tracking-[0.1em]" style={{ color: '#555550' }}>
            {link.handle}
          </span>
          <span
            className="text-2xl transition-all duration-200"
            style={{
              color: hovered ? '#FF3D00' : '#2A2A2A',
              transform: hovered ? 'translateX(6px)' : 'translateX(0)',
            }}
          >
            →
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export function Contact() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 px-6 overflow-hidden" style={{ background: '#0A0A0A' }}>

      {/* Ghost number */}
      <div className="section-ghost absolute top-0 right-0 pointer-events-none select-none" aria-hidden>
        04
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="rule-vermillion mb-14" style={{ width: '60px' }} />

        <motion.p
          className="section-tag mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          04 / CONTACT
        </motion.p>

        <motion.h2
          className="font-display mb-4"
          style={{ fontSize: 'clamp(4rem, 12vw, 11rem)', color: '#F0EDE8', letterSpacing: '0.03em', lineHeight: 0.9 }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
        >
          LET'S
          <br />
          <span style={{ color: '#FF3D00' }}>BUILD.</span>
        </motion.h2>

        <motion.p
          className="font-sans text-base mb-20 max-w-md"
          style={{ color: '#888882' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.22, duration: 0.6, ease: EASE }}
        >
          Open to internships, collabs, and interesting problems.
          Reply within 24 hours.
        </motion.p>

        {/* Link rows */}
        <div style={{ borderTop: '1px solid #2A2A2A' }}>
          {LINKS.map((link, i) => (
            <LinkRow key={link.label} link={link} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
