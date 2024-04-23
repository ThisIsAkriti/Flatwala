/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange' : 'rgba(237, 51, 51, 1)',
        'blue': 'rgba(21, 128, 227, 1)',
        'mycolor': 'rgba(255, 49, 49, 1)',
        'mycolor2': 'rgba(251, 251, 251, 1)',
        'text-color': 'rgba(255, 49, 49, 1)',
        'red':'rgba(238, 71, 71, 1)',
        'purple': 'rgba(40, 78, 190, 1)',
        'featuredButton': 'rgba(235, 103, 83, 1)',
        'amt':'rgba(255, 255, 255, 1)',
        'button': 'rgba(255, 49, 49, 1)',
        'fromGrey' :'rgba(225, 225, 225, 1)',
        'toGrey': 'rgba(123, 123, 123, 1)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

