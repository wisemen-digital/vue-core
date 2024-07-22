<script setup lang="ts">
import { computed } from 'vue'

import AppSkeletonLoaderRow from '@/components/skeleton-loader/AppSkeletonLoaderRow.vue'
import { useSkeletonLoaderStyle } from '@/components/skeleton-loader/skeletonLoader.style'

const props = withDefaults(
  defineProps<{
  /**
   * The number of skeleton rows to show
   */
    rows?: number
  }>(),
  {
    rows: 3,
  },
)

const skeletonLoaderStyle = useSkeletonLoaderStyle()

const rowContainer = computed<string>(() => skeletonLoaderStyle.rowContainer())
</script>

<template>
  <div :class="rowContainer">
    <AppSkeletonLoaderRow
      v-for="i in props.rows"
      :key="i"
    />
  </div>
</template>
