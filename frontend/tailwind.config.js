/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(24, 100%, 50%)',     // Primary Orange
        background: '#FFFFFF',              // White
        textMain: '#2F4F4F',                // Dark Slate
        secondary: '#D3D3D3',               // Light Gray
        borderSoft: '#F3F4F6',              // Soft Gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        sanskrit: ['Samarkan', 'serif'],    // For Sanskrit accents
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}