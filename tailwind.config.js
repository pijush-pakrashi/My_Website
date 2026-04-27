/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)', // Dynamic theme color
        dark: '#0a0a0a',
        cardBg: '#121212',
        cardBorder: '#262626',
        textMuted: '#a3a3a3'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0', visibility: 'hidden' }
        }
      },
      animation: {
        fadeOut: 'fadeOut 0.5s ease-in-out 2s forwards'
      }
    },
  },
  plugins: [],
}
