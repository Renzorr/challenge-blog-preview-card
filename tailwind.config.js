/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        yellow: "#f4d04e",
        grey: "#808080",
        black: "#121212",
      },
      boxShadow:{
        "card-shadow": "9px 9px black"
      }
    },
  },
  plugins: [],
};
