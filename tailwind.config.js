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
        "Blue": "#407BFF",
        "Gray": "#888888",
        "Gray2": "#616161",
        "Gray3": "#5A7184",
        "Trans76": "#FFFFFF76",
        "Trans20": "#00000020",
        "BgWhite": "#F9F9FA"
      },
      backgroundImage: {
        'Kid': "url('./images/kid.png')",
      }
    },
  },
  plugins: [],
}

