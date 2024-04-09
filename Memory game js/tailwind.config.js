/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./dist/*.html"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },

    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['disabled']
      // You can add more variants here if needed
    }
  },
  
  plugins: [],
}
