<script setup lang="ts">
import type {
  PaginatedData,
  TableColumn,
} from '@wisemen/vue-core-components'
import {
  usePagination,
  VcTable,
  VcTableCell,
} from '@wisemen/vue-core-components'
import type { VNode } from 'vue'
import {
  computed,
  h,
  ref,
} from 'vue'

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
}

const data: User[] = [
  {
    id: '1',
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
  },
  {
    id: '2',
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bob.smith@example.com',
  },
  {
    id: '3',
    firstName: 'Carol',
    lastName: 'Taylor',
    email: 'carol.taylor@example.com',
  },
  {
    id: '4',
    firstName: 'David',
    lastName: 'Brown',
    email: 'david.brown@example.com',
  },
  {
    id: '5',
    firstName: 'Eve',
    lastName: 'Davis',
    email: 'eve.davis@example.com',
  },
  {
    id: '6',
    firstName: 'Frank',
    lastName: 'Miller',
    email: 'frank.miller@example.com',
  },
  {
    id: '7',
    firstName: 'Grace',
    lastName: 'Wilson',
    email: 'grace.wilson@example.com',
  },
  {
    id: '8',
    firstName: 'Hank',
    lastName: 'Moore',
    email: 'hank.moore@example.com',
  },
  {
    id: '9',
    firstName: 'Ivy',
    lastName: 'Clark',
    email: 'ivy.clark@example.com',
  },
  {
    id: '10',
    firstName: 'Jack',
    lastName: 'Anderson',
    email: 'jack.anderson@example.com',
  },
]

const fakePaginatedData = ref<PaginatedData<User> | null>(null)

const isLoading = ref<boolean>(true)

const pagination = usePagination({ isRouteQueryEnabled: false })

const columns = computed<TableColumn<User>[]>(() => [
  {
    key: 'id',
    headerLabel: 'ID',
    cell: (data): VNode => h(VcTableCell, { class: 'justify-center' }, () => data.id),
  },
  {
    key: 'firstName',
    headerLabel: 'First Name',
    cell: (data): VNode => h(VcTableCell, () => data.firstName),
  },
  {
    key: 'lastName',
    headerLabel: 'Last Name',
    cell: (data): VNode => h(VcTableCell, () => data.lastName),
  },
  {
    key: 'email',
    headerLabel: 'Email',
    cell: (data): VNode => h(VcTableCell, () => data.email),
  },
])

setTimeout(() => {
  isLoading.value = false

  fakePaginatedData.value = {
    data,
    meta: {
      total: data.length,
      limit: data.length,
      next: null,
      offset: 0,
    },
  }
}, 1000)
</script>

<template>
  <VcTable
    :pagination="pagination"
    :columns="columns"
    :data="fakePaginatedData"
    :is-first-column-sticky="true"
    :is-loading="isLoading"
    :class-config="{
      row: 'border-0 hover:bg-secondary',
      headerCell: 'bg-primary',
      root: 'border-0',
      cell: 'group-hover/row:bg-secondary',
    }"
    class="max-h-140 w-full"
  />
</template>
