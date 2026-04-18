'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9990] flex flex-col items-center justify-center"
          style={{ background: 'var(--bg-primary)' }}
        >
          {/* Initials */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold mb-8 select-none"
            style={{
              fontSize: '3rem',
              letterSpacing: '-0.04em',
              color: 'var(--accent-light)',
            }}
          >
            <span style={{ color: 'var(--accent)' }}>H</span>L
          </motion.div>

          {/* Progress bar */}
          <div
            className="w-24 h-[2px] rounded-full overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.07)' }}
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full"
              style={{ background: 'var(--accent)' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
