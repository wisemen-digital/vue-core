import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import type { Routes } from '@/types/routes.type.js'

type UseTypedRouteQuery<T extends keyof Routes> = {
  [K in keyof (Routes[T] extends {
    queryParams: infer P
  }
    ? P
    : never)]: ComputedRef<string>
}

export function useTypedRouteQuery<T extends keyof Routes>(routeName: T): UseTypedRouteQuery<T> {
  const route = useRoute()

  if (!route.matched.map((e) => e.name).includes(routeName)) {
    throw new Error(`Route ${routeName} is not matched. This probably means that you passed the wrong route name to the 'useTypedRouteQuery'`)
  }

  return Object.keys(route.query).reduce((acc, key) => {
    return {
      ...acc,
      [key]: computed<string>(() => route.query[key] as string),
    }
  }, {}) as UseTypedRouteQuery<T>
}
