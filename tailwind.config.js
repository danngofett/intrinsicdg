/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/layout/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-light': "url('../assets/images/beams.jpg')",
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#3B44AC',
        },
        secondary: {
          DEFAULT: '#011a3c',
        },
        tertiary: {
          DEFAULT: '#4B54BA',
        },
        grey: {
          200: '#D9D9D9',
        },
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.secondary.DEFAULT'),
            h1: {
              color: theme('colors.primary.DEFAULT'),
            },
            h2: {
              color: theme('colors.primary.DEFAULT'),
            },
            h3: {
              color: theme('colors.primary.DEFAULT'),
            },
            strong: {
              color: theme('colors.primary.DEFAULT'),
            },
            a: {
              color: theme('colors.primary.DEFAULT'),
              '&:hover': {
                color: theme('colors.primary.DEFAULT'),
              },
            },
          },
        },
      }),
      height: {
        240: 240,
        360: 360,
        520: 520,
        720: 720,
      },
      width: {
        240: 240,
        360: 360,
        520: 520,
        720: 720,
      },
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
        14: 'repeat(14, minmax(0, 1fr))',
        15: 'repeat(15, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
      },
      gridColumnStart: {
        14: '14',
        15: '15',
        16: '16',
        17: '17',
      },
      gridColumnEnd: {
        14: '14',
        15: '15',
        16: '16',
        17: '17',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
