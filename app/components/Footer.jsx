'use client';

export function Footer() {
  return (
    <footer
      className="py-10 px-6"
      style={{ borderTop: '1px solid #2A2A2A', background: '#0A0A0A' }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-[22px] tracking-widest"
          style={{ color: '#F0EDE8' }}
        >
          HL<span style={{ color: '#FF3D00' }}>.</span>
        </button>

        <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-center" style={{ color: '#555550' }}>
          © 2026 HARSH LEDWANI — NO TEMPLATES WERE HARMED.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-[10px] tracking-[0.14em] uppercase transition-colors"
          style={{ color: '#555550' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#FF3D00'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#555550'; }}
        >
          BACK TO TOP ↑
        </button>
      </div>
    </footer>
  );
}
