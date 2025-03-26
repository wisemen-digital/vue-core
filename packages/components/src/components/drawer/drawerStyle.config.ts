import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface DrawerStyleConfig {
  '--drawer-bg-color-default': string
  '--drawer-border-color-default': string
  '--drawer-border-radius-default': string
  // TODO: improve name
  '--drawer-padding-default': string
  '--drawer-shadow-default': string
}

export function setupDefaultDrawerStyles(): void {
  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--drawer-bg-color-default': 'var(--bg-primary)',
      '--drawer-border-color-default': 'var(--border-secondary)',
      '--drawer-border-radius-default': 'var(--radius-lg)',
      '--drawer-padding-default': 'var(--spacing-md)',
      '--drawer-shadow-default': 'var(--shadow-lg)',
    },
    theme: '*',
    variant: 'default',
    component: 'drawer',
  })
}
