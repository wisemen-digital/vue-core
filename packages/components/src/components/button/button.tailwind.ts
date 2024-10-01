import type { Config } from 'tailwindcss'

export const buttonTailwindConfig = {
  backgroundColor: {
    'button-bg-color-active': 'var(--button-bg-color-active)',
    'button-bg-color-default': 'var(--button-bg-color-default)',
    'button-bg-color-disabled': 'var(--button-bg-color-disabled)',
    'button-bg-color-focus': 'var(--button-bg-color-focus)',
    'button-bg-color-hover': 'var(--button-bg-color-hover)',
  },
  borderColor: {
    'button-border-color-active': 'var(--button-border-color-active)',
    'button-border-color-default': 'var(--button-border-color-default)',
    'button-border-color-disabled': 'var(--button-border-color-disabled)',
    'button-border-color-focus': 'var(--button-border-color-focus)',
    'button-border-color-hover': 'var(--button-border-color-hover)',
  },
  borderRadius: {
    'button-border-radius-default': 'var(--button-border-radius-default)',
  },
  boxShadow: {
    'button-shadow-active': 'var(--button-shadow-active)',
    'button-shadow-default': 'var(--button-shadow-default)',
    'button-shadow-disabled': 'var(--button-shadow-disabled)',
    'button-shadow-focus': 'var(--button-shadow-focus)',
    'button-shadow-hover': 'var(--button-shadow-hover)',
  },
  fontSize: {
    'button-font-size-default': 'var(--button-font-size-default)',
  },
  fontWeight: {
    'button-font-weight-default': 'var(--button-font-weight-default)',
  },
  height: {
    'button-height-default': 'var(--button-height-default)',
    'button-icon-size-default': 'var(--button-icon-size-default)',
    'button-loader-size-default': 'var(--button-loader-size-default)',
  },
  margin: {
    'button-icon-left-spacing-default': 'var(--button-icon-left-spacing-default)',
    'button-icon-right-spacing-default': 'var(--button-icon-right-spacing-default)',
  },
  padding: {
    'button-padding-left-default': 'var(--button-padding-left-default)',
    'button-padding-right-default': 'var(--button-padding-right-default)',
  },
  ringColor: {
    'button-ring-color-focus': 'var(--button-ring-color-focus)',
  },
  textColor: {
    'button-loader-color-default': 'var(--button-loader-color-default)',
    'button-text-color-active': 'var(--button-text-color-active)',
    'button-text-color-default': 'var(--button-text-color-default)',
    'button-text-color-disabled': 'var(--button-text-color-disabled)',
    'button-text-color-focus': 'var(--button-text-color-focus)',
    'button-text-color-hover': 'var(--button-text-color-hover)',
  },
  width: {
    'button-icon-size-default': 'var(--button-icon-size-default)',
    'button-loader-size-default': 'var(--button-loader-size-default)',
  },
} satisfies Config['theme']
