/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: ['Inter var', ...defaultTheme.fontFamily.sans],
      colors: {
        primary: {
          DEFAULT: '#3B44AC',
        },
      },
    },
  },
  plugins: [],
}
