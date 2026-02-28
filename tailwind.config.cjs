/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        zain: ['Zain', 'sans-serif'],
      },
      animation: {
        'mascot-spin': 'mascot-spin 6s linear infinite',
      },
      keyframes: {
        'mascot-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
