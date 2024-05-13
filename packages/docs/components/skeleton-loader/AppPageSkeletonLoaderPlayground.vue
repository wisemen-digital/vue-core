<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'

import AppPageSkeletonLoader from '@/components/skeleton-loader/AppPageSkeletonLoader.vue'
</script>

<template>
  <ComponentPlayground :controls="null">
    <template #default="{ values }">
      <AppPageSkeletonLoader
        class="w-full"
        v-bind="values"
      />
    </template>
  </ComponentPlayground>
</template>
