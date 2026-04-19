'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const SUCCESS_LINES = [
  { text: '> Message delivered successfully.', color: '#00FF88' },
  { text: '> Recipient: ledwani830@gmail.com', color: '#00CFFF' },
  { text: '> Response time: typically < 24h', color: '#FFB347' },
  { text: '> Stay excellent.', color: '#3D4557' },
];

const LINKS = [
  { label: 'GITHUB →', sub: 'HARSHHLEDWANI', href: 'https://github.com/HARSHHLEDWANI' },
  { label: 'LINKEDIN →', sub: 'harsh-ledwani', href: 'https://www.linkedin.com/in/harsh-ledwani-097571219/' },
  { label: 'EMAIL →', sub: 'ledwani830@gmail.com', href: 'mailto:ledwani830@gmail.com' },
];

const inputStyle: React.CSSProperties = {
  width: '100%', boxSizing: 'border-box',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: 0, padding: '12px 16px',
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 13, color: '#F0EDE8',
  outline: 'none', transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 10, color: '#3D4557',
  letterSpacing: '0.12em', textTransform: 'uppercase',
  display: 'block', marginBottom: 8,
};

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [successLines, setSuccessLines] = useState<string[]>([]);
  const [dots, setDots] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');

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
      setStatus('sent');
      typeLines();
    } catch {
      clearInterval(dotsInterval);
      setStatus('error');
    }
  };

  const typeLines = () => {
    SUCCESS_LINES.forEach((_, i) => {
      setTimeout(() => {
        const text = SUCCESS_LINES[i].text;
        let j = 0;
        const interval = setInterval(() => {
          j++;
          setSuccessLines(prev => { const next = [...prev]; next[i] = text.slice(0, j); return next; });
          if (j >= text.length) clearInterval(interval);
        }, 30);
      }, i * 600);
    });
  };

  return (
    <section id="contact" style={{ padding: '120px 0', background: '#0D1117' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 80px' }} className="contact-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: '#3D4557', letterSpacing: '0.1em', marginBottom: 12 }}>
            05 / CONTACT
          </p>
          <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: 64, fontWeight: 800, color: '#F0EDE8', margin: '0 0 16px', lineHeight: 1 }} className="contact-heading">
            Let&apos;s Build.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 16, color: '#8892A4', maxWidth: 480 }}>
            Open to internships, collaborations, and interesting problems. I reply within 24 hours.
          </p>
        </motion.div>

        {/* Two columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '55% 45%', gap: 80 }} className="contact-grid">
          {/* LEFT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.15 }}
          >
            {status === 'sent' ? (
              <div style={{ padding: '20px 0' }}>
                {successLines.map((line, i) => (
                  <p key={i} style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 13, color: SUCCESS_LINES[i]?.color ?? '#F0EDE8', margin: '6px 0', lineHeight: 1.6 }}>
                    {line}
                    {i === successLines.length - 1 && line.length < (SUCCESS_LINES[i]?.text.length ?? 0) && (
                      <span className="cursor-blink">▊</span>
                    )}
                  </p>
                ))}
                {successLines.length === SUCCESS_LINES.length && (
                  <button
                    onClick={() => { setStatus('idle'); setSuccessLines([]); formRef.current?.reset(); }}
                    style={{ marginTop: 20, fontFamily: 'var(--font-jetbrains), monospace', fontSize: 12, color: '#00CFFF', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textDecoration: 'underline' }}
                  >
                    Send another →
                  </button>
                )}
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <label style={labelStyle}>Name</label>
                  <input name="user_name" type="text" placeholder="your name" required style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = '#00CFFF')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.07)')} />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input name="user_email" type="email" placeholder="your@email.com" required style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = '#00CFFF')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.07)')} />
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea name="message" rows={5} placeholder="what are you building?" required style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={(e) => (e.target.style.borderColor = '#00CFFF')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.07)')} />
                </div>
                {status === 'error' && (
                  <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 12, color: '#FFB347', margin: 0 }}>
                    Transmission failed. Try emailing directly.
                  </p>
                )}
                <button type="submit" disabled={status === 'sending'} style={{
                  width: '100%', background: '#00FF88', color: '#080B14',
                  fontFamily: 'var(--font-syne), sans-serif', fontSize: 14, fontWeight: 700,
                  padding: 14, border: 'none', borderRadius: 0,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  opacity: status === 'sending' ? 0.8 : 1, transition: 'opacity 0.2s',
                }}>
                  {status === 'sending' ? `TRANSMITTING${dots}` : 'SEND MESSAGE →'}
                </button>
              </form>
            )}
          </motion.div>

          {/* RIGHT — Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.25 }}
          >
            {LINKS.map(link => (
              <a key={link.label} href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="row-hover-fill"
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', textDecoration: 'none', cursor: 'pointer' }}
              >
                <span style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: 22, fontWeight: 600, color: '#F0EDE8', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#00CFFF')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#F0EDE8')}
                >{link.label}</span>
                <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 12, color: '#3D4557' }}>{link.sub}</span>
              </a>
            ))}

            {/* Resume block */}
            <div
              onClick={() => window.open('/resume.pdf', '_blank')}
              style={{
                marginTop: 24, background: '#111520',
                border: '1px solid rgba(255,255,255,0.07)',
                padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                cursor: 'pointer', transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)')}
            >
              <div>
                <p style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: 15, color: '#F0EDE8', margin: '0 0 4px' }}>DOWNLOAD RESUME</p>
                <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: '#3D4557', margin: 0 }}>PDF · Updated 2026</p>
              </div>
              <span style={{ fontSize: 20, color: '#00FF88' }}>↓</span>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div style={{ paddingTop: 64, borderTop: '1px solid rgba(255,255,255,0.07)', marginTop: 64, textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 11, color: '#3D4557', letterSpacing: '0.06em' }}>
            © 2026 HARSH LEDWANI · BUILT FROM SCRATCH · NO TEMPLATES
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-inner { padding: 0 24px !important; }
          .contact-heading { font-size: 40px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
