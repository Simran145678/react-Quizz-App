/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          100: "#fffbe9",
          300: "#ffee32",
          500: "#fdca00",
        },
        orange: {
          200: "#ffa500",
        },
        gray: {
          800: "#484848",
          900: "#242038",
        },
      },
      fontFamily: {
        noto: ["Noto Serif", "serif"],
        nunito: ['"Nunito", sans-serif'],
      },
      boxShadow: {
        100: "rgba(255, 251, 233, 0.1) 0px 10px 15px -3px inset, rgba(255, 251, 233, 0.1) 0px 4px 6px -4px;",
      },
      opacity: {
        0: "0",
        100: "100",
      },
      scale: {
        50: ".5",
        75: ".75",
        90: ".9",
        105: "1.05",
      },
      animationIterationCount: {
        1: "1",
      },
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        "bounce-short": "bounce 1s ease-in-out 5",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
