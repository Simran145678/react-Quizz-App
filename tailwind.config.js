/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          100: "#F5F7FB",
          500: "#4D5B9E",
          800: "#293264",
        },
        gray: {
          100: "#F5F7FB",
          800: "#484848",
          900: "#242038",
        },
        red: {
          200: "#F8BCBC",
        },
        green: {
          200: "#94D7A2",
        },
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
