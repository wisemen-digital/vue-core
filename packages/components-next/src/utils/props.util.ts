import { computed, type ComputedRef } from 'vue'

import type { ClassConfig, Components } from '@/customClassVariants'

export type NonUndefined<T> = {
  [K in keyof T]-?: Exclude<T[K], undefined>;
}

export interface PrimitiveElement {
  /**
   * The id of the element. If set to `null`, no ID will be applied.
   * @default null
   */
  id?: string | null
  /**
   * A unique identifier used for testing purposes. If set to `null`, no test ID will be applied.
   * @default null
   */
  testId?: string | null
}

export interface InteractableElement {
  /**
   * Determines whether the element is disabled. When `true`, the element becomes non-interactive.
   * @default false
   */
  isDisabled?: boolean
}

export interface FormElement {
  /**
   * Whether the input is required.
   * @default false
   */
  isRequired?: boolean
  /**
   * Whether the input is touched. Used to determine if an error should be shown.
   * @default false
   */
  isTouched?: boolean
  /**
   * The errors associated with the input.
   * @default []
   */
  errors?: string[]
  /**
   * The hint text of the input.
   * @default null
   */
  hint?: string | null
  /**
   * The label of the input.
   * @default null
   */
  label?: string | null
}

export interface CustomizableElement<
  TComponent extends keyof Components,
  TSubComponents extends {
    name: string
    component: keyof Components
  }[] = [],
> {
  /**
   * The class configuration of the component.
   */
  classConfig?: (ClassConfig<TComponent> & {
    [K in TSubComponents[number]['name']]?: ClassConfig<Extract<TSubComponents[number], { name: K }>['component']>
  }) | null
}

export type PropsToComputed<T> = NonUndefined<{
  [K in keyof T]: T[K] extends ((...args: any[]) => any)
    ? T[K]
    : NonUndefined<ComputedRef<NonUndefined<T[K]>>>
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
