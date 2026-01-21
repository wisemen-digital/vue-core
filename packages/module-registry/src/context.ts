import { inject as vueInject, provide as vueProvide } from 'vue'
import type { Context, ContextOptions } from './types'

export function createContext<T>(options: ContextOptions<T>): Context<T> {
  const injectionKey = Symbol(options.name)

  return {
    injectionKey,

    provide(value: T) {
      vueProvide(injectionKey, value)
    },

    inject(fallback?: T) {
      const value = vueInject(injectionKey, fallback)
      return value
    },
  }
}
