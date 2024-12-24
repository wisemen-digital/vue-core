import { tv } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const useSwitchStyle = tv({
  slots: {
    base: new StyleBuilder()
      .withClasses('outline-none cursor-pointer not-motion-reduce:duration-300 box-content focus-visible:ring-2')
      .withBorder('border border-solid border-(--switch-border-color-default)')
      .withBorderRadius('rounded-(--switch-border-radius-default)')
      .withBackgroundColor('bg-(--switch-bg-color-default)')
      .withPadding('p-(--switch-thumb-padding-default)')
      .withSize('w-[calc(var(--switch-thumb-size-default)*2)]')
      .build(),
    error: new StyleBuilder()
      .withColor('[--input-field-error-text-color-default:var(--switch-error-text-color-default)]')
      .withFontSize('[--input-field-error-font-size-default:var(--switch-error-font-size-default)]')
      .withFontWeight('[--input-field-error-font-weight-default:var(--switch-error-font-weight-default)]')
      // Apply same margin-left as label
      .withSpacing('ml-(--switch-label-spacing-default)')
      .withSpacing('[--input-field-error-spacing-default:var(--switch-error-spacing-default)]')
      .build(),
    hint: new StyleBuilder()
      .withColor('[--input-field-hint-text-color-default:var(--switch-hint-text-color-default)]')
      .withFontSize('[--input-field-hint-font-size-default:var(--switch-hint-font-size-default)]')
      .withFontWeight('[--input-field-hint-font-weight-default:var(--switch-hint-font-weight-default)]')
      // Apply same margin-left as label
      .withSpacing('ml-(--switch-label-spacing-default)')
      .withSpacing('[--input-field-hint-spacing-default:var(--switch-hint-spacing-default)]')
      .build(),
    icon: new StyleBuilder()
      .withClasses('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 not-motion-reduce:duration-200')
      .withSize('size-(--switch-icon-size-default)')
      .withColor('text-(--switch-icon-color-default)')
      .build(),
    label: new StyleBuilder()
      .withColor('[--input-field-label-text-color-default:var(--switch-label-text-color-default)]')
      .withFontSize('[--input-field-label-font-size-default:var(--switch-label-font-size-default)]')
      .withFontWeight('[--input-field-label-font-weight-default:var(--switch-label-font-weight-default)]')
      .withSpacing('ml-(--switch-label-spacing-default) mb-0')
      .build(),
    thumb: new StyleBuilder()
      .withClasses('relative overflow-hidden block data-[state=checked]:justify-self-end')
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
          .withColor('[--input-field-hint-text-color-focus:var(--switch-hint-text-color-focus)]')
          .build(),
        icon: new StyleBuilder()
          .withColor('text-(--switch-icon-color-focus)')
          .build(),
        label: new StyleBuilder()
          .withColor('[--input-field-label-text-color-focus:var(--switch-label-text-color-focus)]')
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
          .withColor('[--input-field-hint-text-color-hover:var(--switch-hint-text-color-hover)]')
          .build(),
        icon: new StyleBuilder()
          .withColor('text-(--switch-icon-color-hover)')
          .build(),
        label: new StyleBuilder()
          .withColor('[--input-field-label-text-color-hover:var(--switch-label-text-color-hover)]')
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
          .withColor('[--input-field-hint-text-color-checked:var(--switch-hint-text-color-checked)]')
          .build(),
        icon: new StyleBuilder()
          .withColor('text-(--switch-icon-color-checked)')
          .build(),
        label: new StyleBuilder()
          .withColor('[--input-field-label-text-color-checked:var(--switch-label-text-color-checked)]')
          .build(),
      },
    },
    hasError: {
      true: {
        base: new StyleBuilder()
          .withBackgroundColor('bg-(--switch-bg-color-error)')
          .withBorder('border-(--switch-border-color-error)')
          .withRing('ring-(--switch-ring-color-error)')
          .build(),
        hint: new StyleBuilder()
          .withColor('[--input-field-hint-text-color-error:var(--switch-hint-text-color-error)]')
          .build(),
        icon: new StyleBuilder()
          .withColor('text-(--switch-icon-color-error)')
          .build(),
        label: new StyleBuilder()
          .withColor('[--input-field-label-text-color-error:var(--switch-label-text-color-error)]')
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
          .withColor('[--input-field-hint-text-color-disabled:var(--switch-hint-text-color-disabled)]')
          .build(),
        icon: new StyleBuilder()
          .withColor('text-(--switch-icon-color-disabled)')
          .build(),
        label: new StyleBuilder()
          .withColor('[--input-field-label-text-color-disabled:var(--switch-label-text-color-disabled)]')
          .build(),
      },
    },
    size: {
      default: {},
      sm: {
        base: 'switch-sm',
      },
    },
  },
})
