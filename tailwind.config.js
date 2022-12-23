/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,php}'],
  darkMode: 'class',
  theme: {
    screens: {
      xl: { max: '1399.98px' },
      lg: { max: '1199.98px' },
      md: { max: '991.98px' },
      sm: { max: '767.98px' },
      xs: { max: '575.98px' },
    },
    container: {
      center: true,
      padding: '20px',
    },

    extend: {
      colors: {
        lightblack: '#4D4244',
        lightred: '#FF0D38',
        lightgray: '#747474',
        darkred: '#D70026',
        darkgray: '#272727',
      },
      boxShadow: {
        customred: '0px 0px 30px rgba(255, 13, 56, 0.21);',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/line-clamp"),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
