import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface TextFieldStyleConfig {
  '--text-field-bg-color-default': string
  '--text-field-bg-color-disabled': string
  '--text-field-bg-color-error': string
  '--text-field-bg-color-focus': string
  '--text-field-bg-color-hover': string

  '--text-field-border-bottom-color-default': string
  '--text-field-border-bottom-color-disabled': string
  '--text-field-border-bottom-color-error': string
  '--text-field-border-bottom-color-focus': string
  '--text-field-border-bottom-color-hover': string

  '--text-field-border-left-color-default': string
  '--text-field-border-left-color-disabled': string
  '--text-field-border-left-color-error': string
  '--text-field-border-left-color-focus': string
  '--text-field-border-left-color-hover': string

  '--text-field-border-radius-bottom-left-default': string
  '--text-field-border-radius-bottom-right-default': string
  '--text-field-border-radius-top-left-default': string
  '--text-field-border-radius-top-right-default': string
  '--text-field-border-right-color-default': string

  '--text-field-border-right-color-disabled': string
  '--text-field-border-right-color-error': string

  '--text-field-border-right-color-focus': string
  '--text-field-border-right-color-hover': string
  '--text-field-border-top-color-default': string
  '--text-field-border-top-color-disabled': string
  '--text-field-border-top-color-error': string

  '--text-field-border-top-color-focus': string
  '--text-field-border-top-color-hover': string
  '--text-field-error-font-size-default': string
  '--text-field-error-font-weight-default': string
  // Spacing between error and input
  '--text-field-error-spacing-default': string

  // Error
  '--text-field-error-text-color-default': string
  '--text-field-font-size-default': string
  '--text-field-font-weight-default': string
  '--text-field-height-default': string
  '--text-field-hint-font-size-default': string

  '--text-field-hint-font-weight-default': string
  // Spacing between hint and input
  '--text-field-hint-spacing-default': string
  // Hint
  '--text-field-hint-text-color-default': string
  '--text-field-hint-text-color-disabled': string
  '--text-field-hint-text-color-error': string

  '--text-field-hint-text-color-focus': string
  '--text-field-hint-text-color-hover': string
  '--text-field-icon-color-default': string
  '--text-field-icon-color-disabled': string

  '--text-field-icon-color-error': string
  '--text-field-icon-color-focus': string

  '--text-field-icon-color-hover': string

  // Spacing between icon and text. To change the spacing between icon and border,
  // refer to `'--text-field-padding-left-default'
  '--text-field-icon-left-spacing-default': string
  // Spacing between icon and text. To change the spacing between icon and border,
  // refer to `'--text-field-padding-right-default'
  '--text-field-icon-right-spacing-default': string

  // Icon
  '--text-field-icon-size-default': string

  '--text-field-label-font-size-default': string
  '--text-field-label-font-weight-default': string
  // Spacing between label and input
  '--text-field-label-spacing-default': string
  // Label
  '--text-field-label-text-color-default': string
  '--text-field-label-text-color-disabled': string

  '--text-field-label-text-color-error': string
  '--text-field-label-text-color-focus': string

  '--text-field-label-text-color-hover': string
  '--text-field-loader-color-default': string
  '--text-field-loader-color-disabled': string
  '--text-field-loader-color-error': string
  '--text-field-loader-color-focus': string

  '--text-field-loader-color-hover': string
  // Loader
  '--text-field-loader-size-default': string
  '--text-field-padding-left-default': string

  '--text-field-padding-right-default': string
  '--text-field-placeholder-color-default': string
  '--text-field-placeholder-color-disabled': string
  '--text-field-placeholder-color-error': string
  '--text-field-placeholder-color-focus': string

  '--text-field-placeholder-color-hover': string
  '--text-field-ring-color-error': string

  '--text-field-ring-color-focus': string

  '--text-field-shadow-default': string

  '--text-field-shadow-disabled': string
  '--text-field-shadow-error': string

  '--text-field-shadow-focus': string

  '--text-field-shadow-hover': string
  '--text-field-text-color-default': string
  '--text-field-text-color-disabled': string
  '--text-field-text-color-error': string
  '--text-field-text-color-focus': string
  '--text-field-text-color-hover': string
}

