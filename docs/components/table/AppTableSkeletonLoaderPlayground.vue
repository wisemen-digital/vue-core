<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { AppTableSkeletonLoader } from '@wisemen/vue-core'

const controls = createControls({
  numberOfRows: {
    default: '4',
    cols: 2,
    label: 'Number of rows',
    type: 'text',
  },
  withoutHeader: {
    default: false,
    label: 'Without header',
    type: 'switch',
  },
})
</script>

<template>
  <ComponentPlayground :controls="controls">
    <template #default="{ values }">
      <div class="w-full rounded-xl border border-solid border-border bg-background p-4">
        <AppTableSkeletonLoader
          v-bind="values"
          :number-of-rows="+values.numberOfRows"
        />
      </div>
    </template>
  </ComponentPlayground>
</template>
