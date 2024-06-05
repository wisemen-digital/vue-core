---
sidebar: auto
---


# AppTable
<script setup>
import AppTablePlayground from './AppTablePlayground.vue'
</script>

<AppTablePlayground />


## Props

| Prop                 | Type                                                  | Description                                       | Default    |
|----------------------|-------------------------------------------------------|---------------------------------------------------|------------|
| title*               | `string`                                              | The title of the table.                           |            |
| data*                | `PaginatedData<TSchema>` \|  `null`                   | The data for the table, in paginated form.        |            |
| columns*             | `TableColumn<TSchema>[]`                              | The different columns to be displayed.            |            |
| filters*             | `TableFilter<TFilters>[]`                             | Determines how the data will be filtered.         |            |
| pagination*          | `Pagination<TFilters>`                                | The pagination options.                           |            |
| isLoading*           | `boolean`                                             | Whether the data is loading.                      |            |
| rowClick             | `((row: TSchema) => void)` \| `null`                  | Returns the row as a button.                      | `null`     |
| rowTo                | `((row: TSchema) => RouteLocationNamedRaw)` \| `null` | Returns the row as a RouterLink                   | `null`     |
| rowTarget            | `string` \| `undefined`                               | Adds a target to the RouterLink when using row-to | `undefined` |
| isTopHidden          | `boolean` \| `undefined`                              | Hides the top of the table when set to true       | `false`    |
| shouldPinFirstColumn | `boolean` \| `undefined`                              | Whether the first column of the table is pinned.  | `false`    |
| shouldPinLastColumn  | `boolean` \| `undefined`                              | Whether the last column of the table is pinned.   | `false`    |


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

```js [TableFilter]
interface TableFilterBase<TFilters> {
  id: keyof TFilters
  label: string
}

export interface TableFilterWithOptions<TFilters> extends TableFilterBase<TFilters> {
  options: { label: string, value: string }[]
  type: 'multiselect' | 'select'
}

export interface TableFilterBoolean<TFilters> extends TableFilterBase<TFilters> {
  type: 'boolean'
}

export interface TableFilterText<TFilters> extends TableFilterBase<TFilters> {
  type: 'text'
}

export type TableFilter<TFilters> =
  | TableFilterBoolean<TFilters>
  | TableFilterText<TFilters>
  | TableFilterWithOptions<TFilters>
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
