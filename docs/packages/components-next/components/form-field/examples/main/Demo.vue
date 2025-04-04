<script setup lang="ts">
import { VcFormField } from '@wisemen/vue-core-components'
</script>

<template>
  <VcFormField
    :is-required="true"
    label="Label"
    hint="This is a hint."
    for="input-id"
  >
    <input
      id="input-id"
      class="border-primary p-xs rounded-md border border-solid"
    >
  </VcFormField>
</template>
