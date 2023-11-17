import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import media from '../ts/functions/media'

const init = () => {
  new Swiper('.main-slider .swiper', {
    pagination: {
      el: '.main-slider .swiper-pagination',
      clickable: true,
    },

    navigation: {
      prevEl: '.main-slider .swiper-button-prev',
      nextEl: '.main-slider .swiper-button-next',
    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 16,
    speed: 1000,
    loop: true,
    grabCursor: true,
    watchSlidesProgress: true,

    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
  })

  new Swiper('.creative-slider .swiper', {
    navigation: {
      prevEl: '.creative-slider .swiper-button-prev',
      nextEl: '.creative-slider .swiper-button-next',
    },

    slidesPerView: 1.3,
    slidesPerGroup: 1,
    spaceBetween: 16,
    speed: 500,
    grabCursor: true,
    loop: true,
    watchSlidesProgress: true,

    breakpoints: {
      [media.xs]: {
        slidesPerView: 2,
      },

      [media.md]: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
    },

    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
  })

  new Swiper('.system-slider .swiper', {
    pagination: {
      el: '.system-slider .swiper-pagination',
      clickable: true,
    },

    navigation: {
      prevEl: '.system-slider .swiper-button-prev',
      nextEl: '.system-slider .swiper-button-next',
    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 16,
    speed: 500,
    grabCursor: true,
    watchSlidesProgress: true,
  })

  const productionBullets = new Swiper('.production-bullets .swiper', {
    navigation: {
      prevEl: '.production-bullets .swiper-button-prev',
      nextEl: '.production-bullets .swiper-button-next',
    },

    direction: 'horizontal',
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 8,
    speed: 500,
    grabCursor: true,
    watchSlidesProgress: true,

    breakpoints: {
      [media.md]: {
        direction: 'vertical',
        slidesPerView: 'auto',
        spaceBetween: 16,
      },

      [media.xl]: {
        direction: 'horizontal',
        slidesPerView: 4,
      },
    },
  })

  new Swiper('.production-slider .swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 16,
    speed: 500,
    grabCursor: true,
    watchSlidesProgress: true,

    thumbs: {
      swiper: productionBullets,
    },
  })

  new Swiper('.production-items-slider .swiper', {
    navigation: {
      prevEl: '.production-items-slider .swiper-button-prev',
      nextEl: '.production-items-slider .swiper-button-next',
    },

    slidesPerView: 1.3,
    slidesPerGroup: 1,
    spaceBetween: 16,
    speed: 500,
    grabCursor: true,
    watchSlidesProgress: true,

    breakpoints: {
      [media.sm]: {
        slidesPerView: 2,
      },

      [media.md]: {
        slidesPerView: 2.5,
        spaceBetween: 32,
      },

      [media.lg]: {
        slidesPerView: 3,
      },

      [media.xl]: {
        slidesPerView: 4,
      },
    },
  })

  new Swiper('.series-slider .swiper', {
    navigation: {
      prevEl: '.series-slider .swiper-button-prev',
      nextEl: '.series-slider .swiper-button-next',
    },

    slidesPerView: 2.3,
    slidesPerGroup: 1,
    spaceBetween: 16,
    speed: 500,
    grabCursor: true,
    watchSlidesProgress: true,

    breakpoints: {
      [media.sm]: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      [media.lg]: {
        slidesPerView: 4,
      },

      [media.xl]: {
        slidesPerView: 5,
      },
    },
  })

  new Swiper('.series-products .swiper', {
    pagination: {
      el: '.series-products .swiper-pagination',
      clickable: true,
    },

    slidesPerView: 1.4,
    slidesPerGroup: 1,
    spaceBetween: 16,
    speed: 500,
    grabCursor: true,
    watchSlidesProgress: true,

    breakpoints: {
      [media.xs]: {
        slidesPerView: 2,
      },

      [media.sm]: {
        slidesPerView: 3,
      },

      [media.lg]: {
        slidesPerView: 1,
      },
    },
  })

  new Swiper('.gallery-slider .swiper', {
    pagination: {
      el: '.gallery-slider .swiper-pagination',
      clickable: true,
    },

    navigation: {
      prevEl: '.gallery-slider .swiper-button-prev',
      nextEl: '.gallery-slider .swiper-button-next',
    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 16,
    speed: 1000,
    loop: true,
    grabCursor: true,
    watchSlidesProgress: true,
  })

  new Swiper('.awards-slider .swiper', {
    pagination: {
      el: '.awards-slider .swiper-pagination',
      clickable: true,
    },

    navigation: {
      prevEl: '.awards-slider .swiper-button-prev',
      nextEl: '.awards-slider .swiper-button-next',
    },

    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 12,
    speed: 500,
    grabCursor: true,
    watchSlidesProgress: true,

    breakpoints: {
      [media.md]: {
        slidesPerView: 4,
      },

      [media.xl]: {
        slidesPerView: 3,
      },
    },

    grid: {
      rows: 2,
    },
  })

  window.Swiper = Swiper
}

export default { init }
