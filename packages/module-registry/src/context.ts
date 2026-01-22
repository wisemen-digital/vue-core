import {
  inject as vueInject,
  provide as vueProvide,
} from 'vue'

import type {
  Context,
  ContextOptions,
} from './types'

export function createContext<T>(options: ContextOptions<T>): Context<T> {
  const injectionKey = Symbol(options.name)

  return {
    inject(fallback?: T): T {
      const value = vueInject(injectionKey, fallback)

      if (value === undefined) {
        throw new Error(
          `No value provided for context "${options.name}". Make sure to provide a value using the corresponding provider.`,
        )
      }

      return value
    },

    injectionKey,

    provide(value: T): void {
      vueProvide(injectionKey, value)
    },
  }
}
