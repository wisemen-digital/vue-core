<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { AppSkeletonLoaderRows } from '@wisemen/vue-core'

const controls = createControls({
  rows: {
    default: '4',
    cols: 2,
    label: 'Rows',
    type: 'text',
  },
})
</script>

<template>
  <ComponentPlayground :controls="controls">
    <template #default="{ values }">
      <div class="w-full bg-background p-4">
        <AppSkeletonLoaderRows
          :rows="+values.rows"
        />
      </div>
    </template>
  </ComponentPlayground>
</template>
