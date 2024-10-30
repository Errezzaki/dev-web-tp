/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: ["./*.html","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
        screens : {
          'tablet':'835px',
        
        },
      colors :{
          'mdark-violet' :'#061A40' ,
          'msmoht-green':'#0e7c7b',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

