module.exports = {
  content: ['./src/**/*.njk', './src/**/*.md',],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '39px',
        lg: '0',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1111px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        indigo: "#755cde",
        orange: "#f6a560",
        pink: "#f39e9e",
        red: "#eb7565",
        cyan: "#61c4b7",
        purple: "#552049",
        black: "#030303",
        brown: "#7a746e",
        cream: "#fff7f0",
      },
      fontFamily: {
        'sans': ['Plus Jakarta Sans']
      }
    },
  },
  plugins: [],
}
