module.exports = {
  purge: {
    content: ["./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0F0F0F',
        'primary-light': '#403E41',
        'primary-medium' : '#353435',
        'contrast-light' : '#F0F0F0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
