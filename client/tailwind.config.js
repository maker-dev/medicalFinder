/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main": {
          50: "#f9faec",
          100: "#f2f4cd",
          200: "#e7ea9e",
          300: "#dddd67",
          400: "#d0ca33",
          500: "#c3b72f",
          600: "#a89326",
          700: "#866d22",
          800: "#705923",
          900: "#614a22",
          950: "#382810",
        },   
      },
      backgroundImage: {
        'bg-image': "url('/src/Assets/bg.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
};
