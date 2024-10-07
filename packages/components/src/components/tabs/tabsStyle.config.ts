import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface TabsStyleConfig {
  '--tabs-container-bg-color-default': string
  '--tabs-container-border-bottom-color-default': string
  '--tabs-container-border-left-color-default': string
  '--tabs-container-border-radius-default': string
  '--tabs-container-border-right-color-default': string
  '--tabs-container-border-top-color-default': string
  '--tabs-container-padding-x-default': string
  '--tabs-container-padding-y-default': string

  '--tabs-indicator-bg-color-default': string
  '--tabs-indicator-border-bottom-color-default': string
  '--tabs-indicator-border-left-color-default': string
  '--tabs-indicator-border-radius-default': string
  '--tabs-indicator-border-right-color-default': string
  '--tabs-indicator-border-top-color-default': string
  '--tabs-indicator-height-default': string

  '--tabs-indicator-shadow-default': string

  '--tabs-item-bg-color-active': string
  '--tabs-item-bg-color-default': string

  '--tabs-item-bg-color-focus': string
  '--tabs-item-bg-color-hover': string
  '--tabs-item-border-radius-default': string
  '--tabs-item-container-padding-x-default': string
  '--tabs-item-container-padding-y-default': string
  '--tabs-item-font-size-default': string
  '--tabs-item-font-weight-default': string
  '--tabs-item-padding-x-default': string
  '--tabs-item-padding-y-default': string
  '--tabs-item-ring-color-default': string
  '--tabs-item-text-color-active': string
  '--tabs-item-text-color-default': string
  '--tabs-item-text-color-disabled': string
  '--tabs-item-text-color-focus': string
  '--tabs-item-text-color-hover': string
}

defineStyleConfig({
  config: {
    '--tabs-container-bg-color-default': 'transparent',
    '--tabs-container-border-bottom-color-default': '#d0d5dd',
    '--tabs-container-border-left-color-default': 'transparent',
    '--tabs-container-border-radius-default': '0px',
    '--tabs-container-border-right-color-default': 'transparent',
    '--tabs-container-border-top-color-default': 'transparent',
    '--tabs-container-padding-x-default': '0px',
    '--tabs-container-padding-y-default': '0px',

    '--tabs-indicator-bg-color-default': 'transparent',
    '--tabs-indicator-border-bottom-color-default': '#007bff',
    '--tabs-indicator-border-left-color-default': '#007bff',
    '--tabs-indicator-border-radius-default': '4px',
    '--tabs-indicator-border-right-color-default': '#007bff',
    '--tabs-indicator-border-top-color-default': '#007bff',
    '--tabs-indicator-height-default': '1px',
    '--tabs-indicator-shadow-default': '0px 0px 0px 0px #000000',

    '--tabs-item-bg-color-active': 'transparent',
    '--tabs-item-bg-color-default': 'transparent',
    '--tabs-item-bg-color-focus': '#f9fafb',
    '--tabs-item-bg-color-hover': '#f9fafb',
    '--tabs-item-border-radius-default': '6px',
    '--tabs-item-container-padding-x-default': '0px',
    '--tabs-item-container-padding-y-default': '8px',
    '--tabs-item-font-size-default': '14px',
    '--tabs-item-font-weight-default': '500',
    '--tabs-item-padding-x-default': '16px',
    '--tabs-item-padding-y-default': '8px',
    '--tabs-item-ring-color-default': 'transparent',
    '--tabs-item-text-color-active': '#3d4658',
    '--tabs-item-text-color-default': '#3d4658',
    '--tabs-item-text-color-disabled': '#b8b8b8',
    '--tabs-item-text-color-focus': '#3d4658',
    '--tabs-item-text-color-hover': '#2a303c',
  },
  selector: ':root',
  component: 'tabs',
})

defineStyleConfig({
  config: {
    '--tabs-container-bg-color-default': '#f9fafb',
    '--tabs-container-border-bottom-color-default': '#e4e7ec',
    '--tabs-container-border-left-color-default': '#e4e7ec',
    '--tabs-container-border-radius-default': '8px',
    '--tabs-container-border-right-color-default': '#e4e7ec',
    '--tabs-container-border-top-color-default': '#e4e7ec',
    '--tabs-container-padding-x-default': '4px',
    '--tabs-container-padding-y-default': '4px',

    '--tabs-indicator-bg-color-default': '#ffffff',
    '--tabs-indicator-border-bottom-color-default': '#ffffff',
    '--tabs-indicator-border-left-color-default': '#ffffff',
    '--tabs-indicator-border-radius-default': '6px',
    '--tabs-indicator-border-right-color-default': '#ffffff',
    '--tabs-indicator-border-top-color-default': '#ffffff',
    '--tabs-indicator-height-default': '100%',
    '--tabs-indicator-shadow-default': '0px 1px 2px 0px #1018280F',

    '--tabs-item-bg-color-active': 'transparent',
    '--tabs-item-bg-color-default': 'transparent',
    '--tabs-item-bg-color-focus': 'transparent',
    '--tabs-item-bg-color-hover': 'transparent',
    '--tabs-item-container-padding-x-default': '16px',
    '--tabs-item-container-padding-y-default': '4px',
    '--tabs-item-padding-x-default': '12px',
    '--tabs-item-padding-y-default': '6px',
    '--tabs-item-ring-color-default': '#007bff',
    '--tabs-item-text-color-active': '#344054',
    '--tabs-item-text-color-default': '#667085',
    '--tabs-item-text-color-disabled': '#b8b8b8',

    '--tabs-item-text-color-focus': '#3d4658',
    '--tabs-item-text-color-hover': '#344054',
  },
  selector: '.tabs-2',
  component: 'tabs',
})
