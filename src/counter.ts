export function setupCounter(root: HTMLElement) {
  let count = 0

  const valueEl = root.querySelector<HTMLElement>('[data-count]')!
  const decrementBtn = root.querySelector<HTMLButtonElement>('[data-decrement]')!
  const incrementBtn = root.querySelector<HTMLButtonElement>('[data-increment]')!
  const resetBtn = root.querySelector<HTMLButtonElement>('[data-reset]')!

  const render = () => {
    valueEl.textContent = String(count)
  }

  decrementBtn.addEventListener('click', () => {
    count -= 1
    render()
  })

  incrementBtn.addEventListener('click', () => {
    count += 1
    render()
  })

  resetBtn.addEventListener('click', () => {
    count = 0
    render()
  })

  render()
}
