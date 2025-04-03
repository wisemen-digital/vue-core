<script setup lang="ts">
import { VcNumberField } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<number | null>(null)
</script>

<template>
  <VcNumberField
    v-model="value"
    :min="0"
    :errors="value === null ? ['This field is required.'] : []"
    :is-touched="true"
    placeholder="Enter your age"
    label="Age"
    class="w-52"
  />
</template>
