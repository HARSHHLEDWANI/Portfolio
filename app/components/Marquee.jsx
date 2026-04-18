'use client';

const ITEMS = [
  'FULL-STACK DEVELOPMENT',
  'MACHINE LEARNING',
  'REAL-TIME SYSTEMS',
  'BLOCKCHAIN',
  'FRAUD DETECTION',
  'AI INFRASTRUCTURE',
  'SECURE SYSTEMS',
  'DATA ENGINEERING',
];

const SEPARATOR = ' ✦ ';
const TRACK = ITEMS.map(item => item + SEPARATOR).join('');

export function Marquee() {
  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        borderTop: '1px solid #FF3D00',
        borderBottom: '1px solid #FF3D00',
        background: '#0A0A0A',
      }}
    >
      <div
        className="marquee-track whitespace-nowrap"
        aria-hidden
        style={{
          fontFamily: 'var(--font-ibm-mono)',
          fontSize: '11px',
          letterSpacing: '0.16em',
          color: '#555550',
          textTransform: 'uppercase',
        }}
      >
        {/* Duplicated for seamless loop */}
        <span>{TRACK}{TRACK}</span>
      </div>
    </div>
  );
}
