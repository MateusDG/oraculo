/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5c4d7d",
        secondary: "#f3e8ff",
        accent: "#8b5cf6",
      },
    },
  },
  plugins: [],
}
