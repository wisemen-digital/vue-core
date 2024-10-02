import type { Config } from 'tailwindcss'

export const selectTailwindConfig = {
  backgroundColor: {
    'select-bg-color-default': 'var(--select-bg-color-default)',
    'select-bg-color-disabled': 'var(--select-bg-color-disabled)',
    'select-bg-color-error': 'var(--select-bg-color-error)',
    'select-bg-color-focus': 'var(--select-bg-color-focus)',
    'select-bg-color-hover': 'var(--select-bg-color-hover)',

    'select-dropdown-bg-color-default': 'var(--select-dropdown-bg-color-default)',

    'select-item-bg-color-default': 'var(--select-item-bg-color-default)',
    'select-item-bg-color-disabled': 'var(--select-item-bg-color-disabled)',
    'select-item-bg-color-highlighted': 'var(--select-item-bg-color-highlighted)',
    'select-item-bg-color-hover': 'var(--select-item-bg-color-hover)',
    'select-item-bg-color-selected': 'var(--select-item-bg-color-selected)',

    'select-item-separator-color-default': 'var(--select-item-separator-color-default)',
  },
  borderColor: {
    'select-border-bottom-color-default': 'var(--select-border-bottom-color-default)',
    'select-border-bottom-color-disabled': 'var(--select-border-bottom-color-disabled)',
    'select-border-bottom-color-error': 'var(--select-border-bottom-color-error)',
    'select-border-bottom-color-focus': 'var(--select-border-bottom-color-focus)',

    'select-border-bottom-color-hover': 'var(--select-border-bottom-color-hover)',
    'select-border-left-color-default': 'var(--select-border-left-color-default)',
    'select-border-left-color-disabled': 'var(--select-border-left-color-disabled)',
    'select-border-left-color-error': 'var(--select-border-left-color-error)',

    'select-border-left-color-focus': 'var(--select-border-left-color-focus)',
    'select-border-left-color-hover': 'var(--select-border-left-color-hover)',
    'select-border-right-color-default': 'var(--select-border-right-color-default)',
    'select-border-right-color-disabled': 'var(--select-border-right-color-disabled)',

    'select-border-right-color-error': 'var(--select-border-right-color-error)',
    'select-border-right-color-focus': 'var(--select-border-right-color-focus)',
    'select-border-right-color-hover': 'var(--select-border-right-color-hover)',
    'select-border-top-color-default': 'var(--select-border-top-color-default)',

    'select-border-top-color-disabled': 'var(--select-border-top-color-disabled)',
    'select-border-top-color-error': 'var(--select-border-top-color-error)',
    'select-border-top-color-focus': 'var(--select-border-top-color-focus)',
    'select-border-top-color-hover': 'var(--select-border-top-color-hover)',

    'select-dropdown-border-color-default': 'var(--select-dropdown-border-color-default)',
  },
  borderRadius: {
    'select-border-radius-bottom-left-default': 'var(--select-border-radius-bottom-left-default)',
    'select-border-radius-bottom-right-default': 'var(--select-border-radius-bottom-right-default)',
    'select-border-radius-top-left-default': 'var(--select-border-radius-top-left-default)',
    'select-border-radius-top-right-default': 'var(--select-border-radius-top-right-default)',

    'select-dropdown-border-radius-default': 'var(--select-dropdown-border-radius-default)',

    'select-item-border-radius-default': 'var(--select-item-border-radius-default)',
  },
  boxShadow: {
    'select-dropdown-shadow-default': 'var(--select-dropdown-shadow-default)',

    'select-shadow-default': 'var(--select-shadow-default)',
    'select-shadow-disabled': 'var(--select-shadow-disabled)',
    'select-shadow-error': 'var(--select-shadow-error)',
    'select-shadow-focus': 'var(--select-shadow-focus)',
    'select-shadow-hover': 'var(--select-shadow-hover)',
  },
  fontSize: {
    'select-error-font-size-default': 'var(--select-error-font-size-default)',
    'select-font-size-default': 'var(--select-font-size-default)',
    'select-group-label-font-size-default': 'var(--select-group-label-font-size-default)',
    'select-hint-font-size-default': 'var(--select-hint-font-size-default)',
    'select-item-font-size-default': 'var(--select-item-font-size-default)',
    'select-label-font-size-default': 'var(--select-label-font-size-default)',
  },
  fontWeight: {
    'select-error-font-weight-default': 'var(--select-error-font-weight-default)',
    'select-font-weight-default': 'var(--select-font-weight-default)',
    'select-group-label-font-weight-default': 'var(--select-group-label-font-weight-default)',
    'select-hint-font-weight-default': 'var(--select-hint-font-weight-default)',
    'select-item-font-weight-default': 'var(--select-item-font-weight-default)',
    'select-label-font-weight-default': 'var(--select-label-font-weight-default)',
  },
  height: {
    'select-caret-size-default': 'var(--select-caret-size-default)',
    'select-height-default': 'var(--select-height-default)',
    'select-icon-left-size-default': 'var(--select-icon-left-size-default)',
    'select-item-indicator-size-default': 'var(--select-item-indicator-size-default)',
    'select-item-separator-size-default': 'var(--select-item-separator-size-default)',
    'select-loader-size-default': 'var(--select-loader-size-default)',
  },
  margin: {
    'select-caret-spacing-default': 'var(--select-caret-spacing-default)',
    'select-error-spacing-default': 'var(--select-error-spacing-default)',
    'select-hint-spacing-default': 'var(--select-hint-spacing-default)',
    'select-icon-left-spacing-default': 'var(--select-icon-left-spacing-default)',
    'select-item-seperator-spacing-y-default': 'var(--select-item-seperator-spacing-y-default)',
    'select-label-spacing-default': 'var(--select-label-spacing-default)',
    'select-padding-left-default': 'var(--select-padding-left-default)',
    'select-padding-right-default': 'var(--select-padding-right-default)',
  },
  maxHeight: {
    'select-dropdown-max-height-default': 'var(--select-dropdown-max-height-default)',
  },
  maxWidth: {
    'select-dropdown-max-width-default': 'var(--select-dropdown-max-width-default)',
  },
  padding: {
    'select-dropdown-padding-x-default': 'var(--select-dropdown-padding-x-default)',
    'select-dropdown-padding-y-default': 'var(--select-dropdown-padding-y-default)',

    'select-group-label-spacing-bottom-default': 'var(--select-group-label-spacing-bottom-default)',
    'select-group-label-spacing-top-default': 'var(--select-group-label-spacing-top-default)',

    'select-group-label-spacing-x-default': 'var(--select-group-label-spacing-x-default)',
    'select-group-padding-x-default': 'var(--select-group-padding-x-default)',

    'select-group-padding-y-default': 'var(--select-group-padding-y-default)',

    'select-item-padding-x-default': 'var(--select-item-padding-x-default)',
    'select-item-padding-y-default': 'var(--select-item-padding-y-default)',

    'select-padding-left-default': 'var(--select-padding-left-default)',
    'select-padding-right-default': 'var(--select-padding-right-default)',

    'select-padding-x-default': 'var(--select-padding-x-default)',
    'select-padding-y-default': 'var(--select-padding-y-default)',
  },
  ringColor: {
    'select-ring-color-error': 'var(--select-ring-color-error)',
    'select-ring-color-focus': 'var(--select-ring-color-focus)',
  },
  textColor: {
    'select-error-text-color-default': 'var(--select-error-text-color-default)',

    'select-group-label-text-color-default': 'var(--select-group-label-text-color-default)',
    'select-hint-text-color-default': 'var(--select-hint-text-color-default)',
    'select-hint-text-color-disabled': 'var(--select-hint-text-color-disabled)',
    'select-hint-text-color-error': 'var(--select-hint-text-color-error)',
    'select-hint-text-color-focus': 'var(--select-hint-text-color-focus)',

    'select-hint-text-color-hover': 'var(--select-hint-text-color-hover)',

    'select-item-indicator-color-default': 'var(--select-item-indicator-color-default)',

    'select-item-text-color-default': 'var(--select-item-text-color-default)',
    'select-item-text-color-disabled': 'var(--select-item-text-color-disabled)',
    'select-item-text-color-highlighted': 'var(--select-item-text-color-highlighted)',
    'select-item-text-color-hover': 'var(--select-item-text-color-hover)',
    'select-item-text-color-selected': 'var(--select-item-text-color-selected)',

    'select-label-text-color-default': 'var(--select-label-text-color-default)',
    'select-label-text-color-disabled': 'var(--select-label-text-color-disabled)',
    'select-label-text-color-error': 'var(--select-label-text-color-error)',
    'select-label-text-color-focus': 'var(--select-label-text-color-focus)',

    'select-label-text-color-hover': 'var(--select-label-text-color-hover)',

    'select-loader-color-default': 'var(--select-loader-color-default)',
    'select-loader-color-disabled': 'var(--select-loader-color-disabled)',
    'select-loader-color-error': 'var(--select-loader-color-error)',
    'select-loader-color-focus': 'var(--select-loader-color-focus)',
    'select-loader-color-hover': 'var(--select-loader-color-hover)',

    'select-placeholder-color-default': 'var(--select-placeholder-color-default)',
    'select-placeholder-color-disabled': 'var(--select-placeholder-color-disabled)',
    'select-placeholder-color-error': 'var(--select-placeholder-color-error)',
    'select-placeholder-color-focus': 'var(--select-placeholder-color-focus)',
    'select-placeholder-color-hover': 'var(--select-placeholder-color-hover)',

    'select-text-color-default': 'var(--select-text-color-default)',
    'select-text-color-disabled': 'var(--select-text-color-disabled)',
    'select-text-color-error': 'var(--select-text-color-error)',
    'select-text-color-focus': 'var(--select-text-color-focus)',
    'select-text-color-hover': 'var(--select-text-color-hover)',
  },
  width: {
    'select-dropdown-width-default': 'var(--select-dropdown-width-default)',
    'select-item-indicator-size-default': 'var(--select-item-indicator-size-default)',
    'select-item-separator-size-default': 'var(--select-item-separator-size-default)',
    'select-loader-size-default': 'var(--select-loader-size-default)',
  },
} satisfies Config['theme']
