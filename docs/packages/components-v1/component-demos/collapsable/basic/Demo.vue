<script setup lang="ts">
import {
  VcButton,
  VcCollapsable,
} from '@wisemen/vue-core'
import { ref } from 'vue'

const isCollapsed = ref<boolean>(false)
</script>

<template>
  <div class="flex flex-col items-center">
    <VcButton
      class="mb-4"
      @click="isCollapsed = !isCollapsed"
    >
      Toggle
    </VcButton>
    <VcCollapsable v-model="model">
      <div v-if="!isCollapsed">
        <p class="text-sm">
          A very nice content
        </p>
        <div class="bg-secondary h-20 w-full rounded-sm" />
      </div>
    </VcCollapsable>
  </div>
</template>
