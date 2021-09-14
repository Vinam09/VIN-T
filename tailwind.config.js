module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '250px',
      'sm2': '550px',
      'xm': '765px',
      'md': '950px',
      'lg': '1024px',
      'lg2': '1250px',
      'xl': '1400px',
      '2xl': '1536px',
    },
    
    extend: {
      colors: {
        primary: "#c9e1e1",
        secondary: "#131d2a",
        hovercolor: "#16a7c1",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        body:['Open Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
        animation: ['hover', 'group-hover'],
    },
  },
  plugins: [],
}
