<script setup lang="ts" generic="TFilters, TValue extends string = string">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppButton from '@/components/button/AppButton.vue'
import AppIconButton from '@/components/button/AppIconButton.vue'
import AppPopover from '@/components/popover/AppPopover.vue'
import AppSelectDivider from '@/components/select/AppSelectDivider.vue'
import AppTableAutocompleteFilter from '@/components/table/filters/AppTableAutocompleteFilter.vue'
import AppTableBooleanFilter from '@/components/table/filters/AppTableBooleanFilter.vue'
import AppTableMultiAutocompleteFilter from '@/components/table/filters/AppTableMultiAutocompleteFilter.vue'
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
  /**
   * The filters to be shown
   */
  filters: PaginationFilter<TFilters, TValue>[]
  /**
   * Your pagination informations
   */
  pagination: Pagination<TFilters>
}>()

const emit = defineEmits<{
  clear: []
  filter: [event: TableFilterEvent<TFilters>]
}>()

const { t } = useI18n()

const filteredFilters = computed<PaginationFilter<TFilters, TValue>[]>(() => {
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

function isFilterVisible(filter: PaginationFilter<TFilters, TValue>): boolean {
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
  <AppPopover
    :offset="4"
    align="end"
    is-close-button-hidden
    hide-arrow
  >
    <template #default>
      <div :class="filterPopoverContainerClasses">
        <AppIconButton
          :class="filterPopoverButtonClasses"
          variant="input-outline"
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
        <div
          v-for="filter in filteredFilters"
          :key="filter.id"
        >
          <AppSelectDivider
            direction="horizontal"
          />
          <div
            :class="filterPopoverFiltersContainerClasses"
          >
            <AppTableMultiAutocompleteFilter
              v-if="filter.type === 'multi-autocomplete'"
              :filter="filter"
              :pagination="props.pagination"
              @change="onFilterUpdate"
            />
            <AppTableAutocompleteFilter
              v-if="filter.type === 'autocomplete'"
              :filter="filter"
              :pagination="props.pagination"
              @change="onFilterUpdate"
            />
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
