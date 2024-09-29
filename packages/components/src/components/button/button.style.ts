import { tv } from '@/libs/twVariants.lib'

export const buttonStyle = tv({
  slots: {
    button: 'relative flex h-button-height-default items-center overflow-hidden rounded-button-border-radius-default border border-solid border-button-border-default bg-button-bg-default px-button-padding-left-default text-button-font-size-default font-button-font-weight-default text-button-text-default outline-none ring-button-ring-default ring-offset-1 duration-200 focus-visible:ring-2',
    iconLeft: 'mr-button-icon-left-margin-right-default shrink-0 duration-200 [--icon-color:var(--button-icon-color-default)] [--icon-size:var(--button-icon-size-default)]',
    iconRight: 'ml-button-icon-right-margin-left-default shrink-0 duration-200 [--icon-color:var(--button-icon-color-default)] [--icon-size:var(--button-icon-size-default)]',
    loader: 'h-button-loader-size-default w-button-loader-size-default text-button-loader-color-default',
    loaderBox: 'absolute left-1/2 top-1/2 flex size-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-button-bg-default',
  },
  variants: {
    isDisabled: {
      true: {
        button: 'cursor-not-allowed border-button-border-disabled bg-button-bg-disabled text-button-text-disabled ring-button-ring-disabled',
        iconLeft: '[--icon-color:var(--button-icon-color-disabled)]',
        iconRight: '[--icon-color:var(--button-icon-color-disabled)]',
      },
    },
    isFocused: {
      true: {
        button: 'border-button-border-focus bg-button-bg-focus text-button-text-focus ring-button-ring-focus',
        iconLeft: '[--icon-color:var(--button-icon-color-focus)]',
        iconRight: '[--icon-color:var(--button-icon-color-focus)]',
      },
    },
    isHovered: {
      true: {
        button: 'border-button-border-hover bg-button-bg-hover text-button-text-hover ring-button-ring-hover',
        iconLeft: '[--icon-color:var(--button-icon-color-hover)]',
        iconRight: '[--icon-color:var(--button-icon-color-hover)]',
      },
    },
    isActive: {
      true: {
        button: 'border-button-border-active bg-button-bg-active text-button-text-active ring-button-ring-active',
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
