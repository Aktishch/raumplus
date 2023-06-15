const plugin = require('tailwindcss/plugin')
const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

module.exports = plugin(({ addComponents, matchComponents, theme }) => {
  const grey = parseColor(theme('colors.dark.DEFAULT')).color

  addComponents({
    '.input-cover': {
      display: 'flex',
      width: '100%',
    },

    '.input': {
      flexGrow: 1,
      display: 'block',
      width: '100%',
      backgroundColor: theme('colors.white.DEFAULT'),
      padding: '8px 16px',
      border: `1px solid ${formatColor({
        mode: 'rgba',
        color: grey,
        alpha: 0.2,
      })}`,
      transition: '0.2s ease',
      userSelect: 'initial',

      '&:focus': {
        outline: 'none',
      },

      '&:not(&--error):focus': {
        borderColor: formatColor({
          mode: 'rgba',
          color: grey,
          alpha: 0.5,
        }),
      },

      '&::placeholder': {
        color: formatColor({
          mode: 'rgba',
          color: grey,
          alpha: 0.3,
        }),
      },

      '&[disabled]': {
        pointerEvents: 'none',
        opacity: 0.5,
      },

      '&-light': {
        color: theme('colors.white.DEFAULT'),
        background: 'none',
        borderColor: formatColor({
          mode: 'rgba',
          color: parseColor(theme('colors.smoke.DEFAULT')).color,
          alpha: 0.2,
        }),

        '&:not(&--error):focus': {
          borderColor: theme('colors.white.DEFAULT'),
        },

        '&::placeholder': {
          color: formatColor({
            mode: 'rgba',
            color: parseColor(theme('colors.smoke.DEFAULT')).color,
            alpha: 0.4,
          }),
        },
      },

      '&--error': {
        borderColor: theme('colors.red.DEFAULT'),
      },
    },
  })

  matchComponents(
    {
      input: (size) => {
        return {
          height: size,
        }
      },
    },

    {
      values: theme('size'),
    }
  )
})
