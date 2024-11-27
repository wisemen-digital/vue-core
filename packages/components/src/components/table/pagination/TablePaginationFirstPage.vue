<script setup lang="ts">
import { PaginationFirst } from 'reka-ui'
import { computed } from 'vue'

import IconButton from '@/components/button/icon-button/IconButton.vue'
import { injectTableContext } from '@/components/table/table.context'

const tableContext = injectTableContext()

const isFirstPage = computed<boolean>(() => (
  tableContext.pagination.value.paginationOptions.value.pagination.offset === 0
))
</script>

<template>
  <PaginationFirst :as-child="true">
    <slot :is-first-page="isFirstPage">
      <IconButton
        :is-disabled="isFirstPage"
        variant="secondary"
        size="sm"
        icon="chevronLeftDouble"
        label="First page"
      />
    </slot>
  </PaginationFirst>
</template>
