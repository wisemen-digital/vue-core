import { tv } from '@/libs/twVariants.lib'

export const switchStyle = tv({
  slots: {
    bottom: 'ml-[--switch-bottom-spacing-left-calculated] [--switch-bottom-spacing-left-calculated:var(--switch-bottom-spacing-left-default,calc(var(--switch-label-spacing-default)+var(--switch-width-default)))]',
    box: 'flex flex-row items-center gap-x-switch-label-spacing-default [--input-field-label-spacing-default:0px]',
    error: '[--input-field-error-font-size-default:var(--switch-error-font-size-default)] [--input-field-error-spacing-default:var(--switch-error-spacing-default)] [--input-field-error-text-color-default:var(--switch-error-text-color-default)]',
    hint: '[--input-field-hint-font-size-default:var(--switch-hint-font-size-default)] [--input-field-hint-font-weight-default:var(--switch-hint-font-weight-default)]  [--input-field-hint-spacing-default:var(--switch-hint-spacing-default)] [--input-field-hint-text-color-default:var(--switch-hint-text-color-default)]',
    indicator: 'size-switch-indicator-size-default flex-none rounded-switch-indicator-border-radius-default border-switch-indicator-border-width-default border-solid border-switch-indicator-border-color-default bg-switch-indicator-bg-color-default shadow-switch-indicator-shadow-default duration-300 ease-switch data-[state=checked]:translate-x-[calc(var(--switch-width-default)-(var(--switch-padding-x-default)*2)-var(--switch-indicator-size-default)-(var(--switch-indicator-border-width-default)*2))]',
    inputLabel: '[--input-field-label-font-size-default:var(--switch-label-font-size-default)] [--input-field-label-font-weight-default:var(--switch-label-font-weight-default)] [--input-field-label-text-color-default:var(--switch-label-text-color-default)]',
    root: 'flex h-switch-height-default w-switch-width-default flex-none items-center rounded-switch-border-radius-default  border-switch-border-width-default border-solid border-switch-border-color-default bg-switch-bg-color-default px-switch-padding-x-default shadow-switch-shadow-default outline-none ring-offset-1 duration-200 focus-visible:ring-2',
  },
  variants: {
    isFocused: {
      true: {
        hint: '[--input-field-hint-text-color-default:var(--switch-hint-text-color-focus)]',
        indicator: 'border-switch-indicator-border-color-focus bg-switch-indicator-bg-color-focus shadow-switch-indicator-shadow-focus',
        inputLabel: '[--input-field-label-text-color-default:var(--switch-label-text-color-focus)]',
        root: 'border-switch-border-color-focus bg-switch-bg-color-focus shadow-switch-shadow-focus ring-switch-ring-color-focus',
      },
    },
    isHovered: {
      true: {
        hint: '[--input-field-hint-text-color-default:var(--switch-hint-text-color-hover)]',
        indicator: 'border-switch-indicator-border-color-hover bg-switch-indicator-bg-color-hover shadow-switch-indicator-shadow-hover',
        inputLabel: '[--input-field-label-text-color-default:var(--switch-label-text-color-hover)]',
        root: 'border-switch-border-color-hover bg-switch-bg-color-hover shadow-switch-shadow-hover ring-switch-ring-color-hover',
      },
    },
    isChecked: {
      true: {
        hint: '[--input-field-hint-text-color-default:var(--switch-hint-text-color-checked)]',
        indicator: 'border-switch-indicator-border-color-checked bg-switch-indicator-bg-color-checked shadow-switch-indicator-shadow-checked',
        inputLabel: '[--input-field-label-text-color-default:var(--switch-label-text-color-checked)]',
        root: 'border-switch-border-color-checked bg-switch-bg-color-checked shadow-switch-shadow-checked ring-switch-ring-color-checked',
      },
    },
    hasError: {
      true: {
        hint: '[--input-field-hint-text-color-default:var(--switch-hint-text-color-error)]',
        indicator: 'border-switch-indicator-border-color-error bg-switch-indicator-bg-color-error shadow-switch-indicator-shadow-error',
        inputLabel: '[--input-field-label-text-color-default:var(--switch-label-text-color-error)]',
        root: 'border-switch-border-color-error bg-switch-bg-color-error shadow-switch-shadow-error ring-switch-ring-color-error',
      },
    },
    isDisabled: {
      true: {
        hint: '[--input-field-hint-text-color-disabled:var(--switch-hint-text-color-disabled)]',
        indicator: 'border-switch-indicator-border-color-disabled bg-switch-indicator-bg-color-disabled shadow-switch-indicator-shadow-disabled',
        inputLabel: '[--input-field-label-text-color-default:var(--switch-label-text-color-disabled)]',
        root: 'cursor-not-allowed border-switch-border-color-disabled bg-switch-bg-color-disabled shadow-switch-shadow-disabled ring-switch-ring-color-disabled',
      },
    },
  },
})
