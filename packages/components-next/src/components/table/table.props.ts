import type {
  CustomizableElement,
  GetComponentProp,
} from '@/class-variant/classVariant.type'
import type { PublicProps } from '@/types/props.type'

export interface TableProps extends CustomizableElement<'table'> {
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
   * The grid template columns style for the table.
   */
  gridTemplateColumns: string
  /**
   * Defines the visual style of the table.
   */
  variant?: GetComponentProp<'table', 'variant'> | null
}

export type TablePublicProps = PublicProps<TableProps>
