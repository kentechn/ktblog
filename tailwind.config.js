/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./features/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "main-background": "url('../img/background-img.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
