'use client';

import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

export function SectionHeader({ subtitle, title, description }) {
  return (
    <div className="mb-14">
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-4"
        >
          <span className="section-tag">{subtitle}</span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
        className="font-bold text-dark-text mb-4"
        style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.025em' }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.14, ease: EASE }}
          className="text-lg text-dark-text-secondary max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
