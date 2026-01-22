import type { ModuleDefinition } from '@wisemen/vue-core-module-registry'

import {
  setupTemplateModule,
  useTemplateModuleContext,
} from './context/context'
import type { TemplateModuleOptions } from './types'

/**
 * Create a Template module instance with the given options
 *
 * @example
 * ```typescript
 * const module = createTemplateModule({
 *   apiUrl: 'https://api.example.com',
 *   config: { debug: true },
 * })
 *
 * registry.use(module)
 * ```
 */
export function createTemplateModule(
  options: TemplateModuleOptions,
): ModuleDefinition<TemplateModuleOptions> {
  return {
    id: 'template-module',
    name: 'Template Module',
    setup: () => setupTemplateModule(options),
  }
}

// Re-export composables and types for convenience
export { useTemplateModuleContext }
export type { TemplateModuleOptions }

// Re-export composables separately
export * from './composables/useTemplateModuleData.composable'

// Re-export components
export { TemplateModuleCard } from './components'
