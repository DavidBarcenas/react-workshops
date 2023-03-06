/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'todo-app': 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
      },
    },
  },
  plugins: [],
};
