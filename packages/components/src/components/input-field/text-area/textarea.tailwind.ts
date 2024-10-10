import type { Config } from 'tailwindcss'

export const textareaTailwindConfig = {
  backgroundColor: {
    'textarea-bg-color-default': 'var(--textarea-bg-color-default)',
    'textarea-bg-color-disabled': 'var(--textarea-bg-color-disabled)',
    'textarea-bg-color-error': 'var(--textarea-bg-color-error)',
    'textarea-bg-color-focus': 'var(--textarea-bg-color-focus)',
    'textarea-bg-color-hover': 'var(--textarea-bg-color-hover)',
  },
  borderColor: {
    'textarea-border-bottom-color-default': 'var(--textarea-border-bottom-color-default)',
    'textarea-border-bottom-color-disabled': 'var(--textarea-border-bottom-color-disabled)',
    'textarea-border-bottom-color-error': 'var(--textarea-border-bottom-color-error)',
    'textarea-border-bottom-color-focus': 'var(--textarea-border-bottom-color-focus)',
    'textarea-border-bottom-color-hover': 'var(--textarea-border-bottom-color-hover)',
    'textarea-border-left-color-default': 'var(--textarea-border-left-color-default)',
    'textarea-border-left-color-disabled': 'var(--textarea-border-left-color-disabled)',
    'textarea-border-left-color-error': 'var(--textarea-border-left-color-error)',
    'textarea-border-left-color-focus': 'var(--textarea-border-left-color-focus)',
    'textarea-border-left-color-hover': 'var(--textarea-border-left-color-hover)',
    'textarea-border-radius-bottom-left-default': 'var(--textarea-border-radius-bottom-left-default)',
    'textarea-border-radius-bottom-right-default': 'var(--textarea-border-radius-bottom-right-default)',
    'textarea-border-radius-top-left-default': 'var(--textarea-border-radius-top-left-default)',
    'textarea-border-radius-top-right-default': 'var(--textarea-border-radius-top-right-default)',
    'textarea-border-right-color-default': 'var(--textarea-border-right-color-default)',
    'textarea-border-right-color-disabled': 'var(--textarea-border-right-color-disabled)',
    'textarea-border-right-color-error': 'var(--textarea-border-right-color-error)',
    'textarea-border-right-color-focus': 'var(--textarea-border-right-color-focus)',
    'textarea-border-right-color-hover': 'var(--textarea-border-right-color-hover)',
    'textarea-border-top-color-default': 'var(--textarea-border-top-color-default)',
    'textarea-border-top-color-disabled': 'var(--textarea-border-top-color-disabled)',
    'textarea-border-top-color-error': 'var(--textarea-border-top-color-error)',
    'textarea-border-top-color-focus': 'var(--textarea-border-top-color-focus)',
    'textarea-border-top-color-hover': 'var(--textarea-border-top-color-hover)',
  },
  borderRadius: {
    'textarea-border-radius-bottom-left-default': 'var(--textarea-border-radius-bottom-left-default)',
    'textarea-border-radius-bottom-right-default': 'var(--textarea-border-radius-bottom-right-default)',
    'textarea-border-radius-top-left-default': 'var(--textarea-border-radius-top-left-default)',
    'textarea-border-radius-top-right-default': 'var(--textarea-border-radius-top-right-default)',
  },
  boxShadow: {
    'textarea-shadow-default': 'var(--textarea-shadow-default)',
    'textarea-shadow-disabled': 'var(--textarea-shadow-disabled)',
    'textarea-shadow-error': 'var(--textarea-shadow-error)',
    'textarea-shadow-focus': 'var(--textarea-shadow-focus)',
    'textarea-shadow-hover': 'var(--textarea-shadow-hover)',
  },
  fontSize: {
    'textarea-font-size-default': 'var(--textarea-font-size-default)',
  },
  fontWeight: {
    'textarea-font-weight-default': 'var(--textarea-font-weight-default)',
  },
  lineHeight: {
    'textarea-line-height-default': 'var(--textarea-line-height-default)',
  },
  maxHeight: {
    'textarea-max-height-default': 'var(--textarea-max-height-default)',
  },
  minHeight: {
    'textarea-min-height-default': 'var(--textarea-min-height-default)',
  },
  padding: {
    'textarea-padding-x-default': 'var(--textarea-padding-x-default)',
    'textarea-padding-y-default': 'var(--textarea-padding-y-default)',
  },
  ringColor: {
    'textarea-ring-color-error': 'var(--textarea-ring-color-error)',
    'textarea-ring-color-focus': 'var(--textarea-ring-color-focus)',
  },
  ringOffsetColor: {
    'textarea-ring-offset-color-focus': 'var(--textarea-ring-offset-color-focus)',
  },
  textColor: {
    'textarea-placeholder-color-default': 'var(--textarea-placeholder-color-default)',
    'textarea-placeholder-color-disabled': 'var(--textarea-placeholder-color-disabled)',
    'textarea-placeholder-color-error': 'var(--textarea-placeholder-color-error)',
    'textarea-placeholder-color-focus': 'var(--textarea-placeholder-color-focus)',
    'textarea-placeholder-color-hover': 'var(--textarea-placeholder-color-hover)',
    'textarea-text-color-default': 'var(--textarea-text-color-default)',
    'textarea-text-color-disabled': 'var(--textarea-text-color-disabled)',
    'textarea-text-color-error': 'var(--textarea-text-color-error)',
    'textarea-text-color-focus': 'var(--textarea-text-color-focus)',
    'textarea-text-color-hover': 'var(--textarea-text-color-hover)',
  },
} satisfies Config['theme']
