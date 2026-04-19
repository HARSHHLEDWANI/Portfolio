'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Line { text: string; color: string }

const DEFAULT_LINES: Line[] = [
  { text: 'HARSH.SYS terminal v2.6.1', color: '#3D4557' },
  { text: 'Type "help" for available commands.', color: '#3D4557' },
];

export default function FloatingTerminal() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<Line[]>(DEFAULT_LINES);
  const [input, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const push = (lines: Line[]) => setHistory(prev => [...prev, ...lines]);

  const processCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();

    push([{ text: `harsh@court:~$ ${raw.trim()}`, color: '#8892A4' }]);

    if (cmd === 'help') {
      push([
        { text: 'available commands:', color: '#00CFFF' },
        { text: '  ls           — list sections', color: '#3D4557' },
        { text: '  cd [section] — navigate', color: '#3D4557' },
        { text: '  cat resume   — download PDF', color: '#3D4557' },
        { text: '  ping harsh   — open contact', color: '#3D4557' },
        { text: '  whoami       — about harsh', color: '#3D4557' },
        { text: '  clear        — clear terminal', color: '#3D4557' },
        { text: '  sudo hire harsh — [CLASSIFIED]', color: '#FFB347' },
      ]);
    } else if (cmd === 'ls') {
      push([{ text: 'projects/  skills/  about/  contact/  resume.pdf', color: '#F0EDE8' }]);
    } else if (cmd === 'cd projects' || cmd === 'cd /projects') {
      push([{ text: 'Navigating to /projects...', color: '#00FF88' }]);
      setTimeout(() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }), 300);
    } else if (cmd === 'cd skills' || cmd === 'cd /skills') {
      push([{ text: 'Navigating to /skills...', color: '#00FF88' }]);
      setTimeout(() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' }), 300);
    } else if (cmd === 'cd about' || cmd === 'cd /about') {
      push([{ text: 'Navigating to /about...', color: '#00FF88' }]);
      setTimeout(() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }), 300);
    } else if (cmd === 'cd contact' || cmd === 'cd /contact') {
      push([
        { text: 'Navigating to /contact...', color: '#00FF88' },
        { text: 'Opening contact form.', color: '#00CFFF' },
      ]);
      setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 300);
    } else if (cmd === 'cat resume' || cmd === 'cat resume.pdf') {
      push([
        { text: 'Fetching resume.pdf...', color: '#00CFFF' },
        { text: 'Download initiated. ✓', color: '#00FF88' },
      ]);
      setTimeout(() => window.open('/resume.pdf', '_blank'), 500);
    } else if (cmd === 'ping harsh') {
      push([
        { text: 'PING harsh (ledwani830@gmail.com)', color: '#F0EDE8' },
        { text: 'Reply: time=18ms TTL=64', color: '#00FF88' },
        { text: 'Reply: time=12ms TTL=64', color: '#00FF88' },
        { text: 'Packets: Sent=2, Received=2, Lost=0 (0%)', color: '#3D4557' },
      ]);
      setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 500);
    } else if (cmd === 'whoami') {
      push([
        { text: 'Harsh Ledwani', color: '#00FF88' },
        { text: 'Role: Full-Stack Developer + AI Builder', color: '#00CFFF' },
        { text: 'Stack: React · Next.js · Python · FastAPI · ML', color: '#F0EDE8' },
        { text: 'Status: Open to internships 2026', color: '#FFB347' },
        { text: 'Location: Pune, India 🏀', color: '#3D4557' },
      ]);
    } else if (cmd === 'clear') {
      setHistory([]);
    } else if (cmd === 'sudo hire harsh') {
      const timed = [
        { delay: 0,    line: { text: '[sudo] password for recruiter: ••••••••', color: '#00FF88' } },
        { delay: 600,  line: { text: 'Verifying credentials...', color: '#FFB347' } },
        { delay: 1200, line: { text: '✓ Access granted. Excellent taste confirmed.', color: '#00FF88' } },
        { delay: 1600, line: { text: 'Opening LinkedIn...', color: '#00CFFF' } },
        { delay: 1800, line: { text: '// confetti launched. welcome aboard.', color: '#3D4557' } },
      ];
      timed.forEach(({ delay, line }) => setTimeout(() => push([line]), delay));
      setTimeout(() => {
        import('canvas-confetti').then(m => m.default({
          particleCount: 150, spread: 80,
          colors: ['#FFD700', '#00FF88', '#00CFFF', '#FF6B35'],
        }));
        window.open('https://www.linkedin.com/in/harsh-ledwani-097571219/', '_blank');
      }, 2000);
    } else {
      push([{ text: `Command not found: ${raw.trim()}. Type "help" for options.`, color: '#FF3D3D' }]);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: 24, left: 24, zIndex: 1000 }}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            style={{
              width: 'min(380px, calc(100vw - 48px))',
              height: 280,
              background: '#050810',
              border: '1px solid rgba(0,255,136,0.25)',
              borderRadius: '8px 8px 0 0',
              display: 'flex', flexDirection: 'column',
              marginBottom: 4,
            }}
          >
            {/* Header bar */}
            <div style={{
              display: 'flex', alignItems: 'center',
              padding: '8px 12px',
              background: '#0a0f1a',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}>
              {[['#ff5f57',6],['#febc2e',6],['#28c840',6]].map(([color, size], i) => (
                <div key={i} style={{ width: size as number, height: size as number, borderRadius: '50%', background: color as string, marginRight: 6 }} />
              ))}
              <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: '#3D4557', marginLeft: 8, flex: 1 }}>
                harsh@court:~
              </span>
              <button onClick={() => setOpen(false)} style={{ color: '#8892A4', background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, lineHeight: 1 }}>×</button>
            </div>

            {/* History */}
            <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: 12, display: 'flex', flexDirection: 'column', gap: 2 }}>
              {history.map((line, i) => (
                <div key={i} style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, lineHeight: 1.6, color: line.color }}>
                  {line.text}
                </div>
              ))}
            </div>

            {/* Input row */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: '#00FF88', flexShrink: 0 }}>harsh@court:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && input.trim()) {
                    processCommand(input);
                    setValue('');
                  }
                }}
                style={{
                  flex: 1, background: 'none', border: 'none',
                  color: '#F0EDE8',
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: 11, outline: 'none',
                }}
                placeholder=""
                autoComplete="off"
                spellCheck={false}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle pill */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: 12, color: '#00FF88',
          background: '#111520',
          border: '1px solid rgba(0,255,136,0.3)',
          borderRadius: 6, padding: '8px 16px',
          cursor: 'pointer',
          boxShadow: '0 0 16px rgba(0,255,136,0.12)',
        }}
      >
        {open ? '[ _ ]' : '> _'}
      </button>
    </div>
  );
}
