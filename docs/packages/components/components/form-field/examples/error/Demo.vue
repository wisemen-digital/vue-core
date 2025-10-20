<script setup lang="ts">
import { VcFormField } from '@wisemen/vue-core-components'
</script>

<template>
  <VcFormField
    :is-touched="true"
    error-message="This field is required."
    label="Label"
    for="custom-field"
  >
    /
  </VcFormField>
</template>
