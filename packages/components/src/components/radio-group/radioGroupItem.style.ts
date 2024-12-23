import { tv } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const useRadioGroupItemStyle = tv({
  slots: {
    base: new StyleBuilder()
      .withClasses('duration-200 cursor-pointer flex items-center justify-center outline-none group-focus-visible:ring-2 ring-offset-1')
      .withBorder('border borer-solid border-(--radio-group-item-border-color-default)')
      .withBackgroundColor('bg-(--radio-group-item-bg-color-default)')
      .withSize('size-(--radio-group-item-size-default)')
      .withBorderRadius('rounded-(--radio-group-item-border-radius-default)')
      .build(),
    error: new StyleBuilder()
      .withColor('[--input-field-error-text-color-default:var(--radio-group-item-error-text-color-default)]')
      .withFontSize('[--input-field-error-font-size-default:var(--radio-group-item-error-font-size-default)]')
      .withFontWeight('[--input-field-error-font-weight-default:var(--radio-group-item-error-font-weight-default)]')
      // Apply same margin-left as label
      .withSpacing('ml-(--radio-group-item-label-spacing-default)')
      .withSpacing('[--input-field-error-spacing-default:var(--radio-group-item-error-spacing-default)]')
      .build(),
    hint: new StyleBuilder()
      .withColor('[--input-field-hint-text-color-default:var(--radio-group-item-hint-text-color-default)]')
      .withFontSize('[--input-field-hint-font-size-default:var(--radio-group-item-hint-font-size-default)]')
      .withFontWeight('[--input-field-hint-font-weight-default:var(--radio-group-item-hint-font-weight-default)]')
      // Apply same margin-left as label
      .withSpacing('ml-(--radio-group-item-label-spacing-default)')
      .withSpacing('[--input-field-hint-spacing-default:var(--radio-group-item-hint-spacing-default)]')
      .build(),
    indicator: new StyleBuilder()
      .withClasses('duration-200')
      .withSize('size-(--radio-group-item-indicator-size-default)')
      .build(),
    label: new StyleBuilder()
      .withColor('[--input-field-label-text-color-default:var(--radio-group-item-label-text-color-default)]')
      .withFontSize('[--input-field-label-font-size-default:var(--radio-group-item-label-font-size-default)]')
      .withFontWeight('[--input-field-label-font-weight-default:var(--radio-group-item-label-font-weight-default)]')
      .withSpacing('ml-(--radio-group-item-label-spacing-default) mb-0')
      .build(),
    root: new StyleBuilder()
      .withClasses('group outline-none')
      .build(),
  },
  variants: {
    isFocused: {
      true: {
        base: new StyleBuilder()
          .withBorder('border borer-solid border-(--radio-group-item-border-color-focus)')
          .withBackgroundColor('bg-(--radio-group-item-bg-color-focus)')
          .withRing('ring-(--radio-group-item-ring-color-focus)')
          .build(),
        hint: new StyleBuilder()
          .withColor('[--input-field-hint-text-color-focus:var(--radio-group-item-hint-text-color-focus)]')
          .build(),
        indicator: new StyleBuilder()
          .withColor('text-(--radio-group-item-indicator-color-focus)')
          .build(),
        label: new StyleBuilder()
          .withColor('[--input-field-label-text-color-focus:var(--radio-group-item-label-text-color-focus)]')
          .build(),
      },
    },
    isHovered: {
      true: {
        base: new StyleBuilder()
          .withBorder('border borer-solid border-(--radio-group-item-border-color-hover)')
          .withBackgroundColor('bg-(--radio-group-item-bg-color-hover)')
          .build(),
        hint: new StyleBuilder()
          .withColor('[--input-field-hint-text-color-hover:var(--radio-group-item-hint-text-color-hover)]')
          .build(),
        indicator: new StyleBuilder()
          .withColor('text-(--radio-group-item-indicator-color-hover)')
          .build(),
        label: new StyleBuilder()
          .withColor('[--input-field-label-text-color-hover:var(--radio-group-item-label-text-color-hover)]')
          .build(),
      },
    },
    isChecked: {
      true: {
        base: new StyleBuilder()
          .withBorder('border borer-solid border-(--radio-group-item-border-color-checked)')
          .withBackgroundColor('bg-(--radio-group-item-bg-color-checked)')
          .build(),
        hint: new StyleBuilder()
          .withColor('[--input-field-hint-text-color-checked:var(--radio-group-item-hint-text-color-checked)]')
          .build(),
        indicator: new StyleBuilder()
          .withColor('text-(--radio-group-item-indicator-color-checked)')
          .build(),
        label: new StyleBuilder()
          .withColor('[--input-field-label-text-color-checked:var(--radio-group-item-label-text-color-checked)]')
          .build(),
      },
    },
    isIndeterminate: {
      true: {
        base: new StyleBuilder()
          .withBorder('border borer-solid border-(--radio-group-item-border-color-indeterminate)')
          .withBackgroundColor('bg-(--radio-group-item-bg-color-indeterminate)')
          .build(),
        indicator: new StyleBuilder()
          .withColor('text-(--radio-group-item-indicator-color-indeterminate)')
          .build(),
      },
    },
    hasError: {
      true: {
        base: new StyleBuilder()
          .withBorder('border borer-solid border-(--radio-group-item-border-color-error)')
          .withBackgroundColor('bg-(--radio-group-item-bg-color-error)')
          .withRing('ring-(--radio-group-item-ring-color-error)')
          .build(),
        hint: new StyleBuilder()
          .withColor('[--input-field-hint-text-color-error:var(--radio-group-item-hint-text-color-error)]')
          .build(),
        indicator: new StyleBuilder()
          .withColor('text-(--radio-group-item-indicator-color-error)')
          .build(),
        label: new StyleBuilder()
          .withColor('[--input-field-label-text-color-error:var(--radio-group-item-label-text-color-error)]')
          .build(),
      },
    },
    isDisabled: {
      true: {
        base: new StyleBuilder()
          .withClasses('cursor-not-allowed')
          .withBorder('border-(--radio-group-item-border-color-disabled)')
          .withBackgroundColor('bg-(--radio-group-item-bg-color-disabled)')
          .build(),
        hint: new StyleBuilder()
          .withColor('[--input-field-hint-text-color-disabled:var(--radio-group-item-hint-text-color-disabled)]')
          .build(),
        indicator: new StyleBuilder()
          .withColor('text-(--radio-group-item-indicator-color-disabled)')
          .build(),
        label: new StyleBuilder()
          .withColor('[--input-field-label-text-color-disabled:var(--radio-group-item-label-text-color-disabled)]')
          .build(),
      },
    },
  },
})