defineStyleConfig({
  config: {
    '--text-field-bg-color-default': '#ffffff',
    '--text-field-bg-color-disabled': '#fbfbfb',
    '--text-field-bg-color-error': '#ffffff',
    '--text-field-bg-color-focus': '#ffffff',
    '--text-field-bg-color-hover': '#ffffff',

    '--text-field-border-bottom-color-default': '#d0d5dd',
    '--text-field-border-bottom-color-disabled': '#eee',
    '--text-field-border-bottom-color-error': '#ff0202',
    '--text-field-border-bottom-color-focus': '#007bff',
    '--text-field-border-bottom-color-hover': '#007bff',

    '--text-field-border-left-color-default': '#d0d5dd',
    '--text-field-border-left-color-disabled': '#eee',
    '--text-field-border-left-color-error': '#ff0202',
    '--text-field-border-left-color-focus': '#007bff',
    '--text-field-border-left-color-hover': '#007bff',

    '--text-field-border-radius-bottom-left-default': '6px',
    '--text-field-border-radius-bottom-right-default': '6px',
    '--text-field-border-radius-top-left-default': '6px',
    '--text-field-border-radius-top-right-default': '6px',
    '--text-field-border-right-color-default': '#d0d5dd',

    '--text-field-border-right-color-disabled': '#eee',
    '--text-field-border-right-color-error': '#ff0202',

    '--text-field-border-right-color-focus': '#007bff',
    '--text-field-border-right-color-hover': '#007bff',
    '--text-field-border-top-color-default': '#d0d5dd',
    '--text-field-border-top-color-disabled': '#eee',
    '--text-field-border-top-color-error': '#ff0202',

    '--text-field-border-top-color-focus': '#007bff',
    '--text-field-border-top-color-hover': '#007bff',
    '--text-field-error-font-size-default': '12px',
    '--text-field-error-font-weight-default': '400',
    // Spacing between error and input
    '--text-field-error-spacing-default': '6px',

    // Error
    '--text-field-error-text-color-default': '#ff0202',
    '--text-field-font-size-default': '14px',
    '--text-field-font-weight-default': '400',
    '--text-field-height-default': '40px',
    '--text-field-hint-font-size-default': '12px',

    '--text-field-hint-font-weight-default': '400',
    // Spacing between hint and input
    '--text-field-hint-spacing-default': '6px',
    // Hint
    '--text-field-hint-text-color-default': '#3d4658',
    '--text-field-hint-text-color-disabled': '#3d4658',
    '--text-field-hint-text-color-error': '#ff0202',

    '--text-field-hint-text-color-focus': '#3d4658',
    '--text-field-hint-text-color-hover': '#3d4658',
    '--text-field-icon-color-default': '#909090',
    '--text-field-icon-color-disabled': '#ccc',

    '--text-field-icon-color-error': '#ff0202',
    '--text-field-icon-color-focus': '#007bff',

    '--text-field-icon-color-hover': '#909090',

    '--text-field-icon-left-spacing-default': '12px',
    '--text-field-icon-right-spacing-default': '12px',

    // Icon
    '--text-field-icon-size-default': '18px',

    '--text-field-label-font-size-default': '14px',
    '--text-field-label-font-weight-default': '400',
    // Spacing between label and input
    '--text-field-label-spacing-default': '4px',
    // Label
    '--text-field-label-text-color-default': '#3d4658',
    '--text-field-label-text-color-disabled': '#3d4658',

    '--text-field-label-text-color-error': '#ff0202',
    '--text-field-label-text-color-focus': '#3d4658',

    '--text-field-label-text-color-hover': '#3d4658',
    '--text-field-loader-color-default': '#3d4658',
    '--text-field-loader-color-disabled': '#b6b6b6',
    '--text-field-loader-color-error': '#ff0202',
    '--text-field-loader-color-focus': '#007bff',

    '--text-field-loader-color-hover': '#3d4658',
    // Loader
    '--text-field-loader-size-default': '14px',
    '--text-field-padding-left-default': '12px',

    '--text-field-padding-right-default': '12px',
    '--text-field-placeholder-color-default': '#c6c6c6',
    '--text-field-placeholder-color-disabled': '#dedede',
    '--text-field-placeholder-color-error': '#c6c6c6',
    '--text-field-placeholder-color-focus': '#c6c6c6',

    '--text-field-placeholder-color-hover': '#c6c6c6',
    '--text-field-ring-color-error': '#ff020270',

    '--text-field-ring-color-focus': '#007bff70',

    '--text-field-shadow-default': '0px 0px 0px 0px #000000',

    '--text-field-shadow-disabled': '0px 0px 0px 0px #000000',
    '--text-field-shadow-error': '0px 0px 0px 0px #000000',

    '--text-field-shadow-focus': '0px 0px 0px 0px #000000',

    '--text-field-shadow-hover': '0px 0px 0px 0px #000000',
    '--text-field-text-color-default': '#101828',
    '--text-field-text-color-disabled': '#e9e9e9',
    '--text-field-text-color-error': '#101828',
    '--text-field-text-color-focus': '#101828',
    '--text-field-text-color-hover': '#101828',
  },
  selector: ':root',
  component: 'textField',
})
