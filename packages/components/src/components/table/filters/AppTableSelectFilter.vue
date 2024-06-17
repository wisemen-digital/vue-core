<script setup lang="ts" generic="TFilters">
import { ref, watch } from 'vue'

import FormSelect from '@/components/select/FormSelect.vue'
import type {
  FilterValues,
  Pagination,
  PaginationFilterWithSingleOption,
  PaginationOptions,
  TableFilterEvent,
} from '@/types/pagination.type'

const props = defineProps<{
  filter: PaginationFilterWithSingleOption<TFilters>
  pagination: Pagination<TFilters>
}>()

const emit = defineEmits<{
  change: [event: TableFilterEvent<TFilters>]
}>()

const filterModel = ref<string>(getValue(props.pagination.paginationOptions.value))

function getValue(value: PaginationOptions<TFilters>): string {
  const data = value.filters?.find((filter) => filter.key === props.filter.id)

  return data?.value?.toString() ?? ''
}

watch(
  () => props.pagination.paginationOptions.value,
  (value) => {
    filterModel.value = getValue(value)
  },
)

watch(
  () => filterModel.value,
  (value) => {
    emit('change', { key: props.filter.id, value })
  },
)

function onUpdate(value: FilterValues | null): void {
  emit('change', { key: props.filter.id, value })
}
</script>

<template>
  <div>
    <FormSelect
      v-model="filterModel"
      :display-fn="(option) => props.filter.displayFn(option)"
      :errors="null"
      :is-touched="false"
      :items="props.filter.options"
      :label="props.filter.label"
      :placeholder="props.filter.placeholder"
      @update:model-value="onUpdate"
    />
  </div>
</template>
