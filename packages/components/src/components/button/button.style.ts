import { tv } from '@/libs/twVariants.lib'

export const buttonStyle = tv({
  slots: {
    button: 'relative flex h-button-height-default items-center overflow-hidden rounded-button-border-radius-default border border-solid border-button-border-color-default bg-button-bg-color-default px-button-padding-left-default text-button-font-size-default font-button-font-weight-default text-button-text-color-default outline-none ring-offset-1 duration-200 focus-visible:ring-2',
    iconLeft: 'mr-button-icon-left-spacing-default shrink-0 duration-200 [--icon-color:var(--button-icon-color-default)] [--icon-size:var(--button-icon-size-default)]',
    iconRight: 'ml-button-icon-right-spacing-default shrink-0 duration-200 [--icon-color:var(--button-icon-color-default)] [--icon-size:var(--button-icon-size-default)]',
    loader: 'h-button-loader-size-default w-button-loader-size-default text-button-loader-color-default',
    loaderBox: 'absolute left-1/2 top-1/2 flex size-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-button-bg-color-default',
  },
  variants: {
    isDisabled: {
      true: {
        button: 'cursor-not-allowed border-button-border-color-disabled bg-button-bg-color-disabled text-button-text-color-disabled',
        iconLeft: '[--icon-color:var(--button-icon-color-disabled)]',
        iconRight: '[--icon-color:var(--button-icon-color-disabled)]',
      },
    },
    isFocused: {
      true: {
        button: 'border-button-border-color-focus bg-button-bg-color-focus text-button-text-color-focus ring-button-ring-color-focus',
        iconLeft: '[--icon-color:var(--button-icon-color-focus)]',
        iconRight: '[--icon-color:var(--button-icon-color-focus)]',
      },
    },
    isHovered: {
      true: {
        button: 'border-button-border-color-hover bg-button-bg-color-hover text-button-text-color-hover',
        iconLeft: '[--icon-color:var(--button-icon-color-hover)]',
        iconRight: '[--icon-color:var(--button-icon-color-hover)]',
      },
    },
    isActive: {
      true: {
        button: 'border-button-border-color-active bg-button-bg-color-active text-button-text-color-active',
        iconLeft: '[--icon-color:var(--button-icon-color-active)]',
        iconRight: '[--icon-color:var(--button-icon-color-active)]',
      },
    },
    isLoading: {
      true: {
        button: 'cursor-not-allowed',
      },
    },
  },
})
