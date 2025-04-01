<script setup lang="ts">
import { VcTextarea } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <div class="flex flex-col gap-8xl w-full">
    <VcTextarea
      v-model="value"
      resize="vertical"
      label="Vertical"
      placeholder="Enter your message here"
    />

    <VcTextarea
      v-model="value"
      resize="horizontal"
      label="Horizontal"
      placeholder="Enter your message here"
    />

    <VcTextarea
      v-model="value"
      resize="both"
      label="Both"
      placeholder="Enter your message here"
    />

    <VcTextarea
      v-model="value"
      resize="auto-vertical"
      label="Auto vertical"
      placeholder="Enter your message here"
    />

    <VcTextarea
      v-model="value"
      resize="none"
      label="None"
      placeholder="Enter your message here"
      class="w-full"
    />
  </div>
</template>
