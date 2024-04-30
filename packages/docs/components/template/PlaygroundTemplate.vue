<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'

const controls = createControls({
  // define controls
})
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <!-- <template #default="{ values }">
      // RENDER THE COMPONENT
    </template> -->
  </ComponentPlayground>
</template>
