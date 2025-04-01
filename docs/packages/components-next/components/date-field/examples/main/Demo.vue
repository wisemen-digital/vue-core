<script setup lang="ts">
import { VcDateField } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<Date | null>(null)
</script>

<template>
  <VcDateField
    v-model="value"
    class="w-52"
    label="Select a date"
  />
</template>
