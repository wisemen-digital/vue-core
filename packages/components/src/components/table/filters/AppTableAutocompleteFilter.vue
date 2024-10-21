<script setup lang="ts" generic="TFilters, TValue extends (string | void)">
import FormCombobox from '@/components/combobox/FormCombobox.vue'
import type {
  FilterValues,
  Pagination,
  PaginationFilterWithAutocomplete,
  TableFilterEvent,
} from '@/types/pagination.type'

const props = defineProps<{
  filter: PaginationFilterWithAutocomplete<TFilters, TValue>
  pagination: Pagination<TFilters>
}>()

const emit = defineEmits<{
  change: [event: TableFilterEvent<TFilters>]
}>()

function onUpdateModelValue(value: { uuid: TValue, label: string }): void {
  emit('change', { key: props.filter.id, value: value.uuid as FilterValues })
}
</script>

<template>
  <div>
    <FormCombobox
      :filter-fn="props.filter.filterFn"
      :display-fn="props.filter.displayFn"
      :is-touched="false"
      :items="props.filter.items"
      :errors="null"
      :placeholder="props.filter.placeholder"
      :label="props.filter.label"
      :model-value="props.filter.modelValue"
      @update:model-value="onUpdateModelValue"
      @update:search="props.filter.onSearch"
    />
  </div>
</template>
