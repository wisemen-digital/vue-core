import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface PopoverStyleConfig {
  '--popover-bg-color-default': string
  '--popover-border-color-default': string
  '--popover-border-radius-default': string
  '--popover-max-width-default': string
  '--popover-shadow-default': string
}

defineStyleConfig({
  config: {
    '--popover-bg-color-default': '#ffffff',
    '--popover-border-color-default': '#e7eaef',
    '--popover-border-radius-default': '6px',
    '--popover-max-width-default': 'auto',
    '--popover-shadow-default': '0px 10px 15px -3px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)',
  },
  selector: ':root',
  component: 'popover',
})
