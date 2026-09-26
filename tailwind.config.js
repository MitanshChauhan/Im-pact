/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        impact: {
          navy: '#175475',
          gold: '#f1a823',
          purple: '#884e9d',
          green: '#48a053',
          red: '#dc3c39',
          bg: '#ffffff',
          light: '#f8fafc',
          text: '#102f56',
          muted: '#64748b',
          border: '#e2e8f0',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'card-simple': '0 10px 30px rgba(23, 84, 117, 0.06)',
        'button-simple': '0 8px 20px rgba(241, 168, 35, 0.25)',
      }
    },
  },
  plugins: [],
}
