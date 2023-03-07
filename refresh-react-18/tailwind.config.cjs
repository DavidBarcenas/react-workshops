/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        zoom: 'zoomIn .2s ease-in-out',
      },
      backgroundImage: {
        'todo-app': 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
        'tic-tac-toe':
          'radial-gradient( circle farthest-corner at 39.2% 57.3%,  rgba(20,82,111,1) 30.9%, rgba(25,67,86,1) 74.6% )',
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
