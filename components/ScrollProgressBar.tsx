'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        zIndex: 999,
        background: 'transparent',
      }}
    >
      <motion.div
        style={{
          height: '100%',
          background: 'var(--court-line)',
          width,
          transformOrigin: 'left',
        }}
      />
    </div>
  );
}
