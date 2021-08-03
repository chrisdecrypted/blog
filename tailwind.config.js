// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: {
    content: ["./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black' : '#1e1e1e',
        'main' : '#9f725f',
        'light-blue' : '#9ecbff',
        'silver': '#bcbcbc',
        'primary-dark': '#252526',
        'primary-light': '#403E41',
        'primary-medium' : '#353435',
        'contrast-light' : '#F0F0F0',
        
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        mono: ['Source Code Pro', ...defaultTheme.fontFamily.sans],

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
