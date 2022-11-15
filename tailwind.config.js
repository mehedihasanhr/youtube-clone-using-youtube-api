/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "320px",
      md: "556px",
      lg: "768px",
      xl: "992px",
      xxl: "1200px",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
