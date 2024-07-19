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
  variant: {
    default: 'default',
    items: [
      'default',
      'borderless',
    ],
    label: 'Variant',
    type: 'select',
  },
})

interface ExampleDataType {
  hasDriversLicense: boolean
  age: number
  firstName: string
  lastName: string
}

interface ExampleFilters {
  hasDriversLicense: boolean
  firstName: string
  moreData: string[]
}

const exampleData: PaginatedData<ExampleDataType> = {
  data: [
    { firstName: 'John', lastName: 'Doe', age: 30, hasDriversLicense: true },
    { firstName: 'Jane', lastName: 'Doe', age: 25, hasDriversLicense: false },
    { firstName: 'Alice', lastName: 'Smith', age: 35, hasDriversLicense: true },
    { firstName: 'Bob', lastName: 'Smith', age: 40, hasDriversLicense: false },
    { firstName: 'Charlie', lastName: 'Brown', age: 45, hasDriversLicense: true },
    { firstName: 'Daisy', lastName: 'Brown', age: 50, hasDriversLicense: false },
    { firstName: 'Eve', lastName: 'Johnson', age: 55, hasDriversLicense: true },
    { firstName: 'Frank', lastName: 'Johnson', age: 60, hasDriversLicense: false },
    { firstName: 'Grace', lastName: 'Williams', age: 65, hasDriversLicense: true },
    { firstName: 'Henry', lastName: 'Williams', age: 70, hasDriversLicense: false },
    { firstName: 'Ivy', lastName: 'Davis', age: 75, hasDriversLicense: true },
    { firstName: 'Jack', lastName: 'Davis', age: 80, hasDriversLicense: false },
    { firstName: 'Kelly', lastName: 'Martinez', age: 85, hasDriversLicense: true },
    { firstName: 'Liam', lastName: 'Martinez', age: 90, hasDriversLicense: false },
    { firstName: 'Mia', lastName: 'Garcia', age: 95, hasDriversLicense: true },
    { firstName: 'Noah', lastName: 'Garcia', age: 100, hasDriversLicense: false },
    { firstName: 'Olivia', lastName: 'Rodriguez', age: 105, hasDriversLicense: true },
    { firstName: 'Oliver', lastName: 'Rodriguez', age: 110, hasDriversLicense: false },
    { firstName: 'Sophia', lastName: 'Lopez', age: 115, hasDriversLicense: true },
    { firstName: 'William', lastName: 'Lopez', age: 120, hasDriversLicense: false },
    { firstName: 'Zoe', lastName: 'Hernandez', age: 125, hasDriversLicense: true },
    { firstName: 'Zach', lastName: 'Hernandez', age: 130, hasDriversLicense: false },
  ],
  total: 22,
}

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
]

const emptyData: PaginatedData<ExampleDataType> = {
  data: [],
  total: 0,
}

const pagination = usePagination<ExampleFilters>({
  id: 'example',
  disableRouteQuery: true,
  defaultPaginationOptions: {
    pagination: {
      page: 0,
      perPage: 10,
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
  {
    id: 'moreData',
    label: 'More data',
    type: 'multiselect',
    options: [
      {
        type: 'option',
        value: 'option1',
      },
      {
        type: 'option',
        value: 'option2',
      },
      {
        type: 'option',
        value: 'option3',
      },
    ],
    displayFn: (value: string) => value,
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
