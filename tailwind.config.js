/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '900px',    // Reduced from 1024px
        'xl': '1100px',   // Reduced from 1280px
        '2xl': '1200px',  // Reduced from 1536px
      },
    },
  },
  plugins: [],
}
