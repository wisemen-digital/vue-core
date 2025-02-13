<script setup lang="ts">
import { PaginationPrev } from 'reka-ui'
import { computed } from 'vue'

import IconButton from '@/components/button/icon-button/IconButton.vue'
import { injectTableContext } from '@/components/table/table.context'

defineSlots<{
  /**
   * Use this to render your own pagination control to go to the previous page.
   */
  'default': ({isFirstPage}: { isFirstPage: boolean }) => void
}>()


const tableContext = injectTableContext()

const isFirstPage = computed<boolean>(() => (
  tableContext.pagination.value.paginationOptions.value.pagination.offset === 0
))
</script>

<template>
  <PaginationPrev :as-child="true">
    <slot :is-first-page="isFirstPage">
      <IconButton
        :is-disabled="isFirstPage"
        variant="secondary"
        size="sm"
        icon="chevronLeft"
        label="Previous page"
      />
    </slot>
  </PaginationPrev>
</template>
