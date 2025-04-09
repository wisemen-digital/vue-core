<script setup lang="ts" generic="TSchema, TPagination extends BasePagination">
import { computed } from 'vue'

import type { CustomComponentVariant } from '@/class-variant/classVariant.type'
import {
  getCustomComponentVariant,
  mergeClasses,
} from '@/class-variant/customClassVariants'
import { useTable } from '@/components/table/table.composable'
import { useProvideTableContext } from '@/components/table/table.context'
import type { TableEmits } from '@/components/table/table.emits'
import type { TableProps } from '@/components/table/table.props'
import type { CreateTableStyle } from '@/components/table/table.style'
import { createTableStyle } from '@/components/table/table.style'
import type { TableColumn } from '@/components/table/table.type'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { BasePagination } from '@/composables/pagination/pagination.type'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<TableProps<TSchema, TPagination>>(), {
  isFirstColumnSticky: false,
  isLastColumnSticky: false,
  classConfig: null,
  rowAction: null,
  variant: null,
})

const emit = defineEmits<TableEmits>()

const isMaxWidthDefinedForAllColumns = props.columns.every((column) => (
  column.maxWidth !== undefined
))

if (isMaxWidthDefinedForAllColumns) {
  console.warn(
    'All columns have a maxWidth defined. This can restrict the table from expanding to fill available space, potentially causing layout issues. Consider leaving at least one column without a maxWidth to allow flexible sizing.',
  )
}

const { theme } = injectThemeProviderContext()

const {
  hasReachedHorizontalEnd,
  hasVerticalOverflow,
  isScrolledHorizontally,
  gridTemplateColumns,
  setTableScrollContainerRef,
} = useTable({
  columns: computed<TableColumn<TSchema>[]>(() => props.columns),
  rowCount: computed<number>(() => props.data?.data.length ?? 0),
  onNextPage: () => {
    emit('nextPage')
  },
})

const activeFilterCount = computed<number>(() => {
  const {
    filter, search,
  } = props.pagination.paginationOptions.value

  const hasActiveSearch = search !== undefined && search.length > 0

  let activeFilterCount = 0

  if (hasActiveSearch) {
    activeFilterCount += 1
  }

  if (filter === undefined) {
    return activeFilterCount
  }

  return Object.keys(filter).length + activeFilterCount
})

const isEmpty = computed<boolean>(() => {
  return props.data !== null && props.data.meta.total === 0 && !props.isLoading
})

const tableStyle = computed<CreateTableStyle>(() => createTableStyle({ variant: props.variant ?? undefined }))

const customClassConfig = computed<CustomComponentVariant<'table'>>(
  () => getCustomComponentVariant('table', theme.value, { variant: props.variant }),
)

function onClearFiltersAndSearch(): void {
  props.pagination.clearFilters()
  props.pagination.handleSearchChange('')
}

useProvideTableContext({
  ...toComputedRefs(props),
  hasReachedHorizontalEnd,
  hasVerticalOverflow,
  isEmpty,
  isScrolledHorizontally,
  activeFilterCount,
  customClassConfig,
  gridTemplateColumns,
  setTableScrollContainerRef,
  style: tableStyle,
  onClearFiltersAndSearch,
})
</script>

<template>
  <div
    :class="tableStyle.root({
      class: mergeClasses(customClassConfig?.root, props.classConfig?.root),
    })"
    role="table"
  >
    <slot />
  </div>
</template>
