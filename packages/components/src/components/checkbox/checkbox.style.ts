import { tv } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const useCheckboxStyle = tv({
  slots: {
    base: new StyleBuilder()
      .withClasses('duration-200 cursor-pointer flex items-center justify-center outline-none group-focus-visible:ring-2 ring-offset-1')
      .withBorder('border borer-solid border-(--checkbox-border-color-default)')
      .withBackgroundColor('bg-(--checkbox-bg-color-default)')
      .withSize('size-(--checkbox-size-default)')
      .withBorderRadius('rounded-(--checkbox-border-radius-default)')
      .build(),
    error: new StyleBuilder()
      .withColor('[--input-field-error-text-color-default:var(--checkbox-error-text-color-default)]')
      .withFontSize('[--input-field-error-font-size-default:var(--checkbox-error-font-size-default)]')
      .withFontWeight('[--input-field-error-font-weight-default:var(--checkbox-error-font-weight-default)]')
      // Apply same margin-left as label
      .withSpacing('ml-(--checkbox-label-spacing-default)')
      .withSpacing('[--input-field-error-spacing-default:var(--checkbox-error-spacing-default)]')
      .build(),
    hint: new StyleBuilder()
      .withColor('[--input-field-hint-text-color-default:var(--checkbox-hint-text-color-default)]')
      .withFontSize('[--input-field-hint-font-size-default:var(--checkbox-hint-font-size-default)]')
      .withFontWeight('[--input-field-hint-font-weight-default:var(--checkbox-hint-font-weight-default)]')
      // Apply same margin-left as label
      .withSpacing('ml-(--checkbox-label-spacing-default)')
      .withSpacing('[--input-field-hint-spacing-default:var(--checkbox-hint-spacing-default)]')
      .build(),
    indicator: new StyleBuilder()
      .withClasses('duration-200')
      .withSize('size-(--checkbox-indicator-size-default)')
      .build(),
    label: new StyleBuilder()
      .withColor('[--input-field-label-text-color-default:var(--checkbox-label-text-color-default)]')
      .withFontSize('[--input-field-label-font-size-default:var(--checkbox-label-font-size-default)]')
      .withFontWeight('[--input-field-label-font-weight-default:var(--checkbox-label-font-weight-default)]')
      .withSpacing('ml-(--checkbox-label-spacing-default) mb-0')
      .build(),
    root: new StyleBuilder()
      .withClasses('group outline-none')
      .build(),
  },
  variants: {
    isFocused: {
      true: {
        base: new StyleBuilder()
          .withBorder('border borer-solid border-(--checkbox-border-color-focus)')
          .withBackgroundColor('bg-(--checkbox-bg-color-focus)')
          .withRing('ring-(--checkbox-ring-color-focus)')
          .build(),
        hint: new StyleBuilder()
          .withColor('[--input-field-hint-text-color-focus:var(--checkbox-hint-text-color-focus)]')
          .build(),
        indicator: new StyleBuilder()
          .withColor('text-(--checkbox-indicator-color-focus)')
          .build(),
        label: new StyleBuilder()
          .withColor('[--input-field-label-text-color-focus:var(--checkbox-label-text-color-focus)]')
          .build(),
      },
    },
    isHovered: {
      true: {
        base: new StyleBuilder()
          .withBorder('border borer-solid border-(--checkbox-border-color-hover)')
          .withBackgroundColor('bg-(--checkbox-bg-color-hover)')
          .build(),
        hint: new StyleBuilder()
          .withColor('[--input-field-hint-text-color-hover:var(--checkbox-hint-text-color-hover)]')
          .build(),
        indicator: new StyleBuilder()
          .withColor('text-(--checkbox-indicator-color-hover)')
          .build(),
        label: new StyleBuilder()
          .withColor('[--input-field-label-text-color-hover:var(--checkbox-label-text-color-hover)]')
          .build(),
      },
    },
    isChecked: {
      true: {
        base: new StyleBuilder()
          .withBorder('border borer-solid border-(--checkbox-border-color-checked)')
          .withBackgroundColor('bg-(--checkbox-bg-color-checked)')
          .build(),
        hint: new StyleBuilder()
          .withColor('[--input-field-hint-text-color-checked:var(--checkbox-hint-text-color-checked)]')
          .build(),
        indicator: new StyleBuilder()
          .withColor('text-(--checkbox-indicator-color-checked)')
          .build(),
        label: new StyleBuilder()
          .withColor('[--input-field-label-text-color-checked:var(--checkbox-label-text-color-checked)]')
          .build(),
      },
    },
    isIndeterminate: {
      true: {
        base: new StyleBuilder()
          .withBorder('border borer-solid border-(--checkbox-border-color-indeterminate)')
          .withBackgroundColor('bg-(--checkbox-bg-color-indeterminate)')
          .build(),
        indicator: new StyleBuilder()
          .withColor('text-(--checkbox-indicator-color-indeterminate)')
          .build(),
      },
    },
    hasError: {
      true: {
        base: new StyleBuilder()
          .withBorder('border borer-solid border-(--checkbox-border-color-error)')
          .withBackgroundColor('bg-(--checkbox-bg-color-error)')
          .withRing('ring-(--checkbox-ring-color-error)')
          .build(),
        hint: new StyleBuilder()
          .withColor('[--input-field-hint-text-color-error:var(--checkbox-hint-text-color-error)]')
          .build(),
        indicator: new StyleBuilder()
          .withColor('text-(--checkbox-indicator-color-error)')
          .build(),
        label: new StyleBuilder()
          .withColor('[--input-field-label-text-color-error:var(--checkbox-label-text-color-error)]')
          .build(),
      },
    },
    isDisabled: {
      true: {
        base: new StyleBuilder()
          .withClasses('cursor-not-allowed')
          .withBorder('border-(--checkbox-border-color-disabled)')
          .withBackgroundColor('bg-(--checkbox-bg-color-disabled)')
          .build(),
        hint: new StyleBuilder()
          .withColor('[--input-field-hint-text-color-disabled:var(--checkbox-hint-text-color-disabled)]')
          .build(),
        indicator: new StyleBuilder()
          .withColor('text-(--checkbox-indicator-color-disabled)')
          .build(),
        label: new StyleBuilder()
          .withColor('[--input-field-label-text-color-disabled:var(--checkbox-label-text-color-disabled)]')
          .build(),
      },
    },
  },
})
