import type { Stylable } from '@/types/stylable.type'

export interface DialogProps extends Stylable<'dialog'> {
  /**
   * The id of the element that triggers the dialog. Must be set for accessibility purposes.
   * @default null
   */
  id?: null | string
  /**
   * The test id of the dialog.
   */
  testId?: string
  /**
   * Whether to animate the dialog with the View Transitions API
   * @default false
   */
  shouldAnimateFromTrigger?: boolean
  /**
   * Prevent clicks outside the dialog content to close the dialog
   * @default false
   */
  shouldPreventClickOutside?: boolean
}
