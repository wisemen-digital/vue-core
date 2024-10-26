<script setup lang="ts">
import { AppNumberField } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<null | number>(0)
</script>

<template>
  <AppNumberField
    v-model="value"
    class="w-40"
  />
</template>
