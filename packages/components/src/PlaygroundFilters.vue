<script setup lang="ts">
import { computed } from 'vue'

import Filters from '@/components/filters/Filters.vue'
import type { Filter } from '@/types/filter.type'

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
  const newVar: Filter<TestFilter>[] = [
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
      label: 'Customer status',
      type: 'multiselect',
    },
    {
      displayFn: (value: EmployeeStatus): string => value.toString(),
      icon: 'alertCircle',
      items: [
        {
          type: 'option',
          value: EmployeeStatus.ACTIVE,
        },
        {
          type: 'option',
          value: EmployeeStatus.INACTIVE,
        },
      ],
      key: 'employeeStatus',
      label: 'Employee status',
      type: 'select',
    },
  ]

  return newVar
})
</script>

<template>
  <Filters
    :filters="filters"
    :pagination="pagination"
  />
</template>
