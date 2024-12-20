/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        small: "540px",
        large: "1350px",
      },
      width: {
        110: "30rem",
        128: "36rem",
        150: "38rem",
      },
    },
  },
  plugins: [],
};
