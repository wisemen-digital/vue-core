import type { Config } from 'tailwindcss'

export const dropdownMenuTailwindConfig = {
  backgroundColor: {
    'dropdown-menu-bg-color-default': 'var(--dropdown-menu-bg-color-default)',
    'dropdown-menu-destructive-item-bg-color-default': 'var(--dropdown-menu-destructive-item-bg-color-default)',
    'dropdown-menu-destructive-item-bg-color-disabled': 'var(--dropdown-menu-destructive-item-bg-color-disabled)',
    'dropdown-menu-destructive-item-bg-color-highlighted': 'var(--dropdown-menu-destructive-item-bg-color-highlighted)',
    'dropdown-menu-destructive-item-bg-color-hover': 'var(--dropdown-menu-destructive-item-bg-color-hover)',
    'dropdown-menu-item-bg-color-default': 'var(--dropdown-menu-item-bg-color-default)',
    'dropdown-menu-item-bg-color-disabled': 'var(--dropdown-menu-item-bg-color-disabled)',
    'dropdown-menu-item-bg-color-highlighted': 'var(--dropdown-menu-item-bg-color-highlighted)',
    'dropdown-menu-item-bg-color-hover': 'var(--dropdown-menu-item-bg-color-hover)',
    'dropdown-menu-item-separator-color-default': 'var(--dropdown-menu-item-separator-color-default)',
  },
  borderColor: {
    'dropdown-menu-border-color-default': 'var(--dropdown-menu-border-color-default)',
  },
  borderRadius: {
    'dropdown-menu-border-radius-default': 'var(--dropdown-menu-border-radius-default)',
    'dropdown-menu-item-border-radius-default': 'var(--dropdown-menu-item-border-radius-default)',
  },
  boxShadow: {
    'dropdown-menu-shadow-default': 'var(--dropdown-menu-shadow-default)',
  },
  fontSize: {
    'dropdown-menu-group-label-font-size-default': 'var(--dropdown-menu-group-label-font-size-default)',
    'dropdown-menu-item-font-size-default': 'var(--dropdown-menu-item-font-size-default)',
  },
  fontWeight: {
    'dropdown-menu-group-label-font-weight-default': 'var(--dropdown-menu-group-label-font-weight-default)',
    'dropdown-menu-item-font-weight-default': 'var(--dropdown-menu-item-font-weight-default)',
  },
  height: {
    'dropdown-menu-item-icon-size-default': 'var(--dropdown-menu-item-icon-size-default)',
  },
  margin: {
    'dropdown-menu-item-icon-spacing-default': 'var(--dropdown-menu-item-icon-spacing-default)',
    'dropdown-menu-item-separator-spacing-y-default': 'var(--dropdown-menu-item-separator-spacing-y-default)',
  },
  maxWidth: {
    'dropdown-menu-max-width-default': 'var(--dropdown-menu-max-width-default)',
  },
  minWidth: {
    'dropdown-menu-min-width-default': 'var(--dropdown-menu-min-width-default)',
  },
  padding: {
    'dropdown-menu-group-label-spacing-bottom-default': 'var(--dropdown-menu-group-label-spacing-bottom-default)',
    'dropdown-menu-group-label-spacing-top-default': 'var(--dropdown-menu-group-label-spacing-top-default)',
    'dropdown-menu-group-label-spacing-x-default': 'var(--dropdown-menu-group-label-spacing-x-default)',
    'dropdown-menu-group-spacing-bottom-default': 'var(--dropdown-menu-group-spacing-bottom-default)',
    'dropdown-menu-group-spacing-top-default': 'var(--dropdown-menu-group-spacing-top-default)',
    'dropdown-menu-group-spacing-x-default': 'var(--dropdown-menu-group-spacing-x-default)',
    'dropdown-menu-item-padding-x-default': 'var(--dropdown-menu-item-padding-x-default)',
    'dropdown-menu-item-padding-y-default': 'var(--dropdown-menu-item-padding-y-default)',
    'dropdown-menu-padding-x-default': 'var(--dropdown-menu-padding-x-default)',
    'dropdown-menu-padding-y-default': 'var(--dropdown-menu-padding-y-default)',
  },
  textColor: {
    'dropdown-menu-destructive-item-icon-color-default': 'var(--dropdown-menu-destructive-item-icon-color-default)',
    'dropdown-menu-destructive-item-icon-color-disabled': 'var(--dropdown-menu-destructive-item-icon-color-disabled)',
    'dropdown-menu-destructive-item-icon-color-highlighted': 'var(--dropdown-menu-destructive-item-icon-color-highlighted)',
    'dropdown-menu-destructive-item-icon-color-hover': 'var(--dropdown-menu-destructive-item-icon-color-hover)',
    'dropdown-menu-destructive-item-text-color-default': 'var(--dropdown-menu-destructive-item-text-color-default)',
    'dropdown-menu-destructive-item-text-color-disabled': 'var(--dropdown-menu-destructive-item-text-color-disabled)',
    'dropdown-menu-destructive-item-text-color-highlighted': 'var(--dropdown-menu-destructive-item-text-color-highlighted)',
    'dropdown-menu-destructive-item-text-color-hover': 'var(--dropdown-menu-destructive-item-text-color-hover)',
    'dropdown-menu-group-label-text-color-default': 'var(--dropdown-menu-group-label-text-color-default)',
    'dropdown-menu-item-icon-color-default': 'var(--dropdown-menu-item-icon-color-default)',
    'dropdown-menu-item-icon-color-disabled': 'var(--dropdown-menu-item-icon-color-disabled)',
    'dropdown-menu-item-icon-color-highlighted': 'var(--dropdown-menu-item-icon-color-highlighted)',
    'dropdown-menu-item-icon-color-hover': 'var(--dropdown-menu-item-icon-color-hover)',
    'dropdown-menu-item-text-color-default': 'var(--dropdown-menu-item-text-color-default)',
    'dropdown-menu-item-text-color-disabled': 'var(--dropdown-menu-item-text-color-disabled)',
    'dropdown-menu-item-text-color-highlighted': 'var(--dropdown-menu-item-text-color-highlighted)',
    'dropdown-menu-item-text-color-hover': 'var(--dropdown-menu-item-text-color-hover)',
  },
  width: {
    'dropdown-menu-item-icon-size-default': 'var(--dropdown-menu-item-icon-size-default)',
  },
} satisfies Config['theme']
