<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import SkeletonItem from '@/components/skeleton/SkeletonItem.vue'
import { injectTableContext } from '@/components/table/table.context'
import type { PaginationSet } from '@/types/pagination.type'

const tableContext = injectTableContext()

const { n, t } = useI18n()

const pagination = computed<PaginationSet>(() => tableContext.pagination.value.paginationOptions.value.pagination)

const offset = computed<number>(() => {
  if ('offset' in pagination.value) {
    return pagination.value.offset
  }

  throw new Error('This component only supports offset pagination')
})

const limit = computed<number>(() => tableContext.pagination.value.paginationOptions.value.pagination.limit)

const totalItems = computed<number>(() => (
  tableContext.data.value?.meta.total ?? 0
))

const startIndex = computed<number>(() => (offset.value * limit.value) + 1)

const endIndex = computed<number>(() => (
  Math.min((offset.value * limit.value) + limit.value, tableContext.data.value?.meta.total ?? 0)
))
</script>

<template>
  <SkeletonItem
    v-if="tableContext.isLoading.value"
    :should-shimmer="true"
    class="h-4 w-20"
  />

  <span
    v-else
    class="text-tertiary text-sm"
  >
    {{
      t('component.table.page_count', {
        startIndex: n(startIndex),
        endIndex: n(endIndex),
        totalItems: n(totalItems),
      })
    }}
  </span>
</template>
