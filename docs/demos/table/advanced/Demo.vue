<script setup lang="ts">
import type { TableColumn } from '@wisemen/vue-core'
import {
  usePagination,
  VcTable,
  VcTablePageCount,
  VcTablePagination,
  VcTablePaginationFirstPage,
  VcTablePaginationLastPage,
  VcTablePaginationNextPage,
  VcTablePaginationPages,
  VcTablePaginationPrevPage,
} from '@wisemen/vue-core'
import {
  computed,
  h,
  ref,
} from 'vue'

import AgeCell from './AgeCell.vue'
import CheckboxCell from './CheckboxCell.vue'
import CheckboxHeaderCell from './CheckboxHeaderCell.vue'
import NameCell from './NameCell.vue'

interface ExampleData {
  age: number
  firstName: string
  lastName: string
}

const isLoading = ref<boolean>(true)

setTimeout(() => {
  isLoading.value = false
}, 1000)

const columns: TableColumn<ExampleData>[] = [
  {
    key: 'checkbox',
    header: (column) => h(CheckboxHeaderCell, {
      column,
    }),
    cell: () => h(CheckboxCell),
    maxWidth: '50px',
    width: '50px',
  },
  {
    key: 'name',
    headerLabel: 'Name',
    isSortable: true,
    cell: (row) => h(NameCell, {
      firstName: row.firstName,
      lastName: row.lastName,
    }),
  },
  {
    key: 'age',
    headerLabel: 'Age',
    isSortable: true,
    cell: (row) => h(AgeCell, {
      age: row.age,
    }),
  },
]

const pagination = usePagination({
  isRouteQueryEnabled: false,
  // Can also be a made reactive by providing a function
  options: {
    pagination: {
      limit: 10,
    },
  },
})

const exampleData: ExampleData[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
  },
  {
    firstName: 'Alice',
    lastName: 'Smith',
    age: 35,
  },
  {
    firstName: 'Bob',
    lastName: 'Brown',
    age: 40,
  },
  {
    firstName: 'Zane',
    lastName: 'Black',
    age: 160,
  },
  {
    firstName: 'Madison',
    lastName: 'White',
    age: 30,
  },
  {
    firstName: 'Olivia',
    lastName: 'Rodriguez',
    age: 45,
  },
  {
    firstName: 'Sophia',
    lastName: 'Lopez',
    age: 120,
  },
  {
    firstName: 'James',
    lastName: 'Davis',
    age: 40,
  },
  {
    firstName: 'Noah',
    lastName: 'Thomas',
    age: 50,
  },
  {
    firstName: 'Oliver',
    lastName: 'Evans',
    age: 55,
  },
  {
    firstName: 'Ava',
    lastName: 'Williams',
    age: 60,
  },
  {
    firstName: 'Emily',
    lastName: 'Brown',
    age: 65,
  },
  {
    firstName: 'Charlie',
    lastName: 'Davis',
    age: 70,
  },
  {
    firstName: 'Amelia',
    lastName: 'Jefferson',
    age: 75,
  },
  {
    firstName: 'Isabella',
    lastName: 'Lee',
    age: 80,
  },
  {
    firstName: 'Elizabeth',
    lastName: 'Imhoff',
    age: 85,
  },
]

const currentPageData = computed<ExampleData[]>(() => {
  const { offset, limit } = pagination.paginationOptions.value.pagination

  return exampleData.slice(offset * limit, (offset + 1) * limit)
})
</script>

<template>
  <VcTable
    :columns="columns"
    :data="{
      data: currentPageData,
      meta: {
        total: exampleData.length,
        limit: 10,
        offset: 0,
      },
    }"
    :is-loading="isLoading"
    :pagination="pagination"
    class="max-h-[500px]"
    variant="borderless"
  >
    <template #top>
      <div class="px-3xl py-xl">
        <span class="font-bold">
          Users ({{ exampleData.length }})
        </span>
      </div>
    </template>

    <template #bottom>
      <div class="flex w-full items-center justify-between">
        <VcTablePagination v-slot="{ items }">
          <div class="flex gap-x-1">
            <VcTablePaginationFirstPage />
            <VcTablePaginationPrevPage />
            <VcTablePaginationPages :items="items" />
            <VcTablePaginationNextPage />
            <VcTablePaginationLastPage />
          </div>
        </VcTablePagination>

        <VcTablePageCount />
      </div>
    </template>
  </VcTable>
</template>
