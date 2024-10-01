import { tv } from '@/libs/twVariants.lib'

export const selectStyle = tv({
  slots: {
    dropdown: 'w-[--radix-select-trigger-width] rounded-select-dropdown-border-radius-default border border-solid border-select-dropdown-border-color-default bg-select-dropdown-bg-default shadow-select-dropdown-shadow-default',
    error: 'block pt-select-error-padding-top-default text-select-error-font-size-default text-select-error-color-default',
    hint: 'block pt-select-hint-padding-top-default text-select-hint-font-size-default text-select-hint-color-default',
    iconLeft: 'box-content shrink-0 pr-select-icon-left-padding-right-default duration-200 [--icon-color:var(--select-icon-color-default)] [--icon-size:var(--select-icon-size-default)]',
    iconRight: 'box-content shrink-0 pl-select-icon-right-padding-left-default duration-200 [--icon-color:var(--select-icon-color-default)] [--icon-size:var(--select-icon-size-default)]',
    inputLabel: 'block pb-select-label-padding-bottom-default text-select-label-font-size-default font-select-label-font-weight-default text-select-label-color-default duration-200',
    loader: 'h-select-loader-size-default w-select-loader-size-default text-select-loader-color-default',
    loaderBox: 'pl-select-icon-right-padding-left-default',
    trigger: 'group relative flex h-select-height-default w-full items-center overflow-hidden rounded-bl-select-border-radius-bottom-left-default rounded-br-select-border-radius-bottom-right-default rounded-tl-select-border-radius-top-left-default rounded-tr-select-border-radius-top-right-default border border-solid border-b-select-border-bottom-default border-l-select-border-left-default border-r-select-border-right-default border-t-select-border-top-default bg-select-bg-default pl-select-padding-left-default pr-select-padding-right-default text-select-font-size-default font-select-font-weight-default text-select-color-default shadow-select-shadow-default outline-none ring-select-ring-default duration-200 placeholder:text-select-placeholder-default',
  },
  variants: {
    isDisabled: {
      true: {
        hint: 'text-select-hint-color-disabled',
        iconLeft: '[--icon-color:var(--select-icon-color-disabled)]',
        iconRight: '[--icon-color:var(--select-icon-color-disabled)]',
        inputLabel: 'text-select-label-color-disabled',
        loader: 'text-select-loader-color-disabled',
        trigger: 'cursor-not-allowed border-b-select-border-bottom-disabled border-l-select-border-left-disabled border-r-select-border-right-disabled border-t-select-border-top-disabled bg-select-bg-disabled text-select-color-disabled shadow-select-shadow-disabled placeholder:text-select-placeholder-disabled',
      },
    },
    isHovered: {
      true: {
        hint: 'text-select-hint-color-hover',
        iconLeft: '[--icon-color:var(--select-icon-color-hover)]',
        iconRight: '[--icon-color:var(--select-icon-color-hover)]',
        inputLabel: 'text-select-label-color-hover',
        loader: 'text-select-loader-color-hover',
        trigger: 'border-b-select-border-bottom-hover border-l-select-border-left-hover border-r-select-border-right-hover border-t-select-border-top-hover bg-select-bg-hover text-select-color-hover shadow-select-shadow-hover ring-select-ring-hover placeholder:text-select-placeholder-hover',
      },
    },
    isFocused: {
      true: {
        hint: 'text-select-hint-color-focus',
        iconLeft: '[--icon-color:var(--select-icon-color-focus)]',
        iconRight: '[--icon-color:var(--select-icon-color-focus)]',
        inputLabel: 'text-select-label-color-focus',
        loader: 'text-select-loader-color-focus',
        trigger: 'border-b-select-border-bottom-focus border-l-select-border-left-focus border-r-select-border-right-focus border-t-select-border-top-focus bg-select-bg-focus text-select-color-focus shadow-select-shadow-focus ring-2 ring-select-ring-focus placeholder:text-select-placeholder-focus',
      },
    },
    hasError: {
      true: {
        hint: 'text-select-hint-color-error',
        iconLeft: '[--icon-color:var(--select-icon-color-error)]',
        iconRight: '[--icon-color:var(--select-icon-color-error)]',
        inputLabel: 'text-select-label-color-error',
        loader: 'text-select-loader-color-error',
        trigger: 'border-b-select-border-bottom-error border-l-select-border-left-error border-r-select-border-right-error border-t-select-border-top-error bg-select-bg-error text-select-color-error shadow-select-shadow-error ring-select-ring-error placeholder:text-select-placeholder-error',
      },
    },
  },
})
