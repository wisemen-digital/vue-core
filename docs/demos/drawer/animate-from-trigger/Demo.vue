<script setup lang="ts">
import {
  useDrawer,
  VcButton,
} from '@wisemen/vue-core'

const drawer = useDrawer({
  component: () => import('./SimpleDrawer.vue'),
  shouldAnimateFromTrigger: true,
})
</script>

<template>
  <VcButton
    v-bind="drawer.triggerProps.value"
    @click="drawer.open()"
  >
    Open drawer
  </VcButton>
</template>
