<script setup lang="ts">
import type { TableColumn } from '@wisemen/vue-core'
import { AppTable, usePagination } from '@wisemen/vue-core'
import { computed, h } from 'vue'

import AgeCell from './AgeCell.vue'
import NameCell from './NameCell.vue'

interface ExampleData {
  age: number
  firstName: string
  lastName: string
}

const columns: TableColumn<ExampleData>[] = [
  {
    key: 'name',
    headerLabel: 'Name',
    cell: (row) => h(NameCell, {
      firstName: row.firstName,
      lastName: row.lastName,
    }),
  },
  {
    key: 'age',
    headerLabel: 'Age',
    cell: (row) => h(AgeCell, {
      age: row.age,
    }),
  },
]

const pagination = usePagination({
  id: 'example',
  disableRouteQuery: true,
  defaultPaginationOptions: {
    pagination: {
      perPage: 10,
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
  const { page, perPage } = pagination.paginationOptions.value.pagination

  return exampleData.slice(page * perPage, (page + 1) * perPage)
})
</script>

<template>
  <AppTable
    :columns="columns"
    :data="{
      data: currentPageData,
      total: exampleData.length,
    }"
    :pagination="pagination"
    class="max-h-[500px]"
  />
</template>
