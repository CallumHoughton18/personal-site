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
    width: {
      'overflow': '102%',
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
  ],
}
