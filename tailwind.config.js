/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rose: '#c97b84',
        'rose-dark': '#a05a63',
        blush: '#f4e0e3',
        gold: '#c9a84c',
        charcoal: '#2c2c2c',
        cream: '#faf4f0',
        slate: '#6b6b6b',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Jost"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
