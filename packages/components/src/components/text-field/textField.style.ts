import { tv } from '@/libs/twVariants.lib'

export const textFieldStyle = tv({
  slots: {
    box: 'group relative flex h-text-field-height-default items-center overflow-hidden rounded-bl-text-field-border-radius-bottom-left-default rounded-br-text-field-border-radius-bottom-right-default rounded-tl-text-field-border-radius-top-left-default rounded-tr-text-field-border-radius-top-right-default border border-solid border-b-text-field-border-bottom-color-default border-l-text-field-border-left-color-default border-r-text-field-border-right-color-default border-t-text-field-border-top-color-default bg-text-field-bg-color-default shadow-text-field-shadow-default duration-200',
    error: 'mt-text-field-error-spacing-default block text-text-field-error-font-size-default text-text-field-error-text-color-default',
    hint: 'mt-text-field-hint-spacing-default block text-text-field-hint-font-size-default text-text-field-hint-text-color-default',
    iconLeft: 'ml-text-field-icon-left-spacing-default box-content shrink-0 duration-200 [--icon-color:var(--text-field-icon-color-default)] [--icon-size:var(--text-field-icon-size-default)]',
    iconRight: 'mr-text-field-icon-right-spacing-default box-content shrink-0 duration-200 [--icon-color:var(--text-field-icon-color-default)] [--icon-size:var(--text-field-icon-size-default)]',
    input: 'size-full bg-transparent pl-text-field-padding-left-default pr-text-field-padding-right-default text-text-field-font-size-default font-text-field-font-weight-default text-text-field-text-color-default outline-none placeholder:text-text-field-placeholder-color-default',
    inputLabel: 'mb-text-field-label-spacing-default block text-text-field-label-font-size-default font-text-field-label-font-weight-default text-text-field-label-text-color-default duration-200',
    loader: 'h-text-field-loader-size-default w-text-field-loader-size-default text-text-field-loader-color-default',
    loaderBox: 'mr-text-field-icon-right-spacing-default',
  },
  variants: {
    isDisabled: {
      true: {
        box: 'cursor-not-allowed border-b-text-field-border-bottom-color-disabled border-l-text-field-border-left-color-disabled border-r-text-field-border-right-color-disabled border-t-text-field-border-top-color-disabled bg-text-field-bg-color-disabled shadow-text-field-shadow-disabled',
        hint: 'text-text-field-hint-text-color-disabled',
        iconLeft: '[--icon-color:var(--text-field-icon-color-disabled)]',
        iconRight: '[--icon-color:var(--text-field-icon-color-disabled)]',
        input: 'cursor-not-allowed text-text-field-text-color-disabled placeholder:text-text-field-placeholder-color-disabled',
        inputLabel: 'text-text-field-label-text-color-disabled',
        loader: 'text-text-field-loader-color-disabled',
      },
    },
    isHovered: {
      true: {
        box: 'border-b-text-field-border-bottom-color-hover border-l-text-field-border-left-color-hover border-r-text-field-border-right-color-hover border-t-text-field-border-top-color-hover bg-text-field-bg-color-hover shadow-text-field-shadow-hover',
        hint: 'text-text-field-hint-text-color-hover',
        iconLeft: '[--icon-color:var(--text-field-icon-color-hover)]',
        iconRight: '[--icon-color:var(--text-field-icon-color-hover)]',
        input: 'text-text-field-text-color-hover placeholder:text-text-field-placeholder-color-hover',
        inputLabel: 'text-text-field-label-text-color-hover',
        loader: 'text-text-field-loader-color-hover',
      },
    },
    isFocused: {
      true: {
        box: 'border-b-text-field-border-bottom-color-focus border-l-text-field-border-left-color-focus border-r-text-field-border-right-color-focus border-t-text-field-border-top-color-focus bg-text-field-bg-color-focus shadow-text-field-shadow-focus ring-2 ring-text-field-ring-color-focus',
        hint: 'text-text-field-hint-text-color-focus',
        iconLeft: '[--icon-color:var(--text-field-icon-color-focus)]',
        iconRight: '[--icon-color:var(--text-field-icon-color-focus)]',
        input: 'text-text-field-text-color-focus placeholder:text-text-field-placeholder-color-focus',
        inputLabel: 'text-text-field-label-text-color-focus',
        loader: 'text-text-field-loader-color-focus',
      },
    },
    hasError: {
      true: {
        box: 'border-b-text-field-border-bottom-color-error border-l-text-field-border-left-color-error border-r-text-field-border-right-color-error border-t-text-field-border-top-color-error bg-text-field-bg-color-error shadow-text-field-shadow-error ring-text-field-ring-color-error',
        hint: 'text-text-field-hint-text-color-error',
        iconLeft: '[--icon-color:var(--text-field-icon-color-error)]',
        iconRight: '[--icon-color:var(--text-field-icon-color-error)]',
        input: 'text-text-field-text-color-error placeholder:text-text-field-placeholder-color-error',
        inputLabel: 'text-text-field-label-text-color-error',
        loader: 'text-text-field-loader-color-error',
      },
    },
  },
})
