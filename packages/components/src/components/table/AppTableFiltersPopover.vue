<script setup lang="ts" generic="TFilters">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppButton from '@/components/button/AppButton.vue'
import AppIconButton from '@/components/button/AppIconButton.vue'
import AppPopover from '@/components/popover/AppPopover.vue'
import AppSelectDivider from '@/components/select/AppSelectDivider.vue'
import AppTableBooleanFilter from '@/components/table/filters/AppTableBooleanFilter.vue'
import AppTableMultiSelectFilter from '@/components/table/filters/AppTableMultiSelectFilter.vue'
import AppTableNumberFilter from '@/components/table/filters/AppTableNumberFilter.vue'
import AppTableSelectFilter from '@/components/table/filters/AppTableSelectFilter.vue'
import AppTableTextFilter from '@/components/table/filters/AppTableTextFilter.vue'
import { useTableStyle } from '@/components/table/table.style'
import AppText from '@/components/text/AppText.vue'
import type {
  Pagination,
  PaginationFilter,
  TableFilterEvent,
} from '@/types/pagination.type'

const props = defineProps<{
  filters: PaginationFilter<TFilters>[]
  pagination: Pagination<TFilters>
}>()

const emit = defineEmits<{
  clear: []
  filter: [event: TableFilterEvent<TFilters>]
}>()

const { t } = useI18n()

const filteredFilters = computed<PaginationFilter<TFilters>[]>(() => {
  return props.filters.filter((filter) => isFilterVisible(filter))
})

const numberOfActiveFilters = computed<number>(() => {
  return Object.keys(props.pagination.paginationOptions.value.filters ?? {}).length
})

function onFilterUpdate(event: TableFilterEvent<TFilters>): void {
  emit('filter', event)
}

function onClearAllButtonClick(): void {
  emit('clear')
}

function isFilterVisible(filter: PaginationFilter<TFilters>): boolean {
  return filter.isVisible === undefined || filter.isVisible
}

const tableStyle = useTableStyle()

const filterPopoverContainerClasses = computed<string>(() => tableStyle.filterPopoverContainer())
const filterPopoverContentContainerClasses = computed<string>(() => tableStyle.filterPopoverContentContainer())
const filterPopoverButtonClasses = computed<string>(() => tableStyle.filterPopoverButton())
const filterPopoverClearContainerClasses = computed<string>(() => tableStyle.filterPopoverClearContainer())
const filterPopoverClearTextClasses = computed<string>(() => tableStyle.filterPopoverClearText())
const filterPopoverActiveFiltersClasses = computed<string>(() => tableStyle.filterPopoverActiveFilters())
const filterPopoverClearButtonClasses = computed<string>(() => tableStyle.filterPopoverClearButton())
const filterPopoverFiltersContainerClasses = computed<string>(() => tableStyle.filterPopoverFiltersContainer())
</script>

<template>
  <AppPopover align="end">
    <template #default>
      <div :class="filterPopoverContainerClasses">
        <AppIconButton
          :class="filterPopoverButtonClasses"
          variant="ghost"
          icon="filterLines"
          icon-size="default"
          label="Filter"
        />
        <div
          v-if="numberOfActiveFilters > 0"
          :class="filterPopoverActiveFiltersClasses"
        >
          {{ numberOfActiveFilters }}
        </div>
      </div>
    </template>

    <template #content>
      <div
        :class="filterPopoverContentContainerClasses"
      >
        <div>
          <div :class="filterPopoverClearContainerClasses">
            <AppText
              :class="filterPopoverClearTextClasses"
              variant="body"
            >
              {{ t('shared.filters') }}
            </AppText>
            <AppButton
              :class="filterPopoverClearButtonClasses"
              size="sm"
              variant="ghost"
              @click="onClearAllButtonClick"
            >
              {{ t('shared.clear_all') }}
            </AppButton>
          </div>
          <AppSelectDivider direction="horizontal" />
          <div
            v-for="filter in filteredFilters"
            :key="filter.id"
            :class="filterPopoverFiltersContainerClasses"
          >
            <AppTableMultiSelectFilter
              v-if="filter.type === 'multiselect'"
              :filter="filter"
              :pagination="props.pagination"
              @change="onFilterUpdate"
            />
            <AppTableSelectFilter
              v-if="filter.type === 'select'"
              :filter="filter"
              :pagination="props.pagination"
              @change="onFilterUpdate"
            />
            <AppTableTextFilter
              v-if="filter.type === 'text'"
              :filter="filter"
              :pagination="props.pagination"
              @change="onFilterUpdate"
            />
            <AppTableBooleanFilter
              v-if="filter.type === 'boolean'"
              :filter="filter"
              :pagination="props.pagination"
              @change="onFilterUpdate"
            />
            <AppTableNumberFilter
              v-if="filter.type === 'number'"
              :filter="filter"
              :pagination="props.pagination"
              @change="onFilterUpdate"
            />
          </div>
        </div>
      </div>
    </template>
  </AppPopover>
</template>
