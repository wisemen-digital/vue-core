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

const exampleData: ExampleDataType[] = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Doe' },
    { firstName: 'James', lastName: 'Doe' },
],

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

function onRowClick(row: ExampleDataType) {
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
