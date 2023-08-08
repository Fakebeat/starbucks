/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
            'puti':'#ffffff',
            'maitim':'#2b2b2b',
            'lasalle':'#008248',
            'semento':'hsl(240,1.51%,50.98%)',
            'lblue':'#f1f8f6',
            'semiblue':'#d4e9e2'
           },
           backgroundImage:{
            'star':"url('../img/rewards/star.png')"
           },
    },
  },
  plugins: [],
}