<script setup lang="ts" generic="TFilters">
import { useDebounceFn } from '@vueuse/core'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppInput from '@/components/input/AppInput.vue'
import type {
  Pagination,
} from '@/types/pagination.type'

const props = defineProps<{
  isLoading?: boolean
  pagination: Pagination<TFilters>
}>()

const { t } = useI18n()

const searchInputValue = computed<string>(() => {
  return props.pagination.paginationOptions.value.search ?? ''
})

const debounceSearch = useDebounceFn((value: string) => {
  props.pagination.handleSearchChange(value)
}, 300)

async function onSearchInputUpdate(value: null | string): Promise<void> {
  if (value === null) {
    return
  }

  await debounceSearch(value)
}
</script>

<template>
  <AppInput
    id="search-input"
    :model-value="searchInputValue"
    :placeholder="t('shared.search')"
    :suffix-icon="props.isLoading ? 'loading' : undefined"
    prefix-icon="search"
    @update:model-value="onSearchInputUpdate"
  />
</template>
