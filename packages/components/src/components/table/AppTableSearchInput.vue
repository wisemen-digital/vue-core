<script setup lang="ts" generic="TFilters">
import { useDebounceFn } from '@vueuse/core'
import { useId } from 'radix-vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppInput from '@/components/input/AppInput.vue'
import type {
  Pagination,
} from '@/types/pagination.type'

const props = defineProps<{
  /**
   * The id of the input.
   * @default null
   */
  id?: string | null
  /**
   * Whether the input is loading.
   * @default false
   */
  isLoading?: boolean
  /**
   * pagination object
   */
  pagination: Pagination<TFilters>
  /**
   * The placeholder of the input.
   * @default t('components.table.search_placeholder')
   */
  placeholder?: string
}>()

const { t } = useI18n()

const id = props.id ?? useId()

const searchInputValue = computed<string>(() => {
  return props.pagination.paginationOptions.value.search ?? ''
})

const isLoading = computed<boolean>(() => {
  return props.isLoading && searchInputValue.value.trim().length > 0
})

const debounceSearch = useDebounceFn((value: string) => {
  props.pagination.handleSearchChange(value)
}, 300)

async function onSearchInputUpdate(value: string | null): Promise<void> {
  if (value === null) {
    return
  }

  await debounceSearch(value)
}
</script>

<template>
  <AppInput
    :id="id"
    :is-loading="isLoading"
    :model-value="searchInputValue"
    :placeholder="props.placeholder ?? t('components.table.search_placeholder')"
    icon-left="search"
    @update:model-value="onSearchInputUpdate"
  />
</template>
