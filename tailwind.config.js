/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './index.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Modern dark palette and accents
        background: {
          DEFAULT: '#0F111A',
          'alt': '#1A1F2E'
        },
        text: {
          DEFAULT: '#E5E7EB'
        },
        accent: {
          purple: '#7F5AF0',
          sky: '#38BDF8',
          cyan: '#22D3EE'
        },
        primary: '#7F5AF0',
        // legacy tokens
        light: {
          bg: '#F4F6F9',
          surface: '#FFFFFF',
          text: '#0D1B2A',
          textSecondary: '#4B5563',
          accent: '#4F81C7',
          border: '#E1E5ED',
        },
        dark: {
          bg: '#0B1220',
          surface: '#101826',
          text: '#E5EAF5',
          textSecondary: '#9AA6BE',
          accent: '#5FA8D3',
          border: '#1C2638',
        },
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
}

