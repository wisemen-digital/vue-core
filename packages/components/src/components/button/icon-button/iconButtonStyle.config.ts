import type { ButtonStyleConfig } from '@/components/button/button/buttonStyle.config'
import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface IconButtonStyleConfig extends ButtonStyleConfig {
  '--icon-button-icon-size-default': string
  '--icon-button-size-default': string
}

defineStyleConfig({
  config: {
    '--icon-button-icon-size-default': '20px',
    '--icon-button-size-default': '40px',
  },
  selector: '.icon-button-variant-default',
  component: 'iconButton',
})

defineStyleConfig({
  config: {
    '--icon-button-size-default': '36px',
  },
  selector: '.icon-btn-sm',
  component: 'iconButton',
})

defineStyleConfig({
  config: {
    '--icon-button-size-default': '44px',
  },
  selector: '.icon-btn-lg',
  component: 'iconButton',
})

defineStyleConfig({
  config: {
    '--icon-button-size-default': '48px',
  },
  selector: '.icon-btn-xl',
  component: 'iconButton',
})

defineStyleConfig({
  config: {
    '--icon-button-size-default': '56px',
  },
  selector: '.icon-btn-2xl',
  component: 'iconButton',
})
