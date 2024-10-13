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

const perPage = computed<number>(() => tableContext.pagination.value.paginationOptions.value.pagination.perPage)

function onPageChange(page: number): void {
  tableContext.pagination.value.handlePageChange({
    page: page - 1,
    perPage: perPage.value,
  })
}
</script>

<template>
  <PaginationRoot
    :page="tableContext.pagination.value.paginationOptions.value.pagination.page + 1"
    :total="tableContext.data.value?.total ?? 0"
    :sibling-count="2"
    :items-per-page="perPage"
    :default-page="tableContext.pagination.value.paginationOptions.value.pagination.page + 1"
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
