<script setup lang="ts">
import {
  AppDrawer,
  AppDrawerCloseButton,
  AppDrawerDescription,
  AppDrawerTitle,
} from '@wisemen/vue-core'
</script>

<template>
  <AppDrawer>
    <div class="relative w-[500px] p-8">
      <AppDrawerCloseButton class="!absolute right-4 top-4" />

      <AppDrawerTitle>
        <h1 class="text-2xl font-bold text-primary">
          Drawer title
        </h1>
      </AppDrawerTitle>

      <AppDrawerDescription>
        <p class="mt-md text-tertiary">
          This is a description of the drawer.
        </p>
      </AppDrawerDescription>
    </div>
  </AppDrawer>
</template>
