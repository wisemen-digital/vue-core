import type { ComputedRef } from 'vue'

import type { TableProps } from '@/components/table/table.props'
import type { CreateTableStyle } from '@/components/table/table.style'
import { useContext } from '@/composables/context/context.composable'
import type { ClassConfig } from '@/customClassVariants'
import type { PropsToComputed } from '@/utils/props.util'

interface TableContext extends PropsToComputed<TableProps<any, any>> {
  hasReachedHorizontalEnd: ComputedRef<boolean>
  hasVerticalOverflow: ComputedRef<boolean>
  isEmpty: ComputedRef<boolean>
  isScrolledHorizontally: ComputedRef<boolean>
  activeFilterCount: ComputedRef<number>
  customClassConfig: ComputedRef<ClassConfig<'table'>>
  gridTemplateColumns: ComputedRef<string>
  setTableScrollContainerRef: (el: HTMLElement) => void
  style: ComputedRef<CreateTableStyle>
  onClearFiltersAndSearch: () => void
}

export const [
  useProvideTableContext,
  useInjectTableContext,
] = useContext<TableContext>('tableContext')
