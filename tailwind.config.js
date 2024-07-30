/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#333333',
        dark: '#555555',
        light_blue: '#ECF2FD',
        blue : '#3B79E4',
        dark_blue: '#4C8591',
        pink : '#FF507C',
        orange: '#ff8d50',
        gray: '#f5f5f5',
        light_gray: '#D9D9D9',
        green: '#3BC376',
        light_green: '#effaf4',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '100%': { transform: 'translateX(-50%)' }
        },
      }
    },
  },
  plugins: [require('daisyui'),],
  
}

