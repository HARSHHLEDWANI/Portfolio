'use client';

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9997] h-[2px] transition-all duration-150 pointer-events-none"
      style={{
        width: `${progress}%`,
        background: 'linear-gradient(90deg, var(--accent) 0%, var(--accent-mint) 100%)',
      }}
    />
  );
}
