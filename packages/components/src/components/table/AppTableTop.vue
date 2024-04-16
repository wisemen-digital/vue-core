<script setup lang="ts">
import { toLocaleNumber } from '../../utils/number.util'
import AppBadge from '../badge/AppBadge.vue'
import AppSkeletonLoaderRow from '../skeleton-loader/AppSkeletonLoaderRow.vue'
import AppText from '../text/AppText.vue'

const props = defineProps<{
  title: string
  total: null | number
}>()
</script>

<template>
  <div class="px-6 py-4">
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
        v-else
        class="mt-1 w-20"
      />
    </div>
  </div>
</template>
