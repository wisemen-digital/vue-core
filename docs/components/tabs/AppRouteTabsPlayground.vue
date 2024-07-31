<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { AppText } from '@wisemen/vue-core'

const controls = null
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default>
      <AppText
        variant="subtext"
      >
        This component isn't available in the playground. Please refer to the Code usage.
      </AppText>
    </template>
  </ComponentPlayground>
</template>
