module.exports = {
  purge: {
    content: ["./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-dark': '#2A2A2E',
        'primary-light': '#F2F2F2',
        'primary-medium' : '#353435',
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
