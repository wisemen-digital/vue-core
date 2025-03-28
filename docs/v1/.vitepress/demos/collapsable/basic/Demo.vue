<script setup lang="ts">
import { VcCollapsable, VcButton } from '@wisemen/vue-core'
import { ref } from 'vue';

const isCollapsed = ref<boolean>(false)
</script>

<template>
  <div class="flex flex-col items-center">
    <VcButton 
      @click="isCollapsed = !isCollapsed" 
      class="mb-4"
    >
      Toggle
    </VcButton>
    <VcCollapsable v-model="model">
      <div v-if="!isCollapsed">
        <p class="text-sm">A very nice content</p>
        <div class="bg-secondary rounded-sm w-full h-20"/>
      </div>
    </VcCollapsable>
  </div>
</template>