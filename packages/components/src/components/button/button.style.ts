import { tv } from '@/libs/twVariants.lib'

export const buttonStyle = tv({
  slots: {
    button: 'relative flex h-button-height-default items-center rounded-button-border-radius-default border border-solid border-button-border-default bg-button-bg-default px-button-padding-left-default text-button-font-size-default font-button-font-weight-default text-button-text-default outline-none ring-button-ring-default ring-offset-1 duration-200 focus-visible:ring-2',
    iconLeft: 'mr-button-icon-left-margin-right-default shrink-0 duration-200 [--icon-color:var(--button-icon-color-default)] [--icon-size-default:var(--button-icon-size-default)]',
    iconRight: 'ml-button-icon-right-margin-left-default shrink-0 duration-200 [--icon-color:var(--button-icon-color-default)] [--icon-size-default:var(--button-icon-size-default)]',
  },
  variants: {
    isDisabled: {
      true: {
        button: 'cursor-not-allowed border-button-border-disabled bg-button-bg-disabled text-button-text-disabled ring-button-ring-disabled',
      },
    },
    isFocused: {
      true: {
        button: 'border-button-border-focus bg-button-bg-focus text-button-text-focus ring-button-ring-focus',
      },
    },
    isHovered: {
      true: {
        button: 'border-button-border-hover bg-button-bg-hover text-button-text-hover ring-button-ring-hover',
      },
    },
    isActive: {
      true: {
        button: 'border-button-border-active bg-button-bg-active text-button-text-active ring-button-ring-active',
      },
    },
  },
})
