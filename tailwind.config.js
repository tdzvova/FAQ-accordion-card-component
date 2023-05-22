/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',

  ],
  theme: {
    screens:  {
      sm: '375px',
      md: '640px',
      lg: '1440px',
      xl: '1440px',
      '2xl':  '1440px',
    },
    fontFamily: {
      'Kumbh Sans': ['Kumbh Sans, sans-serif'],
    },
    extend: {
      colors: {
        VeryDarkDesaturatedBlue: 'hsl(238, 29%, 16%)',
        SoftRed: 'hsl(14, 88%, 65%)',
        SoftViolet: 'hsl(273, 75%, 66%)',
        SoftBlue: 'hsl(240, 73%, 65%)',
        VeryDarkGrayishBlue: 'hsl(237, 12%, 33%)',
        DarkGrayishBlue: 'hsl(240, 6%, 50%)',
        LightGrayishBlue: 'hsl(240, 5%, 91%)',

      },
    },
  },
  plugins: [],
}

