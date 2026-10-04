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
        cyan: {
          50: 'rgb(var(--color-primary-light-rgb) / 0.1)',
          100: 'rgb(var(--color-primary-light-rgb) / 0.2)',
          200: 'rgb(var(--color-primary-light-rgb) / 0.4)',
          300: 'rgb(var(--color-primary-light-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-primary-light-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-primary-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-primary-dark-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-primary-dark-rgb) / <alpha-value>)',
          800: 'rgb(var(--color-primary-950-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-primary-950-rgb) / <alpha-value>)',
          950: 'rgb(var(--color-primary-950-rgb) / <alpha-value>)',
        },
        indigo: {
          50: 'rgb(var(--color-secondary-light-rgb) / 0.1)',
          100: 'rgb(var(--color-secondary-light-rgb) / 0.2)',
          200: 'rgb(var(--color-secondary-light-rgb) / 0.4)',
          300: 'rgb(var(--color-secondary-light-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-secondary-light-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-secondary-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-secondary-dark-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-secondary-dark-rgb) / <alpha-value>)',
          800: 'rgb(var(--color-secondary-950-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-secondary-950-rgb) / <alpha-value>)',
          950: 'rgb(var(--color-secondary-950-rgb) / <alpha-value>)',
        },
        dark: {
          900: '#090d16',
          850: '#0d1322',
          800: '#111827',
          750: '#151f32',
          700: '#1e293b',
          600: '#334155',
        },
        brand: {
          cyan: 'rgb(var(--color-primary-rgb) / <alpha-value>)',
          cyanLight: 'rgb(var(--color-primary-light-rgb) / <alpha-value>)',
          cyanGlow: 'var(--theme-glow, rgba(6, 182, 212, 0.25))',
          indigo: 'rgb(var(--color-secondary-rgb) / <alpha-value>)',
          indigoLight: 'rgb(var(--color-secondary-light-rgb) / <alpha-value>)',
          indigoGlow: 'var(--theme-secondary-glow, rgba(99, 102, 241, 0.25))',
          violet: '#8b5cf6',
          emerald: '#10b981',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'floatDelayed 6s ease-in-out infinite 1.5s',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 14s linear infinite',
        'spin-reverse': 'spinReverse 18s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatDelayed: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        spinReverse: {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
        'conic-gradient': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
