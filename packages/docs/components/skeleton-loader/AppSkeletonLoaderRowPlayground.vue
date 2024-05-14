<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'

import AppSkeletonLoaderRow from '@/components/skeleton-loader/AppSkeletonLoaderRow.vue'
</script>

<template>
  <ComponentPlayground :controls="null">
    <template #default="{ values }">
      <div class="w-full bg-background p-4">
        <AppSkeletonLoaderRow
          v-bind="values"
        />
      </div>
    </template>
  </ComponentPlayground>
</template>
