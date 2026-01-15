import { VueQueryPlugin } from '@tanstack/vue-query'
import type { App } from 'vue'
import {
  createApp,
  defineComponent,
} from 'vue'

/**
 * Helper to run composables inside a setup context for testing
 * Executes the composable function within a Vue component's setup lifecycle
 */
export function runInSetup<T>(composable: () => T): T {
  let result: T | null = null
  let app: App | null = null

  const component = defineComponent({
    setup() {
      result = composable()

      return (): null => null
    },
  })

  app = createApp(component)
  app.use(VueQueryPlugin)

  const container = document.createElement('div')

  document.body.appendChild(container)
  app.mount(container)

  if (!result) {
    throw new Error('Composable did not return a value')
  }

  // Note: We don't unmount here to keep the injection context alive
  // The vitest.setup.ts handles global cleanup

  return result
}
