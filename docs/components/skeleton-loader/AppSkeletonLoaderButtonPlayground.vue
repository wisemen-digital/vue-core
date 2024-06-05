<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { AppSkeletonLoaderButton } from '@wisemen/vue-core'
</script>

<template>
  <ComponentPlayground :controls="null">
    <template #default="{ values }">
      <div class="w-full bg-background p-4">
        <AppSkeletonLoaderButton
          v-bind="values"
        />
      </div>
    </template>
  </ComponentPlayground>
</template>
