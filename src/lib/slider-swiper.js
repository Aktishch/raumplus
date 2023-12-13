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

  const productionSlidersContainers = document.querySelectorAll('.production-sliders-container')

  productionSlidersContainers.forEach((container) => {
    const productionBullets = container.querySelector('.production-bullets')
    const productionBulletsSwiper = productionBullets.querySelector('.swiper')
    const productionBulletsPrev = productionBullets.querySelector('.swiper-button-prev')
    const productionBulletsNext = productionBullets.querySelector('.swiper-button-next')
    const productionSlider = container.querySelector('.production-slider')
    const productionSliderSwiper = productionSlider.querySelector('.swiper')

    const productionBulletsSlider = new Swiper(productionBulletsSwiper, {
      navigation: {
        prevEl: productionBulletsPrev,
        nextEl: productionBulletsNext,
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

    new Swiper(productionSliderSwiper, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 16,
      speed: 500,
      grabCursor: true,
      watchSlidesProgress: true,

      thumbs: {
        swiper: productionBulletsSlider,
      },
    })
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

  const seriesSliders = document.querySelectorAll('.series-slider')

  seriesSliders.forEach((seriesSlider) => {
    if (!seriesSlider) return

    const seriesSwiper = seriesSlider.querySelector('.series-swiper')
    const seriesButtonPrev = seriesSlider.querySelector('.series-button-prev')
    const seriesButtonNext = seriesSlider.querySelector('.series-button-next')
    const xl = Number(seriesSlider.dataset.sliderXl)
    const lg = Number(seriesSlider.dataset.sliderLg)
    const sm = Number(seriesSlider.dataset.sliderSm)

    new Swiper(seriesSwiper, {
      navigation: {
        prevEl: seriesButtonPrev,
        nextEl: seriesButtonNext,
      },

      slidesPerView: 2.3,
      slidesPerGroup: 1,
      spaceBetween: 16,
      speed: 500,
      grabCursor: true,
      watchSlidesProgress: true,

      breakpoints: {
        [media.sm]: {
          slidesPerView: sm,
          spaceBetween: 20,
        },

        [media.lg]: {
          slidesPerView: lg,
        },

        [media.xl]: {
          slidesPerView: xl,
        },
      },
    })
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

  new Swiper('.calculator-slider .swiper', {
    pagination: {
      el: '.calculator-slider .swiper-pagination',
      clickable: true,
    },

    navigation: {
      prevEl: '.calculator-slider .swiper-button-prev',
      nextEl: '.calculator-slider .swiper-button-next',
    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 16,
    speed: 500,
    grabCursor: true,
    watchSlidesProgress: true,
  })

  window.Swiper = Swiper
}

export default { init }
