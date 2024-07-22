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
        blue : '#d9f2f3',
        dark_blue: '#4C8591',
        pink : '#d75d83',
        orange: '#ff8d50',
        gray: '#f5f5f5',
        light_gray: '#D9D9D9',
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

