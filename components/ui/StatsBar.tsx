'use client';

import CountUp from 'react-countup';

const STATS = [
  { end: 6,  suffix: '',  label: 'PROJECTS SHIPPED' },
  { end: 3,  suffix: '+', label: 'YEARS BUILDING' },
  { end: 20, suffix: '+', label: 'TECHNOLOGIES' },
];

export default function StatsBar() {
  return (
    <div style={{
      background: 'var(--bg-secondary, #0D1117)',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      padding: '40px 0',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
    }}>
      {STATS.map((stat, i) => (
        <div key={stat.label} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', padding: '0 40px' }}>
            <div style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontSize: 56, fontWeight: 800,
              color: '#FFD700', lineHeight: 1,
            }}>
              <CountUp end={stat.end} suffix={stat.suffix} enableScrollSpy scrollSpyOnce duration={2} />
            </div>
            <p style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 11, color: '#8892A4',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              marginTop: 6,
            }}>
              {stat.label}
            </p>
          </div>
          {i < STATS.length - 1 && (
            <div style={{ width: 1, height: 60, background: 'rgba(255,215,0,0.2)', flexShrink: 0 }} />
          )}
        </div>
      ))}
    </div>
  );
}
