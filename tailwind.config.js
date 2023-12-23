module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'forex-web': "url('/bg-forex-web.png')",
        'cta': "url('/cta_banner.png')",
        'forex-mobile': "url('/bg-mobile.png')",
      },
      fontFamily:{
        urbanist: ['Urbanist', 'sans-serif'],
        manrope:["Manrope", 'sans-serif'],
      },

      keyframes:{
        slide1:{
           '0%':{transform: 'translateX(10%)', 'opacity':0.5},
           '100%':{transform: 'translateX(0%)', 'opacity':1},
        },
        slide2:{
          '0%':{transform: 'translateY(30%)', 'opacity':0.5},
          '100%':{transform: 'translateY(0%)', 'opacity':1},
       },
      },

      animation:{
        'sliding-right':'slide1 0.8s linear',
        'sliding-up':'slide2 0.8s linear',
      }
    },
  },
  plugins: [],
}