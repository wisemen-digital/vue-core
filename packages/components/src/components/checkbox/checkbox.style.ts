import { tv } from '@/libs/twVariants.lib'

export const checkboxStyle = tv({
  defaultVariants: {},
  slots: {
    bottom: 'ml-[--checkbox-bottom-spacing-left-calculated] [--checkbox-bottom-spacing-left-calculated:var(--checkbox-bottom-spacing-left-default,calc(var(--checkbox-label-spacing-default)+var(--checkbox-size-default)))]',
    box: 'flex flex-row items-center gap-x-checkbox-label-spacing-default [--input-field-label-spacing-default:0px]',
    error: '[--input-field-error-font-size-default:var(--checkbox-error-font-size-default)] [--input-field-error-spacing-default:var(--checkbox-error-spacing-default)] [--input-field-error-text-color-default:var(--checkbox-error-text-color-default)]',
    hint: '[--input-field-hint-font-size-default:var(--checkbox-hint-font-size-default)] [--input-field-hint-font-weight-default:var(--checkbox-hint-font-weight-default)]  [--input-field-hint-spacing-default:var(--checkbox-hint-spacing-default)] [--input-field-hint-text-color-default:var(--checkbox-hint-text-color-default)]',
    indicator: 'flex-none [--icon-size:var(--checkbox-indicator-size-default)]',
    inputLabel: '[--input-field-label-font-size-default:var(--checkbox-label-font-size-default)] [--input-field-label-font-weight-default:var(--checkbox-label-font-weight-default)] [--input-field-label-spacing-default:0px] [--input-field-label-text-color-default:var(--checkbox-label-text-color-default)]',
    root: 'flex size-checkbox-size-default flex-none items-center justify-center rounded-checkbox-border-radius-default border-checkbox-border-width-default border-solid border-checkbox-border-color-default bg-checkbox-bg-color-default shadow-checkbox-shadow-default outline-none ring-offset-1 duration-200 focus-visible:ring-2',
  },
  variants: {
    isFocused: {
      true: {
        hint: '[--input-field-hint-text-color-default:var(--checkbox-hint-text-color-focus)]',
        indicator: '[--icon-color:var(--checkbox-indicator-color-focused)]',
        inputLabel: '[--input-field-label-text-color-default:var(--checkbox-label-text-color-focus)]',
        root: 'border-checkbox-border-color-focus bg-checkbox-bg-color-focus shadow-checkbox-shadow-focus ring-checkbox-ring-color-focus',
      },
    },
    isHovered: {
      true: {
        hint: '[--input-field-hint-text-color-default:var(--checkbox-hint-text-color-hover)]',
        indicator: '[--icon-color:var(--checkbox-indicator-color-hovered)]',
        inputLabel: '[--input-field-label-text-color-default:var(--checkbox-label-text-color-hover)]',
        root: 'border-checkbox-border-color-hover bg-checkbox-bg-color-hover shadow-checkbox-shadow-hover ring-checkbox-ring-color-hover',
      },
    },
    isChecked: {
      true: {
        hint: '[--input-field-hint-text-color-default:var(--checkbox-hint-text-color-checked)]',
        indicator: '[--icon-color:var(--checkbox-indicator-color-checked)]',
        inputLabel: '[--input-field-label-text-color-default:var(--checkbox-label-text-color-checked)]',
        root: 'border-checkbox-border-color-checked bg-checkbox-bg-color-checked shadow-checkbox-shadow-checked ring-checkbox-ring-color-checked',
      },
    },
    isIndeterminate: {
      true: {
        hint: '[--input-field-hint-text-color-default:var(--checkbox-hint-text-color-indeterminate)]',
        indicator: '[--icon-color:var(--checkbox-indicator-color-indeterminate)]',
        inputLabel: '[--input-field-label-text-color-default:var(--checkbox-label-text-color-indeterminate)]',
        root: 'border-checkbox-border-color-indeterminate bg-checkbox-bg-color-indeterminate shadow-checkbox-shadow-indeterminate ring-checkbox-ring-color-indeterminate',
      },
    },
    hasError: {
      true: {
        hint: '[--input-field-hint-text-color-default:var(--checkbox-hint-text-color-error)]',
        indicator: '[--icon-color:var(--checkbox-indicator-color-error)]',
        inputLabel: '[--input-field-label-text-color-default:var(--checkbox-label-text-color-error)]',
        root: 'border-checkbox-border-color-error bg-checkbox-bg-color-error shadow-checkbox-shadow-error ring-checkbox-ring-color-error',
      },
    },
    isDisabled: {
      true: {
        hint: '[--input-field-hint-text-color-disabled:var(--checkbox-hint-text-color-disabled)]',
        indicator: '[--icon-color:var(--checkbox-indicator-color-disabled)]',
        inputLabel: '[--input-field-label-text-color-default:var(--checkbox-label-text-color-disabled)]',
        root: 'cursor-not-allowed border-checkbox-border-color-disabled bg-checkbox-bg-color-disabled shadow-checkbox-shadow-disabled ring-checkbox-ring-color-disabled',
      },
    },
  },
})
