/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter-tight)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Consolas', 'monospace'],
      },
      colors: {
        // ── Core design system ─────────────────────────────
        dark: {
          bg: '#0A0A0A',
          'bg-secondary': '#111111',
          surface: '#111111',
          elevated: '#161616',
          text: '#FFFFFF',
          'text-secondary': '#A1A1AA',
          'text-tertiary': '#52525B',
        },
        // ── Accent palette ──────────────────────────────────
        accent: {
          DEFAULT: '#7C3AED',
          light: '#8B5CF6',
          dark: '#6D28D9',
          cyan: '#06B6D4',
          'cyan-light': '#22D3EE',
          mint: '#00E5A0',   // kept for legacy compat
          pink: '#C4B5FD',
        },
        // ── Named utility colors ────────────────────────────
        neon: '#22C55E',
        violet: '#7C3AED',
        cyan: '#06B6D4',
        // ── Legacy aliases ──────────────────────────────────
        primary: '#7C3AED',
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #7C3AED, #06B6D4)',
        'gradient-accent': 'linear-gradient(135deg, #7C3AED, #6D28D9)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-violet': '0 0 28px rgba(124,58,237,0.40)',
        'glow-violet-lg': '0 0 56px rgba(124,58,237,0.28)',
        'glow-cyan': '0 0 28px rgba(6,182,212,0.35)',
        'glow-neon': '0 0 20px rgba(34,197,94,0.35)',
        'card': '0 4px 24px rgba(0,0,0,0.50)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.70)',
        // Legacy aliases
        'glow-accent': '0 0 28px rgba(124,58,237,0.40)',
        'glow-accent-lg': '0 0 56px rgba(124,58,237,0.28)',
        'glow-red': '0 0 28px rgba(124,58,237,0.40)',
        'glow-red-lg': '0 0 56px rgba(124,58,237,0.28)',
        'glow-blue': '0 0 28px rgba(6,182,212,0.32)',
        'glow-mint': '0 0 28px rgba(0,229,160,0.32)',
        'glow-magic': '0 0 28px rgba(139,92,246,0.38)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'float-x': {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(10px)' },
        },
        'orb-drift': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(40px, -40px)' },
          '66%': { transform: 'translate(-30px, 30px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-400% center' },
          '100%': { backgroundPosition: '400% center' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'portal-pulse': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(1.2)', opacity: '0' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'bounce-glow': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.7' },
          '50%': { transform: 'translateY(-5px)', opacity: '1' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-x': 'float-x 4s ease-in-out infinite',
        'orb-drift': 'orb-drift 16s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'portal-pulse': 'portal-pulse 2s ease-out',
        glitch: 'glitch 0.3s infinite',
        'bounce-glow': 'bounce-glow 2s ease-in-out infinite',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
};
