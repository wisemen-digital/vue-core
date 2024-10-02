import { tv } from '@/libs/twVariants.lib'

export const selectStyle = tv({
  slots: {
    caret: 'ml-select-caret-spacing-default box-content shrink-0 duration-200 [--icon-color:var(--select-caret-color-default)] [--icon-size:var(--select-caret-size-default)]',
    dropdown: 'max-w-select-dropdown-max-width-default rounded-select-dropdown-border-radius-default border border-solid border-select-dropdown-border-color-default bg-select-dropdown-bg-color-default px-select-dropdown-padding-x-default py-select-dropdown-padding-y-default shadow-select-dropdown-shadow-default',
    error: '[--input-field-error-font-size-default:var(--select-error-font-size-default)] [--input-field-error-spacing-default:var(--select-error-spacing-default)] [--input-field-error-text-color-default:var(--select-error-text-color-default)]',
    group: 'px-select-group-padding-x-default py-select-group-padding-y-default',
    groupLabel: 'sticky top-0 bg-select-dropdown-bg-color-default px-select-group-label-spacing-x-default pb-select-group-label-spacing-bottom-default pt-select-group-label-spacing-top-default text-select-group-label-font-size-default font-select-group-label-font-weight-default text-select-group-label-text-color-default',
    hint: '[--input-field-hint-font-size-default:var(--select-hint-font-size-default)] [--input-field-hint-text-color-default:var(--select-hint-text-color-default)]',
    iconLeft: 'mr-select-icon-left-spacing-default box-content shrink-0 duration-200 [--icon-color:var(--select-icon-left-color-default)] [--icon-size:var(--select-icon-left-size-default)]',
    inputLabel: '[--input-field-label-font-size-default:var(--select-label-font-size-default)] [--input-field-label-font-weight-default:var(--select-label-font-weight-default)] [--input-field-label-spacing-default:var(--select-label-spacing-default)] [--input-field-label-text-color-default:var(--select-label-text-color-default)]',
    loader: 'h-select-loader-size-default w-select-loader-size-default text-select-loader-color-default',
    loaderBox: 'ml-select-caret-spacing-default',
    placeholder: 'block w-full text-left text-select-placeholder-color-default',
    separator: 'my-select-item-seperator-spacing-y-default h-px bg-select-item-separator-color-default',
    trigger: 'group relative flex h-select-height-default w-full items-center overflow-hidden rounded-bl-select-border-radius-bottom-left-default rounded-br-select-border-radius-bottom-right-default rounded-tl-select-border-radius-top-left-default rounded-tr-select-border-radius-top-right-default border border-solid border-b-select-border-bottom-color-default border-l-select-border-left-color-default border-r-select-border-right-color-default border-t-select-border-top-color-default bg-select-bg-color-default pl-select-padding-left-default pr-select-padding-right-default text-select-font-size-default font-select-font-weight-default text-select-text-color-default shadow-select-shadow-default outline-none duration-200',
    value: 'block w-full text-left',
    viewport: 'max-h-select-dropdown-max-height-default',
  },
  variants: {
    isDisabled: {
      true: {
        caret: '[--icon-color:var(--select-caret-color-disabled)]',
        hint: '[--input-field-hint-text-color-disabled:var(--select-hint-text-color-disabled)]',
        iconLeft: '[--icon-color:var(--select-icon-left-color-disabled)]',
        inputLabel: '[--input-field-label-text-color-default:var(--select-label-text-color-disabled)]',
        loader: 'text-select-loader-color-disabled',
        placeholder: 'text-select-placeholder-color-disabled',
        trigger: 'cursor-not-allowed border-b-select-border-bottom-color-disabled border-l-select-border-left-color-disabled border-r-select-border-right-color-disabled border-t-select-border-top-color-disabled bg-select-bg-color-disabled text-select-text-color-disabled shadow-select-shadow-disabled',
      },
    },
    isHovered: {
      true: {
        caret: '[--icon-color:var(--select-caret-color-hover)]',
        hint: '[--input-field-hint-text-color-hover:var(--select-hint-text-color-hover)]',
        iconLeft: '[--icon-color:var(--select-icon-left-color-hover)]',
        inputLabel: '[--input-field-label-text-color-default:var(--select-label-text-color-hover)]',
        loader: 'text-select-loader-color-hover',
        placeholder: 'text-select-placeholder-color-hover',
        trigger: 'border-b-select-border-bottom-color-hover border-l-select-border-left-color-hover border-r-select-border-right-color-hover border-t-select-border-top-color-hover bg-select-bg-color-hover text-select-text-color-hover shadow-select-shadow-hover',
      },
    },
    isFocused: {
      true: {
        caret: '[--icon-color:var(--select-caret-color-focus)]',
        hint: '[--input-field-hint-text-color-focus:var(--select-hint-text-color-focus)]',
        iconLeft: '[--icon-color:var(--select-icon-left-color-focus)]',
        inputLabel: '[--input-field-label-text-color-default:var(--select-label-text-color-focus)]',
        loader: 'text-select-loader-color-focus',
        placeholder: 'text-select-placeholder-color-focus',
        trigger: 'border-b-select-border-bottom-color-focus border-l-select-border-left-color-focus border-r-select-border-right-color-focus border-t-select-border-top-color-focus bg-select-bg-color-focus text-select-text-color-focus shadow-select-shadow-focus ring-2 ring-select-ring-color-focus',
      },
    },
    hasError: {
      true: {
        caret: '[--icon-color:var(--select-caret-color-error)]',
        hint: '[--input-field-hint-text-color-error:var(--select-hint-text-color-error)]',
        iconLeft: '[--icon-color:var(--select-icon-left-color-error)]',
        inputLabel: '[--input-field-label-text-color-default:var(--select-label-text-color-error)]',
        loader: 'text-select-loader-color-error',
        placeholder: 'text-select-placeholder-color-error',
        trigger: 'border-b-select-border-bottom-color-error border-l-select-border-left-color-error border-r-select-border-right-color-error border-t-select-border-top-color-error bg-select-bg-color-error text-select-text-color-error shadow-select-shadow-error ring-select-ring-color-error',
      },
    },
  },
})
