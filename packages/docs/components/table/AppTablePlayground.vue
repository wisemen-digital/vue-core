<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'

import AppTable from '@/components/table/AppTable.vue'
import {
  type PaginatedData,
  type TableColumn,
  usePagination,
} from '@/index'

const controls = createControls({
  title: {
    default: 'Table title',
    cols: 2,
    label: 'Title',
    type: 'text',
  },
  shouldPinFirstColumn: {
    default: false,
    label: 'Pin first column',
    type: 'switch',
  },
  shouldPinLastColumn: {
    default: false,
    label: 'Pin last column',
    type: 'switch',
  },
  isLoading: {
    type: 'switch',
    default: false,
    label: 'Is loading',
  },
})

interface ExampleDataType {
  hasDriversLicense: boolean
  age: number
  firstName: string
  lastName: string
}
interface ExampleFilters {}

const exampleData: PaginatedData<ExampleDataType> = {
  data: [
    { firstName: 'John', lastName: 'Doe', age: 30, hasDriversLicense: true },
    { firstName: 'Jane', lastName: 'Doe', age: 35, hasDriversLicense: false },
    { firstName: 'James', lastName: 'Doe', age: 62, hasDriversLicense: true },
  ],
  total: 3,
}
const exampleColumns: TableColumn<ExampleDataType>[] = [
  {
    id: 'firstName',
    label: 'First Name',
    size: 'auto',
    value: row => row.firstName,
  },
  {
    id: 'lastName',
    label: 'Last Name',
    size: '300px',
    value: row => row.lastName,
  },
  {
    id: 'age',
    label: 'Age',
    size: '100px',
    value: row => `${row.age}`,
  },
  {
    id: 'hasDriversLicense',
    label: 'Drivers license?',
    size: 'auto',
    value: row => row.hasDriversLicense ? 'Yes' : 'No',
  },
]

const pagination = usePagination<ExampleFilters>({
  id: 'example',
  disableRouteQuery: true,
  defaultPaginationOptions: {
    pagination: {
      page: 0,
      perPage: 3,
    },
  },
})

function onRowClick(row: ExampleDataType) {
  // eslint-disable-next-line no-alert
  alert(`Row clicked: ${row.firstName} ${row.lastName}`)
}
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <AppTable
        v-bind="values"
        :data="exampleData"
        :columns="exampleColumns"
        :filters="[]"
        :pagination="pagination"
        :row-click="onRowClick"
      />
    </template>
  </ComponentPlayground>
</template>
