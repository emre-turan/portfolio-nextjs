module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#27799C",
        "custom-teal": "#B3D1DD",
        "jelly-bean": {
          50: "#effafc",
          100: "#d7f0f6",
          200: "#b4e1ed",
          300: "#80cbe0",
          400: "#45abcb",
          500: "#298fb1",
          600: "#27799c",
          700: "#245e7a",
          800: "#254e65",
          900: "#234356",
          950: "#122b3a",
        },
      },
    },
  },
  plugins: [],
};
