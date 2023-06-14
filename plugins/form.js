const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, matchComponents, theme }) => {
  addComponents({
    '.form': {
      display: 'flex',
      flexDirection: 'column',

      '&-label': {
        display: 'flex',
        flexDirection: 'column',
      },

      '&-wrapper': {
        display: 'block',
        position: 'relative',
        width: '100%',
      },

      '&-icon': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: 'var(--form-icon)',
        height: 'var(--form-icon)',
        pointerEvents: 'none',

        '&--pointer': {
          pointerEvents: 'all',
        },

        '&--left': {
          left: 0,
        },

        '&--right': {
          right: 0,
        },
      },

      '&-error': {
        fontSize: theme('fontSize.12'),
        color: theme('colors.red.DEFAULT'),
        display: 'flex',
        alignItems: 'flex-start',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: '-18px',
        opacity: 0,
        visibility: 'hidden',
        transition: '0.3s ease',
      },
    },
  })

  matchComponents(
    {
      'form-icon': (size) => {
        return {
          '--form-icon': size,
        }
      },
    },

    {
      values: theme('size'),
    }
  )
})
