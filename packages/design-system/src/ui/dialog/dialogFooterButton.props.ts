import type { Component } from 'vue'

import type { DisabledWithReason } from '@/types/disabledWithReason.type'

export interface DialogFooterButtonProps extends DisabledWithReason {
  /**
   * Shows a loading state and disables interaction.
   * @default false
   */
  isLoading?: boolean

  /**
   * The form ID the button is associated with.
   * @default null
   */
  form?: string | null

  /**
   * Icon displayed before the button label.
   * @default null
   */
  iconLeft?: Component | null

  /**
   * Icon displayed after the button label.
   * @default null
   */
  iconRight?: Component | null

  /**
   * Text label displayed inside the button.
   */
  label: string

  /**
   * Native button type attribute.
   * @default 'button'
   */
  type?: 'button' | 'reset' | 'submit'
}
