import { tv } from 'tailwind-variants'

export const iconButtonStyle = tv({
  slots: {
    button: 'relative flex h-icon-button-size-default w-icon-button-size-default items-center justify-center overflow-hidden rounded-button-border-radius-default border border-solid border-button-border-default bg-button-bg-default text-button-font-size-default outline-none ring-button-ring-default ring-offset-1 duration-200 focus-visible:ring-2',
    icon: 'duration-200 [--icon-color:var(--button-icon-color-default)] [--icon-size:var(--icon-button-icon-size-default)]',
  },
  variants: {
    isDisabled: {
      true: {
        button: 'cursor-not-allowed border-button-border-disabled bg-button-bg-disabled ring-button-ring-disabled',
        icon: '[--icon-color:var(--button-icon-color-disabled)]',
      },
    },
    isFocused: {
      true: {
        button: 'border-button-border-focus bg-button-bg-focus text-button-text-focus ring-button-ring-focus',
        icon: '[--icon-color:var(--button-icon-color-focus)]',
      },
    },
    isHovered: {
      true: {
        button: 'border-button-border-hover bg-button-bg-hover text-button-text-hover ring-button-ring-hover',
        icon: '[--icon-color:var(--button-icon-color-hover)]',
      },
    },
    isActive: {
      true: {
        button: 'border-button-border-active bg-button-bg-active text-button-text-active ring-button-ring-active',
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
