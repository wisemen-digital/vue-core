<script setup lang="ts">
import { computed } from 'vue'

import { useSkeletonLoaderStyle } from '@/components/skeleton-loader/skeletonLoader.style'

const skeletonLoaderStyle = useSkeletonLoaderStyle()

const buttonClasses = computed<string>(() => skeletonLoaderStyle.button())
</script>

<template>
  <div :class="buttonClasses" />
</template>
