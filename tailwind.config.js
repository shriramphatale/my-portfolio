/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          red: '#ef233c',
          'red-hover': '#d90429',
          'red-dark': '#8d0801',
          'red-glow': 'rgba(239, 35, 60, 0.5)',
          'red-subtle': 'rgba(239, 35, 60, 0.12)',
        },
        noir: {
          base: '#000000',
          dark: '#050505',
          card: 'rgba(18, 18, 20, 0.65)',
          'card-hover': 'rgba(26, 26, 30, 0.85)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(239, 35, 60, 0.35)',
        }
      },
      fontFamily: {
        sans: ['"JetBrains Mono"', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
        manrope: ['"JetBrains Mono"', 'monospace'],
        inter: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'border-spin': 'border-spin 3s linear infinite',
        'fade-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'radar-ping': 'radar-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        'border-spin': {
          'from': { '--gradient-angle': '0deg' },
          'to': { '--gradient-angle': '360deg' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(24px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.65', transform: 'scale(1.05)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'radar-ping': {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
