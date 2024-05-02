<script setup lang="ts">
import AppTable from '@/components/table/AppTable.vue';
import AppText from '@/components/text/AppText.vue';
import { PaginatedData, PaginationOptions, TableColumn } from '@/index';
import { FilterChangeEvent, PageChangeEvent, Pagination, SortChangeEvent } from '@/types/table.type';
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { title } from 'process';
import { computed } from 'vue';
import { ComputedRef } from 'vue';

const controls = createControls({
  title: {
    default: 'Table title',
    cols: 2,
    label: 'Title',
    type: 'text',
  },
  isInfiniteScroll: {
    default: false,
    cols: 2,
    label: 'Is infinite scroll',
    type: 'switch',
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
  }
})

interface ExampleDataType {
  firstName: string;
  lastName: string;
}
interface ExampleFilters {}

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
    size: '300px',
    value: (row: ExampleDataType) => row.firstName,
  },
  {
    id: 'lastName',
    label: 'Last Name',
    size: '300px',
    value: (row: ExampleDataType) => row.lastName,
  }
]

const paginationOptions = computed<PaginationOptions<ExampleFilters>>(() => ({
  pagination: {
    page: 0,
    perPage: 3,
  },
}))

const examplePagination: Pagination<ExampleFilters> = {
  paginationOptions: paginationOptions,
};

function onRowClick(row: ExampleDataType) {
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
        :pagination="examplePagination"
        :is-loading="false"
        :row-click="onRowClick"
      />
    </template>
  </ComponentPlayground>
</template>
