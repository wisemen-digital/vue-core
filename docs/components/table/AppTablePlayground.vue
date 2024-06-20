<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type {
  PaginatedData,
  PaginationFilter,
  TableColumn,
} from '@wisemen/vue-core'
import {
  AppTable,
  AppText,
  usePagination,
} from '@wisemen/vue-core'
import { computed } from 'vue'

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
  isEmpty: {
    type: 'switch',
    default: false,
    label: 'Is empty',
  },
  isTopHidden: {
    type: 'switch',
    default: false,
    label: 'Hide top',
  },
})

interface ExampleDataType {
  hasDriversLicense: boolean
  age: number
  evenMoreData: string
  firstName: string
  lastName: string
  moreData: string
}

interface ExampleFilters {
  hasDriversLicense: boolean
  firstName: string
}

const emptyData = computed<PaginatedData<ExampleDataType>>(() => {
  return {
    data: [],
    total: 0,
  }
})

const exampleData = computed<PaginatedData<ExampleDataType>>(() => {
  return {
    data: [
      { firstName: 'John', lastName: 'Doe', age: 30, hasDriversLicense: true, moreData: 'more data', evenMoreData: 'even more data' },
      { firstName: 'Jane', lastName: 'Doe', age: 35, hasDriversLicense: false, moreData: 'more data', evenMoreData: 'even more data' },
      { firstName: 'James', lastName: 'Doe', age: 62, hasDriversLicense: true, moreData: 'more data', evenMoreData: 'even more data' },
    ],
    total: 3,
  }
})
const exampleColumns: TableColumn<ExampleDataType>[] = [
  {
    id: 'firstName',
    label: 'First Name',
    width: 'auto',
    isSortable: true,
    value: (row) => row.firstName,
  },
  {
    id: 'lastName',
    label: 'Last Name',
    width: '300px',
    value: (row) => row.lastName,
  },
  {
    id: 'age',
    label: 'Age',
    isSortable: true,
    width: '100px',
    value: (row) => `${row.age}`,
  },
  {
    id: 'hasDriversLicense',
    label: 'Drivers license?',
    width: 'auto',
    maxWidth: '100px',
    value: (row) => row.hasDriversLicense === true ? 'Yes' : 'No',
  },
  {
    id: 'moreData',
    label: 'More data',
    width: 'auto',
    value: (row) => row.moreData,
  },
  {
    id: 'evenMoreData',
    label: 'Even more data',
    width: 'auto',
    value: (row) => row.evenMoreData,
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

const filters: PaginationFilter<ExampleFilters>[] = [
  {
    id: 'firstName',
    label: 'First name',
    type: 'text',
    placeholder: 'Search first name',
  },
  {
    id: 'hasDriversLicense',
    label: 'Has drivers license?',
    type: 'boolean',
  },
]

function onRowClick(row: ExampleDataType): void {
  // eslint-disable-next-line no-alert
  alert(`Row clicked: ${row.firstName} ${row.lastName}`)
}
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div class="flex w-full flex-col">
        <AppTable
          v-bind="values"
          :data="values.isEmpty ? emptyData : exampleData"
          :columns="exampleColumns"
          :filters="filters"
          :pagination="pagination"
          :row-click="onRowClick"
        />

        <AppText
          variant="subtext"
          class="pt-3"
        >
          Pagination options: {{ pagination.paginationOptions.value }}
        </AppText>
      </div>
    </template>
  </ComponentPlayground>
</template>
