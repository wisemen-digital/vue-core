import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface SelectStyleConfig {
  '--select-bg-color-default': string
  '--select-bg-color-disabled': string
  '--select-bg-color-error': string
  '--select-bg-color-focus': string
  '--select-bg-color-hover': string

  '--select-border-bottom-color-default': string
  '--select-border-bottom-color-disabled': string
  '--select-border-bottom-color-error': string
  '--select-border-bottom-color-focus': string
  '--select-border-bottom-color-hover': string

  '--select-border-left-color-default': string
  '--select-border-left-color-disabled': string
  '--select-border-left-color-error': string
  '--select-border-left-color-focus': string
  '--select-border-left-color-hover': string

  '--select-border-radius-bottom-left-default': string
  '--select-border-radius-bottom-right-default': string
  '--select-border-radius-top-left-default': string
  '--select-border-radius-top-right-default': string
  '--select-border-right-color-default': string

  '--select-border-right-color-disabled': string
  '--select-border-right-color-error': string

  '--select-border-right-color-focus': string
  '--select-border-right-color-hover': string
  '--select-border-top-color-default': string
  '--select-border-top-color-disabled': string
  '--select-border-top-color-error': string

  '--select-border-top-color-focus': string
  '--select-border-top-color-hover': string
  '--select-caret-color-default': string
  '--select-caret-color-disabled': string
  '--select-caret-color-error': string

  '--select-caret-color-focus': string
  '--select-caret-color-hover': string
  // Caret
  '--select-caret-size-default': string
  // Spacing between caret and text. To change the spacing between icon and border,
  // refer to `'--select-padding-right-default'
  '--select-caret-spacing-default': string
  // Dropdown
  '--select-dropdown-bg-color-default': string

  '--select-dropdown-border-color-default': string
  '--select-dropdown-border-radius-default': string
  '--select-dropdown-max-height-default': string
  '--select-dropdown-max-width-default': string
  '--select-dropdown-padding-x-default': string

  '--select-dropdown-padding-y-default': string
  '--select-dropdown-shadow-default': string
  '--select-error-font-size-default': string
  '--select-error-font-weight-default': string

  // Spacing between error and input
  '--select-error-spacing-default': string
  // Error
  '--select-error-text-color-default': string

  '--select-font-size-default': string

  '--select-font-weight-default': string
  // Label
  '--select-group-label-font-size-default': string

  '--select-group-label-font-weight-default': string

  '--select-group-label-spacing-bottom-default': string
  '--select-group-label-spacing-top-default': string
  '--select-group-label-spacing-x-default': string
  '--select-group-label-text-color-default': string
  // Group
  '--select-group-padding-x-default': string

  '--select-group-padding-y-default': string

  '--select-height-default': string

  '--select-hint-font-size-default': string
  '--select-hint-font-weight-default': string
  // Spacing between hint and input
  '--select-hint-spacing-default': string
  // Hint
  '--select-hint-text-color-default': string
  '--select-hint-text-color-disabled': string

  '--select-hint-text-color-error': string

  '--select-hint-text-color-focus': string
  '--select-hint-text-color-hover': string
  '--select-icon-left-color-default': string
  '--select-icon-left-color-disabled': string
  '--select-icon-left-color-error': string

  '--select-icon-left-color-focus': string
  '--select-icon-left-color-hover': string
  // Icon
  '--select-icon-left-size-default': string

  // Spacing between icon and text. To change the spacing between icon and border,
  // refer to `'--select-padding-left-default'
  '--select-icon-left-spacing-default': string
  // Item
  '--select-item-bg-color-default': string
  '--select-item-bg-color-disabled': string
  '--select-item-bg-color-highlighted': string
  '--select-item-bg-color-hover': string

  '--select-item-bg-color-selected': string
  '--select-item-border-radius-default': string

  '--select-item-font-size-default': string

  '--select-item-font-weight-default': string

  '--select-item-multiple-value-indicator-bg-color-selected': string
  '--select-item-multiple-value-indicator-border-color-hover': string

  '--select-item-multiple-value-indicator-border-color-selected': string

  '--select-item-multiple-value-indicator-border-radius-default': string
  '--select-item-multiple-value-indicator-color-selected': string
  '--select-item-multiple-value-indicator-size-default': string
  '--select-item-padding-x-default': string
  '--select-item-padding-y-default': string
  // separator
  '--select-item-separator-color-default': string
  '--select-item-seperator-spacing-y-default': string
  '--select-item-single-value-indicator-color-default': string
  '--select-item-single-value-indicator-size-default': string
  '--select-item-text-color-default': string
  '--select-item-text-color-disabled': string
  '--select-item-text-color-highlighted': string
  '--select-item-text-color-hover': string
  '--select-item-text-color-selected': string

  '--select-label-font-size-default': string
  '--select-label-font-weight-default': string
  // Spacing between label and input
  '--select-label-spacing-default': string
  // Label
  '--select-label-text-color-default': string
  '--select-label-text-color-disabled': string

  '--select-label-text-color-error': string
  '--select-label-text-color-focus': string
  '--select-label-text-color-hover': string
  '--select-loader-color-default': string
  '--select-loader-color-disabled': string

  '--select-loader-color-error': string
  '--select-loader-color-focus': string

  '--select-loader-color-hover': string
  // Loader
  '--select-loader-size-default': string

  '--select-padding-left-default': string
  '--select-padding-right-default': string

  '--select-placeholder-color-default': string
  '--select-placeholder-color-disabled': string

  '--select-placeholder-color-error': string

  '--select-placeholder-color-focus': string
  '--select-placeholder-color-hover': string

  '--select-ring-color-error': string
  '--select-ring-color-focus': string

  '--select-shadow-default': string
  '--select-shadow-disabled': string

  '--select-shadow-error': string
  '--select-shadow-focus': string

  '--select-shadow-hover': string
  '--select-text-color-default': string
  '--select-text-color-disabled': string
  '--select-text-color-error': string
  '--select-text-color-focus': string
  '--select-text-color-hover': string
}

