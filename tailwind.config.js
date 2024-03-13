/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1400px'},
      'xl': {'max': '1010px'},
      'md': {'max': '768px'},
      'sm': {'max': '500px'},
    }
  },
  plugins: [],
}

