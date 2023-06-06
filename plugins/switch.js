const plugin = require('tailwindcss/plugin')
const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

module.exports = plugin(({ addComponents, theme }) => {
  const grey = parseColor(theme('colors.dark.DEFAULT')).color

  addComponents({
    '.switch': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      userSelect: 'none',
      color: theme('colors.primary.DEFAULT'),
      border: `1px solid ${formatColor({
        mode: 'rgba',
        color: grey,
        alpha: 0.2,
      })}`,
      transition: '0.2s linear',
      appearance: 'none',
      cursor: 'pointer',

      '&:disabled': {
        pointerEvents: 'none',
        opacity: 0.5,
      },

      '@media (hover)': {
        '&:hover': {
          boxShadow: `0 0 0 4px ${formatColor({
            mode: 'rgba',
            color: grey,
            alpha: 0.1,
          })}`,
        },
      },

      '&--checkbox': {
        minWidth: '20px',
        width: '20px',
        height: '20px',
        borderRadius: '2px',

        '&::after': {
          content: '""',
          display: 'block',
          width: '100%',
          height: '100%',
          backgroundColor: theme('colors.white.DEFAULT'),
          borderRadius: 'inherit',
          opacity: 0,
          transition: 'opacity 0.1s linear',
          mask: 'url("../img/pictures/checkbox.svg") no-repeat center / 12px',
        },

        '&:checked': {
          borderColor: 'currentColor',
          backgroundColor: 'currentColor',

          '&::after': {
            opacity: 1,
          },
        },
      },

      '&--radio': {
        minWidth: '20px',
        width: '20px',
        height: '20px',
        borderRadius: '50%',

        '&::after': {
          content: '""',
          display: 'block',
          width: '12px',
          height: '12px',
          backgroundColor: 'currentColor',
          borderRadius: 'inherit',
          transform: 'scale(0)',
          transition: 'opacity 0.1s linear, transform 0.1s linear',
          opacity: 0,
        },

        '&:checked': {
          '&::after': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
      },

      '&--checkbox, &--radio': {
        '&::before': {
          content: '""',
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '100%',
          height: '100%',
          opacity: 0,
          transform: 'translate(-50%, -50%) scale(0)',
          borderRadius: 'inherit',
          backgroundColor: 'currentColor',
        },

        '&:checked': {
          '&::before': {
            animation: 'switch-checked 0.5s linear both 1',
          },
        },
      },

      '&--toggle': {
        minWidth: '30px',
        width: '30px',
        height: '16px',
        border: 'none',
        borderRadius: '38px',

        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          marginBlock: 'auto',
          height: '14px',
          borderRadius: '38px',
          backgroundColor: theme('colors.white.DEFAULT'),
        },

        '&:not(:checked)': {
          backgroundColor: theme('colors.grey.dark'),

          '&::after': {
            left: '1px',
            right: '15px',
            transition: 'left 0.4s ease, right 0.3s ease 0.1s',
          },
        },

        '&:checked': {
          backgroundColor: theme('colors.green.DEFAULT'),

          '&::after': {
            left: '15px',
            right: '1px',
            transition: 'left 0.3s ease 0.1s, right 0.4s ease',
          },
        },
      },
    },

    '@keyframes switch-checked': {
      '0%': {
        opacity: 1,
      },

      '50%': {
        opacity: 0,
        transform: 'translate(-50%, -50%) scale(3)',
      },
    },
  })
})
