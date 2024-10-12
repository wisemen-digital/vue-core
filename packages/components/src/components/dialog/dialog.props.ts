import type { StyleConfig } from '@/types/style.type'

export interface AppDialogProps {
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
  animateFromTrigger?: boolean
  /**
   * Prevent clicks outside the dialog content to close the dialog
   * @default false
   */
  shouldPreventClickOutside?: boolean
  /**
   *
   */
  styleConfig?: StyleConfig<'dialog'> | null
}

export const appDialogPropsDefaultValues = {
  triggerId: null,
  animateFromTrigger: false,
  shouldPreventClickOutside: false,
  styleConfig: null,
} satisfies Partial<AppDialogProps>
