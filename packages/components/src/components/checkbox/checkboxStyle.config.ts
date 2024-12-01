import { defineStyleConfig } from '@/styling/defineStyleConfig'
import type { BaseStyleConfig } from '@/types/style.type'

export interface CheckboxStyleConfig extends BaseStyleConfig {

}

export function setupDefaultCheckboxStyles(): void {
  defineStyleConfig({
    colorScheme: '*',
    config: {
      //
    },
    theme: '*',
    variant: 'default',
    component: 'checkbox',
  })
}
