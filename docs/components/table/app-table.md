---
sidebar: auto
---


# AppTable

<!-- @include: ./app-table-meta.md -->

## Types

::: code-group
```js [TableColumn]
interface BaseTableColumn {
  id: string
  isSortable?: boolean
  label: string
  size: string
}

interface TableColumnWithRender<TSchema> extends BaseTableColumn {
  render: (row: TSchema) => VNode
  value?: never
}

interface TableColumnWithValue<TSchema> extends BaseTableColumn {
  render?: never
  value: (row: TSchema) => string
}

export type TableColumn<TSchema> = TableColumnWithRender<TSchema> | TableColumnWithValue<TSchema>
```

```js [TableEmptyTextProp]
export interface TableEmptyTextProp {
  noData: {
    message: string
    title: string
  }
  noResults: {
    message: string
    title: string
  }
}
```

```js [PaginationFilter]
interface PaginationFilterBase<TFilters> {
  id: keyof TFilters
  isVisible?: boolean
  label: string
}
export interface PaginationFilterWithMultipleOptions<TFilters> extends PaginationFilterBase<TFilters> {
  displayFn: (value: string) => string
  options: ComboboxItem<string>[]
  placeholder: string
  type: 'multiselect'
}

export interface PaginationFilterWithSingleOption<TFilters> extends PaginationFilterBase<TFilters> {
  options: SelectItem<FilterValues>[]
  placeholder: string
  type: 'select'
}

export interface PaginationFilterBoolean<TFilters> extends PaginationFilterBase<TFilters> {
  type: 'boolean'
}

export interface PaginationFilterText<TFilters> extends PaginationFilterBase<TFilters> {
  placeholder: string
  type: 'text'
}

export interface PaginationFilterNumber<TFilters> extends PaginationFilterBase<TFilters> {
  max?: number
  min?: number
  placeholder: string
  suffix?: string
  type: 'number'
}

export type PaginationFilter<TFilters> =
  | PaginationFilterBoolean<TFilters>
  | PaginationFilterNumber<TFilters>
  | PaginationFilterText<TFilters>
  | PaginationFilterWithMultipleOptions<TFilters>
  | PaginationFilterWithSingleOption<TFilters>
```

```js [Pagination]
export interface UseTablePaginationReturnType<TFilters> {
  handleFilterChange: (event: FilterChangeEvent<TFilters>) => void
  handlePageChange: (event: PageChangeEvent) => void
  handleSortChange: (event: SortChangeEvent) => void
  paginationOptions: ComputedRef<PaginationOptions<TFilters>>
}

export type Pagination<TFilters> = UseTablePaginationReturnType<TFilters>
```
::: 


## Slots

| Slot name  | Type            | Description                                          |
| ---------- | --------------- | ---------------------------------------------------- |
| empty-state| none            | Override the Empty state overlay with custom content |


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppTable } from '@wisemen/vue-core'

interface ExampleFilters {
  firstName: string
}

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

const exampleFilters: PaginationFilter<ExampleFilters>[] = [
  {
    id: 'firstName',
    label: 'First name',
    type: 'text',
    placeholder: 'Search first name',
  },
]

function onRowClick(row: ExampleDataType) {
  alert(`Row clicked: ${row.firstName} ${row.lastName}`)
}
</script>
  
<template>
  <AppTable
    title="Users"
    :data="exampleData"
    :columns="exampleColumns"
    :filters="exampleFilters"
    :pagination="examplePagination"
    :is-loading="false"
    :row-click="onRowClick"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/table/AppTable.vue).
