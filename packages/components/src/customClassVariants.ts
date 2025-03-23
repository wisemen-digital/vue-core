import type { VariantProps } from 'tailwind-variants'
import { computed, type ComputedRef } from 'vue'

import { injectThemeProviderContext } from '@/components'
import { twMerge } from '@/libs/twMerge.lib'
import type { createIconButtonStyle } from '@/packages/@next/button/icon/style/iconButton.style'
import type { createButtonStyle } from '@/packages/@next/button/shared/style/button.style'
import type { createDialogStyle } from '@/packages/@next/dialog/style/dialog.style'
import type { createPopoverStyle } from '@/packages/@next/popover/style/popover.style'
import type { createTabsStyle } from '@/packages/@next/tabs/shared/style/tabs.style'

export interface Components {
  button: typeof createButtonStyle
  dialog: typeof createDialogStyle
  iconButton: typeof createIconButtonStyle
  popover: typeof createPopoverStyle
  tabs: typeof createTabsStyle
}

export interface ComponentVariants {}

export type GetComponentPropCustomValues<
  TComponent extends keyof Components,
  TTargetProp extends keyof VariantProps<Components[TComponent]>,
> =
ComponentVariants extends { variants: Array<infer TVariant> }
  ? TVariant extends ClassVariant<TComponent, TTargetProp, infer TTargetPropValue>
    ? TTargetPropValue
    : never
  : never

export interface ClassVariant<
  TComponent extends keyof Components,
  TTargetProp extends keyof VariantProps<Components[TComponent]>,
  TTargetPropValue extends string,
> {
  config: {
    [K in keyof Components[TComponent]['slots']]?: string
  }
  target?: {
    prop: TTargetProp
    value: TTargetPropValue | VariantProps<Components[TComponent]>[TTargetProp]
  }
  theme?: string & {} | 'default'
  component: TComponent
}

export const customClassVariants: ClassVariant<any, never, string>[] = []

export function defineComponentVariant<
  TComponent extends keyof Components,
  TTarget extends keyof VariantProps<Components[TComponent]>,
  TTargetPropValue extends string,
>(
  classVariant: ClassVariant<TComponent, TTarget, TTargetPropValue>,
): ClassVariant<TComponent, TTarget, TTargetPropValue> {
  const existingVariant = customClassVariants.find(
    (variant) => variant.target?.prop === classVariant.target?.prop
      && variant.target?.value === classVariant.target?.value,
  ) ?? null

  if (existingVariant === null) {
    customClassVariants.push(classVariant as ClassVariant<TComponent, never, never>)
  }
  else {
    customClassVariants.splice(
      customClassVariants.indexOf(existingVariant),
      1,
      classVariant as ClassVariant<TComponent, never, never>,
    )
  }

  return classVariant
}

export type ClassConfig<
  TComponent extends keyof Components,
  TTargetPropValue extends string = any,
  TTarget extends keyof VariantProps<Components[TComponent]> = any,
> = {
  [K in keyof ClassVariant<TComponent, TTarget, TTargetPropValue>['config']]: ClassVariant<TComponent, TTarget, TTargetPropValue>['config'][K]
}

export function useComponentClassConfig<
  TComponent extends keyof Components,
  TTarget extends keyof VariantProps<Components[TComponent]>,
  TTargetPropValue extends string,
>(
  component: TComponent,
  target: {
    [K in keyof VariantProps<Components[TComponent]>]: VariantProps<Components[TComponent]>[K]
  },
): ComputedRef<ClassConfig<TComponent, TTargetPropValue, TTarget>> {
  const themeContext = injectThemeProviderContext()

  return computed<ClassConfig<TComponent, TTargetPropValue, TTarget>>(
    () => getComponentClassConfig(component, themeContext.theme.value, {
      variant: themeContext.theme.value,
      ...target,
    }),
  )
}

export function getComponentClassConfig<
  TComponent extends keyof Components,
  TTarget extends keyof VariantProps<Components[TComponent]>,
  TTargetPropValue extends string,
>(
  component: TComponent,
  theme: string,
  target: {
    [K in keyof VariantProps<Components[TComponent]>]: VariantProps<Components[TComponent]>[K]
  },
): ClassConfig<TComponent, TTargetPropValue, TTarget> {
  const themeVariants = customClassVariants.filter((variant) => {
    return variant.theme === theme || variant.theme === undefined
  })

  const componentVariants = themeVariants.filter((variant) => {
    return variant.component === component
  })

  const targetVariants = componentVariants.filter((variant) => {
    return variant.target === undefined || target[variant.target.prop as keyof typeof target] === variant.target.value
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
  }, {})

  return merged as ClassConfig<TComponent, TTargetPropValue, TTarget>
}

export function mergeClasses(...strings: (string | null | undefined)[]): string {
  return twMerge(strings.filter(Boolean).join(' '))
}
