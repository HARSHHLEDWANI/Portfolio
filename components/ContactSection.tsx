'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const SUCCESS_LINES = [
  { text: '> Message delivered successfully.', color: 'var(--neon-green)' },
  { text: '> Recipient: ledwani830@gmail.com', color: 'var(--neon-cyan)' },
  { text: '> Response time: typically < 24h', color: 'var(--neon-amber)' },
  { text: '> Connection closed. Stay excellent.', color: 'var(--text-dim)' },
];

const LINKS = [
  {
    label: 'GITHUB →',
    sub: 'HARSHHLEDWANI',
    href: 'https://github.com/HARSHHLEDWANI',
  },
  {
    label: 'LINKEDIN →',
    sub: 'harsh-ledwani',
    href: 'https://www.linkedin.com/in/harsh-ledwani-097571219/',
  },
  {
    label: 'EMAIL →',
    sub: 'ledwani830@gmail.com',
    href: 'mailto:ledwani830@gmail.com',
  },
];

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [successLines, setSuccessLines] = useState<string[]>([]);
  const [dots, setDots] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');

    // Animated dots
    let d = 0;
    const dotsInterval = setInterval(() => {
      d = (d + 1) % 4;
      setDots('.'.repeat(d));
    }, 300);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      clearInterval(dotsInterval);
      setStatus('success');
      typeSuccessLines();
    } catch {
      clearInterval(dotsInterval);
      setStatus('error');
    }
  };

  const typeSuccessLines = () => {
    SUCCESS_LINES.forEach((_, i) => {
      setTimeout(() => {
        const text = SUCCESS_LINES[i].text;
        let j = 0;
        const interval = setInterval(() => {
          j++;
          setSuccessLines((prev) => {
            const next = [...prev];
            next[i] = text.slice(0, j);
            return next;
          });
          if (j >= text.length) clearInterval(interval);
        }, 30);
      }, i * 600);
    });
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid var(--border-dim)',
    borderRadius: 0,
    padding: '12px 16px',
    fontFamily: 'var(--font-jetbrains), monospace',
    fontSize: 13,
    color: 'var(--text-primary)',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-jetbrains), monospace',
    fontSize: 11,
    color: 'var(--text-dim)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: 8,
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }} className="section-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 64 }}
        >
          <p
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 11,
              color: 'var(--text-dim)',
              letterSpacing: '0.1em',
              marginBottom: 12,
            }}
          >
            05 / CONTACT
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontSize: 64,
              fontWeight: 800,
              color: 'var(--text-primary)',
              margin: '0 0 16px',
              lineHeight: 1,
            }}
            className="contact-heading"
          >
            Let&apos;s Build.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: 16,
              color: 'var(--text-secondary)',
              maxWidth: 480,
            }}
          >
            Open to internships, collaborations, and interesting problems. I reply within 24 hours.
          </p>
        </motion.div>

        {/* Two columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }} className="contact-grid">
          {/* LEFT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {status === 'success' ? (
              <div style={{ padding: '20px 0' }}>
                {successLines.map((line, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: 'var(--font-jetbrains), monospace',
                      fontSize: 13,
                      color: SUCCESS_LINES[i]?.color ?? 'var(--text-primary)',
                      margin: '6px 0',
                      lineHeight: 1.6,
                    }}
                  >
                    {line}
                    {i === successLines.length - 1 && line.length < SUCCESS_LINES[i]?.text.length && (
                      <span className="cursor-blink" style={{ opacity: 1 }}>▊</span>
                    )}
                  </p>
                ))}
                {successLines.length === SUCCESS_LINES.length && (
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setSuccessLines([]);
                      formRef.current?.reset();
                    }}
                    style={{
                      marginTop: 20,
                      fontFamily: 'var(--font-jetbrains), monospace',
                      fontSize: 12,
                      color: 'var(--neon-cyan)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      textDecoration: 'underline',
                    }}
                  >
                    Send another →
                  </button>
                )}
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <label style={labelStyle}>Name</label>
                  <input
                    name="user_name"
                    type="text"
                    placeholder="your name"
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--neon-cyan)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-dim)')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    name="user_email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--neon-cyan)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-dim)')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="what are you building?"
                    required
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--neon-cyan)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-dim)')}
                  />
                </div>

                {status === 'error' && (
                  <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 12, color: 'var(--neon-amber)', margin: 0 }}>
                    Transmission failed. Try emailing directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    width: '100%',
                    background: 'var(--neon-green)',
                    color: '#080B14',
                    fontFamily: 'var(--font-syne), sans-serif',
                    fontSize: 14,
                    fontWeight: 700,
                    padding: 14,
                    border: 'none',
                    borderRadius: 0,
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    letterSpacing: '0.05em',
                    opacity: status === 'sending' ? 0.8 : 1,
                    transition: 'opacity 0.2s',
                  }}
                >
                  {status === 'sending' ? `TRANSMITTING${dots}` : 'SEND MESSAGE →'}
                </button>
              </form>
            )}
          </motion.div>

          {/* RIGHT — Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="row-hover-fill"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '20px 0',
                  borderBottom: '1px solid var(--border-dim)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-syne), sans-serif',
                    fontSize: 22,
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--neon-cyan)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-primary)')}
                >
                  {link.label}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: 12,
                    color: 'var(--text-dim)',
                    marginTop: 4,
                  }}
                >
                  {link.sub}
                </span>
              </a>
            ))}

            {/* Resume block */}
            <div
              onClick={() => window.open('/resume.pdf', '_blank')}
              style={{
                marginTop: 24,
                background: 'var(--bg-panel)',
                border: '1px solid var(--border-dim)',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border-glow)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border-dim)')}
            >
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-syne), sans-serif',
                    fontSize: 15,
                    color: 'var(--text-primary)',
                    margin: '0 0 4px',
                  }}
                >
                  DOWNLOAD RESUME
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: 11,
                    color: 'var(--text-dim)',
                    margin: 0,
                  }}
                >
                  PDF · Updated 2026
                </p>
              </div>
              <span style={{ fontSize: 20, color: 'var(--neon-green)' }}>↓</span>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div style={{ paddingTop: 48, textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 11,
              color: 'var(--text-dim)',
              letterSpacing: '0.06em',
            }}
          >
            © 2026 HARSH LEDWANI · BUILT FROM SCRATCH · NO TEMPLATES
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .section-inner { padding: 0 24px !important; }
          .contact-heading { font-size: 40px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
