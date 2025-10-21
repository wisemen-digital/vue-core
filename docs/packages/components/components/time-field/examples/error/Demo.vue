<script setup lang="ts">
import { VcTimeField } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<string | null>(null)
</script>

<template>
  <VcTimeField
    v-model="value"
    :error-message="value !== null ? null : 'This field is required.'"
    :is-touched="true"
    class="w-52"
    label="Time"
  />
</template>
