module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage:{
        'pattern' : "url('./inspiration-geometry.png')",
        'stardust' : "url('./stardust.png')"
      },
      colors: {
        'malibu': {
          '50': '#f7fcff', 
          '100': '#f0faff', 
          '200': '#d9f2ff', 
          '300': '#c1e9ff', 
          '400': '#93d9ff', 
          '500': '#65c9ff', 
          '600': '#5bb5e6', 
          '700': '#4c97bf', 
          '800': '#3d7999', 
          '900': '#31627d'
      }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}