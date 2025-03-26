<script setup lang="ts">
import { PaginationNext } from 'reka-ui'
import { computed } from 'vue'

import IconButton from '@/components/button/icon-button/IconButton.vue'
import { injectTableContext } from '@/components/table/table.context'
import type { PaginationSet } from '@/types/pagination.type'

defineSlots<{
  /**
   * Use this to render your own pagination control to go to the next page.
   */
  default: ({ isLastPage }: { isLastPage: boolean }) => void
}>()

const tableContext = injectTableContext()

const totalPages = computed<number>(() => {
  const total = tableContext.data.value?.meta?.total ?? 0
  const limit = tableContext.pagination.value.paginationOptions.value.pagination.limit

  return Math.ceil(total / limit)
})

const pagination = computed<PaginationSet>(() => tableContext.pagination.value.paginationOptions.value.pagination)

const isLastPage = computed<boolean>(() => {
  if ('offset' in pagination.value) {
    return (pagination.value.offset / pagination.value.limit) === totalPages.value - 1
  }

  throw new Error('This component only supports offset pagination')
})
</script>

<template>
  <PaginationNext :as-child="true">
    <slot :is-last-page="isLastPage">
      <IconButton
        :is-disabled="isLastPage"
        variant="secondary"
        size="sm"
        icon="chevronRight"
        label="Next page"
      />
    </slot>
  </PaginationNext>
</template>
