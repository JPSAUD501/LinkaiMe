/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)']
      },
    },
    colors: {
      'lme': {
        'darkblue': "#1f0441",
        'pink': "#fc1068",
        'orange': "#fcab10",
        'yellow': "#f9ce07",
        'blue': "#0ce3e8",
      },
      'white': "#ffffff",
      'black': "#000000",
    }
  },
  plugins: [],
}
