/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '104': '26rem',
        '112': '28rem',
        '128': '32rem', 
        '144': '36rem', 
        '160': '40rem', 
        '192': '48rem', 
      }
    },
  },
  plugins: [],
}

