<script setup lang="ts" generic="TFilters">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppBadge from '@/components/badge/AppBadge.vue'
import AppSkeletonLoaderRow from '@/components/skeleton-loader/AppSkeletonLoaderRow.vue'
import AppTableFiltersPopover from '@/components/table/AppTableFiltersPopover.vue'
import AppTableSearchInput from '@/components/table/AppTableSearchInput.vue'
import {
  type TableStyleProps,
  useTableStyle,
} from '@/components/table/table.style'
import AppText from '@/components/text/AppText.vue'
import type {
  FilterValues,
  Pagination,
  PaginationFilter,
  PaginationFilters,
} from '@/types/pagination.type'
import { toLocaleNumber } from '@/utils/number.util'

const props = defineProps<{
  title: string
  hasSearch: boolean
  isLoading: boolean
  filters: PaginationFilter<TFilters>[]
  pagination: Pagination<TFilters>
  total: null | number
  variant: TableStyleProps['variant']
}>()

const { t } = useI18n()

const tableStyle = useTableStyle()

const topContainerClasses = computed<string>(() => tableStyle.topContainer({
  variant: props.variant,
}))
const topTitleClasses = computed<string>(() => tableStyle.topTitle())
const topBadgeClasses = computed<string>(() => tableStyle.topBadge())
const topSearchInputClasses = computed<string>(() => tableStyle.topSearchInput())
const topSkeletonRowClasses = computed<string>(() => tableStyle.topSkeletonRow())

function filterOutEmptyFilters([
  _key,
  value]: [string, any,
]): boolean {
  // Empty means `null`, `''`, `false` or empty array
  return value !== null
    && value !== ''
    && value !== false
    && (Array.isArray(value) ? value.length !== 0 : true)
}

function mergeFilter(filterKey: keyof TFilters, filterValue: FilterValues | null): PaginationFilters<TFilters> {
  const filters = props.pagination.paginationOptions.value.filters ?? {} as PaginationFilters<TFilters>

  filters[filterKey] = filterValue as PaginationFilters<TFilters>[keyof TFilters]

  const newFilters = Object.fromEntries(
    Object.entries(filters).filter(filterOutEmptyFilters),
  ) as PaginationFilters<TFilters>

  return newFilters
}

function onFilterChange(event: { key: keyof TFilters, value: FilterValues | null }): void {
  props.pagination.handleFilterChange(mergeFilter(event.key, event.value))
  props.pagination.handlePageChange({
    page: 0,
    perPage: props.pagination.paginationOptions.value.pagination.perPage,
  })
}

function onFilterClear(): void {
  props.pagination.clearFilters()
}
</script>

<template>
  <div :class="topContainerClasses">
    <AppText
      :class="topTitleClasses"
      variant="subtitle"
    >
      {{ props.title }}
    </AppText>

    <AppBadge
      v-if="props.total !== null"
      :class="topBadgeClasses"
    >
      {{ toLocaleNumber(props.total) }} {{ t('components.table.items', { count: props.total }) }}
    </AppBadge>

    <AppSkeletonLoaderRow
      v-else-if="props.isLoading"
      :class="topSkeletonRowClasses"
    />

    <div
      v-if="props.hasSearch"
      :class="topSearchInputClasses"
    >
      <AppTableSearchInput
        :pagination="props.pagination"
        :is-loading="props.isLoading"
      />
    </div>

    <div class="ml-auto">
      <AppTableFiltersPopover
        v-if="props.filters.length !== 0"
        :filters="props.filters"
        :pagination="props.pagination"
        @clear="onFilterClear"
        @filter="onFilterChange"
      />
    </div>
  </div>
</template>
