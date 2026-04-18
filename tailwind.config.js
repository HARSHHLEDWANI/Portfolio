/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-bebas)', 'Impact', 'Arial Narrow', 'sans-serif'],
        sans: ['var(--font-instrument)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-ibm-mono)', 'Consolas', 'monospace'],
      },
      colors: {
        bg: '#0A0A0A',
        surface: '#111111',
        muted: '#2A2A2A',
        offwhite: '#F0EDE8',
        vermillion: '#FF3D00',
        lime: '#C8FF00',
        // Legacy aliases
        dark: {
          bg: '#0A0A0A',
          'bg-secondary': '#111111',
          surface: '#111111',
          text: '#F0EDE8',
          'text-secondary': '#888882',
          'text-tertiary': '#555550',
        },
        accent: {
          DEFAULT: '#FF3D00',
          light: '#FF6B3D',
          dark: '#CC3000',
          mint: '#C8FF00',
          cyan: '#C8FF00',
        },
        neon: '#C8FF00',
        primary: '#FF3D00',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'blob-morph': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '55% 45% 40% 60% / 35% 65% 45% 55%' },
          '75%': { borderRadius: '40% 60% 55% 45% / 70% 30% 60% 40%' },
        },
        'blob-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        marquee: 'marquee 22s linear infinite',
        blink: 'blink 1s step-end infinite',
        blob: 'blob-morph 8s ease-in-out infinite, blob-spin 20s linear infinite',
        'blob-fast': 'blob-morph 1.5s ease-in-out infinite, blob-spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};
