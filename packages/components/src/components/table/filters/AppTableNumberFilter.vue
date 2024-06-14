<script setup lang="ts" generic="TFilters">
import { ref, watch } from 'vue'

import FormNumberInput from '@/components/input/number/FormNumberInput.vue'
import type {
  Pagination,
  PaginationFilterNumber,
  PaginationOptions,
  TableFilterEvent,
} from '@/types/pagination.type'

const props = defineProps<{
  filter: PaginationFilterNumber<TFilters>
  pagination: Pagination<TFilters>
}>()

const emit = defineEmits<{
  change: [event: TableFilterEvent<TFilters>]
}>()

const filterModel = ref<number>(getValue(props.pagination.paginationOptions.value))

function getValue(value: PaginationOptions<TFilters>): number {
  const data = value.filters?.find((filter) => filter.key === props.filter.id)

  return Number(data?.value) ?? 0
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

function onUpdate(value: null | number): void {
  emit('change', { key: props.filter.id, value })
}
</script>

<template>
  <div>
    <FormNumberInput
      v-model="filterModel"
      :errors="null"
      :is-touched="false"
      :label="props.filter.label"
      :placeholder="props.filter.placeholder"
      :min="props.filter.min"
      :max="props.filter.max"
      :suffix="props.filter.suffix"
      @update:model-value="onUpdate"
    />
  </div>
</template>
