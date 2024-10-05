import type { PopoverWidth } from '@/types/popover.type'
import type { StyleConfig } from '@/types/style.type'

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
   * The width of the popover.
   * @default 'available-width'
   */
  popoverWidth?: PopoverWidth | null
  /**
   * The side of the trigger the popover should be on.
   * @default 'bottom'
   */
  side?: 'bottom' | 'left' | 'right' | 'top'
  /**
   *
   */
  styleConfig?: StyleConfig<'popover'> | null
}

export const appPopoverPropsDefaultValues = {
  isArrowHidden: false,
  align: 'center',
  collisionPaddingInPx: 10,
  offsetInPx: 10,
  popoverWidth: null,
  side: 'bottom',
  styleConfig: null,
} satisfies Partial<AppPopoverProps>
