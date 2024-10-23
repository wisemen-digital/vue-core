<script setup lang="ts" generic="TFilters, TValue extends string">
import FormMultiCombobox from '@/components/combobox/FormMultiCombobox.vue'
import type {
  Pagination,
  PaginationFilterWithMultiAutocomplete,
  TableFilterEvent,
} from '@/types/pagination.type'

const props = defineProps<{
  filter: PaginationFilterWithMultiAutocomplete<TFilters, TValue>
  pagination: Pagination<TFilters>
}>()

const emit = defineEmits<{
  change: [event: TableFilterEvent<TFilters>]
}>()

function onUpdateModelValue(value: { uuid: TValue, label: string }[]): void {
  const uuids = value.map((v) => v.uuid)

  emit('change', { key: props.filter.id, value: uuids.length > 0 ? uuids : null })
}
</script>

<template>
  <div>
    <FormMultiCombobox
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
