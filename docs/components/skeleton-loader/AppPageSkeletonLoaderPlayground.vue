<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { AppPageSkeletonLoader } from '@wisemen/vue-core'
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
