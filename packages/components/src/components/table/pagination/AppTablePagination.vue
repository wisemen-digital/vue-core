<script setup lang="ts">
import {
  PaginationList,
  PaginationRoot,
} from 'reka-ui'
import { computed } from 'vue'

import AppSkeletonItem from '@/components/skeleton/AppSkeletonItem.vue'
import AppTablePaginationNextPage from '@/components/table/pagination/AppTablePaginationNextPage.vue'
import AppTablePaginationPages from '@/components/table/pagination/AppTablePaginationPages.vue'
import AppTablePaginationPrevPage from '@/components/table/pagination/AppTablePaginationPrevPage.vue'
import { injectTableContext } from '@/components/table/table.context.js'

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
    @update:page="onPageChange"
  >
    <AppSkeletonItem
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
        <AppTablePaginationPrevPage class="mr-2" />
        <AppTablePaginationPages :items="items" />
        <AppTablePaginationNextPage class="ml-2" />
      </slot>
    </PaginationList>
  </PaginationRoot>
</template>
