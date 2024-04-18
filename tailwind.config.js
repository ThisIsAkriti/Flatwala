/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mycolor': 'rgba(255, 49, 49, 1)',
        'mycolor2': 'rgba(251, 251, 251, 1)',
        'text-color': 'rgba(255, 49, 49, 1)'
      },
    },
  },
  plugins: [],
}

