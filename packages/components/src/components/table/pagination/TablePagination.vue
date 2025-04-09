<script setup lang="ts">
import {
  PaginationList,
  PaginationRoot,
} from 'reka-ui'
import { computed } from 'vue'

import SkeletonItem from '@/components/skeleton/SkeletonItem.vue'
import TablePaginationNextPage from '@/components/table/pagination/TablePaginationNextPage.vue'
import TablePaginationPages from '@/components/table/pagination/TablePaginationPages.vue'
import TablePaginationPrevPage from '@/components/table/pagination/TablePaginationPrevPage.vue'
import { injectTableContext } from '@/components/table/table.context'
import type { PaginationSet } from '@/types/pagination.type'

defineSlots<{
  /**
   * Use this to render your own pagination controls.
   */
  default: ({ items }: { items: ({ type: 'ellipsis' } | { type: 'page'
    value: number })[] }) => void
}>()

const tableContext = injectTableContext()

const pagination = computed<PaginationSet>(() => tableContext.pagination.value.paginationOptions.value.pagination)

const limit = computed<number>(() => pagination.value.limit)

const offset = computed<number>(() => {
  if ('offset' in pagination.value) {
    return (pagination.value.offset ?? 0) / limit.value
  }

  throw new Error('This component only supports offset pagination')
})

function onPageChange(page: number): void {
  tableContext.pagination.value.handlePageChange({
    limit: limit.value,
    offset: (page - 1) * limit.value,
  })
}
</script>

<template>
  <PaginationRoot
    :page="offset + 1"
    :total="tableContext.data.value?.meta?.total ?? 0"
    :sibling-count="2"
    :items-per-page="limit"
    :default-page="offset + 1"
    :show-edges="true"
    aria-label="Pagination"
    @update:page="onPageChange"
  >
    <SkeletonItem
      v-if="tableContext.isLoading.value"
      :should-shimmer="true"
      class="h-4 w-20 rounded"
    />

    <PaginationList
      v-else
      v-slot="{ items }"
      class="flex items-center gap-x-0.5"
    >
      <slot :items="items">
        <TablePaginationPrevPage class="mr-1" />
        <TablePaginationPages :items="items" />
        <TablePaginationNextPage class="ml-1" />
      </slot>
    </PaginationList>
  </PaginationRoot>
</template>
