/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.html', './src/ts/**/*.ts', './src/lib/**/*.js'],

  corePlugins: {
    container: false,
  },

  future: {
    hoverOnlyWhenSupported: true,
  },

  theme: {
    screens: {
      xs: 459.98 + 'px',
      sm: 575.98 + 'px',
      md: 767.98 + 'px',
      lg: 991.98 + 'px',
      xl: 1349.98 + 'px',
      xxl: 1999.98 + 'px',
    },

    colors: {
      primary: {
        DEFAULT: '#B19777',
        dark: '#8D7557',
        active: '#62503A',
        focus: '#62503A',
      },

      dark: {
        DEFAULT: '#181818',
      },

      black: {
        DEFAULT: '#000000',
      },

      white: {
        DEFAULT: '#FFFFFF',
      },

      gray: {
        DEFAULT: '#30373E',
      },

      grey: {
        DEFAULT: '#F3F3F3',
        dark: '#AFAFAF',
      },

      smoke: {
        DEFAULT: '#ECECE7',
      },

      red: {
        DEFAULT: '#be1b1b',
      },

      green: {
        DEFAULT: '#3F8D2A',
      },
    },

    fontFamily: {
      base: 'var(--font-base)',
    },

    extend: {
      fontSize: {
        10: '0.625rem',
        12: '0.75rem',
        14: '0.875rem',
        16: '1rem',
        18: '1.125rem',
        20: '1.25rem',
        22: '1.375rem',
        24: '1.5rem',
        26: '1.625rem',
        28: '1.75rem',
        30: '1.875rem',
        32: '2rem',
        34: '2.125rem',
        36: '2.25rem',
        38: '2.375rem',
        40: '2.5rem',
        42: '2.625rem',
        44: '2.75rem',
        46: '2.875rem',
        48: '3rem',
        50: '3.125rem',
        title: '3.5rem',
        number: '7.5rem',
      },

      lineHeight: {
        1: 1.1,
        2: 1.2,
        3: 1.3,
        4: 1.4,
        5: 1.5,
        6: 1.6,
        7: 1.7,
        8: 1.8,
        9: 1.9,
      },

      borderRadius: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        max: '50%',
      },

      gridColumn: {
        1: 'span 1',
        2: 'span 2',
        3: 'span 3',
        4: 'span 4',
        5: 'span 5',
        6: 'span 6',
        7: 'span 7',
        8: 'span 8',
        9: 'span 9',
        10: 'span 10',
        11: 'span 11',
        12: 'span 12',
      },

      gridRow: {
        1: 'span 1',
        2: 'span 2',
        3: 'span 3',
        4: 'span 4',
        5: 'span 5',
        6: 'span 6',
        7: 'span 7',
        8: 'span 8',
        9: 'span 9',
        10: 'span 10',
        11: 'span 11',
        12: 'span 12',
      },

      transitionDuration: {
        1: '0.1s',
        2: '0.2s',
        3: '0.3s',
        4: '0.4s',
        5: '0.5s',
        6: '0.6s',
        7: '0.7s',
        8: '0.8s',
        9: '0.9s',
        10: '1s',
      },

      transitionDelay: {
        1: '0.1s',
        2: '0.2s',
        3: '0.3s',
        4: '0.4s',
        5: '0.5s',
        6: '0.6s',
        7: '0.7s',
        8: '0.8s',
        9: '0.9s',
        10: '1s',
      },

      zIndex: {
        1: 100,
        2: 200,
        3: 300,
        4: 400,
        5: 500,
        6: 600,
        7: 700,
        8: 800,
        9: 900,
        10: 1000,
      },
    },

    size: {
      xs: '29px',
      sm: '36px',
      md: '44px',
      lg: '54px',
      xl: '64px',
      xxl: '70px',
    },
  },

  plugins: [
    require('./plugins/container'),
    require('./plugins/dialog'),
    require('./plugins/card'),
    require('./plugins/pack'),
    require('./plugins/image'),
    require('./plugins/form'),
    require('./plugins/input'),
    require('./plugins/button'),
    require('./plugins/switch'),
    require('./plugins/animation'),
  ],
}
