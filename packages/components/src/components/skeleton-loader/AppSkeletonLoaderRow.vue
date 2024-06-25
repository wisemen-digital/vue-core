<script setup lang="ts">
import { computed } from 'vue'

import { useSkeletonLoaderStyle } from '@/components/skeleton-loader/skeletonLoader.style'

const skeletonLoaderStyle = useSkeletonLoaderStyle()

const rowClasses = computed<string>(() => skeletonLoaderStyle.row())
</script>

<template>
  <div :class="rowClasses" />
</template>
