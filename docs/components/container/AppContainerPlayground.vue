<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { AppContainer, AppText } from '@wisemen/vue-core'

const controls = null
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default>
      <AppContainer class="border border-solid border-primary">
        <AppText variant="body">
          Text inside the container
        </AppText>
      </AppContainer>
    </template>
  </ComponentPlayground>
</template>
