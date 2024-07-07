/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#1E2832",
        "primaryBG": "#1e"

      },

      fontFamily:{
        "roboto": ["roboto", "sans-serif"]
      }

    },
  },
  plugins: [],
}