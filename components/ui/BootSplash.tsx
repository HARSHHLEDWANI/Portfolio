'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINES = [
  { text: 'HARSH.SYS v2.6.1 — boot sequence initiated', color: '#00FF88' },
  { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', color: '#3D4557' },
  { text: '[████████████] Loading identity......... HL', color: '#F0EDE8' },
  { text: '[████████████] Loading projects.......... OK', color: '#F0EDE8' },
  { text: '[████████████] Loading skills............ OK', color: '#F0EDE8' },
  { text: '[████████████] Mounting resume........... PDF', color: '#FFB347' },
  { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', color: '#3D4557' },
  { text: 'All systems online. Welcome to the court. 🏀', color: '#00FF88' },
];

interface Props {
  onComplete: () => void;
}

export default function BootSplash({ onComplete }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem('harsh_booted')) {
        onComplete();
        return;
      }
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleCount(i + 1), i * 200));
    });

    timers.push(setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        sessionStorage.setItem('harsh_booted', '1');
        onComplete();
      }, 600);
    }, LINES.length * 200 + 500));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: '#080B14',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <button
            onClick={() => {
              sessionStorage.setItem('harsh_booted', '1');
              onComplete();
            }}
            style={{
              position: 'fixed', top: 24, right: 24,
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 11, color: '#3D4557',
              background: 'none', border: 'none', cursor: 'pointer',
              letterSpacing: '0.1em',
            }}
          >
            [ SKIP ]
          </button>

          <div style={{ maxWidth: 500, width: '100%', padding: '0 24px' }}>
            {LINES.slice(0, visibleCount).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: 13, color: line.color,
                  margin: '4px 0', lineHeight: 1.6,
                }}
              >
                {line.text}
              </motion.p>
            ))}
            {visibleCount < LINES.length && (
              <span style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: 13, color: '#00FF88',
                animation: 'blink 1s step-end infinite',
              }}>▊</span>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
