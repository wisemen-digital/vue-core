<script setup lang="ts" generic="TFilters">
import {
  computed,
  ref,
  watch,
} from 'vue'

import FormCheckbox from '@/components/checkbox/FormCheckbox.vue'
import { useTableStyle } from '@/components/table/table.style'
import type {
  Pagination,
  PaginationFilterBoolean,
  PaginationOptions,
  TableFilterEvent,
} from '@/types/pagination.type'

const props = defineProps<{
  filter: PaginationFilterBoolean<TFilters>
  pagination: Pagination<TFilters>
}>()

const emit = defineEmits<{
  change: [event: TableFilterEvent<TFilters>]
}>()

const filterModel = ref<boolean>(getValue(props.pagination.paginationOptions.value))

function getValue(value: PaginationOptions<TFilters>): boolean {
  const data = value.filters?.find((filter) => filter.key === props.filter.id)

  return (Boolean(data?.value))
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

function onUpdate(value: boolean): void {
  emit('change', { key: props.filter.id, value })
}

const tableStyle = useTableStyle()

const filterBooleanOptionClasses = computed<string>(() => tableStyle.filterBooleanOption())
</script>

<template>
  <div :class="filterBooleanOptionClasses">
    <FormCheckbox
      v-model="filterModel"
      :label="props.filter.label"
      @update:model-value="onUpdate"
    />
  </div>
</template>
