/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'serviurs': "url('/public/servirus2.jpeg')"
      },
      colors: {
        primary: "#EFD857",
        secondary: "#1961f1",
        header: "#1961f1",
        footer: "#25262C"
      }
    },
  },
  plugins: [],
}
