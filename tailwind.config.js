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
        header: "#1357dd",
        footer: "#25262C",
        headertext: "#c6f91d",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '120%': '120%',
        '16': '4rem',
      }
    },
  },
  plugins: [],
}
