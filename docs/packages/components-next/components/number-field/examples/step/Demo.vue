<script setup lang="ts">
import { VcNumberField } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<number | null>(30)
</script>

<template>
  <VcNumberField
    v-model="value"
    :step="5"
    placeholder="Enter your age"
    label="Age"
    class="w-52"
  />
</template>
