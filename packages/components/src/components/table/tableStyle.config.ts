import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface TableStyleConfig {
  '--table-border-color-default': string
  '--table-border-radius-default': string
  '--table-header-bg-color-default': string
  '--table-header-label-font-size-default': string
  '--table-header-label-font-weight-default': string
  '--table-header-label-text-color-default': string
}

defineStyleConfig({
  config: {
    '--table-border-color-default': 'var(--border-secondary)',
    '--table-border-radius-default': 'var(--radius-lg)',
    '--table-header-bg-color-default': 'var(--bg-secondary)',
    '--table-header-label-font-size-default': 'var(--text-subtext)',
    '--table-header-label-font-weight-default': '500',
    '--table-header-label-text-color-default': 'var(--text-tertiary)',
  },
  selector: ':root',
  component: 'table',
})

defineStyleConfig({
  config: {
    '--table-border-color-default': 'transparent',
    '--table-border-radius-default': '0',
    '--table-header-bg-color-default': 'var(--bg-primary)',
  },
  selector: '.table-variant-borderless',
  component: 'table',
})
