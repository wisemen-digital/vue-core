<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type {
  PaginatedData,
  TableColumn,
} from '@wisemen/vue-core'
import {
  AppTable,
  AppText,
  usePagination,
} from '@wisemen/vue-core'
import { type Component, h } from 'vue'

import AppTableCollapsibleContent from './AppTableCollapsibleContent.vue'

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
  hasSearch: {
    type: 'switch',
    default: false,
    label: 'Has search',
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
  firstName: string
  invoices: {
    amount: number
    status: 'paid' | 'unpaid'
  }[]
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

function onExpandRow(row: ExampleDataType): Component | null | string {
  if (row.invoices.length === 0) {
    return null
  }

  return h(AppTableCollapsibleContent, {
    invoices: row.invoices,
    name: `${row.firstName} ${row.lastName}`,
  })
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
          :filters="[]"
          :pagination="pagination"
          :expanded-content="onExpandRow"
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
