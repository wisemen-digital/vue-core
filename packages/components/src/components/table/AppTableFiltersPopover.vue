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
  return props.pagination.paginationOptions.value.filters?.length ?? 0
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
</script>

<template>
  <AppPopover align="end">
    <template #default>
      <div class="relative">
        <AppIconButton
          variant="ghost"
          class="w-10 !border-border"
          icon="filterLines"
          icon-size="default"
          label="Filter"
        />
        <div
          v-if="numberOfActiveFilters > 0"
          class="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-primary text-xs text-white"
        >
          {{ numberOfActiveFilters }}
        </div>
      </div>
    </template>

    <template #content>
      <div
        class="border border-solid border-border bg-white rounded-md p-2"
      >
        <div>
          <div class="flex items-center justify-between gap-10 py-2 pr-6 pl-2">
            <AppText
              variant="body"
              class="font-medium"
            >
              {{ t('shared.filters') }}
            </AppText>
            <AppButton
              class="text-primary"
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
            class="p-2"
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
