<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppSkeletonItem from '@/components/skeleton/AppSkeletonItem.vue'
import { injectTableContext } from '@/components/table/table.context.js'

const tableContext = injectTableContext()

const { n, t } = useI18n()

const page = computed<number>(() => tableContext.pagination.value.paginationOptions.value.pagination.page)
const perPage = computed<number>(() => tableContext.pagination.value.paginationOptions.value.pagination.perPage)

const totalItems = computed<number>(() => (
  tableContext.data.value?.total ?? 0
))

const startIndex = computed<number>(() => (page.value * perPage.value) + 1)

const endIndex = computed<number>(() => (
  Math.min(
    (page.value * perPage.value) + perPage.value,
    tableContext.data.value?.total ?? 0,
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
      t('components.table.page_count', {
        startIndex: n(startIndex),
        endIndex: n(endIndex),
        totalItems: n(totalItems),
      })
    }}
  </span>
</template>
