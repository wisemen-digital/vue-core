<script setup lang="ts">
import { PaginationPrev } from 'reka-ui'
import { computed } from 'vue'

import IconButton from '@/components/button/icon-button/IconButton.vue'
import { injectTableContext } from '@/components/table/table.context'
import type { PaginationSet } from '@/types/pagination.type'

defineSlots<{
  /**
   * Use this to render your own pagination control to go to the previous page.
   */
  default: ({
    isFirstPage,
  }: { isFirstPage: boolean }) => void
}>()

const tableContext = injectTableContext()

const pagination = computed<PaginationSet>(() => tableContext.pagination.value.paginationOptions.value.pagination)

const isFirstPage = computed<boolean>(() => {
  if ('offset' in pagination.value) {
    return pagination.value.offset === 0
  }

  throw new Error('This component only supports offset pagination')
})
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
