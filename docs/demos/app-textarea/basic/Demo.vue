<script setup lang="ts">
import { AppTextarea } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<null | string>(null)
</script>

<template>
  <AppTextarea
    v-model="value"
    class="w-72"
  />
</template>
