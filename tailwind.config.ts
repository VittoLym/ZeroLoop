import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        'primary-dark': '#6D28D9',
        'primary-light': '#A78BFA',
        surface: '#050505',
        'surface-card': '#0f0f0f',
        'surface-high': '#1a1a1a',
        'text-primary': '#E6EDF3',
        'text-secondary': '#8B949E',
        border: '#30363D',
      },
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      fontSize: {
        display: ['clamp(40px,6vw,72px)', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '700' }],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
} satisfies Config
