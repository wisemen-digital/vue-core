import { defineStyleConfig } from '@/styling/defineStyleConfig'

// TODO: group padding x y niet

export interface DropdownMenuStyleConfig {
  '--dropdown-menu-bg-color-default': string
  '--dropdown-menu-border-color-default': string
  '--dropdown-menu-border-radius-default': string
  '--dropdown-menu-destructive-item-bg-color-default': string
  '--dropdown-menu-destructive-item-bg-color-disabled': string
  '--dropdown-menu-destructive-item-bg-color-highlighted': string
  '--dropdown-menu-destructive-item-bg-color-hover': string
  '--dropdown-menu-destructive-item-icon-color-default': string
  '--dropdown-menu-destructive-item-icon-color-disabled': string
  '--dropdown-menu-destructive-item-icon-color-highlighted': string
  '--dropdown-menu-destructive-item-icon-color-hover': string
  '--dropdown-menu-destructive-item-text-color-default': string
  '--dropdown-menu-destructive-item-text-color-disabled': string
  '--dropdown-menu-destructive-item-text-color-highlighted': string
  '--dropdown-menu-destructive-item-text-color-hover': string
  '--dropdown-menu-group-label-font-size-default': string
  '--dropdown-menu-group-label-font-weight-default': string
  '--dropdown-menu-group-label-spacing-bottom-default': string
  '--dropdown-menu-group-label-spacing-top-default': string
  '--dropdown-menu-group-label-spacing-x-default': string
  '--dropdown-menu-group-label-text-color-default': string
  '--dropdown-menu-group-spacing-bottom-default': string
  '--dropdown-menu-group-spacing-top-default': string
  '--dropdown-menu-group-spacing-x-default': string
  '--dropdown-menu-item-bg-color-default': string
  '--dropdown-menu-item-bg-color-disabled': string
  '--dropdown-menu-item-bg-color-highlighted': string
  '--dropdown-menu-item-bg-color-hover': string
  '--dropdown-menu-item-border-radius-default': string
  '--dropdown-menu-item-font-size-default': string
  '--dropdown-menu-item-font-weight-default': string
  '--dropdown-menu-item-icon-color-default': string
  '--dropdown-menu-item-icon-color-disabled': string
  '--dropdown-menu-item-icon-color-highlighted': string
  '--dropdown-menu-item-icon-color-hover': string
  '--dropdown-menu-item-icon-size-default': string
  '--dropdown-menu-item-icon-spacing-default': string
  '--dropdown-menu-item-padding-x-default': string
  '--dropdown-menu-item-padding-y-default': string
  '--dropdown-menu-item-separator-color-default': string
  '--dropdown-menu-item-separator-spacing-y-default': string
  '--dropdown-menu-item-text-color-default': string
  '--dropdown-menu-item-text-color-disabled': string
  '--dropdown-menu-item-text-color-highlighted': string
  '--dropdown-menu-item-text-color-hover': string
  '--dropdown-menu-max-width-default': string
  '--dropdown-menu-min-width-default': string
  '--dropdown-menu-padding-x-default': string
  '--dropdown-menu-padding-y-default': string
  '--dropdown-menu-shadow-default': string
}

defineStyleConfig({
  config: {
    '--dropdown-menu-bg-color-default': '#0d111c',
    '--dropdown-menu-border-color-default': '#0d111c',
    '--dropdown-menu-border-radius-default': '10px',
    '--dropdown-menu-destructive-item-bg-color-default': 'transparent',
    '--dropdown-menu-destructive-item-bg-color-disabled': 'transparent',
    '--dropdown-menu-destructive-item-bg-color-highlighted': 'transparent',
    '--dropdown-menu-destructive-item-bg-color-hover': 'transparent',
    '--dropdown-menu-destructive-item-icon-color-default': '#ff0202',
    '--dropdown-menu-destructive-item-icon-color-disabled': '#ff0202',
    '--dropdown-menu-destructive-item-icon-color-highlighted': '#ff0202',
    '--dropdown-menu-destructive-item-icon-color-hover': '#ff0202',
    '--dropdown-menu-destructive-item-text-color-default': '#ff0202',
    '--dropdown-menu-destructive-item-text-color-disabled': '#ff0202',
    '--dropdown-menu-destructive-item-text-color-highlighted': '#ff0202',
    '--dropdown-menu-destructive-item-text-color-hover': '#ff0202',
    '--dropdown-menu-group-label-font-size-default': '14px',
    '--dropdown-menu-group-label-font-weight-default': '500',
    '--dropdown-menu-group-label-spacing-bottom-default': '4px',
    '--dropdown-menu-group-label-spacing-top-default': '0px',
    '--dropdown-menu-group-label-spacing-x-default': '0px',
    '--dropdown-menu-group-label-text-color-default': '#FCFCFD',
    '--dropdown-menu-group-spacing-bottom-default': '0px',
    '--dropdown-menu-group-spacing-top-default': '4px',
    '--dropdown-menu-group-spacing-x-default': '0px',
    '--dropdown-menu-item-bg-color-default': 'transparent',
    '--dropdown-menu-item-bg-color-disabled': 'transparent',
    '--dropdown-menu-item-bg-color-highlighted': '#060b16',
    '--dropdown-menu-item-bg-color-hover': '#060b16',
    '--dropdown-menu-item-border-radius-default': '6px',
    '--dropdown-menu-item-font-size-default': '14px',
    '--dropdown-menu-item-font-weight-default': '500',
    '--dropdown-menu-item-icon-color-default': '#FCFCFD',
    '--dropdown-menu-item-icon-color-disabled': '#b4b4b4',
    '--dropdown-menu-item-icon-color-highlighted': '#FCFCFD',
    '--dropdown-menu-item-icon-color-hover': '#FCFCFD',
    '--dropdown-menu-item-icon-size-default': '16px',
    '--dropdown-menu-item-icon-spacing-default': '10px',
    '--dropdown-menu-item-padding-x-default': '12px',
    '--dropdown-menu-item-padding-y-default': '8px',
    '--dropdown-menu-item-separator-color-default': '#344054',
    '--dropdown-menu-item-separator-spacing-y-default': '6px',
    '--dropdown-menu-item-text-color-default': '#FCFCFD',
    '--dropdown-menu-item-text-color-disabled': 'rgb(70, 70, 70)',
    '--dropdown-menu-item-text-color-highlighted': '#FCFCFD',
    '--dropdown-menu-item-text-color-hover': '#FCFCFD',
    '--dropdown-menu-max-width-default': '320px',
    '--dropdown-menu-min-width-default': '200px',
    '--dropdown-menu-padding-x-default': '6px',
    '--dropdown-menu-padding-y-default': '6px',
    '--dropdown-menu-shadow-default': '0px 10px 15px -3px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)',
  },
  selector: ':root',
  component: 'dropdownMenu',
})
