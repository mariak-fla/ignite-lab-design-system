/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },

      indigo: {
        500: "#6366f1",
      },

      purple: {
        500: "#a855f7",
      },

      pink: {
        500: "#ec4899",
      },


      green: {
        500: '#34EF23',
        300: '#7CFF71',
      },
    },
    extend: {
      fontFamily: {
        sans: 'inter, sans-serif'
      },
      transitionDuration: {
        '0': '0s',
        '200': '200ms',
        '300': '300ms',
      },
    },
  },
  plugins: [],
}
