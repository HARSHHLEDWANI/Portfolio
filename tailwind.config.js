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
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Consolas', 'monospace'],
      },
      colors: {
        // ── New premium design system ──────────────────────
        dark: {
          bg: '#06060A',
          'bg-secondary': '#0C0C14',
          surface: '#111119',
          elevated: '#16161E',
          text: '#EDEDF5',
          'text-secondary': 'rgba(237,237,245,0.55)',
          'text-tertiary': 'rgba(237,237,245,0.30)',
        },
        accent: {
          DEFAULT: '#7B6EFF',
          light: '#A49AFF',
          dark: '#5549E0',
          mint: '#00E5A0',
          // Legacy aliases kept for any remaining refs
          purple: '#7B6EFF',
          cyan: '#00E5A0',
          pink: '#C4B5FD',
        },
        // ── Legacy aliases (remapped to new palette) ───────
        neon: {
          red: '#7B6EFF',
          blue: '#00E5A0',
          purple: '#7B6EFF',
        },
        magic: {
          orange: '#A49AFF',
          gold: '#A49AFF',
          'gold-dark': '#7B6EFF',
        },
        primary: '#7B6EFF',
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #7B6EFF, #A49AFF, #00E5A0)',
        'gradient-accent': 'linear-gradient(135deg, #7B6EFF, #5549E0)',
        'gradient-red': 'linear-gradient(135deg, #7B6EFF, #5549E0)',
        'gradient-magic': 'linear-gradient(135deg, #A49AFF, #7B6EFF)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-accent': '0 0 28px rgba(123,110,255,0.40)',
        'glow-accent-lg': '0 0 56px rgba(123,110,255,0.28)',
        'glow-mint': '0 0 28px rgba(0,229,160,0.35)',
        'card': '0 4px 24px rgba(0,0,0,0.50)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.70)',
        // Legacy
        'glow-red': '0 0 28px rgba(123,110,255,0.40)',
        'glow-red-lg': '0 0 56px rgba(123,110,255,0.28)',
        'glow-blue': '0 0 28px rgba(0,229,160,0.32)',
        'glow-magic': '0 0 28px rgba(164,154,255,0.38)',
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
        'count-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
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
