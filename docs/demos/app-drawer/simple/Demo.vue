<script setup lang="ts">
import {
  AppButton,
  AppDrawerContainer,
  useDrawer,
} from '@wisemen/vue-core'

const drawer = useDrawer({
  component: () => import('./SimpleDrawer.vue'),
})
</script>

<template>
  <!-- Make sure to bind the trigger id to the button for correct focus management -->
  <AppButton
    v-bind="drawer.triggerProps.value"
    @click="drawer.open()"
  >
    Open drawer
  </AppButton>

  <Teleport to="body">
    <AppDrawerContainer />
  </Teleport>
</template>
