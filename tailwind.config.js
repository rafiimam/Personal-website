/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm paper background — light, academic, print-like
        paper: {
          50:  '#fdfcf9',
          100: '#faf8f3',
          200: '#f3f0e7',
          300: '#e9e4d6',
        },
        // Deep ink navy — text and headings
        ink: {
          950: '#0d1526',
          900: '#14213d',
          800: '#1c2f52',
          700: '#273e66',
          600: '#3d5482',
          500: '#5b729e',
          400: '#8598b5',
          300: '#b3c0d4',
          200: '#d5dce8',
          100: '#e8ecf2',
        },
        // Academic royal blue — primary accent
        accent: {
          700: '#1d4f9c',
          600: '#2563b8',
          500: '#3b78cc',
          100: '#dbe8f8',
          50:  '#eef4fc',
        },
        // Muted brass — used sparingly for highlights and rules
        brass: {
          700: '#8a6414',
          600: '#a67c1a',
          500: '#b98a1f',
          100: '#f3e8c8',
          50:  '#faf3dd',
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(20, 33, 61, 0.05), 0 4px 16px rgba(20, 33, 61, 0.05)',
        lift: '0 2px 4px rgba(20, 33, 61, 0.06), 0 10px 28px rgba(20, 33, 61, 0.09)',
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
