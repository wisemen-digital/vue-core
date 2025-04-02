import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'
import type { ComputedRef } from 'vue'
import { computed } from 'vue'

import { createButtonStyle } from '@/components/button/default-button/button.style'
import { createIconButtonStyle } from '@/components/button/icon-button/iconButton.style'
import { createRouterLinkButtonStyle } from '@/components/button/router-link-button/routerLinkButton.style'
import { createCheckboxStyle } from '@/components/checkbox/checkbox.style'
import { createDateFieldStyle } from '@/components/date-field/dateField.style'
import { createDatePickerStyle } from '@/components/date-picker/single/datePicker.style'
import { createDialogStyle } from '@/components/dialog/dialog.style'
import { createDropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style'
import { createFormFieldStyle } from '@/components/form-field/formField.style'
import { createkeyboardKeyStyle } from '@/components/keyboard-key/keyboardKey.style'
import { createNumberFieldStyle } from '@/components/number-field/numberField.style'
import { createPopoverStyle } from '@/components/popover/popover.style'
import { createRadioGroupItemStyle } from '@/components/radio-group-item/radioGroupItem.style'
import { createSelectStyle } from '@/components/select/style/select.style'
import { createSwitchStyle } from '@/components/switch/switch.style'
import { createTabsStyle } from '@/components/tabs/shared/tabs.style'
import { createTextFieldStyle } from '@/components/text-field/textField.style'
import { createTextareaStyle } from '@/components/textarea/textarea.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { createTimeFieldStyle } from '@/components/time-field/timeField.style'
import { createTooltipStyle } from '@/components/tooltip/tooltip.style'

export interface Components {
  button: typeof createButtonStyle
  checkbox: typeof createCheckboxStyle
  dateField: typeof createDateFieldStyle
  datePicker: typeof createDatePickerStyle
  dialog: typeof createDialogStyle
  dropdownMenu: typeof createDropdownMenuStyle
  formField: typeof createFormFieldStyle
  iconButton: typeof createIconButtonStyle
  keyboardKey: typeof createkeyboardKeyStyle
  numberField: typeof createNumberFieldStyle
  popover: typeof createPopoverStyle
  radioGroupItem: typeof createRadioGroupItemStyle
  routerLinkButton: typeof createRouterLinkButtonStyle
  select: typeof createSelectStyle
  switch: typeof createSwitchStyle
  tabs: typeof createTabsStyle
  textField: typeof createTextFieldStyle
  textarea: typeof createTextareaStyle
  timeField: typeof createTimeFieldStyle
  tooltip: typeof createTooltipStyle
}

const components = {
  button: createButtonStyle,
  checkbox: createCheckboxStyle,
  dateField: createDateFieldStyle,
  datePicker: createDatePickerStyle,
  dialog: createDialogStyle,
  dropdownMenu: createDropdownMenuStyle,
  formField: createFormFieldStyle,
  iconButton: createIconButtonStyle,
  keyboardKey: createkeyboardKeyStyle,
  numberField: createNumberFieldStyle,
  popover: createPopoverStyle,
  radioGroupItem: createRadioGroupItemStyle,
  routerLinkButton: createRouterLinkButtonStyle,
  select: createSelectStyle,
  switch: createSwitchStyle,
  tabs: createTabsStyle,
  textField: createTextFieldStyle,
  textarea: createTextareaStyle,
  timeField: createTimeFieldStyle,
  tooltip: createTooltipStyle,
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
    extends?: VariantProps<Components[TComponent]>[TTargetProp]
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
    () => getComponentClassConfig(
      component,
      themeContext.theme.value,
      {
        ...target,
      },
    ),
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

  const targetVariantExtends = targetVariants
    .filter((variant) => {
      if (variant.target === undefined) {
        return false
      }

      const { extends: extendsVariant } = variant.target

      return extendsVariant !== undefined
    })
    .map((variant) => {
      const prop = variant.target!.prop!
      const extendsVariant = variant.target!.extends!

      const result = components[component].variants[prop][extendsVariant]

      return result
    })

  const configs = targetVariants.map((variant) => variant.config)

  const merged = [
    targetVariantExtends,
    configs,
  ].flat().reduce((acc, obj) => {
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
