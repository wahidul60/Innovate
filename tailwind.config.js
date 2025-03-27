/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Sans':['Open Sans'],
        'Paprika':["Paprika"],
      },
      colors:{
        'primary':'#EFF4FA',
        'secondary':'#1BBF00',
        'thirdly':'#141135',
      },      
      maxWidth:{
        'container' : '1170px',
      }
    }   
  },
  plugins: [],
}

