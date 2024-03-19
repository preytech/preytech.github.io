/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Bold": ["Roboto-Bold"],
        "Black": ["Roboto-Black"],
        "Light": ["Roboto-Light"],
      },
      colors: {
        "Blue": "#407BFF"
      },
      backgroundImage: {
        'Kid': "url('./images/kid.png')",
      }
    },
  },
  plugins: [],
}

