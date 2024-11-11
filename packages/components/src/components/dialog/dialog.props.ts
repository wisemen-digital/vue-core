import type { Stylable } from '@/types/stylable.type'

export interface DialogProps extends Stylable<'dialog'> {
  /**
   * The test id of the dialog.
   */
  testId?: string
  /**
   * The id of the element that triggers the dialog: Will be set automatically when using the `useDialog` composable
   * @default null
   */
  triggerId?: null | string
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
