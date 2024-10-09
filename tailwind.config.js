/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      colors: {
        white: {
          almost: '#FAFAFA',
          pure: '#FFFFFF'
        },
        grey: {
          light: '#ADADAD',
          medium: '#686868'
        },
        black: '#151515'
      }
    },
  },
  plugins: [],
}