<script setup lang="ts">
import { ref } from 'vue'

import Dialog from '@/packages/@next/dialog/Dialog.vue'

const isLarge = ref<boolean>(true)
</script>

<template>
  <Dialog @click="isLarge = !isLarge">
    <div
      v-if="isLarge"
      class="w-140 h-80"
    />
    <div
      v-else
      class="w-96 h-40"
    />
  </Dialog>
</template>
