import { tv } from 'tailwind-variants'

export const iconButtonStyle = tv({
  slots: {
    button: 'relative flex h-icon-button-size-default w-icon-button-size-default shrink-0 items-center justify-center overflow-hidden rounded-button-border-radius-default border border-solid border-button-border-color-default bg-button-bg-color-default text-button-font-size-default outline-none ring-offset-1 ring-offset-button-ring-offset-color-focus duration-200 focus-visible:ring-2',
    icon: 'duration-200 [--icon-color:var(--button-icon-color-default)] [--icon-size:var(--icon-button-icon-size-default)]',
  },
  variants: {
    isDisabled: {
      true: {
        button: 'cursor-not-allowed border-button-border-color-disabled bg-button-bg-color-disabled',
        icon: '[--icon-color:var(--button-icon-color-disabled)]',
      },
    },
    isFocused: {
      true: {
        button: 'border-button-border-color-focus bg-button-bg-color-focus text-button-text-color-focus ring-button-ring-color-focus',
        icon: '[--icon-color:var(--button-icon-color-focus)]',
      },
    },
    isHovered: {
      true: {
        button: 'border-button-border-color-hover bg-button-bg-color-hover text-button-text-color-hover',
        icon: '[--icon-color:var(--button-icon-color-hover)]',
      },
    },
    isActive: {
      true: {
        button: 'border-button-border-color-active bg-button-bg-color-active text-button-text-color-active',
        icon: '[--icon-color:var(--button-icon-color-active)]',
      },
    },
    isLoading: {
      true: {
        button: 'cursor-not-allowed',
      },
    },
  },
})
