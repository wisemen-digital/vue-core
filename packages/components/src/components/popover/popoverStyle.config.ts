import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface PopoverStyleConfig {
  '--popover-bg-color-default': string
  '--popover-border-color-default': string
  '--popover-border-radius-default': string
  '--popover-max-width-default': string
  '--popover-min-width-default': string
  '--popover-shadow-default': string
}

defineStyleConfig({
  config: {
    '--popover-bg-color-default': 'var(--bg-primary)',
    '--popover-border-color-default': 'var(--border-secondary)',
    '--popover-border-radius-default': 'var(--radius-lg)',
    '--popover-max-width-default': 'auto',
    '--popover-min-width-default': 'auto',
    '--popover-shadow-default': 'var(--shadow-lg)',
  },
  selector: ':root',
  component: 'popover',
})
