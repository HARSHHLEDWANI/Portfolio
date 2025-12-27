import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useActiveSection } from '../hooks/useActiveSection';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const activeSection = useActiveSection();

  const navLinks = [
    { name: 'Home', href: '#hero', isHash: true, section: 'hero' },
    { name: 'About', href: '#about', isHash: true, section: 'about' },
    { name: 'Skills', href: '#skills', isHash: true, section: 'skills' },
    { name: 'Projects', href: '#projects', isHash: true, section: 'projects' },
    { name: 'Experience', href: '#experience', isHash: true, section: 'experience' },
    { name: 'Resume', href: '/resume', isHash: false, section: 'resume' },
    { name: 'Contact', href: '#contact', isHash: true, section: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, isHash) => {
    if (isHash) {
      e.preventDefault();
      // If we're on a different page, navigate to home first
      if (location.pathname !== '/') {
        window.location.href = `/${href}`;
        return;
      }
      // Small delay to ensure page is ready
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const isActive = (href, isHash, section) => {
    if (isHash) {
      if (location.pathname !== '/') return false;
      return activeSection === section || (section === 'hero' && activeSection === 'hero' && window.scrollY < 100);
    }
    return location.pathname === href;
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-light-bg/85 dark:bg-dark-bg/85 backdrop-blur-xl border-b border-light-border/60 dark:border-dark-border/60 shadow-[0_6px_30px_-24px_rgba(0,0,0,0.45)]'
          : 'bg-light-bg/60 dark:bg-dark-bg/60 backdrop-blur-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-base font-semibold text-light-text dark:text-dark-text hover:opacity-90 transition-opacity inline-flex items-center gap-2 px-3 py-2 rounded-full border border-light-border/70 dark:border-dark-border/70 bg-light-surface/70 dark:bg-dark-surface/70 shadow-sm"
          >
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Harsh Ledwani
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.isHash ? `/${link.href}` : link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isHash)}
                className={`text-sm font-medium transition-all relative px-3 py-2 rounded-full ${
                  isActive(link.href, link.isHash, link.section)
                    ? 'text-light-text dark:text-dark-text bg-light-surface/80 dark:bg-dark-surface/80 border border-light-border/70 dark:border-dark-border/70 shadow-sm'
                    : 'text-light-textSecondary dark:text-dark-textSecondary hover:text-light-text dark:hover:text-dark-text'
                }`}
              >
                <motion.span whileHover={{ y: -2 }}>
                  {link.name}
                </motion.span>
                {isActive(link.href, link.isHash, link.section) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-3 right-3 h-0.5 bg-light-accent dark:bg-dark-accent"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 text-light-text dark:text-dark-text"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-light-surface dark:bg-dark-surface border-t border-light-border dark:border-dark-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.isHash ? `/${link.href}` : link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.isHash)}
                  className={`block text-base font-medium transition-colors ${
                    isActive(link.href, link.isHash, link.section)
                      ? 'text-light-text dark:text-dark-text'
                      : 'text-light-textSecondary dark:text-dark-textSecondary hover:text-light-text dark:hover:text-dark-text'
                  }`}
                >
                  <motion.span whileHover={{ x: 4 }}>{link.name}</motion.span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

