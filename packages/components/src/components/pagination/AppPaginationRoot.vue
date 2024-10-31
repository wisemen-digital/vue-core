<script setup lang="ts">
import { computed } from 'vue'

import { providePaginationContext } from '@/components/pagination/pagination.context'
import type {
  PageChangeEvent,
  Pagination,
} from '@/types/pagination.type'

const props = defineProps<{
  pagination: Pagination<unknown>
  total: number
}>()

const hasMoreThanOnePage = computed<boolean>(() => {
  return props.total > props.pagination.paginationOptions.value.pagination.perPage
})

function setPage(page: number): void {
  const updatedPaginationOptions = {
    ...props.pagination.paginationOptions.value.pagination,
    page,
  } as PageChangeEvent

  props.pagination.handlePageChange(updatedPaginationOptions)
}

providePaginationContext({
  hasMoreThanOnePage,
  page: computed<number>(() => props.pagination.paginationOptions.value.pagination.page),
  perPage: computed<number>(() => props.pagination.paginationOptions.value.pagination.perPage),
  total: computed<number>(() => props.total),
  totalPages: computed<number>(() => {
    return Math.ceil(props.total / props.pagination.paginationOptions.value.pagination.perPage)
  }),
  onPageChange: setPage,
})
</script>

<template>
  <slot />
</template>
