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
  age: number
}

const pagination = usePagination<Filters>({
  isRouteQueryEnabled: false,
  key: 'table',
  options: null,
})

const columns = computed<TableColumn<Index>[]>(() => [
  {
    cell: (row: Index): VNode => h(
      VcTableCell,
      { isPrimaryCell: true },
      {
        default: () => [
          h('p', null, row.name),
        ],
      },
    ),
    headerLabel: 'Name',
    key: 'name',
    width: '10rem',
  },
  {
    cell: (row: Index): VNode => h(
      VcTableCell,
      null,
      { default: () => `${row.age} years old` },
    ),
    headerLabel: 'Age',
    key: 'name',
    width: '10rem',
  },
])

const data: PaginatedData<Index> = {
  data: [
    {
      name: 'John Doe',
      age: 30,
    },
    {
      name: 'Jane Doe',
      age: 25,
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
    variant="borderless"
  />
</template>
