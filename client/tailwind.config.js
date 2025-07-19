// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: 'class', // Enables dark mode with class strategy

  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.7s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-300': { 'animation-delay': '0.3s' },
        '.animation-delay-400': { 'animation-delay': '0.4s' },
        '.animation-delay-500': { 'animation-delay': '0.5s' },
        '.animation-delay-600': { 'animation-delay': '0.6s' },
        '.animation-delay-700': { 'animation-delay': '0.7s' },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
