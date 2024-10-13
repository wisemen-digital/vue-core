<script setup lang="ts">
import { h, ref } from 'vue'

import AppTable from '@/components/table/AppTable.vue'
import AppTableCell from '@/components/table/AppTableCell.vue'
import AppTableHeaderCell from '@/components/table/AppTableHeaderCell.vue'
import { usePagination } from '@/composables/pagination.composable.js'
import type { TableColumn } from '@/types/table.type.js'

interface ExampleDataType {
  isMarried: boolean
  isWorking: boolean
  age: number
  firstName: string
  lastName: string
}

const columns: TableColumn<ExampleDataType>[] = [
  {
    isSortable: true,
    cell: (row) => h(AppTableCell, () => row.firstName),
    header: (column) => h(AppTableHeaderCell, {
      column,
    }, {
      label: () => 'First name',
    }),
    key: 'firstName',
    width: '200px',
  },
  {
    isSortable: true,
    cell: (row) => h(AppTableCell, () => row.lastName),
    headerLabel: 'Last name',
    key: 'lastName',
    width: '200px',
  },
  {
    cell: (row) => h(AppTableCell, () => `${row.age} years old`),
    headerLabel: 'Age',
    key: 'age',
    width: '150px',
  },
  {
    cell: (row) => h(AppTableCell, () => row.isMarried ? 'Married' : 'Single'),
    headerLabel: 'Married',
    key: 'isMarried',
    width: '150px',
  },
  {
    cell: (row) => h(AppTableCell, () => row.isWorking ? 'Working' : 'Not working'),
    headerLabel: 'Working',
    key: 'isWorking',
  },
]

const data: ExampleDataType[] = [
  ...Array(50).fill(null).map((_, index) => ({
    isMarried: index % 2 === 0,
    isWorking: index % 2 === 0,
    age: index,
    firstName: 'John',
    lastName: 'Doe',
  })),
]

const pagination = usePagination({
  id: 'example',
  disableRouteQuery: true,
})

const isLoading = ref<boolean>(true)

setTimeout(() => {
  isLoading.value = false
}, 1000)
</script>

<template>
  <div class="flex h-screen flex-1 flex-col overflow-hidden px-24 py-12">
    <AppTable
      :columns="columns"
      :is-loading="isLoading"
      :pagination="pagination"
      :is-first-column-sticky="true"
      :is-last-column-sticky="true"
      :data=" {
        total: 92,
        data,
      }"
      :row-class="(row) => row.age > 40 ? 'bg-disabled-subtle cursor-not-allowed' : ''"
      class="table-borderless"
    />
  </div>
</template>
