import {
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
  const context = inject(themeProviderContextKey)

  if (context === undefined) {
    throw new Error('ThemeProviderContext is not provided. Make sure to wrap your app with `<AppThemeProvider />`.')
  }

  return context
}
