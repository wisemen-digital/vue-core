<script setup lang="ts">
import { VcDatePicker } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<Date | null>(null)
</script>

<template>
  <VcDatePicker
    v-model="value"
    :show-two-months="true"
    label="Example"
  />
</template>
