import { tv } from '@/libs/twVariants.lib'

export const textareaStyle = tv({
  slots: {
    error: '[--input-field-error-font-size-default:var(--textarea-error-font-size-default)] [--input-field-error-spacing-default:var(--textarea-error-spacing-default)] [--input-field-error-text-color-default:var(--textarea-error-text-color-default)]',
    hint: '[--input-field-hint-font-size-default:var(--textarea-hint-font-size-default)] [--input-field-hint-text-color-default:var(--textarea-hint-text-color-default)]',
    label: '[--input-field-label-font-size-default:var(--textarea-label-font-size-default)] [--input-field-label-font-weight-default:var(--textarea-label-font-weight-default)] [--input-field-label-spacing-default:var(--textarea-label-spacing-default)] [--input-field-label-text-color-default:var(--textarea-label-text-color-default)]',
    textarea: 'max-h-textarea-max-height-default min-h-textarea-min-height-default w-full rounded-bl-textarea-border-radius-bottom-left-default rounded-br-textarea-border-radius-bottom-right-default rounded-tl-textarea-border-radius-top-left-default rounded-tr-textarea-border-radius-top-right-default border border-solid border-b-textarea-border-bottom-color-default border-l-textarea-border-left-color-default border-r-textarea-border-right-color-default border-t-textarea-border-top-color-default bg-textarea-bg-color-default px-textarea-padding-x-default py-textarea-padding-y-default text-textarea-font-size-default font-textarea-font-weight-default leading-textarea-line-height-default text-textarea-text-color-default outline-none ring-offset-textarea-ring-offset-color-focus transition-[color,border-color,background-color,box-shadow] duration-200 placeholder:text-textarea-placeholder-color-default',
  },
  variants: {
    isDisabled: {
      true: {
        hint: '[--input-field-hint-text-color-disabled:var(--textarea-hint-text-color-disabled)]',
        label: '[--input-field-label-text-color-default:var(--textarea-label-text-color-disabled)]',
        textarea: 'cursor-not-allowed border-b-textarea-border-bottom-color-disabled border-l-textarea-border-left-color-disabled border-r-textarea-border-right-color-disabled border-t-textarea-border-top-color-disabled bg-textarea-bg-color-disabled text-textarea-text-color-disabled placeholder:text-textarea-placeholder-color-disabled',
      },
    },
    isHovered: {
      true: {
        hint: '[--input-field-hint-text-color-hover:var(--textarea-hint-text-color-hover)]',
        label: '[--input-field-label-text-color-default:var(--textarea-label-text-color-hover)]',
        textarea: 'border-b-textarea-border-bottom-color-hover border-l-textarea-border-left-color-hover border-r-textarea-border-right-color-hover border-t-textarea-border-top-color-hover bg-textarea-bg-color-hover text-textarea-text-color-hover placeholder:text-textarea-placeholder-color-hover',
      },
    },
    isFocused: {
      true: {
        hint: '[--input-field-hint-text-color-focus:var(--textarea-hint-text-color-focus)]',
        label: '[--input-field-label-text-color-default:var(--textarea-label-text-color-focus)]',
        textarea: 'border-b-textarea-border-bottom-color-focus border-l-textarea-border-left-color-focus border-r-textarea-border-right-color-focus border-t-textarea-border-top-color-focus bg-textarea-bg-color-focus text-textarea-text-color-focus ring-2 ring-textarea-ring-color-focus placeholder:text-textarea-placeholder-color-focus',
      },
    },
    hasError: {
      true: {
        hint: '[--input-field-hint-text-color-error:var(--textarea-hint-text-color-error)]',
        label: '[--input-field-label-text-color-default:var(--textarea-label-text-color-error)]',
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
