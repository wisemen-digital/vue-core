<script setup lang="ts">
import { PaginationLast } from 'reka-ui'
import { computed } from 'vue'

import IconButton from '@/components/button/icon-button/IconButton.vue'
import { injectTableContext } from '@/components/table/table.context'

const tableContext = injectTableContext()

const totalPages = computed<number>(() => (
  Math.ceil((tableContext.data.value?.meta.total ?? 0)
    / tableContext.pagination.value.paginationOptions.value.pagination.limit)
))

const isLastPage = computed<boolean>(() => (
  tableContext.pagination.value.paginationOptions.value.pagination.offset
  === totalPages.value - 1
))
</script>

<template>
  <PaginationLast :as-child="true">
    <slot :is-last-page="isLastPage">
      <IconButton
        :is-disabled="isLastPage"
        variant="secondary"
        size="sm"
        icon="chevronRightDouble"
        label="Last page"
      />
    </slot>
  </PaginationLast>
</template>
