<script setup lang="ts">
import { VcNumberField } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<number | null>(0)
</script>

<template>
  <VcNumberField
    v-model="value"
    class="w-40"
  />
</template>
