<script setup lang="ts">
import { PaginationLast } from 'reka-ui'
import { computed } from 'vue'

import AppIconButton from '@/components/button/icon-button/AppIconButton.vue'
import { injectTableContext } from '@/components/table/table.context.js'

const tableContext = injectTableContext()

const totalPages = computed<number>(() => (
  Math.ceil((tableContext.data.value?.total ?? 0)
    / tableContext.pagination.value.paginationOptions.value.pagination.perPage)
))

const isLastPage = computed<boolean>(() => (
  tableContext.pagination.value.paginationOptions.value.pagination.page
  === totalPages.value - 1
))
</script>

<template>
  <PaginationLast :as-child="true">
    <AppIconButton
      :is-disabled="isLastPage"
      variant="secondary"
      size="sm"
      icon="chevronRightDouble"
      label="Last page"
    />
  </PaginationLast>
</template>
