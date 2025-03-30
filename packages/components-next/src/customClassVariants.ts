import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'
import type { ComputedRef } from 'vue'
import { computed } from 'vue'

import type { createButtonStyle } from '@/components/button/default-button/button.style'
import type { createIconButtonStyle } from '@/components/button/icon-button/iconButton.style'
import type { createRouterLinkButtonStyle } from '@/components/button/router-link-button/routerLinkButton.style'
import type { createDatePickerStyle } from '@/components/date-picker/single/datePicker.style'
import type { createDialogStyle } from '@/components/dialog/dialog.style'
import type { createFormFieldStyle } from '@/components/form-field/formField.style'
import type { createPopoverStyle } from '@/components/popover/popover.style'
import type { createSelectStyle } from '@/components/select/style/select.style'
import type { createTabsStyle } from '@/components/tabs/shared/tabs.style'
import type { createTextFieldStyle } from '@/components/text-field/textField.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { createTooltipStyle } from '@/components/tooltip/tooltip.style'

export interface Components {
  button: typeof createButtonStyle
  datePicker: typeof createDatePickerStyle
  dialog: typeof createDialogStyle
  formField: typeof createFormFieldStyle
  iconButton: typeof createIconButtonStyle
  popover: typeof createPopoverStyle
  routerLinkButton: typeof createRouterLinkButtonStyle
  select: typeof createSelectStyle
  tabs: typeof createTabsStyle
  textField: typeof createTextFieldStyle
  tooltip: typeof createTooltipStyle
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
