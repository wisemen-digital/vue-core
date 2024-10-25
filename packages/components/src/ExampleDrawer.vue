<script setup lang="ts">
import AppDrawer from '@/components/drawer/AppDrawer.vue'
import AppDrawerCloseButton from '@/components/drawer/AppDrawerCloseButton.vue'
import AppDrawerDescription from '@/components/drawer/AppDrawerDescription.vue'
import AppDrawerTitle from '@/components/drawer/AppDrawerTitle.vue'
</script>

<template>
  <AppDrawer>
    <div class="w-[500px]">
      <AppDrawerTitle>
        <h1>Title</h1>
      </AppDrawerTitle>

      <AppDrawerDescription>
        <p>Description</p>
      </AppDrawerDescription>

      <AppDrawerCloseButton />
    </div>
  </AppDrawer>
</template>
