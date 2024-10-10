import { tv } from '@/libs/twVariants.lib'

export const textareaStyle = tv({
  slots: {
    textarea: 'max-h-textarea-max-height-default min-h-textarea-min-height-default rounded-bl-textarea-border-radius-bottom-left-default rounded-br-textarea-border-radius-bottom-right-default rounded-tl-textarea-border-radius-top-left-default rounded-tr-textarea-border-radius-top-right-default border border-solid border-b-textarea-border-bottom-color-default border-l-textarea-border-left-color-default border-r-textarea-border-right-color-default border-t-textarea-border-top-color-default bg-textarea-bg-color-default px-textarea-padding-x-default py-textarea-padding-y-default text-textarea-font-size-default font-textarea-font-weight-default leading-textarea-line-height-default text-textarea-text-color-default outline-none ring-offset-textarea-ring-offset-color-focus transition-[color,border-color,background-color,box-shadow] duration-200 placeholder:text-textarea-placeholder-color-default',
  },
  variants: {
    isDisabled: {
      true: {
        textarea: 'cursor-not-allowed border-b-textarea-border-bottom-color-disabled border-l-textarea-border-left-color-disabled border-r-textarea-border-right-color-disabled border-t-textarea-border-top-color-disabled bg-textarea-bg-color-disabled text-textarea-text-color-disabled placeholder:text-textarea-placeholder-color-disabled',
      },
    },
    isHovered: {
      true: {
        textarea: 'border-b-textarea-border-bottom-color-hover border-l-textarea-border-left-color-hover border-r-textarea-border-right-color-hover border-t-textarea-border-top-color-hover bg-textarea-bg-color-hover text-textarea-text-color-hover placeholder:text-textarea-placeholder-color-hover',
      },
    },
    isFocused: {
      true: {
        textarea: 'border-b-textarea-border-bottom-color-focus border-l-textarea-border-left-color-focus border-r-textarea-border-right-color-focus border-t-textarea-border-top-color-focus bg-textarea-bg-color-focus text-textarea-text-color-focus ring-2 ring-textarea-ring-color-focus placeholder:text-textarea-placeholder-color-focus',
      },
    },
    hasError: {
      true: {
        textarea: 'border-b-textarea-border-bottom-color-error border-l-textarea-border-left-color-error border-r-textarea-border-right-color-error border-t-textarea-border-top-color-error bg-textarea-bg-color-error text-textarea-text-color-error ring-textarea-ring-color-error placeholder:text-textarea-placeholder-color-error',
      },
    },
    resizeMode: {
      'auto-vertical': {
        textarea: 'resize-none',
      },
      'both': {
        textarea: 'resize',
      },
      'horizontal': {
        textarea: 'resize-x',
      },
      'none': {
        textarea: 'resize-none',
      },
      'vertical': {
        textarea: 'resize-y',
      },
    },
  },
})
