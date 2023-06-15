import scrollbar from './functions/scrollbar'
import media from '../ts/functions/media'

const init = (): void => {
  const sidebar = document.querySelector('*[data-sidebar]') as HTMLElement

  if (!sidebar) return

  const open = document.querySelector('*[data-sidebar-open]') as HTMLButtonElement
  const close = sidebar.querySelector('*[data-sidebar-close]') as HTMLButtonElement

  if (!open || !close) return

  const openSidebar = (): void => {
    scrollbar.hidden()

    sidebar.dataset.sidebar = 'open'
  }

  const closeSidebar = (): void => {
    scrollbar.show()

    sidebar.dataset.sidebar = 'close'
  }

  open.addEventListener('click', openSidebar as EventListener)
  close.addEventListener('click', closeSidebar as EventListener)

  document.addEventListener('click', ((event: Event): void => {
    if ((event.target as HTMLElement).hasAttribute('data-sidebar')) closeSidebar()
  }) as EventListener)

  window.addEventListener('resize', ((): void => {
    if (window.screen.width > media.lg) closeSidebar()
  }) as EventListener)
}

export default { init }
