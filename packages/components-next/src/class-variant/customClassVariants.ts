import { extendTailwindMerge } from 'tailwind-merge'

import type {
  ComponentMap,
  CustomClassVariant,
  GetComponentProps,
  GetComponentSlots,
} from '@/class-variant/classVariant.type'

export const customClassVariants: CustomClassVariant<any, never, string>[] = []

/**
 * Define a new or override an existing class variant for a component.
 * @param customClassVariant The class variant to define or override.
 * @returns The defined class variant.
 * @example
 * ```ts
 * defineComponentVariant({
 *   config: {
 *     root: 'px-2xl',
 *   }
 *   target: {
 *     prop: 'size',
 *     value: 'md',
 *   },
 *   component: 'button',
 * })
 * ```
 */
export function defineComponentVariant<
  TComponent extends keyof ComponentMap,
  TTargetProp extends keyof GetComponentProps<TComponent>,
  TTargetPropNewValue extends string,
>(
  customClassVariant: CustomClassVariant<TComponent, TTargetProp, TTargetPropNewValue>,
): CustomClassVariant<TComponent, TTargetProp, TTargetPropNewValue> {
  const componentCustomVariants = customClassVariants.filter((variant) => {
    return variant.component === customClassVariant.component
      && (variant.theme === customClassVariant.theme || variant.theme === undefined)
  })

  const existingVariant = componentCustomVariants.find(
    (variant) => variant.target?.prop === customClassVariant.target?.prop
      && variant.target?.value === customClassVariant.target?.value,
  ) ?? null

  if (existingVariant === null) {
    customClassVariants.push(customClassVariant as CustomClassVariant<TComponent, never, never>)
  }
  else {
    customClassVariants.splice(
      customClassVariants.indexOf(existingVariant),
      1,
      customClassVariant as CustomClassVariant<TComponent, never, never>,
    )
  }

  return customClassVariant
}

export function getCustomComponentVariant<
  TComponent extends keyof ComponentMap,
>(component: TComponent, theme: string, props: GetComponentProps<TComponent>): {
  [KSlot in keyof GetComponentSlots<TComponent>]: string
} {
  const themeVariants = customClassVariants.filter((variant) => {
    return variant.theme === theme || variant.theme === undefined
  })

  const componentVariants = themeVariants.filter((variant) => {
    return variant.component === component
  })

  const targetVariants = componentVariants.filter((variant) => {
    return variant.target === undefined || props[variant.target.prop as keyof typeof props] === variant.target.value
  })

  const configs = targetVariants.map((variant) => variant.config)

  const merged = configs.reduce((acc, obj) => {
    for (const key in obj) {
      if (key in acc) {
        acc[key] += ` ${obj[key]}`
      }
      else {
        acc[key] = obj[key]
      }
    }

    return acc
  }, {} as any)

  return merged
}

const twMergeCustom = extendTailwindMerge({
  extend: {
    theme: {
      spacing: [
        'none',
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
        '10xl',
        '11xl',
      ],
    },
  },
})

export function mergeClasses(...strings: (string | null | undefined)[]): string {
  return twMergeCustom(strings.filter(Boolean).join(' '))
}
