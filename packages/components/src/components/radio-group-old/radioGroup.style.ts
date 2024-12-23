import { tv } from '@/libs/twVariants.lib'

export const radioGroupStyle = tv({
  defaultVariants: {},
  slots: {
    bottom: 'ml-[--radio-group-item-bottom-spacing-left-calculated] [--radio-group-item-bottom-spacing-left-calculated:var(--radio-group-item-bottom-spacing-left-default,calc(var(--radio-group-item-label-spacing-default)+var(--radio-group-item-size-default)))]',
    box: 'flex flex-row items-center gap-x-radio-group-item-label-spacing-default',
    error: '[--input-field-error-font-size-default:var(--radio-group-error-font-size-default)] [--input-field-error-spacing-default:var(--radio-group-error-spacing-default)] [--input-field-error-text-color-default:var(--radio-group-error-text-color-default)]',
    hint: '[--input-field-hint-font-size-default:var(--radio-group-hint-font-size-default)] [--input-field-hint-font-weight-default:var(--radio-group-hint-font-weight-default)]  [--input-field-hint-spacing-default:var(--radio-group-hint-spacing-default)] [--input-field-hint-text-color-default:var(--radio-group-hint-text-color-default)]',
    indicator: 'size-radio-group-item-indicator-size-default flex-none rounded-radio-group-item-indicator-border-radius-default border-radio-group-item-indicator-border-color-default bg-radio-group-item-indicator-bg-color-default duration-200',
    indicatorRoot: 'flex size-radio-group-item-size-default flex-none items-center justify-center rounded-radio-group-item-border-radius-default border-radio-group-item-border-width-default border-solid border-radio-group-item-border-color-default bg-radio-group-item-bg-color-default shadow-radio-group-item-shadow-default outline-none ring-offset-1 duration-200 focus-visible:ring-2',
    inputLabel: '[--input-field-label-font-size-default:var(--radio-group-label-font-size-default)] [--input-field-label-font-weight-default:var(--radio-group-label-font-weight-default)] [--input-field-label-spacing-default:0px] [--input-field-label-text-color-default:var(--radio-group-label-text-color-default)]',
    item: 'rounded-radio-group-item-border-radius-default outline-none ring-offset-1 duration-200 focus-visible:ring-2',
    itemHint: '[--input-field-hint-font-size-default:var(--radio-group-item-hint-font-size-default)] [--input-field-hint-font-weight-default:var(--radio-group-item-hint-font-weight-default)]  [--input-field-hint-spacing-default:var(--radio-group-item-hint-spacing-default)] [--input-field-hint-text-color-default:var(--radio-group-item-hint-text-color-default)]',
    itemLabel: '[--input-field-label-font-size-default:var(--radio-group-item-label-font-size-default)] [--input-field-label-font-weight-default:var(--radio-group-item-label-font-weight-default)] [--input-field-label-text-color-default:var(--radio-group-item-label-text-color-default)]',
  },
  variants: {
    isFocused: {
      true: {
        indicator: 'size-radio-group-item-indicator-size-focus border-radio-group-item-indicator-border-color-focus bg-radio-group-item-indicator-bg-color-focus',
        indicatorRoot: 'border-radio-group-item-border-color-focus bg-radio-group-item-bg-color-focus shadow-radio-group-item-shadow-focus ring-radio-group-item-ring-color-focus',
        inputLabel: '[--input-field-label-text-color-default:var(--radio-group-item-label-text-color-focus)]',
        item: 'ring-radio-group-item-ring-color-focus',
        itemHint: '[--input-field-hint-text-color-default:var(--radio-group-item-hint-text-color-focus)]',
      },
    },
    isHovered: {
      true: {
        indicator: 'size-radio-group-item-indicator-size-hover border-radio-group-item-indicator-border-color-hover bg-radio-group-item-indicator-bg-color-hover',
        indicatorRoot: 'border-radio-group-item-border-color-hover bg-radio-group-item-bg-color-hover shadow-radio-group-item-shadow-hover ring-radio-group-item-ring-color-hover',
        inputLabel: '[--input-field-label-text-color-default:var(--radio-group-item-label-text-color-hover)]',
        item: 'ring-radio-group-item-ring-color-hover',
        itemHint: '[--input-field-hint-text-color-default:var(--radio-group-item-hint-text-color-hover)]',
      },
    },

    isChecked: {
      true: {
        // TODO:  this only works with important dont ask me why
        indicator: '!size-radio-group-item-indicator-size-checked border-radio-group-item-indicator-border-color-checked bg-radio-group-item-indicator-bg-color-checked',
        indicatorRoot: 'border-radio-group-item-border-color-checked bg-radio-group-item-bg-color-checked shadow-radio-group-item-shadow-checked ring-radio-group-item-ring-color-checked',
        inputLabel: '[--input-field-label-text-color-default:var(--radio-group-item-label-text-color-checked)]',
        item: 'ring-radio-group-item-ring-color-checked',
        itemHint: '[--input-field-hint-text-color-default:var(--radio-group-item-hint-text-color-checked)]',
      },
    },
    hasError: {
      true: {
        indicator: 'size-radio-group-item-indicator-size-error border-radio-group-item-indicator-border-color-error bg-radio-group-item-indicator-bg-color-error',
        indicatorRoot: 'border-radio-group-item-border-color-error bg-radio-group-item-bg-color-error shadow-radio-group-item-shadow-error ring-radio-group-item-ring-color-error',
        inputLabel: '[--input-field-label-text-color-default:var(--radio-group-item-label-text-color-error)]',
        item: 'ring-radio-group-item-ring-color-error',
        itemHint: '[--input-field-hint-text-color-default:var(--radio-group-item-hint-text-color-error)]',
      },
    },
    isDisabled: {
      true: {
        indicator: 'size-radio-group-item-indicator-size-disabled border-radio-group-item-indicator-border-color-disabled bg-radio-group-item-indicator-bg-color-disabled',
        indicatorRoot: 'cursor-not-allowed border-radio-group-item-border-color-disabled bg-radio-group-item-bg-color-disabled shadow-radio-group-item-shadow-disabled ring-radio-group-item-ring-color-disabled',
        inputLabel: '[--input-field-label-text-color-default:var(--radio-group-item-label-text-color-disabled)]',
        item: 'ring-radio-group-item-ring-color-disabled',
        itemHint: '[--input-field-hint-text-color-disabled:var(--radio-group-item-hint-text-color-disabled)]',
      },
    },
  },
})
