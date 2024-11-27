/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mango-yellow': '#FFC324',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },

      },
      animation: {
        'slide-down': 'slideDown 0.3s ease-out forwards',
      },
      height: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}
