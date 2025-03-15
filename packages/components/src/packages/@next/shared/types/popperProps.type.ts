export type PopperAlign = 'center' | 'end' | 'start'
export type PopperSide = 'bottom' | 'left' | 'right' | 'top'
export type PopperWidth = 'anchor-width' | 'available-width'

export interface PopperProps {
  /**
   * Defines how the popper content is aligned relative to the trigger element.
   */
  popoverAlign?: PopperAlign

  /**
   * Specifies the padding (in pixels) used when handling collision detection.
   * A larger value increases the spacing between the popper and the container edges.
   */
  popoverCollisionPaddingInPx?: number

  /**
   * The HTML element in which the popper content should be rendered.
   * By default, the popper content is rendered inside the viewport.
   */
  popoverContainerElement?: HTMLElement | null

  /**
   * The distance (in pixels) between the popper content and the trigger element.
   */
  popoverOffsetInPx?: number

  /**
   * Defines which side the content should appear on.
   */
  popoverSide?: PopperSide

  /**
   * Determines the width of the popper content.
   * - `anchor-width`: Matches the width of the trigger element.
   * - `available-width`: Expands to fit the available space.
   * - `null`: Uses the natural width of the content.
   */
  popoverWidth?: PopperWidth | null
}

export interface PopperPropsWithArrowHiddenByDefault extends PopperProps {
  /**
   * Controls the visibility of the popper arrow.
   * @default false
   */
  isArrowVisible?: boolean
}

export interface PopperPropsWithArrowVisibleByDefault extends PopperProps {
  /**
   * Controls the visibility of the popper arrow.
   * @default false
   */
  isArrowHidden?: boolean
}
