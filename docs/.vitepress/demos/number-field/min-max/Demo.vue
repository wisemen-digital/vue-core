<script setup lang="ts">
import { VcNumberField } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<number | null>(0)
</script>

<template>
  <VcNumberField
    v-model="value"
    :min="0"
    :max="10"
    class="w-40"
  />
</template>
