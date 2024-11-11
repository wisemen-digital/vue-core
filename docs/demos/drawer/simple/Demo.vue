<script setup lang="ts">
import {
  useDrawer,
  VcButton,
  VcDrawerContainer,
} from '@wisemen/vue-core'

const drawer = useDrawer({
  component: () => import('./SimpleDrawer.vue'),
})
</script>

<template>
  <!-- Make sure to bind the trigger id to the button for correct focus management -->
  <VcButton
    v-bind="drawer.triggerProps.value"
    @click="drawer.open()"
  >
    Open drawer
  </VcButton>

  <Teleport to="body">
    <VcDrawerContainer />
  </Teleport>
</template>
