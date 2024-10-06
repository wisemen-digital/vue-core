export type PopoverAlign = 'center' | 'end' | 'start'
export type PopoverSide = 'bottom' | 'left' | 'right' | 'top'
export type PopoverWidth = 'anchor-width' | 'available-width'

export interface PopoverProps {
  /**
   * When true, the arrow will be hidden.
   * @default false
   */
  isArrowHidden?: boolean
  /**
   * The alignment of the popover content.
   * @default 'center'
   */
  align?: PopoverAlign
  /**
   * The padding of the popover collision.
   */
  collisionPaddingInPx?: number
  /**
   * The element to render the tooltip in. By default this is the viewport
   */
  containerElement?: HTMLElement | null
  /**
   * The offset of the popover content.
   */
  offsetInPx?: number
  /**
   * The width of the popover.
   */
  popoverWidth?: PopoverWidth | null
  /**
   * The side of the trigger the tooltip should be on.
   * @default 'top'
   */
  side?: 'bottom' | 'left' | 'right' | 'top'
}
