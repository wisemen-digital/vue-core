<script setup lang="ts">
import type { VNode } from 'vue'
import {
  computed,
  h,
  ref,
} from 'vue'

import TableCell from '@/components/table/parts/TableCell.vue'
import IdCell from '@/components/table/stories/IdCell.vue'
import type { TableColumn } from '@/components/table/table.type'
import Table from '@/components/table/Table.vue'
import { usePagination } from '@/composables/pagination/pagination.composable'
import type { PaginatedData } from '@/composables/pagination/pagination.type'

interface User {
  id: string
  name: string
}

const columns = computed<TableColumn<User>[]>(() => [
  {
    cell: (data): VNode => h(IdCell, { id: data.id }),
    headerLabel: 'ID',
    key: 'id',
  },
  {
    cell: (data): VNode => h(TableCell, () => data.name),
    headerLabel: 'Name',
    key: 'name',
    width: '15rem',
  },
  {
    cell: (): VNode => h(IdCell, { id: 'DEZE' }),
    headerLabel: 'Custom',
    key: 'iets',
    width: '10rem',
  },
  {
    cell: (): VNode => h(TableCell, () => 'hier nog iets'),
    headerLabel: 'Custom',
    key: 'sdssd',
    width: '20rem',
  },
  {
    isSortable: true,
    cell: (): VNode => h(TableCell, () => 'hier nog iets'),
    headerLabel: 'Custom',
    key: 'ieqskjdqkds',
    width: '30rem',
  },
])

const data = ref<PaginatedData<User> | null>(null)

const isLoading = ref<boolean>(true)

setTimeout(() => {
  isLoading.value = false

  data.value = {
    data: [],
    meta: {
      limit: 0,
      next: null,
      offset: 0,
      total: 0,
    },
  }

  // create mock data
  data.value = {
    data: [
      {
        id: '1',
        name: 'John Doe',
      },
      {
        id: '2',
        name: 'Jane Doe',
      },
      {
        id: '3',
        name: 'Jim Doe',
      },
      {
        id: '4',
        name: 'Jack Doe',
      },
      {
        id: '5',
        name: 'Jill Doe',
      },
      // {
      //   id: '6',
      //   name: 'Joe Doe',
      // },
      // {
      //   id: '7',
      //   name: 'Judy Doe',
      // },
      // {
      //   id: '8',
      //   name: 'Jake Doe',
      // },
      // {
      //   id: '9',
      //   name: 'Jess Doe',
      // },
      // {
      //   id: '10',
      //   name: 'Jasmine Doe',
      // },
      // {
      //   id: '11',
      //   name: 'Jordan Doe',
      // },
      // {
      //   id: '12',
      //   name: 'Jamie Doe',
      // },
      // {
      //   id: '13',
      //   name: 'Jules Doe',
      // },
      // {
      //   id: '14',
      //   name: 'Juno Doe',
      // },
      // {
      //   id: '15',
      //   name: 'Jasper Doe',
      // },
      // {
      //   id: '16',
      //   name: 'Jade Doe',
      // },
      // {
      //   id: '17',
      //   name: 'Jett Doe',
      // },
      // {
      //   id: '18',
      //   name: 'Jax Doe',
      // },
      // {
      //   id: '19',
      //   name: 'Joni Doe',
      // },
      // {
      //   id: '20',
      //   name: 'Joey Doe',
      // },
    ],
    meta: {
      limit: 20,
      next: null,
      offset: 0,
      total: 20,
    },
  }
}, 1000)

const pagination = usePagination({
  isRouteQueryEnabled: false,
  options: {
    filter: {
      hier: 'hier',
      nogIets: 'nog iets',
    },
  },
})
</script>

<template>
  <Story title="Table">
    <div class="px-4xl flex h-[500px] flex-col overflow-hidden">
      <Table
        :columns="columns"
        :is-loading="isLoading"
        :pagination="pagination"
        :is-first-column-sticky="true"
        :is-last-column-sticky="false"
        :data="data"
        :class-config="{
          row: 'border-0 odd:bg-secondary',
          root: 'border-0',
          headerCell: 'bg-primary',
          cell: 'group-hover/row:bg-secondary group-odd/row:bg-secondary',
        }"
        :row-action="{
          type: 'button',
          label: (row) => row.name,
          onClick: (row) => {
            console.log('row action', row)
          },
        }"
      />
    </div>
  </Story>
</template>
