import { tv } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const useCheckboxStyle = tv({
  slots: {
    base: new StyleBuilder()
      .withClasses('duration-200 flex items-center justify-center outline-none ring-offset-1')
      .withBorder('border borer-solid border-(--checkbox-border-color-default)')
      .withBackgroundColor('bg-(--checkbox-bg-color-default)')
      .withSize('size-(--checkbox-size-default)')
      .withBorderRadius('rounded-(--checkbox-border-radius-default)')
      .build(),
    indicator: new StyleBuilder()
      .withSize('size-(--checkbox-indicator-size-default)')
      .build(),
  },
  variants: {
    isFocused: {
      true: {
        base: '',
      },
    },
    isHovered: {
      true: {
        base: '',
      },
    },
    isChecked: {
      true: {
        base: new StyleBuilder()
          .withBorder('border borer-solid border-(--checkbox-border-color-checked)')
          .withBackgroundColor('bg-(--checkbox-bg-color-checked)')
          .build(),
        indicator: new StyleBuilder()
          .withColor('text-(--checkbox-indicator-color-checked)')
          .build(),
      },
    },
    isIndeterminate: {
      true: {
        base: '',
      },
    },
    hasError: {
      true: {
        base: '',
      },
    },
    isDisabled: {
      true: {
        base: '',
      },
    },
  },
})
