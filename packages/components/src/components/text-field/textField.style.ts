import { tv } from '@/libs/twVariants.lib'

export const textFieldStyle = tv({
  slots: {
    box: 'group relative flex h-text-field-height-default items-center overflow-hidden rounded-bl-text-field-border-radius-bottom-left-default rounded-br-text-field-border-radius-bottom-right-default rounded-tl-text-field-border-radius-top-left-default rounded-tr-text-field-border-radius-top-right-default border border-solid border-b-text-field-border-bottom-default border-l-text-field-border-left-default border-r-text-field-border-right-default border-t-text-field-border-top-default bg-text-field-bg-default shadow-text-field-shadow-default ring-text-field-ring-default duration-200',
    error: 'block pt-text-field-error-padding-top-default text-text-field-error-font-size-default text-text-field-error-color-default',
    hint: 'block pt-text-field-hint-padding-top-default text-text-field-hint-font-size-default text-text-field-hint-color-default',
    iconleft: 'box-content shrink-0 pl-text-field-icon-left-padding-left-default duration-200 [--icon-color:var(--text-field-icon-color-default)] [--icon-size:var(--text-field-icon-size-default)]',
    iconright: 'box-content shrink-0 pr-text-field-icon-right-padding-right-default duration-200 [--icon-color:var(--text-field-icon-color-default)] [--icon-size:var(--text-field-icon-size-default)]',
    input: 'size-full bg-transparent pl-text-field-padding-left-default pr-text-field-padding-right-default text-text-field-font-size-default font-text-field-font-weight-default text-text-field-color-default outline-none placeholder:text-text-field-placeholder-default',
    inputLabel: 'block pb-text-field-label-padding-bottom-default text-text-field-label-font-size-default font-text-field-label-font-weight-default text-text-field-label-color-default duration-200',
    loader: 'h-text-field-loader-size-default w-text-field-loader-size-default text-text-field-loader-color-default',
    loaderBox: 'pr-text-field-icon-right-padding-right-default',
  },
  variants: {
    isDisabled: {
      true: {
        box: 'cursor-not-allowed border-b-text-field-border-bottom-disabled border-l-text-field-border-left-disabled border-r-text-field-border-right-disabled border-t-text-field-border-top-disabled bg-text-field-bg-disabled shadow-text-field-shadow-disabled',
        hint: 'text-text-field-hint-color-disabled',
        iconleft: '[--icon-color:var(--text-field-icon-color-disabled)]',
        iconright: '[--icon-color:var(--text-field-icon-color-disabled)]',
        input: 'cursor-not-allowed text-text-field-color-disabled placeholder:text-text-field-placeholder-disabled',
        inputLabel: 'text-text-field-label-color-disabled',
        loader: 'text-text-field-loader-color-disabled',
      },
    },
    isHovered: {
      true: {
        box: 'border-b-text-field-border-bottom-hover border-l-text-field-border-left-hover border-r-text-field-border-right-hover border-t-text-field-border-top-hover bg-text-field-bg-hover shadow-text-field-shadow-hover ring-text-field-ring-hover',
        hint: 'text-text-field-hint-color-hover',
        iconleft: '[--icon-color:var(--text-field-icon-color-hover)]',
        iconright: '[--icon-color:var(--text-field-icon-color-hover)]',
        input: 'text-text-field-color-hover placeholder:text-text-field-placeholder-hover',
        inputLabel: 'text-text-field-label-color-hover',
        loader: 'text-text-field-loader-color-hover',
      },
    },
    isFocused: {
      true: {
        box: 'border-b-text-field-border-bottom-focus border-l-text-field-border-left-focus border-r-text-field-border-right-focus border-t-text-field-border-top-focus bg-text-field-bg-focus shadow-text-field-shadow-focus ring-2 ring-text-field-ring-focus',
        hint: 'text-text-field-hint-color-focus',
        iconleft: '[--icon-color:var(--text-field-icon-color-focus)]',
        iconright: '[--icon-color:var(--text-field-icon-color-focus)]',
        input: 'text-text-field-color-focus placeholder:text-text-field-placeholder-focus',
        inputLabel: 'text-text-field-label-color-focus',
        loader: 'text-text-field-loader-color-focus',
      },
    },
    hasError: {
      true: {
        box: 'border-b-text-field-border-bottom-error border-l-text-field-border-left-error border-r-text-field-border-right-error border-t-text-field-border-top-error bg-text-field-bg-error shadow-text-field-shadow-error ring-text-field-ring-error',
        hint: 'text-text-field-hint-color-error',
        iconleft: '[--icon-color:var(--text-field-icon-color-error)]',
        iconright: '[--icon-color:var(--text-field-icon-color-error)]',
        input: 'text-text-field-color-error placeholder:text-text-field-placeholder-error',
        inputLabel: 'text-text-field-label-color-error',
        loader: 'text-text-field-loader-color-error',
      },
    },
  },
})
