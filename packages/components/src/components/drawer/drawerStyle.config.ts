import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface DrawerStyleConfig {
  '--drawer-bg-color-default': string
  '--drawer-border-color-default': string
  '--drawer-border-radius-default': string
  '--drawer-padding-default': string
  '--drawer-shadow-default': string
}

defineStyleConfig({
  config: {
    '--drawer-bg-color-default': 'var(--bg-primary)',
    '--drawer-border-color-default': 'var(--border-secondary)',
    '--drawer-border-radius-default': 'var(--radius-lg)',
    '--drawer-padding-default': 'var(--spacing-lg)',
    '--drawer-shadow-default': 'var(--shadow-lg)',
  },
  selector: '.drawer-variant-default',
  component: 'drawer',
})
