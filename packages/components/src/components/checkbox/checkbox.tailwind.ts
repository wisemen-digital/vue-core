import type { Config } from 'tailwindcss'

export const checkboxTailwindConfig = {
  backgroundColor: {
    'checkbox-bg-color-checked': 'var(--checkbox-bg-color-checked)',
    'checkbox-bg-color-default': 'var(--checkbox-bg-color-default)',
    'checkbox-bg-color-disabled': 'var(--checkbox-bg-color-disabled)',
    'checkbox-bg-color-error': 'var(--checkbox-bg-color-error)',
    'checkbox-bg-color-focus': 'var(--checkbox-bg-color-focus)',
    'checkbox-bg-color-hover': 'var(--checkbox-bg-color-hover)',
    'checkbox-bg-color-indeterminate': 'var(--checkbox-bg-color-indeterminate)',
  },
  borderColor: {
    'checkbox-border-color-checked': 'var(--checkbox-border-color-checked)',
    'checkbox-border-color-default': 'var(--checkbox-border-color-default)',
    'checkbox-border-color-disabled': 'var(--checkbox-border-color-disabled)',
    'checkbox-border-color-error': 'var(--checkbox-border-color-error)',
    'checkbox-border-color-focus': 'var(--checkbox-border-color-focus)',
    'checkbox-border-color-hover': 'var(--checkbox-border-color-hover)',
    'checkbox-border-color-indeterminate': 'var(--checkbox-border-color-indeterminate)',
  },
  borderRadius: {
    'checkbox-border-radius-default': 'var(--checkbox-border-radius-default)',
  },
  borderWidth: {
    'checkbox-border-width-default': 'var(--checkbox-border-width-default)',
  },
  boxShadow: {
    'checkbox-shadow-checked': 'var(--checkbox-shadow-checked)',
    'checkbox-shadow-default': 'var(--checkbox-shadow-default)',
    'checkbox-shadow-disabled': 'var(--checkbox-shadow-disabled)',
    'checkbox-shadow-error': 'var(--checkbox-shadow-error)',
    'checkbox-shadow-focus': 'var(--checkbox-shadow-focus)',
    'checkbox-shadow-hover': 'var(--checkbox-shadow-hover)',
    'checkbox-shadow-indeterminate': 'var(--checkbox-shadow-indeterminate)',
  },
  fontSize: {
    'checkbox-label-font-size-default': 'var(--checkbox-label-font-size-default)',
  },
  fontWeight: {
    'checkbox-label-font-weight-default': 'var(--checkbox-label-font-weight-default)',
  },
  ringColor: {
    'checkbox-ring-color-checked': 'var(--checkbox-ring-color-checked)',
    'checkbox-ring-color-default': 'var(--checkbox-ring-color-default)',
    'checkbox-ring-color-disabled': 'var(--checkbox-ring-color-disabled)',
    'checkbox-ring-color-error': 'var(--checkbox-ring-color-error)',
    'checkbox-ring-color-focus': 'var(--checkbox-ring-color-focus)',
    'checkbox-ring-color-hover': 'var(--checkbox-ring-color-hover)',
    'checkbox-ring-color-indeterminate': 'var(--checkbox-ring-color-indeterminate)',
  },
  size: {
    'checkbox-indicator-size-default': 'var(--checkbox-indicator-size-default)',
    'checkbox-size-default': 'var(--checkbox-size-default)',
  },
  spacing: {
    'checkbox-label-spacing-default': 'var(--checkbox-label-spacing-default)',
  },
  textColor: {
    'checkbox-indicator-color-checked': 'var(--checkbox-indicator-color-checked)',
    'checkbox-indicator-color-default': 'var(--checkbox-indicator-color-default)',
    'checkbox-indicator-color-disabled': 'var(--checkbox-indicator-color-disabled)',
    'checkbox-indicator-color-error': 'var(--checkbox-indicator-color-error)',
    'checkbox-indicator-color-focus': 'var(--checkbox-indicator-color-focus)',
    'checkbox-indicator-color-hover': 'var(--checkbox-indicator-color-hover)',
    'checkbox-indicator-color-indeterminate': 'var(--checkbox-indicator-color-indeterminate)',

    'checkbox-label-text-color-checked': 'var(--checkbox-label-text-color-checked)',
    'checkbox-label-text-color-default': 'var(--checkbox-label-text-color-default)',
    'checkbox-label-text-color-disabled': 'var(--checkbox-label-text-color-disabled)',
    'checkbox-label-text-color-error': 'var(--checkbox-label-text-color-error)',
    'checkbox-label-text-color-focus': 'var(--checkbox-label-text-color-focus)',
    'checkbox-label-text-color-hover': 'var(--checkbox-label-color-hover)',
    'checkbox-label-text-color-indeterminate': 'var(--checkbox-label-text-color-indeterminate)',
  },
} satisfies Config['theme']
