import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
} from 'vue'

interface ConfigContext {
  locale: ComputedRef<string>
  pagination?: {
    limit?: number
  }
}

const configContextKey: InjectionKey<ConfigContext> = Symbol('configContextKey')

export function provideConfigContext(context: ConfigContext): void {
  provide(configContextKey, context)
}

export function injectConfigContext(): ConfigContext {
  const context = inject(configContextKey)

  if (context === undefined) {
    throw new Error('Global context is not provided. Make sure to wrap your app with `<AppConfigProvider />`.')
  }

  return context
}
