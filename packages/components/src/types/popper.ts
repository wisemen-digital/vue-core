export type PopperAlign = 'center' | 'end' | 'start'
export type PopperSide = 'bottom' | 'left' | 'right' | 'top'
export type PopperWidth = 'anchor-width' | 'available-width'

export interface PopperProps {
  /**
   * When true, the arrow will be hidden.
   * @default false
   */
  isArrowHidden?: boolean
  /**
   * The alignment of the popper content.
   * @default 'center'
   */
  popoverAlign?: PopperAlign
  /**
   * The padding of the popper collision.
   */
  popoverCollisionPaddingInPx?: number
  /**
   * The element to render the tooltip in. By default this is the viewport
   */
  popoverContainerElement?: HTMLElement | null
  /**
   * The offset of the popper content.
   */
  popoverOffsetInPx?: number
  /**
   * The side of the trigger the tooltip should be on.
   * @default 'top'
   */
  popoverSide?: 'bottom' | 'left' | 'right' | 'top'
  /**
   * The width of the popper.
   */
  popoverWidth?: PopperWidth | null
}
