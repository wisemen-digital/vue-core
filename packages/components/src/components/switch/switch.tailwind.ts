import type { Config } from 'tailwindcss'

export const switchTailwindConfig = {
  backgroundColor: {
    'switch-bg-color-checked': 'var(--switch-bg-color-checked)',
    'switch-bg-color-default': 'var(--switch-bg-color-default)',
    'switch-bg-color-disabled': 'var(--switch-bg-color-disabled)',
    'switch-bg-color-error': 'var(--switch-bg-color-error)',
    'switch-bg-color-focus': 'var(--switch-bg-color-focus)',
    'switch-bg-color-hover': 'var(--switch-bg-color-hover)',

    'switch-indicator-bg-color-checked': 'var(--switch-indicator-bg-color-checked)',
    'switch-indicator-bg-color-default': 'var(--switch-indicator-bg-color-default)',
    'switch-indicator-bg-color-disabled': 'var(--switch-indicator-bg-color-disabled)',
    'switch-indicator-bg-color-error': 'var(--switch-indicator-bg-color-error)',
    'switch-indicator-bg-color-focus': 'var(--switch-indicator-bg-color-focus)',
    'switch-indicator-bg-color-hover': 'var(--switch-indicator-bg-color-hover)',
  },
  borderColor: {
    'switch-border-color-checked': 'var(--switch-border-color-checked)',
    'switch-border-color-default': 'var(--switch-border-color-default)',
    'switch-border-color-disabled': 'var(--switch-border-color-disabled)',
    'switch-border-color-error': 'var(--switch-border-color-error)',
    'switch-border-color-focus': 'var(--switch-border-color-focus)',
    'switch-border-color-hover': 'var(--switch-border-color-hover)',

    'switch-indicator-border-color-checked': 'var(--switch-indicator-border-color-checked)',
    'switch-indicator-border-color-default': 'var(--switch-indicator-border-color-default)',
    'switch-indicator-border-color-disabled': 'var(--switch-indicator-border-color-disabled)',
    'switch-indicator-border-color-error': 'var(--switch-indicator-border-color-error)',
    'switch-indicator-border-color-focus': 'var(--switch-indicator-border-color-focus)',
    'switch-indicator-border-color-hover': 'var(--switch-indicator-border-color-hover)',
  },
  borderRadius: {
    'switch-border-radius-default': 'var(--switch-border-radius-default)',
    'switch-indicator-border-radius-default': 'var(--switch-indicator-border-radius-default)',
  },
  borderWidth: {
    'switch-border-width-default': 'var(--switch-border-width-default)',
    'switch-indicator-border-width-default': 'var(--switch-indicator-border-width-default)',
  },
  boxShadow: {
    'switch-shadow-checked': 'var(--switch-shadow-checked)',
    'switch-shadow-default': 'var(--switch-shadow-default)',
    'switch-shadow-disabled': 'var(--switch-shadow-disabled)',
    'switch-shadow-error': 'var(--switch-shadow-error)',
    'switch-shadow-focus': 'var(--switch-shadow-focus)',
    'switch-shadow-hover': 'var(--switch-shadow-hover)',
  },
  fontSize: {
    'switch-label-font-size-default': 'var(--switch-label-font-size-default)',
  },
  fontWeight: {
    'switch-label-font-weight-default': 'var(--switch-label-font-weight-default)',
  },
  height: {
    'switch-height-default': 'var(--switch-height-default)',
  },
  padding: {
    'switch-padding-x-default': 'var(--switch-padding-x-default)',
  },
  ringColor: {
    'switch-ring-color-checked': 'var(--switch-ring-color-checked)',
    'switch-ring-color-default': 'var(--switch-ring-color-default)',
    'switch-ring-color-disabled': 'var(--switch-ring-color-disabled)',
    'switch-ring-color-error': 'var(--switch-ring-color-error)',
    'switch-ring-color-focus': 'var(--switch-ring-color-focus)',
    'switch-ring-color-hover': 'var(--switch-ring-color-hover)',
  },
  size: {
    'switch-indicator-size-default': 'var(--switch-indicator-size-default)',
  },
  spacing: {
    'switch-label-spacing-default': 'var(--switch-label-spacing-default)',
  },
  textColor: {
    'switch-label-text-color-checked': 'var(--switch-label-text-color-checked)',
    'switch-label-text-color-default': 'var(--switch-label-text-color-default)',
    'switch-label-text-color-disabled': 'var(--switch-label-text-color-disabled)',
    'switch-label-text-color-error': 'var(--switch-label-text-color-error)',
    'switch-label-text-color-focus': 'var(--switch-label-text-color-focus)',
    'switch-label-text-color-hover': 'var(--switch-label-color-hover)',
  },
  width: {
    'switch-width-default': 'var(--switch-width-default)',
  },
} satisfies Config['theme']
