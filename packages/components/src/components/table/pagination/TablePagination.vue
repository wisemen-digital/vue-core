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

const tableContext = injectTableContext()

const limit = computed<number>(() => tableContext.pagination.value.paginationOptions.value.pagination.limit)

function onPageChange(page: number): void {
  tableContext.pagination.value.handlePageChange({
    limit: limit.value,
    offset: page - 1,
  })
}
</script>

<template>
  <PaginationRoot
    :page="tableContext.pagination.value.paginationOptions.value.pagination.offset + 1"
    :total="tableContext.data.value?.meta.total ?? 0"
    :sibling-count="2"
    :items-per-page="limit"
    :default-page="tableContext.pagination.value.paginationOptions.value.pagination.offset + 1"
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
      class="flex items-center"
    >
      <slot :items="items">
        <TablePaginationPrevPage class="mr-2" />
        <TablePaginationPages :items="items" />
        <TablePaginationNextPage class="ml-2" />
      </slot>
    </PaginationList>
  </PaginationRoot>
</template>
