<script setup lang="ts">
import { computed } from 'vue'

import AppPaginationNext from '@/components/pagination/AppPaginationNext.vue'
import AppPaginationPages from '@/components/pagination/AppPaginationPages.vue'
import AppPaginationPrev from '@/components/pagination/AppPaginationPrev.vue'
import AppPaginationResultIndicator from '@/components/pagination/AppPaginationResultIndicator.vue'
import AppPaginationRoot from '@/components/pagination/AppPaginationRoot.vue'
import { useTableStyle } from '@/components/table/table.style'
import type {
  Pagination,
} from '@/types/pagination.type'

const props = defineProps<{
  isLoading: boolean
  pagination: Pagination<unknown>
  total: null | number
}>()

const tableStyle = useTableStyle()

const footerClasses = computed<string>(() => tableStyle.footer())
</script>

<template>
  <div
    v-if="!props.isLoading"
    :class="footerClasses"
  >
    <AppPaginationRoot
      :pagination="props.pagination"
      :total="props.total ?? 0"
    >
      <AppPaginationResultIndicator />
      <AppPaginationPrev />
      <AppPaginationPages />
      <AppPaginationNext />
    </AppPaginationRoot>
  </div>
</template>
