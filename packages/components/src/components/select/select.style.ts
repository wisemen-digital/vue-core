import { tv } from '@/libs/twVariants.lib'

export const selectStyle = tv({
  slots: {
    dropdownContent: 'px-select-dropdown-padding-x-default py-select-dropdown-padding-y-default outline-none',
    groupContent: 'px-select-group-content-padding-x-default py-select-group-content-padding-y-default',
    groupLabel: 'px-select-group-label-spacing-x-default pb-select-group-label-spacing-bottom-default pt-select-group-label-spacing-top-default text-select-group-label-font-size-default font-select-group-label-font-weight-default text-select-group-label-text-color-default',
    iconLeft: 'ml-select-icon-left-spacing-default box-content shrink-0 duration-200 [--icon-color:var(--select-icon-color-default)] [--icon-size:var(--select-icon-left-size-default)]',
    iconRight: 'mr-select-icon-right-spacing-default box-content shrink-0 duration-200 [--icon-color:var(--select-icon-color-default)] [--icon-size:var(--select-icon-right-size-default)]',
    listboxContent: 'max-h-select-dropdown-max-height-default overflow-y-auto',
    loader: 'h-select-loader-size-default w-select-loader-size-default text-select-loader-color-default',
    loaderBox: 'mr-select-icon-right-spacing-default',
    option: 'group flex min-h-select-option-min-height-default cursor-default items-center justify-between rounded-select-option-border-radius-default bg-select-option-bg-color-default px-select-option-padding-x-default py-select-option-padding-y-default text-select-option-font-size-default font-select-option-font-weight-default text-select-option-text-color-default outline-none duration-200 hover:bg-select-option-bg-color-hover hover:text-select-option-text-color-hover data-[disabled]:cursor-not-allowed data-[disabled]:bg-select-option-bg-color-disabled data-[highlighted]:bg-select-option-bg-color-highlighted data-[state=checked]:bg-select-option-bg-color-selected data-[state=checked]:data-[highlighted]:bg-select-option-bg-color-highlighted data-[disabled]:text-select-option-text-color-disabled data-[state=checked]:text-select-option-text-color-selected data-[disabled]:hover:bg-select-option-bg-color-disabled data-[highlighted]:hover:bg-select-option-bg-color-hover data-[state=checked]:hover:bg-select-option-bg-color-hover hover:data-[disabled]:bg-select-option-bg-color-disabled',
    optionIndicator: 'h-select-option-indicator-size-default w-select-option-indicator-size-default flex-shrink-0 [--icon-color:var(--select-option-indicator-color-default)]',
    placeholder: 'pointer-events-none block w-full truncate pl-select-padding-left-default pr-select-padding-right-default text-left text-select-placeholder-color-default duration-200',
    selectBox: 'relative flex min-h-select-min-height-default w-full items-center rounded-bl-select-border-radius-bottom-left-default rounded-br-select-border-radius-bottom-right-default rounded-tl-select-border-radius-top-left-default rounded-tr-select-border-radius-top-right-default border border-solid border-b-select-border-bottom-color-default border-l-select-border-left-color-default border-r-select-border-right-color-default border-t-select-border-top-color-default bg-select-bg-color-default py-select-padding-y-default text-left text-select-font-size-default font-select-font-weight-default text-select-text-color-default shadow-select-shadow-default outline-none duration-200',
    separator: 'my-select-separator-spacing-y-default h-px bg-select-separator-color-default',
    tags: 'flex size-full w-full flex-wrap items-center gap-1 py-1.5 pl-select-tags-padding-left-default pr-select-tags-padding-right-default',
    value: 'w-full truncate pl-select-padding-left-default pr-select-padding-right-default',
  },
  variants: {
    isDisabled: {
      true: {
        iconLeft: '[--icon-color:var(--select-icon-color-disabled)]',
        iconRight: '[--icon-color:var(--select-icon-color-disabled)]',
        loader: 'text-select-loader-color-disabled',
        placeholder: 'text-select-placeholder-color-disabled',
        selectBox: 'cursor-not-allowed border-b-select-border-bottom-color-disabled border-l-select-border-left-color-disabled border-r-select-border-right-color-disabled border-t-select-border-top-color-disabled bg-select-bg-color-disabled text-select-text-color-disabled shadow-select-shadow-disabled',
      },
    },
    isHovered: {
      true: {
        iconLeft: '[--icon-color:var(--select-icon-color-hover)]',
        iconRight: '[--icon-color:var(--select-icon-color-hover)]',
        loader: 'text-select-loader-color-hover',
        placeholder: 'text-select-placeholder-color-hover',
        selectBox: 'border-b-select-border-bottom-color-hover border-l-select-border-left-color-hover border-r-select-border-right-color-hover border-t-select-border-top-color-hover bg-select-bg-color-hover text-select-text-color-hover shadow-select-shadow-hover',
      },
    },
    isFocused: {
      true: {
        iconLeft: '[--icon-color:var(--select-icon-color-focus)]',
        iconRight: '[--icon-color:var(--select-icon-color-focus)]',
        loader: 'text-select-loader-color-focus',
        placeholder: 'text-select-placeholder-color-focus',
        selectBox: 'ring-2 ring-select-ring-color-focus',
      },
    },
    hasError: {
      true: {
        iconLeft: '[--icon-color:var(--select-icon-color-error)]',
        iconRight: '[--icon-color:var(--select-icon-color-error)]',
        loader: 'text-select-loader-color-error',
        placeholder: 'text-select-placeholder-color-error',
        selectBox: 'ring-2 ring-select-ring-color-error',
      },
    },
    hasIconLeft: {
      true: {
        placeholder: 'pl-select-with-icon-left-padding-left-default',
        value: 'pl-select-with-icon-left-padding-left-default',
      },
    },
    hasIconRight: {
      true: {
        placeholder: 'pr-select-with-icon-right-padding-right-default',
        value: 'pr-select-with-icon-right-padding-right-default',
      },
    },
  },
})
