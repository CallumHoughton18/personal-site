const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: theme => ({
       'main-background': "url('/background.jpg')",
      })
    },
    colors: {
      nordBlue: {
        DEFAULT: '#5e81ac'
      },
      nordBg: {
        light: '#3b4252',
        DEFAULT: '#434c5e',
        dark: '#2e3440'
      },
      nordGreen: {
        DEFAULT: '#a3be8c'
      },
      nordSnowStorm: {
        light: '#eceff4',
        default: '#d8dee9'
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    width: {
      'overflow': '102%',
    },
    height: {
      'card': '33rem'
    },
    flex: {
      '25':"0 1 25%",
      '50':"0 1 50%"
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
    filter: { // defaults to {}
    'none': 'none',
    'grayscale': 'grayscale(1)',
    'invert': 'invert(1)',
    'sepia': 'sepia(1)',
  },
  backdropFilter: { // defaults to {}
    'none': 'none',
    'blur': 'blur(3px)',
  },
  },
  variants: {
    filter: ['responsive'], // defaults to ['responsive']
    backdropFilter: ['responsive'], // defaults to ['responsive']
  },
  plugins: [
    require('tailwindcss-filters'),
    require('tailwindcss-textshadow')
  ],
}
