<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import {
  AppUnstyledButton,
} from '@wisemen/vue-core'

const controls = null
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default>
      <AppUnstyledButton>
        Unstyled button
      </AppUnstyledButton>
    </template>
  </ComponentPlayground>
</template>
