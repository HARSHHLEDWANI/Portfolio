'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        height: 1,
        position: 'relative',
        overflow: 'hidden',
        background: 'rgba(255,215,0,0.15)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.6), transparent)',
          width: '60%',
          animation: inView ? 'goldSweep 0.8s ease-out forwards' : 'none',
        }}
      />
    </div>
  );
}
