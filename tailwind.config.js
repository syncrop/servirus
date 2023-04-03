/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EFD857",
        secondary: "#3aa7e7",
        header: "#3aa7e7",
        footer: "#25262C"
      }
    },
  },
  plugins: [],
}
