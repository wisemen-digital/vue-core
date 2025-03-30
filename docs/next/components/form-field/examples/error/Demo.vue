<script setup lang="ts">
import { VcFormField } from '@wisemen/vue-core-components'
</script>

<template>
  <VcFormField
    :errors="['This is an error message.']"
    :is-touched="true"
    label="Label"
  >
    /
  </VcFormField>
</template>