defineStyleConfig({
  config: {
    '--select-bg-color-default': '#ffffff',
    '--select-bg-color-disabled': '#fbfbfb',
    '--select-bg-color-error': '#ffffff',
    '--select-bg-color-focus': '#ffffff',
    '--select-bg-color-hover': '#ffffff',

    '--select-border-bottom-color-default': '#d0d5dd',
    '--select-border-bottom-color-disabled': '#eee',
    '--select-border-bottom-color-error': '#ff0202',
    '--select-border-bottom-color-focus': '#007bff',
    '--select-border-bottom-color-hover': '#007bff',

    '--select-border-left-color-default': '#d0d5dd',
    '--select-border-left-color-disabled': '#eee',
    '--select-border-left-color-error': '#ff0202',
    '--select-border-left-color-focus': '#007bff',
    '--select-border-left-color-hover': '#007bff',

    '--select-border-radius-bottom-left-default': '6px',
    '--select-border-radius-bottom-right-default': '6px',
    '--select-border-radius-top-left-default': '6px',
    '--select-border-radius-top-right-default': '6px',
    '--select-border-right-color-default': '#d0d5dd',

    '--select-border-right-color-disabled': '#eee',
    '--select-border-right-color-error': '#ff0202',

    '--select-border-right-color-focus': '#007bff',
    '--select-border-right-color-hover': '#007bff',
    '--select-border-top-color-default': '#d0d5dd',
    '--select-border-top-color-disabled': '#eee',
    '--select-border-top-color-error': '#ff0202',

    '--select-border-top-color-focus': '#007bff',
    '--select-border-top-color-hover': '#007bff',
    '--select-caret-color-default': '#909090',
    '--select-caret-color-disabled': '#ccc',
    '--select-caret-color-error': '#ff0202',

    '--select-caret-color-focus': '#007bff',
    '--select-caret-color-hover': '#909090',
    // Caret
    '--select-caret-size-default': '16px',
    // Spacing between caret and text. To change the spacing between icon and border,
    // refer to '`--select-padding-right-default',
    '--select-caret-spacing-default': '12px',
    // Dropdown
    '--select-dropdown-bg-color-default': '#ffffff',

    '--select-dropdown-border-color-default': '#f7f7f7',
    '--select-dropdown-border-radius-default': '6px',
    '--select-dropdown-max-height-default': '320px',
    '--select-dropdown-max-width-default': '320px',
    '--select-dropdown-padding-x-default': '6px',

    '--select-dropdown-padding-y-default': '6px',
    '--select-dropdown-shadow-default': '0px 10px 15px -3px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)',
    '--select-error-font-size-default': '14px',
    '--select-error-font-weight-default': '400',

    // Spacing between error and input
    '--select-error-spacing-default': '6px',
    // Error
    '--select-error-text-color-default': '#ff0202',

    '--select-font-size-default': '14px',

    '--select-font-weight-default': '400',
    // Label
    '--select-group-label-font-size-default': '14px',

    '--select-group-label-font-weight-default': '500',

    '--select-group-label-spacing-bottom-default': '6px',
    '--select-group-label-spacing-top-default': '6px',
    '--select-group-label-spacing-x-default': '0px',
    '--select-group-label-text-color-default': '#3d4658',
    // Group
    '--select-group-padding-x-default': '0px',

    '--select-group-padding-y-default': '0px',

    '--select-height-default': '40px',

    '--select-hint-font-size-default': '12px',
    '--select-hint-font-weight-default': '400',
    // Spacing between hint and input
    '--select-hint-spacing-default': '6px',
    // Hint
    '--select-hint-text-color-default': '#3d4658',
    '--select-hint-text-color-disabled': '#3d4658',

    '--select-hint-text-color-error': '#ff0202',

    '--select-hint-text-color-focus': '#3d4658',
    '--select-hint-text-color-hover': '#3d4658',
    '--select-icon-left-color-default': '#909090',
    '--select-icon-left-color-disabled': '#ccc',
    '--select-icon-left-color-error': '#ff0202',

    '--select-icon-left-color-focus': '#007bff',
    '--select-icon-left-color-hover': '#909090',
    // Icon
    '--select-icon-left-size-default': '18px',

    // Spacing between icon and text. To change the spacing between icon and border,
    // refer to '`--select-padding-left-default',
    '--select-icon-left-spacing-default': '12px',
    // Item
    '--select-item-bg-color-default': '#ffffff',
    '--select-item-bg-color-disabled': '#ffffff',
    '--select-item-bg-color-highlighted': '#f9fafb',
    '--select-item-bg-color-hover': '#f9fafb; // nakijken, mag weg denk i',

    '--select-item-bg-color-selected': '#ffffff',
    '--select-item-border-radius-default': '6px',

    '--select-item-font-size-default': '14px',

    '--select-item-font-weight-default': '400',

    '--select-item-multiple-value-indicator-bg-color-selected': '#007bff',
    '--select-item-multiple-value-indicator-border-color-hover': '#d0d5dd',

    '--select-item-multiple-value-indicator-border-color-selected': '#007bff',

    '--select-item-multiple-value-indicator-border-radius-default': '3px',
    '--select-item-multiple-value-indicator-color-selected': '#ffffff',
    '--select-item-multiple-value-indicator-size-default': '16px',
    '--select-item-padding-x-default': '12px',
    '--select-item-padding-y-default': '8px',
    // separator
    '--select-item-separator-color-default': '#d0d5dd',

    '--select-item-seperator-spacing-y-default': '6px',
    '--select-item-single-value-indicator-color-default': '#007bff',
    '--select-item-single-value-indicator-size-default': '14px',
    '--select-item-text-color-default': '#3d4658',
    '--select-item-text-color-disabled': '#b4b4b4',
    '--select-item-text-color-highlighted': '#3d4658',
    '--select-item-text-color-hover': '#3d4658',
    '--select-item-text-color-selected': '#007bff',

    '--select-label-font-size-default': '14px',
    '--select-label-font-weight-default': '400',
    // Spacing between label and input
    '--select-label-spacing-default': '4px',
    // Label
    '--select-label-text-color-default': '#3d4658',
    '--select-label-text-color-disabled': '#3d4658',

    '--select-label-text-color-error': '#ff0202',
    '--select-label-text-color-focus': '#3d4658',
    '--select-label-text-color-hover': '#3d4658',
    '--select-loader-color-default': '#3d4658',
    '--select-loader-color-disabled': '#b6b6b6',

    '--select-loader-color-error': '#ff0202',
    '--select-loader-color-focus': '#007bff',

    '--select-loader-color-hover': '#3d4658',
    // Loader
    '--select-loader-size-default': '14px',

    '--select-padding-left-default': '12px',
    '--select-padding-right-default': '12px',

    '--select-placeholder-color-default': '#c6c6c6',
    '--select-placeholder-color-disabled': '#dedede',

    '--select-placeholder-color-error': '#c6c6c6',

    '--select-placeholder-color-focus': '#c6c6c6',
    '--select-placeholder-color-hover': '#c6c6c6',

    '--select-ring-color-error': '#ff020270',
    '--select-ring-color-focus': '#007bff70',

    '--select-shadow-default': '0px 0px 0px 0px #000000',
    '--select-shadow-disabled': '0px 0px 0px 0px #000000',

    '--select-shadow-error': '0px 0px 0px 0px #000000',
    '--select-shadow-focus': '0px 0px 0px 0px #000000',

    '--select-shadow-hover': '0px 0px 0px 0px #000000',
    '--select-text-color-default': '#303030',
    '--select-text-color-disabled': '#e9e9e9',
    '--select-text-color-error': '#303030',
    '--select-text-color-focus': '#303030',
    '--select-text-color-hover': '#303030',
  },
  selector: ':root',
  component: 'select',
})
