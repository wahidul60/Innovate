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
        'Nunito':["Nunito"],
        'Quicksand' : ["Quicksand"],
      },
      colors:{
        'primary':'#EFF4FA',
        'secondary':'#1BBF00',
        'thirdly':'#141135',
        'forthly':'#160c6d80',
        'bgGallery':'#F9F9FB',
      },      
      maxWidth:{
        'container' : '1170px',
      },
      backgroundImage: {
        'backgroundIm': "url('./public/Background.png')",
        'BgElement' : "url('./src/assets/bgElement.png')",     
        'BgElement2' : "url('./src/assets/bgElement2.png')",
        'impactBackground' : "url('./src/assets/impactbg.png')" ,
        'BgElement3' : "url('./src/assets/bgElement3.png')",
      },      
    }, 
  },
  
 
}

