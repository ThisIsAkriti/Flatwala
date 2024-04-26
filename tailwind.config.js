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
        'purple': 'rgba(14, 152, 253, 1)',
        'featuredButton': 'rgba(235, 103, 83, 1)',
        'amt':'rgba(255, 255, 255, 1)',
        'button': 'rgba(255, 49, 49, 1)',
        'fromGrey' :'rgba(225, 225, 225, 1)',
        'toGrey': 'rgba(123, 123, 123, 1)',
        'SearchOrange': '  rgba(234, 67, 53, 0.88)',
        'SearchYello': 'rgba(251, 188, 5, 0.88)',
        'footerTop':'rgba(14, 152, 253, 1)',
        'footerBottom':'rgba(230, 105, 105, 1)',
        'subsButton':'rgba(227, 85, 85, 1)',
        'whiteGray' : 'rgba(255, 255, 255, 0.15)',
        'pinkGradient': 'rgba(235, 82, 82, 1)',
        'blueGradient': 'rgba(90, 216, 244, 1)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

