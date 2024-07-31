<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import type { PaginationFilter } from '@wisemen/vue-core'
import {
  AppTableFiltersPopover,
  usePagination,
} from '@wisemen/vue-core'

const controls = null

interface ExampleFilters {
  hasDriversLicense: boolean
  firstName: string
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

const filters: PaginationFilter<ExampleFilters>[] = [
  {
    id: 'firstName',
    label: 'First name',
    type: 'text',
    placeholder: 'Search first name',
  },
  {
    id: 'hasDriversLicense',
    label: 'Has drivers license?',
    type: 'boolean',
  },
]
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default>
      <AppTableFiltersPopover
        :filters="filters"
        :pagination="pagination"
      />
    </template>
  </ComponentPlayground>
</template>
