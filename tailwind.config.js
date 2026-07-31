/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        volt: '#CCFF00',
        dark: '#121212',
        pitch: '#000000',
        muted: '#475569',
      },
      fontFamily: {
        ranchers: ['Ranchers', 'cursive', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'neo-black': '8px 8px 0px 0px #000000',
        'neo-black-sm': '4px 4px 0px 0px #000000',
        'neo-white': '8px 8px 0px 0px #FFFFFF',
        'neo-white-sm': '4px 4px 0px 0px #FFFFFF',
        'neo-volt': '8px 8px 0px 0px #CCFF00',
        'neo-volt-sm': '4px 4px 0px 0px #CCFF00',
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
        '8': '8px',
      }
    },
  },
  plugins: [],
}
