<script setup lang="ts">
import AppBadge from '@/components/badge/AppBadge.vue'
import AppSkeletonLoaderRow from '@/components/skeleton-loader/AppSkeletonLoaderRow.vue'
import AppText from '@/components/text/AppText.vue'
import { toLocaleNumber } from '@/utils/number.util'

const props = defineProps<{
  isLoading: boolean
  title: string
  total: null | number
}>()
</script>

<template>
  <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
  <div class="border-b border-solid border-border px-6 py-4">
    <div class="flex items-center gap-x-2">
      <AppText
        class="font-medium"
        variant="subtitle"
      >
        {{ props.title }}
      </AppText>

      <AppBadge
        v-if="props.total !== null"
        class="mt-0.5"
      >
        {{ toLocaleNumber(props.total) }} items
      </AppBadge>

      <AppSkeletonLoaderRow
        v-else-if="props.isLoading"
        class="mt-1 w-20"
      />
    </div>
  </div>
</template>
