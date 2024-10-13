<script setup lang="ts">
import { PaginationFirst } from 'reka-ui'
import { computed } from 'vue'

import AppIconButton from '@/components/button/icon-button/AppIconButton.vue'
import { injectTableContext } from '@/components/table/table.context.js'

const tableContext = injectTableContext()

const isFirstPage = computed<boolean>(() => (
  tableContext.pagination.value.paginationOptions.value.pagination.page === 0
))
</script>

<template>
  <PaginationFirst :as-child="true">
    <AppIconButton
      :is-disabled="isFirstPage"
      variant="secondary"
      size="sm"
      icon="chevronLeftDouble"
      label="First page"
    />
  </PaginationFirst>
</template>
