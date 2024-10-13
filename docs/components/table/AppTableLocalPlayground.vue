<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type {
  PaginationFilter,
  TableColumn,
} from '@wisemen/vue-core'
import {
  AppTable,
  AppTableSearchInput,
  useLocalPagination,
} from '@wisemen/vue-core'
import { computed } from 'vue'

const controls = createControls({})

interface ExampleDataType {
  hasDriversLicense: boolean
  age: number
  firstName: string
  lastName: string
}

interface ExampleFilters {
  hasDriversLicense: boolean
  age: number
  firstName: string
  lastName: string
}

const exampleData = computed<ExampleDataType[]>(() => [
  { firstName: 'John', lastName: 'Doe', age: 30, hasDriversLicense: true },
  { firstName: 'Jane', lastName: 'Doe', age: 25, hasDriversLicense: false },
  { firstName: 'Alice', lastName: 'Smith', age: 35, hasDriversLicense: true },
  { firstName: 'Bob', lastName: 'Brown', age: 40, hasDriversLicense: false },
  { firstName: 'Charlie', lastName: 'White', age: 45, hasDriversLicense: true },
  { firstName: 'David', lastName: 'Black', age: 50, hasDriversLicense: false },
  { firstName: 'Eve', lastName: 'Green', age: 55, hasDriversLicense: true },
  { firstName: 'Frank', lastName: 'Yellow', age: 60, hasDriversLicense: false },
  { firstName: 'Grace', lastName: 'Red', age: 65, hasDriversLicense: true },
  { firstName: 'Hank', lastName: 'Blue', age: 70, hasDriversLicense: false },
  { firstName: 'Ivy', lastName: 'Purple', age: 75, hasDriversLicense: true },
  { firstName: 'Jack', lastName: 'Orange', age: 80, hasDriversLicense: false },
  { firstName: 'Kelly', lastName: 'Pink', age: 85, hasDriversLicense: true },
  { firstName: 'Liam', lastName: 'Grey', age: 90, hasDriversLicense: false },
  { firstName: 'Mia', lastName: 'Brown', age: 95, hasDriversLicense: true },
  { firstName: 'Noah', lastName: 'White', age: 100, hasDriversLicense: false },
  { firstName: 'Olivia', lastName: 'Black', age: 105, hasDriversLicense: true },
  { firstName: 'Parker', lastName: 'Green', age: 110, hasDriversLicense: false },
  { firstName: 'Quinn', lastName: 'Yellow', age: 115, hasDriversLicense: true },
  { firstName: 'Riley', lastName: 'Red', age: 120, hasDriversLicense: false },
  { firstName: 'Sophia', lastName: 'Blue', age: 125, hasDriversLicense: true },
  { firstName: 'Thomas', lastName: 'Purple', age: 130, hasDriversLicense: false },
  { firstName: 'Uma', lastName: 'Orange', age: 135, hasDriversLicense: true },
  { firstName: 'Vincent', lastName: 'Pink', age: 140, hasDriversLicense: false },
  { firstName: 'Wendy', lastName: 'Grey', age: 145, hasDriversLicense: true },
  { firstName: 'Xavier', lastName: 'Brown', age: 150, hasDriversLicense: false },
  { firstName: 'Yara', lastName: 'White', age: 155, hasDriversLicense: true },
  { firstName: 'Zane', lastName: 'Black', age: 160, hasDriversLicense: false },
])

const exampleColumns = computed<TableColumn<ExampleDataType>[]>(() => [
  {
    id: 'firstName',
    label: 'First Name',
    isSortable: true,
    width: 'auto',
    value: (row): string => row.firstName,
  },
  {
    id: 'lastName',
    label: 'Last Name',
    isSortable: true,
    width: 'auto',
    value: (row): string => row.lastName,
  },
  {
    id: 'hasDriversLicense',
    label: 'Has Drivers License',
    isSortable: true,
    width: 'auto',
    value: (row): string => (row.hasDriversLicense ? 'Yes' : 'No'),
  },
  {
    id: 'age',
    label: 'Age',
    isSortable: true,
    width: '100px',
    value: (row): string => `${row.age}`,
  },
])

const filters = computed<PaginationFilter<ExampleFilters>[]>(() => [
  {
    id: 'hasDriversLicense',
    type: 'select',
    label: 'Has Drivers License',
    placeholder: 'All',
    displayFn: (value): string => (value ? 'Yes' : 'No'),
    options: [
      { type: 'option', value: true },
      { type: 'option', value: false },
    ],
  },
  {
    id: 'age',
    type: 'number',
    label: 'Age',
    placeholder: 'Age',
  },
  {
    id: 'firstName',
    label: 'First Name',
    type: 'text',
    placeholder: 'First Name',
  },
  {
    placeholder: 'Last Name',
    type: 'text',
    label: 'Last Name',
    id: 'lastName',
  },
])

const localPagination = useLocalPagination<ExampleDataType, ExampleFilters>({
  id: 'example',
  items: exampleData,
  disableRouteQuery: true,
})

function onRowClick(row: ExampleDataType): void {
  // eslint-disable-next-line no-alert
  alert(`Row clicked: ${row.firstName} ${row.lastName}`)
}
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default>
      <div class="w-full space-y-4">
        {{ localPagination.pagination }}
        <AppTableSearchInput :pagination="localPagination.pagination" />
        <AppTable
          :is-loading="false"
          :data="localPagination.data.value"
          :columns="exampleColumns"
          :filters="filters"
          :pagination="localPagination.pagination"
          :row-click="onRowClick"
          title="Table"
        />
      </div>
    </template>
  </ComponentPlayground>
</template>
