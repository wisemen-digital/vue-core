import {
  computed,
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
} from 'vue'

interface ThemeProviderContext {
  isDarkModeEnabled: ComputedRef<boolean>
  theme: ComputedRef<string & {} | 'default'>
}

export const themeProviderContextKey: InjectionKey<ThemeProviderContext> = Symbol('themeProviderContextKey')

export function provideThemeProviderContext(context: ThemeProviderContext): void {
  provide(themeProviderContextKey, context)
}

export function injectThemeProviderContext(): ThemeProviderContext {
  const context = inject(themeProviderContextKey, null)

  if (context === null) {
    return {
      isDarkModeEnabled: computed<boolean>(() => false),
      theme: computed<string>(() => 'default'),
    }
  }

  return context
}
