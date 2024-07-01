/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      container:{
        center:true,
        padding:{
          DEFAULT:"2rem",
          sm:"1.5rem"
        }
      }
    },
  },
  plugins: [],
}

