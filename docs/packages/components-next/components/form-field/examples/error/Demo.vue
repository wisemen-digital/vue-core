<script setup lang="ts">
import { VcFormField } from '@wisemen/vue-core-components'
</script>

<template>
  <VcFormField
    error-message="This field is required."
    :is-touched="true"
    label="Label"
    for=""
  >
    /
  </VcFormField>
</template>
