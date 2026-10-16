/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0d1117',
        paper: '#f8f3e8',
        accent: '#d97706',
        mint: '#1f7a6c',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      }, // <-- comma added here
      boxShadow: {
        card: '0 20px 40px rgba(13, 17, 23, 0.12)',
      },
    },
  },
  plugins: [],
};