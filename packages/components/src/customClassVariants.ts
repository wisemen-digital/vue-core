import type { VariantProps } from 'tailwind-variants'
import { computed, type ComputedRef } from 'vue'

import { injectThemeProviderContext } from '@/components'
import { twMerge } from '@/libs/twMerge.lib'
import type { createButtonStyle } from '@/packages/@next/button/style/button.style'
import type { createTabsStyle } from '@/packages/@next/tabs/shared/style/tabs.style'

export interface Components {
  button: typeof createButtonStyle
  tabs: typeof createTabsStyle
}

export interface ClassVariant<
  TComponent extends keyof Components,
  TTargetProp extends keyof VariantProps<Components[TComponent]>,
> {
  config: {
    [K in keyof Components[TComponent]['slots']]?: string
  }
  target?: {
    prop: TTargetProp
    value: VariantProps<Components[TComponent]>[TTargetProp]
  }
  theme?: string & {} | 'default'
  component: TComponent
}

export const customClassVariants: ClassVariant<any, never>[] = []

export function defineClassVariant<
  TComponent extends keyof Components,
  TTarget extends keyof VariantProps<Components[TComponent]>,
>(
  classVariant: ClassVariant<TComponent, TTarget>,
): void {
  const existingVariant = customClassVariants.find(
    (variant) => variant.target?.prop === classVariant.target?.prop
      && variant.target?.value === classVariant.target?.value,
  ) ?? null

  if (existingVariant === null) {
    customClassVariants.push(classVariant as ClassVariant<TComponent, never>)
  }
  else {
    customClassVariants.splice(
      customClassVariants.indexOf(existingVariant),
      1,
      classVariant as ClassVariant<TComponent, never>,
    )
  }
}

export type ClassConfig<
  TComponent extends keyof Components,
  TTarget extends keyof VariantProps<Components[TComponent]> = any,
> = {
  [K in keyof ClassVariant<TComponent, TTarget>['config']]: ClassVariant<TComponent, TTarget>['config'][K]
}

export function useComponentClassConfig<
  TComponent extends keyof Components,
  TTarget extends keyof VariantProps<Components[TComponent]>,
>(
  component: TComponent,
  target: {
    [K in keyof VariantProps<Components[TComponent]>]: VariantProps<Components[TComponent]>[K]
  },
): ComputedRef<ClassConfig<TComponent, TTarget>> {
  const themeContext = injectThemeProviderContext()

  return computed<ClassConfig<TComponent, TTarget>>(() => getComponentClassConfig(component, themeContext.theme.value, {
    variant: themeContext.theme.value,
    ...target,
  }))
}

export function getComponentClassConfig<
  TComponent extends keyof Components,
  TTarget extends keyof VariantProps<Components[TComponent]>,
>(
  component: TComponent,
  theme: string,
  target: {
    [K in keyof VariantProps<Components[TComponent]>]: VariantProps<Components[TComponent]>[K]
  },
): ClassConfig<TComponent, TTarget> {
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

  return merged as ClassConfig<TComponent, TTarget>
}

export function mergeClasses(...strings: (string | null | undefined)[]): string {
  return twMerge(strings.filter(Boolean).join(' '))
}
