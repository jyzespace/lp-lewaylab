/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'border-top': {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '25%': { transform: 'translateX(100%)' },
          '25.1%, 99.9%': { transform: 'translateX(100%)' },
        },
        'border-right': {
          '0%, 25%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(100%)' },
          '50.1%, 100%': { transform: 'translateY(100%)' },
        },
        'border-bottom': {
          '0%, 50%': { transform: 'translateX(100%)' },
          '75%': { transform: 'translateX(-100%)' },
          '75.1%, 100%': { transform: 'translateX(-100%)' },
        },
        'border-left': {
          '0%, 75%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        'border-top': 'border-top 3s linear infinite',
        'border-right': 'border-right 3s linear infinite',
        'border-bottom': 'border-bottom 3s linear infinite',
        'border-left': 'border-left 3s linear infinite',
      },
    },
  },
  plugins: [],
};
