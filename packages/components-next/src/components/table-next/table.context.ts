import type { ComputedRef } from 'vue'

import type { ResolvedClassConfig } from '@/class-variant/classVariant.type'
import type { CreateTableStyle } from '@/components/table/table.style'
import type { TableProps } from '@/components/table-next/table.props'
import { useContext } from '@/composables/context/context.composable'
import type { PropsToComputed } from '@/utils/props.util'

interface TableContext extends PropsToComputed<TableProps> {
  hasReachedHorizontalEnd: ComputedRef<boolean>
  hasVerticalOverflow: ComputedRef<boolean>
  isScrolledHorizontally: ComputedRef<boolean>
  customClassConfig: ComputedRef<ResolvedClassConfig<'table'>>
  setTableScrollContainerRef: (el: HTMLElement) => void
  style: ComputedRef<CreateTableStyle>
}

export const [
  useProvideTableContext,
  useInjectTableContext,
] = useContext<TableContext>('tableContext')
