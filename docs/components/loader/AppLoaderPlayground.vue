<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { AppLoader } from '@wisemen/vue-core'

const controls = null
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
