/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fontGray: "#323232",
        bgGray: "#F5F5F5",
        borderGray: "#DBDBDB",
        primaryPurple: "#6100FF",
      },
    },
    fontFamily: {
      general: ["General Sans", "sans-serif"],
    },
  },
  plugins: [],
};
