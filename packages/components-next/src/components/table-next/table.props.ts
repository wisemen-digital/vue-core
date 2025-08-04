import type {
  CustomizableElement,
  GetComponentProp,
} from '@/class-variant/classVariant.type'

export interface TableProps extends CustomizableElement<'tableNext'> {
  /**
   * Makes the first column sticky (fixed) when horizontally scrolling.
   * @default false
   */
  isFirstColumnSticky?: boolean
  /**
   * Makes the last column sticky (fixed) when horizontally scrolling.
   * @default false
   */
  isLastColumnSticky?: boolean
  /**
   * The grid template columns class for the table.
   */
  gridTemplateColumnsClass: string
  /**
   * Defines the visual style of the table.
   */
  variant?: GetComponentProp<'tableNext', 'variant'> | null
}
