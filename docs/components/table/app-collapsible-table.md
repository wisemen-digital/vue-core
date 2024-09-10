---
sidebar: auto
---


# AppCollapsibleTable
<script setup>
import AppCollapsibleTablePlayground from './AppCollapsibleTablePlayground.vue'
</script>

<AppCollapsibleTablePlayground />

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
  invoices: {
    amount: number,
    status: 'paid' | 'unpaid'
  }[]
  firstName: string
  lastName: string
}

interface ExampleFilters {}

const exampleData: PaginatedData<ExampleDataType> = {
  data: [
    { firstName: 'John',
      lastName: 'Doe',
      invoices: [
        { amount: 100, status: 'paid' },
        { amount: 200, status: 'unpaid' },
      ] },
    { firstName: 'Jane',
      lastName: 'Doe',
      invoices: [
        { amount: 50, status: 'paid' },
      ] },
    { firstName: 'James',
      lastName: 'Doe',
      invoices: [] },
  ],
  total: 22,
}

const exampleColumns: TableColumn<ExampleDataType>[] = [
  {
    id: 'firstName',
    label: 'First Name',
    isSortable: true,
    width: 'auto',
    value: (row) => row.firstName,
  },
  {
    id: 'lastName',
    label: 'Last Name',
    width: '300px',
    value: (row) => row.lastName,
  },
]

const examplePagination = usePagination<ExampleFilters>({
  id: 'example',
  disableRouteQuery: true,
  defaultPaginationOptions: {
    pagination: {
      page: 0,
      perPage: 10,
    },
  },
})

function onExpandRow(row: ExampleDataType): Component {
  return h(AppTableCollapsibleContent, {
    invoices: row.invoices,
    name: `${row.firstName} ${row.lastName}`,
  })
}
</script>

<template>
  <AppTable 
    :is-loading="false" 
    :data="localPagination.data.value" 
    :columns="exampleColumns"
    :filters="[]"
    :pagination="examplePagination"
    :expanded-content="onExpandRow"
    title="Table"
  />
</template>
```
```vue [AppTableCollapsibleContent]
<script setup lang="ts">
import { AppText } from '@wisemen/vue-core'

const props = defineProps<{
  name: string
  invoices: {
    amount: number
    status: 'paid' | 'unpaid'
  }[]
}>()
</script>

<template>
  <div
    v-if="invoices.length"
    class="flex w-full flex-col gap-1.5"
  >
    <div
      v-for="(invoice, i) in props.invoices"
      :key="i"
      class="w-full rounded-lg bg-gray-100 p-2"
    >
      <AppText variant="subtext">
        {{ `${props.name} ${invoice.status === 'paid' ? 'has paid' : 'has not paid'} their invoice with a value of ${invoice.amount}euros` }}
      </AppText>
    </div>
  </div>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/table/AppTable.vue).
