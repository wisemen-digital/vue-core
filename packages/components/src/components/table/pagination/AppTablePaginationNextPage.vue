<script setup lang="ts">
import { PaginationNext } from 'reka-ui'
import { computed } from 'vue'

import AppIconButton from '@/components/button/icon-button/AppIconButton.vue'
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
  <PaginationNext :as-child="true">
    <slot :is-last-page="isLastPage">
      <AppIconButton
        :is-disabled="isLastPage"
        variant="secondary"
        size="sm"
        icon="chevronRight"
        label="Next page"
      />
    </slot>
  </PaginationNext>
</template>
