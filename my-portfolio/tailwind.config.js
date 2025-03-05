/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ Include all JS/TS files inside `src`
    "./public/index.html", // ✅ Add HTML if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
