'use client';

import { motion } from 'framer-motion';

const PUBLICATIONS = [
  {
    title:
      'SecureFlow: Detecting Fraudulent Payments in UPI Transactions through Blockchain and Machine Learning Models',
    venue: 'International Journal of Aquatic Research and Environmental Studies',
    meta: 'Electronic ISSN: 2980-7840 · 2025 · Peer-Reviewed',
    desc:
      'Peer-reviewed research on ML-driven anomaly detection and blockchain-based verification for securing digital payment ecosystems.',
    accent: '#00CFFF',
  },
];

const ACTIVITIES = [
  {
    role: 'Technical Workshop Instructor',
    tag: 'C Programming · Linux Fundamentals',
    desc:
      'Conducted workshops on C programming and Linux fundamentals for 50+ junior peers, strengthening foundational programming and command-line proficiency.',
    accent: '#00FF88',
  },
  {
    role: 'Robotics Workshop Organizer & Technical Fest Design Team',
    tag: 'Event Execution · Creative Direction',
    desc:
      'Organized robotics workshops for school students; contributed to college technical fest planning, creative direction, and event execution.',
    accent: '#FFB347',
  },
];

const cardReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ImpactSection() {
  return (
    <section id="impact" style={{ padding: '120px 0', background: '#080B14' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 80px' }} className="impact-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: '#3D4557', letterSpacing: '0.1em', marginBottom: 12 }}>
            05 / RECORD
          </p>
          <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: 52, fontWeight: 700, color: '#F0EDE8', margin: '0 0 12px', lineHeight: 1.1 }} className="impact-heading">
            Beyond the Code
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 16, color: '#8892A4' }}>
            Published research and the work that happens off the keyboard.
          </p>
        </motion.div>

        {/* Publications */}
        <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: '#3D4557', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
          Publications
        </p>
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 64 }}
        >
          {PUBLICATIONS.map((p) => (
            <motion.div
              key={p.title}
              variants={cardReveal}
              style={{
                background: '#0D1117',
                border: '1px solid rgba(255,255,255,0.07)',
                borderLeft: `3px solid ${p.accent}`,
                padding: '24px 28px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span style={{
                  fontFamily: 'var(--font-jetbrains), monospace', fontSize: 9,
                  color: p.accent, border: `1px solid ${p.accent}`,
                  padding: '2px 8px', borderRadius: 3, letterSpacing: '0.08em',
                }}>
                  PEER-REVIEWED
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: 19, fontWeight: 600, color: '#F0EDE8', margin: '0 0 8px', lineHeight: 1.35 }}>
                {p.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 14, color: '#C8CEDA', fontStyle: 'italic', margin: '0 0 4px' }}>
                {p.venue}
              </p>
              <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: '#3D4557', margin: '0 0 14px', letterSpacing: '0.04em' }}>
                {p.meta}
              </p>
              <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 14, color: '#8892A4', lineHeight: 1.7, margin: 0 }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership & Activities */}
        <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: '#3D4557', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
          Leadership &amp; Activities
        </p>
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}
          className="impact-cards"
        >
          {ACTIVITIES.map((a) => (
            <motion.div
              key={a.role}
              variants={cardReveal}
              style={{
                background: '#0D1117',
                border: '1px solid rgba(255,255,255,0.07)',
                borderTop: `3px solid ${a.accent}`,
                padding: '24px 28px',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: 18, fontWeight: 600, color: '#F0EDE8', margin: '0 0 6px', lineHeight: 1.3 }}>
                {a.role}
              </h3>
              <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 10, color: a.accent, letterSpacing: '0.06em', margin: '0 0 14px' }}>
                {a.tag}
              </p>
              <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 14, color: '#8892A4', lineHeight: 1.7, margin: 0 }}>
                {a.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .impact-inner { padding: 0 24px !important; }
          .impact-heading { font-size: 32px !important; }
          .impact-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
