'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TermLine {
  text: string;
  color: string;
}

const PROMPT = 'harsh@court:~$ ';

const HELP_LINES: TermLine[] = [
  { text: 'available commands:', color: 'var(--neon-cyan)' },
  { text: '  ls           — list sections', color: 'var(--text-dim)' },
  { text: '  cd [section] — navigate to section', color: 'var(--text-dim)' },
  { text: '  cat resume   — download resume', color: 'var(--text-dim)' },
  { text: '  ping harsh   — open contact', color: 'var(--text-dim)' },
  { text: '  whoami       — about harsh', color: 'var(--text-dim)' },
  { text: '  clear        — clear terminal', color: 'var(--text-dim)' },
  { text: '  sudo hire harsh — ???', color: 'var(--neon-amber)' },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function FloatingTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<TermLine[]>([
    { text: 'HARSH.SYS terminal v1.0 — type "help" to begin', color: 'var(--text-dim)' },
  ]);
  const [input, setInput] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const push = (...lines: TermLine[]) => {
    setHistory((prev) => [...prev, ...lines]);
  };

  const processCommand = async (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();

    // Echo input
    push({ text: `${PROMPT}${cmd}`, color: 'var(--text-primary)' });

    if (trimmed === 'help') {
      push(...HELP_LINES);
    } else if (trimmed === 'ls') {
      push({ text: 'projects/  skills/  about/  contact/  resume.pdf', color: 'var(--text-primary)' });
    } else if (trimmed === 'cd projects' || trimmed === 'cd /projects') {
      push({ text: 'Navigating to /projects...', color: 'var(--neon-green)' });
      scrollToSection('projects');
    } else if (trimmed === 'cd skills' || trimmed === 'cd /skills') {
      push({ text: 'Navigating to /skills...', color: 'var(--neon-green)' });
      scrollToSection('skills');
    } else if (trimmed === 'cd about' || trimmed === 'cd /about') {
      push({ text: 'Navigating to /about...', color: 'var(--neon-green)' });
      scrollToSection('about');
    } else if (trimmed === 'cd contact' || trimmed === 'cd /contact') {
      push({ text: 'Navigating to /contact...', color: 'var(--neon-green)' });
      scrollToSection('contact');
    } else if (trimmed === 'cat resume' || trimmed === 'cat resume.pdf') {
      push(
        { text: 'Fetching resume.pdf...', color: 'var(--neon-cyan)' },
        { text: 'Download initiated. ✓', color: 'var(--neon-green)' }
      );
      setTimeout(() => window.open('/resume.pdf', '_blank'), 500);
    } else if (trimmed === 'ping harsh') {
      push(
        { text: 'PING harsh (ledwani830@gmail.com)', color: 'var(--neon-cyan)' },
        { text: 'Reply from harsh: time=18ms TTL=64', color: 'var(--neon-green)' },
        { text: 'Reply from harsh: time=12ms TTL=64', color: 'var(--neon-green)' },
        { text: '--- harsh ping statistics ---', color: 'var(--text-primary)' },
        { text: 'Packets: Sent=2, Received=2, Lost=0', color: 'var(--text-dim)' }
      );
      setTimeout(() => scrollToSection('contact'), 800);
    } else if (trimmed === 'whoami') {
      push(
        { text: 'Harsh Ledwani', color: 'var(--neon-green)' },
        { text: 'Role: Full-Stack Developer + AI Builder', color: 'var(--neon-cyan)' },
        { text: 'Stack: React · Next.js · Python · FastAPI · ML', color: 'var(--text-primary)' },
        { text: 'Status: Available for internships', color: 'var(--neon-amber)' },
        { text: 'Location: Pune, India', color: 'var(--text-dim)' }
      );
    } else if (trimmed === 'clear') {
      setHistory([]);
    } else if (trimmed === 'sudo hire harsh') {
      push({ text: '[sudo] password for recruiter: ••••••••', color: 'var(--neon-green)' });
      setTimeout(() => push({ text: 'Verifying credentials...', color: 'var(--neon-amber)' }), 500);
      setTimeout(() => {
        push(
          { text: '✓ Access granted. Excellent taste confirmed.', color: 'var(--neon-green)' },
          { text: 'Opening LinkedIn profile...', color: 'var(--neon-cyan)' },
          { text: '// confetti launched. welcome aboard.', color: 'var(--text-dim)' }
        );
        launchConfetti();
        setTimeout(() => window.open('https://linkedin.com/in/harsh-ledwani', '_blank'), 800);
      }, 1000);
    } else if (trimmed !== '') {
      push({
        text: `command not found: ${trimmed}. Type 'help' for commands.`,
        color: 'var(--text-dim)',
      });
    }
  };

  const launchConfetti = async () => {
    const confetti = (await import('canvas-confetti')).default;
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.9, x: 0.1 },
      colors: ['#FFD700', '#00FF88', '#00CFFF', '#FF6B35'],
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processCommand(input);
      setInput('');
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: 24, left: 24, zIndex: 1000 }}>
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.button
            key="pill"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => setIsOpen(true)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 12,
              color: 'var(--neon-green)',
              background: 'var(--bg-panel)',
              border: '1px solid rgba(0,255,136,0.3)',
              borderRadius: 6,
              padding: '8px 14px',
              cursor: 'pointer',
              boxShadow: '0 0 12px rgba(0,255,136,0.15)',
              height: 36,
              position: 'relative',
            }}
          >
            &gt; _
            {showTooltip && (
              <span
                style={{
                  position: 'absolute',
                  top: -28,
                  left: 0,
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: 10,
                  color: 'var(--text-dim)',
                  background: 'var(--bg-panel)',
                  border: '1px solid var(--border-dim)',
                  padding: '2px 8px',
                  borderRadius: 4,
                  whiteSpace: 'nowrap',
                }}
              >
                [ terminal ]
              </span>
            )}
          </motion.button>
        ) : (
          <motion.div
            key="terminal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: 380,
              height: 280,
              background: '#050810',
              border: '1px solid rgba(0,255,136,0.25)',
              borderRadius: '8px 8px 0 0',
              boxShadow: '0 -4px 30px rgba(0,255,136,0.1)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
            className="terminal-window"
          >
            {/* Header bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 12px',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                flexShrink: 0,
              }}
            >
              <div style={{ display: 'flex', gap: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5F57' }} />
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FEBC2E' }} />
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#28C840' }} />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: 11,
                  color: 'var(--text-dim)',
                }}
              >
                harsh@court:~
              </span>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-dim)',
                  cursor: 'pointer',
                  fontSize: 14,
                  padding: 0,
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>

            {/* Terminal body */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: 12,
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: 12,
                lineHeight: 1.6,
              }}
            >
              {history.map((line, i) => (
                <div key={i} style={{ color: line.color, wordBreak: 'break-word' }}>
                  {line.text}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px 12px',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: 12,
                  color: 'var(--neon-green)',
                  flexShrink: 0,
                }}
              >
                {PROMPT}
              </span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{
                  flex: 1,
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: 12,
                  color: 'var(--text-primary)',
                  caretColor: 'var(--neon-green)',
                }}
                spellCheck={false}
                autoComplete="off"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .terminal-window {
            width: 100vw !important;
            left: -24px !important;
            position: relative !important;
            border-radius: 8px 8px 0 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
