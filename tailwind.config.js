/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        cinema: "url('../src/assets/bg-cinema.jpg')",
      }
    },
  },
  plugins: [],
}