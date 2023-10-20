/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#94171A",

          secondary: "#263D72",

          accent: "#000000",

          neutral: "#000000",

          "base-100": "#FFFFFF",

          info: "#94171A",

          success: "#94171A",

          warning: "#94171A",

          error: "#F87272",
          black: "#ffffff",
        },
      },
    ],
  },
};
