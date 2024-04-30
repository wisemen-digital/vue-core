<script setup lang="ts">
import { computed } from 'vue'

import type { PageChangeEvent, PaginationOptions } from '@/types/table.type'

import { toLocaleNumber } from '../../utils/number.util'
import AppSkeletonLoaderRow from '../skeleton-loader/AppSkeletonLoaderRow.vue'
import AppText from '../text/AppText.vue'
import AppTablePagination from './AppTablePagination.vue'

const props = defineProps<{
  isLoading: boolean
  paginationOptions: PaginationOptions<unknown>
  total: null | number
}>()

const emit = defineEmits<{
  page: [event: PageChangeEvent]
}>()

const currentPageFrom = computed<number>(() => {
  const { page, perPage } = props.paginationOptions.pagination

  return perPage * page + 1
})

const currentPageUntil = computed<number>(() => {
  const { page, perPage } = props.paginationOptions.pagination

  return Math.min(perPage * (page + 1), props.total ?? 0)
})

function handlePageEvent(event: PageChangeEvent): void {
  emit('page', event)
}
</script>

<template>
  <div class="sticky bottom-0 left-0 z-10 flex h-14 w-full items-center justify-between border-t border-solid border-border bg-background px-6 py-2">
    <AppSkeletonLoaderRow
      v-if="props.isLoading"
      class="w-20"
    />

    <AppText
      v-else-if="props.total !== null"
      variant="subtext"
    >
      {{ toLocaleNumber(currentPageFrom) }} -
      {{ toLocaleNumber(currentPageUntil) }} of
      {{ toLocaleNumber(props.total) }}
    </AppText>

    <AppSkeletonLoaderRow
      v-if="props.isLoading"
      class="w-24"
    />

    <AppTablePagination
      v-else-if="props.total !== null"
      :pagination-options="paginationOptions"
      :total="props.total"
      @page="handlePageEvent"
    />
  </div>
</template>
