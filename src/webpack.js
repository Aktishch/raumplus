// Libraries
import fancybox from './lib/fancybox'
import sliderSwiper from './lib/slider-swiper'

// Scripts
import scrollHeader from './ts/scroll-header'
import currentTab from './ts/current-tab'
import mobileMenu from './ts/mobile-menu'
import sidebar from './ts/sidebar'
import scrollTo from './ts/scroll-to'
import animation from './ts/animation'
import waved from './ts/waved'
import inverted from './ts/inverted'
import listing from './ts/listing'
import accordion from './ts/accordion'
import parallax from './ts/parallax'
import filter from './ts/filter'
import outNumber from './ts/out-number'
import formSubmit from './ts/form-submit'
import choiceFile from './ts/choice-file'
import formInputs from './ts/form-inputs'
import maskTel from './ts/mask-tel'
import password from './ts/password'
import quantity from './ts/quantity'
import basket from './ts/basket'
import preloader from './ts/preloader'

// Style
import './scss/index.scss'

// Connection
window.addEventListener('DOMContentLoaded', () => {
  fancybox.init()
  sliderSwiper.init()
  currentTab.init()
  scrollHeader.init()
  mobileMenu.init()
  sidebar.init()
  scrollTo.init()
  animation.init()
  waved.init()
  inverted.init()
  listing.init()
  accordion.init()
  parallax.init()
  filter.init()
  outNumber.init()
  formSubmit.init()
  choiceFile.init()
  formInputs.init()
  maskTel.init()
  password.init()
  quantity.init()
  basket.init()
  preloader.init()
})
