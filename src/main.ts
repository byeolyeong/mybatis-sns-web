import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="counter-app">
    <h1>카운터</h1>
    <p class="count" data-count>0</p>
    <div class="actions">
      <button type="button" data-decrement aria-label="감소">−</button>
      <button type="button" data-reset>리셋</button>
      <button type="button" class="primary" data-increment aria-label="증가">+</button>
    </div>
  </main>
`

setupCounter(document.querySelector<HTMLElement>('#app')!)
