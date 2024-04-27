/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "dark-primary": "#1b2037",
      "dark-secondary": "#252b43",
      "dark-tertiary": "#2f3651",
      "text-white": "#acb2d1",
    },
    fontFamily: {
      "merriweathers-sans": "Merriweather Sans,  sans-serif",
    },
  },
  plugins: [],
};
