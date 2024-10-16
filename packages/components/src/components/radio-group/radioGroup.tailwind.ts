import type { Config } from 'tailwindcss'

export const radioGroupTailwindConfig = {
  backgroundColor: {
    'radio-group-item-bg-color-checked': 'var(--radio-group-item-bg-color-checked)',
    'radio-group-item-bg-color-default': 'var(--radio-group-item-bg-color-default)',
    'radio-group-item-bg-color-disabled': 'var(--radio-group-item-bg-color-disabled)',
    'radio-group-item-bg-color-error': 'var(--radio-group-item-bg-color-error)',
    'radio-group-item-bg-color-focus': 'var(--radio-group-item-bg-color-focus)',
    'radio-group-item-bg-color-hover': 'var(--radio-group-item-bg-color-hover)',

    'radio-group-item-indicator-bg-color-checked': 'var(--radio-group-item-indicator-bg-color-checked)',
    'radio-group-item-indicator-bg-color-default': 'var(--radio-group-item-indicator-bg-color-default)',
    'radio-group-item-indicator-bg-color-disabled': 'var(--radio-group-item-indicator-bg-color-disabled)',
    'radio-group-item-indicator-bg-color-error': 'var(--radio-group-item-indicator-bg-color-error)',
    'radio-group-item-indicator-bg-color-focus': 'var(--radio-group-item-indicator-bg-color-focus)',
    'radio-group-item-indicator-bg-color-hover': 'var(--radio-group-item-indicator-bg-color-hover)',
  },
  borderColor: {
    'radio-group-item-border-color-checked': 'var(--radio-group-item-border-color-checked)',
    'radio-group-item-border-color-default': 'var(--radio-group-item-border-color-default)',
    'radio-group-item-border-color-disabled': 'var(--radio-group-item-border-color-disabled)',
    'radio-group-item-border-color-error': 'var(--radio-group-item-border-color-error)',
    'radio-group-item-border-color-focus': 'var(--radio-group-item-border-color-focus)',
    'radio-group-item-border-color-hover': 'var(--radio-group-item-border-color-hover)',

    'radio-group-item-indicator-border-color-checked': 'var(--radio-group-item-indicator-border-color-checked)',
    'radio-group-item-indicator-border-color-default': 'var(--radio-group-item-indicator-border-color-default)',
    'radio-group-item-indicator-border-color-disabled': 'var(--radio-group-item-indicator-border-color-disabled)',
    'radio-group-item-indicator-border-color-error': 'var(--radio-group-item-indicator-border-color-error)',
    'radio-group-item-indicator-border-color-focus': 'var(--radio-group-item-indicator-border-color-focus)',
    'radio-group-item-indicator-border-color-hover': 'var(--radio-group-item-indicator-border-color-hover)',
  },
  borderRadius: {
    'radio-group-item-border-radius-default': 'var(--radio-group-item-border-radius-default)',
    'radio-group-item-indicator-border-radius-default': 'var(--radio-group-item-indicator-border-radius-default)',
  },
  borderWidth: {
    'radio-group-item-border-width-default': 'var(--radio-group-item-border-width-default)',
  },
  boxShadow: {
    'radio-group-item-shadow-checked': 'var(--radio-group-item-shadow-checked)',
    'radio-group-item-shadow-default': 'var(--radio-group-item-shadow-default)',
    'radio-group-item-shadow-disabled': 'var(--radio-group-item-shadow-disabled)',
    'radio-group-item-shadow-error': 'var(--radio-group-item-shadow-error)',
    'radio-group-item-shadow-focus': 'var(--radio-group-item-shadow-focus)',
    'radio-group-item-shadow-hover': 'var(--radio-group-item-shadow-hover)',
  },
  fontSize: {
    'radio-group-item-label-font-size-default': 'var(--radio-group-item-label-font-size-default)',
  },
  fontWeight: {
    'radio-group-item-label-font-weight-default': 'var(--radio-group-item-label-font-weight-default)',
  },
  ringColor: {
    'radio-group-item-ring-color-checked': 'var(--radio-group-item-ring-color-checked)',
    'radio-group-item-ring-color-default': 'var(--radio-group-item-ring-color-default)',
    'radio-group-item-ring-color-disabled': 'var(--radio-group-item-ring-color-disabled)',
    'radio-group-item-ring-color-error': 'var(--radio-group-item-ring-color-error)',
    'radio-group-item-ring-color-focus': 'var(--radio-group-item-ring-color-focus)',
    'radio-group-item-ring-color-hover': 'var(--radio-group-item-ring-color-hover)',
  },
  size: {
    'radio-group-item-indicator-size-checked': 'var(--radio-group-item-indicator-size-checked)',
    'radio-group-item-indicator-size-default': 'var(--radio-group-item-indicator-size-default)',
    'radio-group-item-indicator-size-disabled': 'var(--radio-group-item-indicator-size-disabled)',
    'radio-group-item-indicator-size-error': 'var(--radio-group-item-indicator-size-error)',
    'radio-group-item-indicator-size-focus': 'var(--radio-group-item-indicator-size-focus)',
    'radio-group-item-indicator-size-hover': 'var(--radio-group-item-indicator-size-hover)',

    'radio-group-item-size-default': 'var(--radio-group-item-size-default)',
  },
  spacing: {
    'radio-group-item-label-spacing-default': 'var(--radio-group-item-label-spacing-default)',
  },
  textColor: {
    'radio-group-item-label-text-color-checked': 'var(--radio-group-item-label-text-color-checked)',
    'radio-group-item-label-text-color-default': 'var(--radio-group-item-label-text-color-default)',
    'radio-group-item-label-text-color-disabled': 'var(--radio-group-item-label-text-color-disabled)',
    'radio-group-item-label-text-color-error': 'var(--radio-group-item-label-text-color-error)',
    'radio-group-item-label-text-color-focus': 'var(--radio-group-item-label-text-color-focus)',
    'radio-group-item-label-text-color-hover': 'var(--radio-group-item-label-color-hover)',
  },
} satisfies Config['theme']
