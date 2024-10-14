<script setup lang="ts">
import { h, ref } from 'vue'

import AppCheckbox from '@/components/checkbox/AppCheckbox.vue'
import AppTable from '@/components/table/AppTable.vue'
import AppTableCell from '@/components/table/AppTableCell.vue'
import AppTableHeaderCell from '@/components/table/AppTableHeaderCell.vue'
import { usePagination } from '@/composables/pagination.composable.js'
import TablePlaygroundCheckboxCell from '@/TablePlaygroundCheckboxCell.vue'
import type { TableColumn } from '@/types/table.type.js'

interface ExampleDataType {
  isMarried: boolean
  isWorking: boolean
  age: number
  canFly: boolean
  firstName: string
  lastName: string
}

const columns: TableColumn<ExampleDataType>[] = [
  {
    isSortable: true,
    cell: (row) => h(TablePlaygroundCheckboxCell, {
      label: row.firstName,
    }),
    header: (column) => h(AppTableHeaderCell, {
      column,
    }, {
      label: () => 'First name',
      left: () => h(AppCheckbox, {
        modelValue: false,
      }),
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
  {
    cell: (row) => h(AppTableCell, () => row.canFly ? 'Can fly' : 'Cannot fly'),
    headerLabel: 'Can fly',
    key: 'canFly',
    width: '100px',
  },
]

const data: ExampleDataType[] = [
  ...Array(50).fill(null).map((_, index) => ({
    isMarried: index % 2 === 0,
    isWorking: index % 2 === 0,
    age: index,
    canFly: index % 2 === 0,
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
        total: 200,
        data,
      }"
      :expanded-row-content="(row) => h('div', {
        class: 'p-2',
      }, `Custom content ${row.age}`)"
      :row-class="(row) => row.age > 40 ? 'bg-disabled cursor-not-allowed' : ''"
      class="table-borderless"
    />
  </div>
</template>
