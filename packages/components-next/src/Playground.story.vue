<script setup lang="ts">
import { ref } from 'vue'

import IconButton from '@/components/button/icon-button/IconButton.vue'

const isLoading = ref<boolean>(true)
</script>

<template>
  <Story title="Playground">
    <input
      v-model="isLoading"
      type="checkbox"
    >

    <IconButton
      :is-loading="isLoading"
      icon="plus"
      label="Button"
    />
  </Story>
</template>
