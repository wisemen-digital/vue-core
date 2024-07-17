<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { AppLoader } from '@wisemen/vue-core'

const controls = createControls({})
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <AppLoader v-bind="values" />
    </template>
  </ComponentPlayground>
</template>
