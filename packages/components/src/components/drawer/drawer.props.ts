import type { StyleConfig } from '@/types/style.type'

export interface AppDrawerProps {
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
  animateFromTrigger?: boolean
  /**
   * Prevent clicks outside the drawer content to close the drawer
   * @default false
   */
  shouldPreventClickOutside?: boolean
  /**
   *
   */
  styleConfig?: StyleConfig<'drawer'> | null
}
