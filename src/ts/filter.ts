const filtering = (name: string, cards: NodeListOf<Element>): void => {
  cards.forEach((element: Element): void => {
    const card = element as HTMLElement
    const absence: boolean = String(card.dataset.filterValue).split(' ').includes(name) === false
    const showAll: boolean = name.toLowerCase() === 'all'

    switch (absence && !showAll) {
    case true: {
      card.classList.add('hidden')
      break
    }

    case false: {
      card.classList.remove('hidden')
      card.classList.add('filter-show')
      setTimeout((): void => card.classList.remove('filter-show'), 300)
      break
    }
    }
  })
}

const init = (): void => {
  const html = document.documentElement as HTMLElement

  if (html.hasAttribute('data-filter-destroy')) return

  const filters = document.querySelectorAll('*[data-filter]') as NodeListOf<Element>

  filters.forEach((element: Element): void => {
    const filter = element as HTMLElement

    if (!filter) return

    const value = String(filter.dataset.filter)
    const categories = document.querySelectorAll(`*[data-filter-category="${value}"]`) as NodeListOf<Element>
    const cards = document.querySelectorAll(`*[data-filter-card="${value}"]`) as NodeListOf<Element>
    const line = document.querySelector(`*[data-filter-line="${value}"]`) as HTMLElement

    const currentCategory = (): HTMLElement => {
      let active = categories[0] as HTMLElement

      categories.forEach((element: Element): void => {
        const category = element as HTMLElement

        if (category.classList.contains('filter-active')) active = category
      })

      return active
    }

    const currentCard = (category: HTMLElement): void => {
      const active = currentCategory()
      const name = String(category.dataset.filterValue)

      active.classList.remove('filter-active')
      category.classList.add('filter-active')

      if (line) {
        line.style.width = `${category.offsetWidth}px`
        line.style.left = `${category.offsetLeft}px`
      }

      filtering(name, cards)
    }

    currentCard(currentCategory())

    categories.forEach((element: Element): void => {
      const category = element as HTMLElement

      if (!category) return

      category.addEventListener('click', ((): void => {
        currentCard(category)
      }) as EventListener)
    })
  })
}

export default { init }
