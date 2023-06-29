import { coordinates } from './functions/coordinates'
import media from './functions/media'

const init = (): void => {
  const parallax = document.querySelector('*[data-parallax]') as HTMLElement

  if (!parallax || window.screen.width < media.lg) return

  const items = parallax.querySelectorAll('*[data-parallax-item]') as NodeListOf<Element>

  items.forEach((element: Element): void => {
    const item = element as HTMLElement

    if (!item) return

    parallax.addEventListener('mousemove', ((event: MouseEvent): void => {
      const coordinates: coordinates = {
        top: event.clientY / window.innerHeight,
        left: event.clientX / window.innerWidth,
      }

      item.style.setProperty('--y', `${coordinates.top}px`)
      item.style.setProperty('--x', `${coordinates.left}px`)
    }) as EventListener)
  })
}

export default { init }
