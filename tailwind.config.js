/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // 追記
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
