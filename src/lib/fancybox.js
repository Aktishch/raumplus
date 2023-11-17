import { Fancybox } from '@fancyapps/ui'
import ru from '@fancyapps/ui/src/Fancybox/l10n/ru'
import '@fancyapps/ui/dist/fancybox.css'
import basket from '../ts/basket'
import waved from '../ts/waved'

const init = () => {
  Fancybox.defaults.trapFocus = false
  Fancybox.defaults.autoFocus = false
  Fancybox.defaults.placeFocusBack = false
  Fancybox.defaults.l10n = ru
  Fancybox.defaults.template.spinner = '<div class="preloader"><div class="preloader-circle"></div></div>'

  Fancybox.bind('[data-fancybox-dialog]', {
    dragToClose: false,
    mainClass: 'fancybox-dialog',

    on: {
      done: () => {
        waved.init()
      },
    },
  })

  Fancybox.bind('[data-fancybox-product]', {
    dragToClose: false,
    mainClass: 'fancybox-dialog',

    on: {
      done: () => {
        basket.init()
        waved.init()
      },
    },
  })

  window.Fancybox = Fancybox
}

export default { init }
