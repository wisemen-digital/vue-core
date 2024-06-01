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
import { AppTable } from '@wisemen/vue-core'

const exampleData: PaginatedData<ExampleDataType> = {
  data: [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Doe' },
    { firstName: 'James', lastName: 'Doe' },
  ],
  total: 3
}

const exampleColumns: TableColumn<ExampleDataType>[] = [
  {
    id: 'firstName',
    label: 'First Name',
    size: 'auto',
    value: (row) => row.firstName,
  },
  {
    id: 'lastName',
    label: 'Last Name',
    size: '300px',
    value: (row) => row.lastName,
  }
]

const examplePagination: Pagination<ExampleFilters> = {
  ...
}

function onRowClick(row: ExampleDataType) {
  alert(`Row clicked: ${row.firstName} ${row.lastName}`)
}
</script>
  
<template>
  <AppTable
    title="Users"
    :data="exampleData"
    :columns="exampleColumns"
    :filters="[]"
    :pagination="examplePagination"
    :is-loading="false"
    :row-click="onRowClick"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/table/AppTable.vue).
