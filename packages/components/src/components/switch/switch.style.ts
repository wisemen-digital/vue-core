import { tv } from '@/libs/twVariants.lib'
import { Style, StyleBuilder } from '@/utils/style.util'

export const useSwitchStyle = tv({
  slots: {
    base: new StyleBuilder()
      .withClasses('outline-none cursor-pointer not-motion-reduce:duration-200 ease-switch box-content focus-visible:ring-2')
      .withBorder('border border-solid border-(--switch-border-color-default)')
      .withBorderRadius('rounded-(--switch-border-radius-default)')
      .withBackgroundColor('bg-(--switch-bg-color-default)')
      .withPadding('p-(--switch-thumb-padding-default)')
      .withSize('w-[calc(var(--switch-thumb-size-default)*2)]')
      .build(),
    error: new StyleBuilder()
      .withColor(Style.var('--input-field-error-text-color-default', '--switch-error-text-color-default'))
      .withFontSize(Style.var('--input-field-error-font-size-default', '--switch-error-font-size-default'))
      .withFontWeight(Style.var('--input-field-error-font-weight-default', '--switch-error-font-weight-default'))
      // Apply same margin-left as label
      .withSpacing('ml-(--switch-label-spacing-default)')
      .withSpacing(Style.var('--input-field-error-spacing-default', '--switch-error-spacing-default'))
      .build(),
    hint: new StyleBuilder()
      .withColor(Style.var('--input-field-hint-text-color-default', '--switch-hint-text-color-default'))
      .withFontSize(Style.var('--input-field-hint-font-size-default', '--switch-hint-font-size-default'))
      .withFontWeight(Style.var('--input-field-hint-font-weight-default', '--switch-hint-font-weight-default'))
      // Apply same margin-left as label
      .withSpacing('ml-(--switch-label-spacing-default)')
      .withSpacing(Style.var('--input-field-hint-spacing-default', '--switch-hint-spacing-default'))
      .build(),
    icon: new StyleBuilder()
      .withClasses('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 not-motion-reduce:duration-200 ease-switch')
      .withSize('size-(--switch-icon-size-default)')
      .withColor('text-(--switch-icon-color-default)')
      .build(),
    label: new StyleBuilder()
      .withColor(Style.var('--input-field-label-text-color-default', '--switch-label-text-color-default'))
      .withFontSize(Style.var('--input-field-label-font-size-default', '--switch-label-font-size-default'))
      .withFontWeight(Style.var('--input-field-label-font-weight-default', '--switch-label-font-weight-default'))
      .withSpacing('ml-(--switch-label-spacing-default) mb-0')
      .build(),
    thumb: new StyleBuilder()
      .withClasses('relative overflow-hidden block duration-200 ease-switch data-[state=checked]:translate-x-full')
      .withBorderRadius('rounded-(--switch-border-radius-default)')
      .withSize('size-(--switch-thumb-size-default)')
      .withBackgroundColor('bg-(--switch-thumb-bg-color-default)')
      .withShadow('shadow-(--switch-thumb-shadow-default)')
      .build(),
  },
  variants: {
    isFocused: {
      true: {
        base: new StyleBuilder()
          .withBackgroundColor('bg-(--switch-bg-color-focus)')
          .withBorder('border-(--switch-border-color-focus)')
          .withRing('ring-(--switch-ring-color-focus) ring-offset-1')
          .build(),
        hint: new StyleBuilder()
          .withColor(Style.var('--input-field-hint-text-color-focus', '--switch-hint-text-color-focus'))
          .build(),
        icon: new StyleBuilder()
          .withColor('text-(--switch-icon-color-focus)')
          .build(),
        label: new StyleBuilder()
          .withColor(Style.var('--input-field-label-text-color-focus', '--switch-label-text-color-focus'))
          .build(),
      },
    },
    isHovered: {
      true: {
        base: new StyleBuilder()
          .withBackgroundColor('bg-(--switch-bg-color-hover)')
          .withBorder('border-(--switch-border-color-hover)')
          .build(),
        hint: new StyleBuilder()
          .withColor(Style.var('--input-field-hint-text-color-hover', '--switch-hint-text-color-hover'))
          .build(),
        icon: new StyleBuilder()
          .withColor('text-(--switch-icon-color-hover)')
          .build(),
        label: new StyleBuilder()
          .withColor(Style.var('--input-field-label-text-color-hover', '--switch-label-text-color-hover'))
          .build(),
      },
    },
    isChecked: {
      true: {
        base: new StyleBuilder()
          .withBackgroundColor('bg-(--switch-bg-color-checked)')
          .withBorder('border-(--switch-border-color-checked)')
          .build(),
        hint: new StyleBuilder()
          .withColor(Style.var('--input-field-hint-text-color-checked', '--switch-hint-text-color-checked'))
          .build(),
        icon: new StyleBuilder()
          .withColor('color-(--switch-icon-color-checked)')
          .build(),
        label: new StyleBuilder()
          .withColor(Style.var('--input-field-label-text-color-checked', '--switch-label-text-color-checked'))
          .build(),
      },
    },
    hasError: {
      true: {
        base: new StyleBuilder()
          .withBackgroundColor('bg-(--switch-bg-color-error)')
          .withBorder('border-(--switch-border-color-error)')
          .withRing('ring-(--switch-border-color-error)')
          .build(),
        hint: new StyleBuilder()
          .withColor(Style.var('--input-field-hint-text-color-error', '--switch-hint-text-color-error'))
          .build(),
        icon: new StyleBuilder()
          .withColor('text-(--switch-icon-color-error)')
          .build(),
        label: new StyleBuilder()
          .withColor(Style.var('--input-field-label-text-color-error', '--switch-label-text-color-error'))
          .build(),
      },
    },
    isDisabled: {
      true: {
        base: new StyleBuilder()
          .withClasses('cursor-not-allowed')
          .withBackgroundColor('bg-(--switch-bg-color-disabled)')
          .withBorder('border-(--switch-border-color-disabled)')
          .build(),
        hint: new StyleBuilder()
          .withColor(Style.var('--input-field-hint-text-color-disabled', '--switch-hint-text-color-disabled'))
          .build(),
        icon: new StyleBuilder()
          .withColor('text-(--switch-icon-color-disabled)')
          .build(),
        label: new StyleBuilder()
          .withColor(Style.var('--input-field-label-text-color-disabled', '--switch-label-text-color-disabled'))
          .build(),
      },
    },
  },
})
