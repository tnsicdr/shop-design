const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Noto Sans"', '"Noto Sans JP"', ...defaultTheme.fontFamily.sans],
        'serif': ['"Noto Serif"', '"Noto Serif JP"', ...defaultTheme.fontFamily.serif],
        'mono': ['"Noto Sans Mono"', ...defaultTheme.fontFamily.mono]
      }
    },
  },
  plugins: [],
}
