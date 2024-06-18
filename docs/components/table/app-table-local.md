---
sidebar: auto
---


# AppTable (Local)
<script setup>
import AppTableLocalPlayground from './AppTableLocalPlayground.vue'
</script>

<AppTableLocalPlayground />

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import type { TableColumn } from '@wisemen/vue-core'
import {
  AppTable,
  useLocalPagination,
} from '@wisemen/vue-core'
  
interface ExampleDataType {
  hasDriversLicense: boolean
  age: number
  firstName: string
  lastName: string
}

interface ExampleFilters {}

const exampleData: ExampleDataType[] = [
  { firstName: 'John', lastName: 'Doe', age: 30, hasDriversLicense: true },
  { firstName: 'Jane', lastName: 'Doe', age: 25, hasDriversLicense: false },
  { firstName: 'Alice', lastName: 'Smith', age: 35, hasDriversLicense: true },
  { firstName: 'Bob', lastName: 'Brown', age: 40, hasDriversLicense: false },
  { firstName: 'Zane', lastName: 'Black', age: 160, hasDriversLicense: false },
]

const exampleColumns: TableColumn<ExampleDataType>[] = [
  {
    id: 'firstName',
    label: 'First Name',
    isSortable: true,
    width: 'auto',
    value: (row) => row.firstName,
  },
  {
    id: 'age',
    label: 'Age',
    isSortable: true,
    width: '100px',
    value: (row) => `${row.age}`,
  },
]

const localPagination = useLocalPagination<ExampleDataType, ExampleFilters>({
  id: 'example',
  items: exampleData,
  disableRouteQuery: true,
  defaultPaginationOptions: {
    pagination: {
      page: 0,
      perPage: 10,
    },
  },
})

function onRowClick(row: ExampleDataType): void {
  // eslint-disable-next-line no-alert
  alert(`Row clicked: ${row.firstName} ${row.lastName}`)
}
</script>

<template>
  <AppTable 
      :is-loading="false" 
      :data="localPagination.data.value" 
      :columns="exampleColumns"
      :filters="[]"
      :pagination="localPagination.pagination"
      :row-click="onRowClick"
      title="Table"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/table/AppTable.vue).
