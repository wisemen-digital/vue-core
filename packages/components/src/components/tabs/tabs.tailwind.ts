import type { Config } from 'tailwindcss'

export const tabsTailwindConfig = {
  backgroundColor: {
    'tabs-container-bg-color-default': 'var(--tabs-container-bg-color-default)',
    'tabs-container-border-bottom-color-default': 'var(--tabs-container-border-bottom-color-default)',
    'tabs-container-border-left-color-default': 'var(--tabs-container-border-left-color-default)',
    'tabs-container-border-radius-default': 'var(--tabs-container-border-radius-default)',
    'tabs-container-border-right-color-default': 'var(--tabs-container-border-right-color-default)',
    'tabs-container-border-top-color-default': 'var(--tabs-container-border-top-color-default)',
    'tabs-container-padding-x-default': 'var(--tabs-container-padding-x-default)',
    'tabs-container-padding-y-default': 'var(--tabs-container-padding-y-default)',

    'tabs-indicator-bg-color-default': 'var(--tabs-indicator-bg-color-default)',
    'tabs-indicator-border-left-color-default': 'var(--tabs-indicator-border-left-color-default)',
    'tabs-indicator-border-right-color-default': 'var(--tabs-indicator-border-right-color-default)',
    'tabs-indicator-border-top-color-default': 'var(--tabs-indicator-border-top-color-default)',

    'tabs-item-bg-color-active': 'var(--tabs-item-bg-color-active)',
    'tabs-item-bg-color-default': 'var(--tabs-item-bg-color-default)',
    'tabs-item-bg-color-disabled': 'var(--tabs-item-bg-color-disabled)',
    'tabs-item-bg-color-focus': 'var(--tabs-item-bg-color-focus)',
    'tabs-item-bg-color-hover': 'var(--tabs-item-bg-color-hover)',
  },
  borderColor: {
    'tabs-container-border-bottom-color-default': 'var(--tabs-container-border-bottom-color-default)',
    'tabs-container-border-left-color-default': 'var(--tabs-container-border-left-color-default)',
    'tabs-container-border-right-color-default': 'var(--tabs-container-border-right-color-default)',
    'tabs-container-border-top-color-default': 'var(--tabs-container-border-top-color-default)',

    'tabs-indicator-border-bottom-color-default': 'var(--tabs-indicator-border-bottom-color-default)',
    'tabs-indicator-border-left-color-default': 'var(--tabs-indicator-border-left-color-default)',
    'tabs-indicator-border-right-color-default': 'var(--tabs-indicator-border-right-color-default)',
    'tabs-indicator-border-top-color-default': 'var(--tabs-indicator-border-top-color-default)',
  },
  borderRadius: {
    'tabs-container-border-radius-default': 'var(--tabs-container-border-radius-default)',
    'tabs-indicator-border-radius-default': 'var(--tabs-indicator-border-radius-default)',
    'tabs-item-border-radius-default': 'var(--tabs-item-border-radius-default)',
  },
  boxShadow: {
    'tabs-indicator-shadow-default': 'var(--tabs-indicator-shadow-default)',
  },
  fontSize: {
    'tabs-item-font-size-default': 'var(--tabs-item-font-size-default)',
  },
  fontWeight: {
    'tabs-item-font-weight-default': 'var(--tabs-item-font-weight-default)',
  },
  height: {
    'tabs-indicator-height-default': 'var(--tabs-indicator-height-default)',
  },
  padding: {
    'tabs-container-padding-x-default': 'var(--tabs-container-padding-x-default)',
    'tabs-container-padding-y-default': 'var(--tabs-container-padding-y-default)',
    'tabs-item-container-padding-x-default': 'var(--tabs-item-container-padding-x-default)',
    'tabs-item-container-padding-y-default': 'var(--tabs-item-container-padding-y-default)',
    'tabs-item-padding-x-default': 'var(--tabs-item-padding-x-default)',
    'tabs-item-padding-y-default': 'var(--tabs-item-padding-y-default)',
  },
  ringColor: {
    'tabs-item-ring-color-default': 'var(--tabs-item-ring-color-default)',
  },
  textColor: {
    'tabs-item-text-color-active': 'var(--tabs-item-text-color-active)',
    'tabs-item-text-color-default': 'var(--tabs-item-text-color-default)',
    'tabs-item-text-color-disabled': 'var(--tabs-item-text-color-disabled)',
    'tabs-item-text-color-focus': 'var(--tabs-item-text-color-focus)',
    'tabs-item-text-color-hover': 'var(--tabs-item-text-color-hover)',
  },
} satisfies Config['theme']
