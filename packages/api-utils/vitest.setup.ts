import { VueQueryPlugin } from '@tanstack/vue-query'
import {
  afterEach,
  beforeAll,
} from 'vitest'
import {
  createApp,
  defineComponent,
  h,
} from 'vue'

let app: ReturnType<typeof createApp> | null = null
let container: HTMLElement | null = null

beforeAll(() => {
  if (!app) {
    // Create a persistent app instance for all tests
    const TestComponent = defineComponent({
      setup() {
        return () => h('div')
      },
    })

    app = createApp(TestComponent)
    app.use(VueQueryPlugin)

    // Create a dummy element for mounting
    container = document.createElement('div')
    document.body.appendChild(container)
    app.mount(container)
  }
})

afterEach(() => {
  // Query cache will be automatically cleaned between tests
})
