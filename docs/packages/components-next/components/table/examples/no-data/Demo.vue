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

const fakePaginatedData = ref<PaginatedData<User> | null>(null)

const isLoading = ref<boolean>(true)

const pagination = usePagination({
  isRouteQueryEnabled: false,
})

const columns = computed<TableColumn<User>[]>(() => [
  {
    key: 'id',
    headerLabel: 'ID',
    cell: (data): VNode => h(VcTableCell, {
      class: 'justify-center',
    }, () => data.id),
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
    data: [],
    meta: {
      total: 0,
      limit: 20,
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
    class="max-h-140 w-full"
  />
</template>
