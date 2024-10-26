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
    :id="drawer.triggerId"
    @click="drawer.open()"
  >
    Open drawer
  </AppButton>

  <AppDrawerContainer />
</template>
