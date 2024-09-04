import type { Router } from 'vue-router'
import { useRouter } from 'vue-router'

import type {
  RouteLocationTyped,
  Routes,
} from '@/types/routes.type.js'

type UseTypedRouterReturnType = {
  push: <T extends keyof Routes>(to: RouteLocationTyped<T>) => Promise<void>
  replace: <T extends keyof Routes>(to: RouteLocationTyped<T>) => Promise<void>
} & Omit<Router, 'push' | 'replace'>

export function useTypedRouter(): UseTypedRouterReturnType {
  const router = useRouter()

  async function push(to: RouteLocationTyped<keyof Routes>): Promise<void> {
    await router.push(to)
  }

  async function replace(to: RouteLocationTyped<keyof Routes>): Promise<void> {
    await router.replace(to)
  }

  return {
    ...router,
    push,
    replace,
  }
}
