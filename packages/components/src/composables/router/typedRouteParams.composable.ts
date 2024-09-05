import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import type { Routes } from '@/types/routes.type.js'

export type UseTypedRouteParamsReturnType<T extends keyof Routes> = Routes[T] extends {
  params: infer P
}
  ? {
      [K in keyof P]: ComputedRef<P[K]>
    }
  : never

export function useTypedRouteParams<T extends keyof Routes>(routeName: T): UseTypedRouteParamsReturnType<T> {
  const route = useRoute()

  if (route.name !== routeName) {
    throw new Error(`Route name ${routeName} does not match current route name ${route.name as string}. This probably means that you passed the wrong route name to the \`useTypedRouteParams\``)
  }

  return Object.keys(route.params).reduce((acc, key) => {
    return {
      ...acc,
      [key]: computed<unknown>(() => route.params[key]),
    }
  }, {}) as UseTypedRouteParamsReturnType<T>
}
