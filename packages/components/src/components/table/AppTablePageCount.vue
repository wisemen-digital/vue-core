<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppSkeletonItem from '@/components/skeleton/AppSkeletonItem.vue'
import { injectTableContext } from '@/components/table/table.context'

const tableContext = injectTableContext()

const { n, t } = useI18n()

const offset = computed<number>(() => tableContext.pagination.value.paginationOptions.value.pagination.offset)
const limit = computed<number>(() => tableContext.pagination.value.paginationOptions.value.pagination.limit)

const totalItems = computed<number>(() => (
  tableContext.data.value?.meta.total ?? 0
))

const startIndex = computed<number>(() => (offset.value * limit.value) + 1)

const endIndex = computed<number>(() => (
  Math.min(
    (offset.value * limit.value) + limit.value,
    tableContext.data.value?.meta.total ?? 0,
  )
))
</script>

<template>
  <AppSkeletonItem
    v-if="tableContext.isLoading.value"
    :should-shimmer="true"
    class="h-4 w-20"
  />

  <span
    v-else
    class="text-sm text-tertiary"
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
