<script setup lang="ts">
import type {
  PaginatedData,
  TableColumn,
} from '@wisemen/vue-core'
import {
  usePagination,
  VcButton,
  VcTable,
  VcTableCell,
  VcTablePaginationNextPage,
  VcTablePaginationPages,
  VcTablePaginationPrevPage,
} from '@wisemen/vue-core'
import type { VNode } from 'vue'
import {
  computed,
  h,
} from 'vue'

interface Filters {}
interface Index {
  name: string
}

const pagination = usePagination<Filters>({
  isRouteQueryEnabled: false,
  key: 'table',
  options: null,
})

const columns = computed<TableColumn<Index>[]>(() => [
  {
    cell: (row: Index): VNode => h(VcTableCell, null, {
      default: () => [
        h('p', null, row.name),
      ],
    }),
    headerLabel: 'Name',
    key: 'name',
    width: '30rem',
  },
])

const data: PaginatedData<Index> = {
  data: [
    {
      name: 'John Doe',
    },
    {
      name: 'Jane Doe',
    },
    {
      name: 'Jimmy Doe',
    },
  ],
  meta: {
    total: 3,
    limit: 2,
    offset: 0,
  },
}
</script>

<template>
  <VcTable
    :pagination="pagination"
    :is-loading="false"
    :columns="columns"
    :data="data"
    variant="borderless"
  >
    <template #top>
      <h4 class="p-md font-semibold">
        Users
      </h4>
    </template>
    <template #pagination="{ items }">
      <div class="flex gap-3">
        <VcTablePaginationPrevPage>
          <template #default="{ isFirstPage }">
            <VcButton
              :is-disabled="isFirstPage"
              variant="tertiary"
              class="border-primary rounded-full border border-solid"
            >
              PREV
            </VcButton>
          </template>
        </VcTablePaginationPrevPage>

        <VcTablePaginationPages :items="items">
          <template #item="{ page }">
            <VcButton
              class="
                size-10 rounded-full
                hover:bg-purple-700
              "
            >
              {{ page }}
            </VcButton>
          </template>
        </VcTablePaginationPages>

        <VcTablePaginationNextPage>
          <template #default="{ isLastPage }">
            <VcButton
              :is-disabled="isLastPage"
              class="border-primary rounded-full border border-solid"
            >
              NEXT
            </VcButton>
          </template>
        </VcTablePaginationNextPage>
      </div>
    </template>
  </VcTable>
</template>
