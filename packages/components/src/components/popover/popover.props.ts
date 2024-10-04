import type { PopoverWidth } from '@/types/popover.type'

export interface AppPopoverProps {
  /**
   * When true, the arrow will be hidden.
   * @default false
   */
  isArrowHidden?: boolean
  /**
   * The alignment of the popover content.
   * @default 'center'
   */
  align?: 'center' | 'end' | 'start'
  /**
   * The padding of the popover collision.
   * @default 10
   */
  collisionPaddingInPx?: number
  /**
   * The offset of the popover content.
   * @default 10
   */
  offsetInPx?: number
  /**
   * The popover css classes. This is useful when you want to add custom styles to the popover
   * because otherwise css variables are not injected since the popover is rendered in a portal.
   * @default null
   */
  popoverClass?: null | string
  /**
   * The width of the popover.
   * @default 'available-width'
   */
  popoverWidth?: PopoverWidth | null
  /**
   * The side of the trigger the popover should be on.
   * @default 'bottom'
   */
  side?: 'bottom' | 'left' | 'right' | 'top'
}

export const appPopoverPropsDefaultValues = {
  isArrowHidden: false,
  align: 'center',
  collisionPaddingInPx: 10,
  offsetInPx: 10,
  popoverClass: null,
  popoverWidth: null,
  side: 'bottom',
} satisfies Partial<AppPopoverProps>
