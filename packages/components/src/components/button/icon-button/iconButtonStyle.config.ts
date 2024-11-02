import type { ButtonStyleConfig } from '@/components/button/button/buttonStyle.config'
import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface IconButtonStyleConfig extends ButtonStyleConfig {
  '--icon-button-icon-size-default': string
  '--icon-button-size-default': string
}

defineStyleConfig({
  config: {
    '--icon-button-icon-size-default': '1.25rem',
    '--icon-button-size-default': '2.5rem',
  },
  selector: '.icon-button-variant-default',
  component: 'iconButton',
})

defineStyleConfig({
  config: {
    '--icon-button-size-default': '2.25rem',
  },
  selector: '.icon-btn-sm',
  component: 'iconButton',
})

defineStyleConfig({
  config: {
    '--icon-button-size-default': '2.75rem',
  },
  selector: '.icon-btn-lg',
  component: 'iconButton',
})

defineStyleConfig({
  config: {
    '--icon-button-size-default': '3rem',
  },
  selector: '.icon-btn-xl',
  component: 'iconButton',
})

defineStyleConfig({
  config: {
    '--icon-button-size-default': '3.5rem',
  },
  selector: '.icon-btn-2xl',
  component: 'iconButton',
})
