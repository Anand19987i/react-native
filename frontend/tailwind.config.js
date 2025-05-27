/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}", // if you use screens folder
  ],
   presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class", // optional if you want to control dark mode
};
