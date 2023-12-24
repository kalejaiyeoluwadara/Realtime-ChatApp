/** @type {import('tailwindcss').Config} */
export default {
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
  theme: {
    extend: {
      colors: {
        dark: 'bg-gray-900',
        customGreen: '#2ecc71',
      },
    },
  },
  plugins: [],
}

