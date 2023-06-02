const plugin = require('tailwindcss/plugin')
const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

module.exports = plugin(({ addComponents, theme }) => {
  const shadow = parseColor(theme('colors.black.DEFAULT')).color

  addComponents({
    '.card': {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      backgroundColor: theme('colors.white.DEFAULT'),
      boxShadow: ` 0px 1px 4px ${formatColor({ mode: 'rgba', color: shadow, alpha: 0.1 })}, 0px 8px 16px ${formatColor({
        mode: 'rgba',
        color: shadow,
        alpha: 0.1,
      })}`,
      transition: 'box-shadow 0.2s ease, transform 0.2s ease',
      overflow: 'hidden',

      '&--active': {
        '&:active': {
          transform: 'translateY(4px)',
        },

        '@media (hover)': {
          '&:hover': {
            boxShadow: ` 0px 1px 4px ${formatColor({
              mode: 'rgba',
              color: shadow,
              alpha: 0.2,
            })}, 0px 8px 16px ${formatColor({
              mode: 'rgba',
              color: shadow,
              alpha: 0.2,
            })}`,
          },
        },
      },

      '&-content': {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      },
    },
  })
})
