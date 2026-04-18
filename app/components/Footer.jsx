'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

const SOCIALS = [
  { icon: FiGithub,   href: 'https://github.com/HARSHHLEDWANI', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/harsh-ledwani', label: 'LinkedIn' },
  { icon: FiMail,     href: 'mailto:ledwani830@gmail.com', label: 'Email' },
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export function Footer() {
  return (
    <footer
      className="relative py-16 px-6 lg:px-8"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">

          {/* Brand */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl font-bold text-dark-text hover:text-accent transition-colors mb-3 block text-left"
            >
              <span style={{ color: 'var(--accent)' }}>H</span>arsh Ledwani
            </button>
            <p className="text-sm text-dark-text-secondary max-w-xs leading-relaxed">
              Full-Stack Developer & CS Student building systems that combine engineering precision with thoughtful design.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold uppercase tracking-widest text-dark-text-secondary mb-1">Navigation</p>
            {LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-dark-text-secondary hover:text-dark-text transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold uppercase tracking-widest text-dark-text-secondary mb-1">Connect</p>
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-dark-text-secondary hover:text-dark-text transition-colors"
                whileHover={{ x: 3 }}
              >
                <Icon size={14} />
                {label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-xs text-dark-text-secondary">
            © {new Date().getFullYear()} Harsh Ledwani. Built with Next.js & Framer Motion.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 text-xs font-semibold text-dark-text-secondary hover:text-dark-text transition-colors"
          >
            Back to top <FiArrowUp size={13} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
