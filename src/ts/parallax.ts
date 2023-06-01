import { coordinates } from './functions/coordinates'
import media from './functions/media'

const init = (): void => {
  const parallax = document.querySelector('*[data-parallax]') as HTMLElement

  if (!parallax || window.screen.width < media.lg) return

  const parallaxItems = parallax.querySelectorAll('*[data-parallax-item]') as NodeListOf<Element>

  parallaxItems.forEach((element: Element): void => {
    const parallaxItem = element as HTMLElement

    if (!parallaxItem) return

    parallax.addEventListener('mousemove', ((event: MouseEvent): void => {
      const coordinates: coordinates = {
        top: event.clientY / window.innerHeight,
        left: event.clientX / window.innerWidth,
      }

      parallaxItem.style.setProperty('--y', `${coordinates.top}px`)
      parallaxItem.style.setProperty('--x', `${coordinates.left}px`)
    }) as EventListener)
  })
}

export default { init }
