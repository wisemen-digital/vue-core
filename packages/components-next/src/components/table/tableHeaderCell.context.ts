import type { ComputedRef } from 'vue'

import type { TableColumn } from '@/components/table/table.type'
import { useContext } from '@/composables/context/context.composable'

interface TableHeaderCellContext {
  column: ComputedRef<TableColumn<any>>
}

export const [
  useProvideTableHeaderCellContext,
  useInjectTableHeaderCellContext,
] = useContext<TableHeaderCellContext>('TableHeaderCell')
