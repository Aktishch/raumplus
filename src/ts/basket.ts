import { coordinates } from './functions/coordinates'

const init = (): void => {
  const basket = document.querySelector('*[data-basket]') as HTMLElement

  if (!basket) return

  const body = document.body as HTMLBodyElement
  const basketClose = basket.querySelector('*[data-basket-close]') as HTMLButtonElement
  const basketImage = basket.querySelector('*[data-basket-image]') as HTMLImageElement
  const basketName = basket.querySelector('*[data-basket-name]') as HTMLElement
  const basketQuantity = basket.querySelector('*[data-basket-quantity]') as HTMLElement
  const basketOldPrice = basket.querySelector('*[data-basket-oldprice]') as HTMLElement
  const basketPrice = basket.querySelector('*[data-basket-price]') as HTMLElement
  const products = document.querySelectorAll('*[data-product]') as NodeListOf<Element>
  const classes: string[] = [
    'in-basket',
    'flex',
    'items-center',
    'justify-center',
    'fixed',
    'z-[1100]',
    'bg-primary',
    'rounded-2',
    'pointer-events-none',
    '-translate-y-1/2',
    '-translate-x-1/2',
    'w-10',
    'h-10',
  ]

  const basketShow = (): void => {
    basket.dataset.basket = 'show'
    basket.classList.remove('invisible', 'opacity-0')
  }

  const basketHidden = (): void => {
    basket.dataset.basket = 'hidden'
    basket.classList.add('invisible', 'opacity-0')
  }

  const productInBasket = (event: MouseEvent): void => {
    const coordinates: coordinates = {
      top: event.clientY,
      left: event.clientX,
    }

    const inBasket = document.createElement('div') as HTMLDivElement

    inBasket.classList.add(...classes)
    inBasket.style.top = `${coordinates.top}px`
    inBasket.style.left = `${coordinates.left}px`
    inBasket.innerHTML = `
      <svg class="icon text-white text-16">
        <use xlink:href="/local/templates/raumplus_07_2023img/icons.svg#basket">
      </svg>`

    body.appendChild(inBasket)

    setTimeout((): void => inBasket.remove(), 2000)
  }

  let timeOut: NodeJS.Timeout

  products.forEach((element: Element): void => {
    const product = element as HTMLElement
    const productImage = product.querySelector('*[data-product-image]') as HTMLImageElement
    const productName = product.querySelector('*[data-product-name]') as HTMLElement
    const productOldPrice = product.querySelector('*[data-product-oldprice]') as HTMLElement
    const productPrice = product.querySelector('*[data-product-price]') as HTMLElement
    const productForm = product.querySelector('*[data-product-form]') as HTMLFormElement
    const productInverted = product.querySelector('*[data-product-inverted]') as HTMLElement
    const productQuantity = product.querySelector('*[data-product-quantity]') as HTMLInputElement
    const productBtn = product.querySelector('*[data-product-button]') as HTMLButtonElement
    const productDecrease = product.querySelector('*[data-product-decrease]') as HTMLButtonElement
    const productIncrease = product.querySelector('*[data-product-increase]') as HTMLButtonElement

    const firstValue = (): void => {
      if (
        productQuantity.value == null ||
        productQuantity.value == '' ||
        productQuantity.value.length == 0 ||
        Number(productQuantity.value) == 0 ||
        !Number(productQuantity.value)
      ) {
        productQuantity.value = '1'
      }
    }

    const basketCompletion = (): void => {
      if (basket.dataset.basket == 'show') basketHidden()

      setTimeout((): void => {
        basketShow()

        if (basketImage && productImage) basketImage.src = String(productImage.dataset.productImage)

        if (basketName && productName) basketName.innerText = String(productName.textContent)

        if (basketQuantity && productQuantity) {
          basketQuantity.innerText = String(productQuantity.value)

          const formData: FormData = new FormData(productForm)
          const requestUrl = String(productForm.dataset.request)
          let action = ''

          for (const [name, value] of formData) {
            if (name === 'quantity') {
              switch (Number(value) > 0) {
              case true: {
                action = 'UpdateCart'
                break
              }

              case false: {
                action = 'DeleteFromCart'
                break
              }
              }
            }
          }

          formData.append('action', action)

          fetch(requestUrl, {
            method: 'POST',
            body: formData,
          })
            .then((response: Response): any => {
              response.text()
            })
            .then((response: any): void => {
              console.log('action')
            })
        } else {
          basketQuantity.innerText = '1'
        }

        if (basketOldPrice && productOldPrice) {
          basketOldPrice.innerText = String(productOldPrice.textContent)
        } else {
          basketOldPrice.innerText = ''
        }

        if (basketPrice && productPrice) basketPrice.innerText = String(productPrice.textContent)

        if (timeOut) clearTimeout(timeOut)

        timeOut = setTimeout((): void => basketHidden(), 5000)
      }, 300)
    }

    const quantityDecrease = (): void => {
      if (Number(productQuantity.value) == 1) {
        basketHidden()
        productInverted.dataset.inverted = 'before'
      }

      basketCompletion()
    }

    const quantityEmpty = (event: Event): void => {
      if (
        productQuantity.value == null ||
        productQuantity.value == '' ||
        productQuantity.value.length == 0 ||
        Number(productQuantity.value) == 0 ||
        !Number(productQuantity.value)
      ) {
        if (event.type === 'blur') {
          productInverted.dataset.inverted = 'before'
          productQuantity.value = '0'
        }

        basketHidden()
        basketCompletion()
      } else {
        if (event.type === 'input') {
          basketCompletion()
        }
      }
    }

    productBtn.addEventListener('click', firstValue as EventListener)
    productBtn.addEventListener('click', productInBasket as EventListener)
    productBtn.addEventListener('click', basketCompletion as EventListener)
    productDecrease.addEventListener('click', quantityDecrease as EventListener)
    productIncrease.addEventListener('click', productInBasket as EventListener)
    productIncrease.addEventListener('click', basketCompletion as EventListener)
    basketClose.addEventListener('click', basketHidden as EventListener)
    productQuantity.addEventListener('input', quantityEmpty as EventListener)
    productQuantity.addEventListener('blur', quantityEmpty as EventListener)
  })
}

export default { init }
