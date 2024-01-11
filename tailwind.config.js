/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        navigation:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        landing: "inset 0px 0px 400px 110px rgba(0, 0, 0, 0.7)",
      },
      colors: {
        primary: "#c043c0",
        secondary: "#3498db",
        background: "#F0EFF4",
        icon: "#FEFEDF",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        logo: ["Dela Gothic One", "sans"],
      },
      extend: {
        textColors: {
          white: "#fff",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
