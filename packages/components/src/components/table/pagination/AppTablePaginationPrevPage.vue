<script setup lang="ts">
import { PaginationPrev } from 'reka-ui'
import { computed } from 'vue'

import AppIconButton from '@/components/button/icon-button/AppIconButton.vue'
import { injectTableContext } from '@/components/table/table.context'

const tableContext = injectTableContext()

const isFirstPage = computed<boolean>(() => (
  tableContext.pagination.value.paginationOptions.value.pagination.offset === 0
))
</script>

<template>
  <PaginationPrev :as-child="true">
    <slot :is-first-page="isFirstPage">
      <AppIconButton
        :is-disabled="isFirstPage"
        variant="secondary"
        size="sm"
        icon="chevronLeft"
        label="Previous page"
      />
    </slot>
  </PaginationPrev>
</template>
