import { computed, type ComputedRef } from 'vue'

import type { ClassConfig, Components } from '@/customClassVariants'

export type NonUndefined<T> = {
  [K in keyof T]-?: Exclude<T[K], undefined>;
}

export interface InteractableElement {
  /**
   * A unique identifier used for testing purposes.
   * Can be used as a `data-test-id` attribute in testing frameworks.
   * If set to `null`, no test ID will be applied.
   */
  testId?: string | null

  /**
   * Determines whether the element is disabled.
   * When `true`, the element becomes non-interactive.
   * @default false
   */
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
