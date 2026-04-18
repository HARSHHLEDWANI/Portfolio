'use client';

export function SpecialEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }} aria-hidden>
      {/* Film grain noise overlay */}
      <div className="noise-overlay" />

      {/* Global ambient orb — top left */}
      <div
        style={{
          position: 'absolute',
          width: 800,
          height: 800,
          borderRadius: '50%',
          top: -300,
          left: -300,
          background: 'radial-gradient(circle, rgba(123,110,255,1) 0%, transparent 70%)',
          filter: 'blur(120px)',
          opacity: 0.05,
          animation: 'orb-drift 20s ease-in-out infinite',
        }}
      />

      {/* Global ambient orb — bottom right */}
      <div
        style={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          bottom: -200,
          right: -200,
          background: 'radial-gradient(circle, rgba(0,229,160,1) 0%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.035,
          animation: 'orb-drift 28s ease-in-out infinite reverse',
        }}
      />
    </div>
  );
}
