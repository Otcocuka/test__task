/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro': ['SF Pro Text', 'sans-serif'],
        'sf-pro-r': ['SF Pro Rounded', 'sans-serif'],  // Добавляем кастомные шрифты
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
};
