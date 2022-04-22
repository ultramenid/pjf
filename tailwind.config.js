const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["*.html"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      'notoserif' : ['Noto Serif']
  },
  },
  plugins: [],
}
