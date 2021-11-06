module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        KumbhSans: ['Kumbh Sans', 'sans-serif'],
      },
      backgroundImage: {
        'header-desktop': `url('/src/assets/desktop/bg-pattern-header.svg')`,
      },
      colors: {
        violet: {
          dark: '#5964E0',
          light: '#939BF4',
        },
        blue: {
          dark: '#19202D',
          midnight: '#121721',
        },

        grey: {
          light: '#F4F6F8',
          med: '#9DAEC2',
          dark: '#6E8098',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
