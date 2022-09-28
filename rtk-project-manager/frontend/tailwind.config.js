/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        greenx: '#22c55e',
        orangex: '#f97316',
        indigox: '#6366f1',
        redx: '#ef4444',
        purplex: '#a855f7',
        cyanx: '#06b6d4',
        rosex: '#f43f5e',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
}
