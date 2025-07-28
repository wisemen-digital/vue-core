<script setup lang="ts">
import type {
  PaginatedData,
  TableColumn,
} from '@wisemen/vue-core'
import {
  usePagination,
  VcTable,
  VcTableCell,
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
  ],
  meta: {
    total: 2,
    limit: 10,
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
  >
    <template #top>
      <h4 class="p-md font-semibold">
        Users
      </h4>
    </template>
  </VcTable>
</template>
