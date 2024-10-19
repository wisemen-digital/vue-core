import {
  computed,
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
} from 'vue'

interface ThemeProviderContext {
  theme: ComputedRef<'dark' | 'light' | string & {}>
}

export const themeProviderContextKey: InjectionKey<ThemeProviderContext> = Symbol('themeProviderContextKey')

export function provideThemeProviderContext(context: ThemeProviderContext): void {
  provide(themeProviderContextKey, context)
}

export function injectThemeProviderContext(): ThemeProviderContext {
  const context = inject(themeProviderContextKey, {
    theme: computed<string>(() => 'light'),
  })

  return context
}
