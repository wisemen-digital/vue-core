<script setup lang="ts">
import { computed } from 'vue'

import Filters from '@/components/filters/Filters.vue'
import type {
  Filter,
} from '@/types/filter.type'

import { usePagination } from './composables'

enum EmployeeStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

enum CustomerStatus {
  NOT_WORKING = 'not-working',
  WORKING = 'working',
}

interface TestFilter {
  customerStatus: CustomerStatus[]
  employeeStatus: EmployeeStatus
}

const pagination = usePagination<TestFilter>({
  isRouteQueryEnabled: false,
})

const filters = computed<Filter<TestFilter>[]>(() => {
  const values: Filter<TestFilter>[] = [
    {
      displayFn: (value: CustomerStatus): string => value.toString(),
      icon: 'alertCircle',
      items: [
        {
          type: 'option',
          value: CustomerStatus.NOT_WORKING,
        },
        {
          type: 'option',
          value: CustomerStatus.WORKING,
        },
      ],
      key: 'customerStatus',
      label: 'Empoyee status',
      type: 'multiselect',
    },
  ]

  return values
})
</script>

<template>
  <Filters
    :filters="filters"
    :pagination="pagination"
  />
</template>
