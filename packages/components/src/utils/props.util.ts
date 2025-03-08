import { computed, type ComputedRef } from 'vue'

import type { ClassConfig, Components } from '@/customClassVariants'

export type NonUndefined<T> = {
  [K in keyof T]-?: Exclude<T[K], undefined>;
}

export interface InteractableElement {
  testId?: string | null
  isDisabled?: boolean
}

export interface CustomizableElement<TComponent extends keyof Components> {
  classConfig?: ClassConfig<TComponent> | null
}

export type PropsToComputed<T> = NonUndefined<{
  [K in keyof T]: NonUndefined<ComputedRef<NonUndefined<T[K]>>>
}>

export function toComputedRefs<T>(props: T): PropsToComputed<T> {
  const computedRefs: Partial<PropsToComputed<T>> = {}

  for (const key in props) {
    computedRefs[key] = computed<any>(
      () => props[key as keyof T] as T[Extract<keyof T, string>],
    ) as any
  }

  return computedRefs as PropsToComputed<T>
}
