<script setup lang="ts">
import {
  AppButton,
  useDrawer,
} from '@wisemen/vue-core'

const drawer = useDrawer({
  component: () => import('./SimpleDrawer.vue'),
  shouldAnimateFromTrigger: true,
})
</script>

<template>
  <AppButton
    :id="drawer.triggerId"
    @click="drawer.open()"
  >
    Open drawer
  </AppButton>
</template>
