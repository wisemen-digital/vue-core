<script setup lang="ts">
import { AppPasswordField } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<null | string>(null)
</script>

<template>
  <AppPasswordField
    v-model="value"
    class="w-72"
  />
</template>
