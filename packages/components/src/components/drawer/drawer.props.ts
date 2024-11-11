import type { Stylable } from '@/types/stylable.type'

export interface DrawerProps extends Stylable<'drawer'> {
  /**
   * The test id of the drawer.
   */
  testId?: string
  /**
   * The id of the element that triggers the drawer: Will be set automatically when using the `useDrawer` composable
   * @default null
   */
  triggerId?: null | string
  /**
   * Whether to animate the drawer with the View Transitions API
   * @default false
   */
  shouldAnimateFromTrigger?: boolean
  /**
   * Prevent clicks outside the drawer content to close the drawer
   * @default false
   */
  shouldPreventClickOutside?: boolean
  /**
   * The transition classes to apply to the drawer
   */
  transitionClasses?: {
    enterActive?: string
    enterFrom?: string
    enterTo?: string
    leaveActive?: string
    leaveFrom?: string
    leaveTo?: string
  } | null
}
