/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hospital-green': '#ACD9B2'
      },
      minHeight: {
        'figure': '128px'
      }
    },
  },
  plugins: [],
}

