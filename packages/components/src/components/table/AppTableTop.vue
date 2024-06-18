<script setup lang="ts" generic="TFilters">
import { useDebounceFn } from '@vueuse/core'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppBadge from '@/components/badge/AppBadge.vue'
import AppInput from '@/components/input/AppInput.vue'
import AppSkeletonLoaderRow from '@/components/skeleton-loader/AppSkeletonLoaderRow.vue'
import AppTableFiltersPopover from '@/components/table/AppTableFiltersPopover.vue'
import AppText from '@/components/text/AppText.vue'
import type {
  FilterChangeEvent,
  FilterValues,
  Pagination,
  PaginationFilter,
  PaginationFilters,
} from '@/types/pagination.type'
import { toLocaleNumber } from '@/utils/number.util'

const props = defineProps<{
  title: string
  isLoading: boolean
  filters: PaginationFilter<TFilters>[]
  pagination: Pagination<TFilters>
  searchFilterKey?: keyof TFilters
  searchValue?: null | string
  total: null | number
}>()

const emit = defineEmits<{
  clear: []
  filter: [filters: FilterChangeEvent<TFilters>]
}>()

const { t } = useI18n()

const searchInputValue = computed<string>(() => {
  // const searchFilter = props.pagination.paginationOptions.value.filters?.find(
  //   (filter) => filter.key === props.searchFilterKey,
  // )

  // return searchFilter?.value?.toString() ?? ''

  const filters = props.pagination.paginationOptions.value.filters ?? {}

  return Object.entries(filters)
    .find(([
      key,
    ]) => key === props.searchFilterKey)
    ?.[1]?.toString() ?? ''
})

function mergeFilter(filterKey: keyof TFilters, filterValue: FilterValues | null): PaginationFilters<TFilters> {
  const filters = props.pagination.paginationOptions.value.filters ?? {} as PaginationFilters<TFilters>

  filters[filterKey] = filterValue as PaginationFilters<TFilters>[keyof TFilters]

  // Remove empty filters
  // Empty means `null`, `''` or `false`
  const newFilters = Object.fromEntries(
    Object.entries(filters)
      .filter(([
        _key,
        value,
      ]) => value !== null && value !== '' && value !== false),
  ) as PaginationFilters<TFilters>

  return newFilters
}

const debounceSearch = useDebounceFn((value: string) => {
  if (props.searchFilterKey === undefined) {
    throw new Error('Prop "searchFilterKey" is not defined')
  }

  emit('filter', mergeFilter(props.searchFilterKey, value))
}, 300)

async function onSearchInputUpdate(value: null | string): Promise<void> {
  if (value === null) {
    return
  }

  await debounceSearch(value)
}

function onFilterChange(event: { key: keyof TFilters, value: FilterValues | null }): void {
  emit('filter', mergeFilter(event.key, event.value))
}

function onFilterClear(): void {
  emit('clear')
}
</script>

<template>
  <div class="border-b border-solid border-border px-6 py-4">
    <div class="flex items-center gap-x-2">
      <AppText
        class="font-medium"
        variant="subtitle"
      >
        {{ props.title }}
      </AppText>

      <AppBadge
        v-if="props.total !== null"
        class="mt-0.5"
      >
        {{ toLocaleNumber(props.total) }} {{ t('components.table.items', { count: props.total }) }}
      </AppBadge>

      <AppSkeletonLoaderRow
        v-else-if="props.isLoading"
        class="mt-1 w-20"
      />

      <div class="ml-auto w-28 md:w-72">
        <AppInput
          v-if="props.searchFilterKey"
          id="search-input"
          :model-value="searchInputValue"
          :placeholder="t('shared.search')"
          :suffix-icon="props.isLoading ? 'loading' : undefined"
          prefix-icon="search"
          @update:model-value="onSearchInputUpdate"
        />
      </div>

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
