import type { ButtonStyleConfig } from '@/components/button/button/buttonStyle.config'
import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface IconButtonStyleConfig extends ButtonStyleConfig {
  '--icon-button-icon-size-default': string
  '--icon-button-size-default': string
}

export function setupDefaultIconButtonStyles(): void {
  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--icon-button-icon-size-default': '1.25rem',
      '--icon-button-size-default': '2.5rem',
    },
    theme: '*',
    variant: 'default',
    component: 'iconButton',
  })

  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--icon-button-size-default': '2.25rem',
    },
    theme: '*',
    variant: 'sm',
    component: 'iconButton',
  })

  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--icon-button-size-default': '2.75rem',
    },
    theme: '*',
    variant: 'lg',
    component: 'iconButton',
  })

  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--icon-button-size-default': '3rem',
    },
    theme: '*',
    variant: 'xl',
    component: 'iconButton',
  })

  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--icon-button-size-default': '3.5rem',
    },
    theme: '*',
    variant: '2xl',
    component: 'iconButton',
  })
}
