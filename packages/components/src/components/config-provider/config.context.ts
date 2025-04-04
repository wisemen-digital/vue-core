import type {
  ComputedRef,
  InjectionKey,
} from 'vue'
import {
  inject,
  provide,
} from 'vue'

interface ConfigContext {
  areKeyboardShortcutHintsHidden: ComputedRef<boolean>
  googleMapsApiKey: string | null
  locale: ComputedRef<string>
  pagination?: {
    limit?: number
  }
  teleportTargetSelector: string
}

const configContextKey: InjectionKey<ConfigContext> = Symbol('configContextKey')

export function provideConfigContext(context: ConfigContext): void {
  provide(configContextKey, context)
}

export function injectConfigContext(): ConfigContext {
  const context = inject(configContextKey)

  if (context === undefined) {
    throw new Error('Global context is not provided. Make sure to wrap your app with `<ConfigProvider />`.')
  }

  return context
}
