'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiArrowUpRight, FiSend, FiCheck, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { emailjsConfig, isEmailJSConfigured } from '@/lib/emailjs-config';

const EASE = [0.22, 1, 0.36, 1];

const SOCIALS = [
  { icon: FiGithub,   label: 'GitHub',   href: 'https://github.com/HARSHHLEDWANI', handle: 'HARSHHLEDWANI' },
  { icon: FiLinkedin, label: 'LinkedIn',  href: 'https://linkedin.com/in/harsh-ledwani', handle: 'harsh-ledwani' },
  { icon: FiMail,     label: 'Email',     href: 'mailto:ledwani830@gmail.com', handle: 'ledwani830@gmail.com' },
];

export function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });
  const isConfigured = isEmailJSConfigured();

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isConfigured) { setStatus('error'); return; }
    setStatus('sending');
    try {
      emailjs.init(emailjsConfig.PUBLIC_KEY);
      await emailjs.send(emailjsConfig.SERVICE_ID, emailjsConfig.TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: emailjsConfig.RECEIVER_EMAIL,
      });
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus(null), 4000);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.09)',
    color: 'var(--text-primary)',
    fontSize: '14px',
    fontFamily: 'var(--font-jakarta)',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 px-6 lg:px-8 overflow-hidden">
      {/* Ambient orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          borderRadius: '50%',
          bottom: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(123,110,255,1) 0%, transparent 70%)',
          filter: 'blur(120px)',
          opacity: 0.07,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-4"
        >
          <span className="section-tag">05 / Contact</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">

          {/* ── Left column ── */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-10">
            <div>
              <motion.h2
                className="font-bold text-dark-text mb-4"
                style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.025em', lineHeight: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.08, duration: 0.7, ease: EASE }}
              >
                Let's build something.
              </motion.h2>
              <motion.p
                className="text-dark-text-secondary text-lg leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.16, duration: 0.6, ease: EASE }}
              >
                Open to internships, collaborations, and interesting conversations. I reply within 24 hours.
              </motion.p>
            </div>

            {/* Direct email CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.24, duration: 0.6, ease: EASE }}
            >
              <motion.a
                href="mailto:ledwani830@gmail.com"
                className="group inline-flex items-center gap-2 text-base font-semibold text-dark-text hover:text-accent transition-colors"
                whileHover={{ x: 4 }}
              >
                ledwani830@gmail.com
                <FiArrowUpRight size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6, ease: EASE }}
            >
              {SOCIALS.map(({ icon: Icon, label, href, handle }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl transition-all group"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  whileHover={{
                    borderColor: 'rgba(123,110,255,0.30)',
                    background: 'rgba(123,110,255,0.05)',
                    x: 4,
                  }}
                >
                  <Icon size={18} className="text-dark-text-secondary group-hover:text-accent transition-colors" style={{ minWidth: 18 }} />
                  <div className="min-w-0">
                    <p className="text-xs text-dark-text-secondary font-medium mb-0.5">{label}</p>
                    <p className="text-sm text-dark-text font-semibold truncate">{handle}</p>
                  </div>
                  <FiArrowUpRight size={14} className="ml-auto text-dark-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Right column: form ── */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.75, ease: EASE }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5 p-8 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-dark-text-secondary uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(123,110,255,0.12)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.09)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-dark-text-secondary uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(123,110,255,0.12)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.09)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-dark-text-secondary uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or idea..."
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(123,110,255,0.12)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.09)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              {!isConfigured && (
                <p className="text-xs text-dark-text-secondary" style={{ color: 'rgba(0,229,160,0.8)' }}>
                  ℹ EmailJS not configured — message me directly at ledwani830@gmail.com
                </p>
              )}

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-base text-white transition-all disabled:opacity-60"
                style={{ background: status === 'success' ? 'rgba(0,229,160,0.8)' : 'var(--accent)' }}
              >
                {status === 'sending' ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
                    />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <><FiCheck size={16} /> Sent successfully!</>
                ) : (
                  <><FiSend size={16} /> Send Message</>
                )}
              </motion.button>

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-center"
                  style={{ color: '#FF6B6B' }}
                >
                  Something went wrong. Email me directly instead.
                </motion.p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
