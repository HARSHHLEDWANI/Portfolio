'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINES = [
  { text: 'HARSH.SYS v2.6.1 — boot sequence initiated', color: 'var(--neon-green)' },
  { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', color: 'var(--text-dim)' },
  { text: '[████████████] Loading identity......... HL', color: 'var(--text-primary)' },
  { text: '[████████████] Loading projects.......... OK', color: 'var(--text-primary)' },
  { text: '[████████████] Loading skills............ OK', color: 'var(--text-primary)' },
  { text: '[████████████] Mounting resume........... PDF', color: 'var(--neon-amber)' },
  { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', color: 'var(--text-dim)' },
  { text: 'All systems online. Welcome to the court.', color: 'var(--neon-green)' },
];

export default function BootSplash({ onDone }: { onDone: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    LINES.forEach((_, i) => {
      timers.push(
        setTimeout(() => setVisibleLines(i + 1), 200 * (i + 1))
      );
    });

    // After all lines: 400ms pause then fade
    const totalDelay = 200 * LINES.length + 400;
    timers.push(setTimeout(() => setFadeOut(true), totalDelay));
    timers.push(setTimeout(() => onDone(), totalDelay + 600));

    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  const skip = () => {
    setFadeOut(true);
    setTimeout(onDone, 600);
  };

  return (
    <AnimatePresence>
      {!fadeOut ? (
        <motion.div
          key="boot"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--bg-primary)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Skip button */}
          <button
            onClick={skip}
            style={{
              position: 'absolute',
              top: 24,
              right: 24,
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 11,
              color: 'var(--text-dim)',
              background: 'none',
              border: '1px solid var(--text-dim)',
              padding: '4px 12px',
              cursor: 'pointer',
              borderRadius: 4,
              letterSpacing: '0.08em',
            }}
          >
            [ SKIP ]
          </button>

          <div style={{ width: '100%', maxWidth: 560, padding: '0 24px' }}>
            {LINES.slice(0, visibleLines).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: 13,
                  color: line.color,
                  margin: '4px 0',
                  lineHeight: 1.6,
                  whiteSpace: 'pre',
                }}
              >
                {line.text}
              </motion.p>
            ))}
            {visibleLines < LINES.length && (
              <span
                style={{
                  display: 'inline-block',
                  width: 8,
                  height: 14,
                  background: 'var(--neon-green)',
                  marginTop: 4,
                  animation: 'blink 1s step-end infinite',
                }}
              />
            )}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
