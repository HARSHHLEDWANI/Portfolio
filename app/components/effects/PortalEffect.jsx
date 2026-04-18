'use client';

import { motion } from 'framer-motion';
import { portalPulseVariants } from '@/lib/animations';

export function PortalEffect({ isActive = true, onClick }) {
  if (!isActive) return null;

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        onClick={onClick}
      >
        <motion.div
          className="w-96 h-96 rounded-full border-2 border-transparent"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,0,60,0.3) 0%, rgba(255,122,0,0.2) 50%, transparent 100%)',
            boxShadow: '0 0 40px rgba(255,0,60,0.4), inset 0 0 40px rgba(255,122,0,0.2)',
          }}
          animate={{
            scale: [1, 1.1, 1.2],
            opacity: [0.8, 0.6, 0.4, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />

        {/* Inner circle */}
        <motion.div
          className="absolute w-64 h-64 rounded-full border border-neon-red"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
            scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{
            background: 'radial-gradient(circle at center, rgba(0,212,255,0.1) 0%, rgba(255,0,60,0.1) 100%)',
            boxShadow: '0 0 20px rgba(0,212,255,0.3), inset 0 0 20px rgba(255,0,60,0.2)',
          }}
        />

        {/* Center glow */}
        <motion.div
          className="absolute w-32 h-32 rounded-full"
          animate={{
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'radial-gradient(circle at center, rgba(255,0,60,0.4) 0%, transparent 70%)',
            boxShadow: '0 0 30px rgba(255,0,60,0.5)',
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export function MiniPortal({ size = 'medium', delay = 0 }) {
  const sizes = {
    small: 'w-20 h-20',
    medium: 'w-32 h-32',
    large: 'w-48 h-48',
  };

  return (
    <motion.div
      className={`${sizes[size]} rounded-full relative flex-shrink-0`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6 }}
      style={{
        background: 'radial-gradient(circle at center, rgba(255,0,60,0.2) 0%, rgba(255,122,0,0.1) 50%, transparent 100%)',
        boxShadow: '0 0 20px rgba(255,0,60,0.3), inset 0 0 10px rgba(255,122,0,0.2)',
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full border border-neon-red opacity-40"
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  );
}
