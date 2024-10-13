import type { VNode } from 'vue'

export interface TableColumn<TSchema> {
  /**
   * The test id of the column
   * @default null
   */
  testId?: string
  /**
   * Whether the column is sortable
   * @default false
   */
  isSortable?: boolean
  /**
   * The cell render function of the column
   */
  cell: (row: TSchema) => VNode
  /**
   * The header render function of the column
   */
  header?: (column: TableColumn<TSchema>) => VNode
  /**
   * The header label of the column
   */
  headerLabel?: string
  /**
   * The key of the column
   */
  key: string
  /**
   * The maximum width of the column
   * @default 'auto
   */
  maxWidth?: string
  /**
   * The skeleton render function of the column
   */
  skeleton?: (row: TSchema) => VNode
  /**
   * The width of the column
   * @default 'min-content'
   */
  width?: string
}
