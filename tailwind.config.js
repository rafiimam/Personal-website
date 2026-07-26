/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Warm prestigious dark palette
        base: {
          950: '#080c16',
          900: '#0a0f1a',
          850: '#0e1525',
          800: '#131b2e',
          750: '#182238',
          700: '#1e2a42',
          600: '#27364f',
          500: '#344563',
        },
        // Warm gold accent — academic prestige
        gold: {
          50:  '#fef9ec',
          100: '#fdf0cc',
          200: '#fbe299',
          300: '#f8cf5c',
          400: '#f5be3a',
          500: '#eba417',
          600: '#cf7e11',
          700: '#ac5b12',
          800: '#8c4715',
          900: '#733b15',
        },
        // Soft teal — modern research accent
        teal: {
          300: '#7ee0d0',
          400: '#4dd0bc',
          500: '#2bb5a0',
          600: '#1f9182',
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
