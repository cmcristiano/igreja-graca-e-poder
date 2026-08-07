/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#C81D25',
          primaryHover: '#A7151D',
          dark: '#0F172A',
          darkCard: '#1E293B',
          gold: '#F59E0B',
          amber: '#D97706',
          light: '#F8FAFC',
          whatsapp: '#25D366',
          whatsappHover: '#1EBE5D'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
