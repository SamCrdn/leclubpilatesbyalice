/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand palette ──────────────────────────────
        cream:   { DEFAULT: '#F5F0E8', dark: '#EDE6D8' },
        sand:    { DEFAULT: '#C9B9A0', light: '#DDD0BB', dark: '#B0997E' },
        cocoa:   { DEFAULT: '#2C1A0E', mid: '#4A2E1A', light: '#6B4226' },
        mink:    { DEFAULT: '#9B8A7A', light: '#BEB0A3' },
        chalk:   '#FAFAF7',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body:    ['var(--font-gilroy)', 'var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        satoshi: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-dm-mono)', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        display: ['clamp(3rem, 8vw, 6.5rem)', { lineHeight: '1.0' }],
        hero:    ['clamp(2rem, 5.5vw, 5rem)',  { lineHeight: '1.05' }],
      },
      spacing: {
        section: 'clamp(5rem, 10vw, 9rem)',
      },
      borderRadius: {
        pill: '999px',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease both',
        'fade-in':    'fadeIn 0.6s ease both',
        'slide-left': 'slideLeft 0.7s ease both',
        'scroll-bar': 'scrollBar 2s ease infinite',
      },
      keyframes: {
        fadeUp:    { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:    { from: { opacity: '0' },                                to: { opacity: '1' } },
        slideLeft: { from: { opacity: '0', transform: 'translateX(24px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        scrollBar: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(200%)' } },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
