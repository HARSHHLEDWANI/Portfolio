'use client';

import CountUp from 'react-countup';

const STATS = [
  { value: 6, suffix: '', label: 'PROJECTS SHIPPED' },
  { value: 3, suffix: '+', label: 'YEARS BUILDING' },
  { value: 20, suffix: '+', label: 'TECHNOLOGIES' },
];

export default function StatsBar() {
  return (
    <div
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-dim)',
        borderBottom: '1px solid var(--border-dim)',
        padding: '48px 0',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
        }}
        className="stats-container"
      >
        {STATS.map((stat, i) => (
          <div key={stat.label} style={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            {/* Stat */}
            <div style={{ textAlign: 'center', padding: '0 40px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-syne), sans-serif',
                  fontSize: 56,
                  fontWeight: 800,
                  color: 'var(--court-line)',
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: 11,
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </div>
            </div>

            {/* Divider (not after last) */}
            {i < STATS.length - 1 && (
              <div
                style={{
                  width: 1,
                  height: 60,
                  background: 'rgba(255,215,0,0.2)',
                  flexShrink: 0,
                }}
              />
            )}
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-container {
            flex-direction: column !important;
            gap: 24px !important;
          }
          .stats-container > div > div:last-child {
            width: 60px !important;
            height: 1px !important;
          }
        }
      `}</style>
    </div>
  );
}
