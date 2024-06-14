<script setup lang="ts">
import AppPaginationNext from '@/components/pagination/AppPaginationNext.vue'
import AppPaginationPages from '@/components/pagination/AppPaginationPages.vue'
import AppPaginationPrev from '@/components/pagination/AppPaginationPrev.vue'
import AppPaginationResultIndicator from '@/components/pagination/AppPaginationResultIndicator.vue'
import AppPaginationRoot from '@/components/pagination/AppPaginationRoot.vue'
import type {
  Pagination,
} from '@/types/pagination.type'

const props = defineProps<{
  isLoading: boolean
  pagination: Pagination<unknown>
  total: null | number
}>()
</script>

<template>
  <div
    v-if="!props.isLoading"
    class="sticky bottom-0 left-0 z-10 flex h-14 w-full items-center justify-between border-t border-solid border-border bg-background px-6 py-2"
  >
    <AppPaginationRoot
      :pagination="props.pagination"
      :total="props.total ?? 0"
    >
      <AppPaginationResultIndicator />

      <div class="flex items-center gap-x-2">
        <AppPaginationPrev />
        <AppPaginationPages />
        <AppPaginationNext />
      </div>
    </AppPaginationRoot>
  </div>
</template>
