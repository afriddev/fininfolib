/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '300px',

      'md': '765px',

      'lg': '1023px',
      'xl':'1300px'
    },
    extend: {
      animation:{
        hero:'hero 100s infinite',
        sfl:'sfl 2s ',
        hang:'hang  ease-in-out 1s infinite alternate'
       
      },
      keyframes:{
        hang:{
          '0%':{
            'transform':'rotate(10deg)'

          },
          '100%':{
            'transform':'rotate(-10deg)'
          }
        },
        sfl:{
          '0%':{
            'transform':'translateX(-100vw)'},
          '100%':{
            'transform':'translateX(0px)'
          }
        },
        hero:{
          '0%':{
            'color':"#f72585"
          },
          '10%':{
            'color':'#ffb703'
          },
          '20%':{
            'color':'#7209b7'
          },
          '30%':{
            'color':'#ff6700'
          },
          '40%':{
            'color':'#9fffcb'
          },
          '50%':{
            'color':'#072ac8'
          },
          '60%':{
            'color':'#ff499e'
          },
          '70%':{
            'color':'#ff002b'
          },
          '80%':{
            'color':'#ff66b3'
          },
          '90%':{
            'color':'#b5ffe1'
          },
          '100%':{
            'color':'#ffb703'
          },
          
          

        }

      },
      colors:{
        'y':'#ffd60a',
        'shake':'#fdf0d5',
        'lB':'#fef9ff',
        'white':'#ffffff',
        'o':"#ff5400",
        'pH':"#007bff",
        'sH':"#010521",

        'primary':"#0d1e67",
        'lightBlue':'#fafcff',
        'darkBlue':'#010521',
        'lightGreen':'#048071',
        "lightOrange":'#ef8b33',
        'primaryGreen':"#048071",
        "lG":"#d7ffe0",
        "lo":"#ff7924",
        'lt':"#00C0A7",
        'g':"#00E97C",
        'o1':'#FE5500',
        'red':'#ff0000',
        'o2':"#dc3545",
        'sec':"#674df3",
        'bg2':"#c6ffeb",

      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        m:['Montserrat','sans-serif']
      }
    },
  },
  plugins: [],
}
        //'o2':'#9b3503',
