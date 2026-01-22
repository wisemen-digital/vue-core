import { createContext } from '@wisemen/vue-core-module-registry'
import type { TemplateModuleOptions } from 'src/types'

/**
 * Internal context for the Template module
 * This is provided during module setup and consumed by composables and components
 */
const templateModuleContext = createContext<TemplateModuleOptions>({
  name: 'Template Module Context',
})

export function setupTemplateModule(options: TemplateModuleOptions): void {
  // Provide the options to the module context
  // This makes them available to all composables/components in the module
  templateModuleContext.provide(options)
}

export function useTemplateModuleContext(): TemplateModuleOptions {
  const context = templateModuleContext.inject()

  if (!context) {
    throw new Error(
      'Template Module context is not provided. Make sure the module is registered with ModuleRegistry.',
    )
  }

  return context
}
