<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { AppLoader } from '@wisemen/vue-core'

const controls = createControls(null)
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div class="size-20">
        <AppLoader v-bind="values" />
      </div>
    </template>
  </ComponentPlayground>
</template>
