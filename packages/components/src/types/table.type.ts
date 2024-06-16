import type { VNode } from 'vue'

export interface TableEmptyTextProp {
  noData: {
    title: string
    message: string
  }
  noResults: {
    title: string
    message: string
  }
}

interface BaseTableColumn {
  id: string
  isSortable?: boolean
  label: string
  maxWidth?: string
  width: string
}

interface TableColumnWithRender<TSchema> extends BaseTableColumn {
  render: (row: TSchema) => VNode
  value?: never
}

interface TableColumnWithValue<TSchema> extends BaseTableColumn {
  render?: never
  value: (row: TSchema) => string
}

export type TableColumn<TSchema> = TableColumnWithRender<TSchema> | TableColumnWithValue<TSchema>
