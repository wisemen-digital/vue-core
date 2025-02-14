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

export function setupDefaultTabsStyles(): void {
  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--tabs-container-bg-color-default': 'transparent',
      '--tabs-container-border-bottom-color-default': 'var(--border-primary)',
      '--tabs-container-border-left-color-default': 'transparent',
      '--tabs-container-border-radius-default': '0px',
      '--tabs-container-border-right-color-default': 'transparent',
      '--tabs-container-border-top-color-default': 'transparent',
      '--tabs-container-padding-x-default': '0px',
      '--tabs-container-padding-y-default': '0px',

      '--tabs-indicator-bg-color-default': 'transparent',
      '--tabs-indicator-border-bottom-color-default': 'var(--brand-500)',
      '--tabs-indicator-border-left-color-default': 'var(--brand-500)',
      '--tabs-indicator-border-radius-default': 'var(--radius-sm)',
      '--tabs-indicator-border-right-color-default': 'var(--brand-500)',
      '--tabs-indicator-border-top-color-default': 'var(--brand-500)',
      '--tabs-indicator-height-default': '1px',
      '--tabs-indicator-shadow-default': '0px 0px 0px 0px transparent',

      '--tabs-item-bg-color-active': 'transparent',
      '--tabs-item-bg-color-default': 'transparent',
      '--tabs-item-bg-color-focus': 'var(--bg-brand-secondary)',
      '--tabs-item-bg-color-hover': 'var(--bg-primary-hover)',
      '--tabs-item-border-radius-default': 'var(--radius-md)',
      '--tabs-item-container-padding-x-default': '0px',
      '--tabs-item-container-padding-y-default': 'var(--spacing-md)',
      '--tabs-item-font-size-default': 'var(--text-sm)',
      '--tabs-item-font-weight-default': '500',
      '--tabs-item-padding-x-default': 'var(--spacing-xl)',
      '--tabs-item-padding-y-default': 'var(--spacing-md)',
      '--tabs-item-ring-color-default': 'transparent',
      '--tabs-item-text-color-active': 'var(--text-brand-secondary)',
      '--tabs-item-text-color-default': 'var(--text-secondary)',
      '--tabs-item-text-color-disabled': 'var(--text-secondary)',
      '--tabs-item-text-color-focus': 'var(--text-brand-secondary)',
      '--tabs-item-text-color-hover': 'var(--text-brand-secondary)',
    },
    theme: '*',
    variant: 'default',
    component: 'tabs',
  })
}
