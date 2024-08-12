/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', opacity: '0' },
          '50%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        bounce: 'bounce 10s infinite',
        'fade-in': 'fade-in 10s ease-in-out',
      },
    },
  },
  plugins: [],
}